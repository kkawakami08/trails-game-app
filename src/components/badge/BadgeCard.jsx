import acornIcon from "@/assets/icon-acorn.svg";
import leafIcon from "@/assets/icon-leaf.svg";
import rockIcon from "@/assets/icon-rock.svg";
import badgePic from "@/assets/badge-birdwatching-acorn.svg";
import twoBirdPoints from "@/assets/icon-points-two-birds.svg";
import oneBirdPoint from "@/assets/icon-points-one-bird.svg";
import pointIcon from "@/assets/icon-points.svg";
import additionalPoint from "@/assets/icon-points-additional.svg";

import BadgeBanner from "./BadgeBanner";
import BadgeCost from "./BadgeCost";
import PointSign from "../PointSign";

import { Tooltip } from "flowbite-react";

const BadgeCard = () => {
  return (
    <div className="bg-dark-brown w-56 h-60 rounded-lg flex flex-col items-center relative">
      {/* //note banner info */}
      <BadgeBanner resourceType={acornIcon} bgColor={`text-pale-brown`} />
      {/* //note header bg & badge name */}
      <p className="bg-[#B54B32] text-white rounded-t-lg text-right font-bold text-xs py-2 px-3 tracking-[.1rem] w-full">
        {"birdwatching".toUpperCase()}
      </p>
      {/* //note badge image */}
      <img
        src={badgePic}
        className="w-28  my-5 shadow-md shadow-black/40 rounded-full"
      />
      {/* //note badge cost */}
      <BadgeCost />
      <Tooltip
        content="Score 2 additional points if you see the most birds at the end of the game. If you tie for most birds seen, you still gain an additional 2 Points."
        placement="bottom"
        trigger="hover"
        animation="duration-200"
        className="w-56 bg-acorn-brown text-white text-center text-xs"
      >
        <div className="bg-white flex justify-center items-center py-3 rounded-b-lg w-56 gap-2 p-3">
          {/* //note point value */}
          <PointSign />
          {/* //note badge description */}
          <p className=" text-xs">
            Earn a <strong>BADGE</strong> next
          </p>
        </div>
      </Tooltip>
    </div>
  );
};

export default BadgeCard;
