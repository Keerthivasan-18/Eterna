import EternaMark from "../components/EternaMark";
import { PrimaryButton, AmbientOrbs, Eyebrow } from "../components/UI";

export default function NotFound({ onHome }) {
  return (
    <div className="aurora-bg relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6 text-center">
      <AmbientOrbs />
      <EternaMark size={64} />
      <Eyebrow className="mt-8 justify-center">Error 404</Eyebrow>
      <h1 className="mt-3 font-display text-4xl text-white">This connection got lost.</h1>
      <p className="mt-3 max-w-sm text-sm text-lavender/60">
        The page you're looking for drifted somewhere outside the constellation. Let's get you back.
      </p>
      <PrimaryButton onClick={onHome} className="mt-8">Return to Discover</PrimaryButton>
    </div>
  );
}
