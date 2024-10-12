import sunIcon from "@/assets/icon-sun.svg";
import photoIcon from "@/assets/icon-photo.svg";
import acornIcon from "@/assets/icon-acorn.svg";
import leafIcon from "@/assets/icon-leaf.svg";
import rockIcon from "@/assets/icon-rock.svg";

const StartFourPlayer = ({ location }) => {
  const resources = [acornIcon, leafIcon, rockIcon];
  return (
    <div className="flex  w-full justify-evenly ">
      {location === "start" && (
        <div className="bg-white flex items-center justify-center rounded-full gap-1  w-[5rem] h-11">
          <img src={sunIcon} className="w-8" />
          <img src={photoIcon} className="w-7" />
        </div>
      )}

      {resources.map((resource, index) => (
        <div
          key={index}
          className={`bg-white flex flex-col items-center rounded-full justify-center gap-2  py-3 ${
            location === "start" ? "px-2" : "px-3"
          }`}
        >
          {location === "start" && <img src={resource} className="w-5" />}
          <img src={resource} className="w-5" />
        </div>
      ))}
    </div>
  );
};

export default StartFourPlayer;
