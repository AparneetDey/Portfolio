import { PixelIcon } from "./PixelIcon";

/**
 * Palette map for leather and cloth medieval book bindings.
 */
const COLOR_VARIANTS = {
  cyan: {
    spine: "from-[#094754] via-[#0d697b] to-[#094754]",
    accent: "text-[#a5f3fc]",
    border: "border-[#052b33]",
    highlight: "bg-[#38bdf8]",
    iconColor: "text-[#a5f3fc]",
    ribColor: "border-[#38bdf8]/30 bg-[#042127]/60",
  },
  amber: {
    spine: "from-[#573a07] via-[#85590c] to-[#573a07]",
    accent: "text-[#fef08a]",
    border: "border-[#362203]",
    highlight: "bg-[#fad97f]",
    iconColor: "text-[#fad97f]",
    ribColor: "border-[#fad97f]/30 bg-[#281903]/60",
  },
  blue: {
    spine: "from-[#11284d] via-[#1e4179] to-[#11284d]",
    accent: "text-[#bfdbfe]",
    border: "border-[#0c1c36]",
    highlight: "bg-[#60a5fa]",
    iconColor: "text-[#bfdbfe]",
    ribColor: "border-[#60a5fa]/30 bg-[#081325]/60",
  },
  crimson: {
    spine: "from-[#531114] via-[#7d1c21] to-[#531114]",
    accent: "text-[#fecaca]",
    border: "border-[#33080a]",
    highlight: "bg-[#f87171]",
    iconColor: "text-[#fecaca]",
    ribColor: "border-[#f87171]/30 bg-[#240608]/60",
  },
  green: {
    spine: "from-[#0d381e] via-[#17542f] to-[#0d381e]",
    accent: "text-[#bbf7d0]",
    border: "border-[#072412]",
    highlight: "bg-[#4ade80]",
    iconColor: "text-[#bbf7d0]",
    ribColor: "border-[#4ade80]/30 bg-[#05180c]/60",
  },
  purple: {
    spine: "from-[#371847] via-[#56276e] to-[#371847]",
    accent: "text-[#e9d5ff]",
    border: "border-[#220d2c]",
    highlight: "bg-[#c084fc]",
    iconColor: "text-[#e9d5ff]",
    ribColor: "border-[#c084fc]/30 bg-[#16081d]/60",
  },
  dark: {
    spine: "from-[#181d24] via-[#262f3c] to-[#181d24]",
    accent: "text-[#e2e8f0]",
    border: "border-[#0f1217]",
    highlight: "bg-[#94a3b8]",
    iconColor: "text-[#e2e8f0]",
    ribColor: "border-[#94a3b8]/30 bg-[#0a0d10]/60",
  },
  leather: {
    spine: "from-[#3d2314] via-[#5a341e] to-[#3d2314]",
    accent: "text-[#fed7aa]",
    border: "border-[#26140a]",
    highlight: "bg-[#fb923c]",
    iconColor: "text-[#fed7aa]",
    ribColor: "border-[#fb923c]/30 bg-[#1b0d06]/60",
  },
  gold: {
    spine: "from-[#5e460f] via-[#8c6a1b] to-[#5e460f]",
    accent: "text-[#fef3c7]",
    border: "border-[#3d2c08]",
    highlight: "bg-[#fde047]",
    iconColor: "text-[#fde047]",
    ribColor: "border-[#fde047]/30 bg-[#2b1f05]/60",
  },
};

const HEIGHT_VARIANTS = {
  sm: "h-[185px] sm:h-[198px] md:h-[212px]",
  md: "h-[195px] sm:h-[210px] md:h-[224px]",
  lg: "h-[205px] sm:h-[220px] md:h-[236px]",
  xl: "h-[215px] sm:h-[230px] md:h-[246px]",
};

const WIDTH_VARIANTS = {
  narrow: "w-[34px] sm:w-[38px] md:w-[42px]",
  normal: "w-[38px] sm:w-[44px] md:w-[48px]",
  wide: "w-[44px] sm:w-[50px] md:w-[56px]",
};

/**
 * SkillBook — An individual interactive leather-bound book on the shelf.
 */
