import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        sacred: '#e0d7ff',
        light: '#f9f6f1',
        divine: '#a58fe0',
        'soulbridge-amber': {
          DEFAULT: '#fbbf24',  // Tailwind amber-400
          light: '#fde68a',    // amber-200
          dark: '#b45309'      // amber-700
        },
        theme: {
          50: "#fdfaf2",
          100: "#fbf2de",
          200: "#f4e0a7",
          300: "#e6cd75",
          400: "#d7b949",
          500: "#b99a30",
          600: "#927425",
          700: "#6b541d",
          800: "#473712",
          900: "#2c230a",
        },
      },
    },
  },
  plugins: [require('daisyui')]  
}

export default config
