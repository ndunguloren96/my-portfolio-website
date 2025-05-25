/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // Defined colors based on your App.jsx and the desired visual style
        'background': '#0F172A', // A dark charcoal/navy for the main application background
        'primary': '#2EE59D',   // Your vibrant green, matching the "Say Hello" button and header highlight
        'accent': '#1A202C',    // A slightly lighter dark gray for card backgrounds, borders, etc.
        'light': '#F8FAFC',     // A near-white for text on dark backgrounds
        // You can add more specific shades if needed, e.g., 'primary-hover': '#1DD189'
      },
    },
  },
  plugins: [],
  // If you are using dark mode toggling, ensure this is uncommented:
  // darkMode: "class",
};