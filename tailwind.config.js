/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      colors: {
        'aztec': {
          '50': '#f5f8f7',
          '100': '#dfe8e5',
          '200': '#bed1cb',
          '300': '#95b3ab',
          '400': '#6f928b',
          '500': '#557770',
          '600': '#425f59',
          '700': '#384d4a',
          '800': '#2f403e',
          '900': '#2a3735',
          '950': '#151e1d',
        },

      },
    },
  },
  plugins: [
    require('preline/plugin'),
    require('@tailwindcss/forms'),
  ],
}
