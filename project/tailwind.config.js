/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'lt-yellow': '#FDB913',
        'lt-green': '#006A44',
        'lt-red': '#C1272D',
        'nature': {
          100: '#E8F3EC',
          500: '#2F7955',
          900: '#1A432F',
        },
        'heritage': {
          100: '#FFF3E0',
          500: '#D4A373',
          900: '#8B5E34',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
};