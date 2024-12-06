/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Montserrat:["Montserrat", "sans-serif"]
      },
      colors: {
        Purple: '#6B46C1', // Define your custom color here
      },
    },
  },
  plugins: [],
}

