import Link from "next/link";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {site.name}
        </p>
        <div className="flex flex-wrap gap-5 text-sm text-muted">
          <Link href="/work" className="hover:text-foreground">
            Work
          </Link>
          <Link href="/pacecue" className="hover:text-foreground">
            PaceCue
          </Link>
          <Link href="/setpoint" className="hover:text-foreground">
            Setpoint AI
          </Link>
          <a
            href={site.github.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href={site.linkedin.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            LinkedIn
          </a>
          <a href={`mailto:${site.email}`} className="hover:text-foreground">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
