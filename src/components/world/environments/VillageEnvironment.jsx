import { SectionEnvironment } from "./SectionEnvironment";

/**
 * VillageEnvironment — Area 2: About / The Village
 * Lively medieval village with houses and market stalls generated 2D pixel-art background.
 */
export function VillageEnvironment({ children }) {
  return (
    <SectionEnvironment
      id="about"
      bgImage="/environments/about-village.jpg"
      bgPosition="center bottom"
      scrimType="center"
    >
      {children}
    </SectionEnvironment>
  );
}
