"use client";

import React, { useEffect, useRef, useState } from "react";

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  threshold = 0.12,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Toggle visibility live: fade in when entering viewport, fade out when leaving
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px", // Graceful trigger boundary
      }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={domRef}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
      className={`transition-all duration-700 ease-out transform ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100 blur-0 pointer-events-auto"
          : "opacity-0 translate-y-12 scale-[0.96] blur-sm pointer-events-none"
      } ${className}`}
    >
      {children}
    </div>
  );
}
