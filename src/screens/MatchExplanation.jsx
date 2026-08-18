import { motion } from "framer-motion";
import { ArrowLeft, Sparkles } from "lucide-react";
import ScreenShell from "../components/ScreenShell";
import { GlassPanel, CompatibilityRing, Eyebrow, PrimaryButton } from "../components/UI";
import EternaMark from "../components/EternaMark";

export default function MatchExplanation({ profile, onBack, onViewProfile }) {
  if (!profile) return null;
  const b = profile.breakdown;
  const rows = [
    { label: "Personality compatibility", value: b.personality },
    { label: "Interests", value: b.interests },
    { label: "Lifestyle", value: b.lifestyle },
    { label: "Communication", value: b.communication },
    { label: "Relationship goals", value: b.goals },
  ];

  return (
    <ScreenShell>
      <button onClick={onBack} className="glass mb-6 flex h-10 w-10 items-center justify-center rounded-full text-pearl/80">
        <ArrowLeft size={17} />
      </button>

      <div className="mx-auto max-w-3xl text-center">
        <div className="relative mx-auto flex h-24 w-24 items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-eterna-gradient opacity-40 blur-2xl animate-pulseglow" />
          <EternaMark size={64} />
        </div>
        <Eyebrow className="mt-6 justify-center">Eterna AI analysis</Eyebrow>
        <h1 className="mt-3 font-display text-4xl text-white">
          Why you two might <span className="text-gradient italic">click.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-lavender/65">
          Eterna compared {profile.name.split(" ")[0]}'s personality signals, lifestyle rhythm, and stated
          intentions against your profile. Here's what stood out.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-4xl">
        <GlassPanel strong glow className="grid gap-8 p-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {rows.map((r, i) => (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col items-center text-center"
            >
              <CompatibilityRing value={r.value} size={104} stroke={8} />
              <p className="mt-3 text-xs leading-tight text-lavender/70">{r.label}</p>
            </motion.div>
          ))}
        </GlassPanel>

        <GlassPanel className="mt-6 p-7">
          <div className="mb-3 flex items-center gap-2 text-neon-rose">
            <Sparkles size={16} />
            <span className="text-xs font-semibold uppercase tracking-wider">AI-generated insight</span>
          </div>
          <p className="text-sm leading-relaxed text-pearl/85">
            You both value depth over small talk, and your evening routines mirror each other almost exactly —
            {" " + profile.name.split(" ")[0]} unwinds the same way you do. Where you differ is pace: you move
            quickly toward plans, they prefer to let things settle. That contrast tends to balance well rather
            than clash, especially given how closely your relationship goals already align.
          </p>
        </GlassPanel>

        <div className="mt-8 flex justify-center">
          <PrimaryButton onClick={() => onViewProfile(profile)}>View Full Profile</PrimaryButton>
        </div>
      </div>
    </ScreenShell>
  );
}
