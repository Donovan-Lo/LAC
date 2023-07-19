import { url } from 'inspector'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "black-100": "#303841",
        "black-50": "#3A4750",
        "offwhite": "#F3F3F3",
        "secondary": "#2185D5"
        
      },
      backgroundImage: (theme) =>({
        "hero-img": "url('./assets/hero-bg.jpg')"
      }),
      fontFamily:{
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serrif"]
      },
    },
    screens:{
      xs: "480px",
      sm: "768px",
      md: "1060px"
    }
  },
  plugins: [],
}