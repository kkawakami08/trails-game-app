import BadgeBannerIcon from "@/assets/badge-banner.svg?react";
import acornIcon from "@/assets/icon-acorn.svg";

const BadgeHeader = ({ resourceType }) => {
  return (
    <div className="w-full">
      <div className="absolute left-4 flex  justify-center">
        <BadgeBannerIcon className={`w-7 ${"text-pale-brown"}`} />
        <img src={acornIcon} className="absolute w-5 top-3  " />
      </div>
      <p className="bg-[#B54B32] text-white rounded-t-lg text-right font-bold text-xs py-2 px-3 tracking-[.1rem] w-full">
        {"birdwatching".toUpperCase()}
      </p>
    </div>
  );
};

export default BadgeHeader;
