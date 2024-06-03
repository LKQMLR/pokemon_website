export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f1c406",
        secondary: "#3266ac"
      },
      backgroundImage: {
        "bg-pattern": "url('./src/client/assets/bg-pattern.png')",
      }
    },
  },
  plugins: [],
}