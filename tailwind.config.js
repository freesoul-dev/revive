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
        earth: {
          50: '#f5f1e8',
          100: '#e8ddd0',
          200: '#d4c2a8',
          300: '#bda17a',
          400: '#a6855a',
          500: '#8f6f4a',
          600: '#7a5d3f',
          700: '#654c35',
          800: '#523d2d',
          900: '#3d2e22',
        },
        sage: {
          50: '#f4f6f2',
          100: '#e3e8dc',
          200: '#c7d1b9',
          300: '#a5b48e',
          400: '#86996a',
          500: '#6b7d4f',
          600: '#546240',
          700: '#444d35',
          800: '#383f2d',
          900: '#2f3526',
        },
        terracotta: {
          50: '#faf5f2',
          100: '#f2e6dd',
          200: '#e4ccb9',
          300: '#d1a98c',
          400: '#bc8563',
          500: '#a86d4a',
          600: '#8f5a3d',
          700: '#764934',
          800: '#623d2d',
          900: '#523428',
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

