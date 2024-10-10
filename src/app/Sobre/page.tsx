import { Metadata } from "next";
import { AboutCarrosel } from "../components/AboutCarrosel";
import { AboutLine } from "../components/AboutLine";
import { AboutSpan } from "../components/AboutSpan";

export const metadata: Metadata = {


    viewport: "width=device-width, initial-scale=1.0",
    title: "Belunno - Embutidos de Qualidade, Sabor e Tradição",
    description: "A Belunno é referência em embutidos de carne suína, unindo tradição e tecnologia para garantir sabores autênticos e segurança alimentar. Conheça nossa história, nosso compromisso com a qualidade e como nos tornamos líderes no mercado de embutidos no Norte do Brasil.",
  };

export default function Page() {

    return (
        <>
            <section className="w-screen h-full bg-gradient-to-r from-[#e30a16] to-[#9a140f] flex justify-center items-center flex-col md:h-[400px] md:flex-row">
                <div className="w-[90%] h-full flex justify-between items-center flex-col lg:w-[80%] md:flex-row">
                    <div className="w-[100%] h-full text-white flex justify-center items-start space-y-4 flex-col 
                mt-4 md:w-[40%]">
                        <h2 className="text-xl font-bold text-laranja md:text-xl xl:text-3xl">Nossa História e Compromisso</h2>
                        <p className="text-base md:text-lg text-justify xl:text-xl">A Belunno é sinônimo de tradição e qualidade no mercado de
                            embutidos suínos. Desde a nossa fundação, buscamos
                            proporcionar momentos inesquecíveis com sabores
                            autênticos e produtos feitos com excelência.</p>
                    </div>
                    <div className="hidden w-[10%] h-full items-center justify-center relative md:flex">
                        <div className="w-[160px] h-[90%] bg-four bg-cover bg-no-repeat bg-center absolute bottom-0"></div>
                    </div>
                    <div className="w-[100%] h-[300px] flex justify-end items-center relative z-10 md:h-full md:w-[40%]">
                        <video src="/images/belunno-video.mp4"
                            className="object-fill rounded-3xl w-full h-[80%] border-white border-4 md:w-[100%] md:h-[80%]"
                            controls
                            loop
                            playsInline></video>
                    </div>
                </div>
            </section>

            <section className="w-screen h-[1250px] bg-laranja border-t-8 border-white flex items-center justify-center flex-col md:h-[800px]">
                <div className="w-[90%] h-[150px] flex items-center justify-between md:h-[500px] lg:w-[80%]">
                    <div className="w-[100%] h-full flex flex-col mt-14 md:w-[40%] xl:w-[50%]">
                        <h2 className="text-lg text-black font-semibold md:mb-2 md:text-lg xl:text-3xl">História da Marca</h2>
                        <h1 className="text-xl text-vermelho font-bold mb-1 md:text-xl xl:text-3xl 2xl:text-4xl">Uma Jornada de Sabor e Tradição</h1>
                        <p className="text-base text-black text-justify md:text-[14px] xl:text-xl">{/*Fundada com o propósito de valorizar a cultura e os sabores do Norte do
                            Brasil, a Belunno combina o melhor da tradição com tecnologias inovadoras
                            para produzir embutidos suínos que encantam os paladares por décadas.*/}</p>
                    </div>
                    <div className="w-1 h-full"></div>
                </div>
                <div className="w-full h-full">
                    <div className="w-[85%] h-full relative flex flex-col lg:w-[81%] xl:w-[90%]">
                        <div className="hidden w-full h-full md:block">
                            <AboutLine heigth="bottom-[100%]" width="md:w-[72%] lg:w-[72%] xl:w-[70%]"
                                text="Fundação da Belluunô Indústria de Alimentos Ltda."
                                year="2007" />

                            <AboutLine heigth="bottom-[95%]" width="md:w-[92%] lg:w-[92%] xl:w-[85%]"
                                text="Período de adequações e conquistas da certificação do SIF."
                                year="2008-2010" />

                            <AboutLine heigth="bottom-[90%]" width="md:w-[112%] lg:w-[112%] xl:w-[100%]"
                                text="Consolidação como referência em carne suína no Norte."
                                year="2015" />

                            <AboutLine heigth="bottom-[36%]" width="md:w-[80%] lg:w-[85%] xl:w-[65%]" reverse
                                text="Expansão planejada para o Nordeste e Sul do Brasil."
                                year="2024" />

                            <AboutLine heigth="bottom-[30%]" width="md:w-[58%] lg:w-[65%] xl:w-[50%]" reverse
                                text="Belunno consolidou-se e expandiu o mix para mercados exigentes."
                                year="2023" />
                            <AboutLine heigth="bottom-[25%]" width="md:w-[35%] lg:w-[45%] xl:w-[35%]" reverse
                                text="A fábrica aumentou sua capacidade com nova estrutura industrial."
                                year="2020" />
                        </div>

                        <div className="w-full h-full md:h-full md:hidden">
                            <AboutLine heigth="h-[170px] bottom-[85%]" width="w-[7%]"
                                text="Fundação da Belluunô Indústria de Alimentos Ltda."
                                year="2007" />
                            <AboutLine heigth="h-[170px] bottom-[74%]" width="w-[80%]"
                                text="Período de adequações e conquistas da certificação do SIF."
                                year="2008-2010" color="text-black font-semibold" />
                            <AboutLine heigth="h-[170px] bottom-[62%]" width="w-[110%]"
                                text="Consolidação como referência em carne suína no Norte."
                                year="2015" pt="pt-12"/>
                            <AboutLine heigth="h-[170px] bottom-[45%]" width="w-[110%]"
                                text="A fábrica aumentou sua capacidade com nova estrutura industrial."
                                year="2020" color="text-black font-semibold" />
                            <AboutLine heigth="h-[170px] bottom-[22%]" width="w-[85%]"
                                text="Belunno consolidou-se e expandiu o mix para mercados exigentes."
                                year="2023" />
                            <AboutLine heigth="h-[170px] bottom-[0%]" width="w-[7%]"
                                 text="Expansão planejada para o Nordeste e Sul do Brasil."
                                 year="2024" color="text-black font-semibold" />
                        </div>
                    </div>
                </div>
            </section>

            <div className="w-screen h-full bg-white flex justify-center items-center text-gray-800 font-semibold
                py-4 lg:items-start lg:h-[290px] xl:h-full">
                <div className="w-[90%] h-full flex justify-center items-start pt-2 flex-col space-y-4
                    md:space-y-8 md:items-center md:py-8 lg:items-start lg:space-y-0 lg:flex-row lg:justify-between lg:w-[80%]">
                    <div className="flex flex-col md:w-[80%] lg:w-[30%]">
                        <h2 className="text-vermelho text-xl font-bold md:text-2xl xl:text-4xl">Missão:</h2>
                        <p className="text-base text-justify lg:text-left md:text-[14px] xl:text-xl">Proporcionar momentos especiais com
                            sabores inesquecíveis, oferecendo produtos
                            de alta qualidade e preservando nossas
                            raízes regionais.</p>
                    </div>

                    <div className="flex flex-col md:w-[80%] lg:w-[30%]">
                        <h2 className="text-vermelho text-xl font-bold md:text-2xl xl:text-4xl">Visão:</h2>
                        <p className="text-base text-justify lg:text-left md:text-[14px] xl:text-xl">O objetivo da Belunno é expandir sua presença para todo o território nacional, levando seus produtos de alta qualidade e tradição a novos mercados, consolidando-se como referência em carnes suínas no Brasil.</p>
                    </div>

                    <div className="flex flex-col md:w-[80%] lg:w-[30%]">
                        <h2 className="text-vermelho text-xl font-bold md:text-2xl xl:text-4xl">Valores:</h2>
                        <p className="text-base text-justify md:text-[14px] lg:text-left xl:text-xl">Qualidade, Tradição, Compromisso com
                            a Segurança Alimentar, Respeito às
                            Comunidades Locais.</p>
                    </div>
                </div>
            </div>

            <AboutCarrosel/>
            <div className="w-screen h-3 bg-gradient-to-r from-[#9a140f] to-[#e30a16] "></div>

            <div className="w-screen h-full bg-white text-black flex justify-center items-center py-4 lg:py-0">
                <div className="w-[90%] h-full flex justify-between items-center flex-col space-y-4 lg:space-y-0
                lg:w-[80%] lg:h-[100px] lg:flex-row">
                    <h2 className="text-vermelho text-xl font-bold text-center md:text-2xl lg:text-[16px] xl:text-xl 2xl:text-3xl">
                        Quer saber mais sobre o que nos torna especiais?</h2>
                    <p className="text-gray-700 text-base md:text-lg lg:text-[14px] xl:text-lg 2xl:text-lg">
                        Entre em contato conosco e descubra o que faz <br/>da Belunno a marca preferida no Norte do Brasil.</p>
                    <AboutSpan link="/Contato" text="Contato" style="bg-vermelho text-[14px] py-1 text-white hover:bg-laranja hover:text-black"/>
                </div>
            </div>
        </>
    );
}
