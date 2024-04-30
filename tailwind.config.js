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
        'nunito': '"Nunito Sans", sans-serif',
        'pacifico': '"Pacifico", cursive'
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
        'form_bg': "url('/form.png')",
        'add-spot': "url('/addSpot.png')",
        'extra-section': "linear-gradient(0deg, #150B2BE5, #150B2B00) ,url('/extra.jpg')",
        'cartImage': 'linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,0) 0,rgba(0,0,0,0.5) 50%,rgba(0,0,0,1) 100%)'
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ['light', 'dark'],
  },
}

