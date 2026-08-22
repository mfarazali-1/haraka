import TestimonialCard from "./TestimonialCard";
import type { Testimonial } from "@/lib/testimonials";

export default function TestimonialsMarquee({
  items,
  direction = "forward",
  duration = 60,
}: {
  items: Testimonial[];
  direction?: "forward" | "reverse";
  duration?: number;
}) {
  const track = [...items, ...items];

  return (
    <div className="marquee-row overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
      <div
        className="marquee-track flex w-max gap-6"
        data-direction={direction === "reverse" ? "reverse" : undefined}
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        {track.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} t={t} variant="marquee" />
        ))}
      </div>
    </div>
  );
}
