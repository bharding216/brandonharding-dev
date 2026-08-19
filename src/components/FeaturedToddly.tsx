import Link from "next/link";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { PhoneRow, ProjectMedia } from "@/components/ProjectMedia";
import { SectionHeading } from "@/components/SectionHeading";
import { TechChips } from "@/components/TechChips";
import {
  browserImages,
  getHomepageProject,
  phoneImages,
} from "@/content/projects";

export function FeaturedToddly() {
  const project = getHomepageProject("toddly");
  const desktop = browserImages(project);
  const [primary, ...rest] = desktop;
  const phones = phoneImages(project);

  return (
    <section id="work" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow={project.eyebrow}
          title={project.title}
          description={project.summary}
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-5">
          {primary ? (
            <ProjectMedia
              className="lg:col-span-3"
              image={primary}
              url={project.liveLabel}
              sizes="(min-width: 1024px) 55vw, 100vw"
            />
          ) : null}
          <div className="grid gap-4 lg:col-span-2">
            {rest.map((image) => (
              <ProjectMedia
                key={image.src}
                image={image}
                sizes="(min-width: 1024px) 28vw, 100vw"
              />
            ))}
          </div>
        </div>

        {phones.length > 0 ? (
          <div className="mt-12">
            <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              Parent app
            </p>
            <PhoneRow images={phones} />
          </div>
        ) : null}

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-base leading-7 text-foreground/90">
              {project.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center rounded-full bg-accent px-5 text-sm font-medium text-background transition-colors hover:bg-accent-hover"
                >
                  Live site
                </a>
              ) : null}
              <Link
                href={`/work/${project.slug}`}
                className="inline-flex h-11 items-center rounded-full border border-border px-5 text-sm text-foreground transition-colors hover:border-accent/50 hover:bg-surface"
              >
                Read case study
              </Link>
            </div>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              Tech stack
            </p>
            <div className="mt-4">
              <TechChips items={project.stack} />
            </div>
          </div>
        </div>

        <div className="mt-14">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Architecture
          </p>
          <div className="mt-5">
            <ArchitectureDiagram
              layers={project.architecture.layers}
              caption={project.architecture.caption}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
