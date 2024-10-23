import { locationSelector } from "../../utils/tileHelpers";
import { useState } from "react";

const LocationTile = ({ flipped, location }) => {
  const [flippedTile, setFlippedTile] = useState(flipped);
  const currentLocation = locationSelector(location, flippedTile);

  const handleClick = () => {
    setFlippedTile((prev) => !prev);
  };
  // console.log(flippedTile);
  return (
    <div className="min-w-44 h-[19.54rem] perspective-1000">
      <div
        className={`relative w-full h-full transition-all duration-700 transform-style-3d cursor-pointer ${
          flippedTile ? "rotate-y-180" : ""
        }`}
        onClick={handleClick}
      >
        {/* Front of card */}
        <div
          className="absolute w-full h-full backface-hidden bg-cover bg-center flex flex-col items-center py-4 justify-end"
          style={{
            backgroundImage: `url(${currentLocation.day})`,
          }}
        >
          <div className="text-off-white">{currentLocation.resource}</div>
        </div>

        {/* Back of card */}
        <div
          className="absolute w-full h-full backface-hidden bg-cover bg-center flex flex-col items-center py-4 justify-end rotate-y-180"
          style={{
            backgroundImage: `url(${currentLocation.night})`,
          }}
        >
          <div className="text-off-white">{currentLocation.resource}</div>
        </div>
      </div>
    </div>
  );
};

export default LocationTile;
