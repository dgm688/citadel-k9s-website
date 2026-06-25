import type { Testimonial } from "@/lib/types";
import { StarRating } from "@/components/ui/StarRating";

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="panel flex h-full flex-col gap-5 p-7">
      <span aria-hidden className="font-display text-5xl leading-none text-gold/50">
        &ldquo;
      </span>
      <blockquote className="flex-1 text-base leading-relaxed text-bone">
        {t.quote}
      </blockquote>
      <StarRating rating={t.rating} />
      <figcaption className="flex flex-col gap-0.5 border-t border-white/5 pt-4">
        <span className="font-medium text-bone">{t.name}</span>
        <span className="text-xs uppercase tracking-wide2 text-bone-faint">
          {t.location}
          {t.dog ? ` · ${t.dog}` : ""}
        </span>
      </figcaption>
    </figure>
  );
}
