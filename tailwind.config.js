/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container : {
      center : true,
      padding : "16px"
    },
    extend: {
      fontFamily:{
        popin : "Poppins"
      },
      colors:{
        primary : "#22d3ee",
        dark : "#0f172a",
        second : "#1A2130"
      },
      
    },
  },
  plugins: [],
}

  