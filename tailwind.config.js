/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        headerBg: "#42cbf5",
        optionBg: "#f5f5f5",
        formArrow: "rgb(69, 179, 186)",
        inputBg: "#5a5e64",
        modalBg: "#dfdfe1",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
      },
    },
  },
  plugins: [],
};
