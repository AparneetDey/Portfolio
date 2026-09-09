import { useState } from "react";
import { profile } from "../../data/profile";
import { SectionTitle } from "../ui/SectionTitle";
import { ParchmentPanel } from "../ui/ParchmentPanel";
import { PixelPanel } from "../ui/PixelPanel";
import { PixelButton } from "../ui/PixelButton";
import { PixelIcon } from "../ui/PixelIcon";

/**
 * Area 7: CONTACT — The Harbor
 * The port edge where carrier ravens depart and ships set sail for new frontiers.
 * Completely data-driven via `src/data/profile.js`.
 */
export function Contact() {
  const [formState, setFormState] = useState({
    sender: "",
    ravenType: "Contract / Project",
    scrollMessage: "",
  });
  const [dispatched, setDispatched] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Front-end interactive demo response
    setDispatched(true);
  };

  return (
    <section className="py-20 px-4 max-w-5xl mx-auto">
      <SectionTitle
        stage="AREA VII"
        title="The Harbor"
        subtitle="Where the land meets the boundless ocean. Dispatch a message scroll or anchor a new collaboration."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Harbor Raven Dispatch Form (Parchment) */}
        <div className="lg:col-span-7">
          <ParchmentPanel
            title="Dispatch Carrier Raven"
            subtitle="Secure Message Scroll to the Engineer"
            waxSeal={true}
          >
            {dispatched ? (
              <div className="text-center py-8 space-y-3">
                <div className="text-3xl select-none">🦅✨</div>
                <h4 className="font-['Cinzel',serif] text-xl font-bold text-[#2d2215]">
                  Scroll Dispatched!
                </h4>
                <p className="text-sm text-[#493922] font-['Plus_Jakarta_Sans',sans-serif]">
                  Your message has been sealed and entrusted to the harbor winds. Aparneet shall respond shortly.
                </p>
                <PixelButton
                  variant="parchment"
                  size="sm"
                  onClick={() => setDispatched(false)}
                >
                  Write Another Scroll
                </PixelButton>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div>
                  <label
                    htmlFor="contact-sender"
                    className="block font-['Pixelify_Sans',monospace] text-xs uppercase tracking-wider text-[#493922] mb-1"
                  >
                    Your Name or Guild *
                  </label>
                  <input
                    id="contact-sender"
                    type="text"
                    required
                    placeholder="e.g. Captain Lyra of Northwind"
                    value={formState.sender}
                    onChange={(e) => setFormState({ ...formState, sender: e.target.value })}
                    className="w-full bg-[#fdfbf7] border-2 border-[#ba9e68] p-2.5 text-sm text-[#2d2215] focus:outline-none focus:border-[#78540c] font-['Plus_Jakarta_Sans',sans-serif]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-ravenType"
                    className="block font-['Pixelify_Sans',monospace] text-xs uppercase tracking-wider text-[#493922] mb-1"
                  >
                    Nature of Expedition *
                  </label>
                  <select
                    id="contact-ravenType"
                    value={formState.ravenType}
                    onChange={(e) => setFormState({ ...formState, ravenType: e.target.value })}
                    className="w-full bg-[#fdfbf7] border-2 border-[#ba9e68] p-2.5 text-sm text-[#2d2215] focus:outline-none focus:border-[#78540c] font-['Plus_Jakarta_Sans',sans-serif]"
                  >
                    <option>Contract / Freelance Quest</option>
                    <option>Full-Time Engineering Role</option>
                    <option>Technical Consultation</option>
                    <option>Fellow Developer Greeting</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-scrollMessage"
                    className="block font-['Pixelify_Sans',monospace] text-xs uppercase tracking-wider text-[#493922] mb-1"
                  >
                    Message Scroll *
                  </label>
                  <textarea
                    id="contact-scrollMessage"
                    rows={4}
                    required
                    placeholder="Describe your vision, timeline, or inquiries..."
                    value={formState.scrollMessage}
                    onChange={(e) => setFormState({ ...formState, scrollMessage: e.target.value })}
                    className="w-full bg-[#fdfbf7] border-2 border-[#ba9e68] p-2.5 text-sm text-[#2d2215] focus:outline-none focus:border-[#78540c] font-['Plus_Jakarta_Sans',sans-serif]"
                  />
                </div>

                <div className="pt-2">
                  <PixelButton variant="gold" size="md" fullWidth type="submit">
                    Seal & Dispatch Scroll 🦅
                  </PixelButton>
                </div>
              </form>
            )}
          </ParchmentPanel>
        </div>

        {/* Direct Harbor Mooring & Coordinates */}
        <div className="lg:col-span-5 space-y-4">
          <div className="font-['Pixelify_Sans',monospace] text-xs uppercase tracking-widest text-[#fad97f] px-1">
            Harbor Moorings & Direct Post
          </div>

          <PixelPanel variant="stone">
            <h4 className="font-['Cinzel',serif] text-base font-bold text-[#f4ebd0] mb-2 flex items-center gap-2">
              <PixelIcon name="mail" className="w-5 h-5 text-[#fad97f]" />
              Direct Mail & Signal Post
            </h4>
            <p className="text-xs text-[#94a3b8] font-['Plus_Jakarta_Sans',sans-serif] mb-3">
              For urgent quest dispatches, contract inquiries, or engineering roles:
            </p>
            <div className="space-y-1.5">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 text-sm font-['Pixelify_Sans',monospace] text-[#fad97f] hover:underline"
              >
                <span>✉</span>
                <span>{profile.email}</span>
              </a>
              {profile.phone && (
                <a
                  href={`tel:${profile.phone}`}
                  className="flex items-center gap-2 text-xs font-['Cinzel',serif] text-[#94a3b8] hover:text-[#fad97f] hover:underline"
                >
                  <span>📞</span>
                  <span>{profile.phone}</span>
                </a>
              )}
            </div>
          </PixelPanel>

          <PixelPanel variant="stone">
            <h4 className="font-['Cinzel',serif] text-base font-bold text-[#f4ebd0] mb-2 flex items-center gap-2">
              <PixelIcon name="compass" className="w-5 h-5 text-[#93c5fd]" />
              Anchor Coordinates
            </h4>
            <p className="text-xs text-[#94a3b8] font-['Plus_Jakarta_Sans',sans-serif] leading-relaxed mb-3">
              Open to worldwide remote positions and select asynchronous collaborations across the digital realm.
            </p>
            <div className="text-xs font-['Pixelify_Sans',monospace] text-[#93c5fd]">
              📍 {profile.location}
            </div>
          </PixelPanel>

          <PixelPanel variant="stone">
            <h4 className="font-['Cinzel',serif] text-base font-bold text-[#f4ebd0] mb-2 flex items-center gap-2">
              <PixelIcon name="github" className="w-5 h-5 text-[#cbd5e1]" />
              External Guild Archives
            </h4>
            <div className="flex flex-wrap gap-2 pt-1">
              <PixelButton
                variant="stone"
                size="sm"
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Tavern
              </PixelButton>
              <PixelButton
                variant="stone"
                size="sm"
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Outpost
              </PixelButton>
              {profile.leetcode && (
                <PixelButton
                  variant="stone"
                  size="sm"
                  href={profile.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LeetCode Trials
                </PixelButton>
              )}
            </div>
          </PixelPanel>
        </div>
      </div>
    </section>
  );
}
