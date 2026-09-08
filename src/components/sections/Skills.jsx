import { useState } from "react";
import { skills, skillCategories } from "../../data/skills";
import { SectionTitle } from "../ui/SectionTitle";
import { PixelPanel } from "../ui/PixelPanel";
import { PixelBadge } from "../ui/PixelBadge";
import { PixelIcon } from "../ui/PixelIcon";
import { SignpostObject } from "../world/WorldObjects";

/**
 * Area 3: SKILLS — The Workshop / Library
 * Alchemical workbench displaying technical competencies and spells.
 * Completely data-driven via `src/data/skills.js`.
 */
export function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
      <SectionTitle
        stage="AREA III"
        title="The Workshop & Library"
        subtitle="Shelves of ancient programming scrolls, alchemical build formulas, and mastery runes."
      />

      {/* Category Selection Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {skillCategories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 font-['Pixelify_Sans',monospace] text-xs uppercase tracking-wider transition-all select-none border-2 active:translate-y-[1px] ${
                isActive
                  ? "bg-[#e5a828] text-[#24140a] border-[#533a08] shadow-[0_3px_0_0_#78540c] font-bold"
                  : "bg-[#171b22] text-[#cbd5e1] border-[#313845] hover:border-[#78540c] hover:text-[#fad97f]"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill) => (
          <PixelPanel
            key={skill.id}
            variant="stone"
            className="hover:translate-y-[-2px] hover:border-[#78540c] transition-all"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="p-2.5 bg-[#222731] border border-[#313845] text-[#fad97f]">
                <PixelIcon name={skill.icon} className="w-6 h-6" />
              </div>
              {skill.proficiencyTier && (
                <PixelBadge
                  variant={
                    skill.proficiencyTier === "Master"
                      ? "gold"
                      : skill.proficiencyTier === "Expert"
                      ? "green"
                      : "blue"
                  }
                  size="xs"
                >
                  {skill.proficiencyTier}
                </PixelBadge>
              )}
            </div>

            <h3 className="font-['Cinzel',serif] text-lg font-bold text-[#f4ebd0] mb-1.5">
              {skill.name}
            </h3>

            <div className="font-['Pixelify_Sans',monospace] text-[11px] text-[#937849] uppercase tracking-wider mb-2">
              {skill.category}
            </div>

            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
              {skill.description}
            </p>
          </PixelPanel>
        ))}
      </div>

      <SignpostObject label="To The Guild Hall Quests" direction="right" />
    </section>
  );
}
