import Link from "next/link";
import { PhoneFrame } from "@/components/PhoneFrame";
import { SectionHeading } from "@/components/SectionHeading";

const apps = [
  {
    name: "PaceCue",
    tagline: "Interval running, your way.",
    description:
      "A customizable interval timer for runners. Build structured workouts with warm-ups, hard/easy blocks, and cool-downs — then let audio and haptic cues keep you on pace.",
    href: "/pacecue",
    stack: ["React Native", "Expo", "TypeScript"],
    screenshot: {
      src: "/images/pacecue/workouts-home.png",
      alt: "PaceCue workouts list showing 5K Speed, Tempo Run, and Short Intervals",
      caption: "Workout library",
    },
  },
  {
    name: "Setpoint AI",
    tagline: "Your AI training partner.",
    description:
      "AI-powered workout planning that builds personalized sessions based on your goals, equipment, and weekly schedule — then tracks every set so you can see progress over time.",
    href: "/setpoint",
    stack: ["React Native", "Expo", "TypeScript", "AI"],
    screenshot: {
      src: "/images/setpoint/today.png",
      alt: "Setpoint AI today view showing an AI-planned Full Body Strength and Cardio workout",
      caption: "AI-planned workout",
    },
  },
];

export function MobileApps() {
  return (
    <section id="apps" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="Mobile apps"
          title="Side projects on the App Store"
          description="Two React Native apps I designed, built, and shipped — interval training for runners and AI-powered workout planning."
        />

        <div className="mt-14 grid gap-16 lg:grid-cols-2 lg:gap-12">
          {apps.map((app) => (
            <div
              key={app.name}
              className="grid gap-8 sm:grid-cols-[auto_1fr] sm:items-start"
            >
              <div className="mx-auto w-[180px] sm:mx-0">
                <PhoneFrame
                  src={app.screenshot.src}
                  alt={app.screenshot.alt}
                  caption={app.screenshot.caption}
                />
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                  {app.name}
                </p>
                <p className="mt-2 font-display text-xl tracking-tight text-foreground">
                  {app.tagline}
                </p>
                <p className="mt-3 text-sm leading-7 text-foreground/85">
                  {app.description}
                </p>
                <p className="mt-4 font-mono text-[11px] tracking-wide text-muted">
                  {app.stack.join(" · ")}
                </p>
                <Link
                  href={app.href}
                  className="mt-5 inline-flex h-10 items-center rounded-full border border-border px-5 text-sm text-foreground transition-colors hover:border-accent/50 hover:bg-surface"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
