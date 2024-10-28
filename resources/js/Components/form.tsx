import axios from "axios"
import { send } from "process";
import { useState } from "react"

function FormNewsLatter (){

    const [values, setValue] = useState({ 
        name: '', 
        company: '', 
        email: '', 
        phone: '', 
        collaborators: '' 
    });

    function handleInput(e:any) {
        e.preventDefault()
        const name = e.target.name;
        const value = e.target.value;
        setValue({ ...values, [name]: value })
    }

    async function sendEmail(e:any) {
        try {
            e.preventDefault()
            let data = await axios.post('http://192.168.15.8/send', values);
            setValue({name: '', company: '', email: '', phone: '', collaborators: ''});
            alert(data.data.atr);    
        } catch (error) {
            alert(error);
        }
        
    }

    return (
        <div id="contact">
            <div className="m-8">
                <h3 className="text-center font-bold text-2xl">Não perca mais tempo com <span className="text-primary">problemas técnicos!</span></h3>
            </div>
            <div className="bg-primary pattern w-3/4 mx-auto text-white rounded-lg">
                <form className="py-10" onSubmit={sendEmail}>
                    <div className="grid lg:grid-cols-2 lg:gap-10 gap-6 lg:p-10 px-10 ">
                        <div className="w-full flex flex-col flex-1  gap-4">
                            <label htmlFor="name" className="font-extrabold">Nome Responsável:</label>
                            <input type="text" name="name" id="name" className="border-0 ring-0 rounded-md text-black" onChange={handleInput} value={values.name} required/>
                        </div>
                        <div className="w-full flex flex-col flex-1  gap-4">
                            <label htmlFor="company" className="font-extrabold">Nome da empresa:</label>
                            <input type="text" name="company" id="company" className="border-0 ring-0 rounded-md text-black" onChange={handleInput} value={values.company} required/>
                        </div>
                        <div className="w-full flex flex-col flex-1  gap-4">
                            <label htmlFor="email" className="font-extrabold">E-mail  Corporativo:</label>
                            <input type="text" name="email" id="email" className="border-0 ring-0 rounded-md text-black" onChange={handleInput} value={values.email} required/>
                        </div>
                        <div className="w-full flex flex-col flex-1  gap-4">
                            <label htmlFor="phone" className="font-extrabold">Telefone/Celular:</label>
                            <input type="text" name="phone" id="phone" className="border-0 ring-0 rounded-md text-black" onChange={handleInput} value={values.phone} required/>
                        </div>
                        <div className="w-full flex flex-col flex-1  gap-4">
                            <label htmlFor="collaborators" className="font-extrabold">Quantidade de colaboradores:</label>
                            <input type="number" name="collaborators" id="collaborators" className="border-0 ring-0 rounded-md text-black" onChange={handleInput} value={values.collaborators} required/>
                        </div>
                    </div>
                    <div className="w-full flex">
                        <button type="submit" className="mx-auto my-10 px-12 py-4 bg-white text-black"> Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default FormNewsLatter