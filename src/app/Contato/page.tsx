"use client"

import { useState } from "react";
import { ContactForm } from "../components/ContactForm";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import dynamic from "next/dynamic";

export default function Page() {
    const [expandedSections, setExpandedSections] = useState([false, false, false, false, false]);

    const toggleExpand = (index: number) => {
        // Alterna o estado da seção clicada
        setExpandedSections((prev) => {
            const newState = [...prev];
            newState[index] = !newState[index]; // Alterna a seção com base no índice
            return newState;
        });
    };

    const DynamicMap = dynamic(() => import('../components/Map'), {
        ssr: false, // Desativa o server-side rendering para esse componente
    });

    return (
        <>
            <section className="w-screen h-[600px] bg-white flex justify-center items-center flex-col md:h-[450px] xl:h-[550px]">
                <div className="w-[90%] h-full flex justify-start items-start flex-col 
                     md:w-[90%] lg:w-[63.5%] xl:w-[58%] xl:justify-center md:items-start 2xl:w-[57.5%]">
                    <h1 className="text-xl font-bold text-vermelho md:text-2xl xl:mb-2 xl:text-4xl">Fale com a Belunno!</h1>
                    <p className="text-base text-justify text-gray-700 md:text-lg xl:w-[60%] md:text-justify xl:text-2xl">Quer saber mais sobre nossos produtos, tirar
                        dúvidas ou compartilhar uma sugestão? <span className="text-black font-bold">Entre
                            em contato com a gente!</span></p>
                </div>
                <div className="w-full h-full bg-laranja flex justify-center items-center">
                    <div className="w-[90%] h-full flex justify-center items-center md:w-[90%]">
                        <div className="hidden w-[20%] h-full relative lg:block">
                            <div className="w-[335px] h-[550px] bg-pig bg-cover bg-no-repeat bg-center absolute right-0 bottom-0
                             lg:w-[150px] lg:h-[250px]  xl:w-[250px] xl:h-[400px] 2xl:w-[335px] 2xl:h-[550px]"></div>
                        </div>

                        <div className="w-[100%] h-full flex justify-end items-center md:w-[100%]">
                            <ContactForm />
                        </div>
                        <div className="hidden w-[20%] h-full relative lg:block">
                            <div className="w-[260px] h-[550px] bg-four-red bg-cover bg-no-repeat bg-center absolute bottom-[0%]
                                lg:w-[150px] lg:h-[250px] xl:w-[175px] xl:h-[400px] 2xl:w-[260px] 2xl:h-[550px]"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-screen h-full bg-white flex justify-center items-center flex-col text-gray-700">
                <div className="w-[90%] h-full flex flex-col justify-start items-start lg:mt-4 lg:w-[80%]">
                    <div className="w-full h-full flex justify-start items-start mt-4 flex-col lg:items-center 
                        lg:justify-between lg:flex-row mb-4 xl:mb-0">
                        <h2 className="text-xl font-bold text-vermelho mt-4 md:text-2xl md:min-w-[35%] xl:min-w-[30%] xl:mt-0 xl:mb-8 xl:text-4xl">Dúvidas Frequentes:</h2>
                        <p className="text-base text-gray-700 mb-4 lg:mb-0 lg:text-lg xl:text-base">Caso esteja com alguma dúvida, verifique se sua pergunta já não foi respondida no campo de
                            <span className="text-black font-bold"> perguntas frequentes</span> abaixo.</p>
                    </div>

                    <div className="w-full h-full flex flex-col">
                        <div className="flex justify-start items-center cursor-pointer text-[18px]" onClick={() => toggleExpand(0)}>
                            <span className="text-base text-black font-bold mb-2 md:text-lg xl:text-2xl"
                            >Onde posso comprar os produtos Belunno?</span>
                            <span className="text-xl text-vermelho pb-2">
                                {expandedSections[0] && <GoTriangleUp />}
                                {!expandedSections[0] && <GoTriangleDown />}</span> {/* Ícone que alterna */}
                        </div>
                        <div className={`overflow-hidden transition-all duration-500 ${expandedSections[0] ? "h-[145px] md:h-[80px] lg:h-[120px]" : "h-[0px]"} 
                            `}>
                            <ul className="text-black text-[13px] lg:text-lg">
                                <li>Os produtos Belunno estão amplamente disponíveis em várias regiões do Norte do Brasil, especialmente em atacadistas, supermercados e açougues. Para localizar o ponto de venda mais próximo de você, entre em contato com a nossa equipe ou acompanhe nossas redes sociais para atualizações sobre novos parceiros e pontos de venda.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-full h-full flex flex-col">
                        <div className="flex justify-start items-center cursor-pointer text-[18px]" onClick={() => toggleExpand(1)}>
                            <span className="text-base text-black font-bold mb-2 md:text-lg xl:text-2xl"
                            >Quais os principais ingredientes da Linguiça Toscana (5kg)?</span>
                            <span className="text-xl text-vermelho pb-2">
                                {expandedSections[1] && <GoTriangleUp />}
                                {!expandedSections[1] && <GoTriangleDown />}</span> {/* Ícone que alterna */}
                        </div>
                        <div className={`overflow-hidden transition-all duration-500 ${expandedSections[1] ? "h-[140px] md:h-[100px] lg:h-[130px] xl:h-[100px]" : "h-[0px]"} 
                            `}>
                            <ul className="text-black text-[13px] lg:text-lg">
                                <p>A Linguiça Toscana contém carne suína, gordura suína, 12% de água, sal, estabilizante (tripolifosfato de sódio), antioxidante (eritorbato de sódio), realçador de sabor (glutamato monossódico), especiarias naturais (cebola, pimenta preta e coentro), conservantes (nitrito de sódio e nitrato de sódio), corante natural (carmim de cochonilha) e aroma natural de alho.</p>
                            </ul>
                        </div>
                    </div>

                    <div className="w-full h-full flex flex-col">
                        <div className="flex justify-start items-center cursor-pointer text-[18px]" onClick={() => toggleExpand(2)}>
                            <span className="text-base text-black font-bold mb-2 md:text-lg xl:text-2xl"
                            >Como deve ser feito o descongelamento seguro da Linguiça Toscana Apimentada?</span>
                            <span className="text-xl text-vermelho pb-2">
                                {expandedSections[2] && <GoTriangleUp />}
                                {!expandedSections[2] && <GoTriangleDown />}</span> {/* Ícone que alterna */}
                        </div>
                        <div className={`overflow-hidden transition-all duration-500 ${expandedSections[2] ?
                            "h-[120px] md:h-[70px] lg:h-[90px] xl:h-[70px]" : "h-[0px]"} 
                            `}>
                            <ul className="text-black text-[13px] lg:text-lg">
                                <p>A Linguiça Toscana Apimentada deve ser descongelada apenas no refrigerador ou no micro-ondas. O produto cru deve ser mantido separado de outros alimentos e não deve ser lavado antes do manuseio. Apenas consuma o produto após cozido, frito ou assado completamente.</p>
                            </ul>
                        </div>
                    </div>

                    <div className="w-full h-full flex flex-col">
                        <div className="flex justify-start items-center cursor-pointer text-[18px]" onClick={() => toggleExpand(3)}>
                            <span className="text-base text-black font-bold mb-2 md:text-lg xl:text-2xl"
                            >Qual é a validade da Linguiça Toscana quando armazenada em freezer?</span>
                            <span className="text-xl text-vermelho pb-2">
                                {expandedSections[3] && <GoTriangleUp />}
                                {!expandedSections[3] && <GoTriangleDown />}</span> {/* Ícone que alterna */}
                        </div>
                        <div className={`overflow-hidden transition-all duration-500 ${expandedSections[3] ?
                            "h-[70px] md:h-[50px] lg:h-[70px] xl:h-[40px]" : "h-[0px]"} 
                            `}>
                            <ul className="text-black text-[13px] lg:text-lg">
                                <p>A Linguiça Toscana possui uma validade de 6 meses quando armazenada em freezer a -12°C ou temperaturas mais baixas.</p>
                            </ul>
                        </div>
                    </div>

                    <div className="w-full h-full flex flex-col">
                        <div className="flex justify-start items-center cursor-pointer text-[18px]" onClick={() => toggleExpand(4)}>
                            <span className="text-base text-black font-bold mb-2 md:text-lg xl:text-2xl"
                            >O Embutido Misto Cozido contém glúten?</span>
                            <span className="text-xl text-vermelho pb-2">
                                {expandedSections[4] && <GoTriangleUp />}
                                {!expandedSections[4] && <GoTriangleDown />}</span> {/* Ícone que alterna */}
                        </div>
                        <div className={`overflow-hidden transition-all duration-500 ${expandedSections[4] ?
                            "h-[40px] md:h-[20px] lg:h-[20px] xl:h-[30px]" : "h-[0px]"} 
                            `}>
                            <ul className="text-black text-[13px] lg:text-lg">
                                <p>Não, o Embutido Misto Cozido Sabor Calabresa não contém glúten.</p>
                            </ul>
                        </div>
                    </div>

                    <div className="w-full h-full mb-8 hidden">
                        <h3 className="text-lg font-bold text-vermelho mt-4 md:text-xl md:mt-8 xl:text-2xl">Não encontrou o que procurava?</h3>
                        <p className="text-base lg:text-lg xl:text-base">Faça sua pergunta no <span className="text-black font-bold">formulário de contato</span> selecionando a opção “Dúvidas frequentes” no campo selecionavel “Assunto”,
                            que entraremos em contato o mais breve possivel! Obrigado!</p>
                    </div>
                </div>
            </section>

            <div className="w-full flex justify-center items-center bg-laranja py-4">
                <div className="w-[90%] h-full flex justify-start items-center bg-laranja space-y-4 text-black flex-col pt-2
                lg:justify-start lg:flex-row lg:items-start lg:space-y-0 lg:space-x-14 lg:w-[90%] lg:pt-2 xl:w-[80%]">
                    <div className="flex flex-col text-center lg:text-left">
                        <span className="text-vermelho font-semibold text-lg md:text-xl xl:text-2xl">Representante Comercial</span>
                        <span className="text-[14px] font-semibold text-black xl:text-xl">Halex Sulivan</span>
                    </div>

                    <div className="font-semibold flex flex-col items-center lg:items-end">
                        <a href="mailto:halexsulivan@hotmail.com" title="Email" className="text-lg">halexsulivan@hotmail.com</a>
                        <a href="https://wa.me/5591991779677?text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20site%20da%20Belunno" 
                        className="text-base">+55 (91) 99177 9677</a>
                    </div>
                </div>
            </div>


            <div className='w-screen h-full bg-laranja'>
                <DynamicMap />
            </div>
        </>
    );
}
