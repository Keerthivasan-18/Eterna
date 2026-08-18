import { motion } from "framer-motion";
import EternaMark from "../components/EternaMark";
import { AmbientOrbs } from "../components/UI";

export default function Splash() {
  return (
    <div className="aurora-bg relative flex h-full min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      <AmbientOrbs />
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative flex flex-col items-center"
      >
        <EternaMark size={100} />
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-7 font-display text-4xl tracking-[0.08em] text-pearl"
        >
          ETERNA
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-3 text-sm italic tracking-wide text-lavender/70 font-display"
        >
          Meaningful connections, made timeless.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-16 flex flex-col items-center gap-3"
      >
        <div className="h-1 w-40 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-eterna-gradient"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
        </div>
        <span className="text-[11px] uppercase tracking-[0.3em] text-lavender/50">Preparing your world</span>
      </motion.div>
    </div>
  );
}
