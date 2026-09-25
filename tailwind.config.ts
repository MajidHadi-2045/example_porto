import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#EFEBE0",     // Krem hangat khas kertas majalah
        ink: "#0F0F0F",      // Hitam pekat tinta
        accent: "#E64833",   // Oranye terakota tajam
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-manrope)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      boxShadow: {
        brutal: "8px 8px 0px 0px rgba(15,15,15,1)",
        "brutal-sm": "4px 4px 0px 0px rgba(15,15,15,1)",
        "brutal-hover": "12px 12px 0px 0px rgba(230,72,51,1)",
        "brutal-white": "8px 8px 0px 0px rgba(239,235,224,1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        "spin-slow": "spinSlow 12s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
