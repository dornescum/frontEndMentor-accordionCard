module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'kumbh': ['"Kumbh Sans"', 'sans-serif'],
      },
      colors:{
        lightRed:"#f47c57",
        softBlue:"#56c2e6",
        limeGreen:"#4acf81",
        violet:"#af67e9",
        softOrange:"#f1c65b",
        myBlue: {
          100: "#1d1e35",
          200: "#6565e7"
        },
        myGray:{
          100:"#4a4b5e",
          200:"#787887",
          300:"#e7e7e9"
        },
      },
    },
  },
  plugins: [],
}
