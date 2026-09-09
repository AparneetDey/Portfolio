import { useParallax } from "../../../hooks/useParallax";
import "./environments.css";

/**
 * SectionEnvironment — Multi-plane 2D Pixel-Art RPG Environment Container.
 * Renders layered game planes with subtle scroll parallax and localized contrast scrim.
 */
export function SectionEnvironment({
  id,
  className = "",
  sky,
  farDistant,
  midground,
  ground,
  foregroundDecor,
  scrimType = "center", // "center" | "wide" | "none"
  children,
}) {
  const { getParallaxStyle } = useParallax();

  return (
    <div id={id} className={`relative overflow-hidden ${className}`}>
      {/* Layer 1: Pixel Sky & Celestial (Speed 0 - Anchor) */}
      {sky && (
        <div className="absolute inset-0 pointer-events-none z-0 select-none overflow-hidden pixel-layer">
          {sky}
        </div>
      )}

      {/* Layer 2: Distant Pixel Mountains / Castles (Speed 0.04) */}
      {farDistant && (
        <div
          className="absolute inset-0 pointer-events-none z-[1] select-none overflow-hidden pixel-layer"
          style={getParallaxStyle(0.04)}
        >
          {farDistant}
        </div>
      )}

      {/* Layer 3: Midground Pixel Architecture / Trees / Water (Speed 0.08) */}
      {midground && (
        <div
          className="absolute inset-0 pointer-events-none z-[2] select-none overflow-hidden pixel-layer"
          style={getParallaxStyle(0.08)}
        >
          {midground}
        </div>
      )}

      {/* Layer 4: Ground Plane & Tiles (Speed 0.02) */}
      {ground && (
        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none z-[3] select-none overflow-hidden pixel-layer"
          style={getParallaxStyle(0.02)}
        >
          {ground}
        </div>
      )}

      {/* Layer 5: Localized Contrast Scrim (Guarantees 100% UI readability) */}
      {scrimType !== "none" && (
        <div
          className={`absolute inset-0 pointer-events-none z-[4] select-none ${
            scrimType === "wide" ? "contrast-scrim-wide" : "contrast-scrim-center"
          }`}
        />
      )}

      {/* Layer 6: Foreground Pixel Props & Foliage (Speed 0.12) */}
      {foregroundDecor && (
        <div
          className="absolute inset-0 pointer-events-none z-[5] select-none overflow-hidden pixel-layer"
          style={getParallaxStyle(0.12)}
        >
          {foregroundDecor}
        </div>
      )}

      {/* Layer 7: Interactive Portfolio UI (Z-index 10) */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
