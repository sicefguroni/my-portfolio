/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          300: '#3B3B3B',
          200: '#1A191C',
          100: '#2C2C2C',
        },
        secondary: {
          100: '#F6F8D5'
        }
      },
      boxShadow: {
        'navbar': '0px 2px 12px 0px rgba(210, 210, 210, 0.50)',
        'skill-card': '2px 2px 12px 5px rgba(0, 0, 0, 0.4)'
      },
      textShadow: {
        'main-text': '4px 7px 5px rgba(0, 0, 0, 0.50)'
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    },
  ],
}

