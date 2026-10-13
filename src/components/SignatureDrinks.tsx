import React, { useState } from "react";
import coldCoffeeImg from "../assets/cafe/drinks/cold-coffee.jpg";
import mangoMatchaImg from "../assets/cafe/drinks/mango-matcha.jpg";
import watermelonMojitoImg from "../assets/cafe/drinks/watermelon-mojito.jpg";
import comboPuffImg from "../assets/cafe/food/combo-coffee-puff.jpg";
import { Plus, Check, Sparkles, Star, Coffee } from "lucide-react";

interface SignatureDrinksProps {
  onAddToOrder: (item: { name: string; price: number; category: string }) => void;
}

export const SignatureDrinks: React.FC<SignatureDrinksProps> = ({ onAddToOrder }) => {
  const [addedMap, setAddedMap] = useState<Record<string, boolean>>({});
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const signatures = [
    {
      id: "sig-cold-coffee",
      name: "Cold Coffee with Whipped Cream",
      category: "Cold Beverages",
      price: 159,
      tag: "Owner's Special",
      description: "Thick, creamy iced blended coffee piled high with fresh whipped cream and decadent dark chocolate fudge swirls.",
      image: coldCoffeeImg,
      badgeColor: "bg-[#F4D03F] text-[#070706]",
    },
    {
      id: "sig-mango-matcha",
      name: "Mango Matcha Iced Latte",
      category: "Cold Beverages",
      price: 189,
      tag: "Trending Sensation",
      description: "Artisanal tri-layer creation: sweet ripe Alphonso mango puree, velvety chilled milk, and ceremonial Japanese matcha froth.",
      image: mangoMatchaImg,
      badgeColor: "bg-[#E7B93C] text-[#070706]",
    },
    {
      id: "sig-watermelon-mojito",
      name: "Chilled Watermelon Mojito",
      category: "Mocktails",
      price: 109,
      tag: "Summer Crisp",
      description: "Sparkling crushed ice, ruby red fresh watermelon nectar, muddled garden mint sprigs, and a burst of zesty fresh lime.",
      image: watermelonMojitoImg,
      badgeColor: "bg-[#F4EBDD] text-[#070706]",
    },
    {
      id: "sig-combo-puff",
      name: "Cold Coffee + Veg Puff Combo",
      category: "Perfect Combo",
      price: 179,
      tag: "Value Combo @ ₹179",
      description: "Chill sip + tasty bite! Tall iced cold coffee with whipped cream paired with a golden flaky oven-crisp spiced vegetable puff.",
      image: comboPuffImg,
      badgeColor: "bg-gradient-to-r from-[#F4D03F] to-[#E7B93C] text-[#070706]",
    },
  ];

  const handleAdd = (sig: typeof signatures[0]) => {
    onAddToOrder({
      name: sig.name,
      price: sig.price,
      category: sig.category,
    });
    setAddedMap((prev) => ({ ...prev, [sig.id]: true }));
    setTimeout(() => {
      setAddedMap((prev) => ({ ...prev, [sig.id]: false }));
    }, 1800);
  };

  return (
    <section id="signatures" className="py-24 bg-[#070706] relative overflow-hidden">
      {/* Background warm glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#F4D03F]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-2">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#F4D03F] uppercase">
              Section 02 · Signature Experience
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FFF8EA] tracking-tight">
              CRAFTED SIPS & <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4D03F] to-[#E7B93C] italic">
                ICONIC COMBOS.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#F4EBDD]/70 font-light leading-relaxed">
            The drinks our guests travel across Greater Noida for. Captured straight from our counter,
            blended to order with premium ingredients and unmatched comfort.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {signatures.map((sig) => {
            const isAdded = addedMap[sig.id];
            return (
              <div
                key={sig.id}
                className="group relative rounded-2xl bg-[#0F0D0B] border border-[#25201A] hover:border-[#F4D03F]/40 transition-all duration-500 overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:shadow-[#F4D03F]/10 hover:-translate-y-1.5"
              >
                <div>
                  {/* Image Container with Zoom */}
                  <div className="relative h-64 overflow-hidden bg-[#161310]">
                    {imgErrors[sig.id] ? (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-[#15120E] text-center p-4">
                        <Coffee className="w-10 h-10 text-[#F4D03F] mb-2 opacity-75" />
                        <span className="font-serif text-sm text-[#FFF8EA]">{sig.name}</span>
                        <span className="text-[10px] text-[#E7B93C] uppercase tracking-wider mt-1">{sig.category}</span>
                      </div>
                    ) : (
                      <img
                        src={sig.image}
                        alt={sig.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        onError={() => setImgErrors((prev) => ({ ...prev, [sig.id]: true }))}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0D0B] via-transparent to-transparent opacity-80 pointer-events-none" />

                    {/* Tag Badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase rounded-full shadow-md ${sig.badgeColor}`}>
                        {sig.tag}
                      </span>
                    </div>

                    {/* Price Tag */}
                    <div className="absolute bottom-3 right-3 bg-[#070706]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#F4D03F]/30 text-sm font-bold text-[#F4D03F]">
                      ₹{sig.price}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-2">
                    <p className="text-[11px] font-medium uppercase tracking-wider text-[#E7B93C]">
                      {sig.category}
                    </p>
                    <h3 className="font-serif text-lg text-[#FFF8EA] group-hover:text-[#F4D03F] transition-colors leading-snug">
                      {sig.name}
                    </h3>
                    <p className="text-xs text-[#F4EBDD]/70 font-light leading-relaxed line-clamp-3">
                      {sig.description}
                    </p>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-5 pt-0">
                  <button
                    onClick={() => handleAdd(sig)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 ${
                      isAdded
                        ? "bg-emerald-500 text-black shadow-lg"
                        : "bg-[#1A1612] hover:bg-[#F4D03F] text-[#FFF8EA] hover:text-[#070706] border border-[#2E271F] hover:border-[#F4D03F]"
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                        <span>Added to Tray</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add to Tray (₹{sig.price})</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
