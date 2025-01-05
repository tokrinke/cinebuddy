/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        league: ['League Spartan', 'sans-serif'],
        russo: ['Russo One', 'sans-serif'],
      },
      boxShadow: {
        'movie-card': '0 20px 40px rgba(184, 29, 36, 0.4), 0 10px 20px rgba(184, 29, 36, 0.2)',
        'searchbar': '0 8px 15px -4px rgba(184, 29, 36, 0.4), 0 3px 6px -3px rgba(184, 29, 36, 0.1)',
      },
      keyframes: {
        gradientLoop: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        gradientLoop: 'gradientLoop 3s ease infinite',
      },
    },
  },
  plugins: [],
}

