/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx, js}'],
  darkMode: 'class',
  theme: {
    screens:{
      'xs': '428px',
      'sm': '750px',
      'md': '960px',
      'lg': '1196px',
    },
    extend: {
      fontFamily: {
        scp: ['source code pro', 'serif']
      },
    },
  },
  plugins: [],
}
