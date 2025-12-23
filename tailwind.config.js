
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}", 
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        
        marquee: "marquee 50s linear infinite",
      },
    },
  },
  plugins: [],
};