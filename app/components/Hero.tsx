"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title split-line vertical mask reveal
      gsap.to(".hero-title-line", {
        y: "0%",
        duration: 1.4,
        stagger: 0.15,
        ease: "power4.out",
        delay: 0.2,
      });

      // Animated technical lines
      gsap.to(".hero-grid-line-h", {
        scaleX: 1,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.2,
      });

      gsap.to(".hero-grid-line-v", {
        scaleY: 1,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.2,
      });

      // Background watermark parallax or scale in
      gsap.fromTo(
        ".hero-watermark",
        { opacity: 0, scale: 0.9 },
        {
          opacity: 0.03,
          scale: 1,
          duration: 2.0,
          ease: "power2.out",
          delay: 0.4,
        }
      );

      // Content fade up stagger
      gsap.fromTo(
        ".hero-animate-up",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.6,
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative w-full min-h-[80vh] flex flex-col justify-center overflow-hidden border-b border-border"
    >
      {/* Background Watermark 01 */}
      <div className="hero-watermark absolute -right-12 -top-24 select-none pointer-events-none text-[45vw] font-bold text-[#1d2023] leading-none z-0">
        01
      </div>

      {/* Decorative Technical Grid Lines */}
      <div className="hero-grid-line-h absolute top-12 left-0 w-full h-[1px] bg-border origin-left scale-x-0" />
      <div className="hero-grid-line-h absolute bottom-12 left-0 w-full h-[1px] bg-border origin-left scale-x-0" />
      <div className="hero-grid-line-v absolute left-[10%] top-0 w-[1px] h-full bg-border origin-top scale-y-0 hidden md:block" />
      <div className="hero-grid-line-v absolute right-[10%] top-0 w-[1px] h-full bg-border origin-top scale-y-0 hidden md:block" />

      {/* Layout Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 py-24 md:px-7 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
        {/* Title Column */}
        <div className="md:col-span-8 flex flex-col justify-center">
          {/* Eyebrow */}
          <div className="hero-animate-up mb-6 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#1d2023] rounded-full" />
            <p className="text-[10px] font-semibold tracking-[0.2em] text-muted uppercase">
              LAZZLE & CO PRODUCTIONS / DIGITAL
            </p>
          </div>

          {/* Cinematic Title */}
          <h1 className="display-large text-foreground leading-[0.85] uppercase mb-8">
            <span className="text-mask-wrapper block">
              <span className="text-mask-content hero-title-line">Selected</span>
            </span>
            <span className="text-mask-wrapper block md:pl-20">
              <span className="text-mask-content hero-title-line">Digital</span>
            </span>
            <span className="text-mask-wrapper block text-right md:text-left md:pl-4">
              <span className="text-mask-content hero-title-line">References.</span>
            </span>
          </h1>
        </div>

        {/* Info Column */}
        <div className="md:col-span-4 flex flex-col justify-end h-full md:pb-6 md:pl-6">
          <div className="hero-animate-up border-t border-border pt-6 max-w-[320px]">
            <p className="text-[14px] leading-[1.6] text-foreground font-medium mb-3">
              A curated collection of websites across beverage, food, hospitality, and
              travel. Selected for their design, storytelling, and digital presence.
            </p>
            <p className="text-[11px] leading-[1.6] text-muted">
              A glimpse into the level of digital experiences we aim to create for
              ambitious brands.
            </p>
          </div>

          {/* Technical markers */}
          <div className="hero-animate-up mt-8 flex items-center justify-between text-[9px] font-medium tracking-[0.15em] text-muted uppercase border-t border-border/50 pt-4 max-w-[320px]">
            <span>REF: ARCHIVE-2026</span>
            <span>23.0224° N, 72.5714° E</span>
          </div>
        </div>
      </div>
    </section>
  );
}
