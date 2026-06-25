import { Hero } from "@/components/home/Hero";
import { GuaranteeStrip } from "@/components/home/GuaranteeStrip";
import { BrandPillars } from "@/components/home/BrandPillars";
import { FeaturedPuppy } from "@/components/home/FeaturedPuppy";
import { Stats } from "@/components/home/Stats";
import { WhyChoose } from "@/components/home/WhyChoose";
import { CitadelDifference } from "@/components/home/CitadelDifference";
import { Journey } from "@/components/home/Journey";
import { TestimonialsPreview } from "@/components/home/TestimonialsPreview";
import { InstagramPreview } from "@/components/home/InstagramPreview";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <GuaranteeStrip />
      <BrandPillars />
      <FeaturedPuppy />
      <Stats />
      <WhyChoose />
      <CitadelDifference />
      <Journey />
      <TestimonialsPreview />
      <InstagramPreview />
      <CTASection />
    </>
  );
}
