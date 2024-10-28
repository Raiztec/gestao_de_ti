import Botao from "./Botao";
import Icone from "./icones";
const Header = () => {
    return(
                <div className='w-full flex lg:h-3/4 items-center justify-center lg:gap-40 py-10 px-10'>
                    <div className="lg:space-y-6 space-y-4 lg:w-2/5">
                        <h1 className='lg:text-6xl text-4xl font-bold text-center'><span className='text-primary'>Gestão</span> estratégica <span className='text-primary'>em TI</span></h1>
                        <div className="flex justify-center items-center p-4 gap-5 mx-auto"> 
                            <Icone.job />
                            <p className="text-center font-semibold text-sm lg:text-base">Soluções rápidas e eficazes para sua empresa</p>
                        </div>
                        <div className="flex w-full items-center justify-center gap-4 lg:flex-row flex-col">
                            <Botao.primary url="/#contact">Entre em contato</Botao.primary>
                            <Botao.outline url="https://wa.me/551128631802">Solicite uma apresentação</Botao.outline>                
                        </div>
                    </div>
                    <div className="w-1/2 hidden lg:flex">
                        <img src="./image/01.jpg" alt="Imagem parceira" width={'auto'} height={'auto'}  className=" rounded-lg" />
                    </div>
                </div>
    );
}

export default Header;