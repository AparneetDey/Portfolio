import { SectionEnvironment } from "./SectionEnvironment";

/**
 * HarborEnvironment — Area 7: Contact / The Harbor
 * A genuine 16-bit pixel-art harbor scene at dramatic twilight sunset.
 * Features calm ocean water scanlines, a glowing distant stone lighthouse,
 * a 16-bit three-masted caravel ship, wooden dock pier, cargo crates, and carrier raven.
 */
export function HarborEnvironment({ children }) {
  // Layer 1: Twilight Sunset Sky, Sunken Sun & Harbor Gulls
  const sky = (
    <div className="w-full h-full relative overflow-hidden">
      {/* 16-bit sunset: Indigo twilight -> Coral pink -> Fiery amber -> Golden horizon */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#311042] via-[#9f1239] via-[#c2410c] to-[#f59e0b]" />
      <div className="absolute inset-0 dither-pattern-sky opacity-25 pointer-events-none" />

      {/* Early Twilight Pixel Stars (Top Sky) */}
      <div className="absolute top-6 inset-x-0 h-20 pointer-events-none opacity-80">
        {[
          { x: 30, y: 12 },
          { x: 90, y: 6 },
          { x: 170, y: 16 },
          { x: 250, y: 8 },
          { x: 330, y: 14 },
        ].map((star, idx) => (
          <div
            key={idx}
            className="absolute w-1 h-1 bg-[#fef08a] shadow-[0_0_2px_#fef08a]"
            style={{ left: `${star.x}px`, top: `${star.y}px` }}
          />
        ))}
      </div>

      {/* Sinking Stepped Pixel Sun Touching Ocean Horizon */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-20 h-10 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 40 20" className="w-full h-full pixel-art" shapeRendering="crispEdges">
          {/* Upper half of stepped sun */}
          <rect x="14" y="2" width="12" height="4" fill="#fef08a" />
          <rect x="8" y="6" width="24" height="4" fill="#fef08a" />
          <rect x="4" y="10" width="32" height="5" fill="#fef08a" />
          <rect x="2" y="15" width="36" height="5" fill="#fef08a" />
          <rect x="12" y="8" width="16" height="8" fill="#ffffff" />
        </svg>
      </div>

      {/* Soaring 16-Bit Harbor Gulls */}
      <div className="absolute top-16 right-1/4 flex gap-8 pointer-events-none opacity-85">
        <svg viewBox="0 0 16 8" className="w-6 h-3 pixel-art text-[#f8fafc]" fill="currentColor" shapeRendering="crispEdges">
          <rect x="0" y="0" width="3" height="2" />
          <rect x="3" y="2" width="3" height="2" />
          <rect x="6" y="4" width="4" height="2" />
          <rect x="10" y="2" width="3" height="2" />
          <rect x="13" y="0" width="3" height="2" />
        </svg>
        <svg viewBox="0 0 16 8" className="w-5 h-2.5 pixel-art text-[#cbd5e1] -mt-3" fill="currentColor" shapeRendering="crispEdges">
          <rect x="0" y="0" width="3" height="2" />
          <rect x="3" y="2" width="3" height="2" />
          <rect x="6" y="4" width="4" height="2" />
          <rect x="10" y="2" width="3" height="2" />
          <rect x="13" y="0" width="3" height="2" />
        </svg>
      </div>
    </div>
  );

  // Layer 2: Distant Ocean Horizon, Rocky Islet & 16-Bit Stone Lighthouse
  const farDistant = (
    <div className="absolute inset-x-0 bottom-24 pointer-events-none">
      <svg
        viewBox="0 0 384 80"
        className="w-full h-48 pixel-art"
        preserveAspectRatio="none"
        shapeRendering="crispEdges"
      >
        {/* Distant Sea Horizon Base */}
        <rect x="0" y="40" width="384" height="40" fill="#082f49" />

        {/* Rocky Islet for Lighthouse (Far Left) */}
        <polygon points="10,80 18,36 46,36 60,80" fill="#1e293b" />
        <rect x="18" y="36" width="28" height="4" fill="#334155" />

        {/* 16-Bit Stone Lighthouse Tower */}
        <g transform="translate(24, 6)">
          {/* Tapered Stone Tower Shaft */}
          <polygon points="4,30 6,10 14,10 16,30" fill="#f8fafc" />
          {/* Red warning stripes */}
          <polygon points="5,24 6,18 14,18 15,24" fill="#dc2626" />
          {/* Lantern Room Platform */}
          <rect x="4" y="8" width="12" height="3" fill="#1e293b" />
          {/* Glowing Beacon Chamber */}
          <rect x="6" y="3" width="8" height="6" fill="#fef08a" />
          <rect x="7" y="4" width="6" height="4" fill="#ffffff" />
          {/* Domed Roof */}
          <polygon points="5,3 10,0 15,3" fill="#0f172a" />

          {/* Stepped Beacon Light Beam sweeping right across harbor */}
          <polygon
            points="14,4 120,0 120,18 14,8"
            fill="#fef08a"
            opacity="0.35"
            className="animate-pixel-beacon"
          />
        </g>

        {/* Distant Sloop Silhouette on the Sea Horizon (Far Right) */}
        <g transform="translate(320, 30)">
          {/* Sloop Hull */}
          <polygon points="2,10 24,10 20,15 4,15" fill="#0f172a" />
          {/* Mast */}
          <rect x="13" y="0" width="1" height="10" fill="#0f172a" />
          {/* Triangular Sail */}
          <polygon points="14,1 22,9 14,9" fill="#e2e8f0" opacity="0.75" />
        </g>
      </svg>
    </div>
  );

  // Layer 3: 16-Bit Ocean Wave Scanlines, Golden Sun Reflection & Three-Masted Caravel Ship
  const midground = (
    <div className="absolute inset-x-0 bottom-12 pointer-events-none">
      <svg
        viewBox="0 0 384 80"
        className="w-full h-48 pixel-art"
        preserveAspectRatio="none"
        shapeRendering="crispEdges"
      >
        {/* Ocean Body */}
        <rect x="0" y="36" width="384" height="44" fill="#0c4a6e" />

        {/* Stepped Golden Reflection Beam on Water (Under Sun) */}
        <g transform="translate(160, 36)">
          <rect x="24" y="2" width="16" height="2" fill="#fde047" opacity="0.8" />
          <rect x="20" y="6" width="24" height="2" fill="#fde047" opacity="0.85" />
          <rect x="16" y="10" width="32" height="2" fill="#f59e0b" opacity="0.8" />
          <rect x="22" y="14" width="20" height="2" fill="#fde047" opacity="0.75" />
          <rect x="14" y="18" width="36" height="2" fill="#f59e0b" opacity="0.7" />
          <rect x="18" y="22" width="28" height="2" fill="#fde047" opacity="0.65" />
          <rect x="12" y="26" width="40" height="2" fill="#f59e0b" opacity="0.6" />
          <rect x="16" y="30" width="32" height="2" fill="#fde047" opacity="0.5" />
        </g>

        {/* Shimmering Ocean Wave Scanlines */}
        <g className="animate-pixel-water">
          <rect x="20" y="40" width="50" height="2" fill="#0284c7" />
          <rect x="90" y="44" width="40" height="2" fill="#38bdf8" />
          <rect x="240" y="42" width="60" height="2" fill="#0284c7" />
          <rect x="320" y="46" width="45" height="2" fill="#38bdf8" />

          <rect x="40" y="52" width="60" height="2" fill="#38bdf8" />
          <rect x="120" y="56" width="35" height="2" fill="#0284c7" />
          <rect x="220" y="54" width="65" height="2" fill="#38bdf8" />
          <rect x="300" y="58" width="55" height="2" fill="#0284c7" />

          {/* White wave crest pixels */}
          <rect x="50" y="40" width="4" height="1" fill="#ffffff" />
          <rect x="110" y="44" width="3" height="1" fill="#ffffff" />
          <rect x="260" y="42" width="4" height="1" fill="#ffffff" />
          <rect x="70" y="52" width="4" height="1" fill="#ffffff" />
          <rect x="250" y="54" width="3" height="1" fill="#ffffff" />
        </g>

        {/* 16-Bit Three-Masted Caravel Ship (Docked at Midground Right) */}
        <g transform="translate(245, 8)">
          {/* Main Hull */}
          <polygon points="10,50 85,50 78,64 18,64" fill="#451a03" />
          {/* Raised Forecastle and Poop Deck */}
          <polygon points="6,44 18,44 18,50 10,50" fill="#78350f" />
          <polygon points="65,42 88,42 85,50 65,50" fill="#78350f" />
          {/* Hull Timber Planks & Trim */}
          <rect x="10" y="50" width="75" height="2" fill="#b45309" />
          <rect x="14" y="56" width="68" height="2" fill="#24140a" />

          {/* 3 Vertical Masts */}
          {/* Foremast */}
          <rect x="26" y="16" width="2" height="34" fill="#24140a" />
          {/* Mainmast (Tallest, Center) */}
          <rect x="46" y="8" width="2" height="42" fill="#24140a" />
          {/* Mizzenmast */}
          <rect x="66" y="18" width="2" height="32" fill="#24140a" />

          {/* Canvas Sails (Stepped Cream Rectangles) */}
          {/* Foremast Sail */}
          <rect x="18" y="22" width="18" height="14" fill="#fef3c7" />
          <rect x="20" y="24" width="14" height="10" fill="#fef9c3" />
          <rect x="16" y="21" width="22" height="2" fill="#1c1917" />

          {/* Mainmast Lower & Upper Sails */}
          <rect x="36" y="14" width="22" height="12" fill="#fef3c7" />
          <rect x="38" y="16" width="18" height="8" fill="#fef9c3" />
          <rect x="34" y="13" width="26" height="2" fill="#1c1917" />

          <rect x="38" y="28" width="18" height="12" fill="#fef3c7" />
          <rect x="40" y="30" width="14" height="8" fill="#fef9c3" />
          <rect x="36" y="27" width="22" height="2" fill="#1c1917" />

          {/* Mizzenmast Lateen Triangular Sail */}
          <polygon points="68,22 80,36 68,36" fill="#fef3c7" />

          {/* Pennant at Mainmast Peak */}
          <polygon points="48,8 58,10 48,12" fill="#dc2626" />
        </g>
      </svg>
    </div>
  );

  // Layer 4: 16-Bit Heavy Timber Dock Pier Deck Ground Plane
  const ground = (
    <div className="w-full h-24 relative overflow-hidden pointer-events-none">
      <svg
        viewBox="0 0 384 32"
        className="w-full h-full pixel-art"
        preserveAspectRatio="none"
        shapeRendering="crispEdges"
      >
        {/* Dark Pier Foundation & Shadow */}
        <rect x="0" y="0" width="384" height="32" fill="#291407" />

        {/* Heavy Timber Planks */}
        <rect x="0" y="0" width="384" height="7" fill="#78350f" />
        <rect x="0" y="7" width="384" height="1" fill="#1c0b03" />

        <rect x="0" y="8" width="384" height="7" fill="#54280e" />
        <rect x="0" y="15" width="384" height="1" fill="#1c0b03" />

        <rect x="0" y="16" width="384" height="7" fill="#78350f" />
        <rect x="0" y="23" width="384" height="1" fill="#1c0b03" />

        <rect x="0" y="24" width="384" height="8" fill="#54280e" />

        {/* Dock Pier Heavy Pilings & Planks */}
        {[0, 64, 128, 192, 256, 320].map((px) => (
          <g key={px} transform={`translate(${px}, 0)`}>
            <rect x="0" y="0" width="8" height="32" fill="#3b1d06" />
            <rect x="2" y="3" width="4" height="2" fill="#1c0b03" />
            <rect x="2" y="11" width="4" height="2" fill="#1c0b03" />
            <rect x="2" y="19" width="4" height="2" fill="#1c0b03" />
            <rect x="2" y="27" width="4" height="2" fill="#1c0b03" />
          </g>
        ))}

        {/* Top Edge Gold/Bronze Line */}
        <rect x="0" y="0" width="384" height="1" fill="#b45309" />
      </svg>
    </div>
  );

  // Layer 6: 16-Bit Pier Props — Dock Bollard, Coiled Rope, Cargo Crates, Lantern & Carrier Raven
  const foregroundDecor = (
    <div className="w-full h-full flex justify-between pointer-events-none px-4 sm:px-12">
      {/* Left: 16-Bit Dock Pilings with Rope, Barrels & Cargo Crate */}
      <div className="relative self-end mb-16 flex items-end gap-2 opacity-95">
        {/* Stacked Oak Rum/Fish Barrels */}
        <svg viewBox="0 0 16 20" className="w-7 h-8 pixel-art" shapeRendering="crispEdges">
          <rect x="2" y="0" width="12" height="20" fill="#78350f" />
          <rect x="0" y="4" width="16" height="12" fill="#92400e" />
          <rect x="0" y="4" width="16" height="2" fill="#1c1917" />
          <rect x="0" y="14" width="16" height="2" fill="#1c1917" />
          <rect x="7" y="9" width="2" height="2" fill="#facc15" />
        </svg>

        {/* Wooden Cargo Crate with Cross Braces */}
        <svg viewBox="0 0 20 20" className="w-8 h-8 pixel-art hidden sm:block" shapeRendering="crispEdges">
          <rect x="0" y="0" width="20" height="20" fill="#854d0e" stroke="#24140a" strokeWidth="1.5" />
          {/* Cross brace slats */}
          <line x1="2" y1="2" x2="18" y2="18" stroke="#451a03" strokeWidth="2" />
          <line x1="18" y1="2" x2="2" y2="18" stroke="#451a03" strokeWidth="2" />
        </svg>
      </div>

      {/* Right: 16-Bit Pier Bollard, Glowing Lantern & Carrier Raven Sprite */}
      <div className="relative self-end mb-16 flex flex-col items-center opacity-95 hidden md:flex">
        {/* 16-Bit Carrier Raven Perched on Wooden Post */}
        <div className="relative -mb-1">
          <svg viewBox="0 0 16 16" className="w-6 h-6 pixel-art" shapeRendering="crispEdges">
            {/* Raven Body */}
            <rect x="4" y="4" width="8" height="8" fill="#0f172a" />
            <rect x="6" y="2" width="6" height="5" fill="#1e293b" />
            {/* Eye */}
            <rect x="10" y="3" width="1" height="1" fill="#facc15" />
            {/* Beak */}
            <rect x="12" y="4" width="3" height="2" fill="#eab308" />
            {/* Folded Wing */}
            <rect x="4" y="6" width="6" height="6" fill="#020617" />
            {/* Tail feathers */}
            <rect x="2" y="10" width="3" height="4" fill="#0f172a" />
            {/* Claws */}
            <rect x="6" y="12" width="2" height="2" fill="#ca8a04" />
            <rect x="9" y="12" width="2" height="2" fill="#ca8a04" />
          </svg>
        </div>

        {/* Pier Bollard with Glowing Amber Lantern */}
        <div className="flex items-center gap-1">
          {/* Heavy Timber Bollard */}
          <svg viewBox="0 0 14 32" className="w-5 h-12 pixel-art" shapeRendering="crispEdges">
            <rect x="2" y="0" width="10" height="32" fill="#451a03" />
            <rect x="0" y="0" width="14" height="4" fill="#78350f" />
            {/* Coiled Rope Ring */}
            <rect x="1" y="8" width="12" height="5" fill="#ca8a04" />
            <rect x="0" y="10" width="14" height="2" fill="#a16207" />
          </svg>

          {/* Hanging Amber Dock Lantern */}
          <svg viewBox="0 0 12 24" className="w-4 h-8 pixel-art" shapeRendering="crispEdges">
            <rect x="5" y="0" width="2" height="6" fill="#1c1917" />
            <rect x="2" y="6" width="8" height="10" fill="#fef08a" />
            <rect x="1" y="5" width="10" height="2" fill="#1c1917" />
            <rect x="1" y="16" width="10" height="2" fill="#1c1917" />
            <rect x="2" y="7" width="1" height="8" fill="#1c1917" />
            <rect x="9" y="7" width="1" height="8" fill="#1c1917" />
          </svg>
        </div>
      </div>
    </div>
  );

  return (
    <SectionEnvironment
      id="contact"
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
