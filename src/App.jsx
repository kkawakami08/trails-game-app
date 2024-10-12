import BadgeCard from "./components/badge/BadgeCard";
import LocationTile from "./components/locations/LocationTile";
import TrailEnds from "./components/locations/TrailEnds";

import { badges } from "@/data/cardData";

function App() {
  const playerCount = 3;
  return (
    <div className="bg-red-900 h-screen w-screen p-5 flex flex-wrap gap-2">
      <TrailEnds playerCount={playerCount} location={"start"} />
      <TrailEnds playerCount={playerCount} location={"end"} />
    </div>
  );
}

export default App;
