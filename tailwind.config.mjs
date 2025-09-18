/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        farecoh: {
          "primary": "#00A4DE",
          "primary-content": "#ffffff",
          "secondary": "#484344", 
          "secondary-content": "#ffffff",
          "accent": "#334E88",
          "accent-content": "#ffffff",
          "neutral": "#1e293b",
          "neutral-content": "#f1f5f9",
          "base-100": "#0f172a",
          "base-200": "#1e293b", 
          "base-300": "#334155",
          "base-content": "#f8fafc",
          "info": "#0ea5e9",
          "success": "#10b981",
          "warning": "#f59e0b",
          "error": "#ef4444",
        },
      },
    ],
    darkTheme: "farecoh",
    base: true,
    styled: true,
    utils: true,
  },
}
