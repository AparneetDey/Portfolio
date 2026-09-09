import { useEffect, useState, useRef } from "react";

/**
 * useParallax — Lightweight scroll-driven parallax hook for 2D layered game scenes.
 * Calculates normalized relative scroll offsets per section using requestAnimationFrame.
 * When a section is centered in the viewport, offset is 0.
 * Automatically disables parallax if the user prefers reduced motion or on mobile screens (<768px).
 */
export function useParallax(containerRef = null) {
  const [offsetY, setOffsetY] = useState(0);
  const rafId = useRef(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Disable on small mobile devices for performance and touch stability
    const isMobile = window.innerWidth < 768;

    if (prefersReducedMotion || isMobile) {
      return;
    }

    const handleScroll = () => {
      if (rafId.current) return;
      rafId.current = requestAnimationFrame(() => {
        if (containerRef && containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          // Distance from viewport center to section center
          const viewportCenter = window.innerHeight / 2;
          const sectionCenter = rect.top + rect.height / 2;
          setOffsetY(sectionCenter - viewportCenter);
        } else {
          setOffsetY(window.scrollY);
        }
        rafId.current = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [containerRef]);

  /**
   * Helper to compute transform for a layer given a speed multiplier.
   * Speed 0.04 = subtle background drift; 0.12 = foreground drift.
   */
  const getParallaxStyle = (speed = 0.06, direction = "vertical") => {
    if (!offsetY) return {};
    const translation = Math.round(offsetY * speed);
    if (direction === "horizontal") {
      return {
        transform: `translate3d(${translation}px, 0, 0)`,
        willChange: "transform",
      };
    }
    return {
      transform: `translate3d(0, ${translation}px, 0)`,
      willChange: "transform",
    };
  };

  return { offsetY, getParallaxStyle };
}

