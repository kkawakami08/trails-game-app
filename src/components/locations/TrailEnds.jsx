import trailHeadBG from "@/assets/locations/trail-bg-start.jpg";
import trailEndBG from "@/assets/locations/trail-bg-end.jpg";
import canteen from "@/assets/icon-canteen.svg";
import dayBadge from "@/assets/icon-badge-start.svg";
import nightBadge from "@/assets/icon-badge-end.svg";
import sunIcon from "@/assets/icon-sun.svg";
import { TiLocationArrow } from "react-icons/ti";
import { FaLongArrowAltLeft } from "react-icons/fa";

import StartTwoPlayer from "./StartTwoPlayer";
import StartFourPlayer from "./StartFourPlayer";

const TrailEnds = ({ playerCount, location }) => {
  return (
    <div
      className="h-[26rem] w-56 bg-cover bg-center flex flex-col items-center py-4 justify-between relative"
      style={{
        backgroundImage: `url(${
          location === "start" ? trailHeadBG : trailEndBG
        })`,
      }}
    >
      {playerCount == 4 ? (
        <StartFourPlayer location={location} />
      ) : (
        <StartTwoPlayer location={location} />
      )}
      <div className="bg-white flex flex-col rounded-full items-center gap-2 w-[4.2rem] h-[8rem] justify-center ">
        {location === "start" ? (
          <img src={canteen} className="w-10" />
        ) : (
          <div className="flex flex-col items-center -mb-2">
            <img src={sunIcon} className="w-12" />
            <FaLongArrowAltLeft className="text-3xl text-dark-blue -mt-3" />
          </div>
        )}

        <img
          src={location === "start" ? dayBadge : nightBadge}
          className="w-10"
        />
      </div>
      <div
        className={`${
          location === "start"
            ? "bg-dark-green right-2"
            : "bg-light-blue left-2"
        } rounded-full p-[.15rem] absolute bottom-2 `}
      >
        <TiLocationArrow
          className={`text-white ${
            location === "start" ? "rotate-45" : "-rotate-[135deg]"
          } text-lg`}
        />
      </div>
    </div>
  );
};

export default TrailEnds;
