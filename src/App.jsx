import BadgeCard from "./components/badge/BadgeCard";
import MainTrail from "./components/locations/MainTrail";

import { Tooltip } from "flowbite-react";

import { badges } from "@/data/cardData";

import { useState } from "react";

function App() {
  const [playerCount, setPlayerCount] = useState(2);
  const [firstTime, setFirstTime] = useState(true);

  const activeBtn = "bg-red-photo text-off-white";
  const inActiveBtn = "bg-off-white text-black-wildlife";

  const players = [2, 3, 4];

  return (
    <div className="bg-med-brown h-fit w-screen py-5 flex flex-col items-center   gap-10 overflow-hidden ">
      <div className=" text-off-white tracking-widest flex flex-col md:flex-row items-center gap-5 px-5 text-center md:text-left lg:self-start  w-full lg:max-w-[90rem] mx-auto">
        <h1 className="font-extrabold text-8xl tracking-widest ">TRAILS</h1>
        <div className="">
          <p>A PARKS GAME BY KEYMASTER | HENRY AUDUBON</p>
          <p>ART BY FIFTY-NINE-PARKS</p>
        </div>
      </div>
      <MainTrail playerCount={playerCount} firstTime={firstTime} />
      <Tooltip
        content="Trail start & end changes depending on number of players (2-3/4)"
        placement="right"
        trigger="hover"
        animation="duration-200"
        className=" bg-slate-200 text-black text-center text-xs w-48 xl:w-fit "
      >
        <div className="flex flex-col lg:flex-row gap-3 font-bold text-off-white items-center ">
          <p className="bg-light-blue  text-2xl  tracking-wider p-3 rounded-lg">
            How many players?
          </p>
          <div className="flex gap-3">
            {players.map((count) => (
              <button
                key={count}
                className={`${
                  playerCount === count ? activeBtn : inActiveBtn
                } w-10 h-10 rounded-full text-xl `}
                onClick={() => setPlayerCount(count)}
              >
                {count}
              </button>
            ))}
          </div>
        </div>
      </Tooltip>
      <Tooltip
        content="First time players have a recommended layout for the trail"
        placement="right"
        trigger="hover"
        animation="duration-200"
        className=" bg-slate-200 text-black text-center text-xs w-48 2xl:w-fit"
      >
        <div className="flex flex-col gap-3 font-bold text-off-white justify-center items-center  text-center md:w-full lg:flex-row md:items-center -mt-1">
          <p className="bg-light-blue w-72 xl:w-fit  text-2xl  tracking-wider p-3 rounded-lg">
            Is this your first time playing Trails?
          </p>
          <div className="flex gap-3">
            <button
              className={`${
                firstTime ? activeBtn : inActiveBtn
              } px-5 py-3 rounded-lg text-xl`}
              onClick={() => setFirstTime(true)}
            >
              Yes
            </button>
            <button
              className={`${
                !firstTime ? activeBtn : inActiveBtn
              } px-5 py-3 rounded-lg text-xl`}
              onClick={() => setFirstTime(false)}
            >
              No
            </button>
          </div>
        </div>
      </Tooltip>
      <div className="flex gap-3 flex-wrap w-full justify-center px-3 lg:max-w-[90rem]">
        {badges.map((badge, index) => (
          <BadgeCard badge={badge} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
