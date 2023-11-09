/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#091133',
        primary: '#008FD7',
      }
    },
    fontFamily: {
      'poppins': ['Poppins', 'Open Sans', 'Calibri']
    }
  },
  plugins: [],
}

