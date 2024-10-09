"use client"

import emailjs from '@emailjs/browser';
import { useState } from "react";
import { FormSend } from './FormSend';

export const ContactForm = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [sucessEmail, setSucessEmail] = useState(false);

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');

    function validateEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validateName(name: string): boolean {
        // Verifica se o nome contém apenas letras e tem pelo menos 3 caracteres
        const nameRegex = /^[A-Za-zÀ-ÿ\s]{3,}$/;
        return nameRegex.test(name);
    }



    function validateForm(): boolean {
        let isValid = true;

        if (!validateName(name)) {
            setNameError("O nome deve ter pelo menos 3 letras.");
            setName('');
            isValid = false;
        } else {
            setNameError('');
        }

        if (!validateEmail(email)) {
            setEmailError("Por favor, insira um e-mail válido.");
            setEmail('');
            isValid = false;
        } else {
            setEmailError('');
        }


        if (message.trim().length < 10) {
            setMessageError("A mensagem deve conter pelo menos 10 caracteres.");
            isValid = false;
        } else {
            setMessageError('');
        }

        return isValid;
    }

    function sendEmail(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email,
            phone: phone
        };

        console.log(process.env.NEXT_PUBLIC_EMAILJS_USER_ID)

        emailjs.send("service_sehnuts", "template_tpoqg2s", templateParams, "b8thRCDhLUkpVcbAB")
            .then((response) => {
                console.log("email Enviado", response.status, response.text);
                setMessage('');
                setEmail('');
                setName('');
                setPhone('');
                setSucessEmail(true);
            }, () => {
            });
    }

    return (
        <>
            {sucessEmail &&
                <FormSend />
            }


            <div className='w-full h-full flex justify-center items-center flex-col text-[15px] font-nexa text-justify md:pl-0 xl:w-[95%]'>
                <div className="w-full h-full flex justify-center items-start flex-col mt-7 md:items-start">
                    <span className="mb-2 font-conthrax text-xl text-black font-bold lg:text-3xl">Formulário de contato:</span>

                    <form className="w-full h-full flex justify-center items-center mb-7 flex-col md:items-center md:text-[12px] 
                           md:justify-center md:flex-col lg:text-[15px]" onSubmit={sendEmail}>
                        <div className="w-full h-full flex items-center justify-center flex-col md:flex-row md:w-[100%]">
                            <div className="w-full h-full flex items-center flex-col md:items-start">
                                <span className="text-[14px] text-laranja md:text-[14px]">N</span>
                                <input type="text"
                                    placeholder={nameError || "Nome"}
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    maxLength={100}
                                    className={`w-[100%] h-[36px] bg-white text-black rounded-md md:w-[95%] border-black border
                                        ${nameError ? 'placeholder-red-600' : 'placeholder-black'} pl-4`}
                                />
                            </div>

                            <div className="w-full h-full flex flex-col items-center md:items-start">
                                <span className="text-[14px] text-laranja md:text-[14px]">a</span>
                                <input type="text"
                                    placeholder={emailError || "Email"}
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    className={`w-[100%] h-[36px] bg-white text-black rounded-md md:w-[95%] border-black border
                                        ${emailError ? 'placeholder-red-600' : 'placeholder-black'} pl-4`}
                                />
                            </div>

                            <div className="w-full h-full flex flex-col items-center mt-2 lg:mb-0 md:items-start">
                                <span className="w-[95%] text-[14px] text-gray-700 md:text-[14px] md:text-right">*Campo Obrigátório</span>
                                <select
                                    onChange={(e) => setPhone(e.target.value)} // Atualiza o estado com a opção escolhida
                                    value={phone} // O valor selecionado
                                    className={`w-[100%] h-[36px] bg-white text-black rounded-md md:w-[95%] border-black border pl-4`}
                                >
                                    <option value="" disabled>Assunto</option>
                                    <option value="duvidas">Dúvidas Frequentes</option>
                                    <option value="curriculo">Currículo</option>
                                    <option value="parcerias">Parcerias</option>
                                    {/* Adicione mais opções aqui, se necessário */}
                                </select>
                            </div>

                        </div>

                        <div className="w-full h-full mt-7 flex justify-center items-center md:mt-0 md:w-[100%]">
                            <div className="w-full h-full flex justify-start items-center flex-col md:items-start">
                                <span className="text-[14px] mb-2 md:text-[15px]"></span>
                                <textarea
                                    placeholder={messageError || "Mensagem"}
                                    onChange={(e) => setMessage(e.target.value)}
                                    value={message}
                                    maxLength={500}
                                    className={`w-[100%] h-[130px] bg-white text-black rounded-md border-black border md:w-[98%] 2xl:w-[98%] 
                                        ${messageError ? 'placeholder-red-600' : 'placeholder-black'} pl-4`}
                                />

                                <button type="submit" className="mt-4 font-conthrax text-[16px] bg-vermelho text-white px-3 rounded-lg uppercase">Enviar</button>
                            </div>
                        </div>

                    </form>
                </div>

            </div>
        </>
    )
}
