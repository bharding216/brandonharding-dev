import Link from "next/link";
import { ProjectMedia } from "@/components/ProjectMedia";
import { SectionHeading } from "@/components/SectionHeading";
import { TechChips } from "@/components/TechChips";
import { getHomepageProject } from "@/content/projects";

export function BillingAgent() {
  const project = getHomepageProject("billing-agent");
  const image = project.images[0];

  return (
    <section id="ai" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow={project.eyebrow}
            title={project.title}
            description={project.tagline}
          />
          <p className="mt-6 text-base leading-7 text-foreground/90">
            {project.description}
          </p>
          <div className="mt-6">
            <TechChips items={project.stack} size="sm" />
          </div>
          <Link
            href={`/work/${project.slug}`}
            className="mt-8 inline-flex h-11 items-center rounded-full border border-border px-5 text-sm text-foreground transition-colors hover:border-accent/50 hover:bg-surface"
          >
            How the agent works
          </Link>
        </div>
        {image ? (
          <ProjectMedia
            image={image}
            url="billing agent"
            sizes="(min-width: 1024px) 45vw, 100vw"
          />
        ) : null}
      </div>
    </section>
  );
}
