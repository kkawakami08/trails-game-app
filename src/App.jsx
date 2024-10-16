import BadgeCard from "./components/badge/BadgeCard";
import LocationTile from "./components/locations/LocationTile";
import TrailEnds from "./components/locations/TrailEnds";
import MainTrail from "./components/locations/MainTrail";

import { badges } from "@/data/cardData";

function App() {
  return (
    <div className="bg-red-900 h-screen w-screen p-5 flex justify-center">
      <MainTrail />
    </div>
  );
}

export default App;
