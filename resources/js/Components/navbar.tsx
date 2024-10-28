import { Link } from "@inertiajs/react";
import { useState, useEffect } from "react";
import ApplicationLogo from "./ApplicationLogo";
import Botao from "./Botao";

const Navbar = () => {
    const [page, setPage] = useState('Raiztec');
    const [windowsWidth, setwindowsWidth] = useState(0);

    useEffect(() => {
        document.title = page;

        setwindowsWidth(window.innerWidth);
    });

    return (
        <nav className={ windowsWidth >= 1024 ?  'bg-primary w-full h-28 lg:h-32 flex flex-row justify-around items-center bg-slate-400 px-20 lg:bg-transparent' : 'bg-primary pattern w-full h-28 lg:h-32 flex flex-row justify-around items-center bg-slate-400 px-20 lg:transparent'} > 
            <div className="flex-1 w-1/4 h-full flex items-center">
            {
                windowsWidth >= 1024 ?
                <ApplicationLogo /> :
                <ApplicationLogo.white />
            }
                
            </div>
            <div className="flex-1 items-center justify-center w-full h-full px-10 hidden lg:flex">
                <div className="flex-1 flex items-center justify-center flex-row gap-6 w-full">
                    <Link href="/" className="text-white">Home</Link>
                    <Link href="/#Servicos" className="text-white" onClick={() => setPage('Serviço')}>Serviços</Link>
                    <Link href="https://loja.raiztec.com.br/" className="text-white" onClick={()=>setPage('Redirecionando para nossa Loja')}>Loja</Link>
                    <Link href="/#contact" className="text-white" onClick={()=>setPage('Contato')}>Contato</Link>
                </div>
                <div className="hidden xl:flex">
                    <Botao.navbar url="/#contact">Entre em contato</Botao.navbar>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;