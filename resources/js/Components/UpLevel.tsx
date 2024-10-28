import { PropsWithChildren } from "react"
import Icone from "./icones"


export default function UpLevel(){
    return (
        <div className="mx-auto relative my-10" >
            <div className="flex gap-10 flex-col lg:flex-row items-center">
                <div className="bg-primary w-2 lg:w-full h-full lg:h-2 self-center absolute -z-10"></div>

                <CardElement icone="call">Atendimento completo em TI</CardElement>
                <div className="bg-primary block w-10 h-10 self-center rounded-full"></div>
                <CardElement icone="doc">Análise e Documentação</CardElement>
                <div className="bg-primary block w-10 h-10 self-center rounded-full"></div>
                <CardElement icone="profile_doc">Relátorio Mensal</CardElement>
                <div className="bg-primary block w-10 h-10 self-center rounded-full"></div>
                <CardElement icone="up">Plano Anual de Melhorias</CardElement>
            </div>
        </div>
    )
}



export function CardElement({icone, children}: PropsWithChildren<{icone:string}>){
    const url = '/image/icones/up/' + icone + '.svg';
    return(
        <div className="bg-[#FFF] lg:w-1/4 w-3/4 rounded-lg drop-shadow-2xl shadow-black flex flex-1 items-center flex-col p-8 gap-4 ">
            <div>
                <img src={url} alt={icone} />
            </div>
            <div className="text-center font-bold text-lg text-black">{children}</div>
        </div>
    )
}