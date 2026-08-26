import React from 'react';

// Thin full-width band of Yoruba Adire (indigo resist-dye) motifs that
// continuously scrolls and "reconstructs" — dashes draw the linework in
// while the tile pattern glides horizontally. Height stays <= 80px.
export default function AdireBand() {
  return (
    <div className="adire-band" aria-hidden="true">
      <svg
        className="adire-svg"
        viewBox="0 0 240 64"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* One repeating 80x64 Adire tile */}
          <g id="adire-tile">
            {/* concentric circles (eleso motif) */}
            <circle cx="20" cy="32" r="13" />
            <circle cx="20" cy="32" r="8" />
            <circle cx="20" cy="32" r="3.2" />
            {/* cross-hatch diamonds */}
            <path d="M40 14 L52 32 L40 50 L28 32 Z" />
            <path d="M40 24 L46 32 L40 40 L34 32 Z" />
            {/* dotted column */}
            <circle cx="64" cy="14" r="2.2" />
            <circle cx="64" cy="32" r="2.2" />
            <circle cx="64" cy="50" r="2.2" />
            {/* sweeping leaf strokes */}
            <path d="M6 6 Q20 2 34 6" />
            <path d="M6 58 Q20 62 34 58" />
            <path d="M54 8 q10 24 0 48" />
            <path d="M74 8 q-10 24 0 48" />
          </g>
        </defs>

        {/* Two rows of tiles laid edge to edge, group glides left */}
        <g className="adire-scroll" fill="none" stroke="var(--color-indigo)" strokeWidth="1.6" strokeLinecap="round">
          {Array.from({ length: 4 }).map((_, i) => (
            <use key={i} href="#adire-tile" x={i * 80} />
          ))}
          {/* duplicate run for seamless loop */}
          {Array.from({ length: 4 }).map((_, i) => (
            <use key={`d${i}`} href="#adire-tile" x={320 + i * 80} />
          ))}
        </g>
      </svg>

      <style>{`
        .adire-band {
          width: 100%;
          height: 64px;
          background: var(--color-bg);
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
          overflow: hidden;
          position: relative;
        }
        .adire-svg {
          width: 200%;
          height: 100%;
          opacity: 0.5;
        }
        /* horizontal glide = "moving" */
        .adire-scroll {
          animation: adireGlide 18s linear infinite;
        }
        /* dash draw = "reconstructing" */
        .adire-scroll path,
        .adire-scroll circle {
          stroke-dasharray: 90;
          animation: adireDraw 6s ease-in-out infinite alternate;
        }
        @keyframes adireGlide {
          from { transform: translateX(0); }
          to { transform: translateX(-320px); }
        }
        @keyframes adireDraw {
          0% { stroke-dashoffset: 90; }
          55%, 100% { stroke-dashoffset: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .adire-scroll,
          .adire-scroll path,
          .adire-scroll circle { animation: none; }
          .adire-scroll path, .adire-scroll circle { stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  );
}
