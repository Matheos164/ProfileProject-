"use client";

import React from "react";

export default function TeleportBeam({ active, theme }) {
  if (!active) return null;

  const isSunset = theme === "sunset";

  return (
    <div className="fixed inset-0 z-[110] pointer-events-none flex items-center justify-center overflow-hidden select-none">
      {/* SOFT AMBIENT SIDE ATMOSPHERIC BLEED */}
      <div
        className={`absolute inset-0 animate-teleport-flash ${
          isSunset
            ? "bg-gradient-to-r from-amber-500/10 via-rose-500/25 via-50% to-amber-500/10"
            : "bg-gradient-to-r from-sky-500/10 via-cyan-500/25 via-50% to-sky-500/10"
        }`}
      />

      {/* WIDE FEATHERED OUTER GLOW (Blends sides seamlessly into backdrop) */}
      <div
        className={`w-full max-w-5xl h-full animate-teleport-beam blur-3xl opacity-75 ${
          isSunset
            ? "bg-gradient-to-r from-transparent via-amber-400 via-50% to-transparent"
            : "bg-gradient-to-r from-transparent via-cyan-400 via-50% to-transparent"
        }`}
      />

      {/* MID GLOW BEAM (Soft blended gradient edges, no sharp borders) */}
      <div
        className={`w-full max-w-3xl h-full animate-teleport-beam blur-md ${
          isSunset
            ? "bg-gradient-to-r from-transparent via-rose-500/70 via-50% to-transparent shadow-[0_0_120px_40px_rgba(245,158,11,0.5)]"
            : "bg-gradient-to-r from-transparent via-sky-400/70 via-50% to-transparent shadow-[0_0_120px_40px_rgba(56,189,248,0.5)]"
        }`}
      />

      {/* BRIGHT INTENSE CENTER CORE (Seamlessly feathered on left & right) */}
      <div
        className={`w-[65vw] max-w-lg h-full animate-teleport-beam ${
          isSunset
            ? "bg-gradient-to-r from-transparent via-yellow-200 via-50% to-transparent opacity-95"
            : "bg-gradient-to-r from-transparent via-white via-50% to-transparent opacity-95"
        }`}
      />
    </div>
  );
}
