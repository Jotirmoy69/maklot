export type ReviewLang = "en" | "bn";

export type Review = {
  id: string;
  name: string;
  /** Role and company, e.g. "Founder, Company name" */
  role: string;
  /** The language the client wrote in. The other one is shown as a translation. */
  originalLang: ReviewLang;
  text: Record<ReviewLang, string>;
};

/**
 * Add only reviews that real clients gave and agreed to have published.
 * While this list is empty, the reviews block is hidden on the live site.
 */
export const reviews: Review[] = [];

/** Layout preview for `npm run dev` only. Never shown in a production build. */
export const sampleReviews: Review[] = [
  {
    id: "sample",
    name: "Sample client",
    role: "Preview only, not a real review",
    originalLang: "en",
    text: {
      en: "This is placeholder text showing where a client's review will appear.",
      bn: "এটি একটি নমুনা লেখা। ক্লায়েন্টের রিভিউ এখানে দেখা যাবে।",
    },
  },
];
