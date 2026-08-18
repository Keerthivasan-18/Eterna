import { useState } from "react";
import { Search, SlidersHorizontal, Sparkles } from "lucide-react";
import ScreenShell from "../components/ScreenShell";
import { GlassPanel, Badge, Eyebrow } from "../components/UI";
import EmptyState from "../components/EmptyState";
import { matches, newMatches } from "../lib/data";

export default function Matches({ onOpenProfile }) {
  const [query, setQuery] = useState("");
  const filtered = matches.filter((m) => m.name.toLowerCase().includes(query.toLowerCase()));

  if (matches.length === 0) {
    return (
      <ScreenShell>
        <EmptyState icon={Sparkles} title="No matches yet" body="When you and someone else both say yes, they'll appear here." />
      </ScreenShell>
    );
  }

  return (
    <ScreenShell>
      <div className="flex items-center justify-between">
        <div>
          <Eyebrow>Matches</Eyebrow>
          <h1 className="mt-2 font-display text-3xl text-white">Your connections</h1>
        </div>
      </div>

      <div className="glass mt-6 flex items-center gap-3 rounded-full px-5 py-3">
        <Search size={16} className="text-lavender/50" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search matches"
          className="w-full bg-transparent text-sm text-white placeholder:text-lavender/40 focus:outline-none"
        />
        <SlidersHorizontal size={16} className="text-lavender/50" />
      </div>

      <div className="mt-8">
        <p className="mb-4 text-sm font-medium text-lavender/60">New Matches</p>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {newMatches.map((m) => (
            <button key={m.id} onClick={() => onOpenProfile(m)} className="flex shrink-0 flex-col items-center gap-2">
              <div className="relative">
                <div className="h-20 w-20 rounded-full bg-eterna-gradient p-[2.5px]">
                  <img src={m.photo} className="h-full w-full rounded-full border-2 border-ink object-cover" />
                </div>
                {m.online && <span className="absolute bottom-1 right-1 h-3.5 w-3.5 rounded-full border-2 border-ink bg-emerald-400" />}
              </div>
              <span className="text-xs text-pearl/80">{m.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <p className="mb-4 text-sm font-medium text-lavender/60">All Matches</p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((m) => (
            <button key={m.id} onClick={() => onOpenProfile(m)} className="text-left">
              <GlassPanel className="relative aspect-[3/4] overflow-hidden !rounded-4xl">
                <img src={m.photo} className="h-full w-full object-cover" alt={m.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
                {m.online && (
                  <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-emerald-400/20 px-2 py-1 text-[10px] text-emerald-300 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Online
                  </span>
                )}
                <div className="absolute inset-x-0 bottom-0 p-3.5">
                  <p className="font-display text-base text-white">{m.name}</p>
                  <p className="text-[11px] text-lavender/60">{m.lastActive}</p>
                </div>
                <div className="absolute left-3 top-3">
                  <Badge tone="pink">{m.compatibility}%</Badge>
                </div>
              </GlassPanel>
            </button>
          ))}
        </div>
      </div>
    </ScreenShell>
  );
}
