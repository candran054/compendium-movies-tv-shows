/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#e6e6fa",
        secondary: "#f3f3f7",
      },
      textColor: {
        main: "#28333D",
      },
    },
  },
  plugins: [],
};
