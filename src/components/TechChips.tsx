type TechChipsProps = {
  items: readonly string[];
  size?: "sm" | "md";
};

export function TechChips({ items, size = "md" }: TechChipsProps) {
  const classes =
    size === "sm"
      ? "px-2.5 py-1 text-[11px]"
      : "px-3 py-1.5 text-xs";

  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className={`rounded-full border border-border bg-surface font-mono text-muted ${classes}`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
