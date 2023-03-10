/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'green':'rgb(14, 135, 91);',
        'greenL':'rgb(17, 171, 115)',
        'red':'rgb(239, 0, 0);'
      },
      fontFamily:{
        'h1':'header font;'
      }
    },
  },
  plugins: [],
}
