/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports =  {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bodyfont: ["Poppins", "sans-serif"],
        titlefont: ["Monsterrat", "sans-serif"],
      },
      container:{
        center: true,
        padding: "150px",
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('tailwind-scrollbar'),
  ],
};
