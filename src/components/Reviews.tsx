import React from "react";
import { REVIEWS_DATA } from "../data/reviews";
import { Star, ExternalLink, ShieldCheck, Heart, ThumbsUp, MessageSquare } from "lucide-react";

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-[#070706] relative overflow-hidden">
      {/* Background Amber Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#F4D03F]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#F4D03F] uppercase">
            Section 07 · Guest Love
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#FFF8EA] tracking-tight">
            RATED 4.9 ON <span className="italic text-[#E7B93C]">GOOGLE.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#F4EBDD]/70 font-light">
            Verified ratings from our local community, night owls, and matcha lovers.
          </p>

          {/* Aggregate Rating Pill Card */}
          <div className="inline-flex flex-wrap sm:flex-nowrap items-center justify-center gap-3 sm:gap-4 px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl bg-[#14110E] border border-[#2B2319] shadow-xl mt-4 max-w-full">
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="font-serif text-3xl font-bold text-[#F4D03F]">
                {REVIEWS_DATA.rating}
              </span>
              <div className="flex flex-col text-left">
                <div className="flex items-center text-[#F4D03F]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#F4D03F]" />
                  ))}
                </div>
                <span className="text-[10px] text-[#F4EBDD]/60 font-medium">
                  Out of 5.0 Stars
                </span>
              </div>
            </div>

            <div className="h-8 w-[1px] bg-[#2E261D]" />

            <div className="text-left">
              <p className="text-xs font-semibold text-[#FFF8EA]">
                {REVIEWS_DATA.totalReviews} Verified Reviews
              </p>
              <a
                href={REVIEWS_DATA.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] text-[#E7B93C] hover:underline"
              >
                <span>Read on Google Maps</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Most Praised Themes Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-4xl mx-auto">
          <span className="text-xs font-semibold text-[#E7B93C] mr-2 flex items-center gap-1.5">
            <ThumbsUp className="w-3.5 h-3.5" />
            <span>Community Highlights:</span>
          </span>
          {REVIEWS_DATA.highlights.map((h, i) => (
            <span
              key={i}
              className="text-xs px-3.5 py-1.5 rounded-full bg-[#14110E] text-[#FFF8EA] border border-[#272118]"
            >
              {h}
            </span>
          ))}
        </div>

        {/* Themed Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS_DATA.testimonials.map((t, idx) => (
            <div
              key={idx}
              className="relative p-6 sm:p-8 rounded-2xl bg-[#0F0D0B] border border-[#221B14] hover:border-[#F4D03F]/30 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-[#F4D03F]/5 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#F4D03F]">
                    {t.aspect}
                  </span>
                  <div className="flex items-center text-[#F4D03F]">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#F4D03F]" />
                    ))}
                  </div>
                </div>

                <p className="font-serif text-lg text-[#FFF8EA] group-hover:text-[#F4D03F] transition-colors leading-relaxed">
                  "{t.text}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#1C1610] flex items-center justify-between text-xs text-[#F4EBDD]/50">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Verified Google Review</span>
                </span>
                <span className="text-[#E7B93C]/80 font-medium">The Warm Mug Guest</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Leave Review */}
        <div className="mt-12 text-center">
          <a
            href={REVIEWS_DATA.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FFF8EA] hover:text-[#F4D03F] py-2.5 px-6 rounded-full bg-[#14110E] hover:bg-[#1E1914] border border-[#2B2319] transition-all"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#F4D03F]" />
            <span>Leave a Google Review for The Warm Mug</span>
            <ExternalLink className="w-3 h-3 text-[#F4D03F]" />
          </a>
        </div>
      </div>
    </section>
  );
};
