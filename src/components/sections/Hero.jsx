import { profile } from "../../data/profile";
import { PixelButton } from "../ui/PixelButton";
import { StatusBanner } from "../ui/StatusBanner";

/**
 * Area 1: HOME / START — The Meadow Clearing
 * Features human-size 2D character art standing naturally in the meadow environment
 * side-by-side with the name, title, tagline, and action controls.
 */
export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-between px-4 pt-0 pb-10 sm:pb-16 overflow-hidden">
      {/* Floating Medieval Status Signboard Suspended Directly From Top Navbar */}
      <div className="w-full flex justify-center -mt-[1px] mb-4 sm:mb-6 z-20">
        <StatusBanner
          status={profile.statusBanner?.status || "Open for Opportunities"}
          variant={profile.statusBanner?.variant || "available"}
          reachNavbar={true}
        />
      </div>

      {/* Human-Size 2D Character Standing in the Meadow Background */}
      <div
        className="absolute left-[3%] sm:left-[6%] md:left-[9%] lg:left-[12%] xl:left-[14%] bottom-[15%] sm:bottom-[16%] md:bottom-[18%] z-0 pointer-events-none select-none flex flex-col items-center"
        aria-hidden="true"
      >
        {/* Soft Ambient Contact Shadow on Grass */}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-32 sm:w-40 md:w-48 lg:w-56 h-3.5 bg-[#0a180e]/60 rounded-full blur-[2px]" />

        {/* Full-Body Pixel Character Sprite */}
        <img
          src={profile.character || "/characters/aparneet-hero.png"}
          alt={profile.name}
          className="relative z-10 w-28 sm:w-36 md:w-44 lg:w-52 xl:w-56 h-auto max-h-[300px] sm:max-h-[360px] md:max-h-[420px] lg:max-h-[480px] object-contain pixel-art filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.45)]"
          loading="eager"
        />
      </div>

      {/* Main Centered Hero Container */}
      <div className="max-w-3xl mx-auto w-full my-auto text-center space-y-5 sm:space-y-6 pt-2 pb-4 z-10">
        {/* Prominent Name */}
        <h1 className="font-['Cinzel',serif] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#f4ebd0] tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
          {profile.name}
        </h1>

        {/* Developer Title */}
        <p className="font-['Pixelify_Sans',monospace] text-lg sm:text-2xl text-[#fad97f] uppercase tracking-wider font-bold drop-shadow-md">
          {profile.title}
        </p>

        {/* Subtitle / Tagline */}
        <p className="font-['Plus_Jakarta_Sans',sans-serif] text-sm sm:text-base text-[#e2e8f0] leading-relaxed max-w-xl mx-auto drop-shadow-md">
          {profile.tagline}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <PixelButton
            variant="gold"
            size="md"
            href="#about"
          >
            Begin Journey ➔
          </PixelButton>
          <PixelButton
            variant="stone"
            size="md"
            href="#projects"
          >
            Explore Guild Quests 📜
          </PixelButton>
        </div>
      </div>

      {/* Adventure Stats Bar */}
      <div className="w-full max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 pb-2 z-10">
        {profile.stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-[#171b22]/90 border-2 border-[#313845] p-3 shadow-[0_3px_0_0_#0a0e14] text-center"
          >
            <div className="font-['Pixelify_Sans',monospace] text-lg sm:text-xl font-bold text-[#fad97f]">
              {stat.value}
            </div>
            <div className="font-['Plus_Jakarta_Sans',sans-serif] text-xs text-[#94a3b8] mt-0.5">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
