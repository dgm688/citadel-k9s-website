import Image from "next/image";
import type { Media } from "@/lib/types";

interface ImageFrameProps {
  media: Media;
  /** Tailwind aspect ratio class, e.g. "aspect-[4/5]". */
  aspect?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  rounded?: string;
}

/**
 * Renders a real photo when `media.src` is set, otherwise an elegant,
 * on-brand placeholder. Swapping in real photography is a one-line change
 * in the data layer — no component edits required.
 */
export function ImageFrame({
  media,
  aspect = "aspect-[4/5]",
  className = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  rounded = "rounded-2xl",
}: ImageFrameProps) {
  return (
    <div
      className={`group relative overflow-hidden ${rounded} ${aspect} ${className}`}
    >
      {media.src ? (
        <Image
          src={media.src}
          alt={media.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      ) : (
        <Placeholder label={media.label} alt={media.alt} />
      )}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5"
        style={{ borderRadius: "inherit" }}
      />
    </div>
  );
}

function Placeholder({ label, alt }: { label?: string; alt: string }) {
  return (
    <div
      role="img"
      aria-label={alt}
      className="absolute inset-0 flex flex-col items-center justify-center"
      style={{
        background:
          "radial-gradient(120% 120% at 50% 0%, #1a1a1a 0%, #0f0f0f 45%, #0b0b0b 100%)",
      }}
    >
      {/* Subtle gold framing */}
      <svg
        aria-hidden
        className="absolute inset-0 h-full w-full opacity-[0.18]"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="ck9-grid"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M32 0H0V32"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="0.4"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#ck9-grid)" />
      </svg>

      {/* Monogram crest */}
      <div className="relative flex flex-col items-center gap-4 px-6 text-center">
        <Crest />
        {label && (
          <span className="text-[0.65rem] uppercase tracking-luxe text-bone-faint">
            {label}
          </span>
        )}
        <span className="text-[0.6rem] uppercase tracking-wide2 text-bone-faint/60">
          Photography coming soon
        </span>
      </div>
    </div>
  );
}

function Crest() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden
      className="text-gold"
    >
      <circle
        cx="32"
        cy="32"
        r="30"
        stroke="currentColor"
        strokeOpacity="0.5"
        strokeWidth="1"
      />
      <circle
        cx="32"
        cy="32"
        r="24"
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeWidth="0.75"
      />
      {/* Stylised shepherd head silhouette */}
      <path
        d="M22 24l4-6 3 5h6l3-5 4 6c2 3 2 7 0 11l-3 6c-1 2-3 4-7 4s-6-2-7-4l-3-6c-2-4-2-8 0-11z"
        fill="currentColor"
        fillOpacity="0.85"
      />
      <path d="M26 30l-3-7M38 30l3-7" stroke="#0b0b0b" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="28.5" cy="33" r="1.4" fill="#0b0b0b" />
      <circle cx="35.5" cy="33" r="1.4" fill="#0b0b0b" />
    </svg>
  );
}
