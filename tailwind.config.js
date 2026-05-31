/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bm: {
          bg: "#0a0e14",
          surface: "#111827",
          card: "#1a2332",
          border: "#2a3548",
          muted: "#94a3b8",
          text: "#e2e8f0",
          accent: "#38bdf8",
          accentDim: "#0ea5e9",
          warm: "#f59e0b",
          success: "#34d399",
        },
      },
      fontFamily: {
        display: ["Segoe UI", "system-ui", "sans-serif"],
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "float-delayed": "float 8s ease-in-out 2s infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "crane-swing": "craneSwing 6s ease-in-out infinite",
        "scan-line": "scanLine 4s linear infinite",
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "grid-pulse": "gridPulse 2.5s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        craneSwing: {
          "0%, 100%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(6deg)" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(400%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        gridPulse: {
          "0%, 100%": { opacity: "0.15" },
          "50%": { opacity: "0.35" },
        },
      },
      backgroundImage: {
        "mesh-dark":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(56, 189, 248, 0.15), transparent), radial-gradient(ellipse 60% 40% at 100% 50%, rgba(245, 158, 11, 0.08), transparent)",
      },
    },
  },
  plugins: [],
};
