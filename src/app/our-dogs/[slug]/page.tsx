import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PUBLISHED_DOGS, getDog } from "@/lib/data/dogs";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { Check, ArrowRight } from "@/components/ui/Icons";
import { formatDate } from "@/lib/format";

export function generateStaticParams() {
  return PUBLISHED_DOGS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const dog = getDog(slug);
  if (!dog) return pageMeta({ title: "Dog", description: "", path: "/our-dogs" });
  return pageMeta({
    title: dog.name,
    description: `${dog.name} — ${dog.role}. ${dog.description}`,
    path: `/our-dogs/${dog.slug}`,
  });
}

export default async function DogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dog = getDog(slug);
  if (!dog) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Our Dogs", path: "/our-dogs" },
          { name: dog.name, path: `/our-dogs/${dog.slug}` },
        ])}
      />

      <article className="pt-32 lg:pt-40">
        <div className="container-site">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wide2 text-bone-faint">
              <li>
                <Link href="/" className="hover:text-gold">Home</Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/our-dogs" className="hover:text-gold">Our Dogs</Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-gold">{dog.name}</li>
            </ol>
          </nav>

          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <ImageFrame
                media={dog.hero}
                aspect="aspect-[4/5]"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="shadow-luxe"
              />
            </Reveal>

            <Reveal delay={0.1} className="flex flex-col gap-6">
              <div className="flex flex-wrap items-center gap-3">
                <Badge tone="gold">{dog.role}</Badge>
                {dog.bloodline && (
                  <span className="text-xs uppercase tracking-wide2 text-bone-faint">
                    {dog.bloodline}
                  </span>
                )}
              </div>
              <h1 className="text-4xl font-light lg:text-5xl">{dog.name}</h1>
              {dog.titles && (
                <p className="text-sm uppercase tracking-wide2 text-gold">
                  {dog.titles}
                </p>
              )}
              <p className="text-base leading-relaxed text-bone-muted">
                {dog.description}
              </p>

              <dl className="grid grid-cols-2 gap-4 border-t border-white/5 pt-6 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-wide2 text-bone-faint">Sex</dt>
                  <dd className="mt-1 text-bone">{dog.sex}</dd>
                </div>
                {dog.color && (
                  <div>
                    <dt className="text-xs uppercase tracking-wide2 text-bone-faint">Colour</dt>
                    <dd className="mt-1 text-bone">{dog.color}</dd>
                  </div>
                )}
                {dog.dob && (
                  <div>
                    <dt className="text-xs uppercase tracking-wide2 text-bone-faint">Born</dt>
                    <dd className="mt-1 text-bone">{formatDate(dog.dob)}</dd>
                  </div>
                )}
                {dog.bloodline && (
                  <div>
                    <dt className="text-xs uppercase tracking-wide2 text-bone-faint">Bloodline</dt>
                    <dd className="mt-1 text-bone">{dog.bloodline}</dd>
                  </div>
                )}
              </dl>
            </Reveal>
          </div>
        </div>

        {/* Detail panels */}
        <div className="container-site mt-20 grid gap-8 lg:grid-cols-3">
          <Reveal className="panel flex flex-col gap-4 p-7">
            <h2 className="text-xl font-light">Pedigree</h2>
            {dog.pedigree ? (
              <ul className="space-y-3 text-sm text-bone-muted">
                <li>
                  <span className="text-xs uppercase tracking-wide2 text-bone-faint">Sire</span>
                  <br />
                  {dog.pedigree.sire}
                </li>
                <li>
                  <span className="text-xs uppercase tracking-wide2 text-bone-faint">Dam</span>
                  <br />
                  {dog.pedigree.dam}
                </li>
                {dog.pedigree.kennel && (
                  <li>
                    <span className="text-xs uppercase tracking-wide2 text-bone-faint">Kennel</span>
                    <br />
                    {dog.pedigree.kennel}
                  </li>
                )}
              </ul>
            ) : (
              <p className="text-sm leading-relaxed text-bone-muted">
                Taken directly from registration papers and shared during your
                enquiry or visit.
              </p>
            )}
          </Reveal>

          <Reveal delay={0.1} className="panel flex flex-col gap-4 p-7">
            <h2 className="text-xl font-light">Health</h2>
            {dog.health && dog.health.length > 0 ? (
              <ul className="space-y-2.5 text-sm text-bone-muted">
                {dog.health.map((h) => (
                  <li key={h} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {h}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm leading-relaxed text-bone-muted">
                We publish only health information we can document. Ask us
                anything about this dog&apos;s health record directly.
              </p>
            )}
          </Reveal>

          <Reveal delay={0.2} className="panel flex flex-col gap-4 p-7">
            <h2 className="text-xl font-light">Titles & Training</h2>
            {dog.achievements && dog.achievements.length > 0 ? (
              <ul className="space-y-2.5 text-sm text-bone-muted">
                {dog.achievements.map((a) => (
                  <li key={a} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {a}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm leading-relaxed text-bone-muted">
                Listed only when we hold the certificates — no invented
                titles, ever.
              </p>
            )}
          </Reveal>
        </div>

        {/* Gallery */}
        <section className="container-site mt-20">
          <h2 className="text-2xl font-light">Gallery</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {dog.gallery.map((m, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <ImageFrame
                  media={m}
                  aspect="aspect-[4/5]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </Reveal>
            ))}
          </div>
        </section>

        <div className="container-site mt-16">
          <Link
            href="/our-dogs"
            className="inline-flex items-center gap-2 text-sm text-bone-muted hover:text-gold"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            Back to all dogs
          </Link>
        </div>
      </article>

      <CTASection title={`Interested in a puppy from ${dog.callName ?? dog.name}?`} />
    </>
  );
}
