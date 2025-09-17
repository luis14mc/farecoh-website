/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      colors: {
        'farecoh-blue': '#1e40af',
        'farecoh-light': '#3b82f6',
        'farecoh-dark': '#1e3a8a',
      }
    },
  },
  plugins: [],
}
