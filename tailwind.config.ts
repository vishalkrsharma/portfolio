import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        text: '#fafafa',
        'text-rgb': 'rgb(250, 250, 250)',
        background: '#1a1919',
        primary: '#858683',
        'primary-rgb': 'rgb(133, 134, 131)',
        secondary: '#0d0d0d',
        accent: '#737274',
      },
    },
  },
  plugins: [],
};
export default config;
