/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "width" : {
         "48" :"48%",
         "31" : "31%",
         "23" : "23%"
      }
    },
  },
  plugins: [],
}