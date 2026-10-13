import React, { useState } from "react";
import {
  Utensils,
  ShoppingBag,
  Truck,
  Car,
  Coffee,
  Sandwich,
  Pizza,
  Users,
  User,
  Heart,
  CreditCard,
  ParkingCircle,
  Sparkles,
} from "lucide-react";

export const WhyPeopleCome: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const perks = [
    {
      icon: Coffee,
      title: "Artisanal Coffee",
      detail: "Espressos, cold coffees, matchas & slow lattes brewed fresh 24 hours.",
    },
    {
      icon: Utensils,
      title: "Dine-In Comfort",
      detail: "Cozy counter and outdoor tables with warm lighting and ambient music.",
    },
    {
      icon: ShoppingBag,
      title: "Takeaway & Grab",
      detail: "Quick curbside handoffs with sealed spill-proof dome cups.",
    },
    {
      icon: Truck,
      title: "Delivery Available",
      detail: "Hot comfort food and chilled frappes delivered straight to your door.",
    },
    {
      icon: Car,
      title: "Kerbside Pickup",
      detail: "Pull up to Galaxy Blue Sapphire Plaza and have your order brought right to your car.",
    },
    {
      icon: Sandwich,
      title: "Crispy Quick Bites",
      detail: "Loaded peri peri fries, wraps, cheesy rolls, and hot toasted sandwiches.",
    },
    {
      icon: Pizza,
      title: "Small Plates & Pizza",
      detail: "Penne pasta, garlic bread, and fresh mozzarella pizzas made to order.",
    },
    {
      icon: User,
      title: "Solo Dining Sanctuary",
      detail: "A quiet, welcoming retreat to read, work, or enjoy solitary peace.",
    },
    {
      icon: Users,
      title: "Group Friendly",
      detail: "Room for friend circles and family gatherings to unwind together.",
    },
    {
      icon: Heart,
      title: "Kids Friendly",
      detail: "Delicious fruit shakes, mild bites, hot chocolates, and cheerful vibes.",
    },
    {
      icon: ParkingCircle,
      title: "Free Street Parking",
      detail: "Ample, hassle-free free parking available right outside the plaza.",
    },
    {
      icon: CreditCard,
      title: "NFC & UPI Payments",
      detail: "Seamless contactless tap payments via Apple Pay, Google Pay, cards & UPI.",
    },
  ];

  return (
    <section className="py-24 bg-[#0B0A08] relative overflow-hidden border-t border-[#1C1813]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#F4D03F] uppercase">
            Section 08 · Hospitality & Ease
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#FFF8EA] tracking-tight">
            WHY PEOPLE COME <span className="italic text-[#E7B93C]">HERE.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#F4EBDD]/70 font-light">
            Every little convenience designed to make your visit effortless, welcoming, and warm.
          </p>
        </div>

        {/* Dynamic Interactive Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {perks.map((perk, idx) => {
            const Icon = perk.icon;
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={perk.title}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`relative p-5 sm:p-6 rounded-2xl transition-all duration-300 cursor-default flex flex-col justify-between ${
                  isHovered
                    ? "bg-[#181410] border-[#F4D03F] shadow-xl shadow-[#F4D03F]/10 -translate-y-1"
                    : "bg-[#120F0C] border-[#221B14] hover:border-[#F4D03F]/30"
                } border`}
              >
                <div>
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 mb-4 ${
                      isHovered
                        ? "bg-[#F4D03F] text-[#070706] scale-110 shadow-md shadow-[#F4D03F]/30"
                        : "bg-[#1C1712] text-[#F4D03F]"
                    }`}
                  >
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>

                  <h3
                    className={`font-serif text-base sm:text-lg transition-colors ${
                      isHovered ? "text-[#F4D03F]" : "text-[#FFF8EA]"
                    }`}
                  >
                    {perk.title}
                  </h3>

                  <p className="text-xs text-[#F4EBDD]/65 font-light mt-1.5 leading-relaxed">
                    {perk.detail}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-[#1C1610] flex items-center justify-between text-[10px] text-[#F4EBDD]/40">
                  <span>Available 24/7</span>
                  <span className="text-[#F4D03F]">•</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
