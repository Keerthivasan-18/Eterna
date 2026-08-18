import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import { GlassPanel, PrimaryButton, GhostButton, Eyebrow } from "../components/UI";

const chips = {
  "Relationship intention": ["Long-term", "Short-term", "Figuring it out"],
  "Interests": ["Jazz", "Hiking", "Design", "Cooking", "Travel", "Yoga"],
  "Education": ["High school", "Bachelor's", "Master's", "PhD"],
  "Smoking": ["Never", "Sometimes", "Regularly"],
  "Drinking": ["Never", "Socially", "Often"],
  "Children": ["Have kids", "Want kids", "Don't want kids", "Not sure"],
  "Religion": ["Open to all", "Hindu", "Christian", "Muslim", "Other", "Prefer not to say"],
};

export default function Filters({ open, onClose }) {
  const [age, setAge] = useState([22, 36]);
  const [distance, setDistance] = useState(25);
  const [active, setActive] = useState({});

  const toggle = (group, val) => {
    setActive((a) => {
      const cur = a[group] || [];
      return { ...a, [group]: cur.includes(val) ? cur.filter((v) => v !== val) : [...cur, val] };
    });
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[70] bg-ink/70 backdrop-blur-sm"
          />
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 32, stiffness: 300 }}
            className="fixed inset-x-0 bottom-0 z-[75] flex justify-center px-3 pb-3 sm:px-6 sm:pb-6"
          >
            <GlassPanel strong glow className="max-h-[82vh] w-full max-w-2xl overflow-y-auto !rounded-t-5xl !rounded-b-4xl p-6 sm:p-8">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <Eyebrow>Discovery filters</Eyebrow>
                  <h2 className="mt-2 font-display text-2xl text-white">Refine your matches</h2>
                </div>
                <button onClick={onClose} className="glass flex h-10 w-10 items-center justify-center rounded-full text-pearl/80">
                  <X size={16} />
                </button>
              </div>

              <div className="space-y-7">
                <div>
                  <div className="mb-3 flex items-center justify-between text-sm text-lavender/70">
                    <span>Age range</span>
                    <span className="text-white">{age[0]} – {age[1]}</span>
                  </div>
                  <input
                    type="range"
                    min={18}
                    max={60}
                    value={age[1]}
                    onChange={(e) => setAge([age[0], Number(e.target.value)])}
                    className="w-full accent-[#ff5fa8]"
                  />
                </div>

                <div>
                  <div className="mb-3 flex items-center justify-between text-sm text-lavender/70">
                    <span>Maximum distance</span>
                    <span className="text-white">{distance} miles</span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={100}
                    value={distance}
                    onChange={(e) => setDistance(Number(e.target.value))}
                    className="w-full accent-[#ff5fa8]"
                  />
                </div>

                {Object.entries(chips).map(([group, opts]) => (
                  <div key={group}>
                    <p className="mb-3 text-sm text-lavender/70">{group}</p>
                    <div className="flex flex-wrap gap-2">
                      {opts.map((opt) => {
                        const isActive = (active[group] || []).includes(opt);
                        return (
                          <button
                            key={opt}
                            onClick={() => toggle(group, opt)}
                            className={`rounded-full border px-4 py-2 text-xs transition-colors ${
                              isActive
                                ? "border-transparent bg-eterna-gradient text-white shadow-glow-sm"
                                : "glass border-white/10 text-lavender/70"
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex gap-3">
                <GhostButton className="flex-1 justify-center" onClick={() => { setActive({}); }}>
                  Reset
                </GhostButton>
                <PrimaryButton className="flex-1 justify-center" onClick={onClose}>
                  Show Matches
                </PrimaryButton>
              </div>
            </GlassPanel>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
