import type { Metadata } from "next";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { SITE, CONTACT, whatsappLink } from "@/lib/site";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  WhatsApp,
} from "@/components/ui/Icons";

export const metadata: Metadata = pageMeta({
  title: "Contact a German Shepherd Breeder in Kenya",
  description:
    "Contact Citadel K9s, a German Shepherd breeder in Nairobi, Kenya — WhatsApp, phone, email and Instagram. Enquire about German Shepherd puppies, arrange a visit or join the waiting list.",
  path: "/contact",
});

const methods = [
  {
    icon: WhatsApp,
    label: "WhatsApp",
    value: CONTACT.whatsappDisplay,
    href: whatsappLink("Hello Citadel K9s, I'd like to enquire."),
    external: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: CONTACT.phoneDisplay,
    href: `tel:${CONTACT.phoneE164}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: CONTACT.instagramHandle,
    href: CONTACT.instagram,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHero
        eyebrow="Get In Touch"
        title="Let's talk."
        description="Every enquiry is answered personally. Reach out however suits you best — we'd love to help you find your German Shepherd."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="container-site py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          {/* Methods */}
          <div className="flex flex-col gap-6">
            {methods.map((m, i) => {
              const Icon = m.icon;
              return (
                <Reveal key={m.label} delay={i * 0.08}>
                  <a
                    href={m.href}
                    {...(m.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex items-center gap-5 rounded-2xl border border-white/5 bg-ink-800/40 p-6 transition-colors hover:border-gold/30"
                  >
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-xs uppercase tracking-wide2 text-bone-faint">
                        {m.label}
                      </span>
                      <span className="text-lg text-bone group-hover:text-gold">
                        {m.value}
                      </span>
                    </span>
                  </a>
                </Reveal>
              );
            })}

            <Reveal delay={0.3} className="flex items-start gap-5 rounded-2xl border border-white/5 bg-ink-800/40 p-6">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
                <MapPin className="h-5 w-5" />
              </span>
              <span className="flex flex-col">
                <span className="text-xs uppercase tracking-wide2 text-bone-faint">
                  Location
                </span>
                <span className="text-lg text-bone">
                  {SITE.city}, {SITE.country}
                </span>
                <a
                  href={CONTACT.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 text-sm text-gold hover:underline"
                >
                  Open in Google Maps →
                </a>
              </span>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="container-site pb-24">
        <Reveal className="overflow-hidden rounded-2xl border border-white/5">
          <iframe
            title="Citadel K9s location on Google Maps"
            src="https://www.google.com/maps?q=Nairobi,Kenya&output=embed"
            className="h-[420px] w-full grayscale-[0.3]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </section>
    </>
  );
}
