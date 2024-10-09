"use client";

import Link from "next/link";
import { useState } from "react";

export default function Page() {
    const [changeBanner, setChangeBanner] = useState(1);
    const [visibleIcons, setVisibleIcons] = useState(0);


    const logos = [
        "bg-logo-4",
        "bg-logo-3",
        "bg-logo-5",
        "bg-logo-6",
        "bg-logo-2",
        "bg-logo-9",
        "bg-logo-1",
        "bg-logo-10",
        "bg-logo-8",
        {/*"bg-logo-7"*/}
    ];


    const nextIcons = () => {
        setVisibleIcons((prev) =>
            prev + 2 >= logos.length ? 0 : prev + 2
        );
    };

    const prevIcons = () => {
        setVisibleIcons((prev) =>
            prev - 2 < 0 ? logos.length - 2 : prev - 2
        );
    };

    return (
        <section className='w-screen h-full flex justify-center items-center flex-col'>
            <div className='w-[100%] h-full flex justify-center items-center flex-col bg-laranja'>

                <div className="w-[90%] h-full flex justify-between items-center py-4 flex-col space-y-4 md:space-y-0 md:w-[80%] md:flex-row">
                    <h1 className= 'w-[100%] text-vermelho text-xl font-bold md:w-[45%] lg:w-[37%] md:text-2xl xl:text-4xl'>
                        Descubra a linha completa
                        de embutidos suínos Belunno,
                        feitos com tradição, qualidade
                        e sabor inigualáveis.
                    </h1>
                    <div className="w-[30%] h-[300px] hidden relative md:block">
                        <div className="hidden w-[470px] h-[300px]  bg-food-p bg-cover bg-no-repeat bg-center absolute bottom-[-13%]
                        md:block md:w-[240px] md:h-[160px] lg:w-[300px] lg:h-[170px] xl:w-[420px] xl:h-[280px] 2xl:w-[600px] 2xl:h-[350px]"></div>
                    </div>
                </div>

                {/* Carrossel para mobile */}
                <div className="w-full h-[160px] bg-gradient-to-r from-[#e30a16] to-[#9a140f] flex justify-center items-center relative">
                    <div className="absolute w-full h-2 bg-gradient-to-r from-[#9a140f] to-[#e30a16] top-0"></div>
                    <div className="absolute w-full h-2 bg-gradient-to-r from-[#9a140f] to-[#e30a16] bottom-0"></div>
                    {/* Botão para voltar */}
                    <div className="w-[80%] h-full flex justify-center items-center relative">
                        <button
                            className="absolute left-[-3%] p-2 text-laranja font-bold text-3xl md:left-[-7%] lg:left-[-3%]"
                            onClick={prevIcons}
                        >
                            &lt;
                        </button>

                        <div className="flex space-x-6 md:hidden">
                            <div
                                className={`w-[100px] h-[100px] bg-contain bg-no-repeat bg-center cursor-pointer
              ${logos[visibleIcons]} ${changeBanner === visibleIcons ? '' : 'opacity-60'} hover:opacity-90`}
                                onClick={() => setChangeBanner(visibleIcons)}
                            ></div>
                            <div
                                className={`w-[100px] h-[100px] bg-contain bg-no-repeat bg-center cursor-pointer
              ${logos[visibleIcons + 1]} ${changeBanner === visibleIcons + 1 ? '' : 'opacity-60'} hover:opacity-90`}
                                onClick={() => setChangeBanner(visibleIcons + 1)}
                            ></div>
                        </div>


                        {/* Exibição de seis ícones por vez */}
                        <div className="hidden space-x-6 md:flex justify-around items-center w-full">
                            <div
                                className={`w-[140px] h-[140px] bg-contain bg-no-repeat bg-center cursor-pointer
              ${logos[visibleIcons]} ${changeBanner === visibleIcons ? '' : 'opacity-60'} hover:opacity-100`}
                                onClick={() => setChangeBanner(visibleIcons)}
                            ></div>
                            <div
                                className={`w-[140px] h-[140px] bg-contain bg-no-repeat bg-center cursor-pointer
              ${logos[visibleIcons + 1]} ${changeBanner === visibleIcons + 1 ? '' : 'opacity-60'} hover:opacity-100`}
                                onClick={() => setChangeBanner(visibleIcons + 1)}
                            ></div>
                            <div
                                className={`w-[140px] h-[140px] bg-contain bg-no-repeat bg-center cursor-pointer
              ${logos[visibleIcons + 2]} ${changeBanner === visibleIcons + 2 ? '' : 'opacity-60'} hover:opacity-100`}
                                onClick={() => setChangeBanner(visibleIcons + 2)}
                            ></div>
                            <div
                                className={`w-[140px] h-[140px] bg-contain bg-no-repeat bg-center cursor-pointer
              ${logos[visibleIcons + 3]} ${changeBanner === visibleIcons + 3 ? '' : 'opacity-60'} hover:opacity-100`}
                                onClick={() => setChangeBanner(visibleIcons + 3)}
                            ></div>
                            <div
                                className={`w-[140px] h-[140px] bg-contain bg-no-repeat bg-center cursor-pointer
              ${logos[visibleIcons + 4]} ${changeBanner === visibleIcons + 4 ? '' : 'opacity-60'} hover:opacity-100`}
                                onClick={() => setChangeBanner(visibleIcons + 4)}
                            ></div>
                            <div
                                className={`w-[140px] h-[140px] bg-contain bg-no-repeat bg-center cursor-pointer
              ${logos[visibleIcons + 5]} ${changeBanner === visibleIcons + 5 ? '' : 'opacity-60'} hover:opacity-100`}
                                onClick={() => setChangeBanner(visibleIcons + 5)}
                            ></div>
                        </div>

                        {/* Botão para avançar */}
                        <button
                            className="absolute right-[-3%] p-2 text-laranja font-bold text-3xl md:right-[-7%] lg:right-[-3%]"
                            onClick={nextIcons}
                        >
                            &gt;
                        </button>
                    </div>

                </div>

                {/* Layout tradicional para desktop 
                <div id="Brands" className='w-full h-[200px] bg-gradient-to-r from-[#e30a16] to-[#9a140f] hidden justify-center items-center 
                    md:flex md:h-[80px] md:space-x-6 xl:h-[170px]'>
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className={`w-full h-[40%] cursor-pointer bg-contain bg-no-repeat bg-center ${logo}
                ${changeBanner === index ? '' : 'opacity-100'} hover:opacity-100`}
                            onClick={() => setChangeBanner(index)}
                        ></div>
                    ))}
                </div>
                */}
            </div>

            {/* Exibição do banner */}
            <Link className="w-full h-full flex justify-center items-center" href={'/Receitas'}>
                <div
                    className={`w-full h-[1100px] bg-vermelho bg-cover bg-center bg-no-repeat relative cursor-pointer
            z-40 em:bg-contain md:bg-laranja md:bg-contain md:bg-top md:h-[445px] lg:bg-cover lg:h-[730px] xl:h-[860px]
             xl:bg-cover 2xl:h-[1100px]
            ${changeBanner === 0 ? 'bg-banner-p-4-m md:bg-banner-p-4' : ''}
          ${changeBanner === 1 ? 'bg-banner-p-3-m md:bg-banner-p-3' : ''}
          ${changeBanner === 2 ? 'bg-banner-p-5-m md:bg-banner-p-5' : ''}
          ${changeBanner === 3 ? 'bg-banner-p-6-m md:bg-banner-p-6' : ''}
          ${changeBanner === 4 ? 'bg-banner-p-2-m md:bg-banner-p-2' : ''}
          ${changeBanner === 5 ? 'bg-banner-p-9-m md:bg-banner-p-9' : ''}
          ${changeBanner === 6 ? 'bg-banner-p-1-m md:bg-banner-p-1' : ''}
          ${changeBanner === 7 ? 'bg-banner-p-10-m md:bg-banner-p-10' : ''}
          ${changeBanner === 8 ? 'bg-banner-p-8-m md:bg-banner-p-8' : ''}
      `}
                >
                </div>
            </Link>
        </section>
    );
};
