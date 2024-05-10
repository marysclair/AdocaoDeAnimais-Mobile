/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#7a6448",
        "primary-light": "#f9f4e3",
        "secondary-dark": "#b1ba8e",
        "secondary-light": "#d4ddb1",
        "terciary-light": "#cdb28a",
        "terciary-red": "#D17575",
      },
    },
  },
  plugins: [],
};
