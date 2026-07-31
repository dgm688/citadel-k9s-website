import { TESTIMONIALS, HAS_TESTIMONIALS } from "@/lib/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialsShowcase } from "@/components/testimonials/TestimonialsShowcase";
import { ButtonLink } from "@/components/ui/Button";
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

      <TestimonialsShowcase items={TESTIMONIALS.slice(0, 3)} className="mt-16" />
    </section>
  );
}
