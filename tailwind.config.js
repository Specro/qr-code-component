/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html'
  ],
  theme: {
    fontFamily: {
      sans: ['Outfit', 'sans-serif']
    },
    extend: {
      colors: {
        'slate-900': '#1f314f',
        'slate-500': '#68778d',
        'slate-300': '#d5e1ef'
      },
      boxShadow: {
        'card': '0 25px 25px 0 rgba(0, 0, 0, 0.0477)'
      },
      lineHeight: {
        tight: 1.2,
        snug: 1.4
      },
      borderRadius: {
        'xl': '10px',
        '2xl': '20px'
      },
      letterSpacing: {
        wide: '0.2px'
      },
      fontSize: {
        base: '0.9375rem',
        lg: '1.375rem'
      },
    },
  },
  plugins: [],
}

