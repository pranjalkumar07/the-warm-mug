import React from "react";

interface BrandLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = "",
  size = 64,
  showText = true,
}) => {
  return (
    <div className={`inline-flex items-center gap-2 sm:gap-3 select-none min-w-0 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-500 hover:rotate-3"
        aria-label="The Warm Mug Logo"
        role="img"
      >
        <defs>
          <linearGradient id="warmGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F4D03F" />
            <stop offset="50%" stopColor="#E7B93C" />
            <stop offset="100%" stopColor="#C8922E" />
          </linearGradient>

          <linearGradient id="cupGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF8EA" />
            <stop offset="100%" stopColor="#F4EBDD" />
          </linearGradient>

          <filter id="badgeGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#F4D03F" floodOpacity="0.25" />
          </filter>

          {/* Arched text paths */}
          <path
            id="topCurve"
            d="M 38,120 A 82,82 0 0,1 202,120"
            fill="none"
          />
          <path
            id="bottomCurve"
            d="M 44,120 A 76,76 0 0,0 196,120"
            fill="none"
          />
        </defs>

        {/* Outer Dark Badge Circle */}
        <circle cx="120" cy="120" r="116" fill="#0B0A08" stroke="#1A1814" strokeWidth="2" />

        {/* Outer Tribal / Geometric Pattern Ring */}
        <circle cx="120" cy="120" r="110" fill="none" stroke="#26211A" strokeWidth="10" />
        {Array.from({ length: 32 }).map((_, i) => {
          const angle = (i * 360) / 32;
          const rad = (angle * Math.PI) / 180;
          const x = 120 + 110 * Math.cos(rad);
          const y = 120 + 110 * Math.sin(rad);
          const color = i % 3 === 0 ? "#F4D03F" : i % 3 === 1 ? "#7A4528" : "#FFF8EA";
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={i % 2 === 0 ? 2.5 : 1.5}
              fill={color}
            />
          );
        })}

        {/* Inner Gold Borders */}
        <circle cx="120" cy="120" r="102" fill="none" stroke="url(#warmGoldGrad)" strokeWidth="1.5" />
        <circle cx="120" cy="120" r="98" fill="none" stroke="#F4D03F" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.8" />
        <circle cx="120" cy="120" r="94" fill="#0E0C09" stroke="#3A2116" strokeWidth="1" />

        {/* Inner Backdrop Disc */}
        <circle cx="120" cy="120" r="64" fill="#15120E" stroke="rgba(244, 208, 63, 0.2)" strokeWidth="1" />

        {/* TOP ARCHED TEXT: "THE WARM MUG" */}
        <text
          fill="url(#warmGoldGrad)"
          fontSize="16"
          fontWeight="800"
          fontFamily="'DM Serif Display', Georgia, serif"
          letterSpacing="4"
          textAnchor="middle"
        >
          <textPath href="#topCurve" startOffset="50%">
            THE WARM MUG
          </textPath>
        </text>

        {/* BOTTOM ARCHED TEXT: "BREWING COMFORT" */}
        <text
          fill="#F4EBDD"
          fontSize="10"
          fontWeight="600"
          fontFamily="'Plus Jakarta Sans', sans-serif"
          letterSpacing="3"
          textAnchor="middle"
          opacity="0.9"
        >
          <textPath href="#bottomCurve" startOffset="50%">
            BREWING COMFORT
          </textPath>
        </text>

        {/* EST. & 2024 */}
        <text
          x="72"
          y="126"
          fill="#E7B93C"
          fontSize="8.5"
          fontWeight="700"
          fontFamily="'Plus Jakarta Sans', sans-serif"
          letterSpacing="1"
          textAnchor="middle"
          opacity="0.8"
        >
          EST.
        </text>

        <text
          x="168"
          y="126"
          fill="#E7B93C"
          fontSize="8.5"
          fontWeight="700"
          fontFamily="'Plus Jakarta Sans', sans-serif"
          letterSpacing="1"
          textAnchor="middle"
          opacity="0.8"
        >
          2024
        </text>

        {/* Steaming Coffee Cup Illustration */}
        <g transform="translate(120, 126)">
          {/* Steam curls */}
          <path
            d="M -6,-16 C -9,-22 -3,-27 -5,-33"
            stroke="#F4D03F"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.75"
          />
          <path
            d="M 0,-18 C -3,-24 3,-29 1,-35"
            stroke="#FFF8EA"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
            opacity="0.9"
          />
          <path
            d="M 6,-16 C 3,-22 9,-27 7,-33"
            stroke="#F4D03F"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.75"
          />

          {/* Cup Body */}
          <path
            d="M -18,-12 L 18,-12 C 18,-12 17,10 0,10 C -17,10 -18,-12 -18,-12 Z"
            fill="url(#cupGrad)"
            stroke="#0B0A08"
            strokeWidth="1.5"
          />

          {/* Cup Pattern Band */}
          <rect x="-16" y="-6" width="32" height="5" fill="#3A2116" />
          <path
            d="M -14,-3.5 L -11,-1.5 L -8,-3.5 L -5,-1.5 L -2,-3.5 L 1,-1.5 L 4,-3.5 L 7,-1.5 L 10,-3.5 L 13,-1.5"
            stroke="#F4D03F"
            strokeWidth="1.2"
            fill="none"
          />

          {/* Cup Handle */}
          <path
            d="M 17,-9 C 24,-9 24,4 16,5"
            stroke="url(#cupGrad)"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />

          {/* Saucer */}
          <ellipse cx="0" cy="11" rx="22" ry="3" fill="#FFF8EA" stroke="#0B0A08" strokeWidth="1.2" />

          {/* Small coffee beans under cup */}
          <g transform="translate(0, 20)">
            <ellipse cx="-4" cy="0" rx="3.5" ry="2" transform="rotate(-20 -4 0)" fill="#7A4528" />
            <path d="M -5.5,-1 Q -4,0 -2.5,1" stroke="#F4D03F" strokeWidth="0.6" fill="none" />

            <ellipse cx="4" cy="0" rx="3.5" ry="2" transform="rotate(20 4 0)" fill="#5A321F" />
            <path d="M 2.5,-1 Q 4,0 5.5,1" stroke="#F4D03F" strokeWidth="0.6" fill="none" />
          </g>
        </g>
      </svg>

      {showText && (
        <div className="flex flex-col min-w-0 leading-tight">
          <span className="font-serif text-sm sm:text-base md:text-lg font-bold tracking-wider text-[#FFF8EA] uppercase leading-tight truncate">
            The Warm Mug
          </span>
          <span className="text-[8.5px] sm:text-[10px] tracking-wider sm:tracking-widest text-[#F4D03F] uppercase font-medium whitespace-nowrap overflow-hidden text-ellipsis">
            Brewing Comfort · Est. 2024
          </span>
        </div>
      )}
    </div>
  );
};
