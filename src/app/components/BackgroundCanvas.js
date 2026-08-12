"use client";

import React, { useEffect, useRef, useState } from "react";

export default function BackgroundCanvas({ theme }) {
  const isSunset = theme === "sunset";
  const canvasRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll position dynamically
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(Math.max(window.scrollY / totalHeight, 0), 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // HTML5 Canvas Shooting Stars (Slower, elegant pace)
  useEffect(() => {
    if (isSunset) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Static Background Stars
    const staticStars = Array.from({ length: 220 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      baseY: Math.random() * height,
      radius: Math.random() * 1.5 + 0.3,
      alpha: Math.random() * 0.8 + 0.2,
      speed: Math.random() * 0.015 + 0.004,
      increasing: Math.random() > 0.5,
      parallaxFactor: Math.random() * 0.25 + 0.08,
    }));

    // Dynamic Shooting Stars
    class ShootingStar {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        if (Math.random() > 0.4) {
          this.x = Math.random() * width * 1.2;
          this.y = -60;
        } else {
          this.x = width + 60;
          this.y = Math.random() * height * 0.8;
        }

        this.length = Math.random() * 150 + 90;
        this.speed = Math.random() * 4.5 + 3.5;
        this.size = Math.random() * 1.8 + 0.8;
        this.opacity = Math.random() * 0.9 + 0.35;
        this.activeDelay = initial ? Math.random() * 300 : Math.random() * 120;
        this.activeTimer = 0;
      }

      update() {
        if (this.activeTimer < this.activeDelay) {
          this.activeTimer++;
          return;
        }

        this.x -= this.speed * 0.85;
        this.y += this.speed * 0.85;

        if (this.x < -this.length || this.y > height + this.length) {
          this.reset(false);
        }
      }

      draw(context) {
        if (this.activeTimer < this.activeDelay) return;

        const tailX = this.x + this.length * 0.85;
        const tailY = this.y - this.length * 0.85;

        const grad = context.createLinearGradient(this.x, this.y, tailX, tailY);
        grad.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
        grad.addColorStop(0.2, `rgba(56, 189, 248, ${this.opacity * 0.85})`);
        grad.addColorStop(0.6, `rgba(168, 85, 247, ${this.opacity * 0.45})`);
        grad.addColorStop(1, "rgba(255, 255, 255, 0)");

        context.beginPath();
        context.moveTo(this.x, this.y);
        context.lineTo(tailX, tailY);
        context.strokeStyle = grad;
        context.lineWidth = this.size;
        context.lineCap = "round";
        context.stroke();

        context.beginPath();
        context.arc(this.x, this.y, this.size * 1.4, 0, Math.PI * 2);
        context.fillStyle = "#ffffff";
        context.shadowBlur = 12;
        context.shadowColor = "#38bdf8";
        context.fill();
        context.shadowBlur = 0;
      }
    }

    const shootingStars = Array.from({ length: 7 }, () => new ShootingStar());

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const scrollY = window.scrollY || 0;
      staticStars.forEach((star) => {
        if (star.increasing) {
          star.alpha += star.speed;
          if (star.alpha >= 0.95) star.increasing = false;
        } else {
          star.alpha -= star.speed;
          if (star.alpha <= 0.2) star.increasing = true;
        }

        let currentY = (star.baseY - scrollY * star.parallaxFactor) % height;
        if (currentY < 0) currentY += height;

        ctx.beginPath();
        ctx.arc(star.x, currentY, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
      });

      shootingStars.forEach((star) => {
        star.update();
        star.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isSunset]);

  // Reveal progress for bottom elements (0 at top, 1 at bottom scroll)
  const bottomRevealOpacity = Math.max(0, (scrollProgress - 0.4) / 0.6);
  const bottomRevealTranslate = (1 - bottomRevealOpacity) * 70;

  return (
    <div className="fixed inset-0 pointer-events-none z-[-10] overflow-hidden select-none">
      
      {/* ======================================================== */}
      {/* --- NIGHT SKY (SHOOTING STARS MODE) --- */}
      {/* ======================================================== */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          isSunset ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {/* Base Sky Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070a19] via-[#040612] to-[#020308]" />

        {/* Dynamic Darkening Overlay on Scroll */}
        <div
          className="absolute inset-0 bg-[#010204] transition-opacity duration-300"
          style={{ opacity: scrollProgress * 0.8 }}
        />

        {/* Canvas Shooting Stars */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

        {/* Subtle Ambient Nebulae */}
        <div
          className="absolute top-[15%] left-[10%] w-[500px] h-[500px] rounded-full bg-cyan-600/10 blur-3xl transition-transform duration-300"
          style={{ transform: `translateY(${-scrollProgress * 120}px)` }}
        />

        {/* --- NIGHT ISLAND WITH PALM TREE & ANIMATED WATER WAVES --- */}
        <div
          className="absolute bottom-0 inset-x-0 h-[260px] sm:h-[370px] flex justify-center items-end transition-all duration-700 ease-out pointer-events-none"
          style={{
            opacity: bottomRevealOpacity,
            transform: `translateY(${bottomRevealTranslate}px)`,
          }}
        >
          {/* Moonlit Blue Water Layer & Waves */}
          <div className="absolute bottom-0 inset-x-0 h-32 overflow-hidden pointer-events-none">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
              <path
                d="M0,40 C 150,70 350,10 500,40 C 650,70 900,20 1200,50 L 1200,120 L 0,120 Z"
                className="fill-cyan-500/20 animate-wave-slow"
              />
              <path
                d="M0,60 C 200,30 400,80 600,50 C 800,20 1000,70 1200,40 L 1200,120 L 0,120 Z"
                className="fill-indigo-900/40 animate-wave-fast"
              />
            </svg>
          </div>

          {/* Moonlit Blue Water Reflection Glow */}
          <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-cyan-600/35 via-indigo-900/25 to-transparent blur-md" />

          {/* Night Island & Palm Trees SVG Silhouette */}
          <svg
            viewBox="0 0 1200 400"
            className="w-full max-w-6xl h-full fill-[#030612] drop-shadow-[0_-8px_20px_rgba(56,189,248,0.25)] relative z-10"
            preserveAspectRatio="none"
          >
            {/* Ocean Waves Base */}
            <path
              d="M 0,370 Q 150,355 300,370 T 600,370 T 900,370 T 1200,370 L 1200,400 L 0,400 Z"
              className="fill-[#060b1c]"
            />
            {/* Front Wave Ripple Highlight */}
            <path
              d="M 0,380 Q 200,368 400,380 T 800,380 T 1200,380 L 1200,400 L 0,400 Z"
              className="fill-[#02040a]"
            />

            {/* Island Shore Hill */}
            <path d="M 120,400 Q 380,260 760,320 Q 980,350 1200,400 Z" />
            <path d="M 220,400 Q 450,290 820,340 Z" className="fill-[#080d24] opacity-70" />

            {/* --- MAIN TALL CURVED PALM TREE --- */}
            <path d="M 460,340 Q 420,230 485,100 Q 494,100 468,340 Z" />
            <path d="M 450,300 Q 459,295 467,300" stroke="#0a122e" strokeWidth="3" fill="none" />
            <path d="M 452,250 Q 461,245 470,250" stroke="#0a122e" strokeWidth="3" fill="none" />
            <path d="M 458,200 Q 468,195 477,200" stroke="#0a122e" strokeWidth="3" fill="none" />
            <path d="M 468,150 Q 477,145 484,150" stroke="#0a122e" strokeWidth="3" fill="none" />

            {/* Palm Frond Leaves */}
            <path d="M 485,100 Q 390,50 320,95 Q 400,85 485,100 Z" />
            <path d="M 485,100 Q 370,100 300,150 Q 390,130 485,100 Z" />
            <path d="M 485,100 Q 375,155 330,220 Q 410,185 485,100 Z" />
            <path d="M 485,100 Q 470,15 495,0 Q 502,30 485,100 Z" />

            <path d="M 485,100 Q 580,45 650,85 Q 575,80 485,100 Z" />
            <path d="M 485,100 Q 600,95 670,140 Q 585,125 485,100 Z" />
            <path d="M 485,100 Q 600,155 640,210 Q 575,175 485,100 Z" />

            {/* Coconuts */}
            <circle cx="478" cy="110" r="9" />
            <circle cx="492" cy="112" r="8" />
            <circle cx="484" cy="120" r="8" />

            {/* --- SECONDARY SMALLER PALM TREE --- */}
            <path d="M 690,345 Q 670,270 715,170 Q 722,170 697,345 Z" />
            <path d="M 715,170 Q 645,135 590,170 Q 650,155 715,170 Z" />
            <path d="M 715,170 Q 630,190 580,240 Q 650,210 715,170 Z" />
            <path d="M 715,170 Q 780,135 840,165 Q 775,155 715,170 Z" />
            <path d="M 715,170 Q 790,190 835,240 Q 770,210 715,170 Z" />
            <path d="M 715,170 Q 710,105 725,85 Q 730,115 715,170 Z" />
          </svg>
        </div>
      </div>

      {/* ======================================================== */}
      {/* --- SUNSET VIEW MODE --- */}
      {/* ======================================================== */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          isSunset ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Sky Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1e1b4b] via-[#4c0519] via-40% via-[#9f1239] via-70% to-[#d97706]" />

        {/* Darkening Dusk Overlay on Scroll */}
        <div
          className="absolute inset-0 bg-slate-950 transition-opacity duration-300"
          style={{ opacity: scrollProgress * 0.35 }}
        />

        {/* --- SUN POSITIONED IN TOP-LEFT CORNER --- */}
        <div className="absolute top-[14%] left-[12%] sm:left-[15%] -translate-x-1/2 -translate-y-1/2">
          {/* Radiant Sun Glow Aura */}
          <div className="w-[300px] h-[300px] sm:w-[440px] sm:h-[440px] rounded-full bg-gradient-to-tr from-amber-400 via-orange-500 to-rose-600 blur-2xl opacity-90 shadow-[0_0_180px_80px_rgba(245,158,11,0.55)] animate-pulse-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] sm:w-[240px] sm:h-[240px] rounded-full bg-yellow-200 blur-md opacity-95 animate-glow" />
        </div>

        {/* Floating Sunset Embers */}
        <div className="sunset-embers">
          <div className="ember ember-1" />
          <div className="ember ember-2" />
          <div className="ember ember-3" />
          <div className="ember ember-4" />
          <div className="ember ember-5" />
          <div className="ember ember-6" />
          <div className="ember ember-7" />
        </div>

        {/* Ambient Dusk Light Orbs */}
        <div className="absolute top-[8%] left-[2%] w-[45vw] h-[45vw] max-w-[550px] bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-[42%] right-[5%] w-[45vw] h-[45vw] max-w-[550px] bg-rose-600/20 rounded-full blur-3xl pointer-events-none" />

        {/* --- SUNSET ISLAND & PALM TREES WITH ANIMATED WATER WAVES --- */}
        <div
          className="absolute bottom-0 inset-x-0 h-[260px] sm:h-[370px] flex justify-center items-end transition-all duration-700 ease-out pointer-events-none"
          style={{
            opacity: bottomRevealOpacity,
            transform: `translateY(${bottomRevealTranslate}px)`,
          }}
        >
          {/* Sunlit Golden Ocean Layer & Waves */}
          <div className="absolute bottom-0 inset-x-0 h-32 overflow-hidden pointer-events-none">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
              <path
                d="M0,40 C 150,70 350,10 500,40 C 650,70 900,20 1200,50 L 1200,120 L 0,120 Z"
                className="fill-amber-500/30 animate-wave-slow"
              />
              <path
                d="M0,60 C 200,30 400,80 600,50 C 800,20 1000,70 1200,40 L 1200,120 L 0,120 Z"
                className="fill-rose-700/40 animate-wave-fast"
              />
            </svg>
          </div>

          {/* Water Golden Reflection Glow */}
          <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-amber-500/50 via-amber-600/25 to-transparent blur-md" />

          {/* Sunset Island & Palm Trees SVG Silhouette */}
          <svg
            viewBox="0 0 1200 400"
            className="w-full max-w-6xl h-full fill-[#0d0419] drop-shadow-[0_-8px_20px_rgba(245,158,11,0.25)] relative z-10"
            preserveAspectRatio="none"
          >
            {/* Ocean Waves Base */}
            <path
              d="M 0,370 Q 150,355 300,370 T 600,370 T 900,370 T 1200,370 L 1200,400 L 0,400 Z"
              className="fill-[#150624]"
            />
            {/* Front Wave Ripple Highlight */}
            <path
              d="M 0,380 Q 200,368 400,380 T 800,380 T 1200,380 L 1200,400 L 0,400 Z"
              className="fill-[#080210]"
            />

            {/* Island Shore Hill */}
            <path d="M 120,400 Q 380,260 760,320 Q 980,350 1200,400 Z" />
            <path d="M 220,400 Q 450,290 820,340 Z" className="fill-[#1b072e] opacity-60" />

            {/* --- MAIN TALL CURVED PALM TREE --- */}
            <path d="M 460,340 Q 420,230 485,100 Q 494,100 468,340 Z" />
            <path d="M 450,300 Q 459,295 467,300" stroke="#2a0d3f" strokeWidth="3" fill="none" />
            <path d="M 452,250 Q 461,245 470,250" stroke="#2a0d3f" strokeWidth="3" fill="none" />
            <path d="M 458,200 Q 468,195 477,200" stroke="#2a0d3f" strokeWidth="3" fill="none" />
            <path d="M 468,150 Q 477,145 484,150" stroke="#2a0d3f" strokeWidth="3" fill="none" />

            {/* Palm Frond Leaves */}
            <path d="M 485,100 Q 390,50 320,95 Q 400,85 485,100 Z" />
            <path d="M 485,100 Q 370,100 300,150 Q 390,130 485,100 Z" />
            <path d="M 485,100 Q 375,155 330,220 Q 410,185 485,100 Z" />
            <path d="M 485,100 Q 470,15 495,0 Q 502,30 485,100 Z" />

            <path d="M 485,100 Q 580,45 650,85 Q 575,80 485,100 Z" />
            <path d="M 485,100 Q 600,95 670,140 Q 585,125 485,100 Z" />
            <path d="M 485,100 Q 600,155 640,210 Q 575,175 485,100 Z" />

            {/* Coconuts */}
            <circle cx="478" cy="110" r="9" />
            <circle cx="492" cy="112" r="8" />
            <circle cx="484" cy="120" r="8" />

            {/* --- SECONDARY SMALLER PALM TREE --- */}
            <path d="M 690,345 Q 670,270 715,170 Q 722,170 697,345 Z" />
            <path d="M 715,170 Q 645,135 590,170 Q 650,155 715,170 Z" />
            <path d="M 715,170 Q 630,190 580,240 Q 650,210 715,170 Z" />
            <path d="M 715,170 Q 780,135 840,165 Q 775,155 715,170 Z" />
            <path d="M 715,170 Q 790,190 835,240 Q 770,210 715,170 Z" />
            <path d="M 715,170 Q 710,105 725,85 Q 730,115 715,170 Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
