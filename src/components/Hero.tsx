import React from "react";
import { CoffeeScene } from "./3d/CoffeeScene";
import { BrandLogo } from "./BrandLogo";
import { Star, Clock, MapPin, ArrowDown, ChevronRight, Compass } from "lucide-react";

interface HeroProps {
  onExploreMenu: () => void;
  onVisitCafe: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onVisitCafe }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[95vh] md:min-h-screen flex items-center justify-center pt-28 sm:pt-32 md:pt-36 pb-12 overflow-hidden bg-[#070706]"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#F4D03F]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#5A321F]/15 rounded-full blur-[160px] pointer-events-none" />

      {/* Subtle Grid / Texture */}
      <div className="absolute inset-0 bg-grain pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Storytelling & Typography */}
        <div className="lg:col-span-7 flex flex-col items-start text-left pt-2 sm:pt-6 lg:pt-0 max-w-full">
          {/* Authentic Cafe Trust Meta */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs text-[#F4EBDD]/70 mb-4 sm:mb-5 max-w-full">
            <span className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-[#1A1713] border border-[#F4D03F]/20 text-[#FFF8EA] shrink-0">
              <Star className="w-3.5 h-3.5 fill-[#F4D03F] text-[#F4D03F] shrink-0" />
              <span className="font-semibold text-[#F4D03F]">4.9</span>
              <span className="text-[#F4EBDD]/60">(13 Google Reviews)</span>
            </span>

            <span className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-[#1A1713] border border-[#F4D03F]/20 text-[#E7B93C] shrink-0">
              <Clock className="w-3.5 h-3.5 text-[#F4D03F] shrink-0" />
              <span className="font-medium tracking-wide">Open 24 Hours</span>
            </span>

            <span className="hidden sm:flex items-center gap-1.5 text-xs text-[#F4EBDD]/60 shrink-0">
              <MapPin className="w-3.5 h-3.5 text-[#E7B93C] shrink-0" />
              <span>Galaxy Blue Sapphire Plaza</span>
            </span>
          </div>

          {/* Main Display Headline */}
          <div className="space-y-1 mb-5 sm:mb-6 max-w-full">
            <p className="text-[11px] sm:text-sm font-semibold tracking-wider sm:tracking-[0.25em] text-[#E7B93C] uppercase">
              The Warm Mug · Established 2024
            </p>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#FFF8EA] leading-[1.08] sm:leading-[1.05]">
              BREWING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4D03F] via-[#E7B93C] to-[#C8922E] italic">
                COMFORT.
              </span>
            </h1>
          </div>

          {/* Emotional Brand Statement */}
          <p className="max-w-xl text-sm sm:text-base md:text-lg text-[#F4EBDD]/80 font-light leading-relaxed mb-6 sm:mb-8">
            Good vibes and great sips. From rich velvety cold coffees and layered artisanal matchas
            to crispy gourmet quick bites, your cozy sanctuary is brewing non-stop at Sector 4, Greater Noida.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <button
              onClick={onExploreMenu}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 bg-gradient-to-r from-[#F4D03F] via-[#E7B93C] to-[#C8922E] text-[#070706] font-semibold text-xs sm:text-sm tracking-wider uppercase rounded-full hover:shadow-lg hover:shadow-[#F4D03F]/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <span>Explore The Menu</span>
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            <button
              onClick={onVisitCafe}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-[#14120E] text-[#FFF8EA] hover:text-[#F4D03F] hover:bg-[#1E1B16] border border-[#2D261E] hover:border-[#F4D03F]/40 font-medium text-xs sm:text-sm tracking-wider uppercase rounded-full transition-all duration-300"
            >
              <Compass className="w-4 h-4 text-[#F4D03F]" />
              <span>Visit The Cafe</span>
            </button>
          </div>

          {/* Quick Stats Strip */}
          <div className="grid grid-cols-3 gap-2 sm:gap-6 pt-6 sm:pt-10 mt-6 sm:mt-10 border-t border-[#1F1B16] w-full max-w-lg">
            <div>
              <p className="font-serif text-lg sm:text-2xl font-bold text-[#F4D03F]">24/7</p>
              <p className="text-[10px] sm:text-xs text-[#F4EBDD]/60 mt-0.5">Always Open</p>
            </div>
            <div>
              <p className="font-serif text-lg sm:text-2xl font-bold text-[#FFF8EA]">₹200–400</p>
              <p className="text-[10px] sm:text-xs text-[#F4EBDD]/60 mt-0.5">Per Person</p>
            </div>
            <div>
              <p className="font-serif text-lg sm:text-2xl font-bold text-[#E7B93C]">100%</p>
              <p className="text-[10px] sm:text-xs text-[#F4EBDD]/60 mt-0.5">Fresh Brewed</p>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Coffee Cup Experience */}
        <div className="lg:col-span-5 relative h-[300px] sm:h-[420px] lg:h-[540px] flex items-center justify-center max-w-full overflow-hidden">
          {/* Decorative Glowing Rings behind Cup */}
          <div className="absolute w-[240px] sm:w-[360px] h-[240px] sm:h-[360px] rounded-full border border-[#F4D03F]/15 animate-pulse pointer-events-none" />
          <div className="absolute w-[280px] sm:w-[420px] h-[280px] sm:h-[420px] rounded-full border border-[#C8922E]/10 pointer-events-none" />

          {/* The 3D Scene */}
          <div className="w-full h-full relative z-10">
            <CoffeeScene interactive={true} intensity="hero" showBeans={true} />
          </div>

          {/* Interactive Hint Pill */}
          <div className="absolute bottom-2 bg-[#0B0A08]/80 backdrop-blur-md px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-[#F4D03F]/20 text-[10px] sm:text-[11px] text-[#E7B93C] flex items-center gap-1.5 sm:gap-2 pointer-events-none shadow-lg">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#F4D03F] animate-ping" />
            <span>Interactive 3D Mug · Move cursor or drag</span>
          </div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <a
        href="#story"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-xs text-[#F4EBDD]/40 hover:text-[#F4D03F] transition-colors duration-300"
        aria-label="Scroll down to Brand Story"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#F4D03F]" />
      </a>
    </section>
  );
};
