import BadgeCard from "./components/badge/BadgeCard";

import { badgeCards } from "@/data/cardData";

function App() {
  return (
    <div className="bg-red-900 h-screen w-screen p-5 flex gap-5">
      <BadgeCard badge={badgeCards[0]} />
      <BadgeCard badge={badgeCards[3]} />
      <BadgeCard badge={badgeCards[2]} />
      {/* <BadgeCard /> */}
    </div>
  );
}

export default App;
