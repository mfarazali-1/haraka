export default function SkylineArt({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 600"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration of the Midtown Manhattan skyline"
      className={className}
    >
      <title>Midtown Manhattan skyline</title>

      {/* chevrons echoing the wordmark, standing in for birds / motion */}
      <g fill="none" stroke="var(--color-slate)" strokeWidth="6" strokeLinecap="round" opacity="0.55">
        <path d="M92 96 L112 112 L92 128" />
        <path d="M170 60 L190 76 L170 92" />
        <path d="M440 130 L460 146 L440 162" />
      </g>

      {/* back layer */}
      <g fill="var(--color-line-strong)" opacity="0.55">
        <rect x="0" y="430" width="54" height="170" />
        <rect x="60" y="390" width="46" height="210" />
        <rect x="112" y="450" width="60" height="150" />
        <rect x="470" y="410" width="50" height="190" />
        <rect x="526" y="460" width="74" height="140" />
        <rect x="330" y="440" width="58" height="160" />
      </g>

      {/* mid layer */}
      <g fill="var(--color-slate-soft)" opacity="0.75">
        <rect x="20" y="330" width="64" height="270" />
        <rect x="150" y="360" width="52" height="240" />
        <rect x="206" y="300" width="70" height="300" />
        <rect x="388" y="340" width="56" height="260" />
        <rect x="448" y="380" width="60" height="220" />
        <rect x="540" y="320" width="60" height="280" />
      </g>

      {/* front layer — the skyline proper */}
      <g fill="var(--color-slate-deep)">
        <rect x="0" y="380" width="40" height="220" />
        <rect x="252" y="440" width="50" height="160" />

        {/* setback / art-deco tower */}
        <rect x="90" y="240" width="86" height="360" />
        <rect x="110" y="190" width="46" height="60" />
        <rect x="122" y="160" width="22" height="40" />

        <rect x="300" y="260" width="64" height="340" />

        {/* tallest tower with spire */}
        <rect x="374" y="140" width="90" height="460" />
        <rect x="396" y="90" width="46" height="60" />
        <rect x="410" y="40" width="18" height="60" />
        <rect x="415" y="16" width="8" height="30" />

        <rect x="474" y="300" width="56" height="300" />
        <rect x="540" y="260" width="60" height="340" />
      </g>

      <rect x="0" y="598" width="600" height="2" fill="var(--color-line-strong)" />
    </svg>
  );
}
