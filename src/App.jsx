import BadgeCard from "./components/badge/BadgeCard";
import LocationTile from "./components/locations/LocationTile";
import TrailStart from "./components/locations/TrailStart";
import TrailEnd from "./components/locations/TrailEnd";

import { badges } from "@/data/cardData";

function App() {
  const playerCount = 4;
  return (
    <div className="bg-red-900 h-screen w-screen p-5 flex flex-wrap gap-2">
      <TrailStart playerCount={playerCount} />
      {/* <LocationTile />{" "} */}
      <TrailEnd playerCount={playerCount} />
    </div>
  );
}

export default App;
