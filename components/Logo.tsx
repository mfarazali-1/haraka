export default function Logo({ className = "w-9 h-9 md:w-10 md:h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 240"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Haraka Headhunters LLC"
      className={className}
    >
      <title>Haraka Headhunters LLC</title>
      <g data-part="marks">
        <path
          data-part="diamond-fill"
          d="M0.48,120 L120,0.48 L239.52,120 L120,239.52 z M11.75197,120 L120,228.248 L228.248,120 L120,11.75197 z"
          fill="#7C80A2"
        />
        <path
          data-part="hh-cream"
          d="M136.3234,126.1691 L136.3234,200.6527 L123.9852,212.9908 L123.9852,27.00919 L136.3234,39.34732 L136.3234,113.8309 L174.5311,113.8309 L174.5311,77.55502 L186.8692,89.89315 L186.8692,150.1068 L174.5311,162.445 L174.5311,126.1691 z"
          fill="#FFFCCF"
        />
        <path
          data-part="chevron-left"
          d="M45.1603,142.1364 L23.02394,120 L45.1603,97.86364 L45.1603,109.1356 L34.29591,120 L45.1603,130.8644 z"
          fill="#FFFCCF"
        />
        <path
          data-part="chevron-right"
          d="M194.8397,142.1364 L194.8397,130.8644 L205.7041,120 L194.8397,109.1356 L194.8397,97.86364 L216.9761,120 z"
          fill="#7C80A2"
        />
        <path
          data-part="hh-slate"
          d="M103.6766,126.1691 L65.46893,126.1691 L65.46893,162.445 L53.13079,150.1068 L53.13079,89.89315 L65.46893,77.55502 L65.46893,113.8309 L103.6766,113.8309 L103.6766,39.34732 L116.0148,27.00919 L116.0148,212.9908 L103.6766,200.6527 z"
          fill="#7C80A2"
        />
      </g>
    </svg>
  );
}
