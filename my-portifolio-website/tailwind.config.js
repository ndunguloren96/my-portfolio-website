// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#F0E68C", // Light golden yellow
          dark: "#DAA520",  // Dark golden yellow
        },
        secondary: {
          light: "#ADD8E6", // Light blue
          dark: "#4682B4",   // Steel blue
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
}