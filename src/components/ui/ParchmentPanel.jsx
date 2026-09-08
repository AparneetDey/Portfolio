import { cn } from "../../utils/classNames";

/**
 * ParchmentPanel — An aged parchment manuscript card designed for maximum readability
 * of extensive text, resumes, developer journey notes, and town notices.
 */
export function ParchmentPanel({
  children,
  title,
  subtitle,
  className = "",
  innerClassName = "",
  waxSeal = false,
  ...props
}) {
  return (
    <div
      className={cn(
        "relative bg-[#f4ebd0] text-[#2d2215] border-4 border-[#ba9e68] shadow-[0_8px_0_0_#0a0e14,0_0_20px_rgba(0,0,0,0.25)]",
        className
      )}
      {...props}
    >
      {/* Corner parchment stitch accents */}
      <div className="absolute top-1 left-1 w-2 h-2 bg-[#937849]" />
      <div className="absolute top-1 right-1 w-2 h-2 bg-[#937849]" />
      <div className="absolute bottom-1 left-1 w-2 h-2 bg-[#937849]" />
      <div className="absolute bottom-1 right-1 w-2 h-2 bg-[#937849]" />

      {/* Decorative Wax Seal (optional) */}
      {waxSeal && (
        <div className="absolute -top-4 -right-3 w-9 h-9 rounded-full bg-[#8c2424] border-2 border-[#571313] shadow-md flex items-center justify-center text-[#ffcccc] font-['Cinzel',serif] text-xs font-bold select-none">
          ⚔
        </div>
      )}

      {/* Header section if title provided */}
      {(title || subtitle) && (
        <div className="border-b-2 border-[#ba9e68]/60 px-6 pt-5 pb-4 mb-4">
          {title && (
            <h3 className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold tracking-wide text-[#2d2215]">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="font-['Pixelify_Sans',monospace] text-xs uppercase tracking-wider text-[#937849] mt-1">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Main content body */}
      <div className={cn("p-6 sm:p-7 leading-relaxed font-['Plus_Jakarta_Sans',sans-serif]", innerClassName)}>
        {children}
      </div>
    </div>
  );
}
