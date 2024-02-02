import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "hsl(var(--primary-blue))",
          purple: "hsl(var(--primary-purple))",
          green: "hsl(var(--primary-green))",
          cyan: "hsl(var(--primary-cyan))",
        },
        secundary: {
          blue: "hsl(var(--secundary-blue))",
          purple: "hsl(var(--secundary-purple))",
          green: "hsl(var(--secundary-green))",
        },
        background: {
          card: "hsl(var(--card-background))",
        },
      },
    },
  },
  plugins: [],
}
export default config
