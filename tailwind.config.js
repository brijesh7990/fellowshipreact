/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xxs: "0.65rem", // Custom font size example
        tiny: "0.875rem", // Another custom size
        huge: "1.4rem",
      },
    },
  },
  plugins: [],
};