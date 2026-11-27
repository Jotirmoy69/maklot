"use client";

import { useState } from "react";
import { reviews, sampleReviews, type Review, type ReviewLang } from "@/lib/reviews";
import { cn } from "@/lib/utils";

const languages: { value: ReviewLang; label: string }[] = [
  { value: "en", label: "English" },
  { value: "bn", label: "বাংলা" },
];

const visibleReviews =
  reviews.length === 0 && process.env.NODE_ENV === "development" ? sampleReviews : reviews;

function ReviewCard({ review }: { review: Review }) {
  const [lang, setLang] = useState<ReviewLang>(review.originalLang);

  return (
    <figure className="flex flex-col rounded-2xl border border-black/5 bg-[#F8F8F6] p-6 sm:p-8">
      <div
        role="group"
        aria-label="Review language"
        className="mb-6 flex self-end rounded-full bg-black/5 p-1"
      >
        {languages.map(({ value, label }) => (
          <button
            key={value}
            type="button"
            lang={value}
            aria-pressed={lang === value}
            onClick={() => setLang(value)}
            className={cn(
              "cursor-pointer rounded-full px-3 py-1 text-xs transition",
              lang === value ? "bg-white text-black shadow-sm" : "text-black/50 hover:text-black"
            )}
          >
            {label}
          </button>
        ))}
      </div>

      <blockquote lang={lang} className="flex-1 text-sm leading-relaxed text-black/70 md:text-base">
        {review.text[lang]}
      </blockquote>

      {lang !== review.originalLang && (
        <p lang={lang} className="mt-3 text-xs text-black/35">
          {lang === "bn" ? "অনূদিত" : "Translated"}
        </p>
      )}

      <figcaption className="mt-6">
        <p className="text-sm font-medium break-words text-black">{review.name}</p>
        <p className="text-xs break-words text-black/50">{review.role}</p>
      </figcaption>
    </figure>
  );
}

export function ClientReviews() {
  if (visibleReviews.length === 0) return null;

  return (
    <div id="reviews" className="mt-10 scroll-mt-24">
      <h3 className="mb-4 text-xl font-semibold text-black sm:text-2xl">Client reviews</h3>
      <div className="grid gap-4 md:grid-cols-2">
        {visibleReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}
