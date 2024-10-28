import { PropsWithChildren } from 'react';
import Navbar from '@/Components/navbar';

export default function Layout({ children }: PropsWithChildren) {
    return (
        <>
            <Navbar />            

            <div className='lg:block hidden absolute top-0 right-0 -z-50 w-3/5' >
                <img src="./image/Fundo/figura.svg" alt="Figura" width={'100%'} height={'100%'}   loading="lazy"/>
            </div>

            <main className="min-w-full lg:px-14 lg:space-y-16 space-y-10">
                {children}
            </main>
        </>
    );
}
