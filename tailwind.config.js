/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    spacing: {
      '265': '265px',
      '835': '835px'
    },
  },
  extend: {
    colors: {
      'light-pink': '#FDEDF2',
      'pinkk':'#EE4C7E',
      'text': '#300F19',
    },
  },
  plugins: [],
}
