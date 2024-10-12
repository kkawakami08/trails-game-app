import sunIcon from "@/assets/icon-sun.svg";
import photoIcon from "@/assets/icon-photo.svg";
import wildlifeIcon from "@/assets/icon-wildlife.svg";

const StartTwoPlayer = ({ location }) => {
  return (
    <div className="flex  w-full justify-evenly ">
      {location === "start" && (
        <div className="bg-white flex items-center justify-center rounded-full gap-1  w-[5rem] h-11">
          <img src={sunIcon} className="w-8" />
          <img src={photoIcon} className="w-7" />
        </div>
      )}

      <div className="bg-white flex items-center rounded-full justify-center   w-[5rem] h-11">
        <img src={wildlifeIcon} className="w-11" />
      </div>
    </div>
  );
};

export default StartTwoPlayer;
