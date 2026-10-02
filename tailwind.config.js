/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#05070b',
          card: '#0c111a',
          cardHover: '#131c2c',
          border: 'rgba(56, 189, 248, 0.15)',
          cyan: '#00f0ff',
          emerald: '#10b981',
          amber: '#f59e0b',
          purple: '#a855f7'
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['"Syne"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
