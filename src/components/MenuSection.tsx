import React, { useState, useMemo, useEffect } from "react";
import { MENU_CATEGORIES, MenuItem } from "../data/menu";
import { Search, Plus, Check, Coffee, Utensils, Flame, Sparkles, Filter } from "lucide-react";

interface MenuSectionProps {
  onAddToOrder: (item: { name: string; price: number; category: string }) => void;
  onOpenTray: () => void;
  orderCount: number;
  orderTotal: number;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onAddToOrder,
  onOpenTray,
  orderCount,
  orderTotal,
}) => {
  const [activeCategoryId, setActiveCategoryId] = useState("hot-beverages");
  const [searchQuery, setSearchQuery] = useState("");
  const [dietFilter, setDietFilter] = useState<"all" | "veg" | "non-veg">("all");
  const [addedMap, setAddedMap] = useState<Record<string, boolean>>({});
  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsPastHero(window.scrollY > 280);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeCategory = useMemo(() => {
    return MENU_CATEGORIES.find((cat) => cat.id === activeCategoryId) || MENU_CATEGORIES[0];
  }, [activeCategoryId]);

  // Filtered items based on category, search, and diet
  const displayedItems = useMemo(() => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const allItems: { item: MenuItem; categoryTitle: string }[] = [];
      MENU_CATEGORIES.forEach((cat) => {
        cat.items.forEach((item) => {
          if (
            item.name.toLowerCase().includes(q) ||
            item.description?.toLowerCase().includes(q) ||
            cat.title.toLowerCase().includes(q)
          ) {
            if (dietFilter === "all" || (dietFilter === "veg" && item.diet === "veg") || (dietFilter === "non-veg" && item.diet === "non-veg")) {
              allItems.push({ item, categoryTitle: cat.title });
            }
          }
        });
      });
      return allItems;
    }

    return activeCategory.items
      .filter((item) => {
        if (dietFilter === "all") return true;
        if (dietFilter === "veg") return item.diet === "veg";
        if (dietFilter === "non-veg") return item.diet === "non-veg";
        return true;
      })
      .map((item) => ({ item, categoryTitle: activeCategory.title }));
  }, [searchQuery, activeCategory, dietFilter]);

  const handleAddItem = (item: MenuItem, categoryTitle: string) => {
    onAddToOrder({
      name: item.name,
      price: item.price,
      category: categoryTitle,
    });
    setAddedMap((prev) => ({ ...prev, [item.name]: true }));
    setTimeout(() => {
      setAddedMap((prev) => ({ ...prev, [item.name]: false }));
    }, 1500);
  };

  return (
    <section
      id="menu"
      className={`py-24 ${orderCount > 0 ? "pb-32 sm:pb-36" : ""} bg-[#0B0A08] relative overflow-hidden border-t border-[#1C1813]`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#F4D03F] uppercase">
            Section 03 · Authentic Offerings
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#FFF8EA] tracking-tight">
            THE WARM MUG <span className="italic text-[#E7B93C]">MENU.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#F4EBDD]/70 font-light">
            Every item and price verified directly from our in-store menu boards.
            Freshly prepared to order, 24 hours a day.
          </p>
        </div>

        {/* Search & Dietary Filters Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 max-w-4xl mx-auto">
          {/* Search Box */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-[#E7B93C] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search coffee, matcha, pizza, pasta..."
              className="w-full pl-10 pr-4 py-2.5 bg-[#14110E] border border-[#2A231A] focus:border-[#F4D03F] rounded-full text-xs text-[#FFF8EA] placeholder:text-[#F4EBDD]/40 outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#F4EBDD]/50 hover:text-[#FFF8EA]"
              >
                ✕
              </button>
            )}
          </div>

          {/* Diet Segmented Control */}
          <div className="flex items-center gap-1.5 p-1 bg-[#14110E] border border-[#2A231A] rounded-full">
            <button
              onClick={() => setDietFilter("all")}
              className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all ${
                dietFilter === "all"
                  ? "bg-[#F4D03F] text-[#070706] shadow"
                  : "text-[#F4EBDD]/70 hover:text-[#FFF8EA]"
              }`}
            >
              All Items
            </button>
            <button
              onClick={() => setDietFilter("veg")}
              className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all flex items-center gap-1.5 ${
                dietFilter === "veg"
                  ? "bg-emerald-500 text-[#070706] shadow"
                  : "text-[#F4EBDD]/70 hover:text-[#FFF8EA]"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Veg Only</span>
            </button>
            <button
              onClick={() => setDietFilter("non-veg")}
              className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all flex items-center gap-1.5 ${
                dietFilter === "non-veg"
                  ? "bg-red-500 text-white shadow"
                  : "text-[#F4EBDD]/70 hover:text-[#FFF8EA]"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <span>Non-Veg</span>
            </button>
          </div>
        </div>

        {/* Categories Tab Bar */}
        {!searchQuery && (
          <div className="w-full overflow-x-auto overflow-y-hidden pb-4 mb-10 no-scrollbar">
            <div className="flex w-max items-center gap-2 pl-4 pr-8 sm:pl-6 sm:pr-10 py-1">
              {MENU_CATEGORIES.map((cat) => {
                const isActive = cat.id === activeCategoryId;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategoryId(cat.id)}
                    className={`shrink-0 px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-300 flex items-center gap-2 ${
                      isActive
                        ? "bg-gradient-to-r from-[#F4D03F] to-[#E7B93C] text-[#070706] shadow-lg shadow-[#F4D03F]/20 scale-105"
                        : "bg-[#14120E] text-[#F4EBDD]/70 hover:text-[#FFF8EA] hover:bg-[#1E1B15] border border-[#272119]"
                    }`}
                  >
                    <span>{cat.title}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                        isActive ? "bg-[#070706]/20 text-[#070706]" : "bg-[#252018] text-[#E7B93C]"
                      }`}
                    >
                      {cat.items.length}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Active Category Description */}
        {!searchQuery && (
          <div className="mb-8 text-center">
            <h3 className="font-serif text-2xl text-[#FFF8EA]">{activeCategory.title}</h3>
            <p className="text-xs text-[#E7B93C] tracking-wider uppercase mt-1">
              {activeCategory.subtitle}
            </p>
          </div>
        )}

        {/* Search Results Notification */}
        {searchQuery && (
          <div className="mb-6 flex items-center justify-between text-xs text-[#E7B93C]">
            <span>
              Showing {displayedItems.length} matching results for "{searchQuery}"
            </span>
            <button onClick={() => setSearchQuery("")} className="underline hover:text-[#FFF8EA]">
              Clear Search
            </button>
          </div>
        )}

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedItems.map(({ item, categoryTitle }) => {
            const isAdded = addedMap[item.name];
            return (
              <div
                key={item.name}
                className="group relative rounded-2xl bg-[#120F0D] border border-[#231D16] hover:border-[#F4D03F]/30 p-5 transition-all duration-300 flex flex-col justify-between hover:bg-[#16130F] hover:shadow-xl"
              >
                <div>
                  {/* Top Row: Diet icon + Popular badge + Price */}
                  <div className="flex items-start justify-between gap-3 mb-2.5">
                    <div className="flex items-center gap-2">
                      {/* Diet Marker */}
                      {item.diet === "veg" && (
                        <span className="w-4 h-4 rounded border border-emerald-600 flex items-center justify-center p-0.5" title="Vegetarian">
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        </span>
                      )}
                      {item.diet === "non-veg" && (
                        <span className="w-4 h-4 rounded border border-red-600 flex items-center justify-center p-0.5" title="Non-Vegetarian">
                          <span className="w-2 h-2 rounded-full bg-red-500" />
                        </span>
                      )}
                      {item.diet === "egg" && (
                        <span className="w-4 h-4 rounded border border-amber-600 flex items-center justify-center p-0.5" title="Contains Egg">
                          <span className="w-2 h-2 rounded-full bg-amber-500" />
                        </span>
                      )}

                      {/* Tag */}
                      {item.isSignature && (
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#F4D03F]/15 text-[#F4D03F] border border-[#F4D03F]/30">
                          Signature
                        </span>
                      )}
                      {item.isPopular && !item.isSignature && (
                        <span className="text-[10px] uppercase font-medium tracking-wider px-2 py-0.5 rounded bg-[#E7B93C]/10 text-[#E7B93C]">
                          Popular
                        </span>
                      )}
                    </div>

                    {/* Price Lockup */}
                    <div className="text-right">
                      {item.priceMedium ? (
                        <div className="text-xs font-semibold text-[#F4D03F]">
                          <span>₹{item.price}</span>
                          <span className="text-[10px] text-[#F4EBDD]/60 font-normal"> (Reg)</span>
                          <span className="text-[#F4EBDD]/40 mx-1">/</span>
                          <span>₹{item.priceMedium}</span>
                          <span className="text-[10px] text-[#F4EBDD]/60 font-normal"> (Med)</span>
                        </div>
                      ) : (
                        <span className="font-serif text-lg font-bold text-[#F4D03F]">
                          ₹{item.price}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h4 className="font-serif text-lg text-[#FFF8EA] group-hover:text-[#F4D03F] transition-colors">
                    {item.name}
                  </h4>
                  {searchQuery && (
                    <p className="text-[10px] uppercase tracking-wider text-[#E7B93C]/70 mt-0.5">
                      {categoryTitle}
                    </p>
                  )}
                  {item.description && (
                    <p className="text-xs text-[#F4EBDD]/70 font-light mt-1.5 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>

                {/* Bottom Add Action */}
                <div className="pt-4 mt-3 border-t border-[#1F1913] flex items-center justify-between">
                  <span className="text-[11px] text-[#F4EBDD]/50">Fresh to order</span>
                  <button
                    onClick={() => handleAddItem(item, categoryTitle)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      isAdded
                        ? "bg-emerald-500 text-black"
                        : "bg-[#1E1914] hover:bg-[#F4D03F] text-[#FFF8EA] hover:text-[#070706] border border-[#2D251C]"
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                        <span>Added</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {displayedItems.length === 0 && (
          <div className="py-16 text-center text-[#F4EBDD]/60">
            <p className="font-serif text-xl">No menu items matched your filter.</p>
            <p className="text-xs mt-1">Try another search term or reset dietary filters.</p>
          </div>
        )}

        {/* Floating Tray Sticky Banner if user has added items and scrolled past hero */}
        {orderCount > 0 && isPastHero && (
          <div className="fixed bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-1.5rem)] sm:w-11/12 max-w-lg bg-[#070706]/95 backdrop-blur-xl border border-[#F4D03F]/40 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl shadow-2xl shadow-black flex items-center justify-between gap-2 sm:gap-4 pb-[calc(0.625rem+env(safe-area-inset-bottom,0px))] sm:pb-4 transition-all duration-300 animate-in slide-in-from-bottom">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#F4D03F] text-[#070706] font-bold flex items-center justify-center text-xs sm:text-sm shrink-0">
                {orderCount}
              </div>
              <div className="min-w-0">
                <p className="text-[11px] sm:text-xs font-semibold text-[#FFF8EA] truncate">
                  {orderCount} {orderCount === 1 ? "Item" : "Items"} in Visit Tray
                </p>
                <p className="text-xs sm:text-sm font-bold text-[#F4D03F]">
                  Estimated Total: ₹{orderTotal}
                </p>
              </div>
            </div>

            <button
              onClick={onOpenTray}
              className="px-3.5 py-2 sm:px-5 sm:py-2.5 bg-gradient-to-r from-[#F4D03F] to-[#E7B93C] text-[#070706] text-[11px] sm:text-xs font-bold uppercase tracking-wider rounded-lg sm:rounded-xl hover:brightness-110 active:scale-95 transition-all shadow-md shrink-0 whitespace-nowrap"
            >
              Review Tray →
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
