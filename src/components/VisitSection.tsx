import React, { useState } from "react";
import { CAFE_DATA } from "../data/cafe";
import {
  MapPin,
  Clock,
  Compass,
  Navigation,
  Phone,
  Copy,
  Check,
  ExternalLink,
  Car,
  CreditCard,
  ShoppingBag,
} from "lucide-react";

interface VisitSectionProps {
  onOpenOrder: () => void;
}

export const VisitSection: React.FC<VisitSectionProps> = ({ onOpenOrder }) => {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [copiedPlusCode, setCopiedPlusCode] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CAFE_DATA.address.full);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const handleCopyPlusCode = () => {
    navigator.clipboard.writeText(CAFE_DATA.plusCode);
    setCopiedPlusCode(true);
    setTimeout(() => setCopiedPlusCode(false), 2000);
  };

  return (
    <section id="visit" className="py-24 bg-[#070706] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F4D03F]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#F4D03F] uppercase">
            Section 09 · Find Your Spot
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-normal text-[#FFF8EA] tracking-tight">
            COME GET <span className="italic text-[#E7B93C]">WARM.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#F4EBDD]/70 font-light">
            Conveniently situated at Galaxy Blue Sapphire Plaza, Greater Noida West.
            Always open, always brewing.
          </p>
        </div>

        {/* Content Box with Details & Dark Embedded Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Location Details */}
          <div className="lg:col-span-5 p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-[#0F0D0B] border border-[#262018] flex flex-col justify-between shadow-2xl">
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#E7B93C]">
                  Official Location
                </span>
                <h3 className="font-serif text-3xl text-[#FFF8EA] mt-1">
                  The Warm Mug
                </h3>
                <p className="text-xs text-[#F4D03F] font-medium tracking-wide mt-1">
                  Galaxy Blue Sapphire Plaza
                </p>
              </div>

              {/* Full Address */}
              <div className="p-4 rounded-xl bg-[#15120E] border border-[#272017] space-y-2">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#F4D03F] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#FFF8EA] leading-relaxed">
                    {CAFE_DATA.address.full}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-[#221B13]">
                  <span className="text-[10px] sm:text-[11px] text-[#F4EBDD]/60 font-mono truncate">
                    Plus Code: {CAFE_DATA.plusCode}
                  </span>
                  <button
                    onClick={handleCopyPlusCode}
                    className="inline-flex items-center gap-1 text-[11px] text-[#E7B93C] hover:text-[#FFF8EA] transition-colors"
                  >
                    {copiedPlusCode ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedPlusCode ? "Copied" : "Copy"}</span>
                  </button>
                </div>
              </div>

              {/* Hours & Cost Strip */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-[#15120E] border border-[#272017]">
                  <div className="flex items-center gap-2 text-xs text-[#E7B93C]">
                    <Clock className="w-3.5 h-3.5 text-[#F4D03F]" />
                    <span className="font-semibold uppercase tracking-wider">Hours</span>
                  </div>
                  <p className="font-serif text-lg text-[#FFF8EA] mt-1">Open 24 Hours</p>
                  <p className="text-[10px] text-[#F4EBDD]/50 mt-0.5">7 days a week</p>
                </div>

                <div className="p-4 rounded-xl bg-[#15120E] border border-[#272017]">
                  <div className="flex items-center gap-2 text-xs text-[#E7B93C]">
                    <CreditCard className="w-3.5 h-3.5 text-[#F4D03F]" />
                    <span className="font-semibold uppercase tracking-wider">Price</span>
                  </div>
                  <p className="font-serif text-lg text-[#FFF8EA] mt-1">₹200–400</p>
                  <p className="text-[10px] text-[#F4EBDD]/50 mt-0.5">Approx. per person</p>
                </div>
              </div>

              {/* Quick Perks */}
              <div className="flex flex-wrap gap-2 text-xs text-[#F4EBDD]/70">
                <span className="px-3 py-1 rounded-full bg-[#181410] border border-[#2A2219]">
                  Free Street Parking
                </span>
                <span className="px-3 py-1 rounded-full bg-[#181410] border border-[#2A2219]">
                  Kerbside Pickup
                </span>
                <span className="px-3 py-1 rounded-full bg-[#181410] border border-[#2A2219]">
                  NFC / UPI Accepted
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-6 mt-6 border-t border-[#221B13] flex flex-col sm:flex-row gap-3">
              <a
                href={CAFE_DATA.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 bg-gradient-to-r from-[#F4D03F] to-[#E7B93C] text-[#070706] font-semibold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-lg hover:brightness-110 active:scale-95 transition-all text-center"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>

              <button
                onClick={handleCopyAddress}
                className="py-3 px-4 bg-[#181410] hover:bg-[#221B14] text-[#FFF8EA] text-xs font-medium rounded-xl flex items-center justify-center gap-2 border border-[#2C2319] transition-colors"
              >
                {copiedAddress ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#F4D03F]" />}
                <span>{copiedAddress ? "Address Copied!" : "Copy Address"}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Dark Styled Interactive Map Box */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-[#262018] relative min-h-[380px] sm:min-h-[460px] bg-[#120F0C] shadow-2xl flex flex-col">
            {/* Map Top Status Bar */}
            <div className="p-4 bg-[#0F0D0B] border-b border-[#221B14] flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold text-[#FFF8EA]">
                  Live Location: Galaxy Blue Sapphire Plaza
                </span>
              </div>
              <span className="text-[11px] text-[#F4D03F] font-mono">
                28.6074° N, 77.4359° E
              </span>
            </div>

            {/* Embedded Dark Themed Map */}
            <div className="relative flex-1 w-full h-full min-h-[360px]">
              <iframe
                title="The Warm Mug Location Map"
                src="https://maps.google.com/maps?q=28.6073771,77.435882&hl=en&z=17&output=embed"
                width="100%"
                height="100%"
                className="w-full h-full border-0 filter invert-[90%] hue-rotate-180 brightness-90 contrast-125"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Map Action Pill */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#070706]/90 backdrop-blur-md p-3 rounded-xl border border-[#F4D03F]/30 flex items-center justify-between sm:justify-start gap-4 shadow-2xl">
                <div>
                  <p className="text-xs font-bold text-[#FFF8EA]">The Warm Mug</p>
                  <p className="text-[10px] text-[#E7B93C]">Open 24 Hours · Sector 4, Ghaziabad</p>
                </div>
                <a
                  href={CAFE_DATA.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#F4D03F] text-[#070706] text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 hover:brightness-110"
                >
                  <span>Open Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
