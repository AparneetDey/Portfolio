import { cn } from "../../utils/classNames";

/**
 * Player — The Traveler / Adventurer sprite representation.
 * Marks the visitor's journey companion as they navigate across the 7 portfolio realms.
 */
export function Player({ activeZone = "Start", className = "" }) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 p-2 bg-[#171b22]/90 border-2 border-[#313845] shadow-[0_4px_0_0_#0a0e14]",
        className
      )}
    >
      {/* 2D Pixel Character Sprite Placeholder (CSS pixel art) */}
      <div className="relative w-10 h-10 bg-[#12161f] border border-[#444e60] flex items-center justify-center animate-gentle-bob">
        <svg
          viewBox="0 0 16 16"
          className="w-8 h-8 text-[#f4ebd0] pixel-art"
          fill="currentColor"
        >
          {/* Pixel Head & Hood */}
          <rect x="5" y="1" width="6" height="5" fill="#4e2d17" />
          <rect x="6" y="2" width="4" height="3" fill="#f4ebd0" />
          <rect x="7" y="3" width="1" height="1" fill="#24140a" />
          <rect x="9" y="3" width="1" height="1" fill="#24140a" />
          {/* Cloak / Body */}
          <rect x="4" y="6" width="8" height="6" fill="#2a4931" />
          <rect x="3" y="7" width="1" height="4" fill="#1d3322" />
          {/* Belt & Pouch */}
          <rect x="5" y="9" width="6" height="1" fill="#78540c" />
          <rect x="9" y="9" width="2" height="2" fill="#fad97f" />
          {/* Walking Staff */}
          <rect x="13" y="3" width="1" height="11" fill="#8c522b" />
          <rect x="13" y="2" width="1" height="1" fill="#fad97f" />
          {/* Boots */}
          <rect x="5" y="12" width="2" height="3" fill="#24140a" />
          <rect x="9" y="12" width="2" height="3" fill="#24140a" />
        </svg>
        <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-[#50865c] border border-[#171b22] rounded-none" />
      </div>

      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5">
          <span className="font-['Pixelify_Sans',monospace] text-xs font-bold text-[#f4ebd0] tracking-wide">
            Traveler
          </span>
        </div>
        <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] text-[#94a3b8] truncate max-w-[120px]">
          Zone: {activeZone}
        </span>
      </div>
    </div>
  );
}
