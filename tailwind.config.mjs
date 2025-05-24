/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['var(--font-roboto)', 'sans-serif'],
        epilogue: ['var(--font-epilogue)', 'sans-serif'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      backgroundImage: {
        'fade-white':
          'linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 26%, rgba(255, 255, 255, 0.74) 42%, rgba(255, 255, 255, 0) 63%)',
        'green-gradient': 'linear-gradient(to right, #62AE6E 0%, #EDE14F 100%)',
      },
      boxShadow: {
        'card-value': '0px 5.66px 14.15px rgba(0, 0, 0, 0.13)',
      },
    },
  },
  plugins: [],
}
