import React from "react";
import { BrandLogo } from "./BrandLogo";
import { CAFE_DATA } from "../data/cafe";
import { Coffee, MapPin, Clock, Star, Heart, Navigation, ExternalLink } from "lucide-react";

interface FooterProps {
  onVisitUs: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onVisitUs }) => {
  return (
    <footer className="bg-[#050504] text-[#F4EBDD] relative overflow-hidden border-t border-[#1C1813]">
      {/* FINAL CINEMATIC HERO CTA */}
      <div className="relative py-28 px-4 sm:px-6 lg:px-8 text-center overflow-hidden border-b border-[#18140F]">
        {/* Warm Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#F4D03F]/6 rounded-full blur-[200px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <div className="mb-6">
            <BrandLogo size={80} showText={false} />
          </div>

          <p className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#E7B93C] uppercase mb-3">
            Brewing Comfort · 24 Hours A Day
          </p>

          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-[#FFF8EA] tracking-tight leading-tight">
            GOOD VIBES. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4D03F] via-[#E7B93C] to-[#C8922E] italic">
              GREAT SIPS.
            </span>
          </h2>

          <p className="font-serif text-xl sm:text-2xl text-[#E7B93C] font-light mt-4 tracking-wider uppercase">
            THE WARM MUG
          </p>

          <p className="max-w-md text-sm text-[#F4EBDD]/70 font-light mt-4 leading-relaxed">
            Your cozy sanctuary at Galaxy Blue Sapphire Plaza. Step inside and let our signature brews and warm hospitality comfort you.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={CAFE_DATA.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#F4D03F] via-[#E7B93C] to-[#C8922E] text-[#070706] font-semibold text-xs tracking-widest uppercase rounded-full hover:shadow-xl hover:shadow-[#F4D03F]/25 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <Navigation className="w-4 h-4" />
              <span>Visit Us Now</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="#menu"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#14110E] hover:bg-[#1E1914] text-[#FFF8EA] hover:text-[#F4D03F] border border-[#2B2319] text-xs font-semibold tracking-widest uppercase rounded-full transition-all duration-300"
            >
              <span>Explore Menu</span>
            </a>
          </div>
        </div>
      </div>

      {/* FOOTER METADATA & LINKS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Col 1: Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <BrandLogo size={52} showText={true} />
            <p className="text-xs text-[#F4EBDD]/70 leading-relaxed font-light max-w-sm mt-3">
              A premium, casual and trendy 24/7 cafe concept brewing artisanal coffees,
              layered matchas, specialty mocktails, and fresh gourmet bites in Ghaziabad.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#F4D03F] pt-2">
              <Star className="w-3.5 h-3.5 fill-[#F4D03F]" />
              <span className="font-semibold">4.9 / 5</span>
              <span className="text-[#F4EBDD]/60">(13 Google Reviews)</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E7B93C]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#F4EBDD]/75">
              <li>
                <a href="#hero" className="hover:text-[#F4D03F] transition-colors">Home</a>
              </li>
              <li>
                <a href="#story" className="hover:text-[#F4D03F] transition-colors">Our Story & Philosophy</a>
              </li>
              <li>
                <a href="#signatures" className="hover:text-[#F4D03F] transition-colors">Signature Drinks</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#F4D03F] transition-colors">Full Food & Beverage Menu</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#F4D03F] transition-colors">Atmosphere & Ambiance</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#F4D03F] transition-colors">Google Reviews</a>
              </li>
              <li>
                <a href="#visit" className="hover:text-[#F4D03F] transition-colors">Location & Map</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Address & Hours */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E7B93C]">
              Location & Hours
            </h4>
            <div className="space-y-2 text-xs text-[#F4EBDD]/75">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F4D03F] shrink-0 mt-0.5" />
                <span>{CAFE_DATA.address.full}</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#F4D03F] shrink-0" />
                <span>Open 24 Hours · Every Day</span>
              </p>
              <p className="text-[11px] text-[#F4EBDD]/50 font-mono pt-1">
                Plus Code: {CAFE_DATA.plusCode}
              </p>
            </div>

            <div className="pt-2">
              <a
                href={CAFE_DATA.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#F4D03F] hover:underline"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Verification */}
        <div className="pt-12 mt-12 border-t border-[#1C1712] flex flex-col sm:flex-row items-center justify-between text-xs text-[#F4EBDD]/50 gap-4">
          <p>
            © {new Date().getFullYear()} The Warm Mug. All rights reserved. Brewing Comfort.
          </p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 fill-[#F4D03F] text-[#F4D03F]" />
            <span>for The Warm Mug, Ghaziabad</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
