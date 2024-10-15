"use client"

import { AboutSpan } from "./AboutSpan";



export const FormSend = () => {


    return (
        <div className="w-[100vw] h-screen bg-laranja fixed top-0 right-0 z-[99]">
            <div className="w-full h-full flex justify-center items-center flex-col">
                <h1 className="text-lg md:text-[24px] font-conthrax text-black text-center">
                    E-mail enviado com sucesso para nossa equipe!</h1>
                <p className="text-lg md:text-[24px] font-nexa text-black"></p>

                <p className="text-xl text-vermelho md:text-[22px] font-semibold mt-7">Redes Sociais:</p>
                <a href="" target='_blank'>
                    <AboutSpan link='https://www.instagram.com/belunno/' style={`bg-bluedark text-black text-lg`} text='Instagram' />
                </a>
                <a href="" target="_blank">
                    <AboutSpan link='https://www.facebook.com/belunnoalimentos' style={`bg-bluedark text-black text-lg`} text='Facebook' />
                </a>
                <a href="" target="_blank">
                    <AboutSpan link='https://www.youtube.com/@belunno' style={`bg-bluedark text-black text-lg`} text='Youtube' />
                </a>

                <p className="text-[22px] font-semibold mt-7 text-vermelho">Voltar</p>
                <AboutSpan text={"Home"} style="bg-bluedark text-black text-lg" link="/" />
            </div>
        </div>
    );
};
