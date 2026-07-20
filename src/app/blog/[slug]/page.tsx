import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG_POSTS, getPost } from "@/lib/data/blog";
import { SITE } from "@/lib/site";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { BlogCard } from "@/components/cards/BlogCard";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { ArrowRight } from "@/components/ui/Icons";
import { formatDate } from "@/lib/format";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return pageMeta({ title: "Article", description: "", path: "/blog" });
  return pageMeta({
    title: post.metaTitle ?? post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: SITE.name },
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
  };

  return (
    <>
      <JsonLd
        data={[
          articleLd,
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />

      <article className="pt-32 lg:pt-40">
        <div className="container-site max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wide2 text-bone-faint">
              <li><Link href="/" className="hover:text-gold">Home</Link></li>
              <li aria-hidden>/</li>
              <li><Link href="/blog" className="hover:text-gold">Blog</Link></li>
            </ol>
          </nav>

          <Reveal className="flex flex-col gap-5">
            <div className="flex items-center gap-3 text-xs uppercase tracking-wide2 text-gold/80">
              <span>{post.category}</span>
              <span className="text-bone-faint">·</span>
              <time dateTime={post.date} className="text-bone-faint">
                {formatDate(post.date)}
              </time>
              <span className="text-bone-faint">·</span>
              <span className="text-bone-faint">{post.readingTime}</span>
            </div>
            <h1 className="text-balance text-4xl font-light leading-tight lg:text-5xl">
              {post.title}
            </h1>
            <p className="text-lg text-bone-muted">{post.excerpt}</p>
          </Reveal>
        </div>

        <div className="container-site mt-12 max-w-4xl">
          <ImageFrame
            media={post.cover}
            aspect="aspect-[16/9]"
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="shadow-luxe"
          />
        </div>

        <div className="container-site mt-12 max-w-3xl">
          <div className="prose-luxe flex flex-col gap-6">
            {post.body.map((block, i) => {
              if (block.type === "h2") {
                return (
                  <h2 key={i} className="mt-4 text-2xl font-light text-bone">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "note") {
                return (
                  <p
                    key={i}
                    className="border-l-2 border-gold/40 pl-4 text-sm italic leading-relaxed text-bone-faint"
                  >
                    {block.text}
                  </p>
                );
              }
              if (block.type === "table") {
                return (
                  <div
                    key={i}
                    className="overflow-x-auto rounded-2xl border border-white/10"
                  >
                    <table className="w-full min-w-[560px] text-left text-sm">
                      <thead>
                        <tr className="border-b border-white/10 bg-ink-800">
                          {block.headers.map((h) => (
                            <th
                              key={h}
                              className="px-4 py-3 text-xs font-medium uppercase tracking-wide2 text-gold"
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {block.rows.map((row, r) => (
                          <tr
                            key={r}
                            className={r % 2 ? "bg-ink-800/40" : "bg-ink-900"}
                          >
                            {row.map((cell, c) => (
                              <td
                                key={c}
                                className={`px-4 py-3 align-top leading-relaxed ${
                                  c === 0 ? "text-bone" : "text-bone-muted"
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              }
              return (
                <p key={i} className="text-base leading-relaxed text-bone-muted">
                  {block.text}
                </p>
              );
            })}
          </div>

          <div className="mt-12 border-t border-white/5 pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-bone-muted hover:text-gold"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
              Back to all articles
            </Link>
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="container-site mt-24">
        <h2 className="text-2xl font-light">Continue reading</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {related.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.1}>
              <BlogCard post={p} />
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
