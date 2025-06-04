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
    plugins: [require('daisyui')],
    daisyui: {
      themes: [
        {
          sacredlight: {
            primary: "#b99a30", // Sacred gold
            secondary: "#f4e0a7",
            accent: "#927425",
            neutral: "#473712",
            "base-100": "#fdfaf2",
            info: "#7fc0f1",
            success: "#6dd5a5",
            warning: "#f4b53f",
            error: "#ef6c57",
          },
        },
        {
          seraph: {
            primary: "#d6b35a",        // golden light
            secondary: "#fef9e7",      // soft ethereal cream
            accent: "#c7a15f",         // divine bronze
            neutral: "#493c2b",        // grounding shade
            "base-100": "#fffdf7",     // heavenly canvas
            info: "#a1d5f8",
            success: "#b2f2bb",
            warning: "#fdd877",
            error: "#f89c9c",
          }
        },
        {
          forestlight: {
            primary: "#a8d5ba",        // soft forest green
            secondary: "#f3efe8",      // dappled sunlight
            accent: "#6d947a",         // mossy stone
            neutral: "#403d39",        // bark & soil
            "base-100": "#f9f8f5",     // forest morning mist
            info: "#96d4e3",
            success: "#84cc16",
            warning: "#fcd34d",
            error: "#f87171",
          }
        },
        {
          midnightprayer: {
            primary: "#8a78d1",        // starlit lavender
            secondary: "#e5d9f2",      // moonlight
            accent: "#5f4b8b",         // cosmic purple
            neutral: "#2c2730",        // night sky
            "base-100": "#f6f0fa",     // sacred stillness
            info: "#93c5fd",
            success: "#6ee7b7",
            warning: "#facc15",
            error: "#fb7185",
          }
        },      
        "dark",
        "cupcake",
        "valentine"
      ],
      darkTheme: "dark",
    },
}

export default config
