'use client';

export default function Hero() {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] w-full px-6 md:px-12 py-24 md:py-32 flex flex-col justify-center border-b border-surface-variant"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-12 gap-6 relative z-10">
        <div className="col-span-12 md:col-start-2 md:col-span-10">
          <p className="font-mono text-xs text-accent mb-4 tracking-widest animate-fade-in-up">
            INITIALIZING // 01
          </p>
          <h1
            className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white uppercase tracking-tighter leading-none mb-12 animate-fade-in-up"
            style={{ fontFamily: 'var(--font-eb-garamond, EB Garamond, serif)' }}
          >
            VASU<br />GOEL
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Tagline Card */}
            <div className="card-border p-8 relative flex flex-col justify-between animate-fade-in-up min-h-[260px]">
              <span className="absolute top-0 right-0 p-3 font-mono text-[10px] text-surface-variant">001</span>
              <p
                className="text-lg sm:text-xl text-white font-heading leading-tight mb-8"
                style={{ fontFamily: 'var(--font-eb-garamond, EB Garamond, serif)' }}
              >
                Building production-grade applications spanning web platforms, desktop apps, and AI-powered tools.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={scrollToProjects}
                  className="btn-primary text-xs font-mono font-bold px-6 py-3"
                  id="cta-projects"
                >
                  VIEW PROJECTS
                </button>
                <button
                  onClick={scrollToContact}
                  className="btn-secondary text-xs font-mono font-bold px-6 py-3"
                  id="cta-contact"
                >
                  GET IN TOUCH
                </button>
              </div>
            </div>

            {/* Decorative Structural Frame */}
            <div className="hidden md:block relative min-h-[260px] animate-fade-in-up">
              {/* Offset border effect */}
              <div className="absolute inset-0 border border-dashed border-surface-variant opacity-40 translate-x-4 -translate-y-4 pointer-events-none" />
              <div className="absolute inset-0 card-border opacity-30 border-r-0 border-b-0 translate-x-8 -translate-y-8 pointer-events-none" />
              
              <div className="absolute bottom-0 right-0 p-6 bg-[#171717] card-border flex flex-col gap-1 min-w-[200px]">
                <p className="font-mono text-[11px] text-accent flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-accent animate-pulse inline-block" />
                  STATUS: AVAILABLE
                </p>
                <p className="font-mono text-[11px] text-muted">
                  LOC: REMOTE / BLR
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Abstract background border design elements */}
      <div className="absolute top-1/4 right-0 w-1/4 h-1/2 border-l border-t border-surface-variant/30 pointer-events-none" />
    </section>
  );
}
