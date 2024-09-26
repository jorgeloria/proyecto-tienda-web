/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'Primary_color' : '#23CCD5',
        'Secundary_color' : '#00F1FF',
        'tertiary color' : '239DD5',
        'BG_color' : '#202020',
        'Card_color' : '#343434',
        'Footer_color' : '#444444'
      },
    },
  },
  plugins: [require('daisyui')],

  daisyui: {
    themes: false, 
  },
};
