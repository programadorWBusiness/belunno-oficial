import { useState } from 'react';

interface CarouselProps {
  images: string[];
}

const CustomCarousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Função para avançar no carrossel
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Função para voltar no carrossel
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Definir o índice das imagens a serem mostradas
  const getSlideIndex = (index: number) => {
    return (currentIndex + index) % images.length;
  };

  return (
    <div className="w-full h-[500px] flex justify-center items-center lg:justify-end">
      <div className="relative w-[90%] h-full flex justify-center items-center 2xl:w-[80%]">
        {/* Botões de navegação */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-laranja px-4 py-2 z-10
            font-bold text-4xl"
            title='Anterior'
        >
          {"<"}
        </button>

        {/* Imagens no carrossel */}
        <div className="flex w-full h-full justify-center items-center">
          {/* Imagem da esquerda (10%) */}
          <div className="w-[10%] h-[90%] opacity-50 transform scale-90 xl:w-[20%]">
            <img
              src={images[getSlideIndex(images.length - 1)]}
              alt="Slide"
              className="h-full w-full object-cover rounded"
            />
          </div>

          {/* Imagem central (80%) */}
          <div className="w-[80%] h-[80%] mx-2 transform scale-100 md:mx-4 xl:w-[60%]">
            <img
              src={images[currentIndex]}
              alt="Slide"
              className="h-full w-full object-cover shadow-lg"
            />
          </div>

          {/* Imagem da direita (10%) */}
          <div className="w-[10%] h-[90%] opacity-50 transform scale-90 xl:w-[20%]">
            <img
              src={images[getSlideIndex(1)]}
              alt="Slide"
              className="h-full w-full object-cover rounded"
            />
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-laranja px-4 py-2 z-10
            font-bold text-4xl"
          title='Proximo'
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default CustomCarousel;