/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      msm: { max: '639px' },
      mmd: { max: '757px' },
      mlg: { max: '1023px' },
    },
    extend: {
      keyframes: {
        dropdown: {
          '0%': { transform: 'translateY(-5%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        dropup: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
      animation: {
        'down-animation': 'dropdown 0.5s ease',
        'up-animation': 'dropup 0.4s ease',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
