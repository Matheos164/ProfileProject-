"use client";

import Image from "next/image";
import React, { useState, useRef } from "react";
import BackgroundCanvas from "./components/BackgroundCanvas";
import ThemeToggle from "./components/ThemeToggle";
import ScrollReveal from "./components/ScrollReveal";
import FlashOverlay from "./components/FlashOverlay";
import TeleportBeam from "./components/TeleportBeam";

export default function Home() {
  const [theme, setTheme] = useState("shooting-stars");
  const [isFlashing, setIsFlashing] = useState(false);
  const [targetTheme, setTargetTheme] = useState("sunset");
  const [isTeleporting, setIsTeleporting] = useState(false);
  const [isShootingStar, setIsShootingStar] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const clickTimeoutRef = useRef(null);

  const handleAvatarClick = () => {
    if (isShootingStar) return;

    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
    }

    const nextCount = clickCount + 1;
    if (nextCount >= 5) {
      setClickCount(0);
      setIsShootingStar(true);

      // Duration of full cosmic orbit sequence (launch + 2s wait + return + land)
      setTimeout(() => {
        setIsShootingStar(false);
      }, 4200);
    } else {
      setClickCount(nextCount);
      // Reset clicks after 2 seconds of inactivity
      clickTimeoutRef.current = setTimeout(() => {
        setClickCount(0);
      }, 2000);
    }
  };

  const toggleTheme = () => {
    if (isFlashing) return;
    const nextTheme = theme === "shooting-stars" ? "sunset" : "shooting-stars";
    setTargetTheme(nextTheme);
    setIsFlashing(true);

    // Switch theme at peak collision fusion
    setTimeout(() => {
      setTheme(nextTheme);
    }, 220);

    // End flash sequence
    setTimeout(() => {
      setIsFlashing(false);
    }, 650);
  };

  const teleportToTop = () => {
    if (isTeleporting) return;
    setIsTeleporting(true);
    window.scrollTo({ top: 0, behavior: "smooth" });

    setTimeout(() => {
      setIsTeleporting(false);
    }, 900);
  };

  const isSunset = theme === "sunset";

  return (
    <div className="relative min-h-screen text-slate-100 flex flex-col items-center justify-between selection:bg-cyan-500 selection:text-slate-900 overflow-x-hidden bg-transparent">
      {/* Mode-Inspired Teleportation Scroll Beam Effect */}
      <TeleportBeam active={isTeleporting} theme={theme} />

      {/* Mode-Inspired Left & Right Collision Flash Explosion Overlay */}
      <FlashOverlay active={isFlashing} targetTheme={targetTheme} />

      {/* Dynamic Background Overlay & Canvas */}
      <BackgroundCanvas theme={theme} />

      {/* Top Right Floating Theme Toggle */}
      <ThemeToggle theme={theme} onToggle={toggleTheme} />

      {/* Main Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 flex flex-col gap-12 sm:gap-16">

        {/* --- HERO / HEADER SECTION --- */}
        <header className="flex flex-col items-center text-center mt-6 sm:mt-10">
          <ScrollReveal delay={100}>
            {/* Profile Avatar with Enhanced Glowing Aura Ring & Black Hole Suction -> Shooting Star Easter Egg */}
            <div
              onClick={handleAvatarClick}
              title="✦ Matheos Amanuel"
              className="relative mb-6 group cursor-pointer flex justify-center select-none"
            >
              {/* Black Hole Suction Vortex Effect (Departure Phase: 0s - 0.92s) */}
              {isShootingStar && (
                <div
                  className={`absolute -inset-8 sm:-inset-12 rounded-full pointer-events-none z-40 flex items-center justify-center ${isSunset ? "animate-black-hole-sunset" : "animate-black-hole"
                    }`}
                >
                  {/* Gravitational Lensing Outer Warp Aura */}
                  <div
                    className={`absolute -inset-6 rounded-full blur-2xl opacity-80 animate-gravitational-lensing ${isSunset
                      ? "bg-gradient-to-r from-orange-600 via-rose-600 to-amber-500"
                      : "bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600"
                      }`}
                  />

                  {/* Outer Accretion Disk Vortex (Conic Gradient with Spiral Beaming) */}
                  <div
                    className={`absolute inset-0 rounded-full blur-sm opacity-95 animate-accretion-spin ${isSunset ? "blackhole-disk-sunset" : "blackhole-disk"
                      }`}
                  />

                  {/* Inner High-Velocity Plasma Swirl Ring */}
                  <div
                    className={`absolute inset-4 sm:inset-6 rounded-full blur-[2px] opacity-90 animate-accretion-spin-reverse ${isSunset ? "blackhole-inner-disk-sunset" : "blackhole-inner-disk"
                      }`}
                  />

                  {/* Relativistic Photon Ring (Blazing Event Horizon Boundary) */}
                  <div
                    className={`absolute inset-8 sm:inset-10 rounded-full border-2 border-white/90 ${isSunset
                      ? "shadow-[0_0_35px_#f97316]"
                      : "shadow-[0_0_35px_#38bdf8]"
                      }`}
                  />

                  {/* Pitch-Black Singularity Core (Event Horizon Void) */}
                  <div className="absolute inset-10 sm:inset-12 rounded-full bg-black shadow-[inset_0_0_35px_#000000] border border-black" />

                  {/* Singularity Implosion Shockwave (Triggered at Black Hole Collapse) */}
                  <div
                    className={`absolute inset-0 rounded-full border-2 animate-singularity-implosion pointer-events-none ${isSunset ? "border-amber-300 shadow-[0_0_45px_#f59e0b]" : "border-cyan-200 shadow-[0_0_45px_#38bdf8]"
                      }`}
                  />
                </div>
              )}

              {/* Avatar Traveling / Suction Entity */}
              <div
                className={`relative flex justify-center ${isShootingStar
                  ? isSunset
                    ? "animate-shooting-star-avatar-sunset z-50 pointer-events-none"
                    : "animate-shooting-star-avatar z-50 pointer-events-none"
                  : "active:scale-95 transition-transform duration-150"
                  }`}
              >
                {/* Wide Ambient Glow Halo */}
                <div
                  className={`absolute -inset-4 sm:-inset-6 rounded-full blur-2xl opacity-80 transition-all duration-700 ${isShootingStar ? "opacity-100 scale-125" : "group-hover:opacity-100 group-hover:scale-110"
                    } ${isSunset
                      ? "bg-gradient-to-tr from-amber-500 via-rose-500 to-orange-500 animate-pulse"
                      : "bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-500 animate-pulse"
                    }`}
                />

                {/* Radiant Pulsing Ring */}
                <div
                  className={`absolute -inset-2 sm:-inset-2.5 rounded-full opacity-90 blur-md transition duration-500 ${isShootingStar ? "opacity-100 scale-110" : "group-hover:opacity-100"
                    } ${isSunset
                      ? "bg-gradient-to-r from-amber-400 via-rose-500 to-pink-500 rotate-shadow-animation-sunset"
                      : "bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-600 rotate-shadow-animation"
                    }`}
                />

                {/* Massive Shooting Star Comet Tail & Cosmic Trail (Only active on return phase) */}
                {isShootingStar && (
                  <>
                    <div className="star-tail-wrapper">
                      {/* Giant Outer Atmosphere Glow Trail */}
                      <div
                        className={`star-comet-tail-outer ${isSunset
                          ? "bg-gradient-to-l from-white/95 via-amber-400/80 via-rose-500/40 to-transparent"
                          : "bg-gradient-to-l from-white/95 via-cyan-400/80 via-blue-600/40 to-transparent"
                          }`}
                      />
                      {/* Dense Luminescent Plasma Core Trail */}
                      <div
                        className={`star-comet-tail-core ${isSunset
                          ? "bg-gradient-to-l from-white via-amber-300 via-orange-400 to-transparent shadow-[0_0_40px_#f59e0b]"
                          : "bg-gradient-to-l from-white via-cyan-200 via-sky-400 to-transparent shadow-[0_0_40px_#38bdf8]"
                          }`}
                      />
                      {/* Ultra-Bright Center Beam Stardust */}
                      <div
                        className={`star-comet-tail-sparks ${isSunset ? "bg-amber-200 shadow-[0_0_25px_#ffffff]" : "bg-cyan-100 shadow-[0_0_25px_#ffffff]"
                          }`}
                      />
                    </div>

                    {/* Landing Starburst Shockwave */}
                    <div
                      className={`absolute -inset-12 rounded-full border-2 animate-star-landing pointer-events-none z-20 ${isSunset ? "border-amber-400 shadow-[0_0_40px_#f59e0b]" : "border-cyan-400 shadow-[0_0_40px_#38bdf8]"
                        }`}
                    />
                  </>
                )}

                {/* Pure White Star Orb Overlay (Active during return flight, then fades on landing) */}
                {isShootingStar && (
                  <div
                    className={`absolute inset-0 rounded-full bg-white z-30 pointer-events-none ${isSunset ? "animate-star-white-orb-sunset" : "animate-star-white-orb"
                      }`}
                  />
                )}

                <Image
                  src="/profile.jpg"
                  alt="Matheos Amanuel"
                  width={200}
                  height={200}
                  priority
                  className={`relative rounded-full border-4 object-cover shadow-2xl transition-all duration-500 group-hover:scale-105 ${isSunset ? "border-amber-400/80" : "border-cyan-400/80"
                    }`}
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <h1
              className={`text-4xl sm:text-6xl font-extrabold tracking-tight mb-3 transition-colors duration-500 ${isSunset
                ? "bg-gradient-to-r from-amber-200 via-rose-300 to-orange-400 bg-clip-text text-transparent"
                : "bg-gradient-to-r from-white via-slate-200 to-cyan-400 bg-clip-text text-transparent"
                }`}
            >
              Matheos Amanuel
            </h1>
            <h2 className="text-lg sm:text-2xl font-medium text-slate-200 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Software Developer & IT Specialist
            </h2>
          </ScrollReveal>

          {/* Quick Contact & Social Bar */}
          <ScrollReveal delay={400}>
            <div className="flex items-center justify-center gap-4 mt-6">
              <a
                href="https://www.linkedin.com/in/matheos-amanuel-81335b241/"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 rounded-xl backdrop-blur-md border text-sm font-semibold transition-all duration-300 shadow-md ${isSunset
                  ? "bg-amber-950/30 border-amber-500/30 text-amber-200 hover:bg-amber-900/50 hover:border-amber-400"
                  : "bg-slate-900/30 border-slate-700/40 text-slate-200 hover:bg-slate-800/60 hover:border-cyan-400 hover:text-cyan-300"
                  }`}
              >
                <Image
                  src="/linkedin.png"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                  className="w-5 h-5 rounded"
                />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/Matheos164"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 rounded-xl backdrop-blur-md border text-sm font-semibold transition-all duration-300 shadow-md ${isSunset
                  ? "bg-amber-950/30 border-amber-500/30 text-amber-200 hover:bg-amber-900/50 hover:border-amber-400"
                  : "bg-slate-900/30 border-slate-700/40 text-slate-200 hover:bg-slate-800/60 hover:border-cyan-400 hover:text-cyan-300"
                  }`}
              >
                <div className="bg-white p-0.5 rounded">
                  <Image
                    src="/github.png"
                    alt="GitHub"
                    width={18}
                    height={18}
                    className="w-4 h-4"
                  />
                </div>
                <span>GitHub</span>
              </a>
            </div>
          </ScrollReveal>
        </header>

        {/* --- MAIN CONTENT SECTIONS --- */}
        <main className="flex flex-col gap-10 sm:gap-14">

          {/* ABOUT ME SECTION */}
          <ScrollReveal threshold={0.1}>
            <section
              className={`p-6 sm:p-10 rounded-2xl transition-all duration-500 ${isSunset ? "glass-card-sunset" : "glass-card"
                }`}
            >
              <h1
                className={`text-2xl sm:text-3xl font-bold text-center mb-6 transition-colors duration-500 ${isSunset ? "text-amber-300" : "text-cyan-300"
                  }`}
              >
                Biography
              </h1>
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed text-center">
                Software Developer & IT Specialist with hands-on experience developing web, desktop, and mobile
                applications, alongside a proven track record of providing enterprise-level IT support across multiple locations via
                phone, on-site, and remote channels. Proficient in coding languages such as Python, C#, PHP, etc., experienced in
                managing workstations, user accounts, and process documentation. Committed to delivering exceptional customer
                service, effective technical support, and clear documentation while actively pursuing continuous learning and
                professional growth.
              </p>
            </section>
          </ScrollReveal>

          {/* EDUCATION COMPLETION SECTION */}
          <ScrollReveal threshold={0.1}>
            <section
              className={`p-6 sm:p-10 rounded-2xl transition-all duration-500 ${isSunset ? "glass-card-sunset" : "glass-card"
                }`}
            >
              <h1
                className={`text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 transition-colors duration-500 ${isSunset ? "text-amber-300" : "text-cyan-300"
                  }`}
              >
                Education Background
              </h1>

              <div className="flex flex-col items-center gap-6">
                {/* Institution Badge */}
                <div className="bg-white/95 p-3 rounded-xl shadow-lg border border-slate-200/50 hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/mohawk.png"
                    alt="Mohawk College Logo"
                    width={180}
                    height={50}
                    className="object-contain"
                  />
                </div>

                <div className="w-full flex flex-col gap-4 mt-2">
                  {/* Diploma 1 */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl bg-slate-900/30 backdrop-blur-sm border border-slate-700/40 hover:border-slate-500/60 transition-all">
                    <div className="p-2 rounded-lg bg-slate-900/50 border border-slate-700/50 shadow-md">
                      <Image
                        src="/diploma.png"
                        alt="Diploma Icon"
                        width={44}
                        height={44}
                        className="object-contain"
                      />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-lg sm:text-xl font-semibold text-white">
                        Computer Systems Technology - Software Development Advanced Diploma
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 mt-0.5">Mohawk College of Applied Arts and Technology</p>
                    </div>
                  </div>

                  {/* Diploma 2 */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl bg-slate-900/30 backdrop-blur-sm border border-slate-700/40 hover:border-slate-500/60 transition-all">
                    <div className="p-2 rounded-lg bg-slate-900/50 border border-slate-700/50 shadow-md">
                      <Image
                        src="/advancedDiploma.png"
                        alt="Advanced Diploma Icon"
                        width={44}
                        height={44}
                        className="object-contain"
                      />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-lg sm:text-xl font-semibold text-white">
                        Computer Systems Technician - Software Support Diploma
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 mt-0.5">Mohawk College of Applied Arts and Technology</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* PROGRAMMING LANGUAGES SECTION */}
          <ScrollReveal threshold={0.1}>
            <section
              className={`p-6 sm:p-10 rounded-2xl transition-all duration-500 ${isSunset ? "glass-card-sunset" : "glass-card"
                }`}
            >
              <h1
                className={`text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 transition-colors duration-500 ${isSunset ? "text-amber-300" : "text-cyan-300"
                  }`}
              >
                Tech Stack & Skills
              </h1>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                {[
                  { name: "Python", src: "/python.png", width: 48, height: 48 },
                  { name: "Java", src: "/Java.png", width: 44, height: 56 },
                  { name: "HTML / CSS / JS", src: "/htmlCssJS.png", width: 90, height: 48 },
                  { name: "SQL", src: "/SQL.png", width: 48, height: 48 },
                  { name: "PHP", src: "/Php.png", width: 64, height: 40 },
                  { name: "C#", src: "/CSharp.png", width: 48, height: 48 },
                  { name: "React", src: "/React.png", width: 60, height: 48 },
                  { name: "Node.js", src: "/Node.png", width: 70, height: 44 },
                ].map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-900/30 border border-slate-700/30 hover:border-slate-400/50 hover:bg-slate-800/50 hover:-translate-y-1.5 transition-all duration-300 shadow-md group"
                  >
                    <div className="h-16 flex items-center justify-center mb-2">
                      <Image
                        src={tech.src}
                        alt={tech.name}
                        width={tech.width}
                        height={tech.height}
                        className="object-contain group-hover:scale-110 transition-transform duration-300 max-h-14"
                      />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* PROJECTS SECTION */}
          <ScrollReveal threshold={0.1}>
            <section
              className={`p-6 sm:p-10 rounded-2xl transition-all duration-500 ${isSunset ? "glass-card-sunset" : "glass-card"
                }`}
            >
              <h1
                className={`text-2xl sm:text-3xl font-bold text-center mb-8 transition-colors duration-500 ${isSunset ? "text-amber-300" : "text-cyan-300"
                  }`}
              >
                Featured Projects
              </h1>

              <div className="flex flex-col gap-10">
                {/* PROJECT 1 */}
                <div className="p-5 sm:p-7 rounded-xl bg-slate-900/30 border border-slate-700/40 hover:border-cyan-500/40 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row items-center gap-6">
                    <div className="w-full lg:w-1/3 flex justify-center">
                      <div className="relative group overflow-hidden rounded-xl border border-slate-700/60 shadow-xl bg-slate-950/40 p-2">
                        <Image
                          src="/Project1.png"
                          alt="Space Defense Game"
                          width={260}
                          height={160}
                          className="rounded-lg object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>

                    <div className="w-full lg:w-2/3 flex flex-col gap-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        Space Defense – 2D Unity Game
                      </h3>

                      {/* Tech Stack Icons */}
                      <div className="flex flex-wrap items-center gap-3 my-1">
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/50 border border-slate-700/60 text-xs text-slate-200 font-medium">
                          <Image src="/unity.png" alt="Unity" width={18} height={18} />
                          <span>Unity</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/50 border border-slate-700/60 text-xs text-slate-200 font-medium">
                          <Image src="/CSharp.png" alt="C#" width={18} height={18} />
                          <span>C#</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/50 border border-slate-700/60 text-xs text-slate-200 font-medium">
                          <Image src="/Php.png" alt="PHP" width={22} height={14} />
                          <span>PHP</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/50 border border-slate-700/60 text-xs text-slate-200 font-medium">
                          <Image src="/SQL.png" alt="SQL" width={18} height={18} />
                          <span>SQL</span>
                        </div>
                      </div>

                      {/* Action Links */}
                      <div className="flex flex-wrap items-center gap-3 my-1">
                        <a
                          href="https://github.com/Matheos164/Space_Defense_Game"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/60 hover:bg-cyan-600/80 text-white text-xs sm:text-sm font-semibold transition-colors border border-slate-700/50"
                        >
                          <Image src="/link.png" alt="Link" width={14} height={14} />
                          <span>GitHub Repo</span>
                        </a>
                        <a
                          href="https://me-phrog.itch.io/space-defense-web-version"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-600/90 hover:bg-cyan-500 text-white text-xs sm:text-sm font-semibold transition-colors shadow-md shadow-cyan-900/30"
                        >
                          <Image src="/link.png" alt="Link" width={14} height={14} />
                          <span>Try The Game</span>
                        </a>
                      </div>

                      <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                        Developed a 2D game on Unity Engine using C# for gameplay functions and PHP and SQL for networks and server features. The player's main objective is to defend the earth from oncoming enemies while trying to achieve a high score. Features include orbit-based player controls, shield activation, planet defense mechanics, and 3 distinct enemy types (Asteroid, Alien Ship, and Boss Alien Ship).
                      </p>
                    </div>
                  </div>
                </div>

                {/* PROJECT 2 */}
                <div className="p-5 sm:p-7 rounded-xl bg-slate-900/30 border border-slate-700/40 hover:border-cyan-500/40 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row items-center gap-6">
                    <div className="w-full lg:w-1/3 flex justify-center">
                      <div className="relative group overflow-hidden rounded-xl border border-slate-700/60 shadow-xl bg-slate-950/40 p-2">
                        <Image
                          src="/Project2.png"
                          alt="Employee Finder App"
                          width={260}
                          height={160}
                          className="rounded-lg object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>

                    <div className="w-full lg:w-2/3 flex flex-col gap-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        Employee Finder App – Dynamic Web App
                      </h3>

                      {/* Tech Stack Icons */}
                      <div className="flex flex-wrap items-center gap-3 my-1">
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/50 border border-slate-700/60 text-xs text-slate-200 font-medium">
                          <Image src="/Php.png" alt="PHP" width={22} height={14} />
                          <span>PHP</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/50 border border-slate-700/60 text-xs text-slate-200 font-medium">
                          <Image src="/SQL.png" alt="SQL" width={18} height={18} />
                          <span>SQL</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/50 border border-slate-700/60 text-xs text-slate-200 font-medium">
                          <Image src="/htmlCssJS.png" alt="HTML/CSS/JS" width={32} height={16} />
                          <span>JS / HTML / CSS</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/50 border border-slate-700/60 text-xs text-slate-200 font-medium">
                          <Image src="/bootstarp.png" alt="Bootstrap" width={18} height={18} />
                          <span>Bootstrap</span>
                        </div>
                      </div>

                      {/* Demo Credentials Pill */}
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-950/40 border border-amber-500/40 text-amber-300 text-xs font-semibold w-fit">
                        <Image src="/lock.png" alt="Lock" width={14} height={14} />
                        <span>Demo Login: Admin | Password: admin</span>
                      </div>

                      {/* Action Links */}
                      <div className="flex flex-wrap items-center gap-3 my-1">
                        <a
                          href="https://github.com/Matheos164/Emp_Finder"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/60 hover:bg-cyan-600/80 text-white text-xs sm:text-sm font-semibold transition-colors border border-slate-700/50"
                        >
                          <Image src="/link.png" alt="Link" width={14} height={14} />
                          <span>GitHub Repo</span>
                        </a>
                        <a
                          href="https://emp-finder.rf.gd"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-600/90 hover:bg-cyan-500 text-white text-xs sm:text-sm font-semibold transition-colors shadow-md shadow-cyan-900/30"
                        >
                          <Image src="/link.png" alt="Link" width={14} height={14} />
                          <span>View The Site</span>
                        </a>
                      </div>

                      <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                        Developed and designed a full-stack dynamic web application that enables users to locate employees based on selected locations. The site allows regular users to select a location and search for an employee by name. If a match is found, the system displays the employee’s information along with a map of the corresponding area or floor. An admin portal allows site administrators to add, edit, and remove employee profiles stored in a SQL database.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* EXTRACURRICULAR & RESEARCH SECTION */}
          <ScrollReveal threshold={0.1}>
            <section
              className={`p-6 sm:p-10 rounded-2xl transition-all duration-500 ${isSunset ? "glass-card-sunset" : "glass-card"
                }`}
            >
              <h1
                className={`text-2xl sm:text-3xl font-bold text-center mb-8 transition-colors duration-500 ${isSunset ? "text-amber-300" : "text-cyan-300"
                  }`}
              >
                Extracurricular & Research
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* ITEM 1 */}
                <div className="flex flex-col justify-between p-5 rounded-xl bg-slate-900/30 border border-slate-700/40 hover:border-slate-500/60 transition-all duration-300 group">
                  <div>
                    <div className="w-full flex justify-center mb-4 bg-slate-950/40 p-3 rounded-lg border border-slate-700/50">
                      <Image
                        src="/temi.png"
                        alt="Tēmi Robot"
                        width={140}
                        height={100}
                        className="object-contain max-h-24 group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-white text-center mb-2">
                      Tēmi Robot – Research & Documentation
                    </h3>
                    <p className="text-slate-200 text-xs sm:text-sm leading-relaxed mb-4 text-center">
                      Conducted research on the Tēmi robot's SDK (Software Development Kit), focusing on its capabilities and functionalities. Developed a comprehensive user manual to guide developers in getting started with installation, configuration, and basic movement control APIs.
                    </p>
                  </div>
                  <div className="pt-2 text-center">
                    <a
                      href="/Temi_manual.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 w-full py-2 rounded-lg bg-slate-800/60 hover:bg-cyan-600 text-white text-xs font-semibold transition-colors border border-slate-700/50"
                    >
                      <Image src="/link.png" alt="Link" width={14} height={14} />
                      <span>Project Documentation</span>
                    </a>
                  </div>
                </div>

                {/* ITEM 2 */}
                <div className="flex flex-col justify-between p-5 rounded-xl bg-slate-900/30 border border-slate-700/40 hover:border-slate-500/60 transition-all duration-300 group">
                  <div>
                    <div className="w-full flex justify-center mb-4 bg-slate-950/40 p-3 rounded-lg border border-slate-700/50">
                      <Image
                        src="/crowdvision.png"
                        alt="CrowdVision"
                        width={140}
                        height={100}
                        className="object-contain max-h-24 group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="flex justify-center mb-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-900/60 border border-slate-700/60 text-xs text-slate-200">
                        <Image src="/python.png" alt="Python" width={14} height={14} />
                        <span>Python</span>
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white text-center mb-2">
                      CrowdVision – Startup Proof of Concept
                    </h3>
                    <p className="text-slate-200 text-xs sm:text-sm leading-relaxed mb-4 text-center">
                      Researched and developed a proof of concept backend prototype for CrowdVision, an event social media platform. Engineered video upscaling, video stabilization, audio alignment, and multi-angle video sequence merging.
                    </p>
                  </div>
                  {/* <div className="pt-2 text-center">
                    <a
                      href="https://theforge.mcmaster.ca/startups/crowdvision/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 w-full py-2 rounded-lg bg-slate-800/60 hover:bg-cyan-600 text-white text-xs font-semibold transition-colors border border-slate-700/50"
                    >
                      <Image src="/link.png" alt="Link" width={14} height={14} />
                      <span>Project Article</span>
                    </a>
                  </div> */}
                </div>

                {/* ITEM 3 */}
                <div className="flex flex-col justify-between p-5 rounded-xl bg-slate-900/30 border border-slate-700/40 hover:border-slate-500/60 transition-all duration-300 group">
                  <div>
                    <div className="w-full flex justify-center mb-4 bg-slate-950/40 p-3 rounded-lg border border-slate-700/50">
                      <Image
                        src="/remembering.png"
                        alt="Remembering Their Faces"
                        width={140}
                        height={100}
                        className="object-contain max-h-24 group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="flex justify-center mb-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-900/60 border border-slate-700/60 text-xs text-slate-200">
                        <Image src="/python.png" alt="Python" width={14} height={14} />
                        <span>Python</span>
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white text-center mb-2">
                      Remembering Their Faces – Face Matching
                    </h3>
                    <p className="text-slate-200 text-xs sm:text-sm leading-relaxed mb-4 text-center">
                      Conducted research on facial recognition technology to identify and match historical photographs of Canadian WWII military personnel. Built a Python prototype system analyzing facial feature vector similarities.
                    </p>
                  </div>
                  <div className="pt-2 text-center">
                    <a
                      href="https://www.mohawknewsdesk.ca/unlocking-canadas-military-aviation-history/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 w-full py-2 rounded-lg bg-slate-800/60 hover:bg-cyan-600 text-white text-xs font-semibold transition-colors border border-slate-700/50"
                    >
                      <Image src="/link.png" alt="Link" width={14} height={14} />
                      <span>Project Article</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </ScrollReveal>

        </main>

        {/* --- FOOTER & TELEPORTATION BUTTON --- */}
        <footer className="pt-8 pb-4 border-t border-slate-800/60 flex flex-col items-center gap-5 text-slate-300">
          {/* Futuristic Teleport to Top Button */}
          <button
            onClick={teleportToTop}
            className={`group flex items-center gap-2 px-5 py-2.5 rounded-full backdrop-blur-md border text-xs sm:text-sm font-semibold transition-all duration-500 shadow-lg cursor-pointer ${isSunset
              ? "bg-amber-950/40 border-amber-500/40 text-amber-200 hover:bg-amber-900/60 hover:border-amber-400 hover:shadow-amber-900/40"
              : "bg-slate-900/50 border-cyan-500/40 text-cyan-200 hover:bg-slate-800/80 hover:border-cyan-400 hover:shadow-cyan-900/40"
              }`}
          >
            <span className="text-sm transition-transform duration-300 group-hover:-translate-y-1">⚡</span>
            <span>Teleport to Top</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-cyan-300 group-hover:-translate-y-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>

          <div className="flex items-center gap-6 mt-1">
            <a
              href="https://www.linkedin.com/in/matheos-amanuel-81335b241/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Image
                src="/linkedin.png"
                alt="LinkedIn"
                width={36}
                height={36}
                className="rounded"
              />
            </a>
            <a
              href="https://github.com/Matheos164"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform bg-white p-1 rounded-md"
            >
              <Image
                src="/github.png"
                alt="GitHub"
                width={32}
                height={32}
              />
            </a>
          </div>
          <p className="text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} Matheos Amanuel. All rights reserved.
          </p>
          <p className="text-xs sm:text-sm">
            Ps: Click my picture for a easter egg!
          </p>
        </footer>
      </div>
    </div>
  );
}
