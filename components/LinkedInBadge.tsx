const LINKEDIN_PATH =
  "M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.65-1.85 3.39-1.85 3.62 0 4.29 2.38 4.29 5.48v6.26zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.55v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.22 0z";

export default function LinkedInBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center justify-center w-7 h-7 rounded-[6px] bg-[#0A66C2] text-white shadow-sm ${className}`}
      aria-label="Sourced from LinkedIn"
      title="Sourced from LinkedIn"
    >
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d={LINKEDIN_PATH} />
      </svg>
    </span>
  );
}
