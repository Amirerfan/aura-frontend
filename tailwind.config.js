/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,css,scss}'],
  theme: {
    extend: {
      colors: {
        gray20: '#585858',
        'pastel-purple': '#C9A2FF',
      },
    },
  },
  plugins: [],
};
