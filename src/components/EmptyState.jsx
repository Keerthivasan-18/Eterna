import { motion } from "framer-motion";
import EternaMark from "./EternaMark";
import { PrimaryButton } from "./UI";

export default function EmptyState({ icon: Icon, title, body, actionLabel, onAction }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center px-8 py-20 text-center"
    >
      <div className="relative mb-6 flex h-24 w-24 items-center justify-center rounded-full glass shadow-glow-sm">
        <div className="absolute inset-0 rounded-full bg-eterna-gradient opacity-10 blur-xl" />
        {Icon ? <Icon size={30} className="text-lavender/70" strokeWidth={1.6} /> : <EternaMark size={40} animated={false} />}
      </div>
      <h3 className="font-display text-xl text-white">{title}</h3>
      <p className="mt-2 max-w-xs text-sm leading-relaxed text-lavender/55">{body}</p>
      {actionLabel && (
        <PrimaryButton onClick={onAction} className="mt-6">
          {actionLabel}
        </PrimaryButton>
      )}
    </motion.div>
  );
}
