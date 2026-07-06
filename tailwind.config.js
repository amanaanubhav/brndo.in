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
          red: '#800000',
          darkRed: '#4A0000',
          lightRed: '#EBD8D3',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
        pangram: ['"PP Pangram"', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
      }
    },
  },
  plugins: [],
}
