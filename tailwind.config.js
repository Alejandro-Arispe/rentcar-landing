/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          950: '#071A2C',
          900: '#0B3C5D',
          700: '#134E7A',
          500: '#1D6FA5',
          400: '#2E86C1',
        },
        neutral: {
          50: '#F5F6F8',
          100: '#E9EBEF',
          300: '#C3C9D4',
          500: '#8A94A6',
          700: '#4B5563',
          900: '#1F2937',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['3.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-md': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'display-sm': ['1.875rem', { lineHeight: '1.2' }],
      },
      maxWidth: {
        container: '1280px',
      },
      spacing: {
        section: '5rem',
        'section-lg': '7rem',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}
