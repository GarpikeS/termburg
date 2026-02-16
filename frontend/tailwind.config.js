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
          DEFAULT: '#BA9B4F',
          light: '#D9CBA1',
        },
        accent: {
          DEFAULT: '#D4956A',
          light: '#E8B896',
        },
        background: '#191829',
        surface: {
          DEFAULT: '#222139',
          warm: '#2E2D4B',
        },
        'text-primary': '#EDEAE2',
        'text-secondary': '#9B97AB',
        success: '#5DB879',
        info: '#6AABDA',
        'warm-gold': '#D9CBA1',
        border: '#3C3B58',
      },
      fontFamily: {
        heading: ['"Ikra Slab"', 'Georgia', 'serif'],
        body: ['"Proxima Nova"', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
