/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0e091e",
        secondary: "#2f3ca4",
        primBlue: "#0075ff",
        secBlue: "#0b94ff",
        lightBG: "#1a1f37",
        darkBlue: "#090c28",
        progreen: "#05cd99",
        proGray: "#1a2345",
        website: "#28c6ee",
        mobile: "#0075ff",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  variants: {
    extend: {
      divideColor: ["group-hover"],
      backgroundColor: ["group-focus"],
    },
  },
  plugins: [],
};
