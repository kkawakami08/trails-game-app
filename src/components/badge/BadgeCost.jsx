import React from "react";
import acornIcon from "../../assets/icon-acorn.svg";
import leafIcon from "../../assets/icon-leaf.svg";
import rockIcon from "../../assets/icon-rock.svg";

//pattern = acorn, rock leaf

const BadgeCost = ({ cost, resourceType }) => {
  const createResourceImg = (count, resourceIcon, alt) => {
    return Array(count)
      .fill()
      .map((_, index) => (
        <img
          key={`${alt}-${index}`}
          src={resourceIcon}
          alt={alt}
          className="w-5"
        />
      ));
  };

  const getResourcesInOrder = () => {
    const resources = [
      { type: "acorn", count: cost.acorn, icon: acornIcon },
      { type: "rock", count: cost.rock, icon: rockIcon },
      { type: "leaf", count: cost.leaf, icon: leafIcon },
    ];

    // Find the start index based on resourceType
    const startIndex = resources.findIndex((r) => r.type === resourceType);

    // Reorder the array starting from the specified resource
    const reorderedResources = [
      ...resources.slice(startIndex, 3),
      ...resources.slice(0, startIndex),
    ];

    // Only create images for resources with count > 0
    return reorderedResources
      .filter((resource) => resource.count > 0)
      .map((resource) =>
        createResourceImg(resource.count, resource.icon, resource.type)
      );
  };

  return (
    <div className="relative w-full">
      <div className="flex gap-2 bg-slate-200 justify-center py-2">
        {getResourcesInOrder()}
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
