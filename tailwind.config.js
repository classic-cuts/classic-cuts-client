/** @type {import('tailwindcss').Config} */
module.exports =  {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bodyfont: ["Poppins", "sans-serif"],
        titlefont: ["Monsterrat", "sans-serif"],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
