import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Parallax } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/free-mode';
import 'swiper/css/parallax';
import { useState, useEffect } from "react";

export function Parceiros(){

    const [windowsWidth, setwindowsWidth] = useState(0);

    useEffect(() =>{
        setwindowsWidth(window.innerWidth);
    });


    return(
        <div className="lg:my-20 w-full p-10 space-y-10">
            <h1 className="lg:text-4xl text-2xl">Nossos <span className="text-primary">parceiros</span></h1>
            <div>
                <Swiper
                    effect={'coverflow'}
                    spaceBetween={windowsWidth >= 1024 ? 50 : 40}
                    slidesPerView={windowsWidth >= 1024 ? 5 : 2}
                    freeMode={true}
                    loop={true}
                    autoplay={{ delay:0, disableOnInteraction: false }}
                    speed={windowsWidth >= 1024 ? 7500 : 1500}
                    noSwipingClass="swiper-slide"
                    modules={[Autoplay, FreeMode]}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)} >

                    <SwiperSlide>
                        <img src="./image/Logos/empresas/logo-microsoft.png" alt="Microsoft" width={250} height={50}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./image/Logos/empresas/intelbras_logo.png" alt="Intelbras" width={250} height={50}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./image/Logos/empresas/lenovo-logo.webp" alt="Lenovo" width={250} height={50}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./image/Logos/empresas/logo_positivo.png" alt="Positivo"  width={300} height={50}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./image/Logos/empresas/logo_snd.png" alt="SND" width={250} height={50}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./image/Logos/empresas/ingram_logo.png" alt="Ingram" width={250}/>
                    </SwiperSlide>                
                </Swiper>
            </div>

        </div>
    )
}

export default function Cliente (){
    const [windowsWidth, setwindowsWidth] = useState(0);

    useEffect(() =>{
        setwindowsWidth(window.innerWidth);
    });
    return(
        <div className="lg:my-6 w-full p-10 space-y-6">
            <h1 className="lg:text-4xl text-2xl">Alguns de <span className="text-primary">nossos clientes</span></h1>
            <div>
                <Swiper
                    effect={'coverflow'}
                    spaceBetween={windowsWidth >= 1024 ? 50 : 40}
                    slidesPerView={windowsWidth >= 1024 ? 5 : 2}
                    freeMode={true}
                    loop={true}
                    autoplay={{ delay:0, disableOnInteraction: false }}
                    speed={windowsWidth >= 1024 ? 7500 : 1500}
                    noSwipingClass="swiper-slide"
                    modules={[Autoplay, FreeMode]}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)} >

                    <SwiperSlide>
                        <img src="./image/Logos/Parceiros/unip.svg" alt="Unip" height={50} width={250}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./image/Logos/Parceiros/suzano.svg" alt="Suzano" height={50} width={250}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./image/Logos/Parceiros/sesi.svg" alt="Sesi" height={50} width={300}/>
                    </SwiperSlide >
                    <SwiperSlide>
                        <img src="./image/Logos/Parceiros/senai.svg" alt="Senai" height={50} width={200}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./image/Logos/Parceiros/oab.svg" alt="OAB" height={50} width={150}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./image/Logos/Parceiros/fmu.svg" alt="FMU" height={50} width={150}/>
                    </SwiperSlide>                
                </Swiper>
            </div>

        </div>

    );
}