import { cn } from "../../utils/classNames";

/**
 * SectionTitle — Atmospheric medieval banner header marking each stage of the 2D world journey.
 *
 * @param {string} stage - E.g. "AREA II"
 * @param {string} title - E.g. "The Village"
 * @param {string} subtitle - E.g. "Where the journey begins and foundational skills are forged"
 * @param {'center' | 'left'} align - Text alignment
 */
export function SectionTitle({
  stage,
  title,
  subtitle,
  align = "center",
  className = "",
}) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "mb-10 sm:mb-12 relative z-10",
        isCenter ? "text-center mx-auto max-w-2xl" : "text-left",
        className
      )}
    >
      {stage && (
        <div
          className={cn(
            "inline-flex items-center gap-2 mb-2 px-3 py-1 bg-[#222731] border border-[#313845] text-[#fad97f] font-['Pixelify_Sans',monospace] text-xs tracking-widest uppercase shadow-sm",
            isCenter ? "justify-center" : ""
          )}
        >
          <span className="w-1.5 h-1.5 bg-[#e5a828] inline-block" />
          {stage}
          <span className="w-1.5 h-1.5 bg-[#e5a828] inline-block" />
        </div>
      )}

      <h2 className="font-['Cinzel',serif] text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#f4ebd0] drop-shadow-md">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-[#a0aec0] font-['Plus_Jakarta_Sans',sans-serif] text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
          {subtitle}
        </p>
      )}

      {/* Medieval decorative divider line */}
      <div
        className={cn(
          "flex items-center gap-3 mt-4",
          isCenter ? "justify-center" : "justify-start"
        )}
      >
        <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-[#ba9e68]" />
        <div className="w-2 h-2 rotate-45 bg-[#e5a828] border border-[#78540c]" />
        <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-[#ba9e68]" />
      </div>
    </div>
  );
}
