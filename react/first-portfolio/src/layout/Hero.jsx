import { ButtonPrimary, ButtonSecondary } from "../components/Buttons/Buttons";
import { motion } from "framer-motion";
import MY_PICTURE from "../assets/my_picture.jpg";
import DOWNLOAD_ICON from "../assets/download_icon.svg";
import ORNAMENT from "../assets/ornament.svg";
import CURRICULO_PDF from "../assets/frontend_paulo_victor.pdf";

const Hero = () => {
  return (
    <>
      <motion.main
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5, ease: "linear" }}
        id="sobre"
        className="container relative z-10 mx-auto mt-[70px] flex flex-col items-center justify-center gap-6 p-4 md:flex-row"
      >
        <div className="max-h-[450px] max-w-[400px] flex-1 overflow-hidden rounded">
          <img
            loading="lazy"
            src={MY_PICTURE}
            alt="Minha foto"
            className="duration-400 w-full object-cover transition-all ease-in hover:scale-[1.2]"
            width={400}
            height={415}
          />
        </div>
        <div className="flex max-h-[400px] max-w-[500px] flex-1 flex-col gap-2">
          <span className="text-xs uppercase text-blue_300">Quem sou?</span>
          <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Paulo Victor Silva Rosa
          </h1>
          <span className="text-lg font-medium text-gray-100">
            Desenvolvedor Frontend
          </span>
          <p className="max-w-[80ch] text-sm text-gray_200 md:text-base">
            Olá! Sou Paulo Victor, formado em Análise e Desenvolvimento de
            Sistemas pela Unicesumar. Tenho conhecimento nas principais
            ferramentas de Programação Frontend e UI Design do mercado. Minha
            experiência vem dos projetos que desenvolvi, nos quais crio o design
            de interfaces intuitivas e eficientes, além de programá-las em
            projetos completos para oferecer experiências visuais envolventes
            <span className="text-primary_100">.</span>
          </p>
          <div className="flex gap-3">
            <ButtonPrimary
              label="Curriculo"
              link={CURRICULO_PDF}
              icon={DOWNLOAD_ICON}
            />
            <ButtonSecondary label="Contatos" link="#contatos" />
          </div>
        </div>
        {/* top */}
        <div className="absolute left-4 top-0 hidden xl:block">
          <img src={ORNAMENT} alt="Website detail" />
        </div>
        {/* bottom */}
        <div className="absolute bottom-0 right-4 hidden xl:block">
          <img src={ORNAMENT} alt="Website detail" />
        </div>
      </motion.main>
    </>
  );
};

export default Hero;
