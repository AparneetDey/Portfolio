import { SectionEnvironment } from "./SectionEnvironment";

/**
 * MountainEnvironment — Area 6: Achievements / The Mountain
 * High mountain peak at sunset with generated 2D pixel-art background.
 */
export function MountainEnvironment({ children }) {
  return (
    <SectionEnvironment
      id="achievements"
      bgImage="/environments/achievements-mountain.jpg"
      bgPosition="center bottom"
      scrimType="center"
    >
      {children}
    </SectionEnvironment>
  );
}
