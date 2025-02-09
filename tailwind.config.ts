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
        "blue-100": "#e6f2f2",
        "blue-200": "#96cbcb",
        "blue-300": "#6bb5b5",
        "blue-400": "#2b9696",
        "blue-500": "#008080",
        "blue-600": "#005a5a",
        "blue-700": "#004e4e",
        "gray-600": "#3c3c3c",
      },
    },
  },
  plugins: [],
} satisfies Config;
