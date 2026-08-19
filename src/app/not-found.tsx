import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="flex flex-1 items-center">
      <div className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
          404
        </p>
        <h1 className="mt-4 font-display text-4xl tracking-tight">
          Page not found
        </h1>
        <p className="mt-4 max-w-md text-muted">
          That route does not exist. Head back to the homepage or the case
          studies.
        </p>
        <div className="mt-8 flex gap-3">
          <Link
            href="/"
            className="inline-flex h-11 items-center rounded-full bg-accent px-5 text-sm font-medium text-background hover:bg-accent-hover"
          >
            Home
          </Link>
          <Link
            href="/work"
            className="inline-flex h-11 items-center rounded-full border border-border px-5 text-sm hover:bg-surface"
          >
            Work
          </Link>
        </div>
      </div>
    </main>
  );
}
