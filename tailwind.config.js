/** @type {import('tailwindcss').Config} */ 
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        // screens: {
        //   "2xl": { max: "2560px" },
        //   // => @media (max-width: 1535px) { ... }
        //   xl: { max: "1279px" },
        //   // => @media (max-width: 1279px) { ... }
        //   lg: { max: "1025px" },
        //   // => @media (max-width: 1023px) { ... }
        //   md: { max: "768px" },
        //   // => @media (max-width: 767px) { ... }
        //   sm: { max: "639px" },
        //   // => @media (max-width: 639px) { ... }
        // },
      },
    },
    plugins: [],
  }