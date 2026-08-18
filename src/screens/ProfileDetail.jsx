import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ShieldCheck, MapPin, Heart, Star, MessageCircle, Sparkles, GraduationCap, Briefcase, Languages } from "lucide-react";
import ScreenShell from "../components/ScreenShell";
import { GlassPanel, Badge, PrimaryButton, GhostButton, IconButton, CompatibilityRing, Eyebrow } from "../components/UI";

export default function ProfileDetail({ profile, onBack, onSeeWhyClick, onMessage }) {
  const [activePhoto, setActivePhoto] = useState(0);
  if (!profile) return null;

  return (
    <ScreenShell>
      <button onClick={onBack} className="glass mb-6 flex h-10 w-10 items-center justify-center rounded-full text-pearl/80">
        <ArrowLeft size={17} />
      </button>

      <div className="grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <GlassPanel strong glow className="relative aspect-[3/4] overflow-hidden !rounded-5xl">
            <img src={profile.gallery[activePhoto]} alt={profile.name} className="h-full w-full object-cover" />
            <div className="absolute inset-x-0 top-0 flex gap-1.5 p-4">
              {profile.gallery.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActivePhoto(i)}
                  className={`h-1 flex-1 rounded-full transition-colors ${i === activePhoto ? "bg-white" : "bg-white/25"}`}
                />
              ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="font-display text-2xl text-white">{profile.name}, {profile.age}</h1>
                  {profile.verified && <ShieldCheck size={18} className="text-neon-rose" />}
                </div>
                <p className="mt-1 flex items-center gap-1 text-sm text-lavender/75">
                  <MapPin size={13} /> {profile.location}
                </p>
              </div>
              <Badge tone="pink">{profile.compatibility}%</Badge>
            </div>
          </GlassPanel>

          <div className="mt-5 flex items-center justify-center gap-4">
            <IconButton icon={Heart} size={22} className="h-14 w-14 text-neon-pink" />
            <IconButton icon={Star} className="h-12 w-12 text-sky-300" />
            <IconButton icon={MessageCircle} className="h-12 w-12" onClick={() => onMessage(profile)} />
          </div>
        </div>

        <div className="space-y-5 lg:col-span-3">
          <GlassPanel className="p-7">
            <Eyebrow>About</Eyebrow>
            <p className="mt-3 text-sm leading-relaxed text-pearl/85">{profile.about}</p>
          </GlassPanel>

          <GlassPanel className="p-7">
            <Eyebrow>Compatibility breakdown</Eyebrow>
            <div className="mt-5 grid grid-cols-3 gap-4 sm:grid-cols-5">
              {Object.entries(profile.breakdown).map(([k, v]) => (
                <div key={k} className="flex flex-col items-center">
                  <CompatibilityRing value={v} size={72} stroke={6} />
                  <span className="mt-2 text-center text-[10px] capitalize text-lavender/60">{k}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => onSeeWhyClick(profile)}
              className="mt-5 flex items-center gap-2 text-sm text-neon-rose underline underline-offset-4"
            >
              <Sparkles size={14} /> See why you two might click
            </button>
          </GlassPanel>

          <div className="grid gap-5 sm:grid-cols-2">
            <GlassPanel className="p-7">
              <Eyebrow>Interests</Eyebrow>
              <div className="mt-4 flex flex-wrap gap-2">
                {profile.interests.map((tag) => (
                  <span key={tag} className="glass rounded-full px-3.5 py-1.5 text-xs text-pearl/85">
                    {tag}
                  </span>
                ))}
              </div>
            </GlassPanel>

            <GlassPanel className="p-7">
              <Eyebrow>Lifestyle</Eyebrow>
              <div className="mt-4 space-y-2.5 text-sm">
                {Object.entries(profile.lifestyle).map(([k, v]) => (
                  <div key={k} className="flex justify-between text-lavender/70">
                    <span className="capitalize">{k}</span>
                    <span className="text-white">{v}</span>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </div>

          <GlassPanel className="p-7">
            <Eyebrow>Essentials</Eyebrow>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <InfoRow icon={Briefcase} label="Profession" value={profile.profession} />
              <InfoRow icon={GraduationCap} label="Education" value={profile.education} />
              <InfoRow icon={Languages} label="Languages" value={profile.languages.join(", ")} />
              <InfoRow icon={Heart} label="Looking for" value={profile.goals} />
            </div>
          </GlassPanel>

          <GlassPanel className="p-7">
            <Eyebrow>Personality traits</Eyebrow>
            <div className="mt-4 flex flex-wrap gap-2">
              {profile.traits.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </GlassPanel>

          <div className="flex gap-3 pb-4">
            <GhostButton className="flex-1 justify-center" onClick={onBack}>Pass</GhostButton>
            <PrimaryButton className="flex-1 justify-center" onClick={() => onMessage(profile)}>Send Message</PrimaryButton>
          </div>
        </div>
      </div>
    </ScreenShell>
  );
}

function InfoRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl glass">
        <Icon size={15} className="text-lavender/70" />
      </div>
      <div>
        <p className="text-[11px] uppercase tracking-wide text-lavender/45">{label}</p>
        <p className="text-sm text-white">{value}</p>
      </div>
    </div>
  );
}
