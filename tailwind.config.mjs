import defaultTheme from "tailwindcss/defaultTheme";
import prose from "@tailwindcss/typography"
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Roboto Slab Variable",
          "Roboto Slab",
          "Inter",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [prose()],
};
