/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js", "./styles/tailwind.css"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["SpaceGrotesk", "sans-serif"],
      },
      keyframes: {
        fadeInBounce: {
          "0%": { opacity: 1, transform: "translateY(0px)" },
          "60%": { opacity: 1, transform: "translateY(0px)" },
          "80%": { opacity: 1, transform: "translateY(0px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeOut: {
          "0%": { opacity: 1, transform: "translateY(0)" },
          "60%": { opacity: 1, transform: "translateY(2px)" },
          "80%": { opacity: 0.5, transform: "translateY(-5px)" },
          "100%": { opacity: 0, transform: "translateY(10px)" },
        },
        fadeInRight: {
          "0%": { opacity: 0, transform: "translateX(3000px)" },
          "80%": {
            opacity: 0,
            transform: "translateX(2000px)",
          },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        fadeInBounce: "fadeInBounce 1s ease-out forwards",
        fadeOut: "fadeOut 1s ease-in forwards",
        fadeInRight: "fadeInRight 2s ease-out forwards",
        scroll: "scroll 70s linear infinite",
      },
    },
  },
  plugins: [],
};
