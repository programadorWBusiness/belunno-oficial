import React from 'react';

type Props = {
    text: string;
    select?: boolean;
};

export const HeaderLi = ({ text, select }: Props) => {
    return (
        <li
            className="relative cursor-pointer uppercase group text-black text-4xl md:text-white md:text-lg"
            title={text}
        >
            {text}
            <span className={`${select ? 'w-full' : 'w-0'} h-1 bg-orange-600 absolute left-0 top-10 group-hover:w-full transition-all duration-600 md:top-6`}></span>
        </li>
    );
};
