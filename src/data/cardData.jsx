import additionalPoints from "@/assets/icon-points-additional.svg";
import leafIcon from "@/assets/icon-leaf.svg";
import acornIcon from "@/assets/icon-acorn.svg";
import rockIcon from "@/assets/icon-rock.svg";
import sunIcon from "@/assets/icon-sun.svg";
import { BsSlashLg } from "react-icons/bs";
import BadgeBannerIcon from "@/assets/badge-banner.svg?react";
import ShortBadgeBannerIcon from "@/assets/badge-banner-short.svg?react";
import photoIcon from "@/assets/icon-photo.svg";
import dayTradeIcon from "@/assets/icon-trade-day.svg";
import wildlifeIcon from "@/assets/icon-wildlife.svg";
// export const photoCards = [];

export const badges = [
  {
    name: "Astronomy",
    type: "acorn",
    cost: {
      acorn: 4,
      leaf: 0,
      rock: 0,
    },
    image: new URL(`@/assets/badge-astronomy-acorn.svg`, import.meta.url).href,
    points: 1,
    birds: 0,
    description: () => (
      <p className=" text-xs font-serif -ml-2">
        Earn a <strong className="font-sans">BADGE</strong> next to you or from
        your hand without paying its cost
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
    name: "Birdwatching",
    type: "leaf",
    cost: {
      acorn: 1,
      leaf: 2,
      rock: 1,
    },
    image: new URL(`@/assets/badge-birdwatching-leaf.svg`, import.meta.url)
      .href,
    points: 3,
    birds: 2,
    description: () => {},
    explanation: null,
    powerId: null,
  },
  {
    name: "Birdwatching",
    type: "acorn",
    cost: {
      acorn: 2,
      leaf: 1,
      rock: 1,
    },
    image: new URL(`@/assets/badge-birdwatching-acorn.svg`, import.meta.url)
      .href,
    points: 3,
    birds: 2,
    description: () => {},
    explanation: null,
    powerId: null,
  },
  {
    name: "Cartography",
    type: "acorn",
    cost: {
      acorn: 3,
      leaf: 1,
      rock: 0,
    },
    image: new URL(`@/assets/badge-cartography-acorn.svg`, import.meta.url)
      .href,
    points: 3,
    birds: 0,
    description: () => (
      <div className="flex gap-2 items-center -ml-4">
        <img src={rockIcon} className="w-5" />
        <img src={rockIcon} className="w-5" />
      </div>
    ),
    explanation: "Gain the 2 resources shown on the Badge.",
    powerId: 2,
  },
  {
    name: "Cartography",
    type: "rock",
    cost: {
      acorn: 1,
      leaf: 0,
      rock: 3,
    },
    image: new URL(`@/assets/badge-cartography-rock.svg`, import.meta.url).href,
    points: 3,
    birds: 0,
    description: () => (
      <div className="flex gap-2 items-center -ml-4">
        <img src={leafIcon} className="w-5" />
        <img src={leafIcon} className="w-5" />
      </div>
    ),
    explanation: "Gain the 2 resources shown on the Badge.",
    powerId: 2,
  },
  {
    name: "Cartography",
    type: "leaf",
    cost: {
      acorn: 0,
      leaf: 3,
      rock: 1,
    },
    image: new URL(`@/assets/badge-cartography-leaf.svg`, import.meta.url).href,
    points: 3,
    birds: 0,
    description: () => (
      <div className="flex gap-2 items-center -ml-4">
        <img src={acornIcon} className="w-5" />
        <img src={acornIcon} className="w-5" />
      </div>
    ),
    explanation: "Gain the 2 resources shown on the Badge.",
    powerId: 2,
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
  {
    name: "Climber",
    type: "rock",
    cost: {
      acorn: 0,
      leaf: 0,
      rock: 5,
    },
    image: new URL(`@/assets/badge-climber-rock.svg`, import.meta.url).href,
    points: 6,
    birds: 0,
    description: () => {},
    explanation: null,
    powerId: null,
  },
  {
    name: "Climber",
    type: "leaf",
    cost: {
      acorn: 0,
      leaf: 5,
      rock: 0,
    },
    image: new URL(`@/assets/badge-climber-leaf.svg`, import.meta.url).href,
    points: 6,
    birds: 0,
    description: () => {},
    explanation: null,
    powerId: null,
  },
  {
    name: "Collector",
    type: "leaf",
    cost: {
      acorn: 0,
      leaf: 3,
      rock: 0,
    },
    image: new URL(`@/assets/badge-collector-leaf.svg`, import.meta.url).href,
    points: 1,
    birds: 0,
    description: () => (
      <div className=" flex items-center gap-2 -ml-4">
        <strong className="text-xs font-extrabold">PER</strong>
        <div className="relative">
          <ShortBadgeBannerIcon className={`w-6 text-pale-green`} />
          <img src={leafIcon} className="w-4  absolute top-[.4rem] left-1" />
        </div>
      </div>
    ),
    explanation:
      "This Badge is worth 1 Point for each Badge you have earned of its type, including itself. For example, if at the end of the game you have the Leaf Collector Badge and 3 other Leaf Badges, then the Leaf Collector Badge is worth 4 Points.",
    powerId: 3,
  },
  {
    name: "Collector",
    type: "acorn",
    cost: {
      acorn: 3,
      leaf: 0,
      rock: 0,
    },
    image: new URL(`@/assets/badge-collector-acorn.svg`, import.meta.url).href,
    points: 1,
    birds: 0,
    description: () => (
      <div className=" flex items-center gap-2 -ml-4">
        <strong className="text-xs font-extrabold">PER</strong>
        <div className="relative">
          <ShortBadgeBannerIcon className={`w-6 text-pale-brown`} />
          <img src={acornIcon} className="w-4  absolute top-[.4rem] left-1" />
        </div>
      </div>
    ),
    explanation:
      "This Badge is worth 1 Point for each Badge you have earned of its type, including itself. For example, if at the end of the game you have the Leaf Collector Badge and 3 other Leaf Badges, then the Leaf Collector Badge is worth 4 Points.",
    powerId: 3,
  },
  {
    name: "Collector",
    type: "rock",
    cost: {
      acorn: 0,
      leaf: 0,
      rock: 3,
    },
    image: new URL(`@/assets/badge-collector-rock.svg`, import.meta.url).href,
    points: 1,
    birds: 0,
    description: () => (
      <div className=" flex items-center gap-2 -ml-4">
        <strong className="text-xs font-extrabold">PER</strong>
        <div className="relative">
          <ShortBadgeBannerIcon className={`w-6 text-pale-grey`} />
          <img src={rockIcon} className="w-4  absolute top-[.4rem] left-1" />
        </div>
      </div>
    ),
    explanation:
      "This Badge is worth 1 Point for each Badge you have earned of its type, including itself. For example, if at the end of the game you have the Leaf Collector Badge and 3 other Leaf Badges, then the Leaf Collector Badge is worth 4 Points.",
    powerId: 3,
  },
  {
    name: "First Aid",
    type: "rock",
    cost: {
      acorn: 0,
      leaf: 0,
      rock: 2,
    },
    image: new URL(`@/assets/badge-firstAid-rock.svg`, import.meta.url).href,
    points: 1,
    birds: 0,
    description: () => (
      <div className="flex flex-col gap-1 -ml-2">
        <strong className="text-xs font-extrabold">CHOOSE ONE:</strong>
        <div className="flex items-center justify-center ">
          <img src={leafIcon} className="w-5" />
          <BsSlashLg className="-rotate-12  text-gray-400 text-2xl -mx-1" />
          <img src={acornIcon} className="w-5" />
          <BsSlashLg className="-rotate-12 text-gray-400 text-2xl -mx-1" />

          <img src={rockIcon} className="w-5" />
        </div>
      </div>
    ),
    explanation: "Gain 1 of any resource.",
    powerId: 4,
  },
  {
    name: "First Aid",
    type: "acorn",
    cost: {
      acorn: 2,
      leaf: 0,
      rock: 0,
    },
    image: new URL(`@/assets/badge-firstAid-acorn.svg`, import.meta.url).href,
    points: 1,
    birds: 0,
    description: () => (
      <div className="flex flex-col gap-1 -ml-2">
        <strong className="text-xs font-extrabold">CHOOSE ONE:</strong>
        <div className="flex items-center justify-center ">
          <img src={leafIcon} className="w-5" />
          <BsSlashLg className="-rotate-12  text-gray-400 text-2xl -mx-1" />
          <img src={acornIcon} className="w-5" />
          <BsSlashLg className="-rotate-12 text-gray-400 text-2xl -mx-1" />

          <img src={rockIcon} className="w-5" />
        </div>
      </div>
    ),
    explanation: "Gain 1 of any resource.",
    powerId: 4,
  },
  {
    name: "First Aid",
    type: "leaf",
    cost: {
      acorn: 0,
      leaf: 2,
      rock: 0,
    },
    image: new URL(`@/assets/badge-firstAid-leaf.svg`, import.meta.url).href,
    points: 1,
    birds: 0,
    description: () => (
      <div className="flex flex-col gap-1 -ml-2">
        <strong className="text-xs font-extrabold">CHOOSE ONE:</strong>
        <div className="flex items-center justify-center ">
          <img src={leafIcon} className="w-5" />
          <BsSlashLg className="-rotate-12  text-gray-400 text-2xl -mx-1" />
          <img src={acornIcon} className="w-5" />
          <BsSlashLg className="-rotate-12 text-gray-400 text-2xl -mx-1" />

          <img src={rockIcon} className="w-5" />
        </div>
      </div>
    ),
    explanation: "Gain 1 of any resource.",
    powerId: 4,
  },
  {
    name: "Navigation",
    type: "rock",
    cost: {
      acorn: 0,
      leaf: 1,
      rock: 3,
    },
    image: new URL(`@/assets/badge-navigation-rock.svg`, import.meta.url).href,
    points: 3,
    birds: 0,
    description: () => (
      <div className="flex gap-2 items-center -ml-3">
        <img src={acornIcon} className="w-5" />
        <img src={acornIcon} className="w-5" />
      </div>
    ),
    explanation: "Gain 2 acorns",
    powerId: 2,
  },
  {
    name: "Navigation",
    type: "leaf",
    cost: {
      acorn: 1,
      leaf: 3,
      rock: 0,
    },
    image: new URL(`@/assets/badge-navigation-leaf.svg`, import.meta.url).href,
    points: 3,
    birds: 0,
    description: () => (
      <div className="flex gap-2 items-center -ml-3">
        <img src={rockIcon} className="w-5" />
        <img src={rockIcon} className="w-5" />
      </div>
    ),
    explanation: "Gain 2 rocks",
    powerId: 2,
  },
  {
    name: "Navigation",
    type: "acorn",
    cost: {
      acorn: 3,
      leaf: 0,
      rock: 1,
    },
    image: new URL(`@/assets/badge-navigation-acorn.svg`, import.meta.url).href,
    points: 3,
    birds: 0,
    description: () => (
      <div className="flex gap-2 items-center -ml-3">
        <img src={leafIcon} className="w-5" />
        <img src={leafIcon} className="w-5" />
      </div>
    ),
    explanation: "Gain 2 leaf",
    powerId: 2,
  },
  {
    name: "Observer",
    type: "rock",
    cost: {
      acorn: 0,
      leaf: 1,
      rock: 2,
    },
    image: new URL(`@/assets/badge-observer-rock.svg`, import.meta.url).href,
    points: 2,
    birds: 1,
    description: () => (
      <p className=" text-xs font-serif -ml-3">
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
      <p className=" text-xs font-serif -ml-3">
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
      <p className=" text-xs font-serif -ml-3">
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
    name: "Photography",
    type: "leaf",
    cost: {
      acorn: 2,
      leaf: 3,
      rock: 0,
    },
    image: new URL(`@/assets/badge-photography-leaf.svg`, import.meta.url).href,
    points: 4,
    birds: 0,
    description: () => <img src={photoIcon} className="w-10 -ml-3" />,
    explanation: "Take a Photo action.",
    powerId: 6,
  },
  {
    name: "Photography",
    type: "acorn",
    cost: {
      acorn: 3,
      leaf: 0,
      rock: 2,
    },
    image: new URL(`@/assets/badge-photography-acorn.svg`, import.meta.url)
      .href,
    points: 4,
    birds: 0,
    description: () => <img src={photoIcon} className="w-10 -ml-3" />,
    explanation: "Take a Photo action.",
    powerId: 6,
  },
  {
    name: "Photography",
    type: "rock",
    cost: {
      acorn: 0,
      leaf: 2,
      rock: 3,
    },
    image: new URL(`@/assets/badge-photography-rock.svg`, import.meta.url).href,
    points: 4,
    birds: 0,
    description: () => <img src={photoIcon} className="w-10 -ml-3" />,
    explanation: "Take a Photo action.",
    powerId: 6,
  },
  {
    name: "Rappelling",
    type: "rock",
    cost: {
      acorn: 0,
      leaf: 0,
      rock: 4,
    },
    image: new URL(`@/assets/badge-rappelling-rock.svg`, import.meta.url).href,
    points: 0,
    birds: 0,
    description: () => (
      <p className=" text-xs font-serif -ml-3">
        Equal to your highest point <strong className="font-sans">BADGE</strong>
      </p>
    ),
    explanation:
      "This Badge is worth points equal to your highest point Badge. For example, if your highest point Badge is worth 6 Points, then the Rappelling Badge is also worth 6 Points.",
    powerId: 7,
  },
  {
    name: "Recycling",
    type: "leaf",
    cost: {
      acorn: 1,
      leaf: 2,
      rock: 1,
    },
    image: new URL(`@/assets/badge-recycling-leaf.svg`, import.meta.url).href,
    points: 4,
    birds: 0,
    description: () => <img src={dayTradeIcon} className="w-24 -ml-3" />,
    explanation:
      "Exchange 1 resource for 2 of a single different resource. If you don’t have a resource to exchange, then you don’t benefit from this bonus effect.",
    powerId: 8,
  },
  {
    name: "Recycling",
    type: "acorn",
    cost: {
      acorn: 2,
      leaf: 1,
      rock: 1,
    },
    image: new URL(`@/assets/badge-recycling-acorn.svg`, import.meta.url).href,
    points: 4,
    birds: 0,
    description: () => <img src={dayTradeIcon} className="w-24 -ml-3" />,
    explanation:
      "Exchange 1 resource for 2 of a single different resource. If you don’t have a resource to exchange, then you don’t benefit from this bonus effect.",
    powerId: 8,
  },
  {
    name: "Recycling",
    type: "rock",
    cost: {
      acorn: 1,
      leaf: 1,
      rock: 2,
    },
    image: new URL(`@/assets/badge-recycling-rock.svg`, import.meta.url).href,
    points: 4,
    birds: 0,
    description: () => <img src={dayTradeIcon} className="w-24 -ml-3" />,
    explanation:
      "Exchange 1 resource for 2 of a single different resource. If you don’t have a resource to exchange, then you don’t benefit from this bonus effect.",
    powerId: 8,
  },
  {
    name: "Research",
    type: "rock",
    cost: {
      acorn: 0,
      leaf: 0,
      rock: 3,
    },
    image: new URL(`@/assets/badge-research-rock.svg`, import.meta.url).href,
    points: 2,
    birds: 0,
    description: () => (
      <p className="text-xs font-serif flex flex-wrap items-center gap-x-1">
        <span className="flex flex-wrap">
          Cost one less
          <img src={rockIcon} alt="leaf" className="w-5 mx-[.1rem]" />
          for
        </span>{" "}
        each
        <span className="relative inline-flex items-center mx-0.5">
          <ShortBadgeBannerIcon className="w-6 text-pale-grey" />
          <img
            src={rockIcon}
            className="w-4 absolute top-[.9rem] left-1 transform -translate-y-1/2"
          />
        </span>
        you have
      </p>
    ),
    explanation:
      "This Badge costs one resource less for each Badge of its type that you have already earned.",
    powerId: 9,
  },
  {
    name: "Research",
    type: "acorn",
    cost: {
      acorn: 3,
      leaf: 0,
      rock: 0,
    },
    image: new URL(`@/assets/badge-research-acorn.svg`, import.meta.url).href,
    points: 2,
    birds: 0,
    description: () => (
      <p className="text-xs font-serif flex flex-wrap items-center gap-x-1">
        <span className="flex flex-wrap">
          Cost one less
          <img src={acornIcon} alt="leaf" className="w-5 mx-[.1rem]" />
          for
        </span>{" "}
        each
        <span className="relative inline-flex items-center mx-0.5">
          <ShortBadgeBannerIcon className="w-6 text-pale-brown" />
          <img
            src={acornIcon}
            className="w-4 absolute top-[.9rem] left-1 transform -translate-y-1/2"
          />
        </span>
        you have
      </p>
    ),
    explanation:
      "This Badge costs one resource less for each Badge of its type that you have already earned.",
    powerId: 9,
  },
  {
    name: "Research",
    type: "leaf",
    cost: {
      acorn: 0,
      leaf: 3,
      rock: 0,
    },
    image: new URL(`@/assets/badge-research-leaf.svg`, import.meta.url).href,
    points: 2,
    birds: 0,
    description: () => (
      <p className="text-xs font-serif flex flex-wrap items-center gap-x-1">
        <span className="flex flex-wrap">
          Cost one less
          <img src={leafIcon} alt="leaf" className="w-5 mx-[.1rem]" />
          for
        </span>{" "}
        each
        <span className="relative inline-flex items-center mx-0.5">
          <ShortBadgeBannerIcon className="w-6 text-pale-green" />
          <img
            src={leafIcon}
            className="w-4 absolute top-[.9rem] left-1 transform -translate-y-1/2"
          />
        </span>
        you have
      </p>
    ),
    explanation:
      "This Badge costs one resource less for each Badge of its type that you have already earned.",
    powerId: 9,
  },
  {
    name: "Science",
    type: "any",
    cost: {
      acorn: 1,
      leaf: 1,
      rock: 1,
    },
    image: new URL(`@/assets/badge-science-any.svg`, import.meta.url).href,
    points: 3,
    birds: 0,
    description: () => (
      <div className="flex gap-2 -ml-3">
        <div className="relative">
          <ShortBadgeBannerIcon className={`w-6 text-pale-green`} />
          <img src={leafIcon} className="w-4  absolute top-[.4rem] left-1" />
        </div>
        <div className="relative">
          <ShortBadgeBannerIcon className={`w-6 text-pale-brown`} />
          <img src={acornIcon} className="w-4  absolute top-[.4rem] left-1" />
        </div>
        <div className="relative">
          <ShortBadgeBannerIcon className={`w-6 text-pale-grey`} />
          <img src={rockIcon} className="w-4  absolute top-[.4rem] left-1" />
        </div>
      </div>
    ),
    explanation:
      "This Badge counts as a Leaf type, an Acorn type, and a Rock type. It counts toward all earned Collector Badges.",
    powerId: 10,
  },
  {
    name: "Science",
    type: "any",
    cost: {
      acorn: 1,
      leaf: 1,
      rock: 1,
    },
    image: new URL(`@/assets/badge-science-any.svg`, import.meta.url).href,
    points: 3,
    birds: 0,
    description: () => (
      <div className="flex gap-2 -ml-3">
        <div className="relative">
          <ShortBadgeBannerIcon className={`w-6 text-pale-green`} />
          <img src={leafIcon} className="w-4  absolute top-[.4rem] left-1" />
        </div>
        <div className="relative">
          <ShortBadgeBannerIcon className={`w-6 text-pale-brown`} />
          <img src={acornIcon} className="w-4  absolute top-[.4rem] left-1" />
        </div>
        <div className="relative">
          <ShortBadgeBannerIcon className={`w-6 text-pale-grey`} />
          <img src={rockIcon} className="w-4  absolute top-[.4rem] left-1" />
        </div>
      </div>
    ),
    explanation:
      "This Badge counts as a Leaf type, an Acorn type, and a Rock type. It counts toward all earned Collector Badges.",
    powerId: 10,
  },
  {
    name: "Science",
    type: "any",
    cost: {
      acorn: 1,
      leaf: 1,
      rock: 1,
    },
    image: new URL(`@/assets/badge-science-any.svg`, import.meta.url).href,
    points: 3,
    birds: 0,
    description: () => (
      <div className="flex gap-2 -ml-3">
        <div className="relative">
          <ShortBadgeBannerIcon className={`w-6 text-pale-green`} />
          <img src={leafIcon} className="w-4  absolute top-[.4rem] left-1" />
        </div>
        <div className="relative">
          <ShortBadgeBannerIcon className={`w-6 text-pale-brown`} />
          <img src={acornIcon} className="w-4  absolute top-[.4rem] left-1" />
        </div>
        <div className="relative">
          <ShortBadgeBannerIcon className={`w-6 text-pale-grey`} />
          <img src={rockIcon} className="w-4  absolute top-[.4rem] left-1" />
        </div>
      </div>
    ),
    explanation:
      "This Badge counts as a Leaf type, an Acorn type, and a Rock type. It counts toward all earned Collector Badges.",
    powerId: 10,
  },
  {
    name: "Seeker",
    type: "leaf",
    cost: {
      acorn: 0,
      leaf: 2,
      rock: 1,
    },
    image: new URL(`@/assets/badge-seeker-leaf.svg`, import.meta.url).href,
    points: 2,
    birds: 1,
    description: () => <img src={wildlifeIcon} className="w-14 -ml-3" />,
    explanation: "Take the Wildlife action.",
    powerId: 11,
  },
  {
    name: "Seeker",
    type: "rock",
    cost: {
      acorn: 1,
      leaf: 0,
      rock: 2,
    },
    image: new URL(`@/assets/badge-seeker-rock.svg`, import.meta.url).href,
    points: 2,
    birds: 1,
    description: () => <img src={wildlifeIcon} className="w-14 -ml-3" />,
    explanation: "Take the Wildlife action.",
    powerId: 11,
  },
  {
    name: "Seeker",
    type: "acorn",
    cost: {
      acorn: 2,
      leaf: 1,
      rock: 0,
    },
    image: new URL(`@/assets/badge-seeker-acorn.svg`, import.meta.url).href,
    points: 2,
    birds: 1,
    description: () => <img src={wildlifeIcon} className="w-14 -ml-3" />,
    explanation: "Take the Wildlife action.",
    powerId: 11,
  },
  {
    name: "Shutterbug",
    type: "leaf",
    cost: {
      acorn: 0,
      leaf: 4,
      rock: 0,
    },
    image: new URL(`@/assets/badge-shutterbug-leaf.svg`, import.meta.url).href,
    points: 2,
    birds: 0,
    description: () => (
      <div className="flex gap-3 -ml-2">
        <img src={photoIcon} alt="photo" className="w-10" />
        <img src={photoIcon} alt="photo" className="w-10" />
      </div>
    ),
    explanation: "Take 2 Photo actions back-to-back.",
    powerId: 6,
  },
  {
    name: "Sunshine",
    type: "rock",
    cost: {
      acorn: 2,
      leaf: 0,
      rock: 3,
    },
    image: new URL(`@/assets/badge-sunshine-rock.svg`, import.meta.url).href,
    points: 5,
    birds: 0,
    description: () => (
      <div className="font-serif text-xs -ml-3 ">
        <p className="">
          Gain the
          <span className="inline-flex items-baseline">
            <img src={sunIcon} alt="sun" className=" w-6 ml-1" />{" "}
          </span>{" "}
          bonus at its current site
        </p>
      </div>
    ),
    explanation:
      "This Badge is worth 1 PointGain the current bonus on the Sun Track. Do not move the Sun! For each Badge you have earned of its type, including itself. For example, if at the end of the game you have the Leaf Collector Badge and 3 other Leaf Badges, then the Leaf Collector Badge is worth 4 Points.",
    powerId: 12,
  },
  {
    name: "Sunshine",
    type: "acorn",
    cost: {
      acorn: 3,
      leaf: 2,
      rock: 0,
    },
    image: new URL(`@/assets/badge-sunshine-acorn.svg`, import.meta.url).href,
    points: 5,
    birds: 0,
    description: () => (
      <div className="font-serif text-xs -ml-3 ">
        <p className="">
          Gain the
          <span className="inline-flex items-baseline">
            <img src={sunIcon} alt="sun" className=" w-6 ml-1" />{" "}
          </span>{" "}
          bonus at its current site
        </p>
      </div>
    ),
    explanation:
      "This Badge is worth 1 PointGain the current bonus on the Sun Track. Do not move the Sun! For each Badge you have earned of its type, including itself. For example, if at the end of the game you have the Leaf Collector Badge and 3 other Leaf Badges, then the Leaf Collector Badge is worth 4 Points.",
    powerId: 12,
  },
  {
    name: "Sunshine",
    type: "leaf",
    cost: {
      acorn: 0,
      leaf: 3,
      rock: 2,
    },
    image: new URL(`@/assets/badge-sunshine-leaf.svg`, import.meta.url).href,
    points: 5,
    birds: 0,
    description: () => (
      <div className="font-serif text-xs -ml-3 ">
        <p className="">
          Gain the
          <span className="inline-flex items-baseline">
            <img src={sunIcon} alt="sun" className=" w-6 ml-1" />{" "}
          </span>{" "}
          bonus at its current site
        </p>
      </div>
    ),
    explanation:
      "This Badge is worth 1 PointGain the current bonus on the Sun Track. Do not move the Sun! For each Badge you have earned of its type, including itself. For example, if at the end of the game you have the Leaf Collector Badge and 3 other Leaf Badges, then the Leaf Collector Badge is worth 4 Points.",
    powerId: 12,
  },
];
