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
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
