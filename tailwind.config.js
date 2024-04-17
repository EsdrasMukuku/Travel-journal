/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        red: '#F55A5A',
        black: '#2b283a',
        gray: '#918e9b',
      }
    },
  },
  plugins: [],
}

