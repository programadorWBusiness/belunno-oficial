"use client";

import Link from "next/link";
import { AboutSpan } from "./AboutSpan";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";


export default function Footer() {
    return (
        <footer className="w-screen h-[400px] bg-laranja flex flex-col justify-center items-center lg:h-[200px]">
            <div className="w-full h-[16px] border-y-4 border-white"></div>
            <div className="w-[90%] h-full flex justify-between items-center text-black flex-col pt-6 lg:w-[90%] lg:pt-[55px] lg:flex-row xl:w-[80%]">
                <div className="w-[100%] h-full flex flex-col justify-start items-center mb-4 lg:w-[40%] lg:items-start lg:mb-0 xl:w-[35%]">
                    <span className="text-[14px] font-semibold text-center w-full xl:text-left">BELLUUNÔ INDUSTRÌA DE ALIMENTOS LTDA</span>
                    <span className="text-[14px] font-semibold text-center xl:text-left">Unidade de Beneficiamento de Carne e Produtos Cárneos</span>
                    <span className="text-[13px] w-full text-center xl:text-left">Linha Cruzaltinha, 80 - Ciríaco/RS - Brasil</span>
                </div>

                <div className="w-[100%] h-full flex flex-col justify-start items-center text-black font-semibold mb-4 md:mb-0 lg:w-[20%]">
                    <a href="mailto:qualidade@belunno.com.br" title="Email">qualidade@belunno.com.br</a>
                    <span>+55 (54) 3359 1136</span>
                    <span>+55 (54) 9 9908 3962</span>
                </div>

                <div className="w-[100%] h-full flex flex-col justify-center items-center mb-2 md:mb-0 lg:w-[10%] lg:justify-start xl:w-[20%]">
                    <div className="w-full flex justify-center items-center text-vermelho lg:space-x-2">
                        <a href="https://www.instagram.com/belunno/" target="_blank"
                            className="w-[35px] h-[35px] cursor-pointer rounded-full bg-laranja flex justify-center items-center
                              lg:w-[20px] lg:h-[20px]  xl:w-[30px] xl:h-[30px]">
                            <FaInstagram className="w-full h-full" />
                        </a>
                        <a href="https://www.facebook.com/belunnoalimentos" target="_blank"
                            className="w-[35px] h-[35px] cursor-pointer rounded-full bg-laranja lg:w-[20px] lg:h-[20px] xl:w-[30px] xl:h-[30px]">
                            <FaFacebook className="w-full h-full" />
                        </a>
                        <a href="https://www.youtube.com/@belunno" target="_blank"
                            className="w-[35px] h-[35px] cursor-pointer rounded-full bg-laranja flex justify-center items-center
                                lg:w-[25px] lg:h-[25px] xl:w-[35px] xl:h-[35px]">
                            <AiFillYoutube className="w-full h-full" />
                        </a>
                    </div>

                    <AboutSpan link="/Contato" text="fale conosco" style="w-[100px] bg-vermelho text-center text-white py-1 text-[11px] mt-4 
                        lg:text-[8px] xl:text-[11px]" />
                </div>

                <div className="w-[100%] h-full flex flex-col justify-start items-center lg:items-end lg:w-[20%]">
                    <Link href={"/"}>
                        <div className="w-[200px] h-[70px] bg-belunne bg-contain bg-center bg-no-repeat"></div>
                    </Link>
                </div>
            </div>

            <a className='bg-vermelho font-arial text-center w-screen flex justify-center items-center text-[14px] text-white'
                href="https://www.wbusiness.com.br/"
                target="_blank"
                title="WBusiness">
                2024. Belunno - Todos os direitos reservados.  Desenvolvido por WBusiness
            </a>
        </footer>
    )
}
