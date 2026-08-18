import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Wand2 } from "lucide-react";
import EternaMark from "../components/EternaMark";
import { PrimaryButton, GhostButton, GlassPanel, AmbientOrbs, Eyebrow } from "../components/UI";

const pillars = [
  {
    icon: Wand2,
    title: "AI that understands nuance",
    body: "Eterna reads compatibility beyond photos — personality, values, and rhythm of life.",
  },
  {
    icon: ShieldCheck,
    title: "Verified, intentional people",
    body: "Every profile is photo-verified. No bots, no burner accounts, no guessing games.",
  },
  {
    icon: Sparkles,
    title: "Designed for depth",
    body: "Fewer, better matches — chosen for the relationship you're actually looking for.",
  },
];

export default function Landing({ onGetStarted, onSignIn }) {
  return (
    <div className="aurora-bg relative min-h-screen w-full overflow-hidden">
      <AmbientOrbs />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1600&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          maskImage: "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, transparent 75%)",
          WebkitMaskImage: "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-16 pt-10 lg:px-12">
        <div className="flex items-center gap-3">
          <EternaMark size={34} />
          <span className="font-display text-xl tracking-wide text-white">Eterna</span>
        </div>

        <div className="mt-16 flex flex-1 flex-col items-start lg:mt-24 lg:max-w-2xl">
          <Eyebrow>A relationship platform, reimagined</Eyebrow>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="mt-5 font-display text-5xl leading-[1.05] text-pearl sm:text-6xl lg:text-7xl"
          >
            Find someone{" "}
            <span className="text-gradient italic">worth knowing.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-lavender/75"
          >
            Eterna pairs quiet, careful AI with real human intuition — so every
            introduction feels less like a swipe, and more like fate with better odds.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <PrimaryButton onClick={onGetStarted}>Get Started</PrimaryButton>
            <GhostButton onClick={onSignIn}>Sign In</GhostButton>
          </motion.div>
          <button onClick={onGetStarted} className="mt-4 text-sm text-lavender/60 underline underline-offset-4 hover:text-lavender">
            Create an account instead
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mt-16 grid gap-4 sm:grid-cols-3"
        >
          {pillars.map((p, i) => (
            <GlassPanel key={i} className="animate-floaty p-6" style={{ animationDelay: `${i * 0.3}s` }}>
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-eterna-gradient shadow-glow-sm">
                <p.icon size={19} className="text-white" strokeWidth={2} />
              </div>
              <h3 className="font-display text-lg text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-lavender/65">{p.body}</p>
            </GlassPanel>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
