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
        darkBlack: '#0C1231',
        darkPurple: '#3D4466',
        darkGreen: '#11B047',
        lightBlue: '#02ccfe',
        rebeccaPurple: '#663399',
      },
    },
  },
  plugins: [],
}
