/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "gray-suit": "#C5BECF",
        "slate-blue": "#3A4B77",
        cello: "#1C2F58",
        tamarillo: "#9D152C",
        burgundy: "#800F23",
        cadillac: "#B65262",
        "light-pink": "#FF8398",
        "very-pale-pink": "#FAF9FB",
        "light-lavender": "#B89CF2",
        "light-blue": "#719EFF",
      },
      backgroundImage: {
        "top-wave": "url('./assets/topWave.svg')",
      },
      backgroundSize: {
        "custom-large": "150%",
      },
    },
  },
  plugins: [],
};

// f6f6f6
