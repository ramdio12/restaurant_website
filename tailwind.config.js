/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-background': "url('./img/bg.webp')",
      },
      spacing: {
        'newwidth': '27rem',
      }
    },
  },
  plugins: [],
}