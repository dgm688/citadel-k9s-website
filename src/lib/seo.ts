import type { Metadata } from "next";
import { SITE, CONTACT } from "./site";

interface PageMetaInput {
  title: string;
  description: string;
  path?: string;
  /** Social-share image. Defaults to a real photo of our dogs — links
   *  shared on WhatsApp/socials show the dog, not a text card. */
  image?: string;
}

/** Build consistent, SEO-complete metadata for any page. */
export function pageMeta({
  title,
  description,
  path = "/",
  image = SITE.ogImage,
}: PageMetaInput): Metadata {
  const url = new URL(path, SITE.url).toString();
  // `title` stays bare so the root layout's title template appends the brand
  // exactly once. Open Graph/Twitter ignore the template, so use the full form.
  const fullTitle = `${title} · ${SITE.name}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: SITE.name,
      title: fullTitle,
      description,
      locale: SITE.locale,
      ...(image
        ? {
            images: [
              {
                url: image,
                width: 1920,
                height: 1080,
                alt: "A Citadel K9s long-coat German Shepherd",
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}

/**
 * Rich LocalBusiness structured data for the whole site. Helps Google
 * understand what Citadel K9s is, where it operates, and what it offers —
 * important for local and commercial search.
 */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.url}#organization`,
    name: SITE.name,
    alternateName: "Citadel K9s Kenya",
    description: SITE.shortDescription,
    url: SITE.url,
    telephone: CONTACT.phoneE164,
    email: CONTACT.email,
    slogan: SITE.tagline,
    image: `${SITE.url}${SITE.ogImage}`,
    logo: `${SITE.url}/brand/icon-gold-512.png`,
    priceRange: "$$",
    // Matches the verified Google Business Profile (Ruaka, Kiambu) for
    // NAP consistency — a local-ranking signal Google cross-checks.
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.locality,
      addressRegion: SITE.county,
      addressCountry: "KE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    areaServed: [
      { "@type": "Country", name: "Kenya" },
      { "@type": "City", name: "Nairobi" },
    ],
    sameAs: [CONTACT.instagram],
    knowsAbout: [
      "German Shepherd Dogs",
      "German Shepherd puppies",
      "Long coat German Shepherds",
      "Responsible dog breeding",
      "Puppy care",
    ],
    // Described as a Service (not a Product) so it doesn't trigger Google's
    // Product-snippet requirement for price/review/rating — which we won't
    // fabricate. The puppy detail page carries the real Product schema.
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "German Shepherd puppies",
        serviceType: "German Shepherd breeding",
      },
      areaServed: { "@type": "Country", name: "Kenya" },
      availability: "https://schema.org/LimitedAvailability",
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    alternateName: "Citadel K9s Kenya",
    url: SITE.url,
    inLanguage: "en-KE",
    publisher: { "@id": `${SITE.url}#organization` },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: new URL(item.path, SITE.url).toString(),
    })),
  };
}
