import { experience } from "../../data/experience";
import { SectionTitle } from "../ui/SectionTitle";
import { PixelPanel } from "../ui/PixelPanel";
import { PixelBadge } from "../ui/PixelBadge";

/**
 * Area 5: EXPERIENCE — The Road
 * The cobblestone highway of career campaigns, commercial roles, and milestones.
 * Completely data-driven via `src/data/experience.js`.
 */
export function Experience() {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <SectionTitle
        stage="AREA V"
        title="The Road"
        subtitle="Expeditions, commercial campaigns, and engineering service along the royal highway."
      />

      {/* Road Timeline / Stepped Route */}
      <div className="relative border-l-4 border-[#4e2d17] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10 my-8">
        {experience.map((exp, idx) => (
          <div key={exp.id} className="relative group">
            {/* Milestone Stone Node / Road Marker */}
            <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 bg-[#222731] border-2 border-[#e5a828] shadow-[0_0_8px_rgba(229,168,40,0.5)] flex items-center justify-center text-[10px] font-['Pixelify_Sans',monospace] text-[#fad97f] font-bold select-none">
              {idx + 1}
            </div>

            <PixelPanel variant="stone">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <div>
                  <h3 className="font-['Cinzel',serif] text-xl font-bold text-[#f4ebd0]">
                    {exp.role}
                  </h3>
                  <div className="font-['Pixelify_Sans',monospace] text-sm text-[#fad97f]">
                    {exp.company}
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-block px-2.5 py-1 bg-[#101620] border border-[#222731] text-xs font-['Pixelify_Sans',monospace] text-[#cbd5e1]">
                    {exp.period}
                  </span>
                  <div className="text-[11px] font-['Plus_Jakarta_Sans',sans-serif] text-[#64748b] mt-0.5">
                    {exp.location}
                  </div>
                </div>
              </div>

              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-sm text-[#cbd5e1] leading-relaxed my-3">
                {exp.description}
              </p>

              {/* Campaign Highlights */}
              {exp.highlights && exp.highlights.length > 0 && (
                <ul className="space-y-1.5 my-3 pl-1 text-xs sm:text-sm text-[#94a3b8] font-['Plus_Jakarta_Sans',sans-serif]">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <span className="text-[#fad97f] mt-0.5 select-none">❖</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Technologies Deployed */}
              {exp.technologies && (
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#222731]">
                  {exp.technologies.map((tech) => (
                    <PixelBadge key={tech} variant="stone" size="xs">
                      {tech}
                    </PixelBadge>
                  ))}
                </div>
              )}
            </PixelPanel>
          </div>
        ))}
      </div>
    </section>
  );
}
