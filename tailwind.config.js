/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
const colors = require("tailwindcss/colors");

// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0 4px 9px -4px #3b71ca",
        custom2:
          "0 8px 9px -4px rgba(59, 113, 202, 0.3), 0 4px 18px 0 rgba(59, 113, 202, 0.2)",
      },
      gridTemplateRows: {
        "[auto,auto,1fr]": "auto auto 1fr",
      },
      colors: {
        // eslint-disable-next-line no-undef
        primary: colors.blue,
        // eslint-disable-next-line no-undef
        secondary: colors.slate,
      },
      fontFamily: {
        bodyfont: ["Poppins", "sans-serif"],
        titlefont: ["Monsterrat", "sans-serif"],
      },
      container: {
        center: true,
        padding: "150px",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("tailwind-scrollbar"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
};
