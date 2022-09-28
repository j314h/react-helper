/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // this
  theme: {
    extend: {
      // color
      colors: {
        primary: '#000',
        'primary-dark': '#000',
        secondary: '#000',
        'secondary-dark': '#000000',
        tertiary: '#000000',
        'tertiary-dark': '#000000',
        action: '#000',
        'action-dark': '#000',
        'action-move': '#000',
        'action-move-dark': '#000',
        'action-secondary': '#000000',
        'action-secondary-dark': '#000000',
        'action-move-secondary': '#000',
        'action-move-secondary-dark': '#000',
        high: '#000',
        'high-dark': '#000',
        'high-move': '#000',
        'high-move-dark': '#000',
        error: '#000',
        'error-dark': '#000',
        success: '#000',
        'success-dark': '#000',
        warning: '#000',
        'warning-dark': '#000',
      },

      // size text
      fontSize: {
        // input primary
        'input-primary-first': '1rem', // mobile
        'input-primary-second': '1rem', // tablette
        'input-primary-third': '1rem', // pc

        // btn primary
        'btn-primary-first': '1rem', // mobile
        'btn-primary-second': '1rem', // tablette
        'btn-primary-third': '1rem', // pc

        // btn text primary
        'btn-text-primary-first': '1rem', // mobile
        'btn-text-primary-second': '1rem', // tablette
        'btn-text-primary-third': '1rem', // pc

        // link text primary
        'link-text-primary-first': '1rem', // mobile
        'link-text-primary-second': '1rem', // tablette
        'link-text-primary-third': '1rem', // pc

        // link primary
        'link-primary-first': '1rem', // mobile
        'link-primary-second': '1rem', // tablette
        'link-primary-third': '1rem', // pc
      },
    },
  },
  plugins: [],
}
