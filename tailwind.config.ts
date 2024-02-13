import type { Config } from "tailwindcss"

const config: Config = {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: "hsl(var(--primary))",
                "primary-foreground": "hsl(var(--primary-foregound))",
                "primary-light": "hsl(var(--primary-light))",
                secondary: "hsl(var(--secondary))",
                "secondary-foreground": "hsl(var(--secondary-foreground))",
                disable: "hsl(var(--disable))",
                green: "hsl(var(--green))",
                mint: "hsl(var(--mint))",
                yellow: "hsl(var(--yellow))",
                orange: "hsl(var(--orange))",
                red: "hsl(var(--red))",
                border: "hsl(var(--border))",
                input: "hsl(var(--input)",
            },
        },
    },
    plugins: [],
}
export default config
