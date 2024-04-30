/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'DM-Sans': ['DM Sans'],
      },
      colors: {
        DarkBlue: '#252A3E',
        lightPurple: '#97A0CC',
        default: '#FFFFFF',
        purple: '#F0F3FF',
        blue: '#05091B',
        green: '#6CF0A1',
        lightGreen: '#2AE3B7',
      },
    },
  },
  plugins: [],
}
