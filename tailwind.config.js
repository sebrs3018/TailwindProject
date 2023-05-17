/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/App.vue', './src/**/*.vue'],
  theme: {
    extend: {
      colors: {
        'w-blue': '#2b5dff',
        periwinkle: '#b4c2f0'
      }
    }
  },
  plugins: []
}
