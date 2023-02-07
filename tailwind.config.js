/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        Comfortaa: 'Comfortaa',
        DancingScript: 'DancingScript',
      },
    },
    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      white: 'var(--color-white)',
      dark: 'var(--color-dark)',
      teal: 'var(--color-teal)',
      cyan: 'var(--color-cyan)',
      card: 'var(--color-card)',
    },
  },
  plugins: [],
};
