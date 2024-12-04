/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // This enables dark mode using the 'dark' class
  theme: {
    extend: {
      colors: {
        // You can add custom colors here if needed
      },
      // Add any additional theme extensions
    },
  },
  plugins: [],
}