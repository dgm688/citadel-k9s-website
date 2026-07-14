import { ImageFrame } from "@/components/ui/ImageFrame";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight, WhatsApp } from "@/components/ui/Icons";
import { whatsappLink } from "@/lib/site";

/**
 * Real-photography showcase for the homepage. Shown in place of a featured
 * puppy while none is available — invites visitors to see the dogs and the
 * kennel, and to arrange a visit.
 */
export function KennelShowcase() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-ink-800/30 py-24 lg:py-32">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="order-2 grid grid-cols-2 gap-4 lg:order-1">
          <ImageFrame
            media={{
              src: "/images/gallery/adult-stack.jpg",
              alt: "Citadel K9s long-coat black and red German Shepherd standing in profile",
            }}
            aspect="aspect-[4/5]"
            priority
            sizes="(max-width: 1024px) 50vw, 25vw"
            className="shadow-luxe"
          />
          <div className="mt-8 flex flex-col gap-4">
            <ImageFrame
              media={{
                src: "/images/gallery/young-sit-2.jpg",
                alt: "A young Citadel K9s German Shepherd sitting proudly",
              }}
              aspect="aspect-square"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
            <ImageFrame
              media={{
                src: "/images/gallery/adult-portrait-1.jpg",
                alt: "A richly coated German Shepherd resting in a garden",
              }}
              aspect="aspect-square"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="order-1 flex flex-col gap-6 lg:order-2">
          <span className="eyebrow">Our Dogs</span>
          <h2 className="text-balance text-4xl font-light lg:text-5xl">
            Real dogs. Real standards. See for yourself.
          </h2>
          <p className="text-lg leading-relaxed text-bone-muted">
            These are our actual German Shepherds — long-coat, richly pigmented,
            and raised in a working household. No stock photos, no borrowed
            images. Browse the gallery, then come and meet them in person.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <ButtonLink href="/gallery" variant="primary">
              View the gallery
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <a
              href={whatsappLink(
                "Hello Citadel K9s, I'd like to arrange a visit or video call to see your dogs.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <WhatsApp className="h-4 w-4" />
              Arrange a visit
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
