import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Citadel K9s — home"
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <span className="relative inline-flex h-10 w-10 items-center justify-center">
        <svg viewBox="0 0 48 48" className="h-10 w-10 text-gold" aria-hidden>
          {/* Shield / citadel mark */}
          <path
            d="M24 3l16 6v11c0 10.5-6.8 17.4-16 21C14.8 37.4 8 30.5 8 20V9l16-6z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeOpacity="0.55"
          />
          {/* Battlements */}
          <path
            d="M16 17v-3h3v2h3v-2h4v2h3v-2h3v3"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <path d="M16 17h16v8a8 8 0 0 1-8 7 8 8 0 0 1-8-7v-8z" fill="currentColor" fillOpacity="0.12" />
          <path d="M24 17v15" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-medium tracking-wide text-bone">
          Citadel <span className="text-gold">K9s</span>
        </span>
        <span className="mt-1 text-[0.55rem] uppercase tracking-luxe text-bone-faint">
          German Shepherds
        </span>
      </span>
    </Link>
  );
}
