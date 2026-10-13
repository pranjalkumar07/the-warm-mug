import React, { useState, useEffect } from "react";
import { CoffeeScene } from "./3d/CoffeeScene";
import { Sparkles, Compass } from "lucide-react";

export const SignatureMoment3D: React.FC = () => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 1200);
    const timer2 = setTimeout(() => setStage(2), 3400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <section className="relative min-h-[75vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#070706] via-[#0D0B08] to-[#070706] border-y border-[#1A1612]">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F4D03F]/8 rounded-full blur-[180px] pointer-events-none" />

      {/* 3D Scene Container */}
      <div className="absolute inset-0 w-full h-full opacity-85">
        <CoffeeScene interactive={true} intensity="ambient" showBeans={true} />
      </div>

      {/* Cinematic Text Reveal Overlays (Semantic DOM Layer) */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pointer-events-none select-none">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#070706]/70 backdrop-blur-md border border-[#F4D03F]/20 text-[#E7B93C] text-xs font-semibold uppercase tracking-widest mb-6">
          <Sparkles className="w-3.5 h-3.5 fill-[#F4D03F]" />
          <span>The Warm Mug Ritual</span>
        </div>

        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-[#FFF8EA] tracking-tight leading-none mb-4">
          <span className="block transition-all duration-1000 transform translate-y-0 opacity-100">
            TAKE A MOMENT.
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F4D03F] via-[#E7B93C] to-[#C8922E] italic mt-2">
            MAKE IT A WARM ONE.
          </span>
        </h2>

        <p className="max-w-lg mx-auto text-sm sm:text-base text-[#F4EBDD]/80 font-light mt-6">
          Slow-brewed rich espresso, steamed velvety milk, and a quiet retreat from the bustling city.
          Every cup is poured with genuine comfort in mind.
        </p>

        <div className="mt-8 flex justify-center pointer-events-auto">
          <a
            href="#visit"
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#F4D03F] hover:text-[#FFF8EA] transition-colors py-2 px-4 rounded-full border border-[#F4D03F]/30 hover:border-[#F4D03F] bg-[#070706]/60 backdrop-blur-sm"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Find Us at Galaxy Blue Sapphire Plaza →</span>
          </a>
        </div>
      </div>
    </section>
  );
};
