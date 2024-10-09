"use client"

import Link from "next/link";
import { useEffect, useState } from "react";



export const FirstHomeCarrosel = () => {
    const [changeBanner, setChangeBanner] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setChangeBanner((prevBanner) => (prevBanner < 7 ? prevBanner + 1 : 0));
        }, 7000); // 10 segundos

        // Limpa o timeout quando o componente for desmontado ou quando o changeBanner mudar
        return () => clearTimeout(timer);
    }, [changeBanner]);

    return (
        <section>
            <div className='w-screen h-[350px] bg-laranja flex justify-center md:h-[180px] lg:h-[240px] xl:h-[340px] 2xl:h-[500px] 2xl:bg-gradient-to-r from-[#9a140f] to-[#e30a16]'>
                <div className="w-full h-full flex justify-center items-center">

                    <div className={`w-full h-full flex justify-end flex-col items-center relative
                         `}>
                        <Link href={'/Produtos'} className="w-full h-full">
                            <div className={`w-full h-full bg-cover bg-center bg-no-repeat
                         cursor-pointer 2xl:bg-contain
                         ${changeBanner === 0 ? "bg-banner-home-1-m md:bg-banner-home-1" : ""}
                          ${changeBanner === 1 ? "bg-banner-home-2-m md:bg-banner-home-2" : ""}
                         ${changeBanner === 2 ? "bg-banner-home-3-m md:bg-banner-home-3" : ""}
                         ${changeBanner === 3 ? "bg-banner-home-4-m md:bg-banner-home-4" : ""}
                         ${changeBanner === 4 ? "bg-banner-home-5-m md:bg-banner-home-5" : ""}
                         ${changeBanner === 5 ? "bg-banner-home-6-m md:bg-banner-home-6" : ""}
                         ${changeBanner === 6 ? "bg-banner-home-7-m md:bg-banner-home-7" : ""}
                         ${changeBanner === 7 ? "bg-banner-home-8-m md:bg-banner-home-8" : ""}
                         ${changeBanner === 8 ? "bg-banner-home-9-m md:bg-banner-home-9" : ""}
                         ${changeBanner === 9 ? "bg-banner-home-10-m md:bg-banner-home-10" : ""}`}>
                            </div>
                        </Link>

                        <div className='w-[300px] h-[30px] pb-4 md:h-[10px] lg:h-[10px] absolute'>
                            <div className="w-full h-full flex justify-between items-center cursor-pointer">
                                <div className={`w-[10px] h-[10px] ${changeBanner === 0 ? 'bg-laranja' : 'bg-white'} rounded-full
                                hover:bg-laranja border-[1px] border-black`}
                                    onClick={() => setChangeBanner(0)}></div>

                                <div className={`w-[10px] h-[10px] ${changeBanner === 1 ? 'bg-laranja' : 'bg-white'} rounded-full
                                hover:bg-laranja border-[1px] border-black`}
                                    onClick={() => setChangeBanner(1)}></div>

                                <div className={`w-[10px] h-[10px] ${changeBanner === 2 ? 'bg-laranja' : 'bg-white'} rounded-full
                                hover:bg-laranja border-[1px] border-black`}
                                    onClick={() => setChangeBanner(2)}></div>
                                <div className={`w-[10px] h-[10px] ${changeBanner === 3 ? 'bg-laranja' : 'bg-white'} rounded-full
                                hover:bg-laranja border-[1px] border-black`}
                                    onClick={() => setChangeBanner(3)}></div>
                                <div className={`w-[10px] h-[10px] ${changeBanner === 4 ? 'bg-laranja' : 'bg-white'} rounded-full
                                hover:bg-laranja border-[1px] border-black`}
                                    onClick={() => setChangeBanner(4)}></div>
                                <div className={`w-[10px] h-[10px] ${changeBanner === 5 ? 'bg-laranja' : 'bg-white'} rounded-full
                                hover:bg-laranja border-[1px] border-black`}
                                    onClick={() => setChangeBanner(5)}></div>
                                <div className={`w-[10px] h-[10px] ${changeBanner === 6 ? 'bg-laranja' : 'bg-white'} rounded-full
                                hover:bg-laranja border-[1px] border-black`}
                                    onClick={() => setChangeBanner(6)}></div>
                                <div className={`w-[10px] h-[10px] ${changeBanner === 7 ? 'bg-laranja' : 'bg-white'} rounded-full
                                hover:bg-laranja border-[1px] border-black`}
                                    onClick={() => setChangeBanner(7)}></div>
                                <div className={`w-[10px] h-[10px] ${changeBanner === 8 ? 'bg-laranja' : 'bg-white'} rounded-full
                                hover:bg-laranja border-[1px] border-black`}
                                    onClick={() => setChangeBanner(8)}></div>
                                <div className={`w-[10px] h-[10px] ${changeBanner === 9 ? 'bg-laranja' : 'bg-white'} rounded-full
                                hover:bg-laranja border-[1px] border-black`}
                                    onClick={() => setChangeBanner(9)}></div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </section>
    );
};
