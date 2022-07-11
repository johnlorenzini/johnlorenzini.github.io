/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx, jsx}'],
  darkMode: 'class',
  theme: {
    maxWidth: {
      '1/2' : '50%',
    },
    extend: {

      backgroundImage:{
        'light' : "url('./src/light.jpg')",
        'dark' : "url('./src/dark.jpg')",

      },
      fontFamily: {
        pop: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'innerXL' : 'inset 4px 4px 4px 4px rgb(0 0 0 / 0.05)',
      },
    },
  },
  plugins: [],
}
