function DiamondDot() {
  return <span aria-hidden="true" className="mx-6 inline-block w-2 h-2 rotate-45 border border-current opacity-60 shrink-0" />;
}

export default function TextMarquee({
  text,
  bg = "bg-slate-deep",
  fg = "text-cream",
  duration = 34,
  repeat = 6,
}: {
  text: string;
  bg?: string;
  fg?: string;
  duration?: number;
  repeat?: number;
}) {
  const items = Array.from({ length: repeat * 2 });

  return (
    <div className={`marquee-row overflow-hidden ${bg} ${fg} py-3.5 md:py-4`}>
      <div
        className="marquee-track flex w-max items-center"
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        {items.map((_, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="text-xs md:text-sm font-medium uppercase tracking-[0.2em] whitespace-nowrap">
              {text}
            </span>
            <DiamondDot />
          </span>
        ))}
      </div>
    </div>
  );
}
