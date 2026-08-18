"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CategoryTransitionProps {
  id: string;
  number: string;
  name: string;
  workCount: string;
}

export default function CategoryTransition({
  id,
  number,
  name,
  workCount,
}: CategoryTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {


      // Coordinated timeline for category entry animations (simultaneous number & name)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          once: true,
          toggleActions: "play none none none",
        },
      });

      // Step 1: Giant number reveal (opacity, scale, y position, blur) starting at 0
      tl.fromTo(
        numberRef.current,
        {
          opacity: 0,
          scale: 0.92,
          y: 60,
          filter: "blur(8px)",
        },
        {
          opacity: 0.85,
          scale: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.75,
          ease: "power4.out",
        },
        0
      );

      // Step 2: Category name reveal (opacity, scale, y position, blur) starting at 0
      const categoryNameEl = nameRef.current?.querySelector(".chapter-category-name");
      if (categoryNameEl) {
        tl.fromTo(
          categoryNameEl,
          {
            opacity: 0,
            scale: 0.96,
            y: 45,
            filter: "blur(6px)",
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.7,
            ease: "power4.out",
          },
          0
        );
      }

      // Step 3: Chapter metadata and selected work count at 0.15s
      const metadataEls = nameRef.current?.querySelectorAll(".chapter-small-label, .chapter-work-count");
      if (metadataEls && metadataEls.length > 0) {
        tl.fromTo(
          metadataEls,
          {
            y: 8,
            opacity: 0,
          },
          {
            y: 0,
            opacity: (index, target) => {
              return target.classList.contains("chapter-small-label") ? 0.5 : 0.65;
            },
            duration: 0.4,
            ease: "power2.out",
          },
          0.15
        );
      }

      // Parallax scroll: giant number moves slower than category name
      gsap.to(numberRef.current, {
        y: 40,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(nameRef.current, {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const cycleIndex = ((parseInt(number) - 1) % 4) + 1;
  const numClass = `chapter-0${cycleIndex}-num`;
  const nameClass = `chapter-0${cycleIndex}-name`;
  
  let displayName = name;

  if (name.includes("SOFT DRINKS")) {
    displayName = "SOFT DRINKS &<br />FUNCTIONAL<br />BEVERAGES";
  } else if (name.includes("ALCOHOL")) {
    displayName = "ALCOHOL &<br />BEVERAGE<br />RETAIL";
  } else if (name.includes("FOOD BRANDS")) {
    displayName = "FOOD BRANDS<br />& SAUCES";
  } else if (name.includes("HOTELS")) {
    displayName = "HOTELS &<br />RESORTS";
  } else if (name.includes("LUXURY STAYS")) {
    displayName = "LUXURY STAYS<br />& VILLAS";
  } else if (name.includes("TRAVEL")) {
    displayName = "TRAVEL &<br />TOURISM";
  } else if (name.includes("CLUBS")) {
    displayName = "CLUBS &<br />HOSPITALITY";
  }

  return (
    <div
      ref={containerRef}
      id={id}
      className="chapter-transition-section w-full min-h-[75vh] h-screen bg-[#e8e6e1] relative overflow-hidden flex items-center border-b border-border/20"
    >
      {/* Giant Number Watermark */}
      <div
        ref={numberRef}
        className={`chapter-giant-number select-none pointer-events-none ${numClass}`}
        style={{ opacity: 0, transform: "scale(0.92) translateY(60px)", filter: "blur(8px)" }}
      >
        {number}
      </div>

      {/* Chapter Details Name & Metadata */}
      <div ref={nameRef} className={nameClass}>
        <p className="chapter-small-label text-[#202428]" style={{ opacity: 0, transform: "translateY(8px)" }}>
          CHAPTER / {number}
        </p>
        <h2
          className="chapter-category-name text-[#202428]"
          style={{ opacity: 0, transform: "scale(0.96) translateY(45px)", filter: "blur(6px)" }}
          dangerouslySetInnerHTML={{ __html: displayName }}
        />
        <p className="chapter-work-count mt-6 text-[#202428]" style={{ opacity: 0, transform: "translateY(8px)" }}>
          {workCount}
        </p>
      </div>
    </div>
  );
}
