/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brndo: {
          red: '#6F4A4A',
          darkRed: '#6b2121',
          lightRed: '#EBD8D3',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
        pangram: ['"PP Pangram"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
