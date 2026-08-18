import { motion } from "framer-motion";
import { Sparkles, MessageSquareText, CalendarHeart, UserCog, Wand2, ArrowRight } from "lucide-react";
import ScreenShell from "../components/ScreenShell";
import { GlassPanel, Eyebrow, Badge } from "../components/UI";
import EternaMark from "../components/EternaMark";
import { profiles } from "../lib/data";

const capabilities = [
  { icon: Sparkles, title: "Match recommendations", body: "Curated daily, ranked by real compatibility signal." },
  { icon: UserCog, title: "Personality analysis", body: "A living model of what you value and how you connect." },
  { icon: MessageSquareText, title: "Conversation suggestions", body: "The right thing to say, right when you need it." },
  { icon: CalendarHeart, title: "Date suggestions", body: "Plans matched to both your energies, not just your city." },
  { icon: Wand2, title: "Profile improvement", body: "Small edits that meaningfully change your results." },
  { icon: Sparkles, title: "AI-generated icebreakers", body: "Never open with 'hey' again." },
];

export default function EternaAI({ onExplainMatch }) {
  const top = profiles[0];
  return (
    <ScreenShell>
      <div className="flex flex-col items-center text-center">
        <div className="relative flex h-32 w-32 items-center justify-center">
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ background: "conic-gradient(from 0deg, #ff5fa8, #c77dff, #7c3aed, #ff5fa8)" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-[6px] rounded-full bg-ink" />
          <div className="absolute inset-0 rounded-full bg-eterna-gradient opacity-30 blur-2xl animate-pulseglow" />
          <EternaMark size={64} />
        </div>
        <Eyebrow className="mt-6 justify-center">Your dating assistant</Eyebrow>
        <h1 className="mt-3 font-display text-4xl text-white">Eterna AI</h1>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-lavender/65">
          Quietly working in the background — reading compatibility, softening the awkward parts, and
          surfacing the people actually worth your evening.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
          >
            <GlassPanel className="h-full p-6">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-eterna-gradient shadow-glow-sm">
                <c.icon size={18} className="text-white" />
              </div>
              <h3 className="font-display text-base text-white">{c.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-lavender/60">{c.body}</p>
            </GlassPanel>
          </motion.div>
        ))}
      </div>

      <GlassPanel strong glow className="mt-10 flex flex-col items-center gap-6 p-8 sm:flex-row">
        <img src={top.photo} className="h-24 w-24 rounded-3xl object-cover" alt={top.name} />
        <div className="flex-1 text-center sm:text-left">
          <Badge tone="pink">Top pick today</Badge>
          <h3 className="mt-2 font-display text-xl text-white">Why {top.name} matches you</h3>
          <p className="mt-1 text-sm text-lavender/60">{top.compatibility}% overall compatibility, led by shared relationship goals and communication style.</p>
        </div>
        <button
          onClick={() => onExplainMatch(top)}
          className="flex items-center gap-2 whitespace-nowrap rounded-full bg-eterna-gradient px-6 py-3 text-sm font-semibold text-white shadow-glow-sm"
        >
          See analysis <ArrowRight size={15} />
        </button>
      </GlassPanel>
    </ScreenShell>
  );
}
