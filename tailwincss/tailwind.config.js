/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../**/*.html"],
  theme: {
    extend: {
      colors: {
        primaryColor: "rgb(12, 27, 51)",
        secondyColor: "rgb(251, 254, 249)",
        accentColor: "rgb(88, 225, 196)",
        // accentTwo: "rgb(255, 0, 0)",
        neutralColorLight: "rgb(172 167 203)",
        neutralColorDark: "rgb(2, 2, 11)",
        mixBlendColor: "#55ebf9",
      },
      transitionDuration: {
        default: "1s",
      },
    },
  },
  plugins: [],
};
