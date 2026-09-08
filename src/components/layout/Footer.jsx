import { profile } from "../../data/profile";
import { PixelIcon } from "../ui/PixelIcon";

/**
 * Footer — Harbor's Edge / Farewell campsite at the conclusion of the continuous journey.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0d131a] border-t-4 border-[#24140a] pt-12 pb-16 px-4 text-center select-none z-10">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Decorative Harbor Beacon Sigil */}
        <div className="w-12 h-12 bg-[#171b22] border-2 border-[#78540c] shadow-[0_4px_0_0_#0a0e14] flex items-center justify-center text-[#fad97f] mb-4">
          <PixelIcon name="compass" className="w-6 h-6 text-[#fad97f]" />
        </div>

        <h3 className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold text-[#f4ebd0] tracking-wide mb-2">
          The Journey Continues
        </h3>
        <p className="font-['Plus_Jakarta_Sans',sans-serif] text-sm text-[#94a3b8] max-w-md mx-auto mb-6">
          Thank you for traveling across my digital realm. New lands and codebase architectures are always under construction.
        </p>

        {/* Social Moorings / Outposts */}
        <div className="flex items-center gap-4 mb-8">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-[#222731] border border-[#313845] text-[#cbd5e1] hover:text-[#fad97f] hover:border-[#78540c] shadow-[0_2px_0_0_#0a0e14] transition-all active:translate-y-[1px]"
            title="GitHub Tavern"
          >
            <PixelIcon name="github" className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="p-2.5 bg-[#222731] border border-[#313845] text-[#cbd5e1] hover:text-[#fad97f] hover:border-[#78540c] shadow-[0_2px_0_0_#0a0e14] transition-all active:translate-y-[1px]"
            title="Send Raven / Email"
          >
            <PixelIcon name="mail" className="w-5 h-5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-[#222731] border border-[#313845] text-[#cbd5e1] hover:text-[#fad97f] hover:border-[#78540c] shadow-[0_2px_0_0_#0a0e14] transition-all active:translate-y-[1px]"
            title="LinkedIn Outpost"
          >
            <PixelIcon name="external-link" className="w-5 h-5" />
          </a>
          {profile.leetcode && (
            <a
              href={profile.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-[#222731] border border-[#313845] text-[#cbd5e1] hover:text-[#fad97f] hover:border-[#78540c] shadow-[0_2px_0_0_#0a0e14] transition-all active:translate-y-[1px]"
              title="LeetCode Outpost"
            >
              <PixelIcon name="leetcode" className="w-5 h-5" />
            </a>
          )}
        </div>

        {/* Copyright & Lore Stamp */}
        <div className="text-xs font-['Pixelify_Sans',monospace] text-[#64748b] tracking-wider uppercase space-y-1">
          <div>
            Crafted with React, Vite & Tailwind CSS • {currentYear}
          </div>
          <div className="text-[10px] text-[#475569]">
            Designed as a peaceful 2D medieval fantasy platformer realm.
          </div>
        </div>
      </div>
    </footer>
  );
}
