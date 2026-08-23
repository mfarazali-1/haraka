import Logo from "./Logo";

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
    <div className={`marquee-row overflow-hidden ${bg} ${fg} py-[2px]`}>
      <div
        className="marquee-track flex w-max items-center"
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        {items.map((_, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="italic text-xs md:text-sm font-medium uppercase tracking-[0.2em] whitespace-nowrap">
              {text}
            </span>
            <Logo className="mx-6 w-[32px] h-[32px] md:w-[36px] md:h-[36px] shrink-0 opacity-90" />
          </span>
        ))}
      </div>
    </div>
  );
}
