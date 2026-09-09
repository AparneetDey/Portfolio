import { SectionEnvironment } from "./SectionEnvironment";

/**
 * MeadowEnvironment — Area 1: Home / Start
 * Bright, peaceful meadow with distant castle generated 2D pixel-art background.
 */
export function MeadowEnvironment({ children }) {
  return (
    <SectionEnvironment
      id="home"
      bgImage="/environments/home-meadow.jpg"
      bgPosition="center bottom"
      scrimType="center"
    >
      {children}
    </SectionEnvironment>
  );
}
