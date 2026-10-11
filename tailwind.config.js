/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        studio: {
          900: '#0d0f12',
          800: '#15191e',
          700: '#1f242b',
          600: '#2b323c',
          500: '#3c4553',
          400: '#626f84',
          accent: '#00d26a', // Insta360 signature neon green/cyan accent
          blue: '#0070f3',
          amber: '#f5a623',
          red: '#ff4d4f',
        }
      }
    },
  },
  plugins: [],
}
