import { useRef } from "react";
import { useParallax } from "../../../hooks/useParallax";
import "./environments.css";

/**
 * SectionEnvironment — Multi-plane 2D Pixel-Art RPG Environment Container.
 * Renders layered game planes with subtle scroll parallax, authentic 16/32-bit pixel art,
 * and localized contrast scrims to guarantee high UI readability.
 */
export function SectionEnvironment({
  id,
  className = "",
  bgImage,
  bgPosition = "center bottom",
  scrimType = "center", // "center" | "wide" | "none"
  children,
}) {
  const containerRef = useRef(null);
  const { getParallaxStyle } = useParallax(containerRef);

  return (
    <div ref={containerRef} id={id} className={`relative overflow-hidden scroll-mt-14 sm:scroll-mt-16 ${className}`}>
      {/* Generated 2D Pixel Art Background with Subtle Parallax */}
      {bgImage && (
        <div
          className="absolute -inset-[6%] pointer-events-none z-0 select-none overflow-hidden pixel-layer"
          style={getParallaxStyle(0.04)}
        >
          <img
            src={bgImage}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover select-none pixel-art"
            style={{ objectPosition: bgPosition }}
          />
        </div>
      )}

      {/* Localized Contrast Scrim (Ensures 100% UI readability without obscuring scenery) */}
      {scrimType !== "none" && (
        <div
          className={`absolute inset-0 pointer-events-none z-[1] select-none ${
            scrimType === "wide" ? "contrast-scrim-wide" : "contrast-scrim-center"
          }`}
        />
      )}

      {/* Interactive Portfolio UI */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
