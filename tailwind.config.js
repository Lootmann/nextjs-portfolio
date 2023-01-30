/** @type {import('tailwindcss').Config} */
module.exports = {
  darkmode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { "fira-code": ['"Fira Code"'] },
    },
  },
  plugins: [],
};
