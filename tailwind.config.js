module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "main-dark": "#181818",
        "main-light": "#efe4d6",
      },
      fontFamily: {
        sans: ["Nunito"],
      },
    },
  },
  plugins: [],
};
