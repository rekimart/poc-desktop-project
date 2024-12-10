import { palettes, rounded, shade, components, animations } from "@tailus/themer"
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@tailus/themer/dist/components/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: palettes.trust,
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [
    rounded,
    shade,
    components,
    animations
  ],
}
