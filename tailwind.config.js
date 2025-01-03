module.exports = {
  purge: ['./src/**/*.{vue,js,ts,jsx,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
      extend: {
        fontFamily: {
          sans: ['Montserrat', 'sans-serif'], // Jadikan Montserrat sebagai font default
        },
      },
  },
  variants: {
      extend: {},
  },
  plugins: [],
}
