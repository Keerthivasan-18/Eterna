import { useState } from "react";
import { Check, Infinity as InfinityIcon, Eye, SlidersHorizontal, RotateCcw, Star, CheckCheck, EyeOff, Zap, BrainCircuit, Ban } from "lucide-react";
import ScreenShell from "../components/ScreenShell";
import { GlassPanel, Eyebrow, PrimaryButton, Badge } from "../components/UI";
import EternaMark from "../components/EternaMark";

const features = [
  { icon: InfinityIcon, label: "Unlimited Likes" },
  { icon: Eye, label: "See Who Likes You" },
  { icon: SlidersHorizontal, label: "Advanced Filters" },
  { icon: RotateCcw, label: "Unlimited Rewinds" },
  { icon: Star, label: "5 Super Likes / week" },
  { icon: CheckCheck, label: "Read Receipts" },
  { icon: EyeOff, label: "Incognito Mode" },
  { icon: Zap, label: "Priority Discovery" },
  { icon: BrainCircuit, label: "AI Match Insights" },
  { icon: Ban, label: "No Ads" },
];

const plans = [
  { key: "monthly", label: "Monthly", price: "₹1,499", per: "/month", save: null },
  { key: "sixmonth", label: "6 Months", price: "₹899", per: "/month", save: "Save 40%" },
  { key: "yearly", label: "Yearly", price: "₹599", per: "/month", save: "Save 60%" },
];

export default function Premium() {
  const [selected, setSelected] = useState("sixmonth");
  return (
    <ScreenShell>
      <div className="flex flex-col items-center text-center">
        <Badge tone="gold">Eterna Plus</Badge>
        <h1 className="mt-4 font-display text-4xl text-white">
          Unlock the full <span className="text-gradient italic">experience.</span>
        </h1>
        <p className="mt-3 max-w-md text-sm text-lavender/65">
          For people who already know what they want, and don't want to wait to find it.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-5">
        <GlassPanel strong glow className="p-8 lg:col-span-2">
          <div className="mb-6 flex items-center gap-3">
            <EternaMark size={32} animated={false} />
            <span className="font-display text-lg text-white">Everything included</span>
          </div>
          <div className="space-y-4">
            {features.map((f) => (
              <div key={f.label} className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-eterna-gradient">
                  <f.icon size={13} className="text-white" />
                </div>
                <span className="text-sm text-pearl/85">{f.label}</span>
              </div>
            ))}
          </div>
        </GlassPanel>

        <div className="space-y-4 lg:col-span-3">
          {plans.map((p) => (
            <button key={p.key} onClick={() => setSelected(p.key)} className="block w-full text-left">
              <GlassPanel
                glow={selected === p.key}
                className={`flex items-center justify-between p-6 transition-all ${selected === p.key ? "!border-neon-pink/50" : ""}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`flex h-6 w-6 items-center justify-center rounded-full border-2 ${selected === p.key ? "border-neon-pink bg-neon-pink" : "border-white/25"}`}>
                    {selected === p.key && <Check size={13} className="text-white" />}
                  </div>
                  <div>
                    <p className="font-display text-lg text-white">{p.label}</p>
                    {p.save && <Badge tone="pink" className="mt-1">{p.save}</Badge>}
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-display text-xl text-white">{p.price}</p>
                  <p className="text-[11px] text-lavender/50">{p.per}</p>
                </div>
              </GlassPanel>
            </button>
          ))}

          <PrimaryButton className="w-full justify-center py-4 text-base">
            Continue with {plans.find((p) => p.key === selected).label}
          </PrimaryButton>
          <p className="text-center text-[11px] text-lavender/40">Cancel anytime. Renews automatically until cancelled.</p>
        </div>
      </div>
    </ScreenShell>
  );
}
