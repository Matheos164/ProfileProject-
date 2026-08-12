"use client";

import React from "react";

export default function FlashOverlay({ active, targetTheme }) {
  if (!active) return null;

  const isTargetSunset = targetTheme === "sunset";

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center overflow-hidden select-none">
      {/* LEFT SIDE WAVE BURST */}
      <div
        className={`absolute top-0 bottom-0 left-0 w-1/2 animate-wave-left ${
          isTargetSunset
            ? "bg-gradient-to-r from-amber-400 via-yellow-300 via-70% to-white"
            : "bg-gradient-to-r from-cyan-400 via-sky-300 via-70% to-white"
        }`}
      />

      {/* RIGHT SIDE WAVE BURST */}
      <div
        className={`absolute top-0 bottom-0 right-0 w-1/2 animate-wave-right ${
          isTargetSunset
            ? "bg-gradient-to-l from-rose-600 via-amber-500 via-70% to-white"
            : "bg-gradient-to-l from-purple-700 via-indigo-500 via-70% to-white"
        }`}
      />

      {/* CENTER BLENDING FUSION EXPLOSION */}
      <div className="absolute inset-0 bg-white animate-center-fusion opacity-90" />

      {/* CENTER SHOCKWAVE LIGHT RING */}
      <div
        className={`w-[220vw] h-[220vw] rounded-full border-[30px] animate-shockwave-ring ${
          isTargetSunset
            ? "border-amber-300 bg-gradient-to-r from-rose-500/40 via-amber-300/60 to-yellow-200/40"
            : "border-cyan-300 bg-gradient-to-r from-cyan-400/40 via-indigo-400/60 to-purple-500/40"
        }`}
      />
    </div>
  );
}
