import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  crumbs?: Crumb[];
}

/** Consistent inner-page hero with breadcrumb and architectural backdrop. */
export function PageHero({ eyebrow, title, description, crumbs }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/5 pt-36 pb-16 lg:pt-44 lg:pb-24">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-radial-ink" />
        <div className="absolute right-[-10%] top-[-20%] h-[50vh] w-[50vh] rounded-full bg-gold/8 blur-[120px]" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.05]" aria-hidden>
          <defs>
            <pattern id="page-grid" width="64" height="64" patternUnits="userSpaceOnUse">
              <path d="M64 0H0V64" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#page-grid)" />
        </svg>
      </div>

      <div className="container-site">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wide2 text-bone-faint">
              {crumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-2">
                  {c.href ? (
                    <Link href={c.href} className="hover:text-gold">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-gold">{c.label}</span>
                  )}
                  {i < crumbs.length - 1 && <span aria-hidden>/</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <Reveal className="flex max-w-3xl flex-col gap-6">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className="text-balance text-4xl font-light leading-[1.05] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="max-w-2xl text-lg leading-relaxed text-bone-muted">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
