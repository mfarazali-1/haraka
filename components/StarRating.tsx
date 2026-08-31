export default function StarRating({
  rating = 5,
  size = 14,
  className = "",
}: {
  rating?: number;
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-0.5 ${className}`}
      role="img"
      aria-label={`Rated ${rating} out of 5`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 20 20"
          fill={i < rating ? "#FBBC04" : "#d8ccae"}
          aria-hidden="true"
          className="shrink-0"
        >
          <path d="M10 1.6l2.47 5.01 5.53.8-4 3.9.94 5.5L10 15.9l-4.95 2.6.94-5.5-4-3.9 5.53-.8z" />
        </svg>
      ))}
    </span>
  );
}
