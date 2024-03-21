/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
        'accent': '#EEF1FF',
        'highlight': '#38ACEC',
        'gray-600': '#4b5563'
      },  
  },
  plugins: [],
}

