import { useState } from "react";
import { cn } from "../../utils/classNames";

/**
 * Navbar — World Map / Fast Travel Waypoint HUD.
 * Allows instant navigation between all 7 realms of the developer journey.
 */
export function Navbar({ sections = [], activeSection = "" }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#101620]/95 backdrop-blur-sm border-b-2 border-[#24140a] shadow-[0_4px_0_0_#0a0e14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
        {/* Realm Crest / Home Link */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="flex items-center gap-2 group"
        >
          <div className="flex flex-col">
            <span className="font-['Cinzel',serif] text-sm sm:text-base font-bold text-[#f4ebd0] tracking-wider leading-none">
              APARNEET DEY
            </span>
            <span className="font-['Pixelify_Sans',monospace] text-[10px] text-[#fad97f] uppercase tracking-widest leading-tight">
              Realm Journey
            </span>
          </div>
        </a>

        {/* Desktop Waypoint Rail */}
        <nav className="hidden lg:flex items-center gap-1">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => handleNavClick(e, section.id)}
                className={cn(
                  "px-3 py-1.5 font-['Pixelify_Sans',monospace] text-xs uppercase tracking-wider transition-all select-none border border-transparent",
                  isActive
                    ? "bg-[#222731] text-[#fad97f] border-[#78540c] shadow-[inset_0_1px_0_0_#fad97f]"
                    : "text-[#a0aec0] hover:text-[#f4ebd0] hover:bg-[#1a2331]"
                )}
              >
                <span className="text-[#fad97f] mr-1 opacity-70">
                  {section.number}.
                </span>
                {section.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile Fast-Travel Button */}
        <div className="lg:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="px-3 py-1 bg-[#222731] border border-[#313845] text-[#fad97f] font-['Pixelify_Sans',monospace] text-xs uppercase tracking-wider flex items-center gap-1.5 active:translate-y-[1px]"
            aria-label="Toggle Navigation Menu"
          >
            <span>🗺</span>
            <span>{mobileMenuOpen ? "Close Map" : "Fast Travel"}</span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <nav className="lg:hidden bg-[#171b22] border-b-2 border-[#313845] px-4 py-3 space-y-1 shadow-xl">
          <div className="text-[11px] font-['Pixelify_Sans',monospace] text-[#937849] uppercase tracking-widest px-2 py-1">
            Fast-Travel Waypoints
          </div>
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => handleNavClick(e, section.id)}
                className={cn(
                  "block px-3 py-2 text-sm font-['Pixelify_Sans',monospace] uppercase tracking-wider border-l-2 transition-colors",
                  isActive
                    ? "bg-[#222731] text-[#fad97f] border-[#e5a828]"
                    : "text-[#cbd5e1] border-transparent hover:bg-[#1f2837] hover:text-[#f4ebd0]"
                )}
              >
                <span className="text-[#fad97f] mr-2">[{section.number}]</span>
                {section.name} — {section.label}
              </a>
            );
          })}
        </nav>
      )}
    </header>
  );
}
