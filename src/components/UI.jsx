import { motion } from "framer-motion";

export function AmbientOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-neon-pink/25 blur-[90px] animate-drift" />
      <div
        className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-violet-bright/25 blur-[100px] animate-drift"
        style={{ animationDelay: "1.4s" }}
      />
      <div
        className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-orchid/20 blur-[90px] animate-drift"
        style={{ animationDelay: "2.6s" }}
      />
    </div>
  );
}

export function GlassPanel({ children, className = "", strong = false, glow = false, ...props }) {
  return (
    <div
      className={`${strong ? "glass-strong" : "glass"} rounded-4xl ${glow ? "glow-border" : ""} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function PrimaryButton({ children, className = "", icon: Icon, ...props }) {
  return (
    <motion.button
      whileHover={{ scale: 1.015, y: -1 }}
      whileTap={{ scale: 0.97 }}
      className={`group relative inline-flex items-center justify-center gap-2 rounded-full bg-eterna-gradient px-7 py-3.5 font-semibold text-white shadow-glow-sm transition-shadow hover:shadow-glow ${className}`}
      {...props}
    >
      {Icon && <Icon size={18} strokeWidth={2.2} />}
      <span>{children}</span>
    </motion.button>
  );
}

export function GhostButton({ children, className = "", icon: Icon, ...props }) {
  return (
    <motion.button
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full glass px-7 py-3.5 font-semibold text-pearl/90 transition-colors hover:bg-white/10 ${className}`}
      {...props}
    >
      {Icon && <Icon size={18} strokeWidth={2.2} />}
      <span>{children}</span>
    </motion.button>
  );
}

export function IconButton({ icon: Icon, className = "", active = false, size = 20, ...props }) {
  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className={`inline-flex h-12 w-12 items-center justify-center rounded-full glass transition-colors ${
        active ? "text-neon-pink shadow-glow-sm" : "text-pearl/80 hover:text-white"
      } ${className}`}
      {...props}
    >
      <Icon size={size} strokeWidth={2} />
    </motion.button>
  );
}

export function Eyebrow({ children, className = "" }) {
  return (
    <div className={`flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-lavender/70 ${className}`}>
      <span className="h-px w-6 bg-gradient-to-r from-neon-pink to-transparent" />
      {children}
    </div>
  );
}

export function CompatibilityRing({ value = 90, size = 120, stroke = 10, label, sub }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c;
  const gradId = `ring-${label?.replace(/\s+/g, "") || Math.round(value)}`;
  return (
    <div className="relative flex flex-col items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff8fc7" />
            <stop offset="100%" stopColor="#c77dff" />
          </linearGradient>
        </defs>
        <circle cx={size / 2} cy={size / 2} r={r} stroke="rgba(255,255,255,0.09)" strokeWidth={stroke} fill="none" />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke={`url(#${gradId})`}
          strokeWidth={stroke}
          strokeLinecap="round"
          fill="none"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{ filter: "drop-shadow(0 0 6px rgba(255,95,168,0.6))" }}
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="font-display text-2xl text-white">{value}%</span>
        {sub && <span className="text-[10px] uppercase tracking-wider text-lavender/60">{sub}</span>}
      </div>
    </div>
  );
}

export function Badge({ children, tone = "default", className = "" }) {
  const tones = {
    default: "bg-white/10 text-pearl/90 border-white/15",
    pink: "bg-neon-pink/15 text-neon-rose border-neon-pink/30",
    gold: "bg-amber-400/10 text-amber-200 border-amber-300/25",
  };
  return (
    <span className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-md ${tones[tone]} ${className}`}>
      {children}
    </span>
  );
}

export function SkeletonBlock({ className = "" }) {
  return <div className={`skeleton rounded-2xl ${className}`} />;
}

export function Toast({ toast }) {
  if (!toast) return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: -16, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -12, scale: 0.96 }}
      className="glass-strong fixed left-1/2 top-6 z-[80] flex -translate-x-1/2 items-center gap-3 rounded-full px-5 py-3 shadow-glow-sm"
    >
      {toast.icon && <toast.icon size={16} className="text-neon-pink" />}
      <span className="text-sm text-pearl/95">{toast.message}</span>
    </motion.div>
  );
}
