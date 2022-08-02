/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{svelte, js, ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'titles' : 'Nunito',
        'display' : 'Raleway',
      },
      colors: {
        'dark-card-color' : '#1e213a',
        'dark-bg-color' : '#100e1d',
        'dark-title-color' : '#e7e7eb',
        'dark-text-color' : '#a09fb1'
      }
    },
  },
  plugins: [],
}
