import { profile } from "../../data/profile";
import { PixelButton } from "../ui/PixelButton";
import { PixelBadge } from "../ui/PixelBadge";
import { CampfireObject } from "../world/WorldObjects";

/**
 * Area 1: HOME / START — The Campfire Clearing
 * The starting point of the developer journey. Cozy, welcoming, establishing tone and identity.
 */
export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 py-16 sm:py-24"
    >
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Status Badge */}
        <div className="inline-block animate-gentle-bob">
          <PixelBadge variant="gold" size="md">
            🛡️ {profile.status}
          </PixelBadge>
        </div>

        {/* Hero Title & Identity */}
        <div className="space-y-3">
          <h1 className="font-['Cinzel',serif] text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#f4ebd0] tracking-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
            {profile.name}
          </h1>
          <p className="font-['Pixelify_Sans',monospace] text-base sm:text-xl text-[#fad97f] uppercase tracking-widest font-semibold">
            {profile.title}
          </p>
        </div>

        {/* Tagline */}
        <p className="font-['Plus_Jakarta_Sans',sans-serif] text-base sm:text-lg text-[#cbd5e1] max-w-2xl mx-auto leading-relaxed">
          {profile.tagline}
        </p>

        {/* Cozy Campfire Prop */}
        <CampfireObject />

        {/* Action Controls */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <PixelButton
            variant="gold"
            size="lg"
            href="#about"
          >
            Begin Journey ➔
          </PixelButton>
          <PixelButton
            variant="stone"
            size="lg"
            href="#projects"
          >
            Explore Guild Quests 📜
          </PixelButton>
        </div>

        {/* Adventure Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8 max-w-2xl mx-auto">
          {profile.stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#171b22]/90 border-2 border-[#313845] p-3 shadow-[0_3px_0_0_#0a0e14]"
            >
              <div className="font-['Pixelify_Sans',monospace] text-xl sm:text-2xl font-bold text-[#fad97f]">
                {stat.value}
              </div>
              <div className="font-['Plus_Jakarta_Sans',sans-serif] text-xs text-[#94a3b8] mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
