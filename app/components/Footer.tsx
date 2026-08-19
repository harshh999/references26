export default function Footer() {
  return (
    <footer className="w-full bg-background pt-24 pb-12 border-t border-black/5 mt-12">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          
          <div className="max-w-md">
            <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-4">
              Have a project in mind?
            </h2>
            <p className="text-muted text-[15px] leading-relaxed mb-8">
              Let's build your next digital experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="mailto:lazlleandco@gmail.com" className="text-sm font-medium text-foreground hover:text-muted transition-colors border-b border-black/10 pb-1">
                lazlleandco@gmail.com
              </a>
              <a href="https://www.lazlle.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-foreground hover:text-muted transition-colors border-b border-black/10 pb-1">
                www.lazlle.com
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-1 items-start md:items-end w-full md:w-auto">
            <span className="text-[11px] font-semibold tracking-wider text-foreground uppercase">
              LAZZLE & CO PRODUCTIONS
            </span>
            <span className="text-xs text-muted mb-6 md:mb-2">
              Ahmedabad, India / Working Globally
            </span>
            <span className="text-xs text-muted font-medium">
              © 2026 Lazlle & Co
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
}
