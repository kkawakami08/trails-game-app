import BadgeBannerIcon from "@/assets/badge-banner.svg?react";
import acornIcon from "@/assets/icon-acorn.svg";
import rockIcon from "@/assets/icon-rock.svg";
import leafIcon from "@/assets/icon-leaf.svg";

const BadgeHeader = ({ resourceType, badgeName }) => {
  let headerData = {
    resourceIcon: acornIcon,
    bannerBG: "text-pale-brown",
    headerBG: "bg-acorn-brown",
  };

  if (resourceType === "leaf") {
    headerData = {
      resourceIcon: leafIcon,
      bannerBG: "text-pale-green",
      headerBG: "bg-leaf-green",
    };
  } else if (resourceType === "rock") {
    headerData = {
      resourceIcon: rockIcon,
      bannerBG: "text-pale-grey",
      headerBG: "bg-rock-grey",
    };
  }

  return (
    <div className="w-full">
      <div className="absolute left-4 flex  justify-center">
        <BadgeBannerIcon className={`w-7 ${headerData.bannerBG}`} />
        <img src={headerData.resourceIcon} className="absolute w-5 top-3  " />
      </div>
      <p
        className={` text-white rounded-t-lg text-right font-bold text-xs py-2 px-3 tracking-[.1rem] w-full ${headerData.headerBG}`}
      >
        {badgeName.toUpperCase()}
      </p>
    </div>
  );
};

export default BadgeHeader;
