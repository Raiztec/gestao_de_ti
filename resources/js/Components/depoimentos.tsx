import { PropsWithChildren } from "react"
import Icone from "./icones"

export default function Depoimentos(){
    return(
        <div className="bg-primary lg:-mx-14 lg:p-10 p-8 pattern">
            <div className="text-white space-y-8">
                <h1 className="font-bold text-4xl">Depoimentos</h1>
                <p className="text-lg font-bold">Saiba o que nossos clientes falam de nossos serviços</p>
            </div>
            <div className="flex lg:gap-10 gap-6 lg:flex-row flex-col my-6">
                <CardDepoimento cliente="Daniel Felix" texto="Exelente experiência, muito bom atendimento, serviço foi entregue rápido e valor super justo, dão garantia e mesmo após ser entregue o meu notbook, ainda continuaram sendo atenciosos e perguntando se esta tudo certo. muito satisfeito, supe indico!!"/>
                <CardDepoimento cliente="Daniel Felix" texto="Exelente experiência, muito bom atendimento, serviço foi entregue rápido e valor super justo, dão garantia e mesmo após ser entregue o meu notbook, ainda continuaram sendo atenciosos e perguntando se esta tudo certo. muito satisfeito, supe indico!!"/>
            </div>
        </div>
    )
}

export function CardDepoimento({cliente, texto}: PropsWithChildren<{cliente: string, texto:string }>){
    return(
        <div className="lg:w-2/4 w-full bg-white rounded-xl p-6 space-y-6">
            <h1 className="font-bold text-xl">{cliente}</h1>
            <p>{texto}</p>
            <div className="flex gap-2 justify-center items-center">
                <Icone.star/>
                <Icone.star/>
                <Icone.star/>
                <Icone.star/>
                <Icone.star/>
            </div>
        </div>
    )
}