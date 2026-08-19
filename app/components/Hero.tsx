"use client";

export default function Hero() {
  return (
    <section className="relative w-full bg-background pt-[80px] pb-[100px]">
      <div className="mx-auto w-full max-w-[1400px] px-[24px] md:px-[64px] text-left">
        <p className="text-[11px] font-semibold tracking-[0.15em] text-muted uppercase mb-4">
          LAZZLE & CO / REFERENCES
        </p>
        <h1 
          className="text-foreground font-medium mb-[28px]" 
          style={{ fontSize: "clamp(48px, 6vw, 96px)", letterSpacing: "-0.045em", lineHeight: 0.95, maxWidth: "900px" }}
        >
          Selected digital references.
        </h1>
        <p 
          className="text-muted font-normal" 
          style={{ fontSize: "clamp(18px, 1.5vw, 24px)", lineHeight: 1.5, maxWidth: "650px" }}
        >
          A curated collection of digital experiences across drinks, wine, beer and coffee — selected for their design, storytelling and brand presence.
        </p>
      </div>
    </section>
  );
}
