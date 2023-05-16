/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#9A0007',
        blue: '#1c609e',
        lightBlue: '#3B91DF',
        persianBlue: '#2D2DB3',
        inactiveBlack: '#72777A',
        lightBlack: '#2b2b2b',
      },
    },
  },
  plugins: [],
};