export function SkillBook({
  skill,
  isSelected = false,
  onSelect,
  isLeaning = false,
  className = "",
}) {
  // Automatically choose palette if not specified
  const colorKey = skill.spineColor || "leather";
  const palette = COLOR_VARIANTS[colorKey] || COLOR_VARIANTS.leather;
  const heightClass = HEIGHT_VARIANTS[skill.spineHeight] || HEIGHT_VARIANTS.md;
  const widthClass = WIDTH_VARIANTS[skill.spineWidth] || WIDTH_VARIANTS.normal;

  return (
    <button
      type="button"
      onClick={() => onSelect && onSelect(skill)}
      title={`${skill.name} — Click to inspect book`}
      className={`relative group flex-shrink-0 flex flex-col justify-between items-center transition-all duration-200 outline-none select-none cursor-pointer ${heightClass} ${widthClass} ${
        isLeaning
          ? "rotate-[12deg] translate-x-1.5 origin-bottom-left"
          : "hover:-translate-y-3"
      } ${
        isSelected
          ? "-translate-y-3 shadow-[0_0_18px_rgba(250,217,127,0.55)] ring-2 ring-[#fad97f]"
          : "hover:shadow-[0_8px_18px_rgba(0,0,0,0.6),0_0_10px_rgba(250,217,127,0.35)]"
      } ${className}`}
      style={{
        transformOrigin: "bottom center",
      }}
    >
      {/* 3D Top Edge (Gilded Pages Top) */}
      <div className="w-full h-[5px] bg-gradient-to-r from-[#e5d4a6] via-[#fbf7ee] to-[#d8c28b] border-t border-x border-[#24140a] rounded-t-sm shadow-inner opacity-90" />

      {/* Main Book Spine */}
      <div
        className={`w-full h-full flex flex-col justify-between items-center relative rounded-sm border-x-2 border-b-2 ${palette.border} bg-gradient-to-r ${palette.spine} shadow-[inset_2px_0_4px_rgba(255,255,255,0.15),inset_-3px_0_6px_rgba(0,0,0,0.5)] overflow-hidden`}
      >
        {/* Subtle leather texture overlay */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />

        {/* Left spine shadow crease for cylindrical 3D depth */}
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-white/20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-[4px] bg-black/40 pointer-events-none" />

        {/* TOP SECTION: Upper embossed band & decorative gold filigree */}
        <div className="w-full pt-1.5 flex flex-col items-center z-10">
          <div className={`w-full py-0.5 border-y ${palette.ribColor} flex justify-center items-center`}>
            <span className="text-[7px] text-[#fad97f] font-mono tracking-widest leading-none">
              ❖
            </span>
          </div>
          <div className="mt-1 text-[8px] text-[#fad97f]/70 leading-none">
            ✦
          </div>
        </div>

        {/* MIDDLE SECTION: Vertically oriented skill name along spine */}
        <div className="flex-1 w-full flex items-center justify-center py-2 px-0.5 overflow-hidden z-10">
          <span
            className={`font-['Cinzel',serif] font-bold text-[11px] sm:text-xs tracking-wide select-none transition-colors drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] whitespace-nowrap ${palette.accent} group-hover:text-white group-hover:drop-shadow-[0_0_6px_rgba(250,217,127,0.8)]`}
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
            }}
          >
            {skill.name}
          </span>
        </div>

        {/* BOTTOM SECTION: Lower embossed band & technology emblem */}
        <div className="w-full pb-1.5 flex flex-col items-center z-10">
          {/* Lower ridge band */}
          <div className={`w-full py-0.5 border-y ${palette.ribColor} flex justify-center items-center mb-1`}>
            <div className="w-2 h-[1px] bg-[#fad97f]/60" />
          </div>

          {/* Tech icon emblem medallion */}
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#12161c]/80 border border-[#fad97f]/50 flex items-center justify-center shadow-md p-1 group-hover:border-[#fad97f] transition-all">
            <PixelIcon
              name={skill.icon}
              className={`w-4 h-4 sm:w-4.5 sm:h-4.5 ${palette.iconColor} transition-transform group-hover:scale-110`}
            />
          </div>

          {/* Bottom footer gold bar */}
          <div className="w-3/4 h-[1.5px] bg-[#fad97f]/40 mt-1 rounded-full" />
        </div>

        {/* Hover / Active selection glow indicator */}
        <div
          className={`absolute inset-0 pointer-events-none transition-opacity duration-200 ${
            isSelected
              ? "opacity-100 bg-amber-400/10 border-2 border-[#fad97f]"
              : "opacity-0 group-hover:opacity-100 bg-white/5"
          }`}
        />
      </div>
    </button>
  );
}
