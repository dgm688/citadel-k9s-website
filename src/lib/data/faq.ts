import type { Faq } from "@/lib/types";

export const FAQS: Faq[] = [
  {
    category: "Buying a Puppy",
    question: "How do I reserve a Citadel K9s puppy?",
    answer:
      "Begin by sending us a WhatsApp message or completing the waiting-list form. We'll arrange a short conversation to understand your home and goals, then guide you through reservation. A deposit secures your place; the balance is settled before collection.",
  },
  {
    category: "Buying a Puppy",
    question: "Do you ship puppies outside Nairobi or internationally?",
    answer:
      "Yes. We regularly arrange safe ground transport across Kenya and can coordinate vetted air travel for buyers further afield. Every journey is planned around the puppy's wellbeing, with full documentation provided.",
  },
  {
    category: "Health",
    question: "What health guarantees do you provide?",
    answer:
      "Every puppy leaves with a written health guarantee, an up-to-date vaccination and deworming record, and a veterinary check. Our breeding dogs are hip and elbow screened to reduce hereditary risk.",
  },
  {
    category: "Health",
    question: "What vaccinations and deworming will my puppy have had?",
    answer:
      "Puppies are dewormed on a strict schedule from two weeks and receive their first core vaccination before going home. You'll receive the complete record and a recommended schedule for the remaining boosters.",
  },
  {
    category: "Temperament & Training",
    question: "Are your German Shepherds good with children and families?",
    answer:
      "Absolutely. We select for stable, confident temperaments and raise our puppies underfoot with early socialisation. Our dogs are bred to be devoted, level-headed family companions as well as capable guardians.",
  },
  {
    category: "Temperament & Training",
    question: "Do you offer guidance on training and raising the puppy?",
    answer:
      "Yes. Each family receives a settling-in guide covering nutrition, crate training, socialisation and early obedience. We remain available for support throughout your dog's life — our relationship doesn't end at collection.",
  },
  {
    category: "Registration & Pedigree",
    question: "Are the puppies registered and pedigreed?",
    answer:
      "Our breeding programme works with documented bloodlines and registration paperwork is provided with each puppy. We are transparent about pedigree and happy to walk you through your puppy's lineage.",
  },
  {
    category: "Visiting",
    question: "Can I visit the kennel before deciding?",
    answer:
      "We welcome serious enquiries to arrange a visit by appointment, subject to biosecurity for the safety of our litters. Reach out on WhatsApp and we'll find a suitable time.",
  },
];

export const FAQ_CATEGORIES = Array.from(new Set(FAQS.map((f) => f.category)));
