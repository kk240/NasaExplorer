/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        primary: '#8C7DD8', // Example primary color

      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.glow': {
          textShadow: '2px 8px 30px #705dcf',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

