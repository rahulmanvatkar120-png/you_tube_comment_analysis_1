/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0c',
        surface: '#111114',
        surface2: '#1a1a1f',
        accent: '#e8ff47',
        pos: '#3dffa0',
        neg: '#ff4d6d',
        neu: '#7c8cf8',
        purple: '#b48cff',
        cyan: '#47e8ff',
        orange: '#ffae47',
      },
    },
  },
  plugins: [],
}
