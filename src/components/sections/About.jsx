import { profile } from "../../data/profile";
import { SectionTitle } from "../ui/SectionTitle";
import { ParchmentPanel } from "../ui/ParchmentPanel";
import { PixelPanel } from "../ui/PixelPanel";
import { PixelIcon } from "../ui/PixelIcon";
import { SignpostObject } from "../world/WorldObjects";

/**
 * Area 2: ABOUT — The Village
 * Where the adventurer's background, philosophy, and developer lore are revealed.
 */
export function About() {
  return (
    <section id="about" className="py-20 px-4 max-w-5xl mx-auto">
      <SectionTitle
        stage="AREA II"
        title="The Village"
        subtitle="Where foundational principles take root and local town records chronicle the engineer's lore."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Town Notice Parchment (Bio & Philosophy) */}
        <div className="lg:col-span-7">
          <ParchmentPanel
            title="Town Hall Chronicle"
            subtitle="Registered Resident & Realm Artisan"
            waxSeal={true}
          >
            <div className="space-y-4 text-parchment-900">
              <p className="text-base sm:text-lg font-medium leading-relaxed">
                {profile.description}
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-parchment-800-800">
                Every project is approached not merely as syntax and endpoints, but as a deliberate digital settlement built to weather changing demands, high traffic, and time. Clean architecture, high readability, and human empathy remain the guiding stars of my daily craft.
              </p>

              <div className="pt-4 border-t border-[#ba9e68]/50 flex flex-wrap items-center justify-between gap-2 text-xs text-[#5c4728] font-['Pixelify_Sans',monospace]">
                <span>📍 Base: {profile.location}</span>
                {profile.education && (
                  <span>🎓 {profile.education.institution} ({profile.education.period})</span>
                )}
                <span>✉️ {profile.email}</span>
              </div>
            </div>
          </ParchmentPanel>
        </div>

        {/* Character Core Traits & Specializations */}
        <div className="lg:col-span-5 space-y-4">
          <div className="font-pixel text-xs uppercase tracking-widest text-gold-300 px-1">
            Adventurer Traits & Disciplines
          </div>

          {profile.traits.map((trait) => (
            <PixelPanel
              key={trait.title}
              variant="stone"
              className="hover:border-gold-800 transition-colors"
            >
              <div className="flex items-start gap-3.5">
                <div className="p-2 bg-stone-slate-800 border border-stone-slate-700 text-gold-300 shrink-0">
                  <PixelIcon name={trait.icon} className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-['Cinzel',serif] text-base font-bold text-parchment-200">
                    {trait.title}
                  </h4>
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-[#94a3b8] mt-1 leading-relaxed">
                    {trait.description}
                  </p>
                </div>
              </div>
            </PixelPanel>
          ))}
        </div>
      </div>

      <SignpostObject label="To The Workshop & Library" direction="right" />
    </section>
  );
}
