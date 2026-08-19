import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies from Brandon Harding — Toddly, an LLM billing agent, Storybook Studio, and selected Surmount client work.",
  alternates: {
    canonical: "/work",
  },
};

export default function WorkPage() {
  return (
    <main id="main" className="flex-1">
      <section className="border-b border-border">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <SectionHeading
            eyebrow="Case studies"
            title="Work worth a closer look"
            description="Toddly and the billing agent first. Then Storybook Studio and selected client systems."
          />
        </div>
      </section>
      <section>
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
