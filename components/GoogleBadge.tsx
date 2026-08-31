import GoogleIcon from "./GoogleIcon";

export default function GoogleBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center justify-center w-7 h-7 rounded-[6px] bg-white border border-line-strong shadow-sm ${className}`}
      aria-label="Sourced from Google Reviews"
      title="Sourced from Google Reviews"
    >
      <GoogleIcon className="w-[15px] h-[15px]" />
    </span>
  );
}
