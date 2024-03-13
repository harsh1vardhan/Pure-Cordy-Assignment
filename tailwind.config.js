module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          600: "#717171",
          800: "#4d4d4d",
          900: "#18191f",
          "300_01": "#d9dbe1",
          "100_01": "#f5f7f9",
          "300_02": "#e8e8e3",
        },
        white: { A700: "#ffffff", A700_6c: "#ffffff6c" },
        blue_gray: { 400: "#88939e", "900_01": "#263238" },
        green: { 500: "#4caf4f" },
        black: { 900: "#000000", "900_63": "#00000063" },
        green_500_75: "#4caf4f75",
      },
      boxShadow: {
        xs: "0px 5.57px  11px 0px #abbed166",
        sm: "0px 1.39px  2px 0px #abbed133",
        md: "0px 2.78px  5px 0px #abbed166",
        lg: "-24px -28px  140px 0px #00000019",
      },
      fontFamily: { inter: "Inter", montserrat: "Montserrat" },
      opacity: { 0.1: 0.1, 0.2: 0.2 },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
