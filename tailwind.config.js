/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors : {
        fushia : "#F30E3F",
        blue: "#09FE3",
        turquoise : "65C1C0",
        white: "FFFFFF",
        black: "000000"
      },
      fontFamily: {
        montserrat :['Inter', 'sans-serif'],
        inter:['Montserrat', 'serif']
      },
      fontWeight: {
        thin: 100,
        extralight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      }

    },
  },
  plugins: [],
};
