import { locationSelector } from "../../utils/tileHelpers";

const LocationTile = ({ flipped, location }) => {
  const currentLocation = locationSelector(location, flipped);
  return (
    <div
      className=" bg-cover bg-center flex flex-col items-center py-4 justify-end "
      style={{
        backgroundImage: `url(${
          !flipped ? currentLocation.day : currentLocation.night
        })`,
      }}
    >
      {currentLocation.resource}
    </div>
  );
};

export default LocationTile;
