/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/App.vue', './src/**/*.vue'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'w-blue': '#2b5dff',
        periwinkle: '#b4c2f0',
        'eerie-black': '#222',
        'rich-black': '#18202c',
        'fleery-rose': '#fa4f64'
      }
    }
  },
  plugins: []
}
