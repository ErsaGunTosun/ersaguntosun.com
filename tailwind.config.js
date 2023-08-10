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
      padding: {
        '5.5': '1.45rem',
      },
      fontSize: {
        '1.5xl':"22px",
        '2.5xl':"26px",
      },
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

