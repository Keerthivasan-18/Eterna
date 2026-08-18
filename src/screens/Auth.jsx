import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, User, ArrowLeft, ArrowRight } from "lucide-react";
import EternaMark from "../components/EternaMark";
import { PrimaryButton, GhostButton, GlassPanel, AmbientOrbs } from "../components/UI";

function Field({ icon: Icon, type = "text", placeholder, value, onChange, rightSlot }) {
  return (
    <div className="glass flex items-center gap-3 rounded-2xl px-4 py-3.5 transition-colors focus-within:border-neon-pink/50">
      <Icon size={18} className="text-lavender/60" strokeWidth={2} />
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent text-sm text-pearl placeholder:text-lavender/40 focus:outline-none"
      />
      {rightSlot}
    </div>
  );
}

function SocialRow() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <GhostButton className="w-full justify-center py-3">
        <span className="text-sm">Continue with Google</span>
      </GhostButton>
      <GhostButton className="w-full justify-center py-3">
        <span className="text-sm">Continue with Apple</span>
      </GhostButton>
    </div>
  );
}

function AuthShell({ children, step, onBack }) {
  return (
    <div className="aurora-bg relative flex min-h-screen w-full items-center justify-center overflow-hidden px-5 py-10">
      <AmbientOrbs />
      <div className="relative w-full max-w-md">
        <div className="mb-8 flex items-center justify-between">
          {onBack ? (
            <button onClick={onBack} className="glass flex h-10 w-10 items-center justify-center rounded-full text-pearl/80">
              <ArrowLeft size={17} />
            </button>
          ) : (
            <div />
          )}
          <div className="flex items-center gap-2">
            <EternaMark size={26} animated={false} />
            <span className="font-display text-base text-white">Eterna</span>
          </div>
          <div className="w-10" />
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <GlassPanel strong className="p-7 sm:p-9">
              {children}
            </GlassPanel>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function Auth({ onAuthenticated }) {
  const [step, setStep] = useState("signin"); // signin | register | forgot | otp
  const [showPw, setShowPw] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const otpRefs = useRef([]);

  const handleOtpChange = (i, val) => {
    if (!/^[0-9]?$/.test(val)) return;
    const next = [...otp];
    next[i] = val;
    setOtp(next);
    if (val && i < 3) otpRefs.current[i + 1]?.focus();
  };

  if (step === "signin") {
    return (
      <AuthShell step={step}>
        <h2 className="font-display text-2xl text-white">Welcome back</h2>
        <p className="mt-1 text-sm text-lavender/60">Sign in to continue your story.</p>
        <div className="mt-7 space-y-3">
          <Field icon={Mail} type="email" placeholder="Email address" />
          <Field
            icon={Lock}
            type={showPw ? "text" : "password"}
            placeholder="Password"
            rightSlot={
              <button onClick={() => setShowPw((s) => !s)} className="text-lavender/50 hover:text-lavender">
                {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            }
          />
        </div>
        <button onClick={() => setStep("forgot")} className="mt-3 text-xs text-lavender/60 underline underline-offset-4 hover:text-lavender">
          Forgot password?
        </button>
        <PrimaryButton onClick={onAuthenticated} className="mt-6 w-full justify-center">
          Sign In
        </PrimaryButton>
        <div className="my-6 flex items-center gap-3 text-xs text-lavender/40">
          <span className="h-px flex-1 bg-white/10" />
          or
          <span className="h-px flex-1 bg-white/10" />
        </div>
        <SocialRow />
        <p className="mt-7 text-center text-sm text-lavender/60">
          New to Eterna?{" "}
          <button onClick={() => setStep("register")} className="text-neon-rose underline underline-offset-4">
            Create an account
          </button>
        </p>
      </AuthShell>
    );
  }

  if (step === "register") {
    return (
      <AuthShell step={step} onBack={() => setStep("signin")}>
        <h2 className="font-display text-2xl text-white">Create your account</h2>
        <p className="mt-1 text-sm text-lavender/60">Begin something worth remembering.</p>
        <div className="mt-7 space-y-3">
          <Field icon={User} placeholder="Full name" />
          <Field icon={Mail} type="email" placeholder="Email address" />
          <Field
            icon={Lock}
            type={showPw ? "text" : "password"}
            placeholder="Create password"
            rightSlot={
              <button onClick={() => setShowPw((s) => !s)} className="text-lavender/50 hover:text-lavender">
                {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            }
          />
        </div>
        <p className="mt-4 text-[11px] leading-relaxed text-lavender/45">
          By continuing, you agree to Eterna's Terms and Privacy Policy, and confirm you're 18 or older.
        </p>
        <PrimaryButton onClick={() => setStep("otp")} className="mt-5 w-full justify-center">
          Create Account
        </PrimaryButton>
        <div className="my-6 flex items-center gap-3 text-xs text-lavender/40">
          <span className="h-px flex-1 bg-white/10" />
          or
          <span className="h-px flex-1 bg-white/10" />
        </div>
        <SocialRow />
      </AuthShell>
    );
  }

  if (step === "forgot") {
    return (
      <AuthShell step={step} onBack={() => setStep("signin")}>
        <h2 className="font-display text-2xl text-white">Reset your password</h2>
        <p className="mt-1 text-sm text-lavender/60">We'll send a verification code to your email.</p>
        <div className="mt-7">
          <Field icon={Mail} type="email" placeholder="Email address" />
        </div>
        <PrimaryButton onClick={() => setStep("otp")} className="mt-6 w-full justify-center" icon={ArrowRight}>
          Send Code
        </PrimaryButton>
      </AuthShell>
    );
  }

  return (
    <AuthShell step={step} onBack={() => setStep("signin")}>
      <h2 className="font-display text-2xl text-white">Verify it's you</h2>
      <p className="mt-1 text-sm text-lavender/60">Enter the 4-digit code we sent to your email.</p>
      <div className="mt-8 flex justify-between gap-3">
        {otp.map((val, i) => (
          <input
            key={i}
            ref={(el) => (otpRefs.current[i] = el)}
            value={val}
            onChange={(e) => handleOtpChange(i, e.target.value)}
            maxLength={1}
            className="glass h-16 w-16 rounded-2xl text-center font-display text-2xl text-white focus:border-neon-pink/60 focus:outline-none"
          />
        ))}
      </div>
      <p className="mt-5 text-center text-xs text-lavender/50">
        Didn't get it? <button className="text-neon-rose underline underline-offset-4">Resend code</button>
      </p>
      <PrimaryButton onClick={onAuthenticated} className="mt-6 w-full justify-center">
        Verify & Continue
      </PrimaryButton>
    </AuthShell>
  );
}
