import { AVAILABLE_PUPPIES } from "@/lib/data/puppies";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Check, ArrowRight } from "@/components/ui/Icons";
import { whatsappLink } from "@/lib/site";
import { WhatsApp } from "@/components/ui/Icons";

export function FeaturedPuppy() {
  const puppy = AVAILABLE_PUPPIES[0];
  if (!puppy) return null;

  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-ink-800/30 py-24 lg:py-32">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="relative">
          <ImageFrame
            media={puppy.hero}
            aspect="aspect-[4/5]"
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="shadow-luxe"
          />
          <div className="absolute -bottom-5 left-6 right-6 flex items-center justify-between rounded-xl border border-white/10 bg-ink/90 px-5 py-4 backdrop-blur sm:left-8 sm:right-auto">
            <div>
              <p className="text-xs uppercase tracking-wide2 text-bone-faint">
                Born
              </p>
              <p className="font-display text-lg text-bone">
                {new Date(puppy.dob).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-6">
          <span className="eyebrow">Featured · Available Now</span>
          <div className="flex items-center gap-3">
            <h2 className="text-4xl font-light lg:text-5xl">{puppy.name}</h2>
            <Badge tone="available">Available</Badge>
          </div>
          <p className="text-lg leading-relaxed text-bone-muted">
            {puppy.description}
          </p>

          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              `Sire: ${puppy.sire}`,
              `Dam: ${puppy.dam}`,
              `Colour: ${puppy.color}`,
              puppy.registration,
            ].map((line) => (
              <li
                key={line}
                className="inline-flex items-start gap-2 text-sm text-bone-muted"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {line}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4 pt-2">
            <ButtonLink href={`/available-puppies/${puppy.slug}`} variant="primary">
              View full details
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <a
              href={whatsappLink(
                `Hello Citadel K9s, I'm interested in ${puppy.name} (${puppy.litter}).`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <WhatsApp className="h-4 w-4" />
              Enquire on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
