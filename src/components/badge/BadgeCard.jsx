import BadgeHeader from "./BadgeHeader";
import BadgeCost from "./BadgeCost";
import PointSign from "../PointSign";

import { Tooltip } from "flowbite-react";

const BadgeCard = ({ badge }) => {
  // console.log(badge.image);
  return (
    <Tooltip
      content={badge.explanation}
      placement="bottom"
      trigger="hover"
      animation="duration-200"
      className="w-56 bg-slate-200 text-black text-center text-xs"
    >
      <div className="bg-dark-brown w-56 h-fit rounded-lg flex flex-col items-center relative">
        <BadgeHeader resourceType={badge.type} badgeName={badge.name} />
        <img
          src={badge.image}
          className="w-32  my-6 shadow-md shadow-black/40 rounded-full"
        />
        <BadgeCost cost={badge.cost} resourceType={badge.type} />

        <div
          className={`h-[5.5rem] bg-white flex justify-center items-center py-3 rounded-b-lg w-56 gap-2 p-2 ${
            badge.birds === 0 && badge.name !== "Climber" && "pr-8"
          }`}
        >
          <PointSign points={badge.points} birds={badge.birds} />
          {badge.description()}
        </div>
      </div>
    </Tooltip>
  );
};

export default BadgeCard;
