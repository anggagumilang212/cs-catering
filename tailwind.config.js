/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    
    container:{
    center: true,
    padding: '20px',
    },
    extend: {
      colors:{
        red:'#8C0000',
        secondary: '#64748b',
      },
      screens:{
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}

