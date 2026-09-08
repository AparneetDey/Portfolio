import "./StatusBanner.css";
import { cn } from "../../utils/classNames";
import { STATUS_VARIANTS } from "../../data/statusVariants";

/**
 * Pixel-art Chain Column Component.
 * Renders an authentic vertical sequence of 16-bit interlocking bronze links
 * with an anchor hook that reaches and mounts under the top navbar.
 */
function ChainColumn({ className = "", linksCount = 5, showNavbarAnchor = true }) {
  return (
    <div className={cn("flex flex-col items-center select-none", className)}>
      {/* Top anchor ring connecting to the bottom edge of the top navbar */}
      {showNavbarAnchor && (
        <div className="w-4 h-2 bg-[#3d2312] border-2 border-[#24140a] rounded-t-sm shadow-[inset_1px_1px_0_#fad97f] -mb-1 z-10" />
      )}
      {Array.from({ length: linksCount }).map((_, i) => (
        <div key={i} className="flex flex-col items-center -space-y-1">
          {/* Vertical Oval Link */}
          <div className="w-2 h-3 sm:w-2.5 sm:h-3.5 bg-[#78540c] border border-[#24140a] rounded-sm shadow-[inset_1px_1px_0_#fad97f]" />
          {/* Horizontal Interlocking Ring with hollow center */}
          <div className="w-3.5 h-1.5 sm:w-4 sm:h-2 border border-[#24140a] bg-[#4e2d17] rounded-none flex items-center justify-center">
            <div className="w-1 h-0.5 bg-transparent" />
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * Pixel-art Leather Adventurer Briefcase / Satchel SVG.
 * Scaled and compact 16-bit RPG sprite with brass clasp and 4 sparkle stars.
 */
function PixelBriefcase({ className = "w-7 h-7 sm:w-8 sm:h-8" }) {
  return (
    <div className={cn("relative flex items-center justify-center select-none shrink-0", className)}>
      <svg
        viewBox="0 0 32 32"
        className="w-full h-full pixel-art drop-shadow-[0_1px_0_#150a04]"
        shapeRendering="crispEdges"
      >
        {/* Handle */}
        <rect x="12" y="5" width="8" height="2" fill="#24140a" />
        <rect x="13" y="6" width="6" height="1" fill="#8c522b" />
        <rect x="12" y="7" width="2" height="2" fill="#24140a" />
        <rect x="18" y="7" width="2" height="2" fill="#24140a" />

        {/* Main Briefcase Body */}
        <rect x="6" y="9" width="20" height="15" fill="#24140a" />
        <rect x="7" y="10" width="18" height="13" fill="#55331a" />
        {/* Upper Leather Flap */}
        <rect x="7" y="10" width="18" height="7" fill="#6a3e20" />
        <rect x="8" y="10" width="16" height="2" fill="#8c522b" />
        <line x1="7" y1="17" x2="25" y2="17" stroke="#24140a" strokeWidth="1" />

        {/* Straps */}
        <rect x="10" y="10" width="2" height="13" fill="#3d2312" />
        <rect x="20" y="10" width="2" height="13" fill="#3d2312" />

        {/* Brass Center Buckle / Clasp */}
        <rect x="14" y="15" width="4" height="4" fill="#24140a" />
        <rect x="15" y="16" width="2" height="2" fill="#fad97f" />
        <rect x="15" y="16" width="1" height="1" fill="#ffffff" />
      </svg>

      {/* 4 Green Sparkle Stars around the Satchel */}
      <span className="absolute -top-1 -left-0.5 text-[#588c65] text-[10px] leading-none select-none">✦</span>
      <span className="absolute -top-1 -right-0.5 text-[#588c65] text-[10px] leading-none select-none">✦</span>
      <span className="absolute -bottom-1 -left-0.5 text-[#588c65] text-[10px] leading-none select-none">✦</span>
      <span className="absolute -bottom-1 -right-0.5 text-[#588c65] text-[10px] leading-none select-none">✦</span>
    </div>
  );
}

/**
 * Pixel-art Hanging Lantern with warm golden glow.
 */
function HangingLantern({ className = "" }) {
  return (
    <div className={cn("flex flex-col items-center select-none", className)}>
      {/* Mini suspension chain */}
      <div className="w-0.5 h-2 bg-[#24140a] shadow-[inset_0_1px_0_#fad97f]" />
      <div className="w-1.5 h-1 border border-[#24140a] bg-[#78540c]" />

      {/* Lantern Housing & Glowing Glass */}
      <div className="status-lantern-glow relative">
        <svg
          viewBox="0 0 16 20"
          className="w-4 h-5 sm:w-4.5 sm:h-5.5 pixel-art"
          shapeRendering="crispEdges"
        >
          {/* Top Cap */}
          <rect x="5" y="1" width="6" height="2" fill="#24140a" />
          <rect x="6" y="2" width="4" height="1" fill="#8c522b" />
          <rect x="4" y="3" width="8" height="2" fill="#78540c" />
          <rect x="3" y="5" width="10" height="1" fill="#24140a" />

          {/* Glowing Glass Body */}
          <rect x="4" y="6" width="8" height="7" fill="#f3c24e" />
          <rect x="5" y="7" width="6" height="5" fill="#fdedbb" />
          <rect x="6" y="8" width="4" height="3" fill="#ffffff" />

          {/* Metal Casing Ribs */}
          <rect x="3" y="6" width="1" height="7" fill="#24140a" />
          <rect x="12" y="6" width="1" height="7" fill="#24140a" />
          <rect x="7" y="6" width="2" height="7" fill="#78540c" opacity="0.6" />

          {/* Bottom Spire */}
          <rect x="4" y="13" width="8" height="2" fill="#78540c" />
          <rect x="6" y="15" width="4" height="2" fill="#4e2d17" />
          <rect x="7" y="17" width="2" height="2" fill="#24140a" />
        </svg>
      </div>
    </div>
  );
}

/**
 * Pixel-art Ivy Foliage with White Flowers.
 */
function IvyCornerFoliage({ side = "left" }) {
  const isRight = side === "right";
  return (
    <div
      className={cn(
        "absolute pointer-events-none z-20 select-none",
        isRight ? "-top-2.5 -right-3 scale-x-[-1]" : "-top-2.5 -left-3"
      )}
    >
      <svg
        viewBox="0 0 36 44"
        className="w-7 h-9 sm:w-8 sm:h-10 pixel-art drop-shadow-[0_1px_0_#150a04]"
        shapeRendering="crispEdges"
      >
        {/* Vine Stems */}
        <rect x="4" y="10" width="2" height="18" fill="#1d3322" />
        <rect x="6" y="16" width="14" height="2" fill="#1d3322" />

        {/* Cluster of Emerald/Moss Leaves */}
        <rect x="2" y="6" width="6" height="6" fill="#2a4931" />
        <rect x="3" y="7" width="4" height="4" fill="#3b6645" />
        <rect x="4" y="8" width="2" height="2" fill="#50865c" />

        <rect x="8" y="2" width="7" height="7" fill="#2a4931" />
        <rect x="9" y="3" width="5" height="5" fill="#3b6645" />
        <rect x="10" y="4" width="3" height="3" fill="#50865c" />

        <rect x="16" y="8" width="6" height="6" fill="#2a4931" />
        <rect x="17" y="9" width="4" height="4" fill="#3b6645" />

        <rect x="2" y="18" width="7" height="7" fill="#2a4931" />
        <rect x="3" y="19" width="5" height="5" fill="#3b6645" />
        <rect x="4" y="20" width="3" height="3" fill="#50865c" />

        <rect x="6" y="28" width="5" height="6" fill="#2a4931" />
        <rect x="7" y="29" width="3" height="4" fill="#3b6645" />

        {/* Delicate 5-Petal White Flower with Golden Pistil */}
        <rect x="11" y="15" width="2" height="2" fill="#fad97f" />
        <rect x="11" y="13" width="2" height="2" fill="#fdfbf7" />
        <rect x="11" y="17" width="2" height="2" fill="#fdfbf7" />
        <rect x="9" y="15" width="2" height="2" fill="#fdfbf7" />
        <rect x="13" y="15" width="2" height="2" fill="#fdfbf7" />
      </svg>
    </div>
  );
}

/**
 * Hanging Vine Drapery for the lower frame.
 */
function HangingVine({ side = "left" }) {
  const isRight = side === "right";
  return (
    <div
      className={cn(
        "absolute -bottom-5 pointer-events-none z-10 select-none",
        isRight ? "right-9 sm:right-12 scale-x-[-1]" : "left-9 sm:left-12"
      )}
    >
      <svg
        viewBox="0 0 20 28"
        className="w-4 h-6 sm:w-5 sm:h-7 pixel-art drop-shadow-[0_1px_0_#150a04]"
        shapeRendering="crispEdges"
      >
        <rect x="9" y="0" width="2" height="16" fill="#1d3322" />
        <rect x="6" y="6" width="4" height="5" fill="#2a4931" />
        <rect x="7" y="7" width="2" height="3" fill="#3b6645" />
        <rect x="11" y="12" width="5" height="5" fill="#2a4931" />
        <rect x="12" y="13" width="3" height="3" fill="#3b6645" />
        <rect x="8" y="18" width="4" height="6" fill="#2a4931" />
        <rect x="9" y="19" width="2" height="4" fill="#50865c" />
      </svg>
    </div>
  );
}

/**
 * StatusBanner — Reusable medieval/fantasy hanging status signboard component.
 *
 * @param {string} status - Full status string (e.g. "Open for Opportunities")
 * @param {string} highlight - Primary prominent keyword (defaults to first word of status or variant)
 * @param {string} secondary - Suffix text (defaults to remainder of status or variant)
 * @param {'available' | 'busy' | 'freelancing' | 'unavailable'} variant - Preconfigured theme state
 * @param {React.ReactNode} icon - Custom icon override
 * @param {boolean} animated - Enables gentle floating bobbing animation (default: true)
 * @param {boolean} showChains - Toggles suspension chains (default: true)
 * @param {boolean} reachNavbar - Extends chains upward to reach the top navbar (default: true)
 * @param {number} linksCount - Custom chain links count (default: 5 when reachNavbar is true)
 * @param {boolean} showLanterns - Toggles hanging corner lanterns (default: true)
 * @param {boolean} showFoliage - Toggles ivy foliage & flowers (default: true)
 */
export function StatusBanner({
  status,
  highlight,
  secondary,
  variant = "available",
  icon,
  animated = true,
  showChains = true,
  reachNavbar = true,
  linksCount,
  showLanterns = true,
  showFoliage = true,
  className = "",
}) {
  // Resolve variant configuration
  const config = STATUS_VARIANTS[variant] || STATUS_VARIANTS.available;

  // Resolve display text
  let finalHighlight = highlight;
  let finalSecondary = secondary;

  if (!finalHighlight && !finalSecondary) {
    if (status) {
      const parts = status.trim().split(" ");
      finalHighlight = parts[0];
      finalSecondary = parts.slice(1).join(" ");
    } else {
      finalHighlight = config.highlight;
      finalSecondary = config.secondary;
    }
  }

  const highlightColor = config.highlightColor || "text-[#2e5d36]";
  const ariaLabel = status || `${finalHighlight} ${finalSecondary}`;
  const computedLinks = linksCount !== undefined ? linksCount : reachNavbar ? 5 : 3;

  return (
    <div
      role="status"
      aria-label={ariaLabel}
      className={cn(
        "status-banner-root max-w-[310px] sm:max-w-[360px] md:max-w-[400px] mx-auto px-2 sm:px-3",
        animated ? "status-banner-animated" : "",
        className
      )}
    >
      {/* 1. Suspension Chains Hanging from Top Navbar */}
      {showChains && (
        <div
          className={cn(
            "w-full relative pointer-events-none flex justify-between px-8 sm:px-11",
            reachNavbar ? "-mt-1 sm:-mt-1.5" : ""
          )}
        >
          <ChainColumn linksCount={computedLinks} showNavbarAnchor={reachNavbar} />
          <ChainColumn linksCount={computedLinks} showNavbarAnchor={reachNavbar} />
        </div>
      )}

      {/* 2. Main Compact Wooden Signboard Frame */}
      <div className="status-board-frame pixel-cut-corners w-full p-1.5 sm:p-2 relative -mt-0.5">
        {/* Metal chain mounting brackets attached to top edge */}
        {showChains && (
          <>
            <div className="status-chain-bracket left-7 sm:left-10" />
            <div className="status-chain-bracket right-7 sm:right-10" />
          </>
        )}

        {/* 4 Corner Metal Plates with Rivets */}
        <div className="status-metal-corner tl" />
        <div className="status-metal-corner tr" />
        <div className="status-metal-corner bl" />
        <div className="status-metal-corner br" />

        {/* Decorative Ivy Foliage wrapping corners */}
        {showFoliage && (
          <>
            <IvyCornerFoliage side="left" />
            <IvyCornerFoliage side="right" />
            <HangingVine side="left" />
            <HangingVine side="right" />
          </>
        )}

        {/* 3. Inner Parchment Paper Panel */}
        <div className="status-parchment-panel pixel-cut-corners px-3 py-1.5 sm:px-4 sm:py-2 flex items-center justify-between gap-2.5 sm:gap-3.5 relative overflow-hidden">
          {/* Subtle inner decorative corner flourish */}
          <div className="absolute top-1 left-1 w-1 h-1 border-t border-l border-[#ba9e68] opacity-70" />
          <div className="absolute top-1 right-1 w-1 h-1 border-t border-r border-[#ba9e68] opacity-70" />
          <div className="absolute bottom-1 left-1 w-1 h-1 border-b border-l border-[#ba9e68] opacity-70" />
          <div className="absolute bottom-1 right-1 w-1 h-1 border-b border-r border-[#ba9e68] opacity-70" />

          {/* Left: Status Icon */}
          <div className="shrink-0 flex items-center justify-center">
            {icon !== undefined ? (
              icon
            ) : (
              <PixelBriefcase />
            )}
          </div>

          {/* Center: Real Selectable Status Typography */}
          <div className="flex-1 flex flex-col justify-center text-center sm:text-left min-w-0">
            <div className="flex flex-wrap items-baseline justify-center sm:justify-start gap-x-1.5 gap-y-0 leading-tight">
              {/* Prominent Status Keyword */}
              <span
                className={cn(
                  "font-['Pixelify_Sans',monospace] text-base sm:text-lg md:text-xl font-extrabold tracking-wide drop-shadow-[0_1px_0_rgba(255,255,255,0.6)]",
                  highlightColor
                )}
              >
                {finalHighlight}
              </span>

              {/* Secondary Status Suffix */}
              {finalSecondary && (
                <span className="font-['Cinzel',serif] text-xs sm:text-sm md:text-base font-bold text-[#2d1a0c] tracking-tight drop-shadow-[0_1px_0_rgba(255,255,255,0.4)]">
                  {finalSecondary}
                </span>
              )}
            </div>
          </div>

          {/* Right: Medieval 4-Point Star Flourish */}
          <div className="shrink-0 hidden sm:flex items-center justify-center text-[#c99119] select-none text-sm pr-0.5">
            <span className="animate-pulse">✦</span>
          </div>
        </div>

        {/* 4. Hanging Lanterns Suspended from Lower Corners */}
        {showLanterns && (
          <>
            <div className="absolute -bottom-6 sm:-bottom-7 left-1 sm:left-1.5 z-20">
              <HangingLantern />
            </div>
            <div className="absolute -bottom-6 sm:-bottom-7 right-1 sm:right-1.5 z-20">
              <HangingLantern />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
export default StatusBanner;
