import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { PhoneRow, ProjectMedia } from "@/components/ProjectMedia";
import { TechChips } from "@/components/TechChips";
import {
  browserImages,
  getProject,
  phoneImages,
  projects,
} from "@/content/projects";

type WorkPageProps = PageProps<"/work/[slug]">;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Work" };
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `/work/${project.slug}`,
    },
  };
}

export default async function WorkDetailPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const desktop = browserImages(project);
  const phones = phoneImages(project);

  return (
    <main id="main" className="flex-1">
      <article>
        <header className="border-b border-border">
          <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              {project.eyebrow}
            </p>
            <h1 className="mt-4 font-display text-4xl tracking-tight sm:text-6xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted">{project.tagline}</p>
            <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em]">
                  Role
                </dt>
                <dd className="mt-1 text-foreground">{project.role}</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em]">
                  Period
                </dt>
                <dd className="mt-1 text-foreground">{project.period}</dd>
              </div>
              {project.liveUrl ? (
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.16em]">
                    Live
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent-hover"
                    >
                      {project.liveLabel ?? project.liveUrl}
                    </a>
                  </dd>
                </div>
              ) : null}
            </dl>
          </div>
        </header>

        <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
          <div className="grid gap-4 md:grid-cols-2">
            {desktop.map((image) => (
              <ProjectMedia
                key={image.src}
                image={image}
                url={project.liveLabel}
                className={desktop.length === 1 ? "md:col-span-2" : ""}
                sizes={
                  desktop.length === 1
                    ? "100vw"
                    : "(min-width: 768px) 45vw, 100vw"
                }
              />
            ))}
          </div>
          {phones.length > 0 ? (
            <div className="mt-12">
              <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Parent app
              </p>
              <PhoneRow images={phones} />
            </div>
          ) : null}

          <div className="mt-14 max-w-3xl">
            <h2 className="font-display text-2xl tracking-tight">Overview</h2>
            <p className="mt-4 text-base leading-7 text-foreground/90">
              {project.description}
            </p>
          </div>

          <div className="mt-14">
            <h2 className="font-display text-2xl tracking-tight">Outcomes</h2>
            <ul className="mt-5 max-w-3xl space-y-3">
              {project.outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="flex gap-3 text-sm leading-7 text-foreground/90"
                >
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  {outcome}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-14">
            <h2 className="font-display text-2xl tracking-tight">Architecture</h2>
            <div className="mt-6">
              <ArchitectureDiagram
                layers={project.architecture.layers}
                caption={project.architecture.caption}
              />
            </div>
          </div>

          <div className="mt-14">
            <h2 className="font-display text-2xl tracking-tight">Tech stack</h2>
            <div className="mt-5">
              <TechChips items={project.stack} />
            </div>
          </div>

          <div className="mt-16 flex flex-wrap gap-4 border-t border-border pt-8">
            <Link
              href="/work"
              className="text-sm text-muted hover:text-foreground"
            >
              ← All case studies
            </Link>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:text-accent-hover"
              >
                Visit live site →
              </a>
            ) : null}
          </div>
        </div>
      </article>
    </main>
  );
}
