import { PixelIcon } from "../ui/PixelIcon";

/**
 * WorldObjects — Visual environmental props situated throughout the continuous world.
 * Brings thematic life to each realm along the developer path.
 */

export function CampfireObject() {
  return (
    <div className="flex flex-col items-center justify-center my-6 select-none">
      {/* Campfire flame & smoke */}
      <div className="relative flex items-center justify-center">
        <div className="w-12 h-12 text-[#f3c24e] animate-lantern flex items-center justify-center">
          <PixelIcon name="flame" className="w-10 h-10 drop-shadow-[0_0_12px_rgba(243,194,78,0.6)]" />
        </div>
      </div>
      {/* Firewood logs */}
      <div className="flex items-center -mt-2 space-x-1">
        <div className="w-6 h-2 bg-[#4e2d17] border border-[#24140a] rotate-12" />
        <div className="w-7 h-2.5 bg-[#6a3e20] border border-[#24140a] -rotate-6" />
        <div className="w-6 h-2 bg-[#4e2d17] border border-[#24140a] -rotate-12" />
      </div>
      {/* Stone ring */}
      <div className="flex gap-1 mt-0.5">
        <div className="w-2 h-1.5 bg-[#313845] border border-[#171b22]" />
        <div className="w-2.5 h-1.5 bg-[#444e60] border border-[#171b22]" />
        <div className="w-2.5 h-1.5 bg-[#313845] border border-[#171b22]" />
        <div className="w-2 h-1.5 bg-[#444e60] border border-[#171b22]" />
      </div>
    </div>
  );
}

export function SignpostObject({ label = "Next Realm", direction = "right" }) {
  return (
    <div className="flex flex-col items-center my-4 select-none">
      <div className="px-3 py-1 bg-[#6a3e20] border-2 border-[#24140a] shadow-[0_3px_0_0_#150a04] text-[#f4ebd0] font-['Pixelify_Sans',monospace] text-xs font-semibold tracking-wider flex items-center gap-1.5">
        {direction === "left" && <span>◀</span>}
        <span>{label}</span>
        {direction === "right" && <span>▶</span>}
      </div>
      <div className="w-2 h-8 bg-[#4e2d17] border-x border-[#24140a]" />
      <div className="w-6 h-2 bg-[#313845] border border-[#171b22]" />
    </div>
  );
}

export function LanternPost() {
  return (
    <div className="flex flex-col items-center select-none">
      <div className="w-4 h-5 bg-[#e5a828] border-2 border-[#533a08] shadow-[0_0_10px_#e5a828] animate-lantern flex items-center justify-center">
        <div className="w-1.5 h-2 bg-[#fdfbf7]" />
      </div>
      <div className="w-1.5 h-10 bg-[#313845] border-x border-[#171b22]" />
      <div className="w-4 h-1.5 bg-[#222731]" />
    </div>
  );
}

export function GuildBannerObject({ title = "Guild Hall" }) {
  return (
    <div className="flex flex-col items-center my-6 select-none">
      <div className="w-24 h-1 bg-[#8c522b] border border-[#24140a]" />
      <div className="w-16 h-12 bg-[#78540c] border-x-2 border-b-2 border-[#533a08] shadow-md flex flex-col items-center justify-center text-[#fad97f] px-2 text-center">
        <PixelIcon name="shield" className="w-5 h-5 text-[#fad97f]" />
        <span className="font-['Pixelify_Sans',monospace] text-[9px] uppercase tracking-wider font-bold mt-0.5">
          {title}
        </span>
      </div>
      <div className="w-0 h-0 border-l-[32px] border-l-transparent border-r-[32px] border-r-transparent border-t-[8px] border-t-[#78540c]" />
    </div>
  );
}
