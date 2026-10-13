import React, { useState } from "react";
import cafeInteriorImg from "../assets/cafe/interior/cafe-interior.jpg";
import { Volume2, VolumeX, Sparkles, MapPin, Coffee, Smile } from "lucide-react";

export const CafeExperience: React.FC = () => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioCtx, setAudioCtx] = useState<AudioContext | null>(null);
  const [imgError, setImgError] = useState(false);

  // Web Audio ambient cafe warm sound synthesizer (no external audio files required)
  const toggleAmbientSound = () => {
    if (!isPlayingAudio) {
      try {
        const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
        
        // Brown noise node for cozy ambient cafe warmth / gentle background hum
        const bufferSize = ctx.sampleRate * 2;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        let lastOut = 0.0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          data[i] = (lastOut + 0.02 * white) / 1.02;
          lastOut = data[i];
          data[i] *= 0.12; // soft level
        }

        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        noise.loop = true;

        // Warm lowpass filter
        const filter = ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(380, ctx.currentTime);

        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0.35, ctx.currentTime);

        noise.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);

        noise.start();
        setAudioCtx(ctx);
        setIsPlayingAudio(true);
      } catch {
        // Fallback
        setIsPlayingAudio(false);
      }
    } else {
      if (audioCtx) {
        audioCtx.close();
        setAudioCtx(null);
      }
      setIsPlayingAudio(false);
    }
  };

  return (
    <section id="experience" className="py-24 bg-[#070706] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-2">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#F4D03F] uppercase">
              Section 05 · The Atmosphere
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FFF8EA] tracking-tight">
              CASUAL. TRENDY. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4D03F] to-[#E7B93C] italic">
                ALWAYS COMFORTABLE.
              </span>
            </h2>
          </div>

          {/* Interactive Soundscape Toggle */}
          <button
            onClick={toggleAmbientSound}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#15120E] border border-[#2D251C] hover:border-[#F4D03F]/40 text-xs text-[#FFF8EA] transition-all duration-300 self-start md:self-auto"
            aria-label="Toggle Cozy Cafe Ambient Sound"
          >
            {isPlayingAudio ? (
              <>
                <Volume2 className="w-4 h-4 text-[#F4D03F] animate-pulse" />
                <span className="text-[#F4D03F] font-medium">Ambient Hum Playing</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-[#F4EBDD]/60" />
                <span>Listen to Cozy Cafe Ambiance</span>
              </>
            )}
          </button>
        </div>

        {/* Cinematic Presentation Card */}
        <div className="relative rounded-3xl overflow-hidden border border-[#2B2319] shadow-2xl shadow-black bg-[#100D0A]">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Visual Panel */}
            <div className="lg:col-span-8 relative h-[380px] sm:h-[480px] lg:h-[540px] overflow-hidden group bg-[#15120E]">
              {imgError ? (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-[#181410] via-[#110E0B] to-[#0A0907]">
                  <div className="w-16 h-16 rounded-full bg-[#1E1913] border border-[#F4D03F]/30 flex items-center justify-center text-[#F4D03F] mb-4">
                    <Coffee className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#FFF8EA]">The Warm Mug Interior</h3>
                  <p className="text-xs text-[#E7B93C] uppercase tracking-widest mt-1">Cozy Coffee Sanctuary</p>
                  <p className="text-xs text-[#F4EBDD]/60 max-w-sm mt-2">
                    Warm amber lighting, dark wooden seating, and our signature "Good Vibes Great Sips!" illuminated sign.
                  </p>
                </div>
              ) : (
                <img
                  src={cafeInteriorImg}
                  alt="Cozy interior ambiance of The Warm Mug with warm amber lighting and dark coffee house styling"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070706] via-black/30 to-transparent pointer-events-none" />

              {/* Glowing Real Neon Sign Callout */}
              <div className="absolute top-6 left-6 bg-[#070706]/85 backdrop-blur-md px-4 py-2 rounded-full border border-[#F4D03F]/30 text-xs font-semibold text-[#F4D03F] flex items-center gap-2 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[#F4D03F] animate-ping" />
                <span>"Good Vibes Great Sips!" Neon Illuminated</span>
              </div>

              {/* Bottom Location pill */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-[#FFF8EA]/90">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#F4D03F]" />
                  <span>Galaxy Blue Sapphire Plaza, Sector 4</span>
                </span>
                <span className="bg-[#070706]/80 px-3 py-1 rounded-full border border-[#3A3022]">
                  24-Hour Sanctuary
                </span>
              </div>
            </div>

            {/* Atmosphere Features Panel */}
            <div className="lg:col-span-4 p-8 sm:p-10 flex flex-col justify-between bg-[#120F0C] border-t lg:border-t-0 lg:border-l border-[#262017]">
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E7B93C]">
                    Design Identity
                  </span>
                  <h3 className="font-serif text-2xl text-[#FFF8EA] mt-1">
                    Warm Obsidian & Golden Amber
                  </h3>
                  <p className="text-xs text-[#F4EBDD]/70 font-light mt-2 leading-relaxed">
                    Designed around deep black steel accents, warm amber vertical strip lights,
                    playful yellow-and-black celebratory motifs, and classic checkerboard tiles.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#1F1913] text-[#F4D03F] flex items-center justify-center shrink-0 mt-0.5">
                      <Coffee className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-[#FFF8EA] uppercase tracking-wider">
                        Solo Dining Sanctuary
                      </h4>
                      <p className="text-xs text-[#F4EBDD]/60 mt-0.5">
                        High-top bar stools and quiet corners equipped for reading or laptop focus.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#1F1913] text-[#F4D03F] flex items-center justify-center shrink-0 mt-0.5">
                      <Smile className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-[#FFF8EA] uppercase tracking-wider">
                        Late-Night Community
                      </h4>
                      <p className="text-xs text-[#F4EBDD]/60 mt-0.5">
                        The favorite meeting ground for Greater Noida West midnight coffee lovers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#221B13]">
                <p className="text-[11px] text-[#F4EBDD]/50 italic">
                  "Step in cold, leave warm. That is our promise every hour of every day."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
