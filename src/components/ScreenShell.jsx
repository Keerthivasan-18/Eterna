export default function ScreenShell({ children, className = "" }) {
  return (
    <div className={`relative min-h-screen w-full pb-28 pt-8 lg:pb-16 lg:pt-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 lg:px-10">{children}</div>
    </div>
  );
}
