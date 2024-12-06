import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      colors: {
        background: "#f0f2e9",
        primary: "#1a2e1a",
        secondary: "#e8ebe3",
        card: "#e6ebe6",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
