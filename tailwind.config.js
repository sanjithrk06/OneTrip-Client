/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust according to your project structure
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(26, 93%, 50%)',
        hover: 'hsl(26, 90%, 42%)',
        white: 'hsl(0, 0%, 100%)',
        black: 'hsl(0, 0%, 18%)',
        text: 'hsl(240, 1%, 48%)',
        whiteColorDeam: 'hsl(0, 0%, 93%)',
        greyBg: 'hsl(0, 0%, 96%)',
        greyText: 'rgb(190, 190, 190)',
        inputColor: 'hsl(330, 12%, 97%)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      spacing: {
        '4rem': '4rem',
        '2rem': '2rem',
        '5rem': '5rem',
        '3rem': '3rem',
      },
      borderRadius: {
        '3rem': '3rem',
      },
      fontSize: {
        '13px': '13px',
        '15px': '15px',
        '2.2rem': '2.2rem',
      },
      lineHeight: {
        '1.5rem': '1.5rem',
        '2rem': '2rem',
      },
      boxShadow: {
        card: '0 2px 8px 4px rgba(178, 178, 178, 0.45)',
      },
    },
  },
  plugins: [],
};
