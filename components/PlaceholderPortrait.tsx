export default function PlaceholderPortrait({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center gap-3 bg-paper-deep ${className}`}>
      <svg width="20%" height="20%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true" className="text-slate min-w-10 min-h-10 max-w-20 max-h-20">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.5-7 8-7s8 3 8 7" />
      </svg>
      <span className="text-[10px] uppercase tracking-[0.14em] text-muted">Photo coming soon</span>
    </div>
  );
}
