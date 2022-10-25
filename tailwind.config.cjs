/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': {
          100: "#494EC3",
          300: "#1E204B",
          900: "#000E30"
        },
      },
    },
  },
  plugins: [],
}
