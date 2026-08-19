import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/content/site";

const contacts = [
  {
    label: site.github.label,
    href: site.github.href,
    value: site.github.handle,
  },
  {
    label: site.linkedin.label,
    href: site.linkedin.href,
    value: site.linkedin.handle,
  },
  {
    label: "Email",
    href: `mailto:${site.email}`,
    value: site.email,
  },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s talk"
          description="Hiring managers and founders — the fastest path is email or LinkedIn."
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          {contacts.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                {...(item.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="block h-full rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/40 hover:bg-surface-hover"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                  {item.label}
                </p>
                <p className="mt-3 text-sm text-foreground">{item.value}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
