import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Setpoint AI — AI-Powered Workout Planning",
  description:
    "Setpoint AI uses artificial intelligence to build personalized workout plans, track your training, and help you progress — all from your phone.",
  alternates: {
    canonical: "/setpoint",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const features = [
  {
    title: "AI-Generated Workouts",
    description:
      "Tell Setpoint your goals, available equipment, and schedule. The AI builds a personalized workout for each training day — strength, cardio, or both.",
  },
  {
    title: "Track Every Set & Rep",
    description:
      "Log exercises, sets, reps, weight, and RPE in real time. Cardio entries capture duration, distance, and pace. Your planned workout stays side-by-side with what you actually do.",
  },
  {
    title: "Weekly Schedule",
    description:
      "Define which days you train and what type of session each day is. Setpoint uses your schedule to recommend the right workout at the right time.",
  },
  {
    title: "Progress & History",
    description:
      "Review past workouts, see volume trends over time, and track your consistency — all in one place.",
  },
  {
    title: "Import Workouts",
    description:
      "Already have a program? Import workout data so you can pick up right where you left off.",
  },
  {
    title: "Works on iOS & Android",
    description:
      "Built with React Native and available on both platforms. Your data syncs across devices through your account.",
  },
];

export default function SetpointMarketingPage() {
  return (
    <main id="main" className="flex-1">
      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto w-full max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-accent">
            Setpoint AI
          </p>
          <h1 className="mt-3 font-display text-3xl tracking-tight text-foreground sm:text-4xl">
            Your AI training partner.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-muted">
            Setpoint AI builds personalized workouts based on your goals,
            equipment, and weekly schedule — then tracks every set so you can
            see your progress over time.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/setpoint/support"
              className="inline-flex h-11 items-center rounded-full border border-border px-5 text-sm text-foreground transition-colors hover:border-accent/50 hover:bg-surface"
            >
              Support
            </Link>
            <Link
              href="/setpoint/privacy"
              className="inline-flex h-11 items-center rounded-full border border-border px-5 text-sm text-muted transition-colors hover:border-accent/50 hover:bg-surface hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="/setpoint/terms"
              className="inline-flex h-11 items-center rounded-full border border-border px-5 text-sm text-muted transition-colors hover:border-accent/50 hover:bg-surface hover:text-foreground"
            >
              Terms of Service
            </Link>
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
          <h2 className="text-lg font-semibold text-foreground">
            Questions?
          </h2>
          <p className="mt-3 text-base leading-7 text-muted">
            Setpoint AI is built and maintained by {site.name}. If you have
            questions, feedback, or run into any issues, reach out at{" "}
            <a
              href={`mailto:${site.email}?subject=Setpoint%20AI`}
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
