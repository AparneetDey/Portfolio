import { SectionEnvironment } from "./SectionEnvironment";

/**
 * GuildHallEnvironment — Area 4: Projects / The Guild Hall
 * Grand medieval guild hall generated 2D pixel-art background.
 */
export function GuildHallEnvironment({ children }) {
  return (
    <SectionEnvironment
      id="projects"
      bgImage="/environments/projects-guildhall.jpg"
      bgPosition="center center"
      scrimType="center"
    >
      {children}
    </SectionEnvironment>
  );
}
