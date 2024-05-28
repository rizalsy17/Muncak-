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
        18: "4.5rem", // Because Tailwind doesn't have 72px by default
      },
      borderWidth: {
        1: "1px",
      },
      borderRadius: {
        10: "10px",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("rippleui")],
};
