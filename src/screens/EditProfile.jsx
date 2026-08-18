import { useState } from "react";
import { ArrowLeft, Camera, Plus, GripVertical } from "lucide-react";
import ScreenShell from "../components/ScreenShell";
import { GlassPanel, Eyebrow, PrimaryButton } from "../components/UI";
import { currentUser } from "../lib/data";

const tabs = ["Photos", "Bio & Prompts", "Interests", "Lifestyle", "Work & Education", "Dating Intention"];

export default function EditProfile({ onBack }) {
  const [tab, setTab] = useState(tabs[0]);

  return (
    <ScreenShell>
      <div className="flex items-center gap-4">
        <button onClick={onBack} className="glass flex h-10 w-10 items-center justify-center rounded-full text-pearl/80">
          <ArrowLeft size={17} />
        </button>
        <div>
          <Eyebrow>Edit</Eyebrow>
          <h1 className="mt-1 font-display text-2xl text-white">Your profile</h1>
        </div>
      </div>

      <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`shrink-0 rounded-full border px-4 py-2 text-xs transition-colors ${
              tab === t ? "border-transparent bg-eterna-gradient text-white shadow-glow-sm" : "glass border-white/10 text-lavender/65"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mt-8">
        {tab === "Photos" && (
          <div className="grid grid-cols-3 gap-3 sm:max-w-xl">
            {[currentUser.photo, currentUser.gallery[1], null, null, null, null].map((src, i) => (
              <GlassPanel key={i} className={`relative flex aspect-square items-center justify-center overflow-hidden ${i === 0 ? "!rounded-4xl ring-1 ring-neon-pink/40" : "!rounded-3xl"}`}>
                {src ? (
                  <>
                    <img src={src} className="h-full w-full object-cover" alt="" />
                    <span className="absolute right-2 top-2 rounded-full glass p-1"><GripVertical size={12} /></span>
                  </>
                ) : (
                  <Camera size={18} className="text-lavender/35" />
                )}
              </GlassPanel>
            ))}
          </div>
        )}

        {tab === "Bio & Prompts" && (
          <div className="max-w-xl space-y-5">
            <div>
              <Eyebrow>About me</Eyebrow>
              <textarea
                defaultValue={currentUser.bio}
                rows={4}
                className="glass mt-3 w-full rounded-3xl px-5 py-4 text-sm text-white placeholder:text-lavender/40 focus:outline-none"
              />
            </div>
            {["My ideal Sunday looks like…", "A non-negotiable for me is…"].map((prompt) => (
              <div key={prompt}>
                <Eyebrow>{prompt}</Eyebrow>
                <textarea rows={2} className="glass mt-3 w-full rounded-3xl px-5 py-4 text-sm text-white placeholder:text-lavender/40 focus:outline-none" placeholder="Your answer…" />
              </div>
            ))}
            <button className="flex items-center gap-2 text-sm text-neon-rose"><Plus size={15} /> Add another prompt</button>
          </div>
        )}

        {(tab === "Interests" || tab === "Lifestyle" || tab === "Work & Education" || tab === "Dating Intention") && (
          <GlassPanel className="max-w-xl p-8 text-center">
            <p className="text-sm text-lavender/60">Update your {tab.toLowerCase()} preferences — the same elegant selectors from onboarding appear here, pre-filled with your current answers.</p>
          </GlassPanel>
        )}
      </div>

      <PrimaryButton onClick={onBack} className="mt-10">Save Changes</PrimaryButton>
    </ScreenShell>
  );
}
