/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      dropShadow: {
        dark: "0px 5px 10px black",
      },
      colors: {
        bg: {
          100: "#e595a4",
          300: "#9CBFA7",
          500: "#536E58",
        },
        text: {
          500: "#292929",
        },
      },
    },
  },
  plugins: [],
};
