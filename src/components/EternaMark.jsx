export default function EternaMark({ size = 48, animated = true, className = "" }) {
  const id = "eterna-grad";
  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size * 0.62 }}
    >
      {animated && (
        <div
          className="absolute inset-0 -m-3 rounded-full blur-xl animate-pulseglow"
          style={{
            background:
              "radial-gradient(circle, rgba(255,95,168,0.55) 0%, rgba(199,125,255,0.35) 45%, transparent 75%)",
          }}
        />
      )}
      <svg
        viewBox="0 0 120 62"
        width={size}
        height={size * 0.62}
        className="relative"
        fill="none"
      >
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="120" y2="62" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ff8fc7" />
            <stop offset="50%" stopColor="#e3c6ff" />
            <stop offset="100%" stopColor="#c77dff" />
          </linearGradient>
        </defs>
        <path
          d="M60,31
             C60,18 48,7 33,7
             C16,7 6,18 6,31
             C6,44 16,55 33,55
             C46,55 53,47 58,38
             C59,36 61,36 62,38
             C67,47 74,55 87,55
             C104,55 114,44 114,31
             C114,18 104,7 87,7
             C72,7 60,18 60,31 Z"
          stroke={`url(#${id})`}
          strokeWidth="4.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
