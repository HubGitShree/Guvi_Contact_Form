/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",         // Include index.html in the root folder
    "./*.js",             // Include all JavaScript files in the root folder
    "./src/**/*.{html,js,ts,jsx,tsx}" // Support TypeScript and JSX/TSX files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
