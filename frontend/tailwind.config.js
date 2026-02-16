/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#C4A265',
          light: '#D4B87A',
        },
        accent: {
          DEFAULT: '#D4956A',
          light: '#E8B896',
        },
        background: '#1A1714',
        surface: {
          DEFAULT: '#252219',
          warm: '#2D2A22',
        },
        'text-primary': '#F5F0E8',
        'text-secondary': '#A89F8F',
        success: '#5DB879',
        info: '#6AABDA',
        'warm-gold': '#D4A853',
        border: '#3D382F',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
