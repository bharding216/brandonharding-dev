import Image from "next/image";
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
        <div className="flex items-center gap-5 sm:gap-7">
          <div className="shrink-0 rounded-full border border-accent/40 p-[3px]">
            <div className="relative size-28 overflow-hidden rounded-full sm:size-36">
              <Image
                src={site.headshot.src}
                alt={site.headshot.alt}
                fill
                className="object-cover object-[center_18%]"
                sizes="144px"
              />
            </div>
          </div>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s talk"
            description="Hiring managers and founders — the fastest path is email or LinkedIn."
          />
        </div>
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
