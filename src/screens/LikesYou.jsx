import { Lock, Sparkles } from "lucide-react";
import ScreenShell from "../components/ScreenShell";
import { GlassPanel, Eyebrow, PrimaryButton, Badge } from "../components/UI";
import EmptyState from "../components/EmptyState";
import { likesYou } from "../lib/data";
import { Heart } from "lucide-react";

export default function LikesYou({ onUpgrade }) {
  if (likesYou.length === 0) {
    return (
      <ScreenShell>
        <EmptyState icon={Heart} title="No likes yet" body="Keep your profile fresh and Eterna will surface you to more compatible people." />
      </ScreenShell>
    );
  }

  return (
    <ScreenShell>
      <div className="flex items-center justify-between">
        <div>
          <Eyebrow>Likes You</Eyebrow>
          <h1 className="mt-2 font-display text-3xl text-white">{likesYou.length} people are curious about you</h1>
        </div>
      </div>

      <GlassPanel glow className="mt-6 flex flex-col items-center gap-4 p-7 text-center sm:flex-row sm:text-left">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-eterna-gradient shadow-glow-sm">
          <Sparkles size={20} className="text-white" />
        </div>
        <div className="flex-1">
          <p className="font-display text-lg text-white">See exactly who likes you</p>
          <p className="mt-1 text-sm text-lavender/60">Unlock every profile instantly with Eterna Plus.</p>
        </div>
        <PrimaryButton onClick={onUpgrade}>Upgrade</PrimaryButton>
      </GlassPanel>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {likesYou.map((p) => (
          <button key={p.id} onClick={onUpgrade} className="text-left">
            <GlassPanel className="relative aspect-[3/4] overflow-hidden !rounded-4xl">
              <img src={p.photo} className="h-full w-full scale-110 object-cover blur-xl" alt="" />
              <div className="absolute inset-0 bg-ink/35" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full glass-strong">
                  <Lock size={15} className="text-white" />
                </div>
                <Badge tone="pink">92% match</Badge>
              </div>
            </GlassPanel>
          </button>
        ))}
      </div>
    </ScreenShell>
  );
}
