import React, { useState } from "react";
import { X, Trash2, Plus, Minus, ShoppingBag, Send, Navigation, Copy, Check, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { CAFE_DATA } from "../data/cafe";

export interface TrayItem {
  name: string;
  price: number;
  category: string;
  quantity: number;
}

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: TrayItem[];
  onUpdateQuantity: (name: string, delta: number) => void;
  onClearTray: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onClearTray,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCopyChecklist = () => {
    const lines = [
      `☕ My Visit Wishlist for The Warm Mug (Galaxy Blue Sapphire Plaza):`,
      ...items.map((it) => `- ${it.quantity}x ${it.name} (₹${it.price * it.quantity})`),
      `Estimated Total: ₹${total}`,
      `Address: ${CAFE_DATA.address.full}`,
      `Hours: Open 24 Hours`,
    ];
    navigator.clipboard.writeText(lines.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);

    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#F4D03F", "#E7B93C", "#FFF8EA"],
    });
  };

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello The Warm Mug! I am planning a visit / pickup at Galaxy Blue Sapphire Plaza.\n\nMy selected order:\n${items
        .map((it) => `• ${it.quantity}x ${it.name} (₹${it.price * it.quantity})`)
        .join("\n")}\n\nEstimated Total: ₹${total}\n\nIs this available right now? Thank you!`
    );
    // WhatsApp direct link (standard web/mobile api)
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#070706]/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-3 sm:pl-10">
        <div className="w-screen max-w-md bg-[#0F0D0A] border-l border-[#262017] shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-[#211A13] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#1C1610] text-[#F4D03F] flex items-center justify-center">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif text-lg text-[#FFF8EA]">Order / Visit Tray</h3>
                <p className="text-[11px] text-[#E7B93C]">The Warm Mug · Open 24 Hours</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#F4EBDD]/60 hover:text-[#FFF8EA] hover:bg-[#1E1812] transition-colors"
              aria-label="Close Tray"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3 sm:space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 text-[#F4EBDD]/60">
                <div className="w-16 h-16 rounded-full bg-[#18130E] border border-[#271F15] flex items-center justify-center text-[#F4D03F] mb-4">
                  <ShoppingBag className="w-7 h-7" />
                </div>
                <p className="font-serif text-lg text-[#FFF8EA]">Your Tray is Empty</p>
                <p className="text-xs text-[#F4EBDD]/50 max-w-xs mt-1">
                  Add signature cold coffees, mango matchas, pizzas, or crispy burgers from the menu!
                </p>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.name}
                  className="p-3.5 sm:p-4 rounded-xl bg-[#14110E] border border-[#241D15] flex items-center justify-between gap-3"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-[#FFF8EA] truncate">
                      {item.name}
                    </p>
                    <p className="text-[10px] text-[#E7B93C] uppercase tracking-wider mt-0.5">
                      {item.category}
                    </p>
                    <p className="text-xs font-bold text-[#F4D03F] mt-1">
                      ₹{item.price * item.quantity}
                    </p>
                  </div>

                  {/* Quantity Stepper */}
                  <div className="flex items-center gap-2 bg-[#1C1611] rounded-lg p-1 border border-[#2C2318]">
                    <button
                      onClick={() => onUpdateQuantity(item.name, -1)}
                      className="w-6 h-6 rounded flex items-center justify-center text-[#FFF8EA] hover:bg-[#282015] hover:text-[#F4D03F]"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-bold text-[#FFF8EA] w-5 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.name, 1)}
                      className="w-6 h-6 rounded flex items-center justify-center text-[#FFF8EA] hover:bg-[#282015] hover:text-[#F4D03F]"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Actions */}
          {items.length > 0 && (
            <div className="p-4 sm:p-6 border-t border-[#211A13] bg-[#0B0907] space-y-3 sm:space-y-4 pb-[calc(1.25rem+env(safe-area-inset-bottom,0px))] sm:pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#F4EBDD]/60">Estimated Total</span>
                  <p className="font-serif text-2xl font-bold text-[#F4D03F]">
                    ₹{total}
                  </p>
                </div>

                <button
                  onClick={onClearTray}
                  className="text-xs text-[#F4EBDD]/40 hover:text-red-400 flex items-center gap-1 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear</span>
                </button>
              </div>

              <div className="space-y-2">
                <button
                  onClick={handleCopyChecklist}
                  className="w-full py-3 px-4 bg-gradient-to-r from-[#F4D03F] to-[#E7B93C] text-[#070706] font-semibold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-lg hover:brightness-110 active:scale-95 transition-all"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? "Wishlist Copied to Clipboard!" : "Copy Order Wishlist"}</span>
                </button>

                <button
                  onClick={handleWhatsAppInquiry}
                  className="w-full py-3 px-4 bg-[#1A1510] hover:bg-[#241D16] text-[#FFF8EA] text-xs font-semibold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 border border-[#30251A] transition-all"
                >
                  <Send className="w-3.5 h-3.5 text-[#F4D03F]" />
                  <span>Share Order via WhatsApp</span>
                </button>

                <a
                  href={CAFE_DATA.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 text-center text-xs text-[#E7B93C] hover:underline flex items-center justify-center gap-1.5"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Head to Galaxy Blue Sapphire Plaza</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
