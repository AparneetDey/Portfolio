import { projects } from "../../data/projects";
import { SectionTitle } from "../ui/SectionTitle";
import { PixelPanel } from "../ui/PixelPanel";
import { PixelBadge } from "../ui/PixelBadge";
import { PixelButton } from "../ui/PixelButton";
import { GuildBannerObject } from "../world/WorldObjects";
import { PixelIcon } from "../ui/PixelIcon";

/**
 * Area 4: PROJECTS — The Guild Hall
 * The grand quest board where completed bounties, applications, and artifacts are posted.
 * Completely data-driven via `src/data/projects.js`.
 */
export function Projects() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <GuildBannerObject title="Guild Quests" />

      <SectionTitle
        stage="AREA IV"
        title="The Guild Hall"
        subtitle="Publicly dispatched commissions, software artifacts, and expeditions completed with distinction."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <PixelPanel
            key={project.id}
            variant={project.featured ? "gold" : "stone"}
            className="flex flex-col justify-between h-full group hover:translate-y-[-3px] transition-all"
          >
            <div>
              {/* Header Badges */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-['Pixelify_Sans',monospace] text-[11px] text-[#fad97f] uppercase tracking-wider">
                  {project.guildCategory || "Guild Quest"}
                </span>
                {project.featured && (
                  <PixelBadge variant="gold" size="xs">
                    ★ Featured
                  </PixelBadge>
                )}
              </div>

              {/* Quest Title */}
              <h3 className="font-['Cinzel',serif] text-xl font-bold text-[#f4ebd0] mb-2 group-hover:text-[#fad97f] transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-[#94a3b8] leading-relaxed mb-4">
                {project.description}
              </p>
            </div>

            <div className="mt-4 pt-4 border-t border-[#313845] space-y-4">
              {/* Technologies List */}
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <PixelBadge key={tech} variant="stone" size="xs">
                    {tech}
                  </PixelBadge>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-1">
                {project.live && (
                  <PixelButton
                    variant="gold"
                    size="sm"
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PixelIcon name="external-link" className="w-3.5 h-3.5" />
                    <span>View Quest</span>
                  </PixelButton>
                )}
                {project.github && (
                  <PixelButton
                    variant="stone"
                    size="sm"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PixelIcon name="github" className="w-3.5 h-3.5" />
                    <span>Scroll</span>
                  </PixelButton>
                )}
              </div>
            </div>
          </PixelPanel>
        ))}
      </div>
    </section>
  );
}
