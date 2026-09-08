import { cn } from "../../utils/classNames";

/**
 * PixelPanel — Retro fantasy UI panel container with stepped pixel corners and 3D borders.
 * Suitable for quest cards, skills grids, and HUD dialogs.
 */
export function PixelPanel({
  children,
  header,
  variant = "stone",
  className = "",
  innerClassName = "",
  ...props
}) {
  const panelVariants = {
    stone: "bg-[#192231]/95 border-2 border-[#171b22] shadow-[0_6px_0_0_#0a0e14,inset_0_2px_0_0_#313845,inset_0_-2px_0_0_#101620]",
    wood: "bg-[#24140a]/95 border-2 border-[#1a0e07] shadow-[0_6px_0_0_#0a0e14,inset_0_2px_0_0_#4e2d17,inset_0_-2px_0_0_#150a04]",
    gold: "bg-[#1a1710]/95 border-2 border-[#78540c] shadow-[0_6px_0_0_#0a0e14,inset_0_2px_0_0_#e2a828,inset_0_-2px_0_0_#533a08]",
  };

  const headerVariants = {
    stone: "bg-[#222731] border-b-2 border-[#171b22] text-[#e2e8f0]",
    wood: "bg-[#382010] border-b-2 border-[#24140a] text-[#fad97f]",
    gold: "bg-[#78540c] border-b-2 border-[#533a08] text-[#fdedbb]",
  };

  return (
    <div
      className={cn(
        "relative transition-all duration-200",
        panelVariants[variant] || panelVariants.stone,
        className
      )}
      {...props}
    >
      {header && (
        <div
          className={cn(
            "px-4 py-2 font-['Pixelify_Sans',monospace] text-sm uppercase tracking-wider font-semibold flex items-center justify-between",
            headerVariants[variant] || headerVariants.stone
          )}
        >
          {header}
        </div>
      )}
      <div className={cn("p-5 sm:p-6", innerClassName)}>{children}</div>
    </div>
  );
}
