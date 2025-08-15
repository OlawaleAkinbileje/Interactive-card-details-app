/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ["Space Grotesk", "sans-serif"],
      },
      fontSize: {
        base: "18px",
      },
      colors: {
        purple: {
          950: "hsl(278, 68%, 11%)",
        },
        gray: {
          200: "hsl(270, 3%, 87%)",
          400: "hsl(212, 12%, 71%)",
        },
        red: {
          400: "hsl(0, 100%, 66%)",
        },
      },
    },
  },

  plugins: [],
};
