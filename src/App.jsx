import BadgeCard from "./components/badge/BadgeCard";
import LocationTile from "./components/locations/LocationTile";
import TrailEnds from "./components/locations/TrailEnds";

import { badges } from "@/data/cardData";

function App() {
  const playerCount = 4;
  return (
    <div className="bg-red-900 h-screen w-screen p-5 flex justify-center">
      <div className="md:max-w-7xl bg-blue-500 grid grid-cols-7 h-[20rem]">
        <TrailEnds playerCount={playerCount} location={"start"} />
        <LocationTile flipped={false} location={"trade"} />
        <LocationTile flipped={false} location={"photo"} />
        <LocationTile flipped={false} location={"leaf"} />
        <LocationTile flipped={false} location={"rock"} />
        <LocationTile flipped={false} location={"acorn"} />
        <TrailEnds playerCount={playerCount} location={"end"} />
      </div>
    </div>
  );
}

export default App;
