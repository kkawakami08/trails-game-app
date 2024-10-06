import acornIcon from "../../assets/icon-acorn.svg";
import leafIcon from "../../assets/icon-leaf.svg";
import rockIcon from "../../assets/icon-rock.svg";
import badgePic from "../../assets/badge-birdwatching-acorn.svg";
import twoBirdPoints from "../../assets/icon-points-two-birds.svg";
import oneBirdPoint from "../../assets/icon-points-one-bird.svg";
import pointIcon from "../../assets/icon-points.svg";

import BadgeBanner from "./BadgeBanner";

const BadgeCard = () => {
  return (
    <div className="bg-[#4F2C18] w-56 h-60 rounded-lg flex flex-col items-center">
      <BadgeBanner resourceType={acornIcon} bgColor={"pale-brown"} />
      {/* //section badge name */}
      <p className="bg-[#B54B32] text-white rounded-t-lg text-right font-bold text-xs py-2 px-3 tracking-wider w-full">
        {"birdwatching".toUpperCase()}
      </p>
      {/* //section badge image */}
      <img src={badgePic} className="w-28  my-5 " />
      {/* //section badge cost */}
      <div className="relative w-full">
        <div className="flex gap-2 bg-slate-200 justify-center py-2">
          <img src={acornIcon} alt="acorn" className="w-5" />
          <img src={acornIcon} alt="acorn" className="w-5" />
          <img src={rockIcon} alt="rock" className="w-5" />
          <img src={leafIcon} alt="leaf" className="w-5" />
        </div>
        {/* centered upside down triangle */}
        <div className="absolute w-full flex justify-center -bottom-2">
          <svg viewBox="0 0 20 10" className="w-4 h-2 fill-slate-200">
            <path d="M0,0 L20,0 L10,10 Z" />
          </svg>
        </div>
      </div>
      {/* //section badge description */}
      <div className="bg-white flex justify-center py-3 rounded-b-lg w-full gap-2 p-3">
        {/* //note make point icon div into component */}
        <div className="min-w-16 relative ">
          <img src={twoBirdPoints} className="object-cover" />
          <p className="text-xl text-white font-semibold absolute inset-0 flex items-center justify-center top-2">
            3
          </p>
        </div>
        {/* <p className=" text-xs">
          Earn a <strong>BADGE</strong> next to you or from your hand without
          paying its cost
        </p> */}
      </div>
    </div>
  );
};

export default BadgeCard;
