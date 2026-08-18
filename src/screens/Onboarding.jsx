import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Camera, Check, MapPin } from "lucide-react";
import EternaMark from "../components/EternaMark";
import { PrimaryButton, GlassPanel, AmbientOrbs, Eyebrow } from "../components/UI";

const steps = ["name", "dob", "gender", "interestedIn", "location", "intention", "interests", "lifestyle", "personality", "photo"];

const genders = ["Woman", "Man", "Non-binary", "Prefer to self-describe"];
const intentions = ["Long-term relationship", "Long-term, open to short", "Short-term, open to long", "Figuring it out"];
const interestOptions = ["Jazz", "Hiking", "Cooking", "Sci-fi", "Astronomy", "Design", "Running", "Pottery", "Travel", "Yoga", "Film", "Wine", "Reading", "Cycling", "Art", "Coffee"];
const lifestyleQs = [
  { key: "drinking", label: "Drinking", opts: ["Never", "Rarely", "Socially", "Often"] },
  { key: "smoking", label: "Smoking", opts: ["Never", "Socially", "Regularly"] },
  { key: "workout", label: "Workout", opts: ["Never", "Sometimes", "Often", "Everyday"] },
];
const personalityQs = [
  "I recharge by being alone rather than around people.",
  "I plan carefully rather than go with the flow.",
  "I lead with logic more than emotion.",
];

