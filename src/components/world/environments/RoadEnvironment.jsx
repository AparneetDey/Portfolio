import { SectionEnvironment } from "./SectionEnvironment";

/**
 * RoadEnvironment — Area 5: Experience / The Road
 * Scenic countryside road and stone bridge generated 2D pixel-art background.
 */
export function RoadEnvironment({ children }) {
  return (
    <SectionEnvironment
      id="experience"
      bgImage="/environments/experience-road.jpg"
      bgPosition="center bottom"
      scrimType="center"
    >
      {children}
    </SectionEnvironment>
  );
}
