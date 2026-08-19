import type { ArchitectureLayer } from "@/content/projects";

type ArchitectureDiagramProps = {
  layers: ArchitectureLayer[];
  caption?: string;
};

export function ArchitectureDiagram({
  layers,
  caption,
}: ArchitectureDiagramProps) {
  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {layers.map((layer, index) => (
          <div key={layer.name} className="relative">
            {index < layers.length - 1 ? (
              <div
                className="pointer-events-none absolute top-1/2 right-[-10px] z-10 hidden h-px w-5 bg-border lg:block"
                aria-hidden="true"
              />
            ) : null}
            <div className="h-full rounded-xl border border-border bg-surface p-4">
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
                {layer.name}
              </p>
              <ul className="mt-3 space-y-1.5">
                {layer.items.map((item) => (
                  <li key={item} className="text-sm leading-6 text-foreground/90">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      {caption ? (
        <p className="mt-4 text-sm leading-6 text-muted">{caption}</p>
      ) : null}
    </div>
  );
}
