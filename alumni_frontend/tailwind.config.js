/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      'blue-1': '#3D52A0',
      'blue-2': '#7091E6',
      'blue-3': '#8697C4',
      'blue-4': '#ADBBDA',
      'blue-5': '#EDE8F5',
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
      slate: colors.slate,
      red: colors.red,
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "cupcake", "dark"],
  },
};
