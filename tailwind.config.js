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
    extend: {
      screens: {
        msm: { max: '639px' },
        mmd: { max: '757px' },
        mlg: { max: '1023px' },
      },
      keyframes: {
        dropdown: {
          '0%': { transform: 'translateY(-5%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        modalup: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
      },
      animation: {
        'down-animation': 'dropdown 0.5s ease',
        'up-animation': 'modalup 0.2s ease',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
