/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF4343",
        darkText: "#232323",
        lightText: "#BDBDBD",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      spacing: {
        18: "4.5rem",
      },
      borderWidth: {
        1: "1px",
      },
      borderRadius: {
        10: "10px",
      },
    },
  },
  plugins: [require("rippleui")],
};
