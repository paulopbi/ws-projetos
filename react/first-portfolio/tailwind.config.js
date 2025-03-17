/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue_100: "#f2f3ff",
        blue_200: "#666ecb",
        blue_300: "#666EC8",

        dark_blue_100: "#0d0e1b",
        dark_blue_200: "#070811",
        dark_blue_300: "#000002",

        gray_100: "#e3e3e3",
        gray_200: "#cdcdcd",

        primary_100: "#707cff",
        primary_200: "#2131df",
        primary_300: "#091ACA",

        secondary_100: "#c778ff",
        secondary_200: "#180028",
      },
      fontFamily: {
        sans: ["Inter", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
