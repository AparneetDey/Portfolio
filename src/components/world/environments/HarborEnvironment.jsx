import { SectionEnvironment } from "./SectionEnvironment";

/**
 * HarborEnvironment — Area 7: Contact / The Harbor
 * Coastal harbor at twilight with generated 2D pixel-art background.
 */
export function HarborEnvironment({ children }) {
  return (
    <SectionEnvironment
      id="contact"
      bgImage="/environments/contact-harbor.jpg"
      bgPosition="center bottom"
      scrimType="center"
    >
      {children}
    </SectionEnvironment>
  );
}
