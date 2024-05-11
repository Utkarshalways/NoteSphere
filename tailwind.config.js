/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "770px" },
      // => @media (max-width: 770px) { ... }

      sm: { max: "430px" },
      // => @media (max-width: 430px) { ... }
    },   
  },
  plugins: [],
};

