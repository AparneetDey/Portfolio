import { SectionEnvironment } from "./SectionEnvironment";

/**
 * GuildHallEnvironment — Area 4: Projects / The Guild Hall
 * A stately 16-bit pixel-art guild hall with vaulted stone arches, burgundy & royal blue banners,
 * crossed knight shields, and roaring pixel fire braziers.
 */
export function GuildHallEnvironment({ children }) {
  // Layer 1: Stone Vault Atmosphere & Ambient Warmth
  const sky = (
    <div className="w-full h-full relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f18] via-[#131b28] to-[#0c0d12]" />
      
      {/* 16-Bit Ashlar Stone Wall Pattern */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <svg viewBox="0 0 384 216" className="w-full h-full pixel-art" preserveAspectRatio="none" shapeRendering="crispEdges">
          {Array.from({ length: 16 }).map((_, row) =>
            Array.from({ length: 12 }).map((_, col) => (
              <g key={`${row}-${col}`} transform={`translate(${col * 32 + (row % 2) * 16}, ${row * 14})`}>
                <rect x="0" y="0" width="31" height="13" fill="#1e293b" />
                <rect x="0" y="13" width="32" height="1" fill="#020617" />
                <rect x="31" y="0" width="1" height="14" fill="#020617" />
              </g>
            ))
          )}
        </svg>
      </div>

      {/* Warm Ambient Firelight Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[550px] rounded-full bg-gradient-to-b from-amber-500/15 via-red-500/10 to-transparent blur-3xl pointer-events-none" />
    </div>
  );

  // Layer 2: 16-Bit Vaulted Stone Arches & Stained Glass Rose Window
  const farDistant = (
    <div className="absolute inset-x-0 top-8 h-60 pointer-events-none opacity-45">
      <svg viewBox="0 0 384 80" className="w-full h-full pixel-art" preserveAspectRatio="none" shapeRendering="crispEdges">
        {/* Stepped Vaulted Ribs */}
        {[0, 96, 192, 288].map((x, i) => (
          <g key={i} transform={`translate(${x}, 0)`}>
            <polygon points="0,80 0,25 24,10 48,0 72,10 96,25 96,80 90,80 90,30 70,16 48,8 26,16 6,30 6,80" fill="#334155" />
          </g>
        ))}

        {/* Central 16-Bit Rose Window (Center) */}
        <g transform="translate(168, 12)">
          <rect x="12" y="0" width="24" height="48" fill="#1e3a8a" />
          <rect x="0" y="12" width="48" height="24" fill="#1e3a8a" />
          <rect x="6" y="6" width="36" height="36" fill="#1d4ed8" />
          <rect x="14" y="14" width="20" height="20" fill="#b91c1c" />
          <rect x="20" y="20" width="8" height="8" fill="#facc15" />
          {/* Iron mullions */}
          <rect x="23" y="0" width="2" height="48" fill="#0f172a" />
          <rect x="0" y="23" width="48" height="2" fill="#0f172a" />
        </g>
      </svg>
    </div>
  );

  // Layer 3: 16-Bit Burgundy Banners, Shields, Crossed Swords & Pixel Braziers
  const midground = (
    <div className="w-full h-full flex justify-between pointer-events-none px-4 sm:px-12">
      {/* Left Wall Decor: 16-Bit Brazier + Shield + Burgundy Banner */}
      <div className="flex flex-col items-center pt-20 opacity-95 hidden md:flex">
        {/* 16-Bit Roaring Iron Brazier */}
        <div className="flex flex-col items-center">
          {/* 3-Color Stepped Pixel Flame */}
          <svg viewBox="0 0 16 16" className="w-8 h-8 pixel-art animate-pixel-torch" shapeRendering="crispEdges">
            <rect x="5" y="1" width="6" height="4" fill="#fef08a" />
            <rect x="4" y="5" width="8" height="6" fill="#f97316" />
            <rect x="2" y="9" width="12" height="6" fill="#ea580c" />
            <rect x="6" y="7" width="4" height="4" fill="#ffffff" />
          </svg>
          {/* Iron Bowl & Bracket */}
          <svg viewBox="0 0 20 16" className="w-8 h-6 pixel-art -mt-1" shapeRendering="crispEdges">
            <rect x="2" y="0" width="16" height="6" fill="#1e293b" />
            <rect x="4" y="6" width="12" height="4" fill="#0f172a" />
            <rect x="8" y="10" width="4" height="6" fill="#0f172a" />
          </svg>
        </div>

        {/* 16-Bit Heater Shield & Crossed Swords */}
        <div className="relative mt-2 flex items-center justify-center">
          <svg viewBox="0 0 24 28" className="w-10 h-12 pixel-art" shapeRendering="crispEdges">
            {/* Shield Outline */}
            <polygon points="2,2 22,2 22,16 12,26 2,16" fill="#854d0e" />
            <polygon points="4,4 20,4 20,15 12,23 4,15" fill="#1e3a8a" />
            {/* Gold Cross */}
            <rect x="10" y="4" width="4" height="18" fill="#facc15" />
            <rect x="4" y="10" width="16" height="4" fill="#facc15" />
          </svg>
        </div>

        {/* 16-Bit Burgundy Velvet Guild Banner with Gold Lion Crest */}
        <svg viewBox="0 0 20 64" className="w-8 h-28 pixel-art mt-2" shapeRendering="crispEdges">
          {/* Banner Body */}
          <rect x="1" y="0" width="18" height="54" fill="#831843" />
          <polygon points="1,54 10,62 19,54" fill="#831843" />
          {/* Gold Trim */}
          <rect x="1" y="0" width="18" height="2" fill="#facc15" />
          <rect x="1" y="0" width="2" height="54" fill="#facc15" />
          <rect x="17" y="0" width="2" height="54" fill="#facc15" />
          {/* Golden Lion Crest Pixels */}
          <rect x="7" y="18" width="6" height="8" fill="#fef08a" />
          <rect x="5" y="24" width="10" height="4" fill="#fef08a" />
        </svg>
      </div>

      {/* Right Wall Decor: 16-Bit Brazier + Royal Blue Banner */}
      <div className="flex flex-col items-center pt-20 opacity-95 hidden md:flex">
        {/* 16-Bit Brazier */}
        <div className="flex flex-col items-center">
          <svg viewBox="0 0 16 16" className="w-8 h-8 pixel-art animate-pixel-torch" shapeRendering="crispEdges">
            <rect x="5" y="1" width="6" height="4" fill="#fef08a" />
            <rect x="4" y="5" width="8" height="6" fill="#f97316" />
            <rect x="2" y="9" width="12" height="6" fill="#ea580c" />
            <rect x="6" y="7" width="4" height="4" fill="#ffffff" />
          </svg>
          <svg viewBox="0 0 20 16" className="w-8 h-6 pixel-art -mt-1" shapeRendering="crispEdges">
            <rect x="2" y="0" width="16" height="6" fill="#1e293b" />
            <rect x="4" y="6" width="12" height="4" fill="#0f172a" />
            <rect x="8" y="10" width="4" height="6" fill="#0f172a" />
          </svg>
        </div>

        {/* 16-Bit Royal Blue Velvet Banner */}
        <svg viewBox="0 0 20 64" className="w-8 h-28 pixel-art mt-4" shapeRendering="crispEdges">
          <rect x="1" y="0" width="18" height="54" fill="#1e3a8a" />
          <polygon points="1,54 10,62 19,54" fill="#1e3a8a" />
          <rect x="1" y="0" width="18" height="2" fill="#facc15" />
          <rect x="1" y="0" width="2" height="54" fill="#facc15" />
          <rect x="17" y="0" width="2" height="54" fill="#facc15" />
          {/* Gold Fleur-de-lis Pixels */}
          <rect x="7" y="18" width="6" height="8" fill="#fef08a" />
          <rect x="9" y="14" width="2" height="16" fill="#fef08a" />
        </svg>
      </div>
    </div>
  );

  // Layer 4: 16-Bit Polished Slate Flagstones Ground Plane
  const ground = (
    <div className="w-full h-20 relative overflow-hidden pointer-events-none">
      <svg viewBox="0 0 384 24" className="w-full h-full pixel-art" preserveAspectRatio="none" shapeRendering="crispEdges">
        <rect x="0" y="0" width="384" height="24" fill="#0f172a" />
        {/* Large Flagstone Tiles */}
        {Array.from({ length: 12 }).map((_, i) => (
          <g key={i} transform={`translate(${i * 32}, 0)`}>
            <rect x="1" y="1" width="30" height="22" fill="#1e293b" />
            <rect x="2" y="2" width="28" height="20" fill="#334155" />
            <rect x="0" y="23" width="32" height="1" fill="#020617" />
            <rect x="31" y="0" width="1" height="24" fill="#020617" />
          </g>
        ))}
        {/* Gold Border Line */}
        <rect x="0" y="0" width="384" height="2" fill="#d97706" />
      </svg>
    </div>
  );

  // Layer 6: 16-Bit Props — Quest Map & Tankards
  const foregroundDecor = (
    <div className="w-full h-full flex justify-between pointer-events-none px-4 sm:px-14">
      {/* Left side quest map */}
      <div className="relative self-end mb-16 flex items-end gap-2 opacity-90 hidden md:flex">
        <svg viewBox="0 0 20 16" className="w-7 h-5 pixel-art" shapeRendering="crispEdges">
          <rect x="0" y="0" width="20" height="16" fill="#fef3c7" stroke="#854d0e" strokeWidth="1" />
          {/* Map routes */}
          <rect x="3" y="4" width="6" height="1" fill="#dc2626" />
          <rect x="8" y="5" width="1" height="4" fill="#dc2626" />
          <rect x="9" y="8" width="6" height="1" fill="#dc2626" />
        </svg>
      </div>

      {/* Right side trophy diamond */}
      <div className="relative self-end mb-16 flex items-end gap-2 opacity-90 hidden md:flex">
        <svg viewBox="0 0 16 16" className="w-5 h-5 pixel-art" shapeRendering="crispEdges">
          <polygon points="8,1 15,8 8,15 1,8" fill="#38bdf8" />
          <polygon points="8,3 13,8 8,13 3,8" fill="#e0f2fe" />
        </svg>
      </div>
    </div>
  );

  return (
    <SectionEnvironment
      id="projects"
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
