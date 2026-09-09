import { SectionEnvironment } from "./SectionEnvironment";

/**
 * RoadEnvironment — Area 5: Experience / The Road
 * A genuine 16-bit pixel-art medieval highway scene.
 * Features rolling hills, a stepped stone bridge crossing a shimmering pixel river,
 * dirt wagon ruts, roadside milestone obelisk, and painted wooden signpost.
 */
export function RoadEnvironment({ children }) {
  // Layer 1: 16-Bit Daytime Sky, Pixel Sun & Stepped Drifting Clouds
  const sky = (
    <div className="w-full h-full relative overflow-hidden">
      {/* 16-bit bright afternoon blue sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0284c7] via-[#38bdf8] to-[#bae6fd]" />
      <div className="absolute inset-0 dither-pattern-sky opacity-25 pointer-events-none" />

      {/* Stepped Pixel Sun */}
      <div className="absolute top-8 left-1/4 w-14 h-14 pointer-events-none">
        <svg viewBox="0 0 28 28" className="w-full h-full pixel-art" shapeRendering="crispEdges">
          <rect x="10" y="2" width="8" height="2" fill="#fef08a" opacity="0.4" />
          <rect x="10" y="24" width="8" height="2" fill="#fef08a" opacity="0.4" />
          <rect x="2" y="10" width="2" height="8" fill="#fef08a" opacity="0.4" />
          <rect x="24" y="10" width="2" height="8" fill="#fef08a" opacity="0.4" />
          <rect x="6" y="6" width="16" height="16" fill="#fef08a" />
          <rect x="8" y="4" width="12" height="20" fill="#fef08a" />
          <rect x="4" y="8" width="20" height="12" fill="#fef08a" />
          <rect x="9" y="9" width="10" height="10" fill="#ffffff" />
        </svg>
      </div>

      {/* 16-Bit Drifting Clouds */}
      <div className="absolute top-12 inset-x-0 h-24 opacity-80 animate-pixel-clouds pointer-events-none">
        <svg viewBox="0 0 384 64" className="w-full h-full pixel-art" shapeRendering="crispEdges">
          {/* Cloud 1 */}
          <g transform="translate(60, 6)" fill="#ffffff">
            <rect x="10" y="10" width="44" height="14" />
            <rect x="18" y="4" width="28" height="6" />
            <rect x="2" y="16" width="60" height="8" />
            <rect x="2" y="22" width="60" height="4" fill="#cbd5e1" />
          </g>

          {/* Cloud 2 */}
          <g transform="translate(260, 12)" fill="#ffffff">
            <rect x="12" y="8" width="36" height="12" />
            <rect x="18" y="2" width="22" height="6" />
            <rect x="4" y="14" width="52" height="8" />
            <rect x="4" y="20" width="52" height="4" fill="#cbd5e1" />
          </g>
        </svg>
      </div>
    </div>
  );

  // Layer 2: 16-Bit Distant Mountain Ridge & Pass Watchtower
  const farDistant = (
    <div className="absolute inset-x-0 bottom-24 pointer-events-none">
      <svg
        viewBox="0 0 384 90"
        className="w-full h-52 pixel-art"
        preserveAspectRatio="none"
        shapeRendering="crispEdges"
      >
        {/* Distant Blue-Violet Mountain Peaks */}
        <polygon points="0,90 0,60 35,60 35,40 70,40 70,25 90,25 90,40 120,40 120,65 155,65 155,90" fill="#312e81" />
        <polygon points="0,90 0,60 35,60 35,40 70,40 70,25 80,25 80,90" fill="#4338ca" opacity="0.5" />

        <polygon points="140,90 140,55 175,55 175,30 205,30 205,15 225,15 225,30 255,30 255,60 285,60 285,90" fill="#3730a3" />
        <polygon points="140,90 140,55 175,55 175,30 205,30 205,15 215,15 215,90" fill="#4f46e5" opacity="0.45" />

        <polygon points="270,90 270,65 305,65 305,45 335,45 335,28 355,28 355,50 384,50 384,90" fill="#312e81" />

        {/* Mountain Pass Watchtower on Middle Ridge */}
        <g transform="translate(195, 20)">
          <rect x="6" y="10" width="12" height="24" fill="#475569" />
          <rect x="4" y="8" width="16" height="4" fill="#64748b" />
          {/* Conical Red Roof */}
          <polygon points="2,8 12,0 22,8" fill="#b91c1c" />
          <rect x="11" y="0" width="1" height="3" fill="#facc15" />
          {/* Arrow slit */}
          <rect x="11" y="15" width="2" height="5" fill="#0f172a" />
        </g>
      </svg>
    </div>
  );

  // Layer 3: 16-Bit Stepped Arched Stone Bridge & Shimmering Blue River
  const midground = (
    <div className="absolute inset-x-0 bottom-12 pointer-events-none">
      <svg
        viewBox="0 0 384 72"
        className="w-full h-40 pixel-art"
        preserveAspectRatio="none"
        shapeRendering="crispEdges"
      >
        {/* Rolling Emerald Green Riverbank Foothills */}
        <polygon points="0,72 0,38 110,32 180,38 290,30 384,36 384,72" fill="#15803d" />
        <polygon points="0,72 0,44 110,38 180,44 290,36 384,42 384,72" fill="#166534" />

        {/* 16-Bit River Basin (Spanning left to right diagonally) */}
        <rect x="0" y="52" width="384" height="20" fill="#0284c7" />

        {/* Stepped Horizontal Blue Water Scanlines */}
        <g className="animate-pixel-water">
          <rect x="10" y="54" width="48" height="2" fill="#38bdf8" />
          <rect x="90" y="56" width="60" height="2" fill="#7dd3fc" />
          <rect x="180" y="54" width="70" height="2" fill="#38bdf8" />
          <rect x="280" y="56" width="55" height="2" fill="#7dd3fc" />

          <rect x="35" y="60" width="65" height="2" fill="#7dd3fc" />
          <rect x="130" y="62" width="45" height="2" fill="#38bdf8" />
          <rect x="220" y="60" width="50" height="2" fill="#7dd3fc" />
          <rect x="310" y="62" width="60" height="2" fill="#38bdf8" />

          {/* White glint pixels */}
          <rect x="45" y="54" width="3" height="1" fill="#ffffff" />
          <rect x="120" y="56" width="4" height="1" fill="#ffffff" />
          <rect x="205" y="54" width="3" height="1" fill="#ffffff" />
          <rect x="300" y="60" width="4" height="1" fill="#ffffff" />
        </g>

        {/* 16-Bit Stepped Arched Stone Bridge across the River */}
        <g transform="translate(130, 26)">
          {/* Bridge Roadway Deck */}
          <rect x="0" y="16" width="124" height="8" fill="#64748b" />
          <rect x="0" y="14" width="124" height="2" fill="#94a3b8" />
          {/* Bridge Stone Parapet / Railing */}
          <rect x="0" y="10" width="124" height="4" fill="#475569" />
          {[0, 16, 32, 48, 64, 80, 96, 112].map((px) => (
            <rect key={px} x={px} y="8" width="6" height="4" fill="#334155" />
          ))}

          {/* Bridge Stone Masonry Piers */}
          <rect x="0" y="24" width="22" height="28" fill="#475569" />
          <rect x="102" y="24" width="22" height="28" fill="#475569" />
          <rect x="52" y="24" width="20" height="28" fill="#475569" />

          {/* Stepped Arch Vaults */}
          {/* Arch 1 (Left) */}
          <polygon points="22,52 22,34 32,24 42,24 52,34 52,52 46,52 40,32 34,32 28,52" fill="#0f172a" />
          {/* Arch 2 (Right) */}
          <polygon points="72,52 72,34 82,24 92,24 102,34 102,52 96,52 90,32 84,32 78,52" fill="#0f172a" />

          {/* Stone block texture lines */}
          <line x1="0" y1="20" x2="124" y2="20" stroke="#334155" strokeWidth="1" />
          <line x1="0" y1="28" x2="22" y2="28" stroke="#334155" strokeWidth="1" />
          <line x1="52" y1="28" x2="72" y2="28" stroke="#334155" strokeWidth="1" />
          <line x1="102" y1="28" x2="124" y2="28" stroke="#334155" strokeWidth="1" />
        </g>

        {/* Riverbank Pine Trees */}
        {[
          { x: 12, h: 36, w: 16 },
          { x: 45, h: 42, w: 18 },
          { x: 80, h: 32, w: 14 },
          { x: 275, h: 38, w: 16 },
          { x: 310, h: 44, w: 18 },
          { x: 350, h: 34, w: 14 },
        ].map((tree, i) => (
          <g key={i} transform={`translate(${tree.x}, ${54 - tree.h})`}>
            <rect x={tree.w / 2 - 1.5} y={tree.h - 8} width="3" height="8" fill="#3b1d06" />
            <rect x="0" y={tree.h - 18} width={tree.w} height="10" fill="#14532d" />
            <rect x="2" y={tree.h - 26} width={tree.w - 4} height="9" fill="#15803d" />
            <rect x="4" y={tree.h - 32} width={tree.w - 8} height="7" fill="#22c55e" />
          </g>
        ))}
      </svg>
    </div>
  );

  // Layer 4: 16-Bit Stepped Dirt Highway Ground Plane & Wagon Ruts
  const ground = (
    <div className="w-full h-24 relative overflow-hidden pointer-events-none">
      <svg
        viewBox="0 0 384 32"
        className="w-full h-full pixel-art"
        preserveAspectRatio="none"
        shapeRendering="crispEdges"
      >
        {/* Dirt Road Foundation */}
        <rect x="0" y="0" width="384" height="32" fill="#78350f" />
        <rect x="0" y="8" width="384" height="24" fill="#54280e" />

        {/* Stepped Green Grass Fringes on Road Borders */}
        {Array.from({ length: 48 }).map((_, i) => (
          <rect key={i} x={i * 8} y={i % 3 === 0 ? "0" : "2"} width="4" height="2" fill="#16a34a" />
        ))}
        {Array.from({ length: 48 }).map((_, i) => (
          <rect key={`b-${i}`} x={i * 8} y={i % 2 === 0 ? "28" : "30"} width="5" height="2" fill="#15803d" />
        ))}

        {/* Parallel Wagon Wheel Rut Tracks (Dark indented soil) */}
        <rect x="0" y="10" width="384" height="3" fill="#3c1b07" />
        <rect x="0" y="20" width="384" height="3" fill="#3c1b07" />

        {/* Embedded Roadway Cobblestones */}
        {[30, 85, 140, 195, 250, 310, 360].map((rx, idx) => (
          <g key={idx} transform={`translate(${rx}, 14)`}>
            <rect x="0" y="0" width="10" height="4" fill="#a8a29e" />
            <rect x="1" y="1" width="8" height="2" fill="#d6d3d1" />
          </g>
        ))}
      </svg>
    </div>
  );

  // Layer 6: 16-Bit Milestone Obelisk & Multi-Armed Directional Signpost
  const foregroundDecor = (
    <div className="w-full h-full flex justify-between pointer-events-none px-4 sm:px-12">
      {/* Left: 16-Bit Carved Stone Milestone Obelisk ("V") */}
      <div className="relative self-end mb-16 flex flex-col items-center opacity-95">
        <svg viewBox="0 0 20 44" className="w-8 h-20 pixel-art" shapeRendering="crispEdges">
          {/* Obelisk Pyramidion Top */}
          <polygon points="10,2 3,12 17,12" fill="#94a3b8" />
          <polygon points="10,2 10,12 17,12" fill="#64748b" />
          {/* Obelisk Shaft */}
          <rect x="3" y="12" width="14" height="24" fill="#94a3b8" />
          <rect x="10" y="12" width="7" height="24" fill="#64748b" />
          {/* Carved Roman Numeral "V" */}
          <polygon points="7,17 9,17 10,23 11,17 13,17 10,25" fill="#1e293b" />
          {/* Base Plinth */}
          <rect x="1" y="36" width="18" height="8" fill="#475569" />
          {/* Moss pixel specks */}
          <rect x="2" y="38" width="3" height="4" fill="#15803d" />
          <rect x="14" y="37" width="4" height="3" fill="#15803d" />
        </svg>
      </div>

      {/* Right: Multi-Armed Painted Wooden Signpost */}
      <div className="relative self-end mb-16 flex flex-col items-center opacity-95 hidden md:flex">
        <svg viewBox="0 0 36 60" className="w-14 h-24 pixel-art" shapeRendering="crispEdges">
          {/* Central Post */}
          <rect x="16" y="0" width="4" height="60" fill="#451a03" />

          {/* Top Sign: "➔ The Peaks" (Pointing Right) */}
          <polygon points="14,6 32,6 36,11 32,16 14,16" fill="#854d0e" stroke="#24140a" strokeWidth="1" />
          <rect x="17" y="10" width="12" height="2" fill="#fef08a" />

          {/* Middle Sign: "⬅ Guild Hall" (Pointing Left) */}
          <polygon points="22,20 4,20 0,25 4,30 22,30" fill="#1e3a8a" stroke="#24140a" strokeWidth="1" />
          <rect x="7" y="24" width="12" height="2" fill="#fef08a" />

          {/* Lower Sign: "➔ Harbor" (Pointing Right) */}
          <polygon points="14,34 30,34 34,39 30,44 14,44" fill="#15803d" stroke="#24140a" strokeWidth="1" />
          <rect x="17" y="38" width="10" height="2" fill="#fef08a" />
        </svg>
      </div>
    </div>
  );

  return (
    <SectionEnvironment
      id="experience"
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
