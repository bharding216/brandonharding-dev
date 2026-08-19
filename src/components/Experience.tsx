import { SectionHeading } from "@/components/SectionHeading";
import { experience } from "@/content/experience";
import { site } from "@/content/site";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="Experience"
          title="A short professional timeline"
          description="Five-plus years building and operating SaaS, APIs, and cloud platforms — plus earlier data science and ML work."
        />
        <ol className="mt-12 space-y-0">
          {experience.map((item) => (
            <li
              key={item.company}
              className="relative grid gap-3 border-l border-border py-6 pl-8 last:pb-0 sm:grid-cols-[220px_1fr] sm:gap-10"
            >
              <span
                className="absolute top-8 left-[-4px] size-2 rounded-full bg-accent"
                aria-hidden="true"
              />
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                  {item.period}
                </p>
                <p className="mt-2 text-sm text-foreground">{item.company}</p>
                <p className="text-sm text-muted">{item.role}</p>
              </div>
              <p className="text-sm leading-7 text-foreground/85">
                {item.summary}
              </p>
            </li>
          ))}
        </ol>
        <div className="mt-12 grid gap-3 border-t border-border pt-8 text-sm text-muted sm:grid-cols-2">
          {site.education.map((item) => (
            <p key={item}>{item}</p>
          ))}
          {site.credentials.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
