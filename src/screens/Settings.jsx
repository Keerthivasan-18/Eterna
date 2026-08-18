import { useState } from "react";
import {
  ArrowLeft, User, Lock, ShieldCheck, Bell, SlidersHorizontal, Palette, KeyRound,
  UserX, HelpCircle, CreditCard, LogOut, ChevronRight, Flag, PhoneCall, Fingerprint, AlertTriangle,
} from "lucide-react";
import ScreenShell from "../components/ScreenShell";
import { GlassPanel, Eyebrow, GhostButton } from "../components/UI";

const sections = [
  { key: "account", label: "Account", icon: User, desc: "Name, email, phone" },
  { key: "privacy", label: "Privacy", icon: Lock, desc: "Who can see your profile" },
  { key: "safety", label: "Safety Center", icon: ShieldCheck, desc: "Verification & reporting" },
  { key: "notifications", label: "Notifications", icon: Bell, desc: "Push, email, SMS" },
  { key: "discovery", label: "Discovery Preferences", icon: SlidersHorizontal, desc: "Who you see" },
  { key: "appearance", label: "Appearance", icon: Palette, desc: "Theme & display" },
  { key: "security", label: "Security", icon: KeyRound, desc: "Password & 2FA" },
  { key: "blocked", label: "Blocked Users", icon: UserX, desc: "Manage blocked profiles" },
  { key: "help", label: "Help & Support", icon: HelpCircle, desc: "FAQs & contact us" },
  { key: "subscription", label: "Subscription", icon: CreditCard, desc: "Eterna Plus billing" },
];

export default function Settings({ onBack, onLogout }) {
  const [active, setActive] = useState(null);

  if (active === "safety") return <SafetyCenter onBack={() => setActive(null)} />;

  return (
    <ScreenShell>
      <div className="flex items-center gap-4">
        <button onClick={onBack} className="glass flex h-10 w-10 items-center justify-center rounded-full text-pearl/80">
          <ArrowLeft size={17} />
        </button>
        <div>
          <Eyebrow>Settings</Eyebrow>
          <h1 className="mt-1 font-display text-2xl text-white">Preferences</h1>
        </div>
      </div>

      <div className="mt-8 space-y-3">
        {sections.map((s) => (
          <button key={s.key} onClick={() => setActive(s.key)} className="block w-full text-left">
            <GlassPanel className="flex items-center gap-4 p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl glass">
                <s.icon size={17} className="text-lavender/75" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-white">{s.label}</p>
                <p className="text-xs text-lavender/50">{s.desc}</p>
              </div>
              <ChevronRight size={16} className="text-lavender/35" />
            </GlassPanel>
          </button>
        ))}
      </div>

      <GhostButton onClick={onLogout} icon={LogOut} className="mt-8 w-full justify-center !text-red-300">
        Log Out
      </GhostButton>
    </ScreenShell>
  );
}

function SafetyCenter({ onBack }) {
  const items = [
    { icon: Fingerprint, title: "Photo Verification", body: "Confirm your photos are really you with a quick selfie check." },
    { icon: Flag, title: "Report a profile", body: "Flag behavior that breaks Eterna's community guidelines." },
    { icon: UserX, title: "Block a user", body: "They won't be able to see your profile or contact you again." },
    { icon: Lock, title: "Privacy controls", body: "Decide exactly who can view your profile and activity." },
  ];
  return (
    <ScreenShell>
      <div className="flex items-center gap-4">
        <button onClick={onBack} className="glass flex h-10 w-10 items-center justify-center rounded-full text-pearl/80">
          <ArrowLeft size={17} />
        </button>
        <div>
          <Eyebrow>Trust & Safety</Eyebrow>
          <h1 className="mt-1 font-display text-2xl text-white">Safety Center</h1>
        </div>
      </div>

      <GlassPanel glow className="mt-8 flex items-start gap-4 p-6">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-eterna-gradient">
          <ShieldCheck size={18} className="text-white" />
        </div>
        <div>
          <p className="font-display text-base text-white">You're protected on Eterna</p>
          <p className="mt-1 text-sm text-lavender/60">Every profile is reviewed, and your data is never sold. Verified members get priority visibility.</p>
        </div>
      </GlassPanel>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {items.map((it) => (
          <GlassPanel key={it.title} className="p-6">
            <it.icon size={18} className="text-neon-rose" />
            <p className="mt-3 font-display text-base text-white">{it.title}</p>
            <p className="mt-1 text-xs leading-relaxed text-lavender/55">{it.body}</p>
          </GlassPanel>
        ))}
      </div>

      <GlassPanel className="mt-6 p-6">
        <Eyebrow>Safety tips</Eyebrow>
        <ul className="mt-3 space-y-2 text-sm text-lavender/70">
          <li>· Meet in public places for the first few dates.</li>
          <li>· Never send money or financial information to a match.</li>
          <li>· Tell a friend your plans and location before meeting up.</li>
          <li>· Trust your instincts — you can end a chat or date anytime.</li>
        </ul>
      </GlassPanel>

      <GlassPanel className="mt-6 flex items-center gap-4 p-6">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-red-500/15 text-red-300">
          <PhoneCall size={17} />
        </div>
        <div>
          <p className="text-sm font-medium text-white">Emergency support</p>
          <p className="text-xs text-lavender/55">If you're in immediate danger, contact local emergency services first.</p>
        </div>
      </GlassPanel>
    </ScreenShell>
  );
}
