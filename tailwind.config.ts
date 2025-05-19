import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        scrollBehavior: "smooth",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        doto: ["Doto", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        racing: ["Racing Sans One", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
