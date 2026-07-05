import { TESTIMONIALS, HAS_TESTIMONIALS } from "@/lib/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/Icons";

/**
 * Renders nothing until genuine testimonials exist in the data layer.
 * We never display fabricated reviews.
 */
export function TestimonialsPreview() {
  if (!HAS_TESTIMONIALS) return null;

  return (
    <section className="container-site py-24 lg:py-32">
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="In their words"
          title="What Citadel families say."
        />
        <ButtonLink href="/testimonials" variant="ghost" className="shrink-0">
          All testimonials <ArrowRight className="h-4 w-4" />
        </ButtonLink>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.slice(0, 3).map((t, i) => (
          <Reveal key={t.name} delay={i * 0.1} className="h-full">
            <TestimonialCard t={t} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
