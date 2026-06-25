import { CONTACT } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { Reveal } from "@/components/ui/Reveal";
import { Instagram, ArrowUpRight } from "@/components/ui/Icons";

const tiles = [
  "Stack",
  "Puppy",
  "Working",
  "Candid",
  "Head study",
  "Litter",
];

export function InstagramPreview() {
  return (
    <section className="border-t border-white/5 bg-ink-800/30 py-24 lg:py-32">
      <div className="container-site">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Follow the pack"
            title="Life at Citadel K9s, in pictures."
            description="Daily moments, milestones and our dogs at their best."
          />
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline shrink-0"
          >
            <Instagram className="h-4 w-4" />
            {CONTACT.instagramHandle}
          </a>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {tiles.map((label, i) => (
            <Reveal key={label} delay={(i % 6) * 0.05}>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View Citadel K9s on Instagram — ${label}`}
                className="group relative block"
              >
                <ImageFrame
                  media={{ src: null, alt: `Instagram post — ${label}`, label }}
                  aspect="aspect-square"
                  rounded="rounded-xl"
                  sizes="(max-width: 768px) 50vw, 16vw"
                />
                <span className="absolute inset-0 flex items-center justify-center rounded-xl bg-ink/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <ArrowUpRight className="h-6 w-6 text-gold" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
