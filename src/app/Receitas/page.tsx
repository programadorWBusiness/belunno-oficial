"use client";

import React, { useState, useEffect } from "react";
import { IoMdHeart } from "react-icons/io";
import { SendRecipiesModal } from "../components/SendRecipiesModal";

interface Recipe {
    name: string;
    product: string;
    img?: string;
    vid?: string;
    prep_time: string; // ou number, dependendo de como você está armazenando o tempo
    prep_tm: string;
    complexity: string;
    occasion: string[]; // ou string, dependendo da sua estrutura de dados
    ingredients: string[];
    preparation: string[];
}

export default function Page() {
    const [favorite, setFavorite] = useState<{ [key: number]: boolean }>({});
    const [product, setProduct] = useState("");
    const [preparationTime, setPreparationTime] = useState("");
    const [complexity, setComplexity] = useState("");
    const [occasion, setOccasion] = useState("");
    const [popularRecipes, setPopularRecipes] = useState(false);
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
    const [visibleRecipes, setVisibleRecipes] = useState(0);
    const [hasSearched, setHasSearched] = useState(false);
    const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [sendRecipies, setSendRecipies] = useState(false);

    useEffect(() => {
        const fetchRecipes = async () => {
            const response = await fetch("/data/recipes.json");
            const data = await response.json();
            setRecipes(data.recipes);
            setFilteredRecipes(data.recipes);
        };
        fetchRecipes();
    }, []);
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        // Filtrar as receitas com base nos valores selecionados
        const filtered = recipes.filter((recipe) => {
            const matchProduct = product ? recipe.product.includes(product) : true;
            const matchTime = preparationTime ? recipe.prep_tm === preparationTime : true;
            const matchComplexity = complexity ? recipe.complexity === complexity : true;
            const matchOccasion = occasion ? recipe.occasion.includes(occasion) : true;

            return matchProduct && matchTime && matchComplexity && matchOccasion;
        });

        setFilteredRecipes(filtered);
        setVisibleRecipes(0); // Resetar para o início do carrossel
        setHasSearched(true);
    };

    const nextRecipes = () => {
        if (visibleRecipes + 2 < filteredRecipes.length) {
            setVisibleRecipes(visibleRecipes + 1);
        }
    };

    const prevRecipes = () => {
        if (visibleRecipes > 0) {
            setVisibleRecipes(visibleRecipes - 1);
        }
    };

    const openModal = (recipe: Recipe) => {
        setSelectedRecipe(recipe);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedRecipe(null);
        setIsModalOpen(false);
    };

    const toggleFavorite = (index: number) => {
        setFavorite((prev) => ({
            ...prev,
            [index]: !prev[index], // Inverte o estado do favorito para o item clicado
        }));
    };

    return (
        <section className="w-screen h-full flex justify-center items-center flex-col">
            <div className="w-full h-full bg-white bg-gradient-to-r from-[#9a140f] to-[#e30a16] flex justify-end items-end">
                <span className={`${sendRecipies ? 'fixed' : 'hidden'} text-lg text-black bg-laranja py-2 px-4 rounded-3xl z-[99] top-[20px] 
                right-[10%] cursor-pointer hover:bg-vermelho hover:text-white`}
                    onClick={() => setSendRecipies(false)}>Fechar</span>
                <div className="w-full h-full flex justify-center md:w-[100%] lg:w-[95%]">
                    <div className="w-[90%] h-full flex flex-col items-center justify-center relative lg:w-[45%]">
                        <h1 className="w-full font-bold text-laranja mb-6 pt-10 text-left text-3xl 2xl:text-5xl">
                            Receitas Deliciosas com Produtos Belunno
                        </h1>
                        <p className="text-white text-xl text-justify mb-6">
                            Descubra receitas incríveis que trazem o sabor autêntico dos nossos embutidos suínos para a sua mesa. Inspire-se com pratos fáceis e saborosos, perfeitos para qualquer ocasião.
                        </p>
                        <div className="w-full text-white">
                            <h2 className="font-bold mb-4 text-laranja lg:text-xl xl:text-2xl">Encontre a Receita Perfeita</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="flex flex-col space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-4">
                                    <select value={product} onChange={(e) => setProduct(e.target.value)} className="p-2 rounded-lg w-full text-black">
                                        <option value="">Selecione o produto</option>
                                        <option value="Linguiça Toscana Apimentada Belunno">Linguiça toscana apimentada</option>
                                        <option value="Copa Defumada Belunno">Copa defumada</option>
                                        {/*<option value="Salaminho Belunno">Salaminho</option>*/}
                                        <option value="Embutido Misto Sabor Calabresa Belunno">Embutido misto sabor calabresa</option>
                                        <option value="Salame Italiano Belunno">Salame italiano</option>
                                        <option value="Linguiça Toscana Belunno">Linguiça toscana</option>
                                        <option value="Linguiça de Churrasco Belunno">Linguiça para churrasco</option>
                                        <option value="Linguiça Calabresa Belunno">Linguiça calabresa</option>
                                        <option value="Salaminho e Copa Defumada Belunno">Salaminho e copa defumada</option>
                                    </select>

                                    <select value={preparationTime} onChange={(e) => setPreparationTime(e.target.value)} className="p-2 rounded-lg w-full text-black">
                                        <option value="">Tempo de preparo</option>
                                        <option value="Rápido">Rápido</option>
                                        <option value="Médio">Médio</option>
                                        <option value="Demorado">Demorado</option>
                                    </select>

                                    <select value={complexity} onChange={(e) => setComplexity(e.target.value)} className="p-2 rounded-lg w-full text-black">
                                        <option value="">Complexidade</option>
                                        <option value="Baixa">Fácil</option>
                                        <option value="Média">Média</option>
                                        <option value="Alta">Difícil</option>
                                    </select>

                                    <select value={occasion} onChange={(e) => setOccasion(e.target.value)} className="p-2 rounded-lg w-full text-black">
                                        <option value="">Ocasião</option>
                                        <option value="Café da manhã">Café da manhã</option>
                                        <option value="Lanche">Lanche</option>
                                        <option value="Almoço">Almoço</option>
                                        <option value="Jantar">Jantar</option>
                                        <option value="Happy hour">Happy hour</option>
                                        <option value="Churrasco">Churrasco</option>
                                    </select>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        id="popularRecipes"
                                        checked={popularRecipes}
                                        onChange={(e) => setPopularRecipes(e.target.checked)}
                                        className="h-6 w-6"
                                    />
                                    <label htmlFor="popularRecipes" className="text-white">
                                        Me mostre as receitas mais populares.
                                    </label>

                                    <button
                                        type="submit"
                                        className="bg-yellow-400 hover:bg-yellow-500 text-black py-1 px-4 rounded-3xl font-semibold">
                                        Buscar
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="hidden w-[10%] h-[490px] bg-gradient-to-r from-[#bb1013] to-transparent absolute top-0 right-[-20%] lg:block md:w-[20%]"></div>
                    </div>
                    <div className="hidden w-[55%] min-h-[490px] h-full bg-green-200 bg-pizza-hand bg-cover bg-no-repeat bg-bottom lg:block"></div>
                </div>
            </div>

            {filteredRecipes.length > 0 &&

                <div className="w-full h-full bg-gradient-to-t from-[#e30a16] to-[#9a140f] flex flex-col justify-center items-center relative">
                    <div className="absolute w-full h-2 bg-gradient-to-r from-[#e30a16] to-[#9a140f] top-0"></div>

                    <div className="w-full h-full flex justify-center pt-6">
                        <div className="w-[90%] md:w-[80%] lg:w-[90%]"><span className="bg-laranja text-black py-1 px-4 rounded-3xl 
                        font-semibold cursor-pointer text-base xl:text-lg" onClick={() => setSendRecipies(true)}>{'[+]'} Enviar Receitas</span></div>
                    </div>

                    {sendRecipies &&
                        <>
                            <SendRecipiesModal />
                        </>
                    }

                    <div className="w-[80%] h-full flex justify-center items-center relative lg:w-[90%]">
                        <button
                            className="absolute left-[-10%] p-2 text-laranja font-bold text-3xl lg:left-[-3%]"
                            onClick={prevRecipes}
                        >
                            &lt;
                        </button>

                        {/*Versão Desktop */}
                        <div className="hidden space-x-6 w-full h-full justify-center items-center xl:flex">
                            {filteredRecipes.slice(visibleRecipes, visibleRecipes + 3).map((recipe, index) => (
                                <div key={index} className="w-[33%] h-full border-white border-8 my-6 shadow-md text-black flex 
                                flex-col justify-center items-center">
                                    {recipe.img &&
                                        <div className={`w-full h-[320px] bg-blue-300 ${recipe.img ? recipe.img : "bg-recipies"} bg-cover bg-center bg-no-repeat `}>{/*Imagens*/}</div>
                                    }

                                    {recipe.vid &&
                                        <video src={`/images/${recipe.vid}`}
                                            className="w-full h-[320px] object-cover"
                                            controls
                                            loop
                                            playsInline></video>
                                    }

                                    <h3 className="w-full font-bold text-xl text bg-laranja text-center h-[70px] 
                                        flex justify-center items-center">{recipe.name}</h3>
                                    <div className="w-full flex justify-center items-center p py-4 flex-col">
                                        <p className="text-white font-semibold text-lg">{Array.isArray(recipe.occasion) ? recipe.occasion.join(" / ") : "Nenhuma"}
                                            <span> - {recipe.prep_time}</span></p>
                                        <div className="flex justify-center items-center space-x-2">
                                            <span className="bg-laranja text-[14px] cursor-pointer text-black py-1 px-3 rounded-xl font-bold"
                                                onClick={() => openModal(recipe)}>Ver Receita</span>
                                            <div className="w-[30px] h-[30px]" onClick={() => toggleFavorite(index)}>
                                                <IoMdHeart className={`w-full h-full ${favorite[index] ? "text-laranja" : "text-white"}`} />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>

                        {/*versão Laptop md/lg*/}
                        <div className="hidden space-x-6 w-full h-full justify-center items-center md:flex xl:hidden">
                            {filteredRecipes.slice(visibleRecipes, visibleRecipes + 2).map((recipe, index) => (
                                <div key={index} className="w-[48%] h-full border-white border-8 my-6 shadow-md text-black flex 
                                    flex-col justify-center items-center">

                                    {recipe.img &&
                                        <div className={`w-full h-[220px] bg-blue-300 ${recipe.img ? recipe.img : "bg-recipies"} bg-cover bg-center bg-no-repeat `}>{/*Imagens*/}</div>
                                    }

                                    {recipe.vid &&
                                        <video src={`/images/${recipe.vid}`}
                                            className="w-full h-[220px] object-fill"
                                            controls
                                            loop
                                            playsInline></video>
                                    }

                                    <h3 className="w-full font-bold text-lg text bg-laranja text-center h-[80px] 
                                        flex justify-center items-center px-2">{recipe.name}</h3>
                                    <div className="w-full flex justify-center items-center py-4 space-y-2 flex-col">
                                        <p className="text-white font-semibold text-base">{Array.isArray(recipe.occasion) ? recipe.occasion.join(" / ") : "Nenhuma"}
                                            <span> - {recipe.prep_time}</span></p>
                                        <div className="flex justify-center items-center space-x-2">
                                            <span className="bg-laranja cursor-pointer text-[14px] text-black py-1 px-3 rounded-xl font-bold"
                                                onClick={() => openModal(recipe)}>Ver Receita</span>
                                            <div className="w-[30px] h-[30px]" onClick={() => toggleFavorite(index)}>
                                                <IoMdHeart className={`w-full h-full ${favorite[index] ? "text-laranja" : "text-white"}`} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/*Versão Mobile*/}
                        <div className="flex space-x-6 w-full h-full justify-center items-center md:hidden">
                            {filteredRecipes.slice(visibleRecipes, visibleRecipes + 1).map((recipe, index) => (
                                <div key={index} className="w-full h-full border-white border-8 my-6 shadow-md text-black flex 
                                flex-col justify-center items-center">
                                    
                                    {recipe.img &&
                                        <div className={`w-full h-[220px] bg-blue-300 ${recipe.img ? recipe.img : "bg-recipies"} bg-cover bg-center bg-no-repeat `}>{/*Imagens*/}</div>
                                    }

                                    {recipe.vid &&
                                        <video src={`/images/${recipe.vid}`}
                                            className="w-full h-[220px] object-fill"
                                            controls
                                            loop
                                            preload="metadata"
                                            playsInline></video>
                                    }

                                    <h3 className="w-full font-bold text-lg text bg-laranja text-center h-[100px] 
                                        flex justify-center items-center">{recipe.name}</h3>
                                    <div className="w-full flex justify-center items-center py-4 space-y-2 flex-col">
                                        <p className="text-white font-semibold text-base">{Array.isArray(recipe.occasion) ? recipe.occasion.join(" / ") : "Nenhuma"}
                                            <span> - {recipe.prep_time}</span></p>
                                        <div className="flex justify-center items-center space-x-2">
                                            <span className="bg-laranja text-[14px] text-black py-1 px-3 rounded-xl font-bold"
                                                onClick={() => openModal(recipe)}>Ver Receita</span>
                                            <div className="w-[30px] h-[30px]" onClick={() => toggleFavorite(index)}>
                                                <IoMdHeart className={`w-full h-full ${favorite[index] ? "text-laranja" : "text-white"}`} />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            className="absolute right-[-10%] p-2 text-laranja font-bold text-3xl lg:right-[-3%]"
                            onClick={nextRecipes}
                        >
                            &gt;
                        </button>
                    </div>
                </div>
            }

            {/* Exibir mensagem se não houver receitas filtradas */}
            {hasSearched && filteredRecipes.length === 0 && (
                <p className="text-black bg-laranja w-full text-center font-bold text-xl py-2">Nenhuma receita encontrada.</p>
            )}

            {/*Modal*/}
            {isModalOpen && selectedRecipe && (
                <div className="fixed w-screen h-screen inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 overflow-x-auto rounded-lg shadow-lg w-[90%] h-[90%] text-black">
                        <h2 className="text-2xl font-bold mb-4">{selectedRecipe.name}</h2>
                        <p className="text-lg font-medium">Produto: {selectedRecipe.product}</p>
                        <p className="text-lg font-medium">Tempo de preparo: {selectedRecipe.prep_time}</p>
                        <p className="text-lg font-medium">Complexidade: {selectedRecipe.complexity}</p>
                        <p className="text-lg font-medium">Ocasião: {selectedRecipe.occasion.join(" / ")}</p>

                        <h4 className="my-4 text-xl font-bold text-vermelho">Modo de Preparo:</h4>
                        <div className="">
                            <span className="text-lg font-bold">Ingredientes:</span>
                            <ul>
                                {selectedRecipe.ingredients.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-4">
                            <span className="text-lg font-bold">Modo de Preparo:</span>
                            <ul>
                                {selectedRecipe.preparation.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Adicione mais detalhes da receita aqui */}
                        <button onClick={closeModal} className="absolute top-0 right-[10%] mt-4 bg-laranja text-black py-2 px-4 rounded-lg">
                            Fechar
                        </button>
                    </div>
                </div>
            )}

        </section >
    );
}
