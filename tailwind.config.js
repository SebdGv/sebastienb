/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js", "./styles/tailwind.css"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["SpaceGrotesk", "sans-serif"],
      },
      keyframes: {
        reveal: {
          "0%": { opacity: 1, transform: "translateY(150%)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },

        fadeInRight: {
          "0%": { opacity: 0, transform: "translateX(500px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        fadeInRight: "fadeInRight 1.3s ease-in-out forwards",
        scroll: "scroll 150s linear infinite",
        reveal: "reveal 1.5s cubic-bezier(1,.97,.52,1.05) forwards",
      },
    },
  },
  plugins: [],
};
