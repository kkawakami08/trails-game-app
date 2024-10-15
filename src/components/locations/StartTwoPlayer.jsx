import sunIcon from "@/assets/icon-sun.svg";
import photoIcon from "@/assets/icon-photo.svg";
import wildlifeIcon from "@/assets/icon-wildlife.svg";

const StartTwoPlayer = ({ location }) => {
  return (
    <div className="flex  w-full justify-evenly ">
      {location === "start" && (
        <div className="bg-white flex items-center justify-center rounded-full gap-1 w-[4.3rem] h-9">
          <img src={sunIcon} className="w-7" />
          <img src={photoIcon} className="w-5" />
        </div>
      )}

      <div className="bg-white flex items-center justify-center rounded-full gap-1 w-[4.3rem] h-9">
        <img src={wildlifeIcon} className="w-10" />
      </div>
    </div>
  );
};

export default StartTwoPlayer;
