import React from "react";
import twoBirdPoints from "../assets/icon-points-two-birds.svg";
import oneBirdPoint from "../assets/icon-points-one-bird.svg";
import pointIcon from "../assets/icon-points.svg";
import pointStar from "../assets/icon-points-star.svg";

const PointSign = ({ points, birds }) => {
  const pointImg = () => {
    switch (birds) {
      case 0:
        if (points == 0) {
          return pointStar;
        }
        return pointIcon;
      case 1:
        return oneBirdPoint;
      case 2:
        return twoBirdPoints;
    }
  };

  return (
    <div className="min-w-16 relative ">
      <img src={pointImg()} className="object-cover" />
      <p
        className={`text-xl text-white font-semibold absolute inset-0 flex items-center justify-center ${
          birds == 0 ? "-top-[0.4rem]" : "top-[0.65rem]"
        }`}
      >
        {points !== 0 && points}
      </p>
    </div>
  );
};

export default PointSign;
