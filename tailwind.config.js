/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "menu-card": "repeat(auto-fit, minmax(180px, 1fr))",
        "item-card": "repeat(auto-fit, minmax(170px, 1fr))",
      },
      backgroundImage: {
        signIn: "url('/signIn.jpg')",
        veges: "url('/veges.jpg')",
        backDrop: "url('/veges.jpg')",
      },
      fontFamily: {
        fresh: "fresh",
      },
      colors: {
        orange: "#ff6700",
        green: "#8ac926",
        white: "#f6fff8",
      },
      screens: {
        xs: { raw: "(min-width : 250px)" },
      },
      fontSize: {
        xs: ["clamp(0.58rem, calc(0.75rem + 0.01vw), 0.40rem)"],
        sm: ["clamp(0.78rem, calc(0.77rem + 0.03vw), 0.80rem)"],
        base: ["clamp(0.94rem, calc(0.92rem + 0.11vw), 1.50rem)"],
        lg: ["clamp(1.13rem, calc(1.08rem + 0.22vw), 1.88rem)"],
        xl: ["clamp(1.13rem, calc(1.08rem + 0.22vw), 2.34rem)"],
      },
      animation: {
        color: "color 2s ease infinite",
        fadeIn: "fadeIn 1s ease-in forwards",
        bounce: "bounce 2s ease infinite",
      },
      keyframes: {
        color: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        bounce: {
          "0%": {
            transform: "translateY(0px)",
          },
          "50% ": {
            transform: "translateY(1px)",
          },
          "100%  ": {
            transform: "translateY(0px)",
          },
        },
      },
    },
  },
  plugins: [],
};
