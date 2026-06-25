import type { Metadata } from "next";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { FaqExplorer } from "@/components/faq/FaqExplorer";
import { FAQS } from "@/lib/data/faq";

export const metadata: Metadata = pageMeta({
  title: "FAQ",
  description:
    "Frequently asked questions about Citadel K9s — reserving a puppy, health guarantees, registration, temperament, shipping and visiting.",
  path: "/faq",
});

export default function FaqPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <JsonLd
        data={[
          faqLd,
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Answers"
        title="Frequently asked questions"
        description="Everything you need to know about bringing home a Citadel K9s German Shepherd. Can't find your answer? We're a message away."
        crumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
      />

      <section className="container-site max-w-4xl py-16 lg:py-24">
        <FaqExplorer />
      </section>

      <CTASection title="Still have a question?" />
    </>
  );
}
