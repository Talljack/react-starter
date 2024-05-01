/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // 'media' or 'class'
  content: ['./src/**/*.{ts,tsx}', './*.html'],
  theme: {
    extend: {},
  },
  plugins: [require('@headlessui/tailwindcss')],
}
