"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuMobile } from "./MenuMobile";
import { useState } from "react";

export default function Header() {
    const local = usePathname();
    const [MenuMobileOpen, setMenuMobileOpen] = useState<boolean>(false);

    const handleMenuOpen = () => {
        setMenuMobileOpen(!MenuMobileOpen);
    };

    const handleMenuClose = () => {
        setMenuMobileOpen(false); // Fecha o menu ao clicar no link
    };

    return (
        <header className={`w-screen h-[70px] ${local === '/' ? 'fixed top-0 z-10' : 'bg-laranja border-b-[6px] border-white'}   
            flex justify-center items-center`}>
            <div className="w-[80%] h-full flex justify-between items-center relative md:w-[90%] lg:w-[80%]">
                <Link href={"/"} onClick={handleMenuClose} title="HOME">
                    <div className="w-[200px] h-[70px] bg-belunne bg-contain bg-center bg-no-repeat"></div>
                </Link>

                {/* Menu desktop */}
                <ul className={`hidden justify-around items-center w-[60%] ${local === '/' ? 'text-white' : 'text-black'} h-full font-semibold uppercase md:flex`}>
                    <Link title="Home" href={"/"} className={`${local === '/' ? 'text-vermelho' : ''} hover:text-vermelho cursor-pointer`}>
                        Home
                    </Link>
                    <Link title="SOBRE" href={"/Sobre"} className={`${local === '/Sobre' ? 'text-vermelho' : ''} hover:text-vermelho cursor-pointer`}>
                        Sobre
                    </Link>
                    <Link title="PRODUTOS" href={"/Produtos"} className={`${local === '/Produtos' ? 'text-vermelho' : ''} hover:text-vermelho cursor-pointer`}>
                        Produtos
                    </Link>
                    <Link title="RECEITAS" href={"/Receitas"} className={`${local === '/Receitas' ? 'text-vermelho' : ''} hover:text-vermelho cursor-pointer`}>
                        Receitas
                    </Link>
                    <Link title="CONTATO" href={"/Contato"} className={`${local === '/Contato' ? 'text-vermelho' : ''} hover:text-vermelho cursor-pointer`}>
                        Contato
                    </Link>
                </ul>

                {/* Menu Mobile */}
                <MenuMobile isMenuOpen={MenuMobileOpen} onClick={handleMenuOpen} />

                <div className={`w-[85vw] ${MenuMobileOpen ? 'h-[400px]' : 'h-0'} bg-white absolute ${local === '/' ? 'top-20' : 'top-16'} 
                    transition-all duration-500 ease-in-out overflow-hidden flex justify-center items-center z-50`}>
                    <nav>
                        <ul className="flex flex-col justify-center items-center space-y-8 font-semibold uppercase text-3xl">
                            <Link href={"/"} onClick={handleMenuClose} className={`${local === '/' ? 'text-vermelho' : ''} hover:text-vermelho cursor-pointer`}>
                                Home
                            </Link>
                            <Link href={"/Sobre"} onClick={handleMenuClose} className={`${local === '/Sobre' ? 'text-vermelho' : ''} hover:text-vermelho cursor-pointer`}>
                                Sobre
                            </Link>
                            <Link href={"/Produtos"} onClick={handleMenuClose} className={`${local === '/Produtos' ? 'text-vermelho' : ''} hover:text-vermelho cursor-pointer`}>
                                Produtos
                            </Link>
                            <Link href={"/Receitas"} onClick={handleMenuClose} className={`${local === '/Receitas' ? 'text-vermelho' : ''} hover:text-vermelho cursor-pointer`}>
                                Receitas
                            </Link>
                            <Link href={"/Contato"} onClick={handleMenuClose} className={`${local === '/Contato' ? 'text-vermelho' : ''} hover:text-vermelho cursor-pointer`}>
                                Contato
                            </Link>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
