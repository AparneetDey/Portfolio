import { useState, useMemo } from "react";
import { skills, skillCategories } from "../../data/skills";
import { SectionTitle } from "../ui/SectionTitle";
import { SkillBook } from "../ui/SkillBook";
import { SkillDetail } from "../ui/SkillDetail";
import { PixelIcon } from "../ui/PixelIcon";
import { SignpostObject } from "../world/WorldObjects";
import "./Skills.css";

/**
 * Area 3: SKILLS — The Medieval Scholar's Library & Bookshelf
 * 
 * An immersive wooden library bookshelf where skills are rendered as
 * individual leather-bound books standing on shelves with vertically rotated
 * spine titles, tech emblems, and interactive detail parchment cards.
 * Completely data-driven via `src/data/skills.js`.
 */
export function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedSkill, setSelectedSkill] = useState(() => {
    // Default open skill to React (matching reference image), or the first skill in data
    return skills.find((s) => s.id === "react") || skills[0] || null;
  });
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);

  // Filter skills dynamically from skills data array
  const filteredSkills = useMemo(() => {
    if (activeCategory === "All") return skills;
    return skills.filter((skill) => skill.category === activeCategory);
  }, [activeCategory]);

  // Dynamically divide filtered skills into 1, 2, or 3 shelf tiers
  const shelfRows = useMemo(() => {
    if (filteredSkills.length <= 8) {
      return [filteredSkills];
    }
    if (filteredSkills.length <= 15) {
      const midpoint = Math.ceil(filteredSkills.length / 2);
      return [
        filteredSkills.slice(0, midpoint),
        filteredSkills.slice(midpoint),
      ];
    }
    // Default: 3 shelf tiers
    const perShelf = Math.ceil(filteredSkills.length / 3);
    return [
      filteredSkills.slice(0, perShelf),
      filteredSkills.slice(perShelf, perShelf * 2),
      filteredSkills.slice(perShelf * 2),
    ];
  }, [filteredSkills]);

  const handleSelectBook = (skill) => {
    setSelectedSkill(skill);
    // On small screens, open the modal overlay
    if (window.innerWidth < 1024) {
      setIsMobileModalOpen(true);
    }
  };

  const handleCloseDetail = () => {
    setSelectedSkill(null);
    setIsMobileModalOpen(false);
  };

  const handleScrollToProjects = () => {
    setIsMobileModalOpen(false);
    const projectsEl = document.getElementById("projects");
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="skills" className="py-20 px-3 sm:px-6 max-w-7xl mx-auto">
      <SectionTitle
        stage="AREA III"
        title="The Scholar's Library & Workshop"
        subtitle="Ancient leather-bound grimoires, compiler scrolls, and technical mastery cataloged on sturdy timber shelves."
      />

      {/* Main Medieval Library Room Container */}
      <div className="relative mt-8 select-none">
        {/* Subtle Room Window & Arch backdrop decor */}
        <div className="flex flex-col lg:flex-row gap-6 items-start justify-center">

          {/* ================= LEFT WING: Hanging Sign & Scholar's Desk ================= */}
          <div className="hidden xl:flex flex-col items-center w-[220px] flex-shrink-0 pt-2">
            {/* Hanging Wooden Signboard with Chains */}
            <div className="flex flex-col items-center">
              {/* Chains from above */}
              <div className="flex justify-between w-28 px-4">
                <div className="w-1.5 h-10 bg-gradient-to-b from-[#24140a] via-[#52311b] to-[#24140a] border-x border-[#120803]" />
                <div className="w-1.5 h-10 bg-gradient-to-b from-[#24140a] via-[#52311b] to-[#24140a] border-x border-[#120803]" />
              </div>

              {/* Wooden Sign Frame */}
              <div className="relative bg-[#2e180d] p-1 border-2 border-[#1a0c05] shadow-xl rounded-sm">
                <div className="bg-[#f4ebd0] text-[#24140a] p-3 text-center border border-[#78540c] shadow-inner w-[200px]">
                  <h3 className="font-['Cinzel',serif] text-base font-bold tracking-widest uppercase border-b border-[#ba9e68] pb-1 mb-1.5">
                    Skills
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] leading-tight text-[#4e2d17] italic">
                    Knowledge kept in books, built through practice.
                  </p>
                  <div className="mt-1 text-[10px] text-[#78540c]">✦</div>
                </div>
              </div>
            </div>

            {/* Pinned Parchment Note */}
            <div className="mt-8 relative w-[180px] bg-[#ecdcb9] text-[#3d2411] p-3 border border-[#8b6534] shadow-md -rotate-1 rounded-sm">
              {/* Pin */}
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#78540c] border border-[#24140a]" />
              <p className="font-['Cinzel',serif] text-[11px] leading-relaxed text-center font-semibold">
                "Tools are just the beginning. It's what we build with them that matters."
              </p>
              <div className="text-center text-[9px] text-[#78540c] mt-1">❖</div>
            </div>

            {/* Scholar's Desk: Sleeping Cat, Glowing Lantern & Stacked Books */}
            <div className="mt-8 w-full flex flex-col items-center">
              <div className="flex items-end justify-center gap-3">
                {/* Glowing Lantern */}
                <div className="flex flex-col items-center">
                  <div className="w-8 h-10 bg-[#e5a828]/20 border-2 border-[#533a08] rounded-sm flex items-center justify-center relative animate-lantern-flicker shadow-[0_0_15px_rgba(245,180,50,0.4)]">
                    <PixelIcon name="flame" className="w-6 h-6 text-[#fad97f]" />
                  </div>
                  <div className="w-10 h-1.5 bg-[#24140a] border-t border-[#78540c]" />
                </div>

                {/* Sleeping Pixel Cat */}
                <div className="flex flex-col items-center" title="The library guardian cat">
                  <div className="w-10 h-7 text-[#f97316] relative flex items-center justify-center">
                    <PixelIcon name="cat" className="w-9 h-9 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]" />
                  </div>
                  <div className="w-12 h-1 bg-[#1a0f07]" />
                </div>
              </div>

              {/* Stacked ancient books on the desk */}
              <div className="flex flex-col items-center mt-1">
                <div className="w-20 h-2 bg-[#7d1c21] border border-[#24140a] rounded-t-sm" />
                <div className="w-24 h-2.5 bg-[#1e4179] border border-[#24140a]" />
                <div className="w-28 h-3 bg-[#5a341e] border border-[#24140a]" />
                {/* Desk tabletop */}
                <div className="w-36 h-3 bg-[#3d2212] border-t border-[#784422] border-b-2 border-[#150a04]" />
              </div>
            </div>
          </div>

          {/* ================= CENTER: LARGE WOODEN BOOKSHELF ================= */}
          <div className="flex-1 w-full max-w-4xl relative">
            
            {/* Bookshelf Top Crown & Category Filter Header */}
            <div className="relative z-20 shelf-wood-top p-2 sm:p-3 rounded-t-md shadow-2xl border-x-4 border-[#24140a]">
              {/* Carved header corbels */}
              <div className="flex items-center justify-between px-2 mb-2">
                <div className="flex items-center gap-1.5 text-[#fad97f]">
                  <span className="text-xs">❖</span>
                  <span className="font-['Cinzel',serif] text-xs font-bold uppercase tracking-widest hidden sm:inline">
                    The Library Catalog
                  </span>
                </div>
                <div className="text-[10px] font-['Pixelify_Sans',monospace] text-[#d6c7b2]/80 uppercase">
                  {filteredSkills.length} Tomes Available
                </div>
              </div>

              {/* Category Filter Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
                {skillCategories.map((category) => {
                  const isActive = activeCategory === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className={`px-2.5 sm:px-3.5 py-1 sm:py-1.5 font-['Pixelify_Sans',monospace] text-[11px] sm:text-xs uppercase tracking-wider rounded-sm transition-all duration-150 select-none cursor-pointer border ${
                        isActive
                          ? "bg-[#e5a828] text-[#24140a] border-[#533a08] shadow-[0_2px_0_0_#78540c] font-bold scale-105"
                          : "bg-[#27150a] text-[#ecdcb9] border-[#4e2d17] hover:bg-[#3d2213] hover:text-[#fad97f] hover:border-[#78540c]"
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bookshelf Main Frame & Shelves */}
            <div className="relative bookshelf-backdrop border-x-4 border-b-4 border-[#24140a] p-2 sm:p-4 shadow-2xl overflow-hidden">
              {/* Left & Right Vertical Wooden Uprights */}
              <div className="absolute left-0 top-0 bottom-0 w-3 sm:w-4 shelf-pillar z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-3 sm:w-4 shelf-pillar z-10 pointer-events-none" />

              {/* Creeping Ivy on Corners */}
              <div className="absolute top-1 left-2 text-emerald-600/70 text-xs pointer-events-none z-20">
                🌿
              </div>
              <div className="absolute top-1 right-2 text-emerald-600/70 text-xs pointer-events-none z-20">
                🌿
              </div>

              {/* Dynamic Shelves Mapping */}
              <div className="space-y-4 sm:space-y-6 relative z-0">
                {shelfRows.map((rowSkills, rowIndex) => (
                  <div key={`shelf-${rowIndex}`} className="flex flex-col">
                    {/* Books on the shelf row */}
                    <div className="shelf-scroll flex items-end justify-start sm:justify-center gap-1.5 sm:gap-2 px-3 pt-4 pb-0 min-h-[195px] sm:min-h-[220px] md:min-h-[240px] overflow-x-auto overflow-y-hidden">
                      {rowSkills.map((skill) => (
                        <SkillBook
                          key={skill.id}
                          skill={skill}
                          isSelected={selectedSkill?.id === skill.id}
                          onSelect={handleSelectBook}
                        />
                      ))}

                      {/* Leaning Bonus Grimoire on the bottom shelf ("And More...") */}
                      {rowIndex === shelfRows.length - 1 && activeCategory === "All" && (
                        <SkillBook
                          skill={{
                            id: "more-skills",
                            name: "And More...",
                            category: "Continuous Learning",
                            description:
                              "Exploring WebGL shaders, distributed system reliability, Godot C# bindings, and novel creative tech.",
                            icon: "quill",
                            spineColor: "gold",
                            spineHeight: "md",
                            spineWidth: "normal",
                            proficiencyTier: "Lifelong",
                            projects: ["Continuous R&D", "Open Source Quests"],
                          }}
                          isLeaning={true}
                          isSelected={selectedSkill?.id === "more-skills"}
                          onSelect={handleSelectBook}
                        />
                      )}
                    </div>

                    {/* Sturdy Wooden Shelf Plank */}
                    <div className="shelf-wood w-full h-4 sm:h-5 rounded-sm relative mt-0">
                      {/* Gilded metal corner rivets on shelf edges */}
                      <div className="absolute left-2 top-1 w-1.5 h-1.5 rounded-full bg-[#fad97f]/60" />
                      <div className="absolute right-2 top-1 w-1.5 h-1.5 rounded-full bg-[#fad97f]/60" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Bookshelf Bottom Baseboard */}
              <div className="mt-3 w-full h-3 bg-[#1e0f06] border-t border-[#462512] rounded-b-sm" />
            </div>

            {/* Instruction tooltip for visitors */}
            <div className="text-center mt-3 text-[11px] font-['Pixelify_Sans',monospace] text-[#fad97f]/80 flex items-center justify-center gap-1.5">
              <span>✦</span>
              <span>Click any grimoire spine on the shelves to inspect its runes & quest records</span>
              <span>✦</span>
            </div>
          </div>

          {/* ================= RIGHT WING: Parchment Detail Card & Scholar's Props ================= */}
          <div className="w-full lg:w-[340px] flex-shrink-0 flex flex-col items-center">
            {/* Desktop View: Detail Card rendered inline */}
            <div className="w-full flex justify-center">
              {selectedSkill ? (
                <SkillDetail
                  skill={selectedSkill}
                  onClose={handleCloseDetail}
                  onViewProjects={handleScrollToProjects}
                />
              ) : (
                /* Fallback prompt when no book is selected */
                <div className="w-full max-w-[340px] bg-[#22170f] border-2 border-[#4e2d17] p-5 text-center rounded-sm text-[#d6c7b2] shadow-xl">
                  <div className="w-10 h-10 mx-auto rounded-full bg-[#3d2314] border border-[#78540c] flex items-center justify-center text-[#fad97f] mb-3">
                    <PixelIcon name="scroll" className="w-6 h-6" />
                  </div>
                  <h4 className="font-['Cinzel',serif] text-base font-bold text-[#f4ebd0] mb-1">
                    Select a Tome
                  </h4>
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs text-[#94a3b8] leading-relaxed">
                    Choose any book on the shelves to read its technical summary, mastery level, and associated portfolio quests.
                  </p>
                </div>
              )}
            </div>

            {/* Right Desk Props: Banner & Philosophy Stack */}
            <div className="hidden xl:flex flex-col items-center mt-6 w-full">
              {/* Guild Banner */}
              <div className="bg-[#11284d] border-2 border-[#2b5ea9] text-[#e0f2fe] p-2.5 text-center shadow-lg rounded-sm w-[260px] relative">
                <div className="font-['Cinzel',serif] text-xs font-bold tracking-wider text-[#fad97f] uppercase">
                  Better Developers
                </div>
                <div className="font-['Cinzel',serif] text-[10px] tracking-widest text-[#bfdbfe] uppercase">
                  Brighter Worlds
                </div>
                {/* Banner tail */}
                <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[10px] border-t-[#11284d]" />
              </div>

              {/* Scholar's Stack of Books: BUILD / LEARN / GROW / REPEAT */}
              <div className="flex flex-col items-center mt-6">
                <div className="px-3 py-0.5 bg-[#78389b] border border-[#24140a] text-[9px] font-mono text-[#fad97f] font-bold rounded-t-sm">
                  BUILD
                </div>
                <div className="px-4 py-0.5 bg-[#0d697b] border border-[#24140a] text-[9px] font-mono text-white font-bold">
                  LEARN
                </div>
                <div className="px-5 py-0.5 bg-[#17542f] border border-[#24140a] text-[9px] font-mono text-white font-bold">
                  GROW
                </div>
                <div className="px-6 py-0.5 bg-[#7d1c21] border border-[#24140a] text-[9px] font-mono text-[#fad97f] font-bold">
                  REPEAT
                </div>
                {/* Vintage Globe & Quill */}
                <div className="flex items-center gap-3 mt-2 text-[#fad97f]">
                  <span className="text-xs" title="Vintage Library Globe">🌐</span>
                  <PixelIcon name="quill" className="w-5 h-5 text-[#fad97f]" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ================= MOBILE / TABLET MODAL OVERLAY ================= */}
      {isMobileModalOpen && selectedSkill && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs lg:hidden"
          onClick={handleCloseDetail}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <SkillDetail
              skill={selectedSkill}
              onClose={handleCloseDetail}
              onViewProjects={handleScrollToProjects}
            />
          </div>
        </div>
      )}

      {/* Navigation Signpost to Next Realm */}
      <div className="mt-12 flex justify-center">
        <SignpostObject label="To The Guild Hall Quests" direction="right" />
      </div>
    </section>
  );
}
