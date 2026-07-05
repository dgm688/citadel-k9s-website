import type { Testimonial } from "@/lib/types";
import { StarRating } from "@/components/ui/StarRating";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { WhatsApp, Instagram, Heart } from "@/components/ui/Icons";

const sourceLabel: Record<Testimonial["source"], string> = {
  whatsapp: "Via WhatsApp",
  google: "Google review",
  "in-person": "In person",
};

const sourceIcon: Record<Testimonial["source"], typeof WhatsApp> = {
  whatsapp: WhatsApp,
  google: Instagram, // swapped for a Google icon when reviews arrive
  "in-person": Heart,
};

/**
 * Displays one GENUINE testimonial, with its source stated for
 * credibility and optional proof media (photo/video of the dog).
 */
export function TestimonialCard({ t }: { t: Testimonial }) {
  const SourceIcon = sourceIcon[t.source];

  return (
    <figure className="panel flex h-full flex-col gap-5 p-7">
      {t.media && (
        <ImageFrame media={t.media} aspect="aspect-[16/10]" rounded="rounded-xl" />
      )}
      <span aria-hidden className="font-display text-5xl leading-none text-gold/50">
        &ldquo;
      </span>
      <blockquote className="flex-1 text-base leading-relaxed text-bone">
        {t.quote}
      </blockquote>
      {t.videoUrl && (
        <a
          href={t.videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gold hover:underline"
        >
          Watch their video →
        </a>
      )}
      {typeof t.rating === "number" && <StarRating rating={t.rating} />}
      <figcaption className="flex flex-col gap-1.5 border-t border-white/5 pt-4">
        <span className="font-medium text-bone">{t.name}</span>
        <span className="text-xs uppercase tracking-wide2 text-bone-faint">
          {t.location}
          {t.dog ? ` · ${t.dog}` : ""}
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs text-gold/80">
          <SourceIcon className="h-3.5 w-3.5" />
          {sourceLabel[t.source]}
        </span>
      </figcaption>
    </figure>
  );
}
