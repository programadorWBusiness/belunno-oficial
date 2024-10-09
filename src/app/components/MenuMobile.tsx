"use client"

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

type Props = {
    isMenuOpen: boolean;
    onClick: () => void;
}

export const MenuMobile = ({ isMenuOpen, onClick }: Props) => {

    return (
        <div className="flex w-10 h-10 md:hidden" onClick={onClick}>
            <div className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-45 opacity-0' : 'rotate-0 opacity-100'}`}>
                <AiOutlineMenu className="w-[46px] h-[46px] cursor-pointer text-white" />
            </div>
            <div className={`transition-transform duration-300 absolute ${isMenuOpen ? 'rotate-0 opacity-100' : 'rotate-45 opacity-0'}`}>
                <AiOutlineClose className="w-10 h-10 cursor-pointer text-white" />
            </div>
        </div>
    );
};
