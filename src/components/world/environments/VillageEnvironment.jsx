import { SectionEnvironment } from "./SectionEnvironment";

/**
 * VillageEnvironment — Area 2: About / The Village
 * A genuine 16-bit pixel-art medieval village with stepped terracotta rooftops,
 * half-timbered cottages, pixel chimney smoke, hanging festival pennants, and village props.
 */
export function VillageEnvironment({ children }) {
  // Layer 1: 16-Bit Daytime Sky & Pixel Festival Bunting
  const sky = (
    <div className="w-full h-full relative overflow-hidden">
      {/* 16-bit warm daylight sky with dither band */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0369a1] via-[#0284c7] via-[#38bdf8] to-[#fef08a]/30" />
      <div className="absolute inset-0 dither-pattern-sky opacity-25 pointer-events-none" />

      {/* 16-Bit Hanging Festival Pennants (Triangular Pixel Bunting) */}
      <div className="absolute top-8 inset-x-0 h-10 pointer-events-none">
        <svg viewBox="0 0 384 16" className="w-full h-full pixel-art" preserveAspectRatio="none" shapeRendering="crispEdges">
          {/* Suspension wire */}
          <line x1="0" y1="2" x2="384" y2="2" stroke="#451a03" strokeWidth="1" />
          {/* Colorful Pixel Triangle Pennants */}
          {[
            { x: 16, color: "#dc2626" },
            { x: 44, color: "#facc15" },
            { x: 72, color: "#2563eb" },
            { x: 100, color: "#16a34a" },
            { x: 128, color: "#9333ea" },
            { x: 156, color: "#ea580c" },
            { x: 184, color: "#dc2626" },
            { x: 212, color: "#facc15" },
            { x: 240, color: "#2563eb" },
            { x: 268, color: "#16a34a" },
            { x: 296, color: "#9333ea" },
            { x: 324, color: "#ea580c" },
            { x: 352, color: "#dc2626" },
          ].map((flag, i) => (
            <polygon
              key={i}
              points={`${flag.x},2 ${flag.x + 12},2 ${flag.x + 6},10`}
              fill={flag.color}
            />
          ))}
        </svg>
      </div>
    </div>
  );

  // Layer 2: Distant Village Rooftops & Church Bell Tower
  const farDistant = (
    <div className="absolute inset-x-0 bottom-24 pointer-events-none">
      <svg viewBox="0 0 384 80" className="w-full h-44 pixel-art" preserveAspectRatio="none" shapeRendering="crispEdges">
        {/* Distant rolling green ridge */}
        <polygon points="0,80 0,55 120,45 240,55 384,40 384,80" fill="#14532d" opacity="0.6" />

        {/* Distant Village Bell Tower (Center) */}
        <g transform="translate(180, 15)">
          <rect x="8" y="20" width="16" height="45" fill="#64748b" />
          {/* Belfry openings */}
          <rect x="12" y="24" width="8" height="12" fill="#0f172a" />
          <polygon points="6,20 16,4 26,20" fill="#991b1b" />
          <rect x="15" y="0" width="2" height="4" fill="#facc15" />
          <rect x="13" y="1" width="6" height="1" fill="#facc15" />
        </g>

        {/* Distant small cottage rooftops */}
        <polygon points="80,80 100,50 120,80" fill="#c2410c" opacity="0.7" />
        <polygon points="125,80 145,55 165,80" fill="#1e40af" opacity="0.7" />
        <polygon points="215,80 235,55 255,80" fill="#c2410c" opacity="0.7" />
        <polygon points="260,80 280,50 300,80" fill="#1e40af" opacity="0.7" />
      </svg>
    </div>
  );

  // Layer 3: 16-Bit Half-Timbered Medieval Houses with Terracotta Roofs
  const midground = (
    <div className="w-full h-full flex justify-between pointer-events-none px-2 sm:px-8">
      {/* Left House: Terracotta Shingled Gable, Timber Cross-Braces & Chimney */}
      <div className="w-56 sm:w-64 h-96 self-end relative -ml-6 opacity-95">
        <svg viewBox="0 0 128 160" className="w-full h-full pixel-art" shapeRendering="crispEdges">
          {/* Cream Plaster Wall */}
          <rect x="10" y="55" width="90" height="105" fill="#fef3c7" stroke="#24140a" strokeWidth="2" />
          
          {/* Dark Oak Timber Framing Grid */}
          <rect x="10" y="55" width="6" height="105" fill="#451a03" />
          <rect x="94" y="55" width="6" height="105" fill="#451a03" />
          <rect x="52" y="55" width="6" height="105" fill="#451a03" />
          <rect x="10" y="105" width="90" height="6" fill="#451a03" />
          {/* Diagonal pixel cross braces */}
          <polygon points="16,61 22,61 52,105 46,105" fill="#451a03" />
          <polygon points="88,61 94,61 58,105 52,105" fill="#451a03" />

          {/* Stepped Terracotta Roof Shingles */}
          <polygon points="4,55 55,8 106,55" fill="#c2410c" />
          {/* Shingle step highlights */}
          <polygon points="12,50 55,14 98,50" fill="#ea580c" />
          <rect x="52" y="6" width="6" height="4" fill="#7c2d12" />

          {/* Stone Chimney */}
          <rect x="70" y="6" width="16" height="28" fill="#78716c" stroke="#24140a" strokeWidth="1.5" />
          <rect x="68" y="4" width="20" height="4" fill="#57534e" />

          {/* Window with Green Shutters & Flower Box */}
          <rect x="26" y="70" width="20" height="22" fill="#38bdf8" stroke="#24140a" strokeWidth="1.5" />
          <rect x="18" y="70" width="8" height="22" fill="#15803d" />
          <rect x="46" y="70" width="8" height="22" fill="#15803d" />
          {/* Flower Box */}
          <rect x="22" y="92" width="28" height="6" fill="#78350f" />
          {/* Flowers in Box */}
          <rect x="24" y="90" width="4" height="2" fill="#ef4444" />
          <rect x="32" y="89" width="4" height="3" fill="#facc15" />
          <rect x="42" y="90" width="4" height="2" fill="#ec4899" />
        </svg>

        {/* 16-Bit Animated Pixel Chimney Smoke */}
        <div className="absolute top-2 left-36 w-3 h-3 bg-slate-200/60 animate-pixel-smoke" />
      </div>

      {/* Right House: Village Tavern with Blue Roof & Hanging Shop Sign */}
      <div className="w-56 sm:w-64 h-96 self-end relative -mr-6 opacity-95 flex flex-col items-end">
        <svg viewBox="0 0 128 160" className="w-full h-full pixel-art" shapeRendering="crispEdges">
          {/* Tavern Wall */}
          <rect x="28" y="50" width="90" height="110" fill="#fef3c7" stroke="#24140a" strokeWidth="2" />
          
          {/* Blue Stepped Roof */}
          <polygon points="22,50 73,6 124,50" fill="#1e3a8a" />
          <polygon points="30,46 73,12 116,46" fill="#2563eb" />

          {/* Timber frame */}
          <rect x="28" y="50" width="6" height="110" fill="#451a03" />
          <rect x="112" y="50" width="6" height="110" fill="#451a03" />
          <rect x="70" y="50" width="6" height="110" fill="#451a03" />

          {/* Hanging Shop Sign Bracket */}
          <rect x="12" y="65" width="20" height="3" fill="#1e293b" />
          <rect x="6" y="68" width="22" height="18" fill="#854d0e" stroke="#24140a" strokeWidth="1.5" />
          <rect x="12" y="74" width="10" height="8" fill="#facc15" />
        </svg>

        {/* Hanging sign beer mug emblem */}
        <div className="absolute top-[72px] right-[100px] text-[9px] select-none">
          🍺
        </div>
      </div>
    </div>
  );

  // Layer 4: 16-Bit Stepped Cobblestone Street Ground Plane
  const ground = (
    <div className="w-full h-24 relative overflow-hidden pointer-events-none">
      <svg
        viewBox="0 0 384 32"
        className="w-full h-full pixel-art"
        preserveAspectRatio="none"
        shapeRendering="crispEdges"
      >
        {/* Dirt foundation */}
        <rect x="0" y="0" width="384" height="32" fill="#291b12" />

        {/* Cobblestones Grid Pattern */}
        {Array.from({ length: 32 }).map((_, col) =>
          Array.from({ length: 4 }).map((_, row) => (
            <g key={`${col}-${row}`} transform={`translate(${col * 12 + (row % 2) * 6}, ${row * 8})`}>
              <rect x="1" y="1" width="10" height="6" fill="#574332" />
              <rect x="2" y="2" width="8" height="4" fill="#78614a" />
              {/* Moss speck in corner */}
              {(col + row) % 3 === 0 && (
                <rect x="1" y="1" width="2" height="2" fill="#15803d" />
              )}
            </g>
          ))
        )}
      </svg>
    </div>
  );

  // Layer 6: 16-Bit Oak Barrel, Parked Handcart, Sleeping Tabby Cat & Street Lantern
  const foregroundDecor = (
    <div className="w-full h-full flex justify-between pointer-events-none px-4 sm:px-12">
      {/* Left: 16-Bit Oak Barrels & Apple Crate */}
      <div className="relative self-end mb-16 flex items-end gap-2 opacity-95 hidden md:flex">
        {/* Oak Barrel Sprite */}
        <svg viewBox="0 0 16 18" className="w-6 h-7 pixel-art" shapeRendering="crispEdges">
          <rect x="2" y="0" width="12" height="18" fill="#78350f" />
          <rect x="0" y="3" width="16" height="12" fill="#92400e" />
          {/* Iron Hoops */}
          <rect x="0" y="3" width="16" height="2" fill="#1c1917" />
          <rect x="0" y="13" width="16" height="2" fill="#1c1917" />
          {/* Barrel Bung */}
          <rect x="7" y="8" width="2" height="2" fill="#facc15" />
        </svg>

        {/* Small Apple Crate */}
        <svg viewBox="0 0 16 14" className="w-6 h-5 pixel-art" shapeRendering="crispEdges">
          <rect x="0" y="0" width="16" height="14" fill="#854d0e" stroke="#24140a" strokeWidth="1" />
          <rect x="3" y="2" width="4" height="4" fill="#ef4444" />
          <rect x="9" y="2" width="4" height="4" fill="#ef4444" />
        </svg>
      </div>

      {/* Right: 16-Bit Street Lantern & Sleeping Tabby Cat Sprite */}
      <div className="relative self-end mb-16 flex flex-col items-center opacity-95 hidden md:flex">
        {/* 16-Bit Pixel Lantern Post */}
        <svg viewBox="0 0 16 48" className="w-6 h-20 pixel-art" shapeRendering="crispEdges">
          {/* Lantern Head */}
          <rect x="4" y="2" width="8" height="10" fill="#fef08a" />
          <rect x="3" y="1" width="10" height="2" fill="#1c1917" />
          <rect x="3" y="11" width="10" height="2" fill="#1c1917" />
          <rect x="4" y="3" width="1" height="8" fill="#1c1917" />
          <rect x="11" y="3" width="1" height="8" fill="#1c1917" />
          {/* Post */}
          <rect x="7" y="13" width="2" height="35" fill="#291b12" />
        </svg>

        {/* 16-Bit Sleeping Tabby Cat on Stone */}
        <svg viewBox="0 0 16 10" className="w-6 h-4 pixel-art -mt-2" shapeRendering="crispEdges">
          <rect x="2" y="2" width="12" height="7" fill="#ea580c" />
          {/* Stripes */}
          <rect x="4" y="2" width="1" height="5" fill="#9a3412" />
          <rect x="7" y="2" width="1" height="5" fill="#9a3412" />
          <rect x="10" y="2" width="1" height="5" fill="#9a3412" />
          {/* Ears */}
          <rect x="2" y="0" width="2" height="2" fill="#ea580c" />
          <rect x="6" y="0" width="2" height="2" fill="#ea580c" />
          {/* Tail */}
          <rect x="13" y="5" width="3" height="2" fill="#ea580c" />
        </svg>
      </div>
    </div>
  );

  return (
    <SectionEnvironment
      id="about"
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
