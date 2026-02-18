/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        terracotta: {
          DEFAULT: '#A35638',
          light: '#BA7055',
          dark: '#7A3F28',
        },
        charcoal: {
          DEFAULT: '#363636',
          light: '#4A4A4A',
          muted: '#6B6B6B',
        },
        cream: {
          DEFAULT: '#F5F0E1',
          light: '#FAF7EF',
          dark: '#E8E0C8',
        },
        ochre: {
          DEFAULT: '#C7943D',
          light: '#D4A85A',
          dark: '#9E7430',
        },
        sage: {
          DEFAULT: '#828E77',
          light: '#9EAA93',
          dark: '#636F59',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
