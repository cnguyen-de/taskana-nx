const { guessProductionMode } = require('@ngneat/tailwind');

process.env.TAILWIND_MODE = guessProductionMode() ? 'build' : 'watch';

module.exports = {
  prefix: '',
  mode: 'jit',
  purge: {
    content: ['./apps/**/*.{html,ts,css,scss,sass,less,styl}', './libs/**/*.{html,ts,css,scss,sass,less,styl}']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f4fbfa',
          100: '#e9f7f5',
          200: '#c7ebe5',
          300: '#a5dfd6',
          400: '#62c7b7',
          500: '#1faf98',
          600: '#1c9e89',
          700: '#178372',
          800: '#13695b',
          900: '#0f564a'
        },
        secondary: {
          50: '#f5fcfe',
          100: '#ebf8fd',
          200: '#cdeefb',
          300: '#afe4f8',
          400: '#72d0f3',
          500: '#36bcee',
          600: '#31a9d6',
          700: '#298db3',
          800: '#20718f',
          900: '#1a5c75'
        }
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
