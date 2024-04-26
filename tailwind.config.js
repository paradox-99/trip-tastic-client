/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': '"Montserrat", sans-serif',
        'nunito': '"Nunito Sans", sans-serif'
      },
      colors: {
        'heading': '#131313',
        'subHeading': '#131313CC',
        'paragraph': '#131313B3',
        'textGreen': '#23BE0A',
        'btnPrimary': '#0CD452',
        'btnHover': '#23FF70'
      },
      backgroundImage: {
        'form_bg': "url('src/assets/images/form.png')",
        'add-spot': "url('src/assets/images/addSpot.png')"
      }
    },
  },
  plugins: [require("daisyui")],
}

