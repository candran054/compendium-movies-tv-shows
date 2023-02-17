/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#110321",
        secondary: "#f3f3f7",
      },
      textColor: {
        main: "#f5f8fa",
        secondary: "#110321",
      },
    },
  },
  plugins: [],
};
