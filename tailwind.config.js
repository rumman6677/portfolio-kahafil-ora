/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'work-sans': ['Work Sans', 'sans-serif'],
        'anton': ['Anton', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'montaga': ['Montaga', 'serif'],
      },
      colors: {
        primary: {
          100: "#F1F7F6",
          200: "#00DF82",
          300: "#08C79C",
          400: "#737373",
          500: "#737373",
          600: "#04614C",
          700: "#042222",
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

