/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#140a24",
          soft: "#1c1030",
        },
        plum: {
          DEFAULT: "#24123c",
          light: "#341a54",
        },
        violet: {
          DEFAULT: "#5b2a8c",
          bright: "#7c3aed",
        },
        orchid: "#c77dff",
        lavender: {
          DEFAULT: "#e3c6ff",
          soft: "#f1e2ff",
        },
        neon: {
          pink: "#ff5fa8",
          rose: "#ff8fc7",
        },
        pearl: "#f9f5ff",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(199,125,255,0.55)",
        "glow-sm": "0 0 20px -6px rgba(255,95,168,0.55)",
        "glow-lg": "0 0 80px -10px rgba(199,125,255,0.6)",
      },
      backgroundImage: {
        "aurora": "radial-gradient(60% 50% at 20% 10%, rgba(255,95,168,0.35) 0%, transparent 60%), radial-gradient(50% 40% at 85% 15%, rgba(124,58,237,0.35) 0%, transparent 60%), radial-gradient(70% 60% at 50% 100%, rgba(199,125,255,0.3) 0%, transparent 60%)",
        "eterna-gradient": "linear-gradient(135deg, #ff5fa8 0%, #c77dff 50%, #7c3aed 100%)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      keyframes: {
        floaty: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseglow: {
          "0%,100%": { opacity: 0.6, transform: "scale(1)" },
          "50%": { opacity: 1, transform: "scale(1.06)" },
        },
        drift: {
          "0%": { transform: "translate(0,0) rotate(0deg)" },
          "100%": { transform: "translate(30px,-20px) rotate(8deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        floaty: "floaty 5s ease-in-out infinite",
        pulseglow: "pulseglow 3.2s ease-in-out infinite",
        drift: "drift 8s ease-in-out infinite alternate",
        shimmer: "shimmer 2.4s linear infinite",
      },
    },
  },
  plugins: [],
};
