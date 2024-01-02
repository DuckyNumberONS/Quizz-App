/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "royal-blue": "#4378DB",
        "gam-boge": "#F0A714",
        "crus-ta": "#F35555",
      },
    },
  },
  plugins: [],
};
