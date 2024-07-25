/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'custom-gradient': 'linear-gradient(208deg, rgba(87,0,255,1) 1%, rgba(22,33,62,1) 65%)',
      },
      
    },
  },
  plugins: [],
}

