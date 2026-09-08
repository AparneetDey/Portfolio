import { PixelIcon } from "./PixelIcon";

/**
 * SkillDetail — A medieval parchment detail card showing the lore,
 * description, tech icon, and real project records for a selected skill book.
 */
export function SkillDetail({ skill, onClose, onViewProjects }) {
  if (!skill) return null;

  const handleScrollToProjects = () => {
    if (onViewProjects) {
      onViewProjects(skill);
      return;
    }
    const projectsEl = document.getElementById("projects");
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full max-w-[340px] bg-[#f4ebd0] text-[#24140a] p-5 rounded-sm border-2 border-[#4e2d17] shadow-[0_12px_32px_rgba(0,0,0,0.65),inset_0_0_20px_rgba(186,158,104,0.3)] select-none">
      {/* 4 Corner Rivets / Pixel Ornaments */}
      <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 bg-[#4e2d17]" />
      <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-[#4e2d17]" />
      <div className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 bg-[#4e2d17]" />
      <div className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 bg-[#4e2d17]" />

      {/* Close Button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close book details"
        className="absolute top-3 right-3 w-6 h-6 rounded bg-[#e8dac0] border border-[#4e2d17] hover:bg-[#4e2d17] text-[#4e2d17] hover:text-[#fad97f] flex items-center justify-center transition-all cursor-pointer"
      >
        <PixelIcon name="close" className="w-3.5 h-3.5" />
      </button>

      {/* Header: Emblem + Name + Category */}
      <div className="flex items-start gap-3 mb-4 pr-6">
        {/* Large Tech Medallion */}
        <div className="w-12 h-12 rounded bg-[#171b22] border-2 border-[#78540c] flex items-center justify-center text-[#fad97f] shadow-md p-2 flex-shrink-0">
          <PixelIcon name={skill.icon} className="w-7 h-7" />
        </div>

        <div>
          <h3 className="font-['Cinzel',serif] text-xl font-bold text-[#24140a] leading-tight">
            {skill.name}
          </h3>
          <div className="inline-block mt-1 px-2 py-0.5 bg-[#e2caa0] border border-[#78540c]/60 text-[#4e2d17] font-['Pixelify_Sans',monospace] text-[11px] font-semibold uppercase tracking-wider rounded-sm">
            {skill.category}
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs leading-relaxed text-[#3d2d1d] mb-4">
        {skill.description}
      </p>

      {/* "Used in:" Projects Section */}
      <div className="mb-5 pt-3 border-t border-[#ba9e68]/40">
        <h4 className="font-['Cinzel',serif] text-xs font-bold text-[#4e2d17] uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <span>❖</span>
          <span>Used in Quests:</span>
        </h4>
        <ul className="space-y-1 pl-1">
          {skill.projects && skill.projects.length > 0 ? (
            skill.projects.map((proj) => (
              <li
                key={proj}
                className="flex items-center gap-2 text-xs font-['Plus_Jakarta_Sans',sans-serif] text-[#422e1b]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#78540c]" />
                <span>{proj}</span>
              </li>
            ))
          ) : (
            <li className="text-xs italic text-[#78540c]">
              Personal research and ongoing web projects
            </li>
          )}
        </ul>

        {skill.proficiencyTier && (
          <div className="mt-3 flex items-center gap-2 text-[11px] font-['Pixelify_Sans',monospace] text-[#5c3e20]">
            <span className="font-bold uppercase">Mastery Tier:</span>
            <span className="px-1.5 py-0.5 bg-[#ecd9b5] border border-[#ba9e68] rounded text-[#24140a] font-bold">
              {skill.proficiencyTier}
            </span>
          </div>
        )}
      </div>

      {/* Action Button: "View Projects →" */}
      <button
        type="button"
        onClick={handleScrollToProjects}
        className="w-full py-2 px-3 bg-[#24140a] hover:bg-[#3d2314] text-[#fad97f] hover:text-[#fff4cc] border-2 border-[#78540c] font-['Pixelify_Sans',monospace] text-xs uppercase tracking-wider font-bold rounded-sm flex items-center justify-center gap-2 shadow-[0_3px_0_0_#171008] active:translate-y-[1px] transition-all cursor-pointer"
      >
        <span>View Projects</span>
        <span>→</span>
      </button>
    </div>
  );
}
