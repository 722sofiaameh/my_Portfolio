/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'sora': ['Sora', 'sans-serif'],
        'mulish': ['Mulish', 'sans-serif'],
        'Pattaya':['Pattaya','sans-serif'],
      },
      colors : {
        navPink :'rgba(183, 76, 76, 0.42)',
        pinkBackground :'rgba(176, 85, 85, 0.63)',
        cardPink:'rgba(183, 76, 76, 0.35)',
        darkGray : ' #171A1FFF',
        lightGray : ' #323842FF',
        lightBlue: '#3EBDE0FF',
        lightGreen : '#83AA19FF',
        linkColor: ' #424955FF',
        footerColor: ' #1D2128FF',
        blueBackgroundColor: '#F2FAFDFF',
        grayBackgroundColor : '#F6FCE8FF'
      }
    },
  },
  plugins: [],
}
