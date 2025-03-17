import { ButtonPrimary, ButtonSecondary } from "../Buttons/Buttons";
import { motion } from "framer-motion";
import Proptypes from "prop-types";
import Badge from "../Texts/Badge";

export const Card = ({ ProjectsInfo }) => {
  return (
    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {ProjectsInfo.map(
        ({
          id,
          name,
          image_path,
          icon,
          label_button,
          description,
          repository,
          demonstration,
          badges,
        }) => (
          <motion.article
            initial={{ opacity: 0, translateX: "-100px", scale: 0.8 }}
            whileInView={{ opacity: 1, translateX: "0px", scale: 1 }}
            transition={{ duration: 0.9, delay: 0 }}
            key={id}
            className="blur-effect relative min-h-[300px] max-w-[370px] overflow-hidden rounded bg-dark_blue_100"
          >
            <div className="relative h-[250px] w-full overflow-hidden">
              <img
                loading="lazy"
                src={image_path}
                className="duration-400 object-cover transition-all ease-in hover:scale-[1.2]"
                alt={name}
                width={384}
                height={280}
              />
              <div className="absolute bottom-2 left-2 flex w-full items-center justify-items-start gap-2">
                <Badge badges={badges} />
              </div>
            </div>

            <div className="p-3">
              <div className="mb-4 flex min-h-[100px] flex-col items-start justify-between gap-2">
                <h3 className="text-2xl font-bold capitalize">{name}</h3>
                <p className="text-gray_200">{description}</p>
              </div>

              <div className="flex w-full flex-wrap items-center justify-between gap-3">
                {repository ? (
                  <ButtonPrimary
                    label={label_button}
                    icon={icon}
                    link={repository}
                    target="_blank"
                  />
                ) : null}
                {demonstration ? (
                  <ButtonSecondary
                    label="Demo"
                    link={demonstration}
                    target="_blank"
                  />
                ) : null}
              </div>
            </div>
          </motion.article>
        ),
      )}
    </div>
  );
};

export const EducationCard = ({ EducationInfos }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {EducationInfos.map(
        ({ id, escolarity, title, institution, time, icon }) => (
          <motion.article
            initial={{ opacity: 0, translateX: "-100px", scale: 0.8 }}
            whileInView={{ opacity: 1, translateX: "0px", scale: 1 }}
            transition={{ duration: 0.9, delay: 0 }}
            key={id}
            className="flex min-h-[200px] min-w-[300px] flex-col items-start justify-between rounded border border-blue_300 bg-dark_blue_100 p-4"
          >
            <div className="flex flex-col gap-4 capitalize">
              <strong className="flex items-center justify-start gap-2 text-gray_200">
                {escolarity}
                <img
                  loading="lazy"
                  src={icon}
                  alt="Icon"
                  width={20}
                  height={20}
                />
              </strong>
              <h3 className="max-w-[20ch] text-2xl font-bold">{title}</h3>
            </div>
            <div className="flex w-full items-start justify-between gap-2 uppercase">
              <p className="flex-1 break-all text-sm text-gray_200">
                {institution}
              </p>

              {time ? (
                <span className="break-all text-right text-sm text-gray_200">
                  {time}H
                </span>
              ) : null}
            </div>
          </motion.article>
        ),
      )}
    </div>
  );
};

Card.propTypes = {
  ProjectsInfo: Proptypes.array,
};

EducationCard.propTypes = {
  EducationInfos: Proptypes.array,
};
