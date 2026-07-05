import type { Faq } from "@/lib/types";

export const FAQS: Faq[] = [
  // ── Trust & verification — the questions cautious buyers actually ask ──
  {
    category: "Trust & Verification",
    question: "How do I know Citadel K9s is legitimate and not a scam?",
    answer:
      "Ask us the hard questions — we welcome them. You can visit by appointment and meet the puppies and their mother in person before paying anything. We do video calls showing the puppy live, on request, any day. We never pressure quick payments, and we put what we provide in writing. If a breeder anywhere refuses a live video call or a visit, walk away.",
  },
  {
    category: "Trust & Verification",
    question: "Can I visit the kennel before deciding?",
    answer:
      "Yes — serious buyers are welcome by appointment. You'll see how our dogs live, meet your puppy's mother, and can take your time. We ask for appointments (rather than walk-ins) to protect young litters from infection and stress.",
  },
  {
    category: "Trust & Verification",
    question: "Can we do a live video call to see the puppy first?",
    answer:
      "Absolutely. A live WhatsApp video call — not pre-recorded clips — is the fastest way to verify a puppy is real and healthy. We offer this to every enquirer before any payment is discussed.",
  },
  {
    category: "Trust & Verification",
    question: "What documents come with a Citadel K9s puppy?",
    answer:
      "Every puppy goes home with its veterinary health-check record, deworming schedule and vaccination record, plus registration paperwork. You'll know exactly what has been done and when — in writing, not promises.",
  },

  // ── Buying ──
  {
    category: "Buying a Puppy",
    question: "How do I reserve a puppy?",
    answer:
      "Start a WhatsApp conversation or send the enquiry form. We'll talk about your home and what you're looking for, then arrange a visit or video call. A deposit reserves a specific puppy after you've seen it; the balance is settled at collection. We'll explain every step before you commit to anything.",
  },
  {
    category: "Buying a Puppy",
    question: "Do you deliver outside Nairobi?",
    answer:
      "Yes. We can arrange safe ground transport within Kenya, planned around the puppy's wellbeing, with the full document pack travelling with the puppy. Talk to us about your location and we'll give you honest options and costs.",
  },
  {
    category: "Buying a Puppy",
    question: "How much does a German Shepherd puppy cost in Kenya?",
    answer:
      "Price depends on lineage, registration and the rearing that has gone into the litter. We quote clearly on enquiry and the price includes the vet check, deworming, vaccination record and registration paperwork — there are no surprise add-ons. Be cautious of prices that look too good to be true; they usually are.",
  },

  // ── Health & rearing ──
  {
    category: "Health & Rearing",
    question: "What health care will my puppy have had?",
    answer:
      "Puppies are dewormed on a strict schedule from two weeks, examined by a licensed veterinarian, and receive age-appropriate vaccinations before going home. You receive the complete record plus the schedule for remaining boosters.",
  },
  {
    category: "Health & Rearing",
    question: "How are your puppies raised?",
    answer:
      "Underfoot, inside a working household — handled every day, exposed gradually to normal household life, sounds and people. This early foundation is the biggest influence we can give a puppy toward becoming a confident, stable adult.",
  },
  {
    category: "Health & Rearing",
    question: "Are your German Shepherds good with children and families?",
    answer:
      "A well-bred, well-raised German Shepherd is an outstanding family dog — devoted, gentle with its own children and naturally watchful. We'll talk honestly with you about temperament and help match the right puppy to your household, including telling you if we think a puppy is NOT the right fit.",
  },

  // ── After sale ──
  {
    category: "After You Take Your Puppy Home",
    question: "What support do you provide after purchase?",
    answer:
      "A settling-in guide covering feeding, routine and early training — and a direct WhatsApp line to us for the life of your dog. We check in after collection and our families never lose our number.",
  },
  {
    category: "After You Take Your Puppy Home",
    question: "What if I can no longer keep my dog?",
    answer:
      "Contact us first, always. We will help rehome any Citadel K9s dog responsibly rather than see it end up in the wrong hands. That commitment doesn't expire.",
  },
];

export const FAQ_CATEGORIES = Array.from(new Set(FAQS.map((f) => f.category)));
