/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "gray-suit": "#C5BECF",
        cello: "#1C2F58",
        tamarillo: "#9D152C",
        cadillac: "#B65262",
        "light-pink": "#FF8398",
        "very-pale-pink": "#FAF9FB",
        "light-lavender": "#B89CF2",
        "light-blue": "#719EFF",
      },
    },
  },
  plugins: [],
};
