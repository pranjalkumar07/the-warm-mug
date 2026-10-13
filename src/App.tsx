/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { BrandStory } from "./components/BrandStory";
import { SignatureDrinks } from "./components/SignatureDrinks";
import { MenuSection } from "./components/MenuSection";
import { SignatureMoment3D } from "./components/SignatureMoment3D";
import { CafeExperience } from "./components/CafeExperience";
import { Gallery } from "./components/Gallery";
import { Reviews } from "./components/Reviews";
import { WhyPeopleCome } from "./components/WhyPeopleCome";
import { VisitSection } from "./components/VisitSection";
import { Footer } from "./components/Footer";
import { OrderDrawer, TrayItem } from "./components/OrderDrawer";

export default function App() {
  const [orderItems, setOrderItems] = useState<TrayItem[]>([]);
  const [isTrayOpen, setIsTrayOpen] = useState(false);

  const handleAddToOrder = (item: { name: string; price: number; category: string }) => {
    setOrderItems((prev) => {
      const existing = prev.find((i) => i.name === item.name);
      if (existing) {
        return prev.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (name: string, delta: number) => {
    setOrderItems((prev) =>
      prev
        .map((item) => {
          if (item.name === name) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as TrayItem[]
    );
  };

  const handleClearTray = () => {
    setOrderItems([]);
  };

  const totalOrderCount = orderItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalOrderPrice = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#070706] text-[#F4EBDD] font-sans selection:bg-[#F4D03F]/20 selection:text-[#F4D03F] relative">
      {/* Primary Top Navigation */}
      <Navbar
        onOpenOrder={() => setIsTrayOpen(true)}
        orderCount={totalOrderCount}
      />

      {/* Main Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onExploreMenu={() => scrollToSection("menu")}
          onVisitCafe={() => scrollToSection("visit")}
        />

        {/* Section 01: Brand Story */}
        <BrandStory />

        {/* Section 02: Signature Experience */}
        <SignatureDrinks onAddToOrder={handleAddToOrder} />

        {/* Section 03: The Menu */}
        <MenuSection
          onAddToOrder={handleAddToOrder}
          onOpenTray={() => setIsTrayOpen(true)}
          orderCount={totalOrderCount}
          orderTotal={totalOrderPrice}
        />

        {/* Section 04: 3D Signature Moment */}
        <SignatureMoment3D />

        {/* Section 05: Cafe Atmosphere & Real Interior */}
        <CafeExperience />

        {/* Section 06: Editorial Gallery with Lightbox */}
        <Gallery />

        {/* Section 07: Verified Google Reviews */}
        <Reviews />

        {/* Section 08: Why People Come Here */}
        <WhyPeopleCome />

        {/* Section 09: Visit Us & Dark Map */}
        <VisitSection onOpenOrder={() => setIsTrayOpen(true)} />
      </main>

      {/* Final Full-Screen CTA & Footer */}
      <Footer onVisitUs={() => scrollToSection("visit")} />

      {/* Order & Visit Tray Drawer */}
      <OrderDrawer
        isOpen={isTrayOpen}
        onClose={() => setIsTrayOpen(false)}
        items={orderItems}
        onUpdateQuantity={handleUpdateQuantity}
        onClearTray={handleClearTray}
      />
    </div>
  );
}
