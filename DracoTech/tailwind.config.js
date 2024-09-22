/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Asegúrate de incluir todos los archivos relevantes
  ],
  plugins: [require('daisyui')], // Asegúrate de incluir Daisy UI aquí
  daisyui: {
    themes: false, // Esto desactiva los temas de Daisy UI
  },
};
