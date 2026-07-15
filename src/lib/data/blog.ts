import type { BlogPost } from "@/lib/types";

/**
 * SEO articles targeting real Kenyan search intent. Every article is
 * genuine, useful guidance — no invented statistics, prices or claims.
 * Add a post by copying an entry; covers use real photography.
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
      src: "/images/gallery/young-front.jpg",
      alt: "A young German Shepherd puppy sitting attentively",
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
      src: "/images/gallery/young-sit-1.jpg",
      alt: "A young German Shepherd settled at its new home",
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
      src: "/images/gallery/adult-portrait-3.jpg",
      alt: "A healthy, well-conditioned German Shepherd lying on the grass",
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
  {
    slug: "avoid-puppy-scams-kenya",
    title: "How to Avoid Puppy Scams in Kenya",
    excerpt:
      "Fake litters, stolen photos and pressure tactics cost Kenyan buyers real money every week. Here is exactly how to verify a breeder before you send a shilling.",
    category: "Buyer's Guide",
    date: "2026-06-20",
    readingTime: "6 min read",
    author: "Citadel K9s",
    cover: {
      src: "/images/gallery/young-sit-2.jpg",
      alt: "A young German Shepherd photographed honestly at the breeder's home",
      label: "Avoiding Scams",
    },
    body: [
      {
        type: "p",
        text: "Puppy scams thrive because buyers fall in love before they verify. The scammer's toolkit is always the same: beautiful stolen photos, a price slightly too good to refuse, a reason you can't visit, and pressure to pay a deposit today. Every protection below costs you nothing.",
      },
      { type: "h2", text: "Insist on a live video call" },
      {
        type: "p",
        text: "Not photos. Not pre-recorded clips. A live video call where you ask the seller to show the puppy from different angles, show the mother, and respond to you in real time. A legitimate breeder will do this happily — a scammer cannot.",
      },
      { type: "h2", text: "Visit before you pay" },
      {
        type: "p",
        text: "If you are within reach, visit. You should see where the dogs actually live and meet the puppy's mother. Breeders may reasonably ask for an appointment to protect young litters — but a flat refusal to ever meet is a walk-away signal.",
      },
      { type: "h2", text: "Demand records, not promises" },
      {
        type: "p",
        text: "Ask what written documentation comes with the puppy: veterinary check, deworming schedule, vaccination record, registration paperwork. Ask to see examples. Vague answers about 'full papers' that never materialise are a classic tell.",
      },
      { type: "h2", text: "Distrust urgency" },
      {
        type: "p",
        text: "'Someone else wants him, pay now to secure' is the oldest trick in the book. A responsible breeder cares more about where the puppy ends up than how fast the deposit lands.",
      },
      {
        type: "p",
        text: "We built Citadel K9s to pass every one of these tests: live video calls on request, visits by appointment, and written records with every puppy. Test us — we welcome it.",
      },
    ],
  },
  {
    slug: "german-shepherd-price-kenya",
    title: "What Determines a German Shepherd's Price in Kenya?",
    excerpt:
      "Prices vary enormously — and the cheapest puppy is rarely the cheapest dog. Here's what you're actually paying for, and where corners get cut.",
    category: "Buyer's Guide",
    date: "2026-06-10",
    readingTime: "5 min read",
    author: "Citadel K9s",
    cover: {
      src: "/images/gallery/adult-handler.jpg",
      alt: "A Citadel K9s German Shepherd with its handler",
      label: "Price Guide",
    },
    body: [
      {
        type: "p",
        text: "Ask five sellers for a German Shepherd price in Kenya and you'll get five very different numbers. The difference is rarely the puppy you see — it's everything you can't see: the health work, the rearing and the lineage behind it.",
      },
      { type: "h2", text: "What a fair price includes" },
      {
        type: "p",
        text: "Quality nutrition for the dam and litter, deworming every two weeks, veterinary examination, age-appropriate vaccination, registration paperwork, and weeks of daily socialisation work. Each of these has a real cost. When a price looks impossibly low, one or more of them was skipped — and you inherit the consequences.",
      },
      { type: "h2", text: "Why lineage matters to price" },
      {
        type: "p",
        text: "A puppy from documented, health-conscious breeding costs more to produce than one from unplanned mating. You're paying for a decade of predictability: temperament, structure and working ability you can reasonably expect.",
      },
      { type: "h2", text: "The real cost of a cheap puppy" },
      {
        type: "p",
        text: "Veterinary treatment for a poorly reared puppy routinely exceeds any saving on the purchase price — before counting the heartbreak. Budget for the dog, not just the day you collect it.",
      },
      {
        type: "p",
        text: "We quote clearly on enquiry, explain exactly what's included, and never add surprises. Message us on WhatsApp for a straight answer.",
      },
    ],
  },
  {
    slug: "working-line-vs-show-line-german-shepherds",
    title: "Working Line vs Show Line German Shepherds: Which Is Right for You?",
    excerpt:
      "Both are real German Shepherds — but they're bred for different lives. Choosing the wrong type is the most common mismatch we see.",
    category: "Breed Education",
    date: "2026-05-20",
    readingTime: "6 min read",
    author: "Citadel K9s",
    cover: {
      src: "/images/gallery/adult-indoor.jpg",
      alt: "A long-coat German Shepherd relaxing indoors",
      label: "Breed Education",
    },
    body: [
      {
        type: "p",
        text: "German Shepherds are bred along two broad paths. Working lines are selected first for drive, nerve and utility; show lines for conformation to the breed standard with a calmer household energy. Neither is 'better' — they suit different homes.",
      },
      { type: "h2", text: "Working lines" },
      {
        type: "p",
        text: "Higher energy, intense focus and a genuine need for a job — sport, security work, or serious daily training. In an under-stimulated home, that drive turns into frustration. In the right hands, a working line is a phenomenal partner.",
      },
      { type: "h2", text: "Show lines" },
      {
        type: "p",
        text: "Typically calmer in the home while remaining alert and protective. For most Kenyan families wanting a devoted companion and a serious deterrent, a well-bred show-line or moderate-line dog is the more realistic fit.",
      },
      { type: "h2", text: "How to choose" },
      {
        type: "p",
        text: "Be honest about your daily routine — hours available, space, experience. Tell the breeder the life you actually live, not the one you aspire to. A good breeder will match the puppy to the home, and should be willing to say 'this puppy is not for you'.",
      },
    ],
  },
  {
    slug: "long-coat-vs-stock-coat-german-shepherds",
    title: "Long Coat vs Stock Coat German Shepherds",
    excerpt:
      "The coat affects grooming, heat comfort and looks — not temperament. What Kenyan owners should know before choosing.",
    category: "Breed Education",
    date: "2026-05-05",
    readingTime: "4 min read",
    author: "Citadel K9s",
    cover: {
      src: "/images/gallery/adult-portrait-1.jpg",
      alt: "A richly coated long-coat German Shepherd in a garden",
      label: "Coat Types",
    },
    body: [
      {
        type: "p",
        text: "German Shepherds come in two recognised coat types: the classic stock coat (short, dense, weather-resistant) and the long coat, with feathering on the ears, legs and tail. Both shed. Both are the same dog underneath.",
      },
      { type: "h2", text: "Stock coat" },
      {
        type: "p",
        text: "The practical choice: less grooming, faster drying, slightly easier in heat. The double coat insulates in both directions — never shave it.",
      },
      { type: "h2", text: "Long coat" },
      {
        type: "p",
        text: "Undeniably striking, and often slightly softer in look. Expect several grooming sessions a week and more attention after rain and mud. In most of Kenya's climate a long coat is perfectly manageable with routine care.",
      },
      { type: "h2", text: "What coat doesn't change" },
      {
        type: "p",
        text: "Temperament, trainability and health are set by breeding and rearing — not coat length. Choose the breeder first, the litter second, and the coat last.",
      },
    ],
  },
  {
    slug: "are-german-shepherds-good-for-kenyan-homes",
    title: "Are German Shepherds Good for Kenyan Homes?",
    excerpt:
      "Heat, compound living, security, family life — an honest look at whether a German Shepherd actually suits a Kenyan household, including when it doesn't.",
    category: "Breed Education",
    date: "2026-07-14",
    readingTime: "6 min read",
    author: "Citadel K9s",
    cover: {
      src: "/images/gallery/adult-portrait-1.jpg",
      alt: "A long-coat German Shepherd resting comfortably in a green Kenyan garden",
    },
    body: [
      {
        type: "p",
        text: "It's the question we're asked most often, usually in some version of: 'won't the heat kill them?' The short answer is no — German Shepherds do very well in Kenya, and have done for decades. But they are not the right dog for every home, and we'd rather tell you that now than after you've paid.",
      },
      { type: "h2", text: "The climate is not the problem people think it is" },
      {
        type: "p",
        text: "Most of Kenya's populated highlands — Nairobi, Nakuru, Eldoret, Nyeri — sit at altitude with mild temperatures. That is comfortable German Shepherd weather. The double coat insulates against heat as well as cold, which is exactly why you must never shave it. What genuinely matters is constant shade, constant clean water, and walking in the cooler morning or evening hours. In hotter, humid coastal areas it takes more care, but it is still very manageable.",
      },
      { type: "h2", text: "Space matters less than stimulation" },
      {
        type: "p",
        text: "A common myth is that a German Shepherd needs acres. A dog on a big compound that is ignored all day is far worse off than a dog in a modest yard that gets walked, trained and included in family life. This is a working breed with a working brain — it needs a job, even if that job is a daily training session and a proper walk. Boredom is what produces digging, barking and destruction, not a small garden.",
      },
      { type: "h2", text: "Security and family life are not a trade-off" },
      {
        type: "p",
        text: "Many Kenyan families want a dog that is gentle indoors and serious about the gate. A well-bred German Shepherd is exactly that: naturally watchful and territorial without being unstable. A sound one does not need to be made aggressive — and a dog made aggressive through mistreatment is a liability, not protection. Temperament comes from breeding and rearing, not from chaining a dog up.",
      },
      { type: "h2", text: "When a German Shepherd is NOT for you" },
      {
        type: "p",
        text: "Be honest with yourself. If nobody is home for most of the day and the dog will live alone at the back of the compound, choose a different breed. If nobody will commit to grooming and shedding, or to training in the first year, choose a different breed. We would genuinely rather talk you out of a puppy than watch one end up neglected.",
      },
      {
        type: "p",
        text: "If you're weighing it up, message us and describe your home honestly. We'll give you a straight answer — including 'not yet'.",
      },
    ],
  },
  {
    slug: "german-shepherd-vs-rottweiler-kenya",
    title: "German Shepherd vs Rottweiler: Which Guard Dog for a Kenyan Home?",
    excerpt:
      "Both are serious protection breeds. They are not interchangeable. An honest comparison to help you pick the right one for your household — not just the tougher-looking one.",
    category: "Breed Education",
    date: "2026-07-10",
    readingTime: "5 min read",
    author: "Citadel K9s",
    cover: {
      src: "/images/gallery/adult-stack.jpg",
      alt: "A Citadel K9s German Shepherd standing alert in profile",
    },
    body: [
      {
        type: "p",
        text: "We breed German Shepherds, so treat this with the appropriate scepticism — but we have no interest in selling you the wrong dog. Both breeds are excellent guardians in Kenya. They simply suit different owners.",
      },
      { type: "h2", text: "Temperament and style of protection" },
      {
        type: "p",
        text: "The German Shepherd is typically more alert, more vocal and more reactive — it tends to announce and patrol. The Rottweiler is generally more still and more silent, sizing a situation up before responding. If you want an early-warning system that is also endlessly trainable, the Shepherd suits you. If you want a calmer, heavier presence, the Rottweiler does.",
      },
      { type: "h2", text: "Trainability and energy" },
      {
        type: "p",
        text: "German Shepherds are among the most trainable dogs in the world, which cuts both ways: they learn the good and the bad equally fast, and an untrained one becomes a nuisance quickly. They generally need more daily mental work than a Rottweiler. Rottweilers are highly intelligent too but often steadier and less busy in the home.",
      },
      { type: "h2", text: "Practical realities in Kenya" },
      {
        type: "p",
        text: "Coat is the honest difference. A German Shepherd sheds — a lot — and a long coat needs regular grooming. The Rottweiler's short coat is far lower maintenance. On the other hand, Shepherds are more common here, so finding a knowledgeable vet, trainer or breeder is usually easier.",
      },
      { type: "h2", text: "The thing that matters more than the breed" },
      {
        type: "p",
        text: "A badly bred, badly raised dog of either breed is a problem — often a dangerous one. A well-bred, well-socialised dog of either breed is a joy. Spend your energy choosing the breeder and committing to the training, not agonising over the breed. That decision matters ten times more.",
      },
    ],
  },
  {
    slug: "german-shepherd-coat-care-kenya-ticks-heat-shedding",
    title: "German Shepherd Coat Care in Kenya: Ticks, Heat and Shedding",
    excerpt:
      "The three things that catch new Kenyan owners out — and the one mistake that can genuinely harm your dog.",
    category: "Puppy Care",
    date: "2026-07-06",
    readingTime: "5 min read",
    author: "Citadel K9s",
    cover: {
      src: "/images/gallery/adult-portrait-2.jpg",
      alt: "A well-groomed long-coat German Shepherd lying on a veranda",
    },
    body: [
      {
        type: "p",
        text: "A German Shepherd's coat is a piece of engineering: a dense undercoat beneath a coarser outer coat. Understand it and your dog is comfortable year-round. Misunderstand it and you can do real damage with good intentions.",
      },
      { type: "h2", text: "Never shave your German Shepherd" },
      {
        type: "p",
        text: "This is the mistake, and it is usually made out of kindness. The double coat insulates in both directions — it keeps heat out as much as it keeps warmth in, and it shields skin from the sun. Shaving it removes that protection, exposes the skin to sunburn, and the coat often grows back patchy or with a changed texture. Brush it out instead; never clip it down.",
      },
      { type: "h2", text: "Shedding is constant, and worse twice a year" },
      {
        type: "p",
        text: "They shed year-round and 'blow' the undercoat heavily a couple of times a year. Brushing several times a week — daily during a heavy shed — removes far more hair than any diet or shampoo will. An undercoat rake does more for a Shepherd than any other grooming tool. Long coats need more of this than stock coats; there is no way around it.",
      },
      { type: "h2", text: "Ticks and fleas need a routine, not a reaction" },
      {
        type: "p",
        text: "In much of Kenya, ticks are a year-round reality, and tick-borne disease is a genuine risk — not a nuisance. Keep to a preventative schedule agreed with your vet rather than treating only when you see one. Check the dog by hand after time in long grass, paying attention to ears, neck, armpits and between the toes. That dense undercoat hides ticks well, which is exactly why hands beat eyes.",
      },
      { type: "h2", text: "Heat: manage the day, not the coat" },
      {
        type: "p",
        text: "Shade and fresh water at all times, walks and training in the cool of the morning or evening, and never leave a dog in a parked car. If a dog is panting hard, get it into shade with water and cool its paws and belly — not ice-cold water over the whole body. Manage the routine and the coat looks after itself.",
      },
      {
        type: "p",
        text: "Every Citadel family gets this guidance in person, plus our number for the life of the dog. Ask us anything — including the questions you think are silly.",
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
