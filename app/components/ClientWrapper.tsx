"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });



    // Sync GSAP ScrollTrigger with Lenis
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Scroll progress line animation
    const progressLine = document.getElementById("scroll-progress");
    if (progressLine) {
      gsap.to(progressLine, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
    }

    // Custom Cursor tracking
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const card = target.closest(".ref-card");
      const interactive = target.closest("a, button, [role='button'], .category-nav-item");

      if (card) {
        cursor.classList.add("hovering-card");
        cursor.classList.remove("hovering-link");
        const span = cursor.querySelector("span");
        if (span) {
          span.style.opacity = "1";
        }
      } else if (interactive) {
        cursor.classList.add("hovering-link");
        cursor.classList.remove("hovering-card");
        const span = cursor.querySelector("span");
        if (span) {
          span.style.opacity = "0";
        }
      } else {
        cursor.classList.remove("hovering-card");
        cursor.classList.remove("hovering-link");
        const span = cursor.querySelector("span");
        if (span) {
          span.style.opacity = "0";
        }
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);

    // Smooth cursor follow interpolation
    const tick = () => {
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;
      if (cursor) {
        cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      }
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);

    // Clean up
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      lenis.destroy();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <>
      <div id="scroll-progress" />
      <div ref={cursorRef} className="custom-cursor hidden md:flex">
        <span className="opacity-0 transition-opacity duration-300 pointer-events-none text-[9px] uppercase tracking-wider text-[#e9e7e2]">
          view
        </span>
      </div>
      {children}
    </>
  );
}
