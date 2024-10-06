import React from "react";
import twoBirdPoints from "../assets/icon-points-two-birds.svg";
import oneBirdPoint from "../assets/icon-points-one-bird.svg";
import pointIcon from "../assets/icon-points.svg";

const PointSign = () => {
  return (
    <div className="min-w-16 relative ">
      {/* //note adjust top-[0.65rem] to -top-[0.4rem] when no birds */}
      <img src={twoBirdPoints} className="object-cover" />
      <p className="text-xl text-white font-semibold absolute inset-0 flex items-center justify-center top-[0.65rem]">
        3
      </p>
    </div>
  );
};

export default PointSign;
