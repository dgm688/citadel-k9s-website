import type { Metadata } from "next";
import type { ReactNode } from "react";
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
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icons";
import { formatDate } from "@/lib/format";

/**
 * Render inline `[text](/path)` links inside blog paragraphs so posts can
 * link into topic clusters and funnel authority to the money pages.
 * Internal paths use next/link; external URLs open in a new tab.
 */
function renderRich(text: string): ReactNode {
  const nodes: ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let k = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    const [, label, href] = m;
    nodes.push(
      href.startsWith("/") ? (
        <Link
          key={k++}
          href={href}
          className="text-gold underline decoration-gold/30 underline-offset-2 transition-colors hover:decoration-gold"
        >
          {label}
        </Link>
      ) : (
        <a
          key={k++}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold underline decoration-gold/30 underline-offset-2 hover:decoration-gold"
        >
          {label}
        </a>
      ),
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes.length > 0 ? nodes : text;
}

// Any slug not returned below yields a real 404 (not a soft 200).
export const dynamicParams = false;

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
    // No separate revision date is tracked yet; a post's modified date equals
    // its published date until it is genuinely revised.
    dateModified: post.date,
    ...(post.cover.src
      ? { image: new URL(post.cover.src, SITE.url).toString() }
      : {}),
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}/brand/icon-gold-512.png`,
      },
    },
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
                    {renderRich(block.text)}
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
                  {renderRich(block.text)}
                </p>
              );
            })}
          </div>

          <div className="mt-12 flex flex-col gap-6 rounded-2xl border border-gold/20 bg-ink-800/40 p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-bone">
              Ready to see who's currently available?
            </p>
            <ButtonLink href="/available-puppies" variant="primary" className="shrink-0">
              View available puppies
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>

          <div className="mt-8 border-t border-white/5 pt-8">
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
