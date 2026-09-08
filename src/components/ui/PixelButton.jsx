import { cn } from "../../utils/classNames";

/**
 * PixelButton — A medieval retro beveled button with authentic physical tactile click.
 *
 * @param {'gold' | 'wood' | 'stone' | 'parchment'} variant - Visual theme
 * @param {'sm' | 'md' | 'lg'} size - Button size
 * @param {boolean} fullWidth - Whether button expands 100% width
 * @param {string} href - If provided, renders as an anchor tag
 */
export function PixelButton({
  children,
  variant = "gold",
  size = "md",
  fullWidth = false,
  href,
  className = "",
  onClick,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-['Pixelify_Sans',monospace] tracking-wider uppercase font-semibold transition-all select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 active:translate-y-[2px]";

  const variantStyles = {
    gold: "bg-[#e5a828] text-[#24140a] hover:bg-[#f3c24e] shadow-[0_4px_0_0_#78540c,0_-2px_0_0_#fad97f_inset,0_2px_0_0_#fad97f_inset] border-2 border-[#533a08]",
    wood: "bg-[#4e2d17] text-[#f4ebd0] hover:bg-[#6a3e20] shadow-[0_4px_0_0_#24140a,0_-2px_0_0_#8c522b_inset,0_2px_0_0_#8c522b_inset] border-2 border-[#24140a]",
    stone: "bg-[#313845] text-[#e2e8f0] hover:bg-[#444e60] shadow-[0_4px_0_0_#171b22,0_-2px_0_0_#5c6981_inset,0_2px_0_0_#5c6981_inset] border-2 border-[#171b22]",
    parchment: "bg-[#f4ebd0] text-[#2d2215] hover:bg-[#fdfbf7] shadow-[0_4px_0_0_#937849,0_-2px_0_0_#ba9e68_inset,0_2px_0_0_#ffffff_inset] border-2 border-[#937849]",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3 text-base gap-2.5",
  };

  const classes = cn(
    baseStyles,
    variantStyles[variant] || variantStyles.gold,
    sizeStyles[size] || sizeStyles.md,
    fullWidth ? "w-full" : "",
    className
  );

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
}
