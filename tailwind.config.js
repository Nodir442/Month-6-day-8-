/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(13, 99, 243, 1)",
        secondary: "rgba(255, 255, 255, 1)",
      },
      container: {
        center: true,
        padding: "15px",
        screens: {
          lg: "1200px",
        },
      },
    },
  },
  plugins: [],
};
