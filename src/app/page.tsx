import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { Hero } from "@/components/home/Hero";
import { GuaranteeStrip } from "@/components/home/GuaranteeStrip";
import { BrandPillars } from "@/components/home/BrandPillars";
import { FeaturedPuppy } from "@/components/home/FeaturedPuppy";
import { KennelShowcase } from "@/components/home/KennelShowcase";
import { AVAILABLE_PUPPIES } from "@/lib/data/puppies";
import { WhyChoose } from "@/components/home/WhyChoose";
import { TransparencyLedger } from "@/components/home/TransparencyLedger";
import { CitadelDifference } from "@/components/home/CitadelDifference";
import { Journey } from "@/components/home/Journey";
import { TestimonialsPreview } from "@/components/home/TestimonialsPreview";
import { InstagramPreview } from "@/components/home/InstagramPreview";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = pageMeta({
  title: "Elite German Shepherds in Kenya",
  description:
    "Citadel K9s breeds German Shepherds in Kenya for structure, health and temperament — raised underfoot, with records at every step. Visit us, meet the parents, and judge our standards in person.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <GuaranteeStrip />
      <BrandPillars />
      {/* Featured puppy when one is available, otherwise a real-photo showcase */}
      {AVAILABLE_PUPPIES.length > 0 ? <FeaturedPuppy /> : <KennelShowcase />}
      <WhyChoose />
      <TransparencyLedger />
      <CitadelDifference />
      <Journey />
      {/* Renders only when genuine testimonials exist */}
      <TestimonialsPreview />
      <InstagramPreview />
      <CTASection />
    </>
  );
}
