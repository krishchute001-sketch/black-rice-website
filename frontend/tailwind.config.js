/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#171717',
          dark: '#0f0f0f',
          light: '#262626',
        },
        cream: {
          DEFAULT: '#FAF7F0',
          dark: '#ECE7DD',
          light: '#FFFFFF',
        },
        gold: {
          DEFAULT: '#C9A227',
          light: '#DEB943',
          dark: '#A68218',
        },
        forest: {
          DEFAULT: '#4F6F52',
          light: '#628565',
          dark: '#3A533D',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
