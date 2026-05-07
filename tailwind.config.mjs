/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', "monospace"],
        retro: ['"VT323"', "monospace"],
        grotesk: ["Grotesk", "sans-serif"],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
      },
      colors: {
        lime: "#CCFF00",
        hotpink: "#FF00FF",
        cyan: "#00FFFF",
        y2korange: "#FF6600",
        purple: "#9933FF",
        y2kyellow: "#FFFF00",
        dark: "#000033",
        grid: "#111133",
      },
    },
  },
  plugins: [],
};
