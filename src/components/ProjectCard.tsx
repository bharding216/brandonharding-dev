import Link from "next/link";
import { ProjectMedia } from "@/components/ProjectMedia";
import { TechChips } from "@/components/TechChips";
import { browserImages, type Project } from "@/content/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const image = browserImages(project)[0] ?? project.images[0];

  return (
    <article className="grid gap-6 border-b border-border py-12 last:border-b-0 last:pb-0 sm:grid-cols-[1fr_1.1fr] sm:items-center lg:gap-12">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
          {project.eyebrow}
        </p>
        <h2 className="mt-3 font-display text-3xl tracking-tight">
          <Link href={`/work/${project.slug}`} className="hover:text-accent">
            {project.title}
          </Link>
        </h2>
        <p className="mt-3 text-sm text-muted">{project.tagline}</p>
        <p className="mt-4 text-sm leading-7 text-foreground/85">
          {project.summary}
        </p>
        <div className="mt-5">
          <TechChips items={project.stack.slice(0, 5)} size="sm" />
        </div>
        <Link
          href={`/work/${project.slug}`}
          className="mt-6 inline-flex text-sm text-accent hover:text-accent-hover"
        >
          Case study →
        </Link>
      </div>
      {image ? (
        <Link href={`/work/${project.slug}`} className="block">
          <ProjectMedia
            image={image}
            url={project.liveLabel}
            sizes="(min-width: 640px) 45vw, 100vw"
          />
        </Link>
      ) : null}
    </article>
  );
}
