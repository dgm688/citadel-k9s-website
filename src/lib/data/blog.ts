import type { BlogPost } from "@/lib/types";

/**
 * Placeholder, SEO-ready articles. Each is genuine, useful content —
 * replace or expand freely. Add a post by copying an entry.
 */
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "choosing-a-german-shepherd-puppy-in-kenya",
    title: "How to Choose a German Shepherd Puppy in Kenya",
    excerpt:
      "Structure, health and temperament matter far more than colour. Here is how to evaluate a breeder and a litter like a professional.",
    category: "Buyer's Guide",
    date: "2026-05-28",
    readingTime: "6 min read",
    author: "Citadel K9s",
    cover: {
      src: null,
      alt: "A young German Shepherd puppy being evaluated",
      label: "Buyer's Guide",
    },
    body: [
      {
        type: "p",
        text: "Bringing home a German Shepherd is a decision that will shape the next decade of your life. A well-bred puppy is a joy; a poorly bred one can mean years of health and behaviour challenges. The good news is that you do not need to be an expert to choose well — you simply need to know what to look for.",
      },
      { type: "h2", text: "Start with the breeder, not the puppy" },
      {
        type: "p",
        text: "The single best predictor of a healthy, stable adult dog is the breeder behind it. Ask to see health screening for the parents — hips and elbows at minimum. A serious breeder will offer this without hesitation, along with a written health guarantee and complete vaccination records.",
      },
      { type: "h2", text: "Prioritise temperament over colour" },
      {
        type: "p",
        text: "Coat colour is the easiest thing to fall in love with and the least important. What matters is a confident, curious puppy that recovers quickly from new experiences. Nervousness and extreme shyness in a young puppy rarely improve on their own.",
      },
      { type: "h2", text: "Look for early socialisation" },
      {
        type: "p",
        text: "Puppies raised underfoot — exposed to household sounds, gentle handling and varied surfaces — adapt far more easily to their new homes. Ask how the litter is being raised and what enrichment they receive.",
      },
      {
        type: "p",
        text: "At Citadel K9s, every litter is raised to this standard. If you would like guidance choosing your puppy, we are always happy to help.",
      },
    ],
  },
  {
    slug: "first-30-days-with-your-puppy",
    title: "The First 30 Days With Your New Puppy",
    excerpt:
      "A calm, structured arrival sets the tone for life. Our day-by-day framework for settling a German Shepherd puppy into your home.",
    category: "Puppy Care",
    date: "2026-05-12",
    readingTime: "7 min read",
    author: "Citadel K9s",
    cover: {
      src: null,
      alt: "A German Shepherd puppy resting in a new home",
      label: "Puppy Care",
    },
    body: [
      {
        type: "p",
        text: "The first month at home is where habits — good and bad — take root. With a little structure, you can give your puppy the confidence and routine that produce a calm, well-adjusted adult dog.",
      },
      { type: "h2", text: "Week one: safety and routine" },
      {
        type: "p",
        text: "Keep the world small at first. A defined sleeping area, consistent meal times and frequent toilet breaks help your puppy feel secure. Avoid overwhelming visitors; let your puppy come to people in their own time.",
      },
      { type: "h2", text: "Weeks two and three: gentle exposure" },
      {
        type: "p",
        text: "Begin short, positive exposures to new sounds, surfaces and people. Pair anything novel with praise and treats. This is the foundation of a bombproof temperament.",
      },
      { type: "h2", text: "Week four: foundations of obedience" },
      {
        type: "p",
        text: "Introduce a name, a recall and the beginnings of lead manners using reward-based methods. Keep sessions short and end on success. Consistency, not intensity, is what builds a reliable dog.",
      },
    ],
  },
  {
    slug: "nutrition-for-a-growing-shepherd",
    title: "Feeding a Growing German Shepherd: A Practical Guide",
    excerpt:
      "Correct nutrition during growth protects joints and builds a sound adult dog. What to feed, how much, and the mistakes to avoid.",
    category: "Health",
    date: "2026-04-30",
    readingTime: "5 min read",
    author: "Citadel K9s",
    cover: {
      src: null,
      alt: "A healthy German Shepherd at a feeding bowl",
      label: "Health",
    },
    body: [
      {
        type: "p",
        text: "German Shepherds grow quickly, and how you feed them during that growth has a lasting impact on their joints and overall structure. The goal is steady, controlled growth — not the fastest or biggest puppy.",
      },
      { type: "h2", text: "Choose a quality large-breed formula" },
      {
        type: "p",
        text: "Look for a complete, balanced large-breed puppy food with controlled calcium and appropriate protein. This supports steady bone development and reduces the risk of joint problems.",
      },
      { type: "h2", text: "Feed to body condition, not to the bowl" },
      {
        type: "p",
        text: "A growing shepherd should be lean. You should be able to feel the ribs easily under a light covering. Overfeeding accelerates growth in a way that stresses developing joints.",
      },
      { type: "h2", text: "Keep transitions gradual" },
      {
        type: "p",
        text: "When changing foods, do so over seven to ten days to protect digestion. We provide each family with a feeding guide tailored to their puppy's stage of growth.",
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
