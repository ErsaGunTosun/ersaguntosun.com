/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}"],
  theme: {
    extend: {
      flexBasis: {
        '31/50': '62%',
      },
      maxWidth: {
        'mdx': '770px',
      },
      width: {
        '18': '72px',
      },
      padding: {
        '5.5': '1.45rem',
      },
      fontSize: {
        'smx':'15px',
        '1.5xl': "22px",
        '2.5xl': "26px",
      },
      borderWidth: {
        '3':'3px'
      },
      backgroundColor:
      {
        "tech-item":'#f7f7f7'
      },

    },
    listStyleType: {
      none: 'none',
      square: 'square',
      roman: 'upper-roman',
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'mdx': '900px',
    }
  },
  plugins: [],
}

