import { SectionEnvironment } from "./SectionEnvironment";

/**
 * MeadowEnvironment — Area 1: Home / Start
 * A genuine 16-bit pixel-art RPG meadow scene in crisp morning daylight.
 * Features stepped pixel mountains, blocky clouds, 16-bit pine trees, and a pixel castle.
 */
export function MeadowEnvironment({ children }) {
  // Layer 1: 16-Bit Pixel Sky & Stepped Clouds
  const sky = (
    <div className="w-full h-full relative overflow-hidden">
      {/* 16-bit stepped sky gradient with horizontal color bands */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c4a6e] via-[#0284c7] via-[#38bdf8] to-[#bae6fd]" />
      <div className="absolute inset-0 dither-pattern-sky pointer-events-none opacity-30" />

      {/* Stepped Pixel Sun (Top Right) */}
      <div className="absolute top-8 right-1/4 w-16 h-16 pointer-events-none">
        <svg viewBox="0 0 32 32" className="w-full h-full pixel-art" shapeRendering="crispEdges">
          {/* Sun Glow Outer Pixel Steps */}
          <rect x="12" y="2" width="8" height="2" fill="#fef08a" opacity="0.4" />
          <rect x="12" y="28" width="8" height="2" fill="#fef08a" opacity="0.4" />
          <rect x="2" y="12" width="2" height="8" fill="#fef08a" opacity="0.4" />
          <rect x="28" y="12" width="2" height="8" fill="#fef08a" opacity="0.4" />
          {/* Main Pixel Sun Disk */}
          <rect x="8" y="8" width="16" height="16" fill="#fef08a" />
          <rect x="10" y="6" width="12" height="20" fill="#fef08a" />
          <rect x="6" y="10" width="20" height="12" fill="#fef08a" />
          {/* Core Bright Pixel */}
          <rect x="11" y="11" width="10" height="10" fill="#ffffff" />
        </svg>
      </div>

      {/* 16-Bit Blocky Pixel Clouds (Drifting on integer steps) */}
      <div className="absolute top-10 inset-x-0 h-28 opacity-75 animate-pixel-clouds pointer-events-none">
        <svg viewBox="0 0 384 64" className="w-full h-full pixel-art" shapeRendering="crispEdges">
          {/* Cloud 1 (Left) */}
          <g transform="translate(40, 8)" fill="#ffffff">
            <rect x="12" y="8" width="40" height="16" />
            <rect x="20" y="2" width="24" height="6" />
            <rect x="4" y="14" width="56" height="10" />
            {/* Cloud shadow pixels */}
            <rect x="4" y="20" width="56" height="4" fill="#cbd5e1" />
          </g>

          {/* Cloud 2 (Center Right) */}
          <g transform="translate(220, 14)" fill="#ffffff">
            <rect x="16" y="6" width="48" height="18" />
            <rect x="26" y="0" width="28" height="6" />
            <rect x="6" y="12" width="68" height="12" />
            <rect x="6" y="20" width="68" height="4" fill="#cbd5e1" />
          </g>
        </svg>
      </div>

      {/* Soaring 16-Bit Pixel Birds */}
      <div className="absolute top-24 left-1/3 flex gap-6 text-xs pointer-events-none opacity-80">
        <svg viewBox="0 0 16 8" className="w-6 h-3 pixel-art text-[#0369a1]" fill="currentColor" shapeRendering="crispEdges">
          <rect x="0" y="0" width="3" height="2" />
          <rect x="3" y="2" width="3" height="2" />
          <rect x="6" y="4" width="4" height="2" />
          <rect x="10" y="2" width="3" height="2" />
          <rect x="13" y="0" width="3" height="2" />
        </svg>
        <svg viewBox="0 0 16 8" className="w-5 h-2.5 pixel-art text-[#0369a1] -mt-2" fill="currentColor" shapeRendering="crispEdges">
          <rect x="0" y="0" width="3" height="2" />
          <rect x="3" y="2" width="3" height="2" />
          <rect x="6" y="4" width="4" height="2" />
          <rect x="10" y="2" width="3" height="2" />
          <rect x="13" y="0" width="3" height="2" />
        </svg>
      </div>
    </div>
  );

  // Layer 2: 16-Bit Stepped Mountains & Fairytale Castle
  const farDistant = (
    <div className="absolute inset-x-0 bottom-24 pointer-events-none">
      <svg
        viewBox="0 0 384 120"
        className="w-full h-64 pixel-art"
        preserveAspectRatio="none"
        shapeRendering="crispEdges"
      >
        {/* Distant Purple Pixel Mountain Range */}
        {/* Mountain 1: Left Peak */}
        <polygon points="0,120 0,70 30,70 30,50 60,50 60,30 80,30 80,10 100,10 100,30 120,30 120,60 150,60 150,120" fill="#3730a3" />
        {/* Lit Face (Left side of peak) */}
        <polygon points="0,120 0,70 30,70 30,50 60,50 60,30 80,30 80,10 90,10 90,120" fill="#4f46e5" opacity="0.4" />

        {/* Mountain 2: Center-Right High Peak */}
        <polygon points="170,120 170,65 200,65 200,45 230,45 230,20 250,20 250,45 280,45 280,75 310,75 310,120" fill="#312e81" />
        <polygon points="170,120 170,65 200,65 200,45 230,45 230,20 240,20 240,120" fill="#4338ca" opacity="0.5" />

        {/* Mountain 3: Far Right Peak */}
        <polygon points="290,120 290,80 320,80 320,55 350,55 350,35 370,35 370,55 384,55 384,120" fill="#3730a3" />

        {/* 16-Bit Fairytale Castle on the Middle Ridge (Positioned right) */}
        <g transform="translate(240, 25)">
          {/* Main Central Keep */}
          <rect x="16" y="20" width="24" height="35" fill="#e2e8f0" />
          {/* Crenellations on central keep */}
          <rect x="16" y="16" width="5" height="4" fill="#e2e8f0" />
          <rect x="25" y="16" width="6" height="4" fill="#e2e8f0" />
          <rect x="35" y="16" width="5" height="4" fill="#e2e8f0" />
          {/* Conical Roof Peak */}
          <polygon points="20,16 28,2 36,16" fill="#1d4ed8" />
          {/* Flag */}
          <rect x="28" y="0" width="1" height="4" fill="#facc15" />
          <polygon points="29,0 35,2 29,4" fill="#eab308" />

          {/* Left Turret */}
          <rect x="6" y="28" width="10" height="27" fill="#cbd5e1" />
          <polygon points="6,28 11,18 16,28" fill="#2563eb" />
          {/* Right Turret */}
          <rect x="40" y="28" width="10" height="27" fill="#cbd5e1" />
          <polygon points="40,28 45,18 50,28" fill="#2563eb" />
          {/* Castle Gate */}
          <rect x="24" y="43" width="8" height="12" fill="#1e293b" />
        </g>
      </svg>
    </div>
  );

  // Layer 3: 16-Bit Stepped Pine Trees & Emerald Hills
  const midground = (
    <div className="absolute inset-x-0 bottom-12 pointer-events-none">
      <svg
        viewBox="0 0 384 64"
        className="w-full h-36 pixel-art"
        preserveAspectRatio="none"
        shapeRendering="crispEdges"
      >
        {/* Rolling emerald green foothill base */}
        <rect x="0" y="40" width="384" height="24" fill="#15803d" />

        {/* 16-Bit Tiered Pine Trees */}
        {[
          { x: 10, h: 48, w: 20 },
          { x: 35, h: 40, w: 18 },
          { x: 65, h: 52, w: 22 },
          { x: 100, h: 36, w: 16 },
          { x: 130, h: 46, w: 20 },
          { x: 175, h: 50, w: 22 },
          { x: 215, h: 42, w: 18 },
          { x: 255, h: 48, w: 20 },
          { x: 300, h: 54, w: 24 },
          { x: 340, h: 44, w: 18 },
          { x: 365, h: 38, w: 16 },
        ].map((tree, i) => (
          <g key={i} transform={`translate(${tree.x}, ${56 - tree.h})`}>
            {/* Trunk */}
            <rect x={tree.w / 2 - 2} y={tree.h - 10} width="4" height="10" fill="#451a03" />
            {/* Tier 1 (Bottom foliage) */}
            <rect x="0" y={tree.h - 22} width={tree.w} height="12" fill="#14532d" />
            <rect x="2" y={tree.h - 24} width={tree.w - 4} height="4" fill="#16a34a" />
            {/* Tier 2 (Middle foliage) */}
            <rect x="3" y={tree.h - 32} width={tree.w - 6} height="10" fill="#14532d" />
            <rect x="5" y={tree.h - 34} width={tree.w - 10} height="4" fill="#16a34a" />
            {/* Tier 3 (Top peak foliage) */}
            <rect x="6" y={tree.h - 40} width={tree.w - 12} height="8" fill="#16a34a" />
            <rect x="8" y={tree.h - 44} width={tree.w - 16} height="4" fill="#22c55e" />
          </g>
        ))}
      </svg>
    </div>
  );

  // Layer 4: 16-Bit Stepped Grass Turf, Cobblestone Stepping Stones & Pixel Wildflowers
  const ground = (
    <div className="w-full h-24 relative overflow-hidden pointer-events-none">
      <svg
        viewBox="0 0 384 32"
        className="w-full h-full pixel-art"
        preserveAspectRatio="none"
        shapeRendering="crispEdges"
      >
        {/* Earth & Grass base */}
        <rect x="0" y="0" width="384" height="4" fill="#22c55e" />
        <rect x="0" y="4" width="384" height="8" fill="#16a34a" />
        <rect x="0" y="12" width="384" height="20" fill="#14532d" />

        {/* Stepped Grass Teeth along top edge */}
        {Array.from({ length: 48 }).map((_, i) => (
          <rect key={i} x={i * 8} y={i % 2 === 0 ? "0" : "2"} width="4" height="2" fill="#4ade80" />
        ))}

        {/* Pixel Cobblestone Stepping Stones (Curving forward) */}
        <rect x="180" y="8" width="12" height="6" fill="#78716c" />
        <rect x="181" y="9" width="10" height="4" fill="#a8a29e" />

        <rect x="196" y="12" width="14" height="6" fill="#78716c" />
        <rect x="197" y="13" width="12" height="4" fill="#a8a29e" />

        <rect x="175" y="18" width="16" height="7" fill="#78716c" />
        <rect x="176" y="19" width="14" height="5" fill="#a8a29e" />

        {/* 16-Bit Pixel Flowers (Red Poppies, Yellow Buttercups, Bluebells) */}
        {[
          { x: 20, color: "#ef4444" },
          { x: 55, color: "#facc15" },
          { x: 80, color: "#38bdf8" },
          { x: 120, color: "#ec4899" },
          { x: 150, color: "#facc15" },
          { x: 230, color: "#ef4444" },
          { x: 265, color: "#facc15" },
          { x: 310, color: "#38bdf8" },
          { x: 350, color: "#ec4899" },
        ].map((flower, idx) => (
          <g key={idx} transform={`translate(${flower.x}, 6)`}>
            {/* Stem */}
            <rect x="2" y="4" width="2" height="6" fill="#15803d" />
            {/* Flower Petal Pixel Cross */}
            <rect x="1" y="0" width="4" height="4" fill={flower.color} />
            <rect x="0" y="1" width="6" height="2" fill={flower.color} />
            {/* Flower Center */}
            <rect x="2" y="1" width="2" height="2" fill="#ffffff" />
          </g>
        ))}
      </svg>
    </div>
  );

  // Layer 6: 16-Bit Crossroads Signpost & Fluttering Pixel Butterfly
  const foregroundDecor = (
    <div className="w-full h-full flex justify-between pointer-events-none px-4 sm:px-12">
      {/* Left Foreground: 16-Bit Wooden Signpost */}
      <div className="relative self-end mb-16 flex flex-col items-center">
        {/* Fluttering Pixel Butterfly */}
        <div className="absolute -top-10 left-4 animate-butterfly">
          <svg viewBox="0 0 12 12" className="w-4 h-4 pixel-art" shapeRendering="crispEdges">
            <rect x="1" y="1" width="4" height="4" fill="#38bdf8" />
            <rect x="7" y="1" width="4" height="4" fill="#38bdf8" />
            <rect x="5" y="3" width="2" height="6" fill="#1e293b" />
            <rect x="2" y="6" width="3" height="3" fill="#0284c7" />
            <rect x="7" y="6" width="3" height="3" fill="#0284c7" />
          </svg>
        </div>

        {/* 16-Bit Wooden Signpost */}
        <div className="flex flex-col items-center opacity-95">
          <div className="px-2.5 py-1 bg-[#854d0e] border-2 border-[#24140a] text-[#fef08a] font-['Pixelify_Sans',monospace] text-[10px] font-bold shadow-[0_2px_0_0_#24140a] rounded-none">
            To Village ➔
          </div>
          <div className="w-2 h-16 bg-[#54280e] border-x border-[#24140a]" />
        </div>
      </div>

      {/* Right Foreground: Wildflower clump */}
      <div className="relative self-end mb-16 flex items-end gap-1 opacity-90 hidden sm:flex">
        <svg viewBox="0 0 24 24" className="w-6 h-6 pixel-art" shapeRendering="crispEdges">
          <rect x="10" y="8" width="4" height="14" fill="#15803d" />
          <rect x="4" y="12" width="16" height="4" fill="#16a34a" />
          {/* Flower bloom */}
          <rect x="9" y="3" width="6" height="6" fill="#ef4444" />
          <rect x="11" y="5" width="2" height="2" fill="#facc15" />
        </svg>
      </div>
    </div>
  );

  return (
    <SectionEnvironment
      id="home"
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
