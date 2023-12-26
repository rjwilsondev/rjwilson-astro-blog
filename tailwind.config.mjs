import defaultTheme from "tailwindcss/defaultTheme";
import prose from "@tailwindcss/typography";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Roboto Flex Variable",
          "Roboto Flex",
          "Roboto",
          "Inter",
          ...defaultTheme.fontFamily.sans,
        ],
        serif: [
          "Roboto Slab Variable",
          "Roboto Slab",
          ...defaultTheme.fontFamily.serif,
        ],
      },
    },
  },
  plugins: [prose()],
};
