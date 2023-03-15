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
      },
      colors : {
        backGroundWhite : '#FFFFFFFF',
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
