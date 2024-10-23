/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "acorn-brown": "#B54B32",
        "leaf-green": "#B1A04A",
        "rock-grey": "#A8A897",
        "yellow-sun": "#FEC343",
        "black-wildlife": "#35342E",
        "red-photo": "#DA4628",
        "dark-green": "#86774F",
        "dark-brown": "#4F3218",
        "dark-blue": "#2B2F4B",
        "light-blue": "#488CCB",
        "off-white": "#FFF4DD",
        "med-brown": "#996B4D",
        "pale-brown": "#D88A7D",
        "pale-grey": "#DBDAD5",
        "pale-green": "#D8C782",
        "light-brown": "#B3814C",
        "pale-light-brown": "#EDC7B1",
      },
      // Add transform utilities for the flip animation
      transform: {
        "perspective-1000": "perspective(1000px)",
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    function ({ addUtilities }) {
      addUtilities({
        ".perspective-1000": {
          perspective: "1000px",
        },
        ".transform-style-3d": {
          "transform-style": "preserve-3d",
        },
        ".backface-hidden": {
          "backface-visibility": "hidden",
        },
        ".rotate-y-180": {
          transform: "rotateY(180deg)",
        },
      });
    },
  ],
};
