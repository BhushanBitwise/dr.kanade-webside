/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: false,
  },
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#183c32',
        sage: '#c6d0be',
        cream: '#f7f5ef',
        stone: '#d9d2c5',
        terracotta: '#ad745e',
      },
    },
  },
  plugins: [],
};
