import sunIcon from "@/assets/icon-sun.svg";
import photoIcon from "@/assets/icon-photo.svg";

const StartFourPlayer = ({ location, resources }) => {
  return (
    <div className="flex  w-full justify-evenly ">
      {location === "start" && (
        <div className="bg-white flex items-center justify-center rounded-full gap-1 w-[4.3rem] h-9">
          <img src={sunIcon} className="w-7" />
          <img src={photoIcon} className="w-5" />
        </div>
      )}

      {resources.map((resource, index) => (
        <div
          key={index}
          className={`bg-white flex flex-col items-center rounded-full justify-center gap-1  py-2 ${
            location === "start" ? "px-1" : "px-2"
          }`}
        >
          {location === "start" && <img src={resource} className="w-4" />}
          <img src={resource} className="w-4" />
        </div>
      ))}
    </div>
  );
};

export default StartFourPlayer;
