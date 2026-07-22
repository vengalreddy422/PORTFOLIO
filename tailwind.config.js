/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#080D17',
          900: '#0B1120',
          800: '#111827',
          700: '#182338',
          600: '#243247',
        },
        py: {
          blue: '#3776AB',
          lightblue: '#5A9BD8',
          yellow: '#FFD43B',
          amber: '#F2B705',
        },
        mist: {
          100: '#E9EDF5',
          300: '#B9C2D4',
          500: '#7C879C',
        },
      },
      fontFamily: {
        display: ['"Sora"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        serif: ['"Playfair Display"', 'serif'],
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(90, 155, 216, 0.35)',
        card: '0 8px 30px -12px rgba(0,0,0,0.45)',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: 1 },
          '50%, 100%': { opacity: 0 },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        bounceIn: {
          '0%': { transform: 'translateY(15px)', opacity: '0' },
          '60%': { transform: 'translateY(-5px)', opacity: '1' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        blink: 'blink 1s step-start infinite',
        floatSlow: 'floatSlow 6s ease-in-out infinite',
        fadeUp: 'fadeUp 0.7s ease-out forwards',
        bounceIn: 'bounceIn 0.25s ease-out forwards',
      },
    },
  },
  plugins: [],
}
