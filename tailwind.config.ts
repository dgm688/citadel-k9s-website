import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B0B0B", // primary background
          900: "#0B0B0B",
          800: "#111111", // secondary / panels
          700: "#171717",
          600: "#1F1F1F",
          500: "#2A2A2A",
        },
        // Official brand gold (from the Citadel K9s brand package)
        gold: {
          DEFAULT: "#C9A227",
          soft: "#F1D689",
          deep: "#7B6019",
        },
        bone: {
          DEFAULT: "#F8F8F8",
          muted: "#C9C9C9",
          faint: "#8A8A8A",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        luxe: "0.28em",
        wide2: "0.16em",
      },
      maxWidth: {
        site: "1280px",
      },
      boxShadow: {
        luxe: "0 30px 80px -30px rgba(0,0,0,0.85)",
        gold: "0 0 0 1px rgba(201,162,39,0.35), 0 20px 50px -25px rgba(201,162,39,0.25)",
      },
      backgroundImage: {
        "gold-line":
          "linear-gradient(90deg, transparent, rgba(201,162,39,0.7), transparent)",
        "radial-ink":
          "radial-gradient(ellipse at top, rgba(31,31,31,0.9), rgba(11,11,11,1) 60%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "slow-zoom": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        shimmer: "shimmer 2.5s linear infinite",
        "slow-zoom": "slow-zoom 18s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
