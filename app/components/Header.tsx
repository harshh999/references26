"use client";

import { useEffect, useState } from "react";
import { categories } from "@/app/data/references";

export default function Header() {
  const [activeSection, setActiveSection] = useState("");

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    categories.forEach((cat) => {
      const el = document.getElementById(cat.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F4F3EF]/95 backdrop-blur-sm border-b border-black/5 py-4">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-xs font-semibold tracking-wider uppercase text-foreground">
          LAZZLE & CO / REFERENCES
        </div>
        <nav className="flex gap-6 md:gap-8 overflow-x-auto w-full md:w-auto scrollbar-none justify-center md:justify-end">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => scrollTo(cat.id)}
              className={`text-[13px] tracking-wide transition-colors whitespace-nowrap ${
                activeSection === cat.id ? "text-foreground font-medium" : "text-muted hover:text-foreground/80"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
