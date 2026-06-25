import Link from "next/link";
import type { BlogPost } from "@/lib/types";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { formatDate } from "@/lib/format";
import { ArrowUpRight } from "@/components/ui/Icons";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden panel transition-transform duration-500 hover:-translate-y-1"
    >
      <ImageFrame
        media={post.cover}
        aspect="aspect-[16/10]"
        rounded="rounded-none"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center gap-3 text-xs uppercase tracking-wide2 text-gold/80">
          <span>{post.category}</span>
          <span className="text-bone-faint">·</span>
          <span className="text-bone-faint">{post.readingTime}</span>
        </div>
        <h3 className="text-xl font-light leading-snug group-hover:text-gold">
          {post.title}
        </h3>
        <p className="line-clamp-2 text-sm text-bone-muted">{post.excerpt}</p>
        <div className="mt-auto flex items-center justify-between pt-4 text-xs text-bone-faint">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <ArrowUpRight className="h-4 w-4 text-gold opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
      </div>
    </Link>
  );
}
