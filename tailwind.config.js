/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "dm-sans": ["DM Sans"]
      },
      colors: {
        "maritime-blue": "#252a3e",
        chronicle: "#3d4466",
        "brilliant-white": "#F0F3FF",
        "dark-rift": "#05091b",
        "screen-glow": "#6CF0A1",
        "velvet-robe": "#97A0CC",
      }
    },
  },
  plugins: [],
}

