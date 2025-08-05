import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#2C3E50",
          50: "#E8EDF3",
          100: "#D1DBE7",
          200: "#A3B7CF",
          300: "#7593B7",
          400: "#56799C",
          500: "#2C3E50",
          600: "#243240",
          700: "#1B2530",
          800: "#121920",
          900: "#090C10",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#56799C",
          50: "#F0F4F8",
          100: "#E1E9F1",
          200: "#C3D3E3",
          300: "#A5BDD5",
          400: "#79AADB",
          500: "#56799C",
          600: "#45617D",
          700: "#34495E",
          800: "#23313F",
          900: "#121920",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#79AADB",
          50: "#F5F8FC",
          100: "#EBF1F9",
          200: "#D7E3F3",
          300: "#C3D5ED",
          400: "#9EC2E3",
          500: "#79AADB",
          600: "#5A8BC7",
          700: "#4A73A3",
          800: "#3A5B82",
          900: "#2A4361",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#32475C",
          foreground: "#A5BDD5",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
