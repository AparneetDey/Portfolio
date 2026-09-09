import { cn } from "../../utils/classNames";

/**
 * PixelFrame — A2D pixel-art carved wooden portrait frame with gold corner brackets.
 * Designed to hold the developer portrait photo beside the name, title, and subtitle in Hero.
 */
export function PixelFrame({
  src,
  alt = "Profile Portrait",
  className = "",
  children,
}) {
  return (
    <div className={cn("relative inline-block select-none", className)}>
      {/* Outer Carved Timber Frame */}
      <div className="relative p-2.5 sm:p-3 bg-[#422212] border-4 border-[#1a0e07]">
        {/* Inner Gilded Bevel / Matting */}
        <div className="relative p-1 bg-[#1a202c] border-2 border-[#78540c]">
          {/* Portrait Image Container */}
          <div className="relative w-44 h-52 sm:w-52 sm:h-60 md:w-56 md:h-68 lg:w-64 lg:h-76 overflow-hidden bg-[#0d1117]">
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover object-top filter brightness-95 contrast-105"
              loading="eager"
            />
          </div>
        </div>

        {/* 4 Decorative 2D Pixel Corner Brackets (Brass/Gold) */}
        <div className="absolute -top-1.5 -left-1.5 w-4 h-4 bg-[#fad97f] border-2 border-[#24140a] flex items-center justify-center">
          <div className="w-1 h-1 bg-[#24140a]" />
        </div>
        <div className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#fad97f] border-2 border-[#24140a] flex items-center justify-center">
          <div className="w-1 h-1 bg-[#24140a]" />
        </div>
        <div className="absolute -bottom-1.5 -left-1.5 w-4 h-4 bg-[#fad97f] border-2 border-[#24140a] flex items-center justify-center">
          <div className="w-1 h-1 bg-[#24140a]" />
        </div>
        <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 bg-[#fad97f] border-2 border-[#24140a] flex items-center justify-center">
          <div className="w-1 h-1 bg-[#24140a]" />
        </div>
      </div>

      {children}
    </div>
  );
}
