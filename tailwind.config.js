/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      xsm: "1px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1440px",
      xxxl: "1680px",
      xxxxl: "1920px",
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('src/assets/whiteptrn.svg')",
        "hero-dark-pattern": "url('src/assets/patternpad (12).svg')",
      },
    },
    // colors: {
    //   primary: "#3A86FF",
    // },
  },
  plugins: [],
};
