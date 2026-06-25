import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        neon: "#006DFF",
        brandHover: "#0052CC",
        ink: "#111111",
        charcoal: "#2D2D2D"
      },
      fontFamily: {
        heading: ["var(--font-bebas)", "Arial Narrow", "sans-serif"],
        body: ["var(--font-montserrat)", "Montserrat", "sans-serif"]
      },
      boxShadow: {
        premium: "0 20px 60px rgba(0,0,0,.35)",
        glow: "0 0 0 1px rgba(0,109,255,.28), 0 20px 55px rgba(0,109,255,.12)"
      }
    }
  },
  plugins: []
};

export default config;
