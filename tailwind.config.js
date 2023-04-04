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
      colors: {
        'c-white': '#fff',
        'c-black': '#000',
        'b-modal': '#0b131e5e',
        gray100: '#f2f4f6',
        gray200: '#e5e8eb',
        gray300: '#d1d6db',
        gray400: '#b0b8c1',
        gray500: '#8b95a1',
        gray600: '#4b5563',
        gray700: '#374151',
        neutral100: '#f5f5f5',
        neutral200: '#e5e5e5',
        neutral300: '#d4d4d4',
        neutral400: '#a3a3a3',
        neutral500: '#737373',
        blue100: '#dbeafe',
        blue200: '#bfdbfe',
        blue300: '#93c5fd',
        blue400: '#60a5fa',
        blue500: '#3B82F6',
        blue600: '#2563eb',
        blue700: '#1d4ed8',
        blue800: '#1e40af',
        red100: '#ffd4d6',
        red200: '#feafb4',
        red300: '#fb8890',
        red400: '#f66570',
        red500: '#f04452',
        cyan100: '#cffafe',
        cyan200: '#41f3fc',
        cyan300: '#67e8f9',
        cyan400: '#22d3ee',
        cyan500: '#06b6d4',
        yellow100: '#ffefbf',
        yellow200: '#ffe69b',
        yellow300: '#ffdd78',
        yellow400: '#ffd158',
        yellow500: '#ffc342',
      },
      borderRadius: {
        'radius-none': '0px',
        'radius-s': '0.25rem', // 4px
        'radius-m': '0.5rem', // 8px
        'radius-l': '1rem', // 16px
        'radius-xl': '1.25rem', // 20px
        'radius-xxl': '1.5rem', // 24px
        'radius-25%': '25%',
        'radius-50%': '50%',
        'radius-full': '9999px',
      },
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
