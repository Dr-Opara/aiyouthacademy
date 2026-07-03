import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#070B26",
        "navy-2": "#0D1340",
        card: "#12194B",
        purple: "#7B2FF7",
        cyan: "#00E5FF",
        yellow: "#FFD60A",
        orange: "#FF8A00",
        red: "#FF3B5C",
        "ink-soft": "#C9D4F5",
        "ink-mute": "#8FA3D9",
        // legacy tokens kept for any lingering references
        "electric-blue": "#00B4FF",
        "neon-purple": "#BF00FF",
        "cyber-cyan": "#00FFFF",
        "cosmic-orange": "#FF6B00",
        "space-black": "#030B1A",
        "deep-space": "#050D1F",
        nebula: "#0A1628",
        "star-white": "#F0F8FF",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        orbitron: ["var(--font-orbitron)", "monospace"],
        sans: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "float-slow": "float 8s ease-in-out 1s infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "spin-slow": "spin 30s linear infinite",
        "spin-reverse": "spinReverse 25s linear infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
        "gradient-shift": "gradientShift 8s ease-in-out infinite",
        scan: "scan 4s linear infinite",
        "border-glow": "borderGlow 3s ease-in-out infinite",
        marquee: "scrollX 26s linear infinite",
        "holo-float": "holoFloat 5s ease-in-out infinite",
        "pad-pulse": "padPulse 3.4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        scrollX: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        holoFloat: {
          "0%, 100%": { transform: "translateY(0) rotate(-1deg)" },
          "50%": { transform: "translateY(-12px) rotate(1.5deg)" },
        },
        padPulse: {
          "0%, 100%": { opacity: "0.7", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.06)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        spinReverse: {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.2", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
        },
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        borderGlow: {
          "0%, 100%": {
            boxShadow:
              "0 0 5px rgba(0, 180, 255, 0.3), 0 0 10px rgba(0, 180, 255, 0.2)",
          },
          "50%": {
            boxShadow:
              "0 0 20px rgba(0, 180, 255, 0.8), 0 0 40px rgba(191, 0, 255, 0.4)",
          },
        },
      },
      boxShadow: {
        "glow-blue":
          "0 0 30px rgba(0, 180, 255, 0.4), 0 0 60px rgba(0, 180, 255, 0.2)",
        "glow-purple":
          "0 0 30px rgba(191, 0, 255, 0.4), 0 0 60px rgba(191, 0, 255, 0.2)",
        "glow-cyan":
          "0 0 30px rgba(0, 255, 255, 0.4), 0 0 60px rgba(0, 255, 255, 0.2)",
        "glow-orange":
          "0 0 30px rgba(255, 107, 0, 0.4), 0 0 60px rgba(255, 107, 0, 0.2)",
        glass: "0 4px 30px rgba(0, 0, 0, 0.3)",
        "card-hover": "0 20px 60px rgba(0, 0, 0, 0.5)",
        "inner-glow": "inset 0 0 30px rgba(0, 180, 255, 0.1)",
        "glow-cyan-sm": "0 0 22px rgba(0, 229, 255, 0.3)",
        "glow-purple-lg": "0 0 80px rgba(123, 47, 247, 0.25)",
        "glow-yellow": "0 6px 26px rgba(255, 214, 10, 0.35)",
      },
      backgroundImage: {
        "space-gradient":
          "radial-gradient(ellipse at center, #0A1628 0%, #030B1A 50%, #010508 100%)",
        "hero-gradient":
          "linear-gradient(135deg, #030B1A 0%, #0A1628 40%, #050D1F 100%)",
        "blue-purple-gradient": "linear-gradient(135deg, #00B4FF, #BF00FF)",
        "cyan-blue-gradient": "linear-gradient(135deg, #00FFFF, #00B4FF)",
        "purple-orange-gradient": "linear-gradient(135deg, #BF00FF, #FF6B00)",
        "gold-gradient": "linear-gradient(135deg, #FFD700, #FF6B00)",
        "aurora-gradient":
          "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(123,47,247,.45), transparent 60%), radial-gradient(ellipse 60% 40% at 85% 25%, rgba(0,229,255,.14), transparent 60%), radial-gradient(ellipse 70% 45% at 10% 70%, rgba(255,59,92,.12), transparent 60%), linear-gradient(180deg,#0A0E2E 0%, #070B26 50%, #0B0730 100%)",
        "sunset-gradient": "linear-gradient(135deg,#FFD60A,#FF8A00)",
        "cyan-purple-red-gradient": "linear-gradient(90deg,#00E5FF,#7B2FF7,#FF3B5C)",
      },
    },
  },
  plugins: [],
};

export default config;
