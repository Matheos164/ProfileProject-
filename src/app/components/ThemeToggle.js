"use client";

import React from "react";

export default function ThemeToggle({ theme, onToggle }) {
  const isSunset = theme === "sunset";

  return (
    <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50">
      <button
        onClick={onToggle}
        aria-label="Toggle Background Theme"
        className={`group relative flex items-center gap-3 px-4 py-2.5 rounded-full backdrop-blur-md border transition-all duration-500 shadow-lg cursor-pointer ${
          isSunset
            ? "bg-amber-950/70 border-amber-500/40 text-amber-200 shadow-amber-900/30 hover:bg-amber-900/80 hover:border-amber-400"
            : "bg-slate-900/70 border-cyan-500/40 text-cyan-200 shadow-cyan-900/30 hover:bg-slate-800/80 hover:border-cyan-400"
        }`}
      >
        <span className="relative flex h-3 w-3">
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
              isSunset ? "bg-amber-400" : "bg-cyan-400"
            }`}
          ></span>
          <span
            className={`relative inline-flex rounded-full h-3 w-3 ${
              isSunset ? "bg-amber-500" : "bg-cyan-400"
            }`}
          ></span>
        </span>

        <span className="text-xs sm:text-sm font-semibold tracking-wide flex items-center gap-2">
          {isSunset ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform duration-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <span>Sunset View</span>
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-cyan-300 group-hover:-rotate-12 transition-transform duration-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
              <span>Shooting Stars</span>
            </>
          )}
        </span>
      </button>
    </div>
  );
}
