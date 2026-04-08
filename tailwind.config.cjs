module.exports = {
  content: [
    "./index.html",
    "./App.tsx",
    "./index.tsx",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
    "./i18n/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        display: ["Oswald", "sans-serif"],
      },
      colors: {
        brand: {
          purple: "#7c3aed",
          blue: "#2563eb",
          dark: "#0f172a",
        },
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
        gradient: "gradient 8s linear infinite",
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      backgroundSize: {
        "300%": "300%",
      },
    },
  },
  plugins: [],
};
