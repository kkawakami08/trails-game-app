import BadgeBanner from "../assets/badge-banner.svg?react";
import acornIcon from "../assets/icon-acorn.svg";

//dynamic variables:
// Header bg color
// title
// badge banner color
// resource icon

const BadgeCard = () => {
  return (
    <div className="bg-blue-600 w-44 h-60 rounded-lg">
      <div className="absolute left-3 flex  justify-center">
        <BadgeBanner className="w-7 text-red-400" />
        <img src={acornIcon} className="absolute w-5 top-3  " />
      </div>

      <p className="bg-green-500 rounded-t-lg text-right font-bold text-xs py-2 px-3 tracking-wider">
        {"birdwatching".toUpperCase()}
      </p>
    </div>
  );
};

export default BadgeCard;
