import { Tooltip } from "flowbite-react";
import LocationTile from "./LocationTile";
import TrailEnds from "./TrailEnds";

function MainTrail({ playerCount, firstTime }) {
  const starterTrailOrder = ["trade", "leaf", "acorn", "photo", "rock"];
  const randomTrailorder = [...starterTrailOrder].sort(
    () => Math.random() - 0.5
  );

  return (
    <Tooltip
      content="Click on the trail locations to flip!"
      placement="top"
      trigger="hover"
      animation="duration-200"
      className=" bg-slate-200 text-black text-center text-xs mt-1 "
    >
      <div className="md:max-w-7xl border-4 border-off-white rounded-lg grid grid-cols-7 h-[20rem] ">
        <TrailEnds playerCount={playerCount} location={"start"} />
        {(firstTime ? starterTrailOrder : randomTrailorder).map((location) => (
          <LocationTile flipped={false} location={location} key={location} />
        ))}
        <TrailEnds playerCount={playerCount} location={"end"} />
      </div>
    </Tooltip>
  );
}

export default MainTrail;
