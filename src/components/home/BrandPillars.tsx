import Image from "next/image";
import Link from "next/link";
import { BRAND_PILLARS, TRUST_COMMITMENTS } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Sparkle,
  ShieldCheck,
  Heart,
  Paw,
  ArrowUpRight,
} from "@/components/ui/Icons";

const pillarIcons = [Sparkle, ShieldCheck, Heart];

/**
 * "Why Citadel" bento — layout adapted from a 21st.dev Feature Bento and
 * re-skinned into the Citadel black-and-gold system. Every tile holds
 * verifiable content only: the three real brand pillars, a truthful trust
 * commitment, and a CTA. No invented statistics (the original's stat tiles
 * were replaced) — truth policy holds.
 */
export function BrandPillars() {
  const meetParents = TRUST_COMMITMENTS[0];

  return (
    <section className="container-site py-24 lg:py-32">
      <SectionHeading
        eyebrow="Why Citadel"
        title="Bred to a standard, not a shortcut."
        className="mb-14 max-w-2xl"
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[272px]">
        {/* Hero tile — real photo + ethos */}
        <Reveal className="md:col-span-2 md:row-span-2">
          <div className="group relative flex h-full min-h-[340px] flex-col justify-end overflow-hidden rounded-3xl p-10">
            <Image
              src="/images/gallery/adult-stack.jpg"
              alt="A Citadel K9s German Shepherd stacked to show structure"
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/20" />
            <div className="relative z-10 space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-4 py-1.5 text-xs font-medium uppercase tracking-luxe text-gold backdrop-blur-sm">
                <span className="size-1.5 rounded-full bg-gold" />
                Our standard
              </span>
              <h3 className="font-display text-4xl font-light leading-tight text-bone sm:text-5xl">
                Structure, health,
                <br />
                temperament.
              </h3>
              <p className="max-w-md leading-relaxed text-bone-muted">
                Every Citadel puppy is raised to a standard you can verify — the
                parents you can meet, the records handed to you in writing.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Three real pillars */}
        {BRAND_PILLARS.map((pillar, i) => {
          const Icon = pillarIcons[i];
          return (
            <Reveal key={pillar.title} delay={0.08 * (i + 1)}>
              <div className="group relative flex h-full min-h-[240px] flex-col justify-between overflow-hidden rounded-3xl border border-white/5 bg-ink-800/40 p-8 transition-colors duration-500 hover:border-gold/30">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/30 text-gold transition-colors group-hover:bg-gold/10">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="space-y-2">
                  <h4 className="text-xl font-light text-bone">
                    {pillar.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-bone-muted">
                    {pillar.description}
                  </p>
                </div>
                <span className="pointer-events-none absolute right-7 top-6 font-display text-5xl text-white/5 transition-colors group-hover:text-gold/10">
                  0{i + 1}
                </span>
              </div>
            </Reveal>
          );
        })}

        {/* CTA tile */}
        <Reveal delay={0.32}>
          <Link
            href="/available-puppies"
            className="group relative flex h-full min-h-[240px] flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-ink-900 to-ink-700 p-8 transition-colors hover:from-ink-800 hover:to-ink-700"
          >
            <div className="flex items-start justify-between">
              <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-luxe text-gold">
                Available puppies
              </span>
              <span className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 text-gold transition-all group-hover:rotate-45 group-hover:border-gold/60">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
            <h4 className="font-display text-2xl font-light leading-tight text-bone">
              See who&apos;s
              <br />
              looking for a home.
            </h4>
          </Link>
        </Reveal>

        {/* Trust tile — real commitment */}
        <Reveal delay={0.4}>
          <div className="group relative flex h-full min-h-[240px] flex-col justify-between overflow-hidden rounded-3xl border border-white/5 bg-ink-800/40 p-8 transition-colors duration-500 hover:border-gold/30">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/30 text-gold transition-colors group-hover:bg-gold/10">
              <Paw className="h-5 w-5" />
            </span>
            <div className="space-y-2">
              <h4 className="text-xl font-light text-bone">
                {meetParents.title}
              </h4>
              <p className="text-sm leading-relaxed text-bone-muted">
                {meetParents.description}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
