import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { World } from "./components/world/World";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Experience } from "./components/sections/Experience";
import { Achievements } from "./components/sections/Achievements";
import { Contact } from "./components/sections/Contact";
import { useActiveSection } from "./hooks/useActiveSection";

const SECTIONS = [
  { id: "home", number: 1, name: "Start", label: "The Campfire" },
  { id: "about", number: 2, name: "About", label: "The Village" },
  { id: "skills", number: 3, name: "Skills", label: "The Workshop" },
  { id: "projects", number: 4, name: "Projects", label: "The Guild Hall" },
  { id: "experience", number: 5, name: "Road", label: "The Road" },
  { id: "achievements", number: 6, name: "Peaks", label: "The Mountain" },
  { id: "contact", number: 7, name: "Harbor", label: "The Harbor" },
];

const SECTION_IDS = SECTIONS.map((s) => s.id);

function App() {
  const activeSection = useActiveSection(SECTION_IDS);

  return (
    <div className="min-h-screen bg-[#0a0e14] text-[#e2e8f0] flex flex-col selection:bg-[#78540c] selection:text-[#fad97f]">
      {/* Realm Fast-Travel Navigation Bar */}
      <Navbar sections={SECTIONS} activeSection={activeSection} />

      {/* The Continuous 2D Fantasy World */}
      <World activeSection={activeSection} sectionsMeta={SECTIONS}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </World>

      {/* World's Edge Harbor Footer */}
      <Footer />
    </div>
  );
}

export default App;
