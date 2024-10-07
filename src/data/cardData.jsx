import additionalPoints from "@/assets/icon-points-additional.svg";
import React from "react";

// export const photoCards = [];

export const badgeCards = [
  {
    name: "Observer",
    type: "leaf",
    cost: {
      acorn: 1,
      leaf: 2,
      rock: 0,
    },
    image: new URL(`@/assets/badge-observer-leaf.svg`, import.meta.url).href,
    points: 2,
    birds: 1,
    description: () => (
      <p className=" text-sm font-serif">
        Score{" "}
        <span className="inline-flex ">
          <img src={additionalPoints} className="self-center min-w-6" />
        </span>{" "}
        if you see <em>the most birds</em>
      </p>
    ),
    explanation:
      "Score 2 additional points if you see the most birds at the end of the game. If you tie for most birds seen, you still gain an additional 2 Points.",
    powerId: 5,
  },
  {
    name: "Observer",
    type: "acorn",
    cost: {
      acorn: 2,
      leaf: 0,
      rock: 1,
    },
    image: new URL(`@/assets/badge-observer-acorn.svg`, import.meta.url).href,
    points: 2,
    birds: 1,
    description: () => (
      <p className=" text-xs">
        Score{" "}
        <span className="inline-flex ">
          <img src={additionalPoints} className="self-center min-w-6" />
        </span>
        if you see <em>the most birds</em>
      </p>
    ),
    explanation:
      "Score 2 additional points if you see the most birds at the end of the game. If you tie for most birds seen, you still gain an additional 2 Points.",
    powerId: 5,
  },
  {
    name: "Birdwatching",
    type: "rock",
    cost: {
      acorn: 1,
      leaf: 1,
      rock: 2,
    },
    image: new URL(`@/assets/badge-birdwatching-rock.svg`, import.meta.url)
      .href,
    points: 3,
    birds: 2,
    description: () => {},
    explanation: null,
    powerId: null,
  },
  {
    name: "Climber",
    type: "acorn",
    cost: {
      acorn: 5,
      leaf: 0,
      rock: 0,
    },
    image: new URL(`@/assets/badge-climber-acorn.svg`, import.meta.url).href,
    points: 6,
    birds: 0,
    description: () => {},
    explanation: null,
    powerId: null,
  },
];
