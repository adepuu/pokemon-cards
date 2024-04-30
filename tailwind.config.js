/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      dark: "#252A3E",
      white: "#FFFFFF",
      purple: "#97A0CC",
      "dark-blue": "#05091B",
    },
    extend: {
      fontFamily: {
        "dm-sans": ["DM Sans"],
      },
    },
  },
  plugins: [],
}
