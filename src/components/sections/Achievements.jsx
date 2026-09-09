import { achievements } from "../../data/achievements";
import { SectionTitle } from "../ui/SectionTitle";
import { PixelPanel } from "../ui/PixelPanel";
import { PixelBadge } from "../ui/PixelBadge";
import { PixelIcon } from "../ui/PixelIcon";
import { SignpostObject } from "../world/WorldObjects";

/**
 * Area 6: ACHIEVEMENTS — The Mountain
 * High-altitude mountain shrines where trophies, certifications, and honors reside.
 * Completely data-driven via `src/data/achievements.js`.
 */
export function Achievements() {
  return (
    <section className="py-20 px-4 max-w-5xl mx-auto">
      <SectionTitle
        stage="AREA VI"
        title="The Mountain"
        subtitle="Rugged peaks reached through persistence, competitive trials, and community honors."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        {achievements.map((item) => (
          <PixelPanel
            key={item.id}
            variant="stone"
            className="border-2 border-[#313845] hover:border-[#78540c] transition-all"
          >
            <div className="flex items-start gap-4">
              {/* Trophy Crest / Shrine Sigil */}
              <div className="w-12 h-12 bg-[#222731] border-2 border-[#78540c] flex items-center justify-center text-[#fad97f] shadow-[0_3px_0_0_#0a0e14] shrink-0">
                <PixelIcon name={item.badge || "trophy"} className="w-6 h-6" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-['Pixelify_Sans',monospace] text-[10px] text-[#937849] uppercase tracking-wider">
                    {item.date}
                  </span>
                  <PixelBadge variant="gold" size="xs">
                    {item.category}
                  </PixelBadge>
                </div>

                <h3 className="font-['Cinzel',serif] text-base sm:text-lg font-bold text-[#f4ebd0] mb-1">
                  {item.title}
                </h3>

                <div className="font-['Pixelify_Sans',monospace] text-xs text-[#a0aec0] mb-2">
                  Issued by: {item.issuer}
                </div>

                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </PixelPanel>
        ))}
      </div>

      <SignpostObject label="Descend To The Harbor" direction="right" />
    </section>
  );
}
