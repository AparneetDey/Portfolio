import { SectionEnvironment } from "./SectionEnvironment";

/**
 * LibraryEnvironment — Area 3: Skills / The Scholar's Workshop & Library
 * An authentic 16-bit pixel-art scholar's sanctum physically matching the bookshelf UI.
 * Features pixel stone walls, ceiling timber beams, hanging lanterns, rolling ladder,
 * celestial globe, scrolls, and alchemical potion bottles.
 */
export function LibraryEnvironment({ children }) {
  // Layer 1: 16-Bit Pixel Stone Wall & Floating Sparkles
  const sky = (
    <div className="w-full h-full relative overflow-hidden">
      {/* 16-bit stone wall color base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#18110c] via-[#241710] to-[#120804]" />

      {/* 16-Bit Ashlar Stone Brick Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg viewBox="0 0 384 216" className="w-full h-full pixel-art" preserveAspectRatio="none" shapeRendering="crispEdges">
          {Array.from({ length: 16 }).map((_, row) =>
            Array.from({ length: 12 }).map((_, col) => (
              <g key={`${row}-${col}`} transform={`translate(${col * 32 + (row % 2) * 16}, ${row * 14})`}>
                <rect x="0" y="0" width="31" height="13" fill="#382214" />
                <rect x="1" y="1" width="29" height="11" fill="#4d301c" />
                {/* Mortar line */}
                <rect x="0" y="13" width="32" height="1" fill="#120804" />
                <rect x="31" y="0" width="1" height="14" fill="#120804" />
              </g>
            ))
          )}
        </svg>
      </div>

      {/* Warm Golden Candlelight Halos */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-gradient-to-b from-amber-400/20 via-yellow-500/10 to-transparent blur-2xl pointer-events-none" />

      {/* 16-Bit Floating Magic Dust Motes */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {[
          { top: "15%", left: "18%", delay: "0s" },
          { top: "28%", left: "80%", delay: "1.2s" },
          { top: "42%", left: "12%", delay: "2.5s" },
          { top: "60%", left: "85%", delay: "0.8s" },
        ].map((mote, idx) => (
          <div
            key={idx}
            className="absolute w-1.5 h-1.5 bg-[#fde047] animate-dust-mote"
            style={{ top: mote.top, left: mote.left, animationDelay: mote.delay }}
          />
        ))}
      </div>
    </div>
  );

  // Layer 2: 16-Bit Gothic Arched Stained-Glass Windows
  const farDistant = (
    <div className="w-full h-full flex justify-between pointer-events-none opacity-45 px-6 sm:px-14">
      {/* Left 16-Bit Stained Glass Window */}
      <div className="w-24 sm:w-36 h-72 mt-12 hidden md:block">
        <svg viewBox="0 0 36 72" className="w-full h-full pixel-art" shapeRendering="crispEdges">
          {/* Stone Frame */}
          <polygon points="18,0 36,18 36,72 0,72 0,18" fill="#54280e" />
          <polygon points="18,4 32,18 32,70 4,70 4,18" fill="#1e3a8a" />
          {/* Stained Glass Color Panes */}
          <rect x="6" y="20" width="10" height="22" fill="#b91c1c" />
          <rect x="20" y="20" width="10" height="22" fill="#f59e0b" />
          <rect x="6" y="44" width="10" height="24" fill="#047857" />
          <rect x="20" y="44" width="10" height="24" fill="#1e40af" />
          {/* Lead Mullion Bars */}
          <rect x="17" y="4" width="2" height="66" fill="#1c1917" />
          <rect x="4" y="42" width="28" height="2" fill="#1c1917" />
        </svg>
      </div>

      {/* Right 16-Bit Stained Glass Window */}
      <div className="w-24 sm:w-36 h-72 mt-12 hidden md:block">
        <svg viewBox="0 0 36 72" className="w-full h-full pixel-art" shapeRendering="crispEdges">
          <polygon points="18,0 36,18 36,72 0,72 0,18" fill="#54280e" />
          <polygon points="18,4 32,18 32,70 4,70 4,18" fill="#1e40af" />
          <rect x="6" y="20" width="10" height="22" fill="#7e22ce" />
          <rect x="20" y="20" width="10" height="22" fill="#0284c7" />
          <rect x="6" y="44" width="10" height="24" fill="#ea580c" />
          <rect x="20" y="44" width="10" height="24" fill="#15803d" />
          <rect x="17" y="4" width="2" height="66" fill="#1c1917" />
          <rect x="4" y="42" width="28" height="2" fill="#1c1917" />
        </svg>
      </div>
    </div>
  );

  // Layer 3: 16-Bit Ceiling Timber Joists & Suspended Iron Lanterns
  const midground = (
    <div className="absolute inset-x-0 top-0 h-28 pointer-events-none opacity-90">
      <svg viewBox="0 0 384 40" className="w-full h-full pixel-art" preserveAspectRatio="none" shapeRendering="crispEdges">
        {/* Main Timber Beam */}
        <rect x="0" y="0" width="384" height="8" fill="#451a03" />
        <rect x="0" y="8" width="384" height="2" fill="#24140a" />
        <rect x="0" y="0" width="384" height="2" fill="#854d0e" />

        {/* Vertical Corbel Beams & Hanging Lanterns */}
        {[40, 120, 260, 340].map((x, i) => (
          <g key={i} transform={`translate(${x}, 10)`}>
            <rect x="0" y="0" width="8" height="12" fill="#451a03" />
            <rect x="1" y="12" width="2" height="14" fill="#1c1917" />
            {/* Square 16-Bit Lantern */}
            <rect x="-3" y="26" width="10" height="12" fill="#fef08a" />
            <rect x="-4" y="25" width="12" height="2" fill="#1c1917" />
            <rect x="-4" y="37" width="12" height="2" fill="#1c1917" />
            <rect x="-3" y="27" width="1" height="10" fill="#1c1917" />
            <rect x="6" y="27" width="1" height="10" fill="#1c1917" />
          </g>
        ))}
      </svg>
    </div>
  );

  // Layer 4: 16-Bit Chestnut Parquet Floor Ground Plane
  const ground = (
    <div className="w-full h-20 relative overflow-hidden pointer-events-none">
      <svg viewBox="0 0 384 24" className="w-full h-full pixel-art" preserveAspectRatio="none" shapeRendering="crispEdges">
        <rect x="0" y="0" width="384" height="24" fill="#291407" />
        {/* Horizontal plank seams */}
        <rect x="0" y="6" width="384" height="1" fill="#150a04" />
        <rect x="0" y="12" width="384" height="1" fill="#150a04" />
        <rect x="0" y="18" width="384" height="1" fill="#150a04" />
        <rect x="0" y="0" width="384" height="1" fill="#78350f" />
      </svg>
    </div>
  );

  // Layer 6: 16-Bit Props: Rolling Ladder, Orrery, Scrolls & Potions
  const foregroundDecor = (
    <div className="w-full h-full flex justify-between pointer-events-none px-4 sm:px-14">
      {/* Left Props: 16-Bit Rolling Wooden Ladder & Alchemical Flasks */}
      <div className="relative self-end mb-16 flex items-end gap-3 opacity-95 hidden md:flex">
        {/* Pixel Ladder Sprite */}
        <svg viewBox="0 0 16 64" className="w-5 h-36 pixel-art" shapeRendering="crispEdges">
          <rect x="1" y="0" width="2" height="64" fill="#78350f" />
          <rect x="13" y="0" width="2" height="64" fill="#78350f" />
          {/* Rungs */}
          {[8, 18, 28, 38, 48, 58].map((y) => (
            <rect key={y} x="3" y={y} width="10" height="2" fill="#54280e" />
          ))}
        </svg>

        {/* 16-Bit Alchemical Potions */}
        <div className="flex flex-col items-center">
          <svg viewBox="0 0 20 18" className="w-7 h-6 pixel-art" shapeRendering="crispEdges">
            {/* Blue Flask */}
            <rect x="1" y="6" width="8" height="10" fill="#0284c7" />
            <rect x="3" y="2" width="4" height="4" fill="#38bdf8" />
            <rect x="3" y="1" width="4" height="2" fill="#fde047" />
            {/* Red Flask */}
            <rect x="11" y="4" width="8" height="12" fill="#dc2626" />
            <rect x="13" y="1" width="4" height="3" fill="#f87171" />
            <rect x="13" y="0" width="4" height="2" fill="#78350f" />
          </svg>
        </div>
      </div>

      {/* Right Props: 16-Bit Celestial Globe / Orrery */}
      <div className="relative self-end mb-16 flex flex-col items-center opacity-95 hidden md:flex">
        <svg viewBox="0 0 24 32" className="w-7 h-10 pixel-art" shapeRendering="crispEdges">
          {/* Brass Ring */}
          <rect x="2" y="2" width="20" height="18" fill="#facc15" />
          <rect x="4" y="4" width="16" height="14" fill="#241710" />
          {/* World Sphere */}
          <rect x="6" y="6" width="12" height="10" fill="#0284c7" />
          <rect x="8" y="8" width="6" height="4" fill="#15803d" />
          {/* Stand */}
          <rect x="11" y="20" width="2" height="8" fill="#f59e0b" />
          <rect x="7" y="28" width="10" height="3" fill="#854d0e" />
        </svg>
      </div>
    </div>
  );

  return (
    <SectionEnvironment
      id="skills"
      sky={sky}
      farDistant={farDistant}
      midground={midground}
      ground={ground}
      foregroundDecor={foregroundDecor}
      scrimType="wide"
    >
      {children}
    </SectionEnvironment>
  );
}
