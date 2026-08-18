"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Initial fade and slide reveal
    gsap.fromTo(
      headerRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: "power3.out" }
    );

    // Detect scroll for compact styling
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      id="site-header"
      className={`sticky top-0 z-50 border-b border-border transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-background/85 backdrop-blur-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 md:px-7 lg:px-12">
        <span className="text-[11px] font-semibold tracking-[0.16em] text-foreground uppercase">
          LAZZLE & CO PRODUCTIONS
        </span>
        <span className="text-[11px] font-semibold tracking-[0.16em] text-muted uppercase">
          SELECTED REFERENCES
        </span>
      </div>
    </header>
  );
}
