import { cn } from "../../utils/classNames";

/**
 * PixelBadge — Compact pixel tag for technology pills, quest types, and status badges.
 */
export function PixelBadge({
  children,
  variant = "stone",
  size = "sm",
  className = "",
  icon,
}) {
  const badgeVariants = {
    stone: "bg-[#222731] text-[#cbd5e1] border border-[#313845]",
    green: "bg-[#1d3322] text-[#96c7a2] border border-[#2a4931]",
    blue: "bg-[#1a2c3a] text-[#93c5fd] border border-[#263e52]",
    gold: "bg-[#382b0f] text-[#fad97f] border border-[#78540c]",
    wood: "bg-[#382010] text-[#fed7aa] border border-[#4e2d17]",
  };

  const badgeSizes = {
    xs: "px-2 py-0.5 text-[10px]",
    sm: "px-2.5 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-['Pixelify_Sans',monospace] uppercase tracking-wider font-medium select-none",
        badgeVariants[variant] || badgeVariants.stone,
        badgeSizes[size] || badgeSizes.sm,
        className
      )}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </span>
  );
}
