/** @type {import('tailwindcss').Config} */ 
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        screens: {
          "2xl": { max: "2560px" },
          // => @media (max-width: 1535px) { ... }
          xl: { max: "1279px" },
          // => @media (max-width: 1279px) { ... }
          lg: { max: "1025px" },
          // => @media (max-width: 1023px) { ... }
          md: { max: "768px" },
          // => @media (max-width: 767px) { ... }
          sm: { max: "639px" },
          // => @media (max-width: 639px) { ... }
        },
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