const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        'spin-on-hover': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'reverse-spin-on-leave': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        blob: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.1)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1.5s ease-out',
        slideUp: 'slideUp 1s ease-out',
        fadeInUp: 'fadeInUp 1s ease-out forwards',
        blob: 'blob 8s infinite',
        'spin-on-hover': 'spin-on-hover 0.5s forwards',
        'reverse-spin-on-leave': 'reverse-spin-on-leave 0.5s forwards',


      },
      colors:{
        colors: {
          black: {
            "1": '#070D0D', "2": "#000",
          },
          green: '#00FF00',
          pink: {"1": "#B30049"},
          lightpink: "#EDC8FE",

       
        },
      }
    },
  },
  plugins: [],
});
