export default function DiamondPattern({ className = "" }: { className?: string }) {
  const diamonds = [
    { x: 60, y: 60, s: 70 },
    { x: 220, y: 140, s: 46 },
    { x: 900, y: 50, s: 90 },
    { x: 1040, y: 170, s: 50 },
    { x: 500, y: 20, s: 40 },
    { x: 760, y: 160, s: 34 },
  ];

  return (
    <svg
      viewBox="0 0 1200 240"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      preserveAspectRatio="xMidYMid slice"
    >
      <g fill="none" stroke="var(--color-cream)" strokeWidth="1.5" opacity="0.18">
        {diamonds.map((d, i) => (
          <rect key={i} x={d.x} y={d.y} width={d.s} height={d.s} transform={`rotate(45 ${d.x + d.s / 2} ${d.y + d.s / 2})`} />
        ))}
      </g>
    </svg>
  );
}
