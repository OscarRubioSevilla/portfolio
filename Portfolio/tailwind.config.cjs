/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--primary)',
        'primary-500': 'var(--primary-500)',
        'secondary': 'var(--secondary)',
        'silver': 'var(--silver)',
        'denim': 'var(--denim)',
        'black-rock': 'var(--black-rock)'
      },
    },
  },
  plugins: [],
}