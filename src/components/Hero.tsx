import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="animate-fade-up font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-accent">
          {site.location}
        </p>
        <h1 className="animate-fade-up delay-1 mt-5 font-display text-5xl leading-[1.05] tracking-tight text-foreground sm:text-7xl">
          {site.name}
        </h1>
        <p className="animate-fade-up delay-2 mt-5 max-w-xl text-lg text-foreground/90 sm:text-xl">
          {site.title}
        </p>
        <p className="animate-fade-up delay-2 mt-4 max-w-2xl text-base leading-7 text-muted">
          {site.summary}
        </p>
        <p className="animate-fade-up delay-3 mt-8 font-mono text-xs tracking-wide text-muted sm:text-sm">
          {site.stack.join(" · ")}
        </p>
        <div className="animate-fade-up delay-3 mt-10 flex flex-wrap gap-3">
          <a
            href="#work"
            className="inline-flex h-11 items-center rounded-full bg-accent px-5 text-sm font-medium text-background transition-colors hover:bg-accent-hover"
          >
            View work
          </a>
          <a
            href={site.linkedin.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center rounded-full border border-border px-5 text-sm text-foreground transition-colors hover:border-accent/50 hover:bg-surface"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex h-11 items-center rounded-full border border-border px-5 text-sm text-foreground transition-colors hover:border-accent/50 hover:bg-surface"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
