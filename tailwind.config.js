/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lullaby: {
          primary: '#A69393', // The mauve/taupe color from the logo
          light: '#B9A4A4',
          dark: '#8C7B7B',
        }
      }
    },
  },
  plugins: [],
};