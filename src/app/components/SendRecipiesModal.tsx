"use client"

import emailjs from '@emailjs/browser';
import { useState } from "react";
import { FormSend } from './FormSend';


export const SendRecipiesModal = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [messageIngredientes, setMessageIngredientes] = useState('');
    const [product, setProduct] = useState("");
    const [preparationTime, setPreparationTime] = useState("");
    const [complexity, setComplexity] = useState("");
    const [occasion, setOccasion] = useState("");
    const [termsRecipes, setTermsRecipes] = useState(false);


    const [sucessEmail, setSucessEmail] = useState(false);

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');
    const [messageIngredientesError, setMessageIngredientesError] = useState('');
    const [productError, setProductError] = useState(false);
    const [preparationTimeError, setPreparationTimeError] = useState(false);
    const [complexityError, setComplexityError] = useState(false);
    const [occasionError, setOccasionError] = useState(false);

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

        if (messageIngredientes.trim().length < 10) {
            setMessageIngredientesError("A mensagem de Ingredientes deve conter pelo menos 10 caracteres.");
            isValid = false;
        } else {
            setMessageIngredientesError('');
        }

        if (!product) {
            setProductError(true);
            isValid = false;
        } else {
            setProductError(false);
        }

        if (!preparationTime) {
            setPreparationTimeError(true);
            isValid = false;
        } else {
            setPreparationTimeError(false);
        }

        if (!complexity) {
            setComplexityError(true);
            isValid = false;
        } else {
            setComplexityError(false);
        }

        if (!occasion) {
            setOccasionError(true);
            isValid = false;
        } else {
            setOccasionError(false);
        }

        return isValid;
    }

    function sendEmail(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!termsRecipes) {
            alert("Você deve aceitar os termos para enviar a receita.");
            return;
        }

        if (!validateForm()) {
            return;
        }
        const templateParams = {
            from_name: name,
            message: message,
            email: email,
            product: product,
            preparationTime: preparationTime,
            occasion: occasion,
            complexity: complexity,
            messageIngredientes: messageIngredientes

        };

        console.log(product, preparationTime, occasion, complexity)

        emailjs.send("service_muleqcd", "template_2hcmneb", templateParams, "tIqHzA3OxyVJIggwL")
            .then((response) => {
                console.log("email Enviado", response.status, response.text);
                setMessage('');
                setEmail('');
                setName('');
                setComplexity('');
                setMessageIngredientes('');
                setOccasion('');
                setPreparationTime('');
                setSucessEmail(true);
            }, () => {
            });
    }


    return (
        <>
            {sucessEmail &&
                <FormSend />
            }


            <div className={`w-screen fixed h-screen inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50`}>

                <div className="bg-white p-6 overflow-x-auto rounded-lg shadow-lg w-[90%] h-[90%] text-black">
                    <span className="mb-2 font-conthrax text-xl text-vermelho font-bold lg:text-3xl">Envie sua receita</span>

                    <form className="w-full flex justify-center items-center flex-col mt-3 md:items-center md:text-[12px] 
                           md:mt-6 md:justify-center md:flex-col lg:text-[15px]" onSubmit={sendEmail}>
                        <div className="w-full h-full flex items-center justify-center flex-col space-y-2 md:space-y-0 md:flex-row 
                            md:w-[100%] md:h-[40px] md:space-x-4">
                            <div className="w-full h-full flex items-center flex-col md:items-start">
                                <select value={product} onChange={(e) => setProduct(e.target.value)} className={`p-2 rounded-lg w-full 
                                    ${productError ? 'text-vermelho' : 'text-black'} border border-black`}>
                                    <option value="">Selecione o produto</option>
                                    <option value="Linguiça Toscana Apimentada Belunno">Linguiça Toscana Apimentada</option>
                                    <option value="Copa Defumada Belunno">Copa Defumada</option>
                                    {/*<option value="Salaminho Belunno">Salaminho</option>*/}
                                    <option value="Embutido Misto Sabor Calabresa Belunno">Embutido Misto Sabor Calabresa</option>
                                    <option value="Salame Italiano Belunno">Salame Italiano</option>
                                    <option value="Linguiça Toscana Belunno">Linguiça Toscana</option>
                                    <option value="Linguiça de Churrasco Belunno">Linguiça de Churrasco</option>
                                    <option value="Salaminho e Copa Defumada Belunno">Salaminho e Copa Defumada</option>
                                </select>
                            </div>

                            <div className="w-full h-full flex flex-col items-center md:items-start">
                                <select value={preparationTime} onChange={(e) => setPreparationTime(e.target.value)} className={`p-2 rounded-lg 
                                w-full ${preparationTimeError ? 'text-vermelho' : 'text-black'} border border-black`}>
                                    <option value="">Tempo de preparo</option>
                                    <option value="Rápido">Rápido</option>
                                    <option value="Médio">Médio</option>
                                    <option value="Demorado">Demorado</option>
                                </select>
                            </div>

                            <div className="w-full h-full flex flex-col items-center lg:mb-0 md:items-start">
                                <select value={complexity} onChange={(e) => setComplexity(e.target.value)} className={`p-2 rounded-lg w-full 
                                    ${complexityError ? 'text-vermelho' : 'text-black'} border border-black`}>
                                    <option value="">Complexidade</option>
                                    <option value="Baixa">Fácil</option>
                                    <option value="Média">Média</option>
                                    <option value="Alta">Difícil</option>
                                </select>
                            </div>

                            <div className='w-full h-full flex flex-col items-center lg:mb-0 md:items-start'>
                                <select value={occasion} onChange={(e) => setOccasion(e.target.value)} className={`p-2 rounded-lg w-full 
                                    ${occasionError ? 'text-vermelho' : 'text-black'} border border-black`}>
                                    <option value="">Ocasião</option>
                                    <option value="Café da manhã">Café da manhã</option>
                                    <option value="Almoço">Almoço</option>
                                    <option value="Jantar">Jantar</option>
                                    <option value="Happy hour">Happy hour</option>
                                    <option value="Churrasco">Churrasco</option>
                                </select>
                            </div>
                        </div>

                        <div className="w-full h-[150px] mt-4 flex justify-center items-center md:mt-0 md:w-[100%]">
                            <div className="w-full h-full flex justify-start items-start flex-col md:items-start">
                                <span className="text-[14px] mb-1 md:text-[15px] md:pl-4">Ingredientes</span>
                                <textarea
                                    placeholder={messageIngredientesError || ""}
                                    onChange={(e) => setMessageIngredientes(e.target.value)}
                                    value={messageIngredientes}
                                    maxLength={500}
                                    className={`w-[100%] h-[130px] bg-white text-black rounded-md border-black border 
                                        ${messageIngredientesError ? 'placeholder-red-600' : 'placeholder-black'} pl-4`}
                                />
                            </div>
                        </div>

                        <div className="w-full h-[170px] mt-2 flex justify-center items-center md:mt-0 md:w-[100%]">
                            <div className="w-full flex justify-start items-start flex-col md:items-start">
                                <span className="text-[14px] mb-1 md:pl-4 md:text-[15px]">Mensagem</span>
                                <textarea
                                    placeholder={messageError || ""}
                                    onChange={(e) => setMessage(e.target.value)}
                                    value={message}
                                    maxLength={500}
                                    className={`w-[100%] h-[130px] bg-white text-black rounded-md border-black border 
                                        ${messageError ? 'placeholder-red-600' : 'placeholder-black'} pl-4`}
                                />
                            </div>
                        </div>

                        <div className='w-full flex justify-center items-center flex-col space-y-2 mt-4 md:flex-row md:space-y-0'>
                            <div className="w-full flex items-center flex-col md:items-start">
                                <input type="text"
                                    placeholder={nameError || "Nome"}
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    maxLength={100}
                                    className={`w-[100%] h-[36px] bg-white text-black rounded-md md:w-[95%] border-black border
                                        ${nameError ? 'placeholder-red-600' : 'placeholder-black'} pl-4`}
                                />
                            </div>

                            <div className="w-full flex flex-col items-center md:items-start">
                                <input type="text"
                                    placeholder={emailError || "Email"}
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    className={`w-[100%] h-[36px] bg-white text-black rounded-md md:w-[95%] border-black border
                                        ${emailError ? 'placeholder-red-600' : 'placeholder-black'} pl-4`}
                                />
                            </div>

                            <button type="submit" className="font-conthrax text-[16px] bg-vermelho text-white px-3 rounded-lg uppercase
                                hover:bg-laranja hover:text-black">Enviar</button>
                        </div>

                        <div className='w-full flex flex-col items-center mt-4 font-bold space-y-2 text-justify md:mt-6 md:items-start'>
                            <h6>Todas as receitas enviadas passarão por uma avaliação antes de serem publicadas no site. </h6>
                            <div className='w-full flex justify-start items-center space-x-2 flex-col md:flex-row'>
                                <input
                                    type="checkbox"
                                    id="popularRecipes"
                                    checked={termsRecipes}
                                    onChange={(e) => setTermsRecipes(e.target.checked)}
                                    className="h-6 w-6 cursor-pointer"
                                />
                                <label htmlFor="popularRecipes" className="text-black">
                                    Eu li e aceito os termos de uso e regulamento de publicação de receitas impostas por
                                    <span className='md:text-[14px] xl:text-base'> BELLUUNÔ INDÚSTRIA DE ALIMENTOS LTDA.</span>
                                </label>
                            </div>
                        </div>

                        <div className='w-full mt-4 max-h-[200px] overflow-y-auto flex flex-col'>
                            <h6 className='text-vermelho font-bold mb-1 text-base'>Regulamento:</h6>
                            <p>
                            Ao enviar suas receitas e produtos por meio deste site, você concorda em fornecer informações precisas e verdadeiras, garantindo que tem todos os direitos sobre o conteúdo enviado. As informações fornecidas, como nome dos produtos e detalhes da receita, serão usadas exclusivamente para processar o envio e avaliá-las para possível inclusão em nossa base de dados. Você autoriza a empresa a utilizar, editar e exibir o conteúdo em nossos canais de comunicação, como site e redes sociais, sem que isso gere qualquer compensação. A empresa reserva-se o direito de revisar e remover envios inadequados, que violem direitos de terceiros ou que não atendam aos nossos critérios de qualidade. O usuário é responsável por garantir que o conteúdo enviado não infrinja nenhuma lei, regulamento ou direito de propriedade intelectual de terceiros. Todos os dados serão armazenados em nossos servidores conforme nossa Política de Privacidade, e o uso contínuo do site implica aceitação das possíveis atualizações nos termos. Caso tenha dúvidas ou precise de mais informações, o usuário pode entrar em contato diretamente com a empresa através de nossos canais oficiais.
                            </p>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}
