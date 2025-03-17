import Proptypes from "prop-types";

const Badge = ({ badges }) => {
  return (
    <div className="flex w-full flex-wrap gap-1">
      {badges.map((badgeItems) => (
        <span
          key={badgeItems}
          className="flex items-center justify-around gap-2 rounded bg-secondary_100 px-2 py-1 text-[12px] font-bold uppercase tracking-wider text-secondary_200"
        >
          {badgeItems}
        </span>
      ))}
    </div>
  );
};

Badge.propTypes = {
  badges: Proptypes.array,
};

export default Badge;
