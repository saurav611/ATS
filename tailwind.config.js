/** @type {import('tailwindcss').Config} */
colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      black50: "#15153E",
      black200: "#1E1E1E",
      white: colors.white,
      purple: "#834D9E",
      grey10: "#F9F8F8",
      grey50: "#f7f7f7",
      grey100: "#A9A9A9",
      grey200: "#8A8A8A",
      grey250: "#858585",
      blue50: "#FAFBFF",
      blue150: "#597EDD",
    },
  },
  plugins: [],
};
