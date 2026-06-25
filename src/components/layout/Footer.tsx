import Link from "next/link";
import {
  SITE,
  CONTACT,
  NAV,
  LEGAL_NAV,
  whatsappLink,
} from "@/lib/site";
import { Logo } from "@/components/ui/Logo";
import { Newsletter } from "@/components/ui/Newsletter";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  WhatsApp,
} from "@/components/ui/Icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-white/5 bg-ink-900">
      {/* Newsletter band */}
      <div className="border-b border-white/5">
        <div className="container-site grid gap-8 py-14 md:grid-cols-2 md:items-center">
          <div>
            <span className="eyebrow">The Citadel Circle</span>
            <h2 className="mt-4 text-2xl font-light sm:text-3xl">
              Be first to know when a litter is planned.
            </h2>
            <p className="mt-3 max-w-md text-sm text-bone-muted">
              Occasional updates on upcoming litters, available puppies and care
              guidance. No noise — only what matters.
            </p>
          </div>
          <Newsletter />
        </div>
      </div>

      <div className="container-site grid gap-12 py-16 lg:grid-cols-[1.3fr_1fr_1fr]">
        {/* Brand */}
        <div className="flex flex-col gap-6">
          <Logo />
          <p className="max-w-sm text-sm leading-relaxed text-bone-muted">
            {SITE.shortDescription}
          </p>
          <p className="text-xs uppercase tracking-luxe text-gold">
            {SITE.tagline}
          </p>
          <div className="flex gap-3">
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Citadel K9s on Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-bone-muted transition-colors hover:border-gold hover:text-gold"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Citadel K9s on WhatsApp"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-bone-muted transition-colors hover:border-gold hover:text-gold"
            >
              <WhatsApp className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Explore */}
        <nav aria-label="Footer">
          <h3 className="text-xs uppercase tracking-luxe text-bone-faint">
            Explore
          </h3>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-bone-muted transition-colors hover:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h3 className="text-xs uppercase tracking-luxe text-bone-faint">
            Get in touch
          </h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li>
              <a
                href={`tel:${CONTACT.phoneE164}`}
                className="inline-flex items-center gap-3 text-bone-muted transition-colors hover:text-gold"
              >
                <Phone className="h-4 w-4 text-gold" />
                {CONTACT.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center gap-3 text-bone-muted transition-colors hover:text-gold"
              >
                <Mail className="h-4 w-4 text-gold" />
                {CONTACT.email}
              </a>
            </li>
            <li>
              <a
                href={CONTACT.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-bone-muted transition-colors hover:text-gold"
              >
                <MapPin className="h-4 w-4 text-gold" />
                {SITE.city}, {SITE.country}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container-site flex flex-col items-center justify-between gap-4 py-6 text-xs text-bone-faint sm:flex-row">
          <p>
            © {year} {SITE.legalName}. All rights reserved.
          </p>
          <ul className="flex items-center gap-6">
            {LEGAL_NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
