"use client";

import { useRef } from "react";
import gsap from "gsap";

interface ReferenceCardProps {
  name: string;
  url: string;
  category: string;
  image: string;
  index: number;
  variant?: "feature" | "standard" | "mini";
}

export default function ReferenceCard({
  name,
  url,
  category,
  image,
  index,
  variant = "standard",
}: ReferenceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const formattedIndex = String(index).padStart(2, "0");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    const image = imageRef.current;
    if (!card || !image) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xc = rect.width / 2;
    const yc = rect.height / 2;

    const dx = (x - xc) / xc;
    const dy = (y - yc) / yc;

    gsap.to(image, {
      x: dx * 18,
      y: dy * 18,
      scale: 1.06,
      duration: 0.6,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const handleMouseLeave = () => {
    const image = imageRef.current;
    if (!image) return;

    gsap.to(image, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  // Setup styles and layout aspect ratios based on variant
  let containerStyles = "ref-card group flex flex-col w-full relative z-10 transition-all duration-500 mb-8 ";
  let imageAspect = "aspect-[16/10]";

  if (variant === "feature") {
    containerStyles += "col-span-1 md:col-span-2 lg:col-span-3 max-w-[1280px] mx-auto";
    imageAspect = "aspect-[21/9] md:aspect-[21/9]";
  } else if (variant === "mini") {
    containerStyles += "col-span-1 max-w-[420px] asym-offset-y-1";
    imageAspect = "aspect-[3/4]";
  } else {
    containerStyles += "col-span-1 max-w-[620px]";
    imageAspect = "aspect-[4/3]";
  }

  return (
    <div
      ref={cardRef}
      className={containerStyles}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image Wrap */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`block relative overflow-hidden bg-[#D8D5CE] w-full ${imageAspect}`}
        aria-label={`Visit ${name}`}
      >
        <div className="absolute inset-0 bg-[#1d2023]/0 transition-colors duration-700 ease-out group-hover:bg-[#1d2023]/[0.02] z-10" />
        <img
          ref={imageRef}
          src={image}
          alt={`${name} preview`}
          loading="lazy"
          className="w-full h-full object-cover object-top origin-center pointer-events-none"
        />
      </a>

      {/* Info Details */}
      <div className="flex flex-col pt-4 pb-2 border-b border-border/40">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <span className="text-[10px] font-medium tracking-widest text-muted/65 select-none pt-0.5">
              {formattedIndex}
            </span>
            <div className="flex flex-col">
              <h3 className="text-[14px] md:text-[15px] font-medium leading-tight text-foreground transition-all duration-300 group-hover:translate-x-1">
                {name}
              </h3>
              <span className="text-[9px] font-semibold tracking-[0.16em] text-muted uppercase mt-1">
                {category}
              </span>
            </div>
          </div>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 shrink-0 text-[10px] font-semibold text-foreground uppercase tracking-[0.14em] select-none"
          >
            <span>Visit Site</span>
            <span className="text-[12px] leading-none transition-transform duration-300 translate-x-0 group-hover:translate-x-2">
              →
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
