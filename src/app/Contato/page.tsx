"use client"

import { useState } from "react";
import { ContactForm } from "../components/ContactForm";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import dynamic from "next/dynamic";

export default function Page() {
    const [expandedSections, setExpandedSections] = useState([false, false, false, false]);

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
                            <span className="text-black font-bold"> perguntas frequentes</span> a baixo.</p>
                    </div>

                    <div className="w-full h-full flex flex-col">
                        <div className="flex justify-start items-center cursor-pointer text-[18px]" onClick={() => toggleExpand(0)}>
                            <span className="text-base text-black font-bold mb-2 md:text-lg xl:text-2xl"
                            >Onde posso comprar os produtos Belunno?</span>
                            <span className="text-xl text-vermelho pb-2">
                                {expandedSections[0] && <GoTriangleUp />}
                                {!expandedSections[0] && <GoTriangleDown />}</span> {/* Ícone que alterna */}
                        </div>
                        <div className={`overflow-hidden transition-all duration-500 ${expandedSections[0] ? "h-[105px] md:h-[80px] lg:h-[100px]" : "h-[0px]"} 
                            `}>
                            <ul className="text-black text-[13px] lg:text-lg">
                                <li>Os produtos Belunno estão disponíveis em diversos pontos de venda do Norte do Brasil.  Você pode encontrá-los em supermercados, açougues e lojas especializadas. Para saber o ponto de venda mais próximo, entre em contato com a nossa equipe.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-full h-full flex flex-col">
                        <div className="flex justify-start items-center cursor-pointer text-[18px]" onClick={() => toggleExpand(1)}>
                            <span className="text-base text-black font-bold mb-2 md:text-lg xl:text-2xl"
                            >Como armazenar os embutidos corretamente?</span>
                            <span className="text-xl text-vermelho pb-2">
                                {expandedSections[1] && <GoTriangleUp />}
                                {!expandedSections[1] && <GoTriangleDown />}</span> {/* Ícone que alterna */}
                        </div>
                        <div className={`overflow-hidden transition-all duration-500 ${expandedSections[1] ? "h-[180px] md:h-[130px] lg:h-[180px] xl:h-[150px]" : "h-[0px]"} 
                            `}>
                            <ul className="text-black text-[13px] lg:text-lg">
                                <li>Para garantir a qualidade e segurança dos embutidos Belunno, recomendamos seguir as seguintes orientações:</li>
                                <li>- Mantenha os produtos congelados a -12ºC ou em temperatura inferior até o momento do uso.</li>
                                <li>- Após aberto, consumir o produto em até 2 dias, mantendo-o refrigerado entre 4ºC e 8ºC.</li>
                                <li>- Evite recongelar os produtos que já foram descongelados.</li>
                                <li>- Armazene os embutidos em embalagens herméticas para preservar seu sabor e frescor.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-full h-full flex flex-col">
                        <div className="flex justify-start items-center cursor-pointer text-[18px]" onClick={() => toggleExpand(2)}>
                            <span className="text-base text-black font-bold md:text-lg xl:text-2xl"
                            >Qual o prazo de validade dos produtos?</span>
                            <span className="text-xl text-vermelho pb-2">
                                {expandedSections[2] && <GoTriangleUp />}
                                {!expandedSections[2] && <GoTriangleDown />}</span> {/* Ícone que alterna */}
                        </div>
                        <div className={`overflow-hidden transition-all duration-500 ${expandedSections[2] ?
                            "h-[200px] md:h-[130px] lg:h-[200px] xl:h-[140px]" : "h-[0px]"} 
                            `}>
                            <ul className="text-black text-[13px] lg:text-lg">
                                <li>O prazo de validade dos embutidos Belunno pode variar de acordo com o produto e as condições de armazenamento:</li>
                                <li>- Embutidos congelados (Linguiças Toscana, Apimentada e Churrasco) têm validade de até 6 meses, se mantidos a -12ºC ou mais frio.</li>
                                <li>- Produtos resfriados, como o bacon, devem ser consumidos em até 3 meses se armazenados adequadamente. Para mais informações específicas, verifique a embalagem do produto ou consulte nossa equipe.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-full h-full mb-8">
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