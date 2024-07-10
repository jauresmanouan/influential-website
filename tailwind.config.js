/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        fushia: "#F30E3F",
        blue: "#009FE3",
        turquoise: "#65C1C0",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
