/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        iron: {
          950: '#13110f',
          900: '#1c1916',
          850: '#221e1b',
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
      boxShadow: {
        ember: '0 10px 30px -10px rgba(255, 94, 26, 0.35)',
      },
      backgroundImage: {
        'ember-gradient': 'linear-gradient(90deg, #ff5e1a, #ff8a4c)',
        'iron-grid':
          'linear-gradient(rgba(58,51,47,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(58,51,47,0.35) 1px, transparent 1px)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'ember-pulse': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.25s ease-out',
        'fade-up': 'fade-up 0.5s ease-out both',
        'ember-pulse': 'ember-pulse 3s ease-in-out infinite',
        float: 'float 7s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 6s ease infinite',
        'spin-slow': 'spin-slow 26s linear infinite',
      },
    },
  },
  plugins: [],
};
