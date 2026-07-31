import type { Testimonial } from "@/lib/types";
import { Reveal } from "@/components/ui/Reveal";
import { StarRating } from "@/components/ui/StarRating";
import { Star, WhatsApp, Heart } from "@/components/ui/Icons";

/**
 * Staggered testimonial grid — design ported from a 21st.dev component and
 * fully re-skinned into the Citadel black-and-gold brand. Reviewers have no
 * photos (they are public Google reviews), so avatars are replaced with an
 * on-brand gold monogram + a "source verified" badge. Truth policy holds:
 * this only ever renders GENUINE reviews from the data layer.
 */

const sourceMeta: Record<
  Testimonial["source"],
  { label: string; Icon: typeof Star }
> = {
  google: { label: "Verified Google review", Icon: Star },
  whatsapp: { label: "Verified via WhatsApp", Icon: WhatsApp },
  "in-person": { label: "Met in person", Icon: Heart },
};

function QuoteMark({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
    </svg>
  );
}

/** Thin plus-mark that sits on the top-left corner of a framed card. */
function CornerPlus({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function ShowcaseCard({
  t,
  index,
}: {
  t: Testimonial;
  index: number;
}) {
  const { label, Icon } = sourceMeta[t.source];
  // Staggered vertical rhythm on desktop. Margin (not transform) so it never
  // fights Framer Motion's entrance transform on the Reveal wrapper.
  const stagger =
    index % 3 === 1 ? "md:mt-12" : index % 3 === 2 ? "md:mt-24" : "";

  return (
    <figure
      className={`group relative flex h-full flex-col justify-between gap-7 px-8 pb-7 pt-9 ${stagger} bg-[radial-gradient(60%_80%_at_25%_0%,rgba(201,162,39,0.10),transparent)]`}
    >
      {/* Hairline frame */}
      <span className="pointer-events-none absolute -inset-y-4 -left-px w-px bg-gold/15" />
      <span className="pointer-events-none absolute -inset-y-4 -right-px w-px bg-gold/15" />
      <span className="pointer-events-none absolute -inset-x-4 -top-px h-px bg-gold/15" />
      <span className="pointer-events-none absolute -inset-x-4 -bottom-px h-px bg-gold/15" />
      <CornerPlus className="pointer-events-none absolute left-0 top-0 z-10 size-3.5 -translate-x-1/2 -translate-y-1/2 text-gold/50" />

      <div className="flex flex-col gap-5">
        <QuoteMark className="size-7 shrink-0 stroke-1 text-gold/50 transition-colors group-hover:text-gold/80" />
        <blockquote className="text-base leading-relaxed text-bone">
          {t.quote}
        </blockquote>
      </div>

      <figcaption className="flex flex-col gap-4">
        {typeof t.rating === "number" && <StarRating rating={t.rating} />}
        <div className="flex items-center gap-3 border-t border-white/5 pt-4">
          <span
            aria-hidden
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/5 font-display text-lg text-gold ring-1 ring-inset ring-white/5 transition-colors group-hover:border-gold/60"
          >
            {t.name.charAt(0).toUpperCase()}
          </span>
          <div className="flex flex-col">
            <cite className="not-italic font-medium text-bone">{t.name}</cite>
            <span className="mt-0.5 inline-flex items-center gap-1.5 text-xs text-gold/80">
              <Icon className="h-3.5 w-3.5" />
              {label}
            </span>
          </div>
        </div>
      </figcaption>
    </figure>
  );
}

export function TestimonialsShowcase({
  items,
  className = "",
}: {
  items: Testimonial[];
  className?: string;
}) {
  return (
    <div
      className={`mx-auto grid w-full max-w-5xl gap-y-16 gap-x-6 md:grid-cols-3 md:pb-24 ${className}`}
    >
      {items.map((t, i) => (
        <Reveal key={t.name} delay={(i % 3) * 0.12} className="h-full">
          <ShowcaseCard t={t} index={i} />
        </Reveal>
      ))}
    </div>
  );
}
