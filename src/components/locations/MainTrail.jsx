import LocationTile from "./LocationTile";
import TrailEnds from "./TrailEnds";

function MainTrail() {
  const playerCount = 3;

  const starterTrailOrder = ["trade", "leaf", "acorn", "photo", "rock"];
  const randomTrailorder = starterTrailOrder.sort(() => Math.random() - 0.5);

  return (
    <div className="md:max-w-7xl bg-blue-500 grid grid-cols-7 h-[20rem]">
      <TrailEnds playerCount={playerCount} location={"start"} />
      {randomTrailorder.map((location) => (
        <LocationTile flipped={false} location={location} />
      ))}
      <TrailEnds playerCount={playerCount} location={"end"} />
    </div>
  );
}

export default MainTrail;
