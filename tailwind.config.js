/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",      // Ensure index.html is included
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure all JS/JSX/TS/TSX files are included
  ],
  theme: {
    extend: {
      colors: {
        primary: "#162055",
        gray: {
          300: 'rgba(209, 213, 219, 1)',
        },
      },
      backgroundImage: {
        "stock-pattern": "url('/assets/bg.svg')",
      },
    },
    screens: {
      sm: "640px",
      md: "900px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      'below-450': { max: '450px' }, 
    },
  },
  plugins: [],
}

