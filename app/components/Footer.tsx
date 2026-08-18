"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".footer-reveal",
        { y: 15, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 95%",
            toggleActions: "play none none none",
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      id="site-footer"
      className="border-t border-border bg-transparent"
    >
      <div className="mx-auto max-w-[1440px] px-5 py-8 md:px-7 lg:px-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-6">
            <span className="footer-reveal text-[11px] font-semibold tracking-[0.12em] text-foreground uppercase">
              LAZZLE & CO PRODUCTIONS
            </span>
            <span className="footer-reveal text-[11px] tracking-[0.04em] text-muted">
              Ahmedabad, India / Working Globally
            </span>
          </div>
          <span className="footer-reveal text-[11px] text-muted font-medium tracking-wider">
            © 2026
          </span>
        </div>
      </div>
    </footer>
  );
}
