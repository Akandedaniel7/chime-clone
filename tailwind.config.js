/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./{html,js}"],
  theme: {
    extend: {
      colors:{
        'green':'rgb(14, 135, 91);',
        'greenL':'rgb(17, 171, 115)',
        'red':'rgb(239, 0, 0);',
        'notice': 'rgb(71,71,71);'
      },
      fontFamily:{
        'h1': 'header font',
        'body': 'body font'
      }
    },
  },
  plugins: [],
}
