import { useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { X, Heart, Star, RotateCcw, SlidersHorizontal, ShieldCheck, MapPin } from "lucide-react";
import ScreenShell from "../components/ScreenShell";
import { GlassPanel, IconButton, Badge, Eyebrow } from "../components/UI";
import EmptyState from "../components/EmptyState";
import { profiles } from "../lib/data";

export default function Discover({ onOpenProfile, onOpenFilters, onMatch }) {
  const [deck, setDeck] = useState(profiles);
  const [history, setHistory] = useState([]);
  const [exitDir, setExitDir] = useState(0);

  const top = deck[0];

  const swipe = (dir, profile) => {
    setExitDir(dir);
    setHistory((h) => [profile, ...h]);
    setTimeout(() => {
      setDeck((d) => d.slice(1));
      setExitDir(0);
      if (dir === 1 && Math.random() > 0.4) onMatch?.(profile);
    }, 250);
  };

  const rewind = () => {
    if (!history.length) return;
    setDeck((d) => [history[0], ...d]);
    setHistory((h) => h.slice(1));
  };

  return (
    <ScreenShell>
      <div className="flex items-start justify-between">
        <div>
          <Eyebrow>Discover</Eyebrow>
          <h1 className="mt-2 font-display text-3xl text-white">Curated for you today</h1>
        </div>
        <IconButton icon={SlidersHorizontal} onClick={onOpenFilters} />
      </div>

      <div className="mt-10 flex flex-col items-center">
        <div className="relative h-[560px] w-full max-w-sm">
          <AnimatePresence>
            {!top && (
              <EmptyState
                icon={Heart}
                title="No more profiles nearby"
                body="You've explored everyone Eterna has matched for your area. Widen your radius or check back soon."
                actionLabel="Adjust Discovery Filters"
                onAction={onOpenFilters}
              />
            )}
            {deck
              .slice(0, 3)
              .reverse()
              .map((p, idx, arr) => {
                const isTop = idx === arr.length - 1;
                return (
                  <SwipeCard
                    key={p.id}
                    profile={p}
                    stackIndex={arr.length - 1 - idx}
                    isTop={isTop}
                    exitDir={isTop ? exitDir : 0}
                    onSwipe={(dir) => swipe(dir, p)}
                    onOpen={() => onOpenProfile(p)}
                  />
                );
              })}
          </AnimatePresence>
        </div>

        {top && (
          <div className="mt-8 flex items-center gap-4">
            <IconButton icon={RotateCcw} onClick={rewind} className="h-12 w-12 text-amber-200" />
            <IconButton icon={X} size={24} onClick={() => swipe(-1, top)} className="h-16 w-16 text-lavender/80" />
            <IconButton icon={Star} onClick={() => swipe(1, top)} className="h-12 w-12 text-sky-300" />
            <IconButton icon={Heart} size={24} onClick={() => swipe(1, top)} className="h-16 w-16 text-neon-pink" />
            <IconButton icon={ShieldCheck} onClick={() => onOpenProfile(top)} className="h-12 w-12" />
          </div>
        )}
      </div>
    </ScreenShell>
  );
}

function SwipeCard({ profile, isTop, stackIndex, onSwipe, onOpen, exitDir }) {
  const controls = useAnimation();

  return (
    <motion.div
      className="absolute inset-0"
      style={{ zIndex: 10 - stackIndex }}
      initial={{ scale: 1 - stackIndex * 0.04, y: stackIndex * 14, opacity: stackIndex > 2 ? 0 : 1 }}
      animate={
        exitDir
          ? { x: exitDir * 420, rotate: exitDir * 18, opacity: 0, transition: { duration: 0.35 } }
          : { scale: 1 - stackIndex * 0.04, y: stackIndex * 14, opacity: 1 }
      }
      drag={isTop ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.7}
      onDragEnd={(e, info) => {
        if (info.offset.x > 120) onSwipe(1);
        else if (info.offset.x < -120) onSwipe(-1);
      }}
      whileDrag={{ rotate: 6 }}
    >
      <GlassPanel strong glow className="relative h-full w-full overflow-hidden !rounded-5xl">
        <img src={profile.photo} alt={profile.name} className="absolute inset-0 h-full w-full object-cover" draggable={false} />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(199,125,255,0.12) 0%, transparent 30%)" }}
        />

        <div className="absolute right-4 top-4 flex flex-col items-end gap-2">
          <Badge tone="pink">{profile.compatibility}% match</Badge>
        </div>

        <button onClick={onOpen} className="absolute inset-x-0 bottom-0 p-6 text-left">
          <div className="flex items-center gap-2">
            <h2 className="font-display text-2xl text-white">{profile.name}, {profile.age}</h2>
            {profile.verified && <ShieldCheck size={18} className="text-neon-rose" />}
          </div>
          <p className="mt-1 flex items-center gap-1 text-sm text-lavender/70">
            <MapPin size={13} /> {profile.location}
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {profile.interests.slice(0, 3).map((tag) => (
              <span key={tag} className="glass rounded-full px-3 py-1 text-[11px] text-pearl/85">
                {tag}
              </span>
            ))}
          </div>
        </button>
      </GlassPanel>
    </motion.div>
  );
}
