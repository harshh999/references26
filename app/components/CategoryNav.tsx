"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const navItems = [
  { id: "hero", label: "Overview" },
  { id: "chapter-01", label: "01 Soft Drinks" },
  { id: "chapter-02", label: "02 Wine" },
  { id: "chapter-03", label: "03 Retail" },
  { id: "chapter-04", label: "04 Beer" },
  { id: "chapter-05", label: "05 Coffee" },
  { id: "chapter-06", label: "06 Food Brands" },
  { id: "chapter-07", label: "07 Restaurants" },
  { id: "chapter-08", label: "08 Hotels" },
  { id: "chapter-09", label: "09 Luxury Stays" },
  { id: "chapter-10", label: "10 Travel" },
  { id: "chapter-11", label: "11 Clubs" }
];

export default function CategoryNav() {
  const [activeId, setActiveId] = useState("hero");
  const containerRef = useRef<HTMLDivElement>(null);
  const activeBgRef = useRef<HTMLDivElement>(null);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 90;
      const targetPosition = el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    // ScrollTrigger to detect active section
    const triggers = navItems.map((item) => {
      return ScrollTrigger.create({
        trigger: item.id === "hero" ? "#hero" : `#${item.id}`,
        start: "top 120px",
        end: "bottom 120px",
        onToggle: (self) => {
          if (self.isActive) {
            setActiveId(item.id);
          }
        }
      });
    });

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  useEffect(() => {
    // Animate active glide background
    const activeButton = containerRef.current?.querySelector(`[data-nav-id="${activeId}"]`) as HTMLElement;
    if (activeButton && activeBgRef.current) {
      const left = activeButton.offsetLeft;
      const width = activeButton.offsetWidth;

      gsap.to(activeBgRef.current, {
        left: left,
        width: width,
        duration: 0.5,
        ease: "power3.out",
        overwrite: "auto"
      });
    }
  }, [activeId]);

  return (
    <div className="sticky top-[58px] z-40 w-full border-b border-border bg-[#e8e6e1]/90 backdrop-blur-md transition-all duration-300">
      <div 
        ref={containerRef}
        className="relative mx-auto flex max-w-[1440px] items-center justify-start gap-1 md:gap-4 px-5 py-3 md:px-7 lg:px-12 overflow-x-auto scrollbar-none"
      >
        {/* Active glide background */}
        <div 
          ref={activeBgRef}
          className="absolute top-1/2 -translate-y-1/2 h-[26px] bg-[#1d2023] rounded-[13px] pointer-events-none z-0"
          style={{ left: 0, width: 0 }}
        />

        {navItems.map((item) => {
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              data-nav-id={item.id}
              onClick={() => handleScrollTo(item.id)}
              className={`relative z-10 py-1 px-3 text-[10px] md:text-[11px] font-medium tracking-[0.12em] uppercase transition-colors duration-500 rounded-[13px] cursor-pointer whitespace-nowrap ${
                isActive ? "text-[#e8e6e1]" : "text-[#1d2023] hover:text-[#1d2023]/70"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
