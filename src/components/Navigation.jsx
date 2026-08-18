import { Compass, Heart, Sparkles, MessageCircle, User, Wand2 } from "lucide-react";
import { motion } from "framer-motion";
import EternaMark from "./EternaMark";

const items = [
  { key: "discover", label: "Discover", icon: Compass },
  { key: "likes", label: "Likes", icon: Heart },
  { key: "matches", label: "Matches", icon: Sparkles },
  { key: "messages", label: "Messages", icon: MessageCircle },
  { key: "ai", label: "Eterna AI", icon: Wand2 },
  { key: "profile", label: "Profile", icon: User },
];

export function DesktopNav({ current, onNavigate, badges = {} }) {
  return (
    <div className="fixed left-1/2 top-6 z-50 hidden -translate-x-1/2 lg:block">
      <div className="glass-strong flex items-center gap-1 rounded-full px-3 py-2 shadow-glow-sm">
        <button onClick={() => onNavigate("discover")} className="mr-2 flex items-center gap-2 pl-2 pr-3">
          <EternaMark size={30} animated={false} />
          <span className="font-display text-lg tracking-wide text-white">Eterna</span>
        </button>
        {items.map((item) => {
          const active = current === item.key;
          return (
            <button
              key={item.key}
              onClick={() => onNavigate(item.key)}
              className={`relative flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${
                active ? "text-white" : "text-pearl/60 hover:text-pearl/90"
              }`}
            >
              {active && (
                <motion.span
                  layoutId="desktop-nav-active"
                  className="absolute inset-0 rounded-full bg-eterna-gradient shadow-glow-sm"
                  transition={{ type: "spring", stiffness: 350, damping: 28 }}
                />
              )}
              <item.icon size={16} strokeWidth={2.2} className="relative" />
              <span className="relative">{item.label}</span>
              {badges[item.key] > 0 && (
                <span className="relative -ml-1 -mt-3 h-2 w-2 rounded-full bg-neon-pink shadow-glow-sm" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function MobileNav({ current, onNavigate, badges = {} }) {
  const mobileItems = items.filter((i) => i.key !== "ai" || true).slice(0, 5);
  return (
    <div className="fixed inset-x-0 bottom-5 z-50 flex justify-center px-4 lg:hidden">
      <div className="glass-strong flex w-full max-w-md items-center justify-between rounded-full px-3 py-3 shadow-glow-sm">
        {mobileItems.map((item) => {
          const active = current === item.key;
          return (
            <button
              key={item.key}
              onClick={() => onNavigate(item.key)}
              className="relative flex flex-1 flex-col items-center gap-1"
            >
              {active && (
                <motion.span
                  layoutId="mobile-nav-glow"
                  className="absolute -top-1 h-1 w-6 rounded-full bg-neon-pink shadow-glow-sm"
                />
              )}
              <item.icon
                size={21}
                strokeWidth={2.2}
                className={active ? "text-neon-pink drop-shadow-[0_0_6px_rgba(255,95,168,0.8)]" : "text-pearl/55"}
              />
              {badges[item.key] > 0 && (
                <span className="absolute -right-1 top-0 h-2 w-2 rounded-full bg-neon-pink" />
              )}
              <span className={`text-[10px] ${active ? "text-white" : "text-pearl/45"}`}>{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
