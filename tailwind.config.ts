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
                primary: {
                    default: "hsl(var(--primary))",
                    blue: "hsl(var(--primary-blue))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    default: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                semantic: "hsl(var(--semantic))",
                success: {
                    default: "hsl(var(--success))",
                    foreground: "hsl(var(--success-foreground))",
                },
                warn: {
                    default: "hsl(var(--warn))",
                    foreground: "hsl(var(--warn-foreground))",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input)",
            },
        },
    },
    plugins: [],
}
export default config
