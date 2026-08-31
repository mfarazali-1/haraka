const LETTERS: [string, string][] = [
  ["G", "#4285F4"],
  ["o", "#EA4335"],
  ["o", "#FBBC05"],
  ["g", "#4285F4"],
  ["l", "#34A853"],
  ["e", "#EA4335"],
];

export default function GoogleWordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-sans font-semibold tracking-[-0.02em] ${className}`} aria-label="Google">
      {LETTERS.map(([ch, color], i) => (
        <span key={i} style={{ color }} aria-hidden="true">
          {ch}
        </span>
      ))}
    </span>
  );
}
