import {PropsWithChildren} from "react"

const Botao = ({url, children}: PropsWithChildren<{url:string}>) => {
    return (<a href={url}>{children}</a>);
}

const navbar = ({url, children}: PropsWithChildren<{url: string}>) => {
    return(<a href={url} className="text-white lg:text-base w-full text-sm  border-white border-4 border-solid p-4 rounded-lg bg-primary hover:ring-2 hover:ring-secondary hover:border-secondary hover:bg-secondary transition-all">{children}</a>);
}

const white = ({url, children}: PropsWithChildren<{url:string}>) => {
    return(
        <a href={url} className="w-full lg:w-fit transition-all flex items-center justify-center border-4 rounded-lg border-primary p-4 font-semibold text-primary hover:ring-2 hover:ring-primary">{children}</a>
    )
}

const primary = ({url, children}: PropsWithChildren<{url:string}>) => {
    return(
        <a href={url} className="w-full lg:w-fit transition-all  flex items-center justify-center border-4 rounded-lg border-primary bg-primary p-4 font-semibold text-white hover:ring-2 hover:ring-primary">{children}</a>
    )
}

Botao.primary = primary;
Botao.outline = white;
Botao.navbar = navbar;

export default Botao;