import React, { useState } from "react";
import heroStorefrontImg from "../assets/cafe/hero/hero-storefront.jpg";
import coldCoffeeImg from "../assets/cafe/drinks/cold-coffee.jpg";
import mangoMatchaImg from "../assets/cafe/drinks/mango-matcha.jpg";
import watermelonMojitoImg from "../assets/cafe/drinks/watermelon-mojito.jpg";
import comboPuffImg from "../assets/cafe/food/combo-coffee-puff.jpg";
import cafeInteriorImg from "../assets/cafe/interior/cafe-interior.jpg";
import { X, ZoomIn, Eye, Sparkles, Coffee } from "lucide-react";

export const Gallery: React.FC = () => {
  const [activeImage, setActiveImage] = useState<{ id: string; src: string; caption: string; tag: string } | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const galleryItems = [
    {
      id: "storefront",
      src: heroStorefrontImg,
      caption: "The Warm Mug 24/7 Kiosk facade with festive yellow-and-black decor and outdoor seating",
      tag: "Storefront & Kiosk",
      span: "md:col-span-8 md:row-span-2",
      height: "h-80 md:h-[480px]",
    },
    {
      id: "cold-coffee",
      src: coldCoffeeImg,
      caption: "Our signature whipped cold coffee with rich chocolate drizzle in a clear dome cup",
      tag: "Signature Beverage",
      span: "md:col-span-4",
      height: "h-72 md:h-[230px]",
    },
    {
      id: "mango-matcha",
      src: mangoMatchaImg,
      caption: "Tri-layer artisanal mango matcha iced latte with pure ceremonial green tea",
      tag: "Crafted Matcha",
      span: "md:col-span-4",
      height: "h-72 md:h-[230px]",
    },
    {
      id: "combo-puff",
      src: comboPuffImg,
      caption: "The popular ₹179 Chill Sip & Tasty Bite combo: Cold Coffee + Crisp Veg Puff",
      tag: "Special Combo",
      span: "md:col-span-4",
      height: "h-72 md:h-[280px]",
    },
    {
      id: "mojito",
      src: watermelonMojitoImg,
      caption: "Crisp iced watermelon mojito with crushed ice, fresh mint, and lime wheel",
      tag: "Summer Mocktail",
      span: "md:col-span-4",
      height: "h-72 md:h-[280px]",
    },
    {
      id: "interior",
      src: cafeInteriorImg,
      caption: "Warm amber lighting, dark wooden tables and the signature neon sign",
      tag: "Cafe Ambiance",
      span: "md:col-span-4",
      height: "h-72 md:h-[280px]",
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-[#0B0A08] relative overflow-hidden border-t border-[#1C1813]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#F4D03F] uppercase">
            Section 06 · Visual Journal
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#FFF8EA] tracking-tight">
            CAPTURED AT <span className="italic text-[#E7B93C]">THE WARM MUG.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#F4EBDD]/70 font-light">
            Real snapshots from our counter, kitchen, and cozy evenings at Galaxy Blue Sapphire Plaza.
          </p>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className={`group relative rounded-2xl overflow-hidden bg-[#15120E] border border-[#272118] hover:border-[#F4D03F]/40 cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-black ${item.span} ${item.height}`}
            >
              {failedImages[item.id] ? (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#181410] to-[#0D0B08]">
                  <Coffee className="w-10 h-10 text-[#F4D03F] mb-3 opacity-80" />
                  <span className="text-xs font-semibold text-[#F4D03F] uppercase tracking-wider">{item.tag}</span>
                  <p className="text-xs text-[#F4EBDD]/70 max-w-xs mt-1.5">{item.caption}</p>
                </div>
              ) : (
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={() => setFailedImages((prev) => ({ ...prev, [item.id]: true }))}
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-[#070706] via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity pointer-events-none" />

              {/* Hover Overlay with Caption */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex justify-between items-center">
                  <span className="px-3 py-1 rounded-full bg-[#070706]/80 backdrop-blur-md text-[11px] font-semibold text-[#F4D03F] uppercase tracking-wider border border-[#F4D03F]/20">
                    {item.tag}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#070706]/80 flex items-center justify-center text-[#FFF8EA] border border-[#F4D03F]/30">
                    <ZoomIn className="w-4 h-4 text-[#F4D03F]" />
                  </div>
                </div>

                <div>
                  <p className="text-xs sm:text-sm text-[#FFF8EA] font-medium leading-snug drop-shadow-md">
                    {item.caption}
                  </p>
                  <p className="text-[10px] text-[#E7B93C] mt-1 flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    <span>Click to enlarge</span>
                  </p>
                </div>
              </div>

              {/* Always visible small badge on mobile */}
              <div className="absolute bottom-3 left-3 md:hidden">
                <span className="px-2.5 py-1 rounded-md bg-[#070706]/90 text-[10px] font-semibold text-[#F4D03F] border border-[#F4D03F]/30">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-[#070706]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#120F0C] border border-[#2D2419] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#070706]/80 border border-[#F4D03F]/30 text-[#FFF8EA] hover:text-[#F4D03F] flex items-center justify-center transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[75vh] min-h-[280px] overflow-hidden bg-black flex items-center justify-center p-4">
              {failedImages[activeImage.id] ? (
                <div className="flex flex-col items-center justify-center text-center p-8">
                  <Coffee className="w-16 h-16 text-[#F4D03F] mb-4 opacity-80" />
                  <span className="text-xs font-semibold text-[#F4D03F] uppercase tracking-wider">{activeImage.tag}</span>
                  <p className="text-sm text-[#FFF8EA] max-w-md mt-2">{activeImage.caption}</p>
                </div>
              ) : (
                <img
                  src={activeImage.src}
                  alt={activeImage.caption}
                  className="max-h-[75vh] w-auto max-w-full object-contain"
                  referrerPolicy="no-referrer"
                  onError={() => setFailedImages((prev) => ({ ...prev, [activeImage.id]: true }))}
                />
              )}
            </div>

            <div className="p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-[#120F0C] border-t border-[#261E14]">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#F4D03F]">
                  {activeImage.tag}
                </span>
                <p className="text-sm font-medium text-[#FFF8EA] mt-0.5">
                  {activeImage.caption}
                </p>
              </div>
              <span className="text-xs text-[#F4EBDD]/50 whitespace-nowrap">
                The Warm Mug Gallery
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
