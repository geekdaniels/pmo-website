/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'headerBg': '#45b3ba',
          'optionBg': '#5c5757',
          'formArrow': 'rgb(69, 179, 186)',
          'inputBg': '#5a5e64',
          'modalBg': '#dfdfe1'
        },
        gridTemplateColumns: {
        // Simple 16 column grid
        'auto': 'minmax(auto, auto)'
        },
      },
    },
    plugins: [],
  }