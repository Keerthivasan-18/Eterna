import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import EternaMark from "../components/EternaMark";
import { PrimaryButton, GhostButton } from "../components/UI";
import { currentUser } from "../lib/data";

export default function MatchCelebration({ profile, onClose, onSendMessage }) {
  return (
    <AnimatePresence>
      {profile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-center justify-center overflow-hidden bg-ink/85 backdrop-blur-md"
        >
          {[...Array(16)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute h-1.5 w-1.5 rounded-full bg-neon-pink"
              initial={{
                x: 0,
                y: 0,
                opacity: 0,
              }}
              animate={{
                x: (Math.random() - 0.5) * 600,
                y: (Math.random() - 0.5) * 500,
                opacity: [0, 1, 0],
              }}
              transition={{ duration: 2.4 + Math.random(), repeat: Infinity, delay: i * 0.12 }}
              style={{ left: "50%", top: "45%" }}
            />
          ))}

          <button onClick={onClose} className="glass absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full">
            <X size={16} />
          </button>

          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 18 }}
            className="relative flex flex-col items-center px-6 text-center"
          >
            <EternaMark size={56} />
            <h1 className="mt-6 font-display text-5xl text-white">It's a match!</h1>
            <p className="mt-3 max-w-xs text-sm text-lavender/70">
              You and {profile.name} liked each other. Eterna gives this {profile.compatibility}% odds of being worth your time.
            </p>

            <div className="relative mt-9 flex items-center">
              <img
                src={currentUser.photo}
                className="h-28 w-28 -mr-5 rounded-full border-4 border-ink object-cover shadow-glow"
                alt="You"
              />
              <img
                src={profile.photo}
                className="h-28 w-28 rounded-full border-4 border-ink object-cover shadow-glow"
                alt={profile.name}
              />
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton icon={MessageCircle} onClick={() => onSendMessage(profile)}>
                Send a Message
              </PrimaryButton>
              <GhostButton onClick={onClose}>Keep Exploring</GhostButton>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
