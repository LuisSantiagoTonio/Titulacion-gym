/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        iron: {
          950: '#13110f',
          900: '#1c1916',
          800: '#272220',
          700: '#3a332f',
          600: '#544a44',
        },
        ember: {
          400: '#ff8a4c',
          500: '#ff5e1a',
          600: '#e8470a',
        },
        chalk: '#f3efe8',
        slate2: '#9c948b',
      },
      fontFamily: {
        display: ['"Oswald"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
