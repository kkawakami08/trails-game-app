import LocationTile from "./LocationTile";
import TrailEnds from "./TrailEnds";

function MainTrail({ playerCount, firstTime }) {
  const starterTrailOrder = ["trade", "leaf", "acorn", "photo", "rock"];
  const randomTrailorder = [...starterTrailOrder].sort(
    () => Math.random() - 0.5
  );

  return (
    <div className="md:max-w-7xl border-4 border-off-white rounded-lg grid grid-cols-7 h-[20rem] ">
      <TrailEnds playerCount={playerCount} location={"start"} />
      {(firstTime ? starterTrailOrder : randomTrailorder).map((location) => (
        <LocationTile flipped={false} location={location} key={location} />
      ))}
      <TrailEnds playerCount={playerCount} location={"end"} />
    </div>
  );
}

export default MainTrail;
