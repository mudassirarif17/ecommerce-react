/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.transition-width': {
          transitionProperty: 'width',
        },
      }, ['responsive', 'hover'])
    },
  ],
}

