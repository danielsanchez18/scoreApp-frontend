/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./src/**/*.{html,js}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ae0337',
        secondary: '#f7f7f7',
        background: '#0d1a2e',
      }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}
