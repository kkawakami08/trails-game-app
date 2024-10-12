import trailEndBG from "@/assets/locations/trail-bg-end.jpg";
import sunIcon from "@/assets/icon-sun.svg";
import nightBadge from "@/assets/icon-badge-end.svg";
import { TiLocationArrow } from "react-icons/ti";

import StartTwoPlayer from "./StartTwoPlayer";
import StartFourPlayer from "./StartFourPlayer";

import { FaLongArrowAltLeft } from "react-icons/fa";

const TrailEnd = ({ playerCount }) => {
  return (
    <div
      className="h-[26rem] w-56 bg-cover bg-center flex flex-col items-center py-4 justify-between relative"
      style={{ backgroundImage: `url(${trailEndBG})` }}
    >
      {playerCount == 4 ? (
        <StartFourPlayer location={"end"} />
      ) : (
        <StartTwoPlayer location={"end"} />
      )}
      {/* //*Canteen & Badge */}
      <div className="bg-white flex flex-col rounded-full items-center w-[4.2rem] h-[8rem] justify-center ">
        <div className="flex flex-col items-center">
          <img src={sunIcon} className="w-12" />
          <FaLongArrowAltLeft className="text-3xl text-dark-blue -mt-3" />
        </div>

        <img src={nightBadge} className="w-10" />
      </div>
      <div className="bg-light-blue rounded-full p-[.15rem] absolute bottom-2 left-2">
        <TiLocationArrow className="text-white text-lg -rotate-[135deg]" />
      </div>
    </div>
  );
};

export default TrailEnd;
