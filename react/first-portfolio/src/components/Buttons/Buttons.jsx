import Proptypes from "prop-types";

export const ButtonPrimary = ({ label, icon, link, styles, ...props }) => {
  return (
    <a
      href={link}
      rel="noreferrer"
      className={`md:justity-center bg-primary_300 text-blue_100 hover:bg-primary_200 flex max-w-[160px] flex-1 cursor-pointer items-center justify-around gap-2 rounded-[4px] px-4 py-2 text-base font-bold uppercase transition-all duration-300 ease-in-out hover:scale-[1.1] ${styles || ""}`}
      {...props}
    >
      {icon ? (
        <img loading="lazy" src={icon} alt={label} width={18} height={18} />
      ) : (
        ""
      )}
      {label}
    </a>
  );
};

export function ButtonSecondary({ label, icon, link, styles, ...props }) {
  return (
    <a
      href={link}
      rel="noreferrer"
      className={`border-blue_100 text-blue_100 hover:bg-primary_200 flex max-w-[160px] flex-1 cursor-pointer items-center justify-around gap-2 rounded-[4px] border bg-transparent px-4 py-2 text-base font-bold uppercase transition-all duration-300 ease-in-out hover:scale-[1.1] ${styles || ""}`}
      {...props}
    >
      {icon ? (
        <img loading="lazy" src={icon} alt={label} width={18} height={18} />
      ) : (
        ""
      )}
      {label}
    </a>
  );
}

ButtonPrimary.propTypes = {
  label: Proptypes.string,
  icon: Proptypes.string,
  link: Proptypes.string,
  styles: Proptypes.string,
};

ButtonSecondary.propTypes = {
  label: Proptypes.string,
  icon: Proptypes.string,
  link: Proptypes.string,
  styles: Proptypes.string,
};
