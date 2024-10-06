import BadgeBannerIcon from "../../assets/badge-banner.svg?react";

const BadgeBanner = ({ resourceType, bgColor }) => {
  return (
    <div className="absolute left-3 flex  justify-center">
      <BadgeBannerIcon className={`w-7 text-${bgColor}`} />
      <img src={resourceType} className="absolute w-5 top-3  " />
    </div>
  );
};

export default BadgeBanner;
