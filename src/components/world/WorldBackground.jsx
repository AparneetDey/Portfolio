/**
 * WorldBackground — Continuous atmospheric backdrop for the 2D medieval fantasy journey.
 * Features twilight sky, mountain silhouettes, pine treelines, and a continuous path.
 */
export function WorldBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none">
      {/* Twilight Sky with warm horizon glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e14] via-[#121a24] to-[#1c2738]" />

      {/* Subtle pixel stars / night specks in upper realm */}
      <div
        className="absolute inset-x-0 top-0 h-96 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 20px 30px, #fad97f, transparent), " +
            "radial-gradient(1.5px 1.5px at 80px 120px, #fdfbf7, transparent), " +
            "radial-gradient(1px 1px at 150px 60px, #fad97f, transparent), " +
            "radial-gradient(2px 2px at 280px 190px, #ffffff, transparent), " +
            "radial-gradient(1px 1px at 390px 80px, #fad97f, transparent), " +
            "radial-gradient(1.5px 1.5px at 510px 150px, #ffffff, transparent)",
          backgroundSize: "600px 300px",
        }}
      />

      {/* Distant Mountain Silhouette Layer */}
      <div className="absolute inset-x-0 bottom-32 opacity-25">
        <svg
          className="w-full h-64 text-[#192333]"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,160 L120,80 L220,130 L360,40 L480,120 L600,60 L740,140 L880,30 L1020,110 L1140,70 L1200,100 L1200,200 L0,200 Z" />
        </svg>
      </div>

      {/* Mid-ground Mountain Ridge */}
      <div className="absolute inset-x-0 bottom-16 opacity-35">
        <svg
          className="w-full h-48 text-[#141c28]"
          viewBox="0 0 1200 150"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,120 L150,50 L300,100 L450,30 L580,90 L720,40 L850,85 L1000,20 L1150,80 L1200,60 L1200,150 L0,150 Z" />
        </svg>
      </div>

      {/* Treeline Silhouette Layer */}
      <div className="absolute inset-x-0 bottom-0 opacity-40">
        <svg
          className="w-full h-24 text-[#0d141e]"
          viewBox="0 0 800 60"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <polygon points="0,60 20,20 40,60 50,30 70,60 90,15 110,60 130,25 150,60 180,10 210,60 230,30 250,60 280,15 310,60 340,25 370,60 400,10 430,60 460,25 490,60 520,15 550,60 580,30 610,60 640,10 670,60 700,25 730,60 760,15 790,60 800,60" />
        </svg>
      </div>

      {/* Continuous Cobblestone / Dirt Trail Accent running vertically down the world */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-24 sm:w-32 opacity-10 pointer-events-none hidden md:block">
        <div
          className="w-full h-full border-x-2 border-dashed border-[#ba9e68]"
          style={{
            backgroundImage:
              "radial-gradient(#8c522b 15%, transparent 16%), radial-gradient(#313845 15%, transparent 16%)",
            backgroundSize: "24px 24px",
            backgroundPosition: "0 0, 12px 12px",
          }}
        />
      </div>
    </div>
  );
}
