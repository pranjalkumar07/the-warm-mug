import React, { useState, useEffect } from "react";
import { BrandLogo } from "./BrandLogo";
import { Menu, X, Clock, MapPin, Navigation, ShoppingBag, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenOrder: () => void;
  orderCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrder, orderCount }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Story", href: "#story" },
    { label: "Signatures", href: "#signatures" },
    { label: "Menu", href: "#menu" },
    { label: "Experience", href: "#experience" },
    { label: "Reviews", href: "#reviews" },
    { label: "Visit Us", href: "#visit" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#070706]/90 backdrop-blur-md border-b border-[#F4D03F]/15 py-2.5 sm:py-3 shadow-2xl shadow-black/80"
            : "bg-gradient-to-b from-[#070706]/90 via-[#070706]/50 to-transparent py-3 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 min-w-0">
          {/* Zone 1: Brand Wordmark / Badge */}
          <a
            href="#hero"
            className="flex items-center gap-2 group transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4D03F] min-w-0 shrink"
            aria-label="The Warm Mug Home"
          >
            <BrandLogo size={36} showText={true} className="min-w-0" />
          </a>

          {/* Zone 2: 4-6 Clean Nav Links */}
          <nav
            className="hidden md:flex items-center gap-7 text-sm font-medium text-[#F4EBDD]/80"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-1 text-sm tracking-wide text-[#F4EBDD]/80 hover:text-[#F4D03F] transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#F4D03F] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            <button
              onClick={onOpenOrder}
              className="relative inline-flex items-center gap-1.5 px-2.5 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-[#070706] bg-gradient-to-r from-[#F4D03F] to-[#E7B93C] rounded-full hover:from-[#FFF8EA] hover:to-[#F4D03F] transition-all duration-300 shadow-md shadow-[#F4D03F]/20 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4D03F] shrink-0"
              aria-label={`View order tray with ${orderCount} items`}
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#070706] shrink-0" />
              <span className="hidden sm:inline whitespace-nowrap">Order / Visit</span>
              {orderCount > 0 && (
                <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#070706] text-[#F4D03F] text-[9px] sm:text-[10px] font-bold flex items-center justify-center shrink-0">
                  {orderCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 sm:p-2 text-[#F4EBDD] hover:text-[#F4D03F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F4D03F] rounded-lg shrink-0"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#070706]/98 backdrop-blur-xl md:hidden flex flex-col justify-between pt-20 pb-8 px-5 sm:px-6 transition-all duration-300 animate-in fade-in overflow-y-auto">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#2A241E]">
              <div className="flex items-center gap-2 text-xs text-[#E7B93C]">
                <Clock className="w-3.5 h-3.5" />
                <span className="font-semibold uppercase tracking-wider">Open 24 Hours</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#F4EBDD]/70">
                <MapPin className="w-3.5 h-3.5 text-[#F4D03F]" />
                <span>Sector 4, Greater Noida</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-2xl text-[#F4EBDD] hover:text-[#F4D03F] transition-colors py-1 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-[#F4D03F]/60">→</span>
                </a>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-[#2A241E] flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrder();
              }}
              className="w-full py-3.5 px-4 bg-gradient-to-r from-[#F4D03F] to-[#E7B93C] text-[#070706] font-semibold text-sm rounded-xl flex items-center justify-center gap-2 shadow-lg"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>View Order / Visit Tray ({orderCount})</span>
            </button>

            <a
              href="https://www.google.com/maps/place/The+warm+mug/@28.6073818,77.4333133,17z/data=!3m1!4b1!4m6!3m5!1s0x390cef0019ccc1b1:0x2cd39eefb1a48083!8m2!3d28.6073771!4d77.435882!16s%2Fg%2F11zgpzmj1d"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 bg-[#181512] hover:bg-[#25201A] text-[#FFF8EA] text-xs font-medium rounded-xl flex items-center justify-center gap-2 border border-[#3A3226]"
            >
              <Navigation className="w-4 h-4 text-[#F4D03F]" />
              <span>Get Directions to Galaxy Blue Sapphire Plaza</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
