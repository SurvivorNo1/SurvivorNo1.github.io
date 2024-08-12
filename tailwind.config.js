/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        lg: '0 0 15px rgba(0, 140, 190, 0.8)',
      },
    },
  },
  plugins: [],
};
