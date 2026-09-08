import { Player } from "./Player";
import { useScrollProgress } from "../../hooks/useScrollProgress";

/**
 * WorldUI — Game HUD overlay displaying active realm, player marker, and journey progress.
 */
export function WorldUI({ activeZone = "The Campfire", activeZoneIndex = 1, totalZones = 7 }) {
  const progress = useScrollProgress();

  return (
    <aside aria-label="Journey HUD" className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2 pointer-events-auto">
      {/* Player travel companion badge */}
      <Player activeZone={activeZone} />

      {/* World Progress Bar & Zone indicator */}
      <div className="bg-[#171b22]/90 border-2 border-[#313845] p-2.5 shadow-[0_4px_0_0_#0a0e14] w-56">
        <div className="flex items-center justify-between text-[11px] font-['Pixelify_Sans',monospace] text-[#a0aec0] mb-1">
          <span className="text-[#fad97f] font-bold">
            STAGE {activeZoneIndex}/{totalZones}
          </span>
          <span>{progress}% EXPLORED</span>
        </div>

        {/* Stepped Pixel Progress Bar */}
        <div className="w-full h-3 bg-[#101620] border border-[#222731] p-0.5 relative overflow-hidden">
          <div
            className="h-full bg-[#e5a828] transition-all duration-300 relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#fff]/30 to-transparent" />
          </div>
        </div>
      </div>
    </aside>
  );
}
