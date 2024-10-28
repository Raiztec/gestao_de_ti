<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\Validated;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\Mail;

class contatoController extends Controller
{
    public function send(Request $request) 
    {
        $validate = $request->validate(
            [
                'name' => 'required',
                'company' => 'required',
                'email' => 'required|email',
                'phone' => 'required',
                'collaborators' => 'required',
            ]
        );

        try {    
            // Atrs
            $name = $request->name;
            $company = $request->company;
            $email = $request->email;
            $phone = $request->phone;
            $collaborators = $request->collaborators;
            // Base mensagem
            $message = "Contato de {$name} da empresa {$company}.";
            $data = array(
                'name' => $name, 
                'body' => $message, 
                'phone' => $phone, 
                'email' => $email, 
                'collaborators' => $collaborators,
                'data' => Date('d/m/Y')
            );
            Mail::send('arquivos.email', $data, function($message) use ($name, $phone, $email, $collaborators){
                $message->to('contato@raiztec.com.br', 'Messageiro')
                    ->subject('Contato do site Gestão em TI');
                $message->from('contato@raiztec.com.br', $name);
            });
            Mail::send('arquivos.email_cli', $data, function($message) use ($name, $phone, $email, $collaborators){
                $message->to($email, $name)
                    ->subject('Contato do site Gestão em TI');
                $message->from('contato@raiztec.com.br', 'Contato Raiztec');
            });
            return response(['status' => 'success', 'atr' => $message ,'code' => 200]);        
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
