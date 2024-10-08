import BadgeCard from "./components/badge/BadgeCard";

import { badges } from "@/data/cardData";

function App() {
  return (
    <div className="bg-red-900 h-fit w-fit p-5 flex flex-wrap gap-2">
      {badges.map((badge, index) => (
        <BadgeCard key={index} badge={badge} />
      ))}
    </div>
  );
}

export default App;
