import { useEffect, useState, useRef } from "react";

/**
 * useParallax — Lightweight scroll-driven parallax hook for 2D layered game scenes.
 * Calculates normalized scroll offsets using requestAnimationFrame.
 * Automatically disables parallax if the user prefers reduced motion or on small screens.
 */
export function useParallax() {
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
        setOffsetY(window.scrollY);
        rafId.current = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  /**
   * Helper to compute transform for a layer given a speed multiplier.
   * Speed 0.05 = subtle background drift; 0.15 = midground drift.
   */
  const getParallaxStyle = (speed = 0.1) => {
    if (!offsetY) return {};
    const translation = Math.round(offsetY * speed);
    return {
      transform: `translate3d(0, ${translation}px, 0)`,
      willChange: "transform",
    };
  };

  return { offsetY, getParallaxStyle };
}
