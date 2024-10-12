import trailHeadBG from "@/assets/locations/trail-bg-start.jpg";
import canteen from "@/assets/icon-canteen.svg";
import dayBadge from "@/assets/icon-badge-start.svg";
import { TiLocationArrow } from "react-icons/ti";

import StartTwoPlayer from "./StartTwoPlayer";
import StartFourPlayer from "./StartFourPlayer";

const TrailStart = ({ playerCount }) => {
  return (
    <div
      className="h-[26rem] w-56 bg-cover bg-center flex flex-col items-center py-4 justify-between relative"
      style={{ backgroundImage: `url(${trailHeadBG})` }}
    >
      {playerCount == 4 ? (
        <StartFourPlayer location={"start"} />
      ) : (
        <StartTwoPlayer location={"start"} />
      )}
      {/* //*Canteen & Badge */}
      <div className="bg-white flex flex-col rounded-full items-center gap-2 w-[4.2rem] h-[8rem] justify-center ">
        <img src={canteen} className="w-10" />
        <img src={dayBadge} className="w-10" />
      </div>
      <div className="bg-dark-green rounded-full p-[.15rem] absolute bottom-2 right-2">
        <TiLocationArrow className="text-white rotate-45 text-lg" />
      </div>
    </div>
  );
};

export default TrailStart;
