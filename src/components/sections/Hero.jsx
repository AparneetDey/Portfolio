import { profile } from "../../data/profile";
import { PixelButton } from "../ui/PixelButton";
import { StatusBanner } from "../ui/StatusBanner";
import { PixelFrame } from "../ui/PixelFrame";

/**
 * Area 1: HOME / START — The Developer Hearth
 * Features the 2D pixel-art framed portrait side-by-side beside the name, title, subtitle, and action buttons.
 */
export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-between px-4 pt-0 pb-12 sm:pb-20">
      {/* Floating Medieval Status Signboard Suspended Directly From Top Navbar */}
      <div className="w-full flex justify-center -mt-[1px] mb-6 sm:mb-8 z-20">
        <StatusBanner
          status={profile.statusBanner?.status || "Open for Opportunities"}
          variant={profile.statusBanner?.variant || "available"}
          reachNavbar={true}
        />
      </div>

      {/* Main Side-by-Side Hero Container */}
      <div className="max-w-5xl mx-auto w-full my-auto flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-14 py-4 z-10">
        {/* Photo Frame Beside Name & Title */}
        <div className="flex justify-center shrink-0">
          <PixelFrame
            src={profile.avatar}
            alt={profile.name}
          />
        </div>

        {/* Name, Developer Title, Subtitle & Actions */}
        <div className="flex-1 text-center md:text-left space-y-4 max-w-xl">

          {/* Prominent Name */}
          <h1 className="font-['Cinzel',serif] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#f4ebd0] tracking-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
            {profile.name}
          </h1>

          {/* Developer Title */}
          <p className="font-['Pixelify_Sans',monospace] text-lg sm:text-2xl text-[#fad97f] uppercase tracking-wider font-bold drop-shadow-sm">
            {profile.title}
          </p>

          {/* Subtitle / Tagline */}
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-sm sm:text-base text-[#cbd5e1] leading-relaxed max-w-lg">
            {profile.tagline}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
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
