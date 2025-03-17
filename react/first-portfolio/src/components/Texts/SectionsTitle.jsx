import { motion } from "framer-motion";
import Proptypes from "prop-types";

const SectionsTitle = ({ heading, paragraph, detail }) => {
  return (
    <motion.div
      initial={{ opacity: 0, marginLeft: "-100px" }}
      whileInView={{ opacity: 1, marginLeft: "0px" }}
      transition={{ duration: 0.5, delay: 0 }}
    >
      <h2 className="mx-auto mb-2 max-w-[40ch] text-center text-3xl font-bold uppercase sm:text-5xl">
        {heading}
      </h2>
      <p className="mx-auto max-w-[70ch] text-center text-base text-gray_200 sm:text-lg">
        {paragraph}
        {detail ? <span className="text-primary_100">{detail}</span> : null}
      </p>
    </motion.div>
  );
};

SectionsTitle.propTypes = {
  heading: Proptypes.string,
  paragraph: Proptypes.string,
  detail: Proptypes.string,
};

export default SectionsTitle;
