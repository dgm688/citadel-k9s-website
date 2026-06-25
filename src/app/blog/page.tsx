import type { Metadata } from "next";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { BlogCard } from "@/components/cards/BlogCard";
import { Reveal } from "@/components/ui/Reveal";
import { BLOG_POSTS } from "@/lib/data/blog";

export const metadata: Metadata = pageMeta({
  title: "Blog",
  description:
    "Expert guidance on German Shepherds from Citadel K9s — choosing a puppy, care, nutrition, training and life with the breed.",
  path: "/blog",
});

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <PageHero
        eyebrow="The Journal"
        title="Insight from the kennel."
        description="Practical, honest guidance on choosing, raising and living with a German Shepherd — written by people who do it every day."
        crumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      <section className="container-site py-16 lg:py-24">
        {featured && (
          <Reveal className="mb-12">
            <BlogCard post={featured} />
          </Reveal>
        )}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 0.1}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection title="Ready to find your German Shepherd?" />
    </>
  );
}
