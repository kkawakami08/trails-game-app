import React from "react";
import acornIcon from "../../assets/icon-acorn.svg";
import leafIcon from "../../assets/icon-leaf.svg";
import rockIcon from "../../assets/icon-rock.svg";

const BadgeCost = () => {
  return (
    <div className="relative w-full">
      <div className="flex gap-2 bg-slate-200 justify-center py-2">
        <img src={acornIcon} alt="acorn" className="w-5" />
        <img src={acornIcon} alt="acorn" className="w-5" />
        <img src={rockIcon} alt="rock" className="w-5" />
        <img src={leafIcon} alt="leaf" className="w-5" />
      </div>
      {/* centered upside down triangle */}
      <div className="absolute w-full flex justify-center -bottom-2">
        <svg viewBox="0 0 20 10" className="w-4 h-2 fill-slate-200">
          <path d="M0,0 L20,0 L10,10 Z" />
        </svg>
      </div>
    </div>
  );
};

export default BadgeCost;
