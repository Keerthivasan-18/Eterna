import { Heart, Sparkles, Star, Eye, Pencil, Settings as SettingsIcon, ShieldCheck } from "lucide-react";
import ScreenShell from "../components/ScreenShell";
import { GlassPanel, Eyebrow, PrimaryButton, GhostButton, Badge } from "../components/UI";
import { currentUser } from "../lib/data";

export default function MyProfile({ onEdit, onSettings }) {
  const stats = [
    { label: "Likes", value: currentUser.stats.likes, icon: Heart },
    { label: "Matches", value: currentUser.stats.matches, icon: Sparkles },
    { label: "Super Likes", value: currentUser.stats.superLikes, icon: Star },
    { label: "Profile Views", value: currentUser.stats.views, icon: Eye },
  ];

  return (
    <ScreenShell>
      <div className="flex items-center justify-between">
        <div>
          <Eyebrow>My Profile</Eyebrow>
          <h1 className="mt-2 font-display text-3xl text-white">Hi, {currentUser.name}</h1>
        </div>
        <button onClick={onSettings} className="glass flex h-11 w-11 items-center justify-center rounded-full text-pearl/80">
          <SettingsIcon size={17} />
        </button>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-5">
        <GlassPanel strong glow className="relative overflow-hidden !rounded-5xl lg:col-span-2">
          <img src={currentUser.photo} className="aspect-[3/4] w-full object-cover" alt={currentUser.name} />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5">
            <div className="flex items-center gap-2">
              <h2 className="font-display text-2xl text-white">{currentUser.name}, {currentUser.age}</h2>
              <ShieldCheck size={18} className="text-neon-rose" />
            </div>
            <p className="mt-1 text-sm text-lavender/70">{currentUser.bio}</p>
          </div>
        </GlassPanel>

        <div className="space-y-6 lg:col-span-3">
          <GlassPanel className="p-7">
            <div className="flex items-center justify-between">
              <Eyebrow>Profile completion</Eyebrow>
              <span className="font-display text-lg text-white">{currentUser.completion}%</span>
            </div>
            <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full rounded-full bg-eterna-gradient" style={{ width: `${currentUser.completion}%` }} />
            </div>
            <p className="mt-3 text-xs text-lavender/55">Add two more photos and a prompt answer to reach 100%.</p>
          </GlassPanel>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s) => (
              <GlassPanel key={s.label} className="flex flex-col items-center gap-2 p-5 text-center">
                <s.icon size={18} className="text-neon-rose" />
                <span className="font-display text-xl text-white">{s.value}</span>
                <span className="text-[11px] text-lavender/55">{s.label}</span>
              </GlassPanel>
            ))}
          </div>

          <div className="flex gap-3">
            <PrimaryButton icon={Pencil} className="flex-1 justify-center" onClick={onEdit}>
              Edit Profile
            </PrimaryButton>
            <GhostButton className="flex-1 justify-center">Preview as Others See It</GhostButton>
          </div>
        </div>
      </div>
    </ScreenShell>
  );
}
