/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#FFFABA',
        mainbg:'#c1cfcf',
        primaygreen:'#4BAF47',
        secondary: '#00ACAE',
        'txt-primary': '#414997',
        'txt-secondary': '#EC3237',
      },
    },
  },
  plugins: [],
}
