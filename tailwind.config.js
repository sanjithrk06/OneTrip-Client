/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(26, 93%, 50%)',         // --PrimaryColor
        hover: 'hsl(26, 90%, 42%)',           // --HoverColor
        white: 'hsl(0, 0%, 100%)',            // --whiteColor
        black: 'hsl(0, 0%, 18%)',             // --blackColor
        text: 'hsl(240, 1%, 48%)',            // --textColor
        whiteDim: 'hsl(0, 0%, 93%)',          // --whiteColorDeam
        greyBg: 'hsl(0, 0%, 96%)',            // --greyBg
        greyText: 'rgb(190, 190, 190)',       // --greyText
        input: 'hsl(330, 12%, 97%)',          // --inputColor
        bgColor: '#EE701E'
      },
    },
  },
  plugins: [],
};
