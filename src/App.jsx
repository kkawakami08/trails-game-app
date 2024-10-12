import BadgeCard from "./components/badge/BadgeCard";
import LocationTile from "./components/locations/LocationTile";
import TrailStart from "./components/locations/TrailStart";

import { badges } from "@/data/cardData";

function App() {
  console.log("HI");
  return (
    <div className="bg-red-900 h-screen w-screen p-5 flex flex-wrap gap-2">
      <TrailStart playerCount={3} />
      {/* <LocationTile />{" "} */}
    </div>
  );
}

export default App;
