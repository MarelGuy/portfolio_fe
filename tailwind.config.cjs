/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        navbar_bg_active: "#EAFEFC",
        navbar_text_active: "#51ADC1"
      }
    }
  },

  plugins: [require('tailwind-scrollbar'),],
};

module.exports = config;
