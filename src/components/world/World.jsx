import { WorldBackground } from "./WorldBackground";
import { WorldUI } from "./WorldUI";

/**
 * World — The overarching 2D medieval fantasy environment wrapper.
 * Unifies the background atmosphere, player indicator, HUD, and continuous world path.
 */
export function World({ children, activeSection, sectionsMeta }) {
  const currentMeta = sectionsMeta.find((s) => s.id === activeSection) || sectionsMeta[0];
  const activeIndex = sectionsMeta.findIndex((s) => s.id === activeSection) + 1;

  return (
    <div className="relative min-h-screen text-[#e2e8f0]">
      {/* Continuous atmospheric backdrop */}
      <WorldBackground />

      {/* World HUD Overlay */}
      <WorldUI
        activeZone={currentMeta?.label || "The Campfire"}
        activeZoneIndex={activeIndex || 1}
        totalZones={sectionsMeta.length}
      />

      {/* Main World Content Stream */}
      <main className="relative z-10">{children}</main>
    </div>
  );
}
