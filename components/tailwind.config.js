/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // this
  theme: {
    extend: {
      // color
      colors: {
        primary: '#F5F5F5',
        'primary-dark': '#141414',
        secondary: '#ffffff',
        'secondary-dark': '#000000',
        tertiary: '#000000',
        'tertiary-dark': '#000000',
        action: '#19A7FF',
        'action-dark': '#19A7FF',
        'action-move': '#0088DD',
        'action-move-dark': '#0088DD',
        'action-secondary': '#000000',
        'action-secondary-dark': '#000000',
        'action-move-secondary': '#DDDDDD',
        'action-move-secondary-dark': '#2F2F2F',
        high: '#F54B02',
        'high-dark': '#F54B02',
        'high-move': '#F54B02',
        'high-move-dark': '#F54B02',
        error: '#EB0000',
        'error-dark': '#EB0000',
        success: '#00DF61',
        'success-dark': '#00DF61',
        warning: '#F7CD00',
        'warning-dark': '#F7CD00',
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
      },
    },
  },
  plugins: [],
}
