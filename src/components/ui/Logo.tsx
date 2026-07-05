import Image from "next/image";
import Link from "next/link";

/**
 * Official Citadel K9s logo (uploaded brand package, /public/brand).
 * - "horizontal": full lockup with tagline — header, wide layouts.
 * - "stacked": badge above wordmark — footer, narrow layouts.
 * - "icon": pentagon badge only — loading states, small placements.
 */
export function Logo({
  variant = "horizontal",
  className = "",
  priority = false,
}: {
  variant?: "horizontal" | "stacked" | "icon";
  className?: string;
  priority?: boolean;
}) {
  const assets = {
    horizontal: {
      src: "/brand/logo-horizontal.svg",
      width: 217,
      height: 50,
      alt: "Citadel K9s — Elite German Shepherds, Kenya",
    },
    stacked: {
      src: "/brand/logo-stacked.svg",
      width: 140,
      height: 130,
      alt: "Citadel K9s — Elite German Shepherds, Kenya",
    },
    icon: {
      src: "/brand/icon-gold.svg",
      width: 56,
      height: 56,
      alt: "Citadel K9s badge",
    },
  } as const;

  const a = assets[variant];

  return (
    <Link
      href="/"
      aria-label="Citadel K9s — home"
      className={`inline-flex items-center ${className}`}
    >
      <Image
        src={a.src}
        alt={a.alt}
        width={a.width}
        height={a.height}
        priority={priority}
        className="h-auto w-auto"
        style={{ maxWidth: a.width, maxHeight: a.height }}
      />
    </Link>
  );
}
