import { SectionEnvironment } from "./SectionEnvironment";

/**
 * LibraryEnvironment — Area 3: Skills / The Scholar's Workshop & Library
 * Cozy scholar's library and workshop generated 2D pixel-art background.
 */
export function LibraryEnvironment({ children }) {
  return (
    <SectionEnvironment
      id="skills"
      bgImage="/environments/skills-library.jpg"
      bgPosition="center center"
      scrimType="wide"
    >
      {children}
    </SectionEnvironment>
  );
}
