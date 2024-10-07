import React from "react";
import twoBirdPoints from "../assets/icon-points-two-birds.svg";
import oneBirdPoint from "../assets/icon-points-one-bird.svg";
import pointIcon from "../assets/icon-points.svg";

const PointSign = ({ points, birds }) => {
  const pointImg = () => {
    switch (birds) {
      case 0:
        return pointIcon;
      case 1:
        return oneBirdPoint;
      case 2:
        return twoBirdPoints;
    }
  };

  return (
    <div className="min-w-16 relative ">
      {/* //note adjust top-[0.65rem] to -top-[0.4rem] when no birds */}
      <img src={pointImg()} className="object-cover" />
      <p
        className={`text-xl text-white font-semibold absolute inset-0 flex items-center justify-center ${
          birds == 0 ? "-top-[0.4rem]" : "top-[0.65rem]"
        }`}
      >
        {points}
      </p>
    </div>
  );
};

export default PointSign;
