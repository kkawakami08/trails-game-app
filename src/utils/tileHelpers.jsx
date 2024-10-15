import acornDayBG from "@/assets/locations/trail-bg-acorn-day.jpg";
import acornNightBG from "@/assets/locations/trail-bg-acorn-night.jpg";
import leafDayBG from "@/assets/locations/trail-bg-leaf-day.jpg";
import leafNightBG from "@/assets/locations/trail-bg-leaf-night.jpg";
import rockDayBG from "@/assets/locations/trail-bg-rock-day.jpg";
import rockNightBG from "@/assets/locations/trail-bg-rock-night.jpg";
import tradeDayBG from "@/assets/locations/trail-bg-trade-day.jpg";
import tradeNightBG from "@/assets/locations/trail-bg-trade-night.jpg";
import photoDayBG from "@/assets/locations/trail-bg-photo-day.jpg";
import photoNightBG from "@/assets/locations/trail-bg-photo-night.jpg";

import acornIcon from "@/assets/icon-acorn.svg";
import leafIcon from "@/assets/icon-leaf.svg";
import rockIcon from "@/assets/icon-rock.svg";
import tradeNightIcon from "@/assets/icon-trade-night.svg";
import tradeDayIcon from "@/assets/icon-trade-day.svg";
import photoIcon from "@/assets/icon-photo.svg";
import tradeIcon from "@/assets/icon-trade.svg";

const basicResource = (resource, flipped) => (
  <div
    className={`bg-white py-3 rounded-full flex gap-2 items-center justify-center ${
      !flipped ? "px-3" : "px-4"
    }`}
  >
    <img src={resource} className="w-8" />
    {flipped && <img src={resource} className="w-8" />}
  </div>
);

export const locationSelector = (location, flipped) => {
  switch (location) {
    case "acorn":
      return {
        day: acornDayBG,
        night: acornNightBG,
        resource: basicResource(acornIcon, flipped),
      };
    case "leaf":
      return {
        day: leafDayBG,
        night: leafNightBG,
        resource: basicResource(leafIcon, flipped),
      };
    case "rock":
      return {
        day: rockDayBG,
        night: rockNightBG,
        resource: basicResource(rockIcon, flipped),
      };
    case "trade":
      return {
        day: tradeDayBG,
        night: tradeNightBG,
        resource: (
          <div
            className={`bg-white py-3 rounded-full flex gap-2 items-center justify-center px-4`}
          >
            <img
              src={!flipped ? tradeDayIcon : tradeNightIcon}
              className="w-24"
            />
          </div>
        ),
      };
    case "photo":
      return {
        day: photoDayBG,
        night: photoNightBG,
        resource: (
          <div
            className={`bg-white py-3 rounded-full flex gap-1 items-center justify-center ${
              !flipped ? "px-5" : "px-6"
            }`}
          >
            {!flipped && <img src={tradeIcon} className="w-10" />}

            <img src={photoIcon} className="w-10" />
          </div>
        ),
      };
  }
};
