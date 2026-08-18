"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { contactInfo } from "@/app/data/references";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-animate",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="mx-auto max-w-[1440px] px-5 py-20 md:px-7 md:py-28 lg:px-12 lg:py-32"
    >
      <div className="contact-animate">
        <h2 className="text-[28px] leading-[1.1] font-semibold tracking-tight text-foreground md:text-[36px] lg:text-[44px]">
          {contactInfo.heading}
        </h2>
      </div>
      <div className="contact-animate">
        <p className="mt-3 text-[15px] leading-[1.6] text-muted md:text-[16px]">
          {contactInfo.text}
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:gap-12">
        {contactInfo.items.map((item) => (
          <div key={item.label} className="contact-animate">
            <p className="mb-1 text-[11px] font-semibold tracking-[0.14em] text-muted uppercase">
              {item.label}
            </p>
            <a
              href={item.href}
              target={item.label === "Web" ? "_blank" : undefined}
              rel={item.label === "Web" ? "noopener noreferrer" : undefined}
              className="text-[14px] font-semibold text-foreground transition-opacity hover:opacity-60 md:text-[15px]"
            >
              {item.value}
              {item.label === "Web" && " ↗"}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
