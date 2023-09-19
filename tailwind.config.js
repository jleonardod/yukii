/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#101014",
        secondary: "#232323",
        third: "#6534C9"
      }
    },
  },
  plugins: [],
}