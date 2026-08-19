interface ReferenceCardProps {
  name: string;
  url: string;
  category: string;
  image: string;
  index: number;
}

export default function ReferenceCard({
  name,
  url,
  category,
  image,
  index,
}: ReferenceCardProps) {
  const formattedIndex = String(index).padStart(2, "0");

  return (
    <div className="flex flex-col group w-full">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative overflow-hidden bg-surface mb-5 w-full aspect-[4/3] group-hover:opacity-95 transition-opacity"
        aria-label={`Visit ${name}`}
      >
        <img
          src={image}
          alt={`${name} preview`}
          loading="lazy"
          className="w-full h-full object-cover object-top origin-center pointer-events-none transition-transform duration-700 group-hover:scale-[1.02]"
        />
      </a>

      <div className="flex items-start justify-between w-full">
        <div className="flex items-start gap-4">
          <span className="text-[11px] font-medium tracking-widest text-muted mt-[3px]">
            {formattedIndex}
          </span>
          <div className="flex flex-col">
            <h3 className="text-[15px] font-medium text-foreground transition-colors group-hover:text-foreground/80">
              {name}
            </h3>
            <span className="text-[13px] text-muted mt-1">
              {category}
            </span>
          </div>
        </div>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 shrink-0 text-[12px] font-medium text-muted hover:text-foreground transition-colors mt-0.5"
        >
          <span>Visit</span>
          <span className="leading-none transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </div>
  );
}
