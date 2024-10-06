import BadgeBannerIcon from "../../assets/badge-banner.svg?react";

const BadgeBanner = ({ resourceType, bgColor }) => {
  return (
    <div className="absolute left-4 flex  justify-center">
      <BadgeBannerIcon className={`w-7 ${bgColor}`} />
      <img src={resourceType} className="absolute w-5 top-3  " />
    </div>
  );
};

export default BadgeBanner;
