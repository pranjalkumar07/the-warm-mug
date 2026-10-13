import React from "react";
import heroStorefront from "../assets/cafe/hero/hero-storefront.jpg";
import { Sparkles, Heart, Coffee, Users, Moon, Sun } from "lucide-react";

export const BrandStory: React.FC = () => {
  const [imgError, setImgError] = React.useState(false);

  return (
    <section id="story" className="py-24 bg-[#0B0A08] relative overflow-hidden border-t border-[#1C1813]">
      {/* Background warm lights */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#F4D03F]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Composition with Real Storefront Asset */}
          <div className="lg:col-span-6 relative">
            {/* Decorative Offset Golden Border Frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-[#F4D03F]/30 rounded-2xl pointer-events-none hidden sm:block" />

            {/* Main Storefront Image Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black border border-[#2A231A] group bg-[#15120E]">
              {imgError ? (
                <div className="w-full h-[400px] sm:h-[480px] flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-[#181410] via-[#100D0A] to-[#0A0907]">
                  <div className="w-16 h-16 rounded-full bg-[#1F1A14] border border-[#F4D03F]/30 flex items-center justify-center text-[#F4D03F] mb-4">
                    <Coffee className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#FFF8EA]">The Warm Mug Storefront</h3>
                  <p className="text-xs text-[#E7B93C] uppercase tracking-widest mt-1">Galaxy Blue Sapphire Plaza</p>
                  <p className="text-xs text-[#F4EBDD]/60 max-w-xs mt-2">
                    Open 24 hours · Modern black and gold cafe kiosk with cozy outdoor seating
                  </p>
                </div>
              ) : (
                <img
                  src={heroStorefront}
                  alt="The Warm Mug Cafe storefront at Galaxy Blue Sapphire Plaza with yellow and black festive balloon garland, glowing badge, and neon lights"
                  className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                />
              )}

              {/* Gradient Dark Scrim for Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070706] via-[#070706]/40 to-transparent pointer-events-none" />

              {/* Floating Real Identity Pill on Image */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 p-3 sm:p-4 rounded-xl bg-[#0B0A08]/90 backdrop-blur-md border border-[#F4D03F]/20 flex items-center justify-between">
                <div>
                  <p className="text-[11px] sm:text-xs font-semibold text-[#F4D03F] uppercase tracking-wider">
                    Physical Storefront · Galaxy Blue Sapphire Plaza
                  </p>
                  <p className="font-serif text-xs sm:text-sm text-[#FFF8EA] mt-0.5">
                    Haibatpur, Sector 4, Greater Noida West
                  </p>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#181511] border border-[#F4D03F]/30 flex items-center justify-center text-[#F4D03F] shrink-0 ml-2">
                  <Coffee className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
            </div>

            {/* Floating Tag */}
            <div className="absolute -bottom-3 right-2 sm:-bottom-5 sm:-right-5 bg-gradient-to-r from-[#F4D03F] to-[#E7B93C] text-[#070706] px-3.5 sm:px-5 py-1.5 sm:py-2.5 rounded-full font-semibold text-[11px] sm:text-xs tracking-wider uppercase shadow-xl flex items-center gap-1.5 sm:gap-2">
              <Sparkles className="w-3.5 h-3.5 fill-[#070706] shrink-0" />
              <span>Est. 2024 · Brewing Comfort</span>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-[0.2em] text-[#F4D03F] uppercase">
                Section 01 · Our Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FFF8EA] tracking-tight leading-tight">
                MORE THAN A <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4D03F] to-[#E7B93C] italic">
                  CUP OF COFFEE.
                </span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#F4EBDD]/80 leading-relaxed font-light">
              The Warm Mug was born from a simple belief: in a fast-paced world, everyone deserves a warm,
              inviting spot to pause, recharge, and feel truly at ease.
            </p>

            <p className="text-sm sm:text-base text-[#F4EBDD]/70 leading-relaxed">
              Whether you are dropping by for a solo morning espresso, catching up with friends over
              steaming mix sauce pasta, or craving midnight cold coffees with whipped cream, our 24-hour
              doors are always open with welcoming smiles and freshly prepared comforts.
            </p>

            {/* The 4 Cornerstones */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-4">
              <div className="p-4 rounded-xl bg-[#14110E] border border-[#231D16] hover:border-[#F4D03F]/30 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#211B14] text-[#F4D03F] flex items-center justify-center mb-2.5">
                  <Coffee className="w-4 h-4" />
                </div>
                <h3 className="font-medium text-sm text-[#FFF8EA]">Specialty Brews</h3>
                <p className="text-xs text-[#F4EBDD]/60 mt-1">
                  From robust Vietnamese iced coffees to Japanese ceremonial matchas.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#14110E] border border-[#231D16] hover:border-[#F4D03F]/30 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#211B14] text-[#F4D03F] flex items-center justify-center mb-2.5">
                  <Moon className="w-4 h-4" />
                </div>
                <h3 className="font-medium text-sm text-[#FFF8EA]">Open 24 Hours</h3>
                <p className="text-xs text-[#F4EBDD]/60 mt-1">
                  Midnight cravings or early dawn breakfasts, we never close our kitchen.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#14110E] border border-[#231D16] hover:border-[#F4D03F]/30 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#211B14] text-[#F4D03F] flex items-center justify-center mb-2.5">
                  <Users className="w-4 h-4" />
                </div>
                <h3 className="font-medium text-sm text-[#FFF8EA]">Solo & Groups</h3>
                <p className="text-xs text-[#F4EBDD]/60 mt-1">
                  Cozy seating whether you are reading alone or laughing with friends.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#14110E] border border-[#231D16] hover:border-[#F4D03F]/30 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#211B14] text-[#F4D03F] flex items-center justify-center mb-2.5">
                  <Heart className="w-4 h-4" />
                </div>
                <h3 className="font-medium text-sm text-[#FFF8EA]">Comfort Food</h3>
                <p className="text-xs text-[#F4EBDD]/60 mt-1">
                  Crispy sandwiches, loaded fries, fresh pizzas, and oven-hot garlic breads.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
