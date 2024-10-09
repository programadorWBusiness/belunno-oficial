type Props = {
    reverse?: boolean;
    width: string;
    heigth: string;
    text: string;
    year: string;
    color?: string;
    pt?: string;
};

export const AboutLine = ({ reverse, width, heigth, text, year, color,pt }: Props) => {
    return (
        <div className={`${width} h-[200px] flex justify-start items-end absolute ${heigth} md:h-[250px]`}>
            <div className={`w-full h-full flex ${reverse ? "items-start" : "items-end"}`}>
                <div className="w-[100%] h-[15px] bg-white"></div>
                <div className={`min-w-[60px] w-[100px] h-[70px] border-white 
                    ${reverse ? "border-t-[15px] rounded-tr-full" : 'border-b-[15px] rounded-ee-full'} md:h-[100px] md:min-w-[100px]`}></div> 
            </div>

            <div className={`min-w-[150px] w-[130px] h-full flex ${reverse ? "flex-col-reverse lg:pb-14" : "flex-col lg:pt-10"} ${pt ? `${pt}` : 'pt-8'} md:min-w-[110px] lg:min-w-[150px]`}>
                <p className={`${color ? `${color}  text-[14px]` : 'text-gray-950 text-[14px]'}`}>{text}</p>
                <span className="text-2xl text-vermelho font-bold lg:text-2xl">{year}</span>
            </div>
        </div>
    );
};
