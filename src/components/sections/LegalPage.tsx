import type { ReactNode } from "react";
import { PageHero } from "@/components/sections/PageHero";

export interface LegalSection {
  heading: string;
  body: string[];
}

export function LegalPage({
  title,
  updated,
  intro,
  sections,
  crumbLabel,
  crumbHref,
}: {
  title: string;
  updated: string;
  intro: ReactNode;
  sections: LegalSection[];
  crumbLabel: string;
  crumbHref: string;
}) {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={title}
        description={`Last updated: ${updated}`}
        crumbs={[{ label: "Home", href: "/" }, { label: crumbLabel, href: crumbHref }]}
      />
      <section className="container-site max-w-3xl py-16 lg:py-24">
        <p className="text-lg leading-relaxed text-bone-muted">{intro}</p>
        <div className="mt-10 flex flex-col gap-10">
          {sections.map((s, i) => (
            <div key={s.heading} className="flex flex-col gap-3">
              <h2 className="text-2xl font-light text-bone">
                <span className="mr-3 text-gold/50">{String(i + 1).padStart(2, "0")}</span>
                {s.heading}
              </h2>
              {s.body.map((p, j) => (
                <p key={j} className="leading-relaxed text-bone-muted">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
