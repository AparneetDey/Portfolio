import { useEffect, useState } from "react";

/**
 * Hook to observe and detect the currently active section in the viewport.
 * @param {string[]} sectionIds - Array of element IDs to track
 * @param {number} offsetRatio - Intersection observer threshold offset
 * @returns {string} activeId - The ID of the currently active section
 */
export function useActiveSection(sectionIds, offsetRatio = 0.35) {
  const [activeId, setActiveId] = useState(sectionIds[0] || "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * offsetRatio;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds, offsetRatio]);

  return activeId;
}
