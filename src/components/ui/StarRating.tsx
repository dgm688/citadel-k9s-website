import { Star } from "./Icons";

export function StarRating({ rating = 5 }: { rating?: number }) {
  return (
    <div
      className="flex items-center gap-1 text-gold"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "text-gold" : "text-ink-500"}`}
        />
      ))}
    </div>
  );
}
