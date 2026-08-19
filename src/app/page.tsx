import Link from "next/link";
import { BillingAgent } from "@/components/BillingAgent";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { FeaturedToddly } from "@/components/FeaturedToddly";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main id="main" className="flex-1">
      <Hero />
      <FeaturedToddly />
      <BillingAgent />
      <section className="border-b border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 px-5 py-12 sm:flex-row sm:items-center sm:px-8">
          <p className="text-sm leading-6 text-muted">
            Storybook Studio and other client work live on the case studies page.
          </p>
          <Link
            href="/work"
            className="inline-flex h-11 items-center rounded-full border border-border px-5 text-sm text-foreground transition-colors hover:border-accent/50 hover:bg-surface"
          >
            All case studies
          </Link>
        </div>
      </section>
      <Experience />
      <Contact />
    </main>
  );
}
