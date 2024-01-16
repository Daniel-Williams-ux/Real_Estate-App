/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
      },
      colors: {
        customBlue: '#003366',
        lightBlue: ' #0059b3',
        darkBlue: '#00264d',
      },
      justifyItems: {
        'start': 'flex-start',
      },
    },
  },
  plugins: [],
}