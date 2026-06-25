import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { whatsappLink } from "@/lib/site";
import { WhatsApp, ArrowRight } from "@/components/ui/Icons";

interface CTASectionProps {
  title?: string;
  description?: string;
}

export function CTASection({
  title = "Begin your Citadel journey.",
  description = "Whether you're ready to reserve or simply have questions, we'd be delighted to hear from you. Every enquiry is answered personally.",
}: CTASectionProps) {
  return (
    <section className="container-site py-24 lg:py-32">
      <Reveal className="relative overflow-hidden rounded-3xl border border-gold/20 bg-ink-800 px-8 py-16 text-center sm:px-12 lg:py-24">
        <div
          aria-hidden
          className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/15 blur-[100px]"
        />
        <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
          <span className="eyebrow">Citadel K9s</span>
          <h2 className="text-balance text-3xl font-light sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-bone-muted sm:text-lg">
            {description}
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappLink(
                "Hello Citadel K9s, I'd like to enquire about your German Shepherds.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <WhatsApp className="h-4 w-4" />
              Chat on WhatsApp
            </a>
            <ButtonLink href="/contact" variant="outline">
              Contact us
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
