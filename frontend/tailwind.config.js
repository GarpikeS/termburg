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
          DEFAULT: '#2B8A94',
          light: '#5CB8C2',
        },
        accent: {
          DEFAULT: '#D4956A',
          light: '#E8B896',
        },
        background: '#FAFAF7',
        surface: {
          DEFAULT: '#FFFFFF',
          warm: '#F5F0EB',
        },
        'text-primary': '#2D3436',
        'text-secondary': '#636E72',
        success: '#27AE60',
        info: '#3498DB',
        'warm-gold': '#D4A853',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
