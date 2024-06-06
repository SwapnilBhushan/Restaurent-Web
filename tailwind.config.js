/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: "Josefin Sans",
        text: "Inter",
      },
      backgroundImage: {
        "bg-home": "url('/src/assets/img/bg.jpeg')",
      },
      colors: {
        "custom-overlay": "rgba(40, 27, 16, 0.80)",
        background: "#D9D9D9",
      },
      screens: {},
    },
  },
  plugins: [],
};
