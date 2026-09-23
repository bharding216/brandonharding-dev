import type { Metadata } from "next";
import Link from "next/link";
import { PhoneFrame } from "@/components/PhoneFrame";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "PaceCue — Interval Running, Your Way",
  description:
    "PaceCue is a customizable interval timer for runners. Build structured workouts with warm-ups, hard/easy blocks, and cool-downs — then let audio and haptic cues keep you on pace.",
  alternates: {
    canonical: "/pacecue",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const features = [
  {
    title: "Custom Interval Workouts",
    description:
      "Build structured workouts with warm-up, hard/easy interval blocks, and cool-down phases. Set repeats per block and fine-tune every duration.",
  },
  {
    title: "Audio & Haptic Cues",
    description:
      "Choose beeps, voice announcements, or both. Haptic feedback vibrates on every interval change so you never need to look at your phone.",
  },
  {
    title: "Countdown Warnings",
    description:
      "Get a warning cue before each interval ends — 3s, 5s, 10s, 15s, or 30s — so you can prepare for what's next.",
  },
  {
    title: "Interval Progress Updates",
    description:
      "Hear elapsed time announced during each interval. Requires Voice or Both audio mode.",
  },
  {
    title: "Screen Always On",
    description:
      "Keep the display on during workouts so you can glance at the timer without waking your phone.",
  },
  {
    title: "Works Offline",
    description:
      "PaceCue runs entirely on your device. No account, no internet connection required — just open and go.",
  },
];

const screenshots = [
  {
    src: "/images/pacecue/workouts-home.png",
    alt: "PaceCue workouts list showing 5K Speed, Tempo Run, and Short Intervals",
    caption: "Workouts — your library of interval sessions",
  },
  {
    src: "/images/pacecue/edit-workout.png",
    alt: "PaceCue edit workout screen with warm up, interval blocks, and cool down",
    caption: "Editor — warm-up, intervals, and cool-down",
  },
  {
    src: "/images/pacecue/active-workout.png",
    alt: "PaceCue active workout timer showing warm up countdown at 9:57",
    caption: "Active — live countdown with interval cues",
  },
  {
    src: "/images/pacecue/settings.png",
    alt: "PaceCue settings for audio cues, haptic feedback, countdown warnings, and display",
    caption: "Settings — audio, haptics, and display",
  },
];

export default function PaceCueMarketingPage() {
  return (
    <main id="main" className="flex-1">
      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto w-full max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-accent">
            PaceCue
          </p>
          <h1 className="mt-3 font-display text-3xl tracking-tight text-foreground sm:text-4xl">
            Interval running, your way.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-muted">
            PaceCue is a customizable interval timer for runners. Build
            structured workouts with warm-ups, hard/easy blocks, and
            cool-downs — then let audio and haptic cues keep you on pace.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/pacecue/support"
              className="inline-flex h-11 items-center rounded-full border border-border px-5 text-sm text-foreground transition-colors hover:border-accent/50 hover:bg-surface"
            >
              Support
            </Link>
            <Link
              href="/pacecue/privacy"
              className="inline-flex h-11 items-center rounded-full border border-border px-5 text-sm text-muted transition-colors hover:border-accent/50 hover:bg-surface hover:text-foreground"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="border-b border-border">
        <div className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
          <h2 className="text-lg font-semibold text-foreground">Screenshots</h2>
          <div className="mt-8 grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4">
            {screenshots.map((shot) => (
              <PhoneFrame
                key={shot.src}
                src={shot.src}
                alt={shot.alt}
                caption={shot.caption}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-b border-border">
        <div className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
          <h2 className="text-lg font-semibold text-foreground">Features</h2>
          <dl className="mt-6 grid gap-8 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.title}>
                <dt className="text-sm font-medium text-foreground">
                  {feature.title}
                </dt>
                <dd className="mt-2 text-sm leading-6 text-muted">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Contact / CTA */}
      <section>
        <div className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
          <h2 className="text-lg font-semibold text-foreground">Questions?</h2>
          <p className="mt-3 text-base leading-7 text-muted">
            PaceCue is built and maintained by {site.name}. If you have
            questions, feedback, or run into any issues, reach out at{" "}
            <a
              href={`mailto:${site.email}?subject=PaceCue`}
              className="text-accent hover:text-accent-hover transition-colors"
            >
              {site.email}
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
