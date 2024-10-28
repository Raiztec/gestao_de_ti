import ApplicationLogo from "./ApplicationLogo";
import { Link } from "@inertiajs/react";


export default function Footer() {
    return(
        <footer className="flex justify-between items-start px-40 py-20 gap-20 w-full">
            <div className="flex flex-col gap-10 lg:gap-6 items-center">
                <ApplicationLogo />
                <div id="Social" className="flex gap-6 items-center">
                    <Link href="https://www.linkedin.com/company/raiztec/"><img src="./image/icones/social/linkedIn.svg" alt="LinkedIn" width={30} height={30}/></Link>
                    <Link href="https://www.instagram.com/raiztec/"><img src="./image/icones/social/instagram.svg" alt="Instagram" width={30} height={30} /></Link>
                    <Link href="https://www.youtube.com/@raiztec"><img src="./image/icones/social/youtube.svg" alt="Youtube" width={30} height={30} /></Link>
                    <Link href="https://www.tiktok.com/@raiztec"><img src="./image/icones/social/tiktok.svg" alt="Tik Tok" width={30} height={30} /></Link>
                </div>
            </div>
            <div className="space-y-4 hidden lg:block">
                <h1 className="font-bold text-xl">Links Rápidos</h1>
                <div className="flex flex-col gap-2">
                    <Link href="#Servicos">Serviços</Link>
                    <a href="https://raiztec.com.br/quemsomos">Sobre nós</a>
                    <Link href="https://raiztec.com.br/Politica-e-privacidade">Política de Privacidade</Link>
                </div>
            </div>
            <div className="space-y-4 hidden lg:block">
                <h1 className="font-bold text-xl">Informações de contato</h1>
                <a href="https://maps.app.goo.gl/PuPQyFCw8J3MM98WA" className="flex gap-2"> 
                    <div>
                        <img src="./image/icones/work.svg" alt="Localização" />
                    </div>
                    <div>
                        <p>R. M.m.d.c., 66 - 1º andar - Vila Leite, Ferraz de Vasconcelos - SP, 08532-450</p>
                    </div>
                </a>
                <a href="mailto:raiztec@raiztec.com.br" className="flex gap-2"> 
                    <div>
                        <img src="./image/icones/email.svg" alt="E-mail" />
                    </div>
                    <div>
                        <p>Raiztec@raiztec.com.br</p>
                    </div>
                </a>
                <a href="https://wa.me/551128631802" className="flex gap-2"> 
                    <div>
                        <img src="./image/icones/deskphone.svg" alt="Telefone" />
                    </div>
                    <div>
                        <p>+55 11 2863-1802</p>
                    </div>
                </a>
            </div>
        </footer>
    );
}