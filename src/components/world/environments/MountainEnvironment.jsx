import { SectionEnvironment } from "./SectionEnvironment";

/**
 * MountainEnvironment — Area 6: Achievements / The Mountain
 * A genuine 16-bit pixel-art alpine summit in glorious golden-hour sunset.
 * Features jagged snow-capped peaks, stepped cliffs, a cascading pixel waterfall,
 * rock-cut stairs, and a fluttering summit expedition banner.
 */
export function MountainEnvironment({ children }) {
  // Layer 1: Golden-Hour Stepped Sunset Sky, Setting Sun & Soaring Eagle
  const sky = (
    <div className="w-full h-full relative overflow-hidden">
      {/* 16-bit golden-hour alpine sunset: Deep violet -> Magenta -> Blazing orange -> Amber */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2e1065] via-[#701a75] via-[#c2410c] to-[#f59e0b]" />
      <div className="absolute inset-0 dither-pattern-sky opacity-20 pointer-events-none" />

      {/* Sinking Stepped Pixel Sun on the Mountain Ridge */}
      <div className="absolute top-16 right-1/3 w-16 h-16 pointer-events-none">
        <svg viewBox="0 0 32 32" className="w-full h-full pixel-art" shapeRendering="crispEdges">
          {/* Outer Sun Glow */}
          <rect x="12" y="2" width="8" height="2" fill="#fef08a" opacity="0.4" />
          <rect x="12" y="28" width="8" height="2" fill="#fef08a" opacity="0.4" />
          <rect x="2" y="12" width="2" height="8" fill="#fef08a" opacity="0.4" />
          <rect x="28" y="12" width="2" height="8" fill="#fef08a" opacity="0.4" />
          {/* Main Sun Disk */}
          <rect x="8" y="8" width="16" height="16" fill="#fef08a" />
          <rect x="10" y="6" width="12" height="20" fill="#fef08a" />
          <rect x="6" y="10" width="20" height="12" fill="#fef08a" />
          <rect x="10" y="10" width="12" height="12" fill="#ffffff" />
        </svg>
      </div>

      {/* Soaring Alpine Eagle / Mountain Raptor */}
      <div className="absolute top-12 left-1/4 pointer-events-none">
        <svg viewBox="0 0 20 10" className="w-7 h-3.5 pixel-art text-[#311042]" fill="currentColor" shapeRendering="crispEdges">
          <rect x="0" y="0" width="4" height="2" />
          <rect x="4" y="2" width="4" height="2" />
          <rect x="8" y="4" width="4" height="3" />
          <rect x="12" y="2" width="4" height="2" />
          <rect x="16" y="0" width="4" height="2" />
          <rect x="9" y="7" width="2" height="3" />
        </svg>
      </div>
    </div>
  );

  // Layer 2: 16-Bit Distant Jagged Snow-Capped Alpine Peaks
  const farDistant = (
    <div className="absolute inset-x-0 bottom-24 pointer-events-none">
      <svg
        viewBox="0 0 384 100"
        className="w-full h-56 pixel-art"
        preserveAspectRatio="none"
        shapeRendering="crispEdges"
      >
        {/* Deep Violet Base Mountain Silhouettes */}
        {/* Peak 1: Left Crag */}
        <polygon points="0,100 0,65 25,65 25,45 50,45 50,25 70,25 70,10 90,10 90,30 115,30 115,55 145,55 145,100" fill="#3b0764" />
        {/* Lit West Slope */}
        <polygon points="0,100 0,65 25,65 25,45 50,45 50,25 70,25 70,10 80,10 80,100" fill="#6b21a8" opacity="0.45" />
        {/* Snow Cap */}
        <polygon points="65,25 70,10 90,10 90,20 85,25" fill="#f8fafc" />
        <rect x="70" y="10" width="10" height="4" fill="#ffffff" />

        {/* Peak 2: Highest Summit (Center-Right) */}
        <polygon points="160,100 160,60 195,60 195,35 225,35 225,12 245,12 245,35 275,35 275,65 310,65 310,100" fill="#2e1065" />
        {/* Lit West Slope */}
        <polygon points="160,100 160,60 195,60 195,35 225,35 225,12 235,12 235,100" fill="#581c87" opacity="0.5" />
        {/* High Summit Snow Cap */}
        <polygon points="215,35 225,12 245,12 245,24 235,35" fill="#f8fafc" />
        <rect x="225" y="12" width="12" height="5" fill="#ffffff" />

        {/* Peak 3: Right Jagged Ridge */}
        <polygon points="290,100 290,70 320,70 320,48 345,48 345,28 365,28 365,50 384,50 384,100" fill="#3b0764" />
        <polygon points="340,48 345,28 365,28 365,38 355,48" fill="#f8fafc" />
      </svg>
    </div>
  );

  // Layer 3: 16-Bit Rocky Cliffs, Stepped Waterfall & Carved Alpine Steps
  const midground = (
    <div className="absolute inset-x-0 bottom-10 pointer-events-none">
      <svg
        viewBox="0 0 384 80"
        className="w-full h-48 pixel-art"
        preserveAspectRatio="none"
        shapeRendering="crispEdges"
      >
        {/* Stepped Rocky Cliff Formations */}
        {/* Left Cliff Face */}
        <polygon points="0,80 0,25 45,25 45,40 85,40 85,80" fill="#1e293b" />
        <rect x="0" y="25" width="45" height="4" fill="#334155" />
        <rect x="45" y="40" width="40" height="4" fill="#334155" />

        {/* Right Cliff Face with Waterfall Gutter */}
        <polygon points="280,80 280,30 330,30 330,15 384,15 384,80" fill="#1e293b" />
        <rect x="280" y="30" width="50" height="4" fill="#334155" />
        <rect x="330" y="15" width="54" height="4" fill="#334155" />

        {/* Carved Alpine Steps (Ascending Left Cliff) */}
        {[
          { x: 10, y: 55, w: 14 },
          { x: 18, y: 48, w: 14 },
          { x: 26, y: 41, w: 14 },
          { x: 34, y: 34, w: 14 },
        ].map((st, i) => (
          <g key={i}>
            <rect x={st.x} y={st.y} width={st.w} height="4" fill="#475569" />
            <rect x={st.x} y={st.y} width={st.w} height="1" fill="#94a3b8" />
          </g>
        ))}

        {/* 16-Bit Cascading Waterfall on the Right Cliff */}
        <g transform="translate(305, 18)">
          {/* Rock Channel Behind Waterfall */}
          <rect x="2" y="0" width="16" height="62" fill="#0f172a" />

          {/* Stepped Cascading Water Stream */}
          <g className="animate-pixel-waterfall">
            <rect x="4" y="0" width="12" height="60" fill="#0284c7" />
            <rect x="6" y="0" width="8" height="60" fill="#38bdf8" />
            <rect x="8" y="0" width="4" height="60" fill="#e0f2fe" />
            {/* White froth lines */}
            <rect x="7" y="6" width="3" height="4" fill="#ffffff" />
            <rect x="8" y="20" width="4" height="5" fill="#ffffff" />
            <rect x="6" y="36" width="5" height="4" fill="#ffffff" />
            <rect x="7" y="50" width="4" height="5" fill="#ffffff" />
          </g>

          {/* Stepped Water Splash & Mist Pool at Bottom */}
          <rect x="-4" y="56" width="28" height="6" fill="#38bdf8" />
          <rect x="-8" y="60" width="36" height="4" fill="#e0f2fe" />
          <rect x="-2" y="58" width="8" height="2" fill="#ffffff" />
          <rect x="14" y="58" width="8" height="2" fill="#ffffff" />
        </g>

        {/* Alpine Pines Clinging to Rock Ledges */}
        {[
          { x: 55, h: 32, w: 14 },
          { x: 72, h: 26, w: 12 },
          { x: 260, h: 36, w: 16 },
          { x: 350, h: 30, w: 14 },
        ].map((tree, i) => (
          <g key={i} transform={`translate(${tree.x}, ${78 - tree.h})`}>
            <rect x={tree.w / 2 - 1.5} y={tree.h - 6} width="3" height="6" fill="#3b1d06" />
            <rect x="0" y={tree.h - 16} width={tree.w} height="10" fill="#14532d" />
            <rect x="2" y={tree.h - 22} width={tree.w - 4} height="8" fill="#15803d" />
            <rect x="4" y={tree.h - 28} width={tree.w - 8} height="7" fill="#22c55e" />
          </g>
        ))}
      </svg>
    </div>
  );

  // Layer 4: 16-Bit Alpine Slate Scree & Lichen Ground Plane
  const ground = (
    <div className="w-full h-24 relative overflow-hidden pointer-events-none">
      <svg
        viewBox="0 0 384 32"
        className="w-full h-full pixel-art"
        preserveAspectRatio="none"
        shapeRendering="crispEdges"
      >
        <rect x="0" y="0" width="384" height="32" fill="#0f172a" />
        <rect x="0" y="6" width="384" height="26" fill="#1e293b" />

        {/* Stepped Slate Rim */}
        {Array.from({ length: 48 }).map((_, i) => (
          <rect key={i} x={i * 8} y={i % 2 === 0 ? "0" : "2"} width="5" height="3" fill="#334155" />
        ))}

        {/* Alpine Lichen Spots (Gold & Emerald) */}
        {[20, 60, 110, 160, 210, 270, 320, 360].map((lx, idx) => (
          <g key={idx} transform={`translate(${lx}, 12)`}>
            <rect x="0" y="0" width="6" height="4" fill="#eab308" />
            <rect x="1" y="1" width="4" height="2" fill="#facc15" />
            <rect x="6" y="2" width="4" height="3" fill="#15803d" />
          </g>
        ))}

        {/* Slate Scree Rock Clusters */}
        {[40, 140, 240, 330].map((rx, idx) => (
          <g key={idx} transform={`translate(${rx}, 18)`}>
            <rect x="0" y="2" width="10" height="6" fill="#475569" />
            <rect x="2" y="0" width="8" height="6" fill="#64748b" />
          </g>
        ))}
      </svg>
    </div>
  );

  // Layer 6: 16-Bit Summit Banner & Weathered Stone Cairn
  const foregroundDecor = (
    <div className="w-full h-full flex justify-between pointer-events-none px-4 sm:px-12">
      {/* Left: 16-Bit Summit Flag on Weathered Timber Mast */}
      <div className="relative self-end mb-16 flex flex-col items-center opacity-95">
        <svg viewBox="0 0 32 56" className="w-12 h-24 pixel-art" shapeRendering="crispEdges">
          {/* Wooden Pole */}
          <rect x="6" y="0" width="3" height="56" fill="#451a03" />
          <rect x="5" y="0" width="5" height="3" fill="#facc15" />

          {/* Fluttering Summit Banner (Crimson & Gold) */}
          <polygon points="9,4 30,4 25,14 30,24 9,24" fill="#b91c1c" />
          {/* Gold Trim */}
          <rect x="9" y="4" width="21" height="2" fill="#facc15" />
          <rect x="9" y="22" width="21" height="2" fill="#facc15" />
          {/* Gold Crown / Star Crest */}
          <rect x="14" y="10" width="6" height="8" fill="#fde047" />
          <rect x="12" y="12" width="10" height="4" fill="#fde047" />

          {/* Stone Base Cairn holding the pole */}
          <rect x="0" y="46" width="15" height="10" fill="#334155" />
          <rect x="2" y="42" width="11" height="6" fill="#475569" />
        </svg>
      </div>

      {/* Right: Alpine Stone Cairn & Edelweiss Flower */}
      <div className="relative self-end mb-16 flex flex-col items-center opacity-95 hidden md:flex">
        <svg viewBox="0 0 28 36" className="w-10 h-14 pixel-art" shapeRendering="crispEdges">
          {/* Stone Cairn Stack */}
          <rect x="2" y="26" width="24" height="10" fill="#475569" />
          <rect x="5" y="18" width="18" height="9" fill="#64748b" />
          <rect x="8" y="10" width="12" height="9" fill="#94a3b8" />
          <rect x="11" y="4" width="6" height="7" fill="#cbd5e1" />

          {/* Alpine Edelweiss Wildflower beside cairn */}
          <rect x="0" y="22" width="2" height="10" fill="#15803d" />
          {/* White Star Petals */}
          <rect x="-2" y="18" width="6" height="4" fill="#f8fafc" />
          <rect x="-1" y="17" width="4" height="6" fill="#f8fafc" />
          <rect x="0" y="19" width="2" height="2" fill="#facc15" />
        </svg>
      </div>
    </div>
  );

  return (
    <SectionEnvironment
      id="achievements"
      sky={sky}
      farDistant={farDistant}
      midground={midground}
      ground={ground}
      foregroundDecor={foregroundDecor}
      scrimType="center"
    >
      {children}
    </SectionEnvironment>
  );
}
