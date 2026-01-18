/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        /* Existing marquee (for notices bar etc.) */
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },

        /* Vertical float (optional, unused here) */
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },

        /* TRUE horizontal position shifting (used in Services) */
        floatX: {
          "0%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(40px)" },
          "100%": { transform: "translateX(0px)" },
        },
      },
      animation: {
        marquee: "marquee 50s linear infinite",
        float: "float 6s ease-in-out infinite",
        floatX: "floatX 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
