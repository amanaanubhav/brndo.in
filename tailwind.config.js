/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/features/**/*.{js,ts,jsx,tsx}",
    "./src/contexts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brndo: {
          red: '#673131',
          darkRed: '#673131',
          lightRed: '#EBD4CB',
        },
      },
      fontFamily: {
        sans: ['"PP Pangram"', 'sans-serif'],
        pangram: ['"PP Pangram"', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        ring: {
          '0%': { transform: 'rotate(0)' },
          '10%': { transform: 'rotate(15deg)' },
          '20%': { transform: 'rotate(-10deg)' },
          '30%': { transform: 'rotate(15deg)' },
          '40%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(0)' },
          '100%': { transform: 'rotate(0)' },
        }
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        ring: 'ring 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
