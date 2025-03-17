import { Card } from "../components/Cards/Card";
import { motion } from "framer-motion";
import SectionsTitle from "../components/Texts/SectionsTitle";
import ProjectsInfo from "../utils/ProjectsInfo";
import ORNAMENT from "../assets/ornament.svg";

const Projects = () => {
  return (
    <motion.section
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.2, ease: "linear" }}
      id="projetos"
      className="container relative mx-auto my-10 w-full p-4"
    >
      <SectionsTitle
        heading="Projetos"
        paragraph="Demonstrações e repositórios dos meus projetos"
        detail="."
      />

      <div className="my-10 flex flex-wrap items-stretch justify-center gap-x-6 gap-y-8">
        <Card ProjectsInfo={ProjectsInfo} />
      </div>

      {/* ornament bottom */}
      <div className="absolute bottom-0 left-4 hidden xl:block">
        <img src={ORNAMENT} alt="Website detail" />
      </div>

      {/* ornament top */}
      <div className="absolute right-4 top-0 hidden xl:block">
        <img src={ORNAMENT} alt="Website detail" />
      </div>
    </motion.section>
  );
};

export default Projects;
