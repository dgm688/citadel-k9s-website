import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PUPPIES, getPuppy } from "@/lib/data/puppies";
import { PUBLISHED_DOGS } from "@/lib/data/dogs";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";
import { SITE, whatsappLink } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { WaitingListForm } from "@/components/forms/WaitingListForm";
import { Check, WhatsApp, ArrowRight } from "@/components/ui/Icons";
import { formatDate, ageInWeeks } from "@/lib/format";

const statusTone = {
  Available: "available",
  Reserved: "reserved",
  Sold: "sold",
} as const;

export function generateStaticParams() {
  return PUPPIES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const puppy = getPuppy(slug);
  if (!puppy)
    return pageMeta({ title: "Puppy", description: "", path: "/available-puppies" });
  return pageMeta({
    title: puppy.name,
    description: `${puppy.name} — ${puppy.sex} German Shepherd puppy in Kenya. ${puppy.temperament}`,
    path: `/available-puppies/${puppy.slug}`,
  });
}

function dogSlugByName(name: string | null) {
  if (!name) return undefined;
  return PUBLISHED_DOGS.find((d) => d.name === name)?.slug;
}

export default async function PuppyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const puppy = getPuppy(slug);
  if (!puppy) notFound();

  const sireSlug = dogSlugByName(puppy.sire);
  const damSlug = dogSlugByName(puppy.dam);

  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${puppy.name} — German Shepherd Puppy`,
    description: puppy.description,
    category: "German Shepherd Dog",
    brand: { "@type": "Brand", name: SITE.name },
    offers: {
      "@type": "Offer",
      availability:
        puppy.status === "Available"
          ? "https://schema.org/InStock"
          : "https://schema.org/SoldOut",
      priceCurrency: "KES",
      url: `${SITE.url}/available-puppies/${puppy.slug}`,
    },
  };

  return (
    <>
      <JsonLd
        data={[
          productLd,
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Available Puppies", path: "/available-puppies" },
            { name: puppy.name, path: `/available-puppies/${puppy.slug}` },
          ]),
        ]}
      />

      <article className="pt-32 lg:pt-40">
        <div className="container-site">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wide2 text-bone-faint">
              <li><Link href="/" className="hover:text-gold">Home</Link></li>
              <li aria-hidden>/</li>
              <li><Link href="/available-puppies" className="hover:text-gold">Available Puppies</Link></li>
              <li aria-hidden>/</li>
              <li className="text-gold">{puppy.name}</li>
            </ol>
          </nav>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Gallery */}
            <Reveal className="flex flex-col gap-4">
              <ImageFrame
                media={puppy.hero}
                aspect="aspect-[4/5]"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="shadow-luxe"
              />
              <div className="grid grid-cols-4 gap-3">
                {puppy.gallery.map((m, i) => (
                  <ImageFrame
                    key={i}
                    media={m}
                    aspect="aspect-square"
                    rounded="rounded-xl"
                    sizes="20vw"
                  />
                ))}
              </div>
            </Reveal>

            {/* Info */}
            <Reveal delay={0.1} className="flex flex-col gap-6">
              <div className="flex flex-wrap items-center gap-3">
                <Badge tone={statusTone[puppy.status]}>{puppy.status}</Badge>
                {puppy.litter && (
                  <span className="text-xs uppercase tracking-wide2 text-bone-faint">
                    {puppy.litter}
                  </span>
                )}
              </div>
              <h1 className="text-4xl font-light lg:text-5xl">{puppy.name}</h1>

              <p className="text-base leading-relaxed text-bone-muted">
                {puppy.description}
              </p>

              <dl className="grid grid-cols-2 gap-4 border-y border-white/5 py-6 text-sm sm:grid-cols-3">
                <div>
                  <dt className="text-xs uppercase tracking-wide2 text-bone-faint">Sex</dt>
                  <dd className="mt-1 text-bone">{puppy.sex}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide2 text-bone-faint">Colour</dt>
                  <dd className="mt-1 text-bone">{puppy.color ?? "Confirmed on enquiry"}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide2 text-bone-faint">Born</dt>
                  <dd className="mt-1 text-bone">
                    {puppy.dob ? formatDate(puppy.dob) : "Confirmed on enquiry"}
                  </dd>
                </div>
                {puppy.dob && (
                  <div>
                    <dt className="text-xs uppercase tracking-wide2 text-bone-faint">Age</dt>
                    <dd className="mt-1 text-bone">{ageInWeeks(puppy.dob)} weeks</dd>
                  </div>
                )}
                <div>
                  <dt className="text-xs uppercase tracking-wide2 text-bone-faint">Price</dt>
                  <dd className="mt-1 text-bone">{puppy.price ?? "On request"}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide2 text-bone-faint">Registration</dt>
                  <dd className="mt-1 text-bone">Included</dd>
                </div>
              </dl>

              {/* Parents */}
              <div className="grid grid-cols-2 gap-4">
                <ParentLink role="Sire" name={puppy.sire} slug={sireSlug} />
                <ParentLink role="Dam" name={puppy.dam} slug={damSlug} />
              </div>

              <a
                href={whatsappLink(
                  `Hello Citadel K9s, I'm interested in the available puppy. Is he still available? Could we arrange a video call or visit?`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <WhatsApp className="h-4 w-4" />
                Enquire about {puppy.name}
              </a>
            </Reveal>
          </div>
        </div>

        {/* Spec panels */}
        <div className="container-site mt-20 grid gap-8 md:grid-cols-3">
          <SpecPanel title="Temperament">
            <p className="text-sm leading-relaxed text-bone-muted">
              {puppy.temperament}
            </p>
          </SpecPanel>
          <SpecPanel title="Health & guarantee">
            <SpecList items={puppy.health} />
          </SpecPanel>
          <SpecPanel title="Vaccination & deworming">
            <SpecList items={puppy.vaccination} />
          </SpecPanel>
        </div>

        {/* Reserve */}
        <section className="container-site mt-20">
          <div className="panel grid gap-10 p-8 lg:grid-cols-[1fr_1.1fr] lg:p-12">
            <div className="flex flex-col gap-4">
              <span className="eyebrow">Reserve {puppy.name}</span>
              <h2 className="text-3xl font-light">Begin the reservation.</h2>
              <p className="text-bone-muted">
                Complete the form and we&apos;ll be in touch personally to guide
                you through the next steps. Prefer to talk? Message us on
                WhatsApp any time.
              </p>
            </div>
            <WaitingListForm puppyName={puppy.name} />
          </div>
        </section>

        <div className="container-site mt-16">
          <Link
            href="/available-puppies"
            className="inline-flex items-center gap-2 text-sm text-bone-muted hover:text-gold"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            Back to available puppies
          </Link>
        </div>
      </article>

      <div className="h-16" />
    </>
  );
}

function ParentLink({
  role,
  name,
  slug,
}: {
  role: string;
  name: string | null;
  slug?: string;
}) {
  const inner = (
    <>
      <span className="text-xs uppercase tracking-wide2 text-bone-faint">{role}</span>
      <span className="mt-1 block text-bone">
        {name ?? "Introduced on enquiry & visits"}
      </span>
    </>
  );
  return slug ? (
    <Link
      href={`/our-dogs/${slug}`}
      className="rounded-xl border border-white/10 p-4 transition-colors hover:border-gold/40"
    >
      {inner}
    </Link>
  ) : (
    <div className="rounded-xl border border-white/10 p-4">{inner}</div>
  );
}

function SpecPanel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal className="panel flex flex-col gap-4 p-7">
      <h2 className="text-xl font-light">{title}</h2>
      {children}
    </Reveal>
  );
}

function SpecList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5 text-sm text-bone-muted">
      {items.map((i) => (
        <li key={i} className="flex items-start gap-2">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
          {i}
        </li>
      ))}
    </ul>
  );
}
