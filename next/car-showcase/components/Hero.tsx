"use client";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Encontre, compre ou alugue um carro — rápido e fácil!
        </h1>

        <p className="hero__subtitle">
          Estamos aqui para ajudar você a encontrar o carro perfeito para sua
          viagem.
        </p>

        <CustomButton
          handleClick={handleScroll}
          title="Procurar carros"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/hero.png"
            alt="Hero car"
            fill
            className="object-contain"
          />
        </div>
        <div className="hero__image-overlay"></div>
      </div>
    </div>
  );
};

export default Hero;
