import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    extend: {
      height: {
        screen: '100svh'
      },
      minHeight: {
        screen: '100vh'
      },
      width: {
        screen: '100vw'
      },
      minWidth: {
        screen: '100vw'
      },
      colors: {
        primary: '#15695B',
        secondary: '#E3EFF1',
        'base-white': '#F9FAFC'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
} satisfies Config

export default config
