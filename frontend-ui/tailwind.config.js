/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        cinematic: {
          900: '#0f0f0f',
          800: '#1a1a1a',
          700: '#2d2d2d',
        }
      },
      fontFamily: {
        'cinematic': ['Playfair Display', 'serif'],
        'modern': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
