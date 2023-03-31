/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // 'media' or 'class'
  content: ['./src/**/*.{html,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@headlessui/tailwindcss')],
};
