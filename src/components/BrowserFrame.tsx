import type { ReactNode } from "react";

type BrowserFrameProps = {
  url?: string;
  label?: string;
  children: ReactNode;
  className?: string;
};

export function BrowserFrame({
  url,
  label,
  children,
  className = "",
}: BrowserFrameProps) {
  return (
    <figure
      className={`overflow-hidden rounded-xl border border-border bg-surface shadow-[0_24px_80px_-32px_rgba(0,0,0,0.7)] ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-border px-3 py-2.5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-2 rounded-full bg-[#c26b5a]/80" />
          <span className="size-2 rounded-full bg-[#c9a36a]/80" />
          <span className="size-2 rounded-full bg-[#6f8f6a]/80" />
        </div>
        {url ? (
          <div className="min-w-0 flex-1 truncate rounded-md bg-background/70 px-3 py-1 text-center font-mono text-[11px] text-muted">
            {url}
          </div>
        ) : (
          <div className="flex-1" />
        )}
      </div>
      <div className="relative">{children}</div>
      {label ? (
        <figcaption className="border-t border-border px-3 py-2 font-mono text-[11px] text-muted">
          {label}
        </figcaption>
      ) : null}
    </figure>
  );
}