export default function Onboarding({ onComplete }) {
  const [i, setI] = useState(0);
  const [data, setData] = useState({ interests: [], lifestyle: {}, personality: {} });
  const key = steps[i];
  const progress = ((i + 1) / steps.length) * 100;

  const next = () => (i < steps.length - 1 ? setI(i + 1) : onComplete());
  const back = () => (i > 0 ? setI(i - 1) : null);
  const set = (k, v) => setData((d) => ({ ...d, [k]: v }));
  const toggleInterest = (tag) =>
    setData((d) => ({
      ...d,
      interests: d.interests.includes(tag) ? d.interests.filter((t) => t !== tag) : [...d.interests, tag],
    }));

  return (
    <div className="aurora-bg relative min-h-screen w-full overflow-hidden px-5 py-8">
      <AmbientOrbs />
      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-xl flex-col">
        <div className="flex items-center justify-between">
          <button
            onClick={back}
            className={`glass flex h-10 w-10 items-center justify-center rounded-full text-pearl/80 ${i === 0 ? "opacity-0" : ""}`}
          >
            <ArrowLeft size={17} />
          </button>
          <div className="flex items-center gap-2">
            <EternaMark size={24} animated={false} />
          </div>
          <span className="text-xs text-lavender/50">{i + 1} / {steps.length}</span>
        </div>

        <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-eterna-gradient"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>

        <div className="mt-10 flex flex-1 flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={key}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="flex flex-1 flex-col"
            >
              {key === "name" && (
                <StepShell eyebrow="Step one" title="What should we call you?">
                  <input
                    autoFocus
                    placeholder="Your first name"
                    className="glass w-full rounded-2xl px-5 py-4 text-lg text-white placeholder:text-lavender/40 focus:outline-none"
                    onChange={(e) => set("name", e.target.value)}
                  />
                </StepShell>
              )}

              {key === "dob" && (
                <StepShell eyebrow="Step two" title="When were you born?">
                  <input
                    type="date"
                    className="glass w-full rounded-2xl px-5 py-4 text-lg text-white focus:outline-none"
                    onChange={(e) => set("dob", e.target.value)}
                  />
                  <p className="mt-3 text-xs text-lavender/45">Your age is shown on your profile — your birthdate stays private.</p>
                </StepShell>
              )}

              {key === "gender" && (
                <StepShell eyebrow="Step three" title="How do you identify?">
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {genders.map((g) => (
                      <OptionTile key={g} label={g} selected={data.gender === g} onClick={() => set("gender", g)} />
                    ))}
                  </div>
                </StepShell>
              )}

              {key === "interestedIn" && (
                <StepShell eyebrow="Step four" title="Who are you interested in meeting?">
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {genders.map((g) => (
                      <OptionTile key={g} label={g} selected={data.interestedIn === g} onClick={() => set("interestedIn", g)} />
                    ))}
                  </div>
                </StepShell>
              )}

              {key === "location" && (
                <StepShell eyebrow="Step five" title="Where are you based?">
                  <div className="glass flex items-center gap-3 rounded-2xl px-5 py-4">
                    <MapPin size={18} className="text-neon-pink" />
                    <input
                      placeholder="City, country"
                      className="w-full bg-transparent text-lg text-white placeholder:text-lavender/40 focus:outline-none"
                      onChange={(e) => set("location", e.target.value)}
                    />
                  </div>
                </StepShell>
              )}

              {key === "intention" && (
                <StepShell eyebrow="Step six" title="What are you looking for?">
                  <div className="flex flex-col gap-3">
                    {intentions.map((g) => (
                      <OptionTile key={g} label={g} selected={data.intention === g} onClick={() => set("intention", g)} />
                    ))}
                  </div>
                </StepShell>
              )}

              {key === "interests" && (
                <StepShell eyebrow="Step seven" title="What lights you up?" sub="Pick at least five.">
                  <div className="flex flex-wrap gap-2.5">
                    {interestOptions.map((tag) => {
                      const active = data.interests.includes(tag);
                      return (
                        <button
                          key={tag}
                          onClick={() => toggleInterest(tag)}
                          className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                            active
                              ? "border-transparent bg-eterna-gradient text-white shadow-glow-sm"
                              : "glass border-white/10 text-lavender/75 hover:text-white"
                          }`}
                        >
                          {tag}
                        </button>
                      );
                    })}
                  </div>
                </StepShell>
              )}

              {key === "lifestyle" && (
                <StepShell eyebrow="Step eight" title="A little about your lifestyle">
                  <div className="space-y-6">
                    {lifestyleQs.map((q) => (
                      <div key={q.key}>
                        <p className="mb-2.5 text-sm text-lavender/70">{q.label}</p>
                        <div className="flex flex-wrap gap-2">
                          {q.opts.map((opt) => (
                            <button
                              key={opt}
                              onClick={() => set("lifestyle", { ...data.lifestyle, [q.key]: opt })}
                              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                                data.lifestyle[q.key] === opt
                                  ? "border-transparent bg-eterna-gradient text-white shadow-glow-sm"
                                  : "glass border-white/10 text-lavender/75"
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </StepShell>
              )}

              {key === "personality" && (
                <StepShell eyebrow="Step nine" title="How you see yourself" sub="This shapes your compatibility score.">
                  <div className="space-y-6">
                    {personalityQs.map((q, idx) => (
                      <div key={idx}>
                        <p className="mb-2.5 text-sm text-lavender/70">{q}</p>
                        <div className="flex gap-2">
                          {["Disagree", "Neutral", "Agree"].map((opt) => (
                            <button
                              key={opt}
                              onClick={() => set("personality", { ...data.personality, [idx]: opt })}
                              className={`flex-1 rounded-full border px-3 py-2.5 text-xs transition-colors sm:text-sm ${
                                data.personality[idx] === opt
                                  ? "border-transparent bg-eterna-gradient text-white shadow-glow-sm"
                                  : "glass border-white/10 text-lavender/75"
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </StepShell>
              )}

              {key === "photo" && (
                <StepShell eyebrow="Final step" title="Add your best photo" sub="Real, recent, unmistakably you.">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="glass-strong glow-border relative col-span-2 row-span-2 flex aspect-[3/4] items-center justify-center rounded-4xl">
                      <div className="flex flex-col items-center gap-2 text-lavender/50">
                        <Camera size={26} />
                        <span className="text-xs">Main photo</span>
                      </div>
                    </div>
                    {[1, 2, 3, 4].map((n) => (
                      <div key={n} className="glass flex aspect-square items-center justify-center rounded-3xl border-dashed">
                        <Camera size={18} className="text-lavender/35" />
                      </div>
                    ))}
                  </div>
                </StepShell>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <PrimaryButton onClick={next} className="mt-8 w-full justify-center" icon={i === steps.length - 1 ? Check : ArrowRight}>
          {i === steps.length - 1 ? "Enter Eterna" : "Continue"}
        </PrimaryButton>
      </div>
    </div>
  );
}

function StepShell({ eyebrow, title, sub, children }) {
  return (
    <div>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 font-display text-3xl leading-tight text-white">{title}</h2>
      {sub && <p className="mt-2 text-sm text-lavender/60">{sub}</p>}
      <div className="mt-7">{children}</div>
    </div>
  );
}

function OptionTile({ label, selected, onClick }) {
  return (
    <button onClick={onClick} className="text-left">
      <GlassPanel
        glow={selected}
        className={`flex items-center justify-between px-5 py-4 text-sm transition-all ${
          selected ? "text-white" : "text-lavender/75"
        }`}
      >
        {label}
        {selected && <Check size={16} className="text-neon-pink" />}
      </GlassPanel>
    </button>
  );
}
