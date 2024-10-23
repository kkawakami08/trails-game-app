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

import { useState, useEffect } from "react";

const DelayedPhotoResource = ({ flipped }) => {
  const [showTradeIcon, setShowTradeIcon] = useState(!flipped);
  const [padding, setPadding] = useState(!flipped ? "px-5" : "px-6");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTradeIcon(!flipped);
      setPadding(!flipped ? "px-5" : "px-6");
    }, 200);

    return () => clearTimeout(timer);
  }, [flipped]);

  return (
    <div
      className={`bg-white py-3 rounded-full flex gap-1 items-center justify-center ${padding}`}
    >
      {showTradeIcon && <img src={tradeIcon} className="w-10" />}
      <img src={photoIcon} className="w-10" />
    </div>
  );
};

const BasicResource = ({ resource, flipped }) => {
  const [showSecondIcon, setShowSecondIcon] = useState(flipped);
  const [padding, setPadding] = useState(!flipped ? "px-3" : "px-4");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecondIcon(flipped);
      setPadding(!flipped ? "px-3" : "px-4");
    }, 200);

    return () => clearTimeout(timer);
  }, [flipped]);

  return (
    <div
      className={`bg-white py-3 rounded-full flex gap-2 items-center justify-center ${padding}`}
    >
      <img src={resource} className="w-8" />
      {showSecondIcon && <img src={resource} className="w-8" />}
    </div>
  );
};

const DelayedTradeIcon = ({ flipped }) => {
  const [displayedIcon, setDisplayedIcon] = useState(
    flipped ? tradeNightIcon : tradeDayIcon
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayedIcon(flipped ? tradeNightIcon : tradeDayIcon);
    }, 300);

    return () => clearTimeout(timer);
  }, [flipped]);

  return <img src={displayedIcon} className="w-24" />;
};

export const locationSelector = (location, flipped) => {
  switch (location) {
    case "acorn":
      return {
        day: acornDayBG,
        night: acornNightBG,
        resource: <BasicResource resource={acornIcon} flipped={flipped} />,
      };
    case "leaf":
      return {
        day: leafDayBG,
        night: leafNightBG,
        resource: <BasicResource resource={leafIcon} flipped={flipped} />,
      };
    case "rock":
      return {
        day: rockDayBG,
        night: rockNightBG,
        resource: <BasicResource resource={rockIcon} flipped={flipped} />,
      };
    case "trade":
      return {
        day: tradeDayBG,
        night: tradeNightBG,
        resource: (
          <div
            className={`bg-white py-3 rounded-full flex gap-2 items-center justify-center px-4`}
          >
            <DelayedTradeIcon flipped={flipped} />
          </div>
        ),
      };
    case "photo":
      return {
        day: photoDayBG,
        night: photoNightBG,
        resource: <DelayedPhotoResource flipped={flipped} />,
      };
  }
};
