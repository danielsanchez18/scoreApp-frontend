/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ae0337',
        'secondary': '#f7f7f7',
        'background': '#010a0f',
        'daintre' : {
          '900': '#0f2d37',
          '950': '#001e28',
        }
      }
    },
  },
  plugins: [
    require('preline/plugin'),
    require('@tailwindcss/forms'),
  ],
}
