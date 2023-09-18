/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './index.html',
    './src/**/*.jsx'
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#0b4877",
        "secondary": "#073354"
      }
    },
  },
  plugins: [],
}