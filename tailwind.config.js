/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        " josefin-sans": ["josefin-sans", "sans-serif"],
      },

      colors: {
        purple: "#232C93",
        black: "#000000",
        greyish: "#666665",
        grey: "#E4E4E4",
      },

      screens: {
        sm: "500px",
        md: "600px",
        lg: "1000px",
        xl: "1320px",
      },
    },
  },
  plugins: [],
};
