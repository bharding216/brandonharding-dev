import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Setpoint AI — Support",
  description:
    "Get help with Setpoint AI, an AI-powered workout planning and tracking app. FAQs and contact info.",
  alternates: {
    canonical: "/setpoint/support",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const faqs = [
  {
    question: "How does the AI workout recommendation work?",
    answer:
      "Setpoint looks at your training preferences, available equipment, weekly schedule, and recent workout history. It sends this context to an AI model that generates a personalized workout plan for the day — including exercises, sets, reps, and suggested weights.",
  },
  {
    question: "Do I need an account to use Setpoint AI?",
    answer:
      "Yes. Setpoint requires an account so your workouts, preferences, and progress can sync across devices and persist between sessions.",
  },
  {
    question: "Can I log a workout without using the AI?",
    answer:
      'Absolutely. Tap "Start Blank Workout" on the Today screen to begin an empty session and add exercises manually as you go.',
  },
  {
    question: "How do I set my training preferences?",
    answer:
      "Go to Settings and add your goals, equipment availability, and any other preferences. The AI uses these to tailor its recommendations.",
  },
  {
    question: "Can I edit a workout after it's generated?",
    answer:
      "Yes. Once the AI generates a plan you can add, remove, or reorder exercises and adjust sets, reps, and weight before or during your workout.",
  },
  {
    question: "Does Setpoint track cardio?",
    answer:
      "Yes. You can log cardio exercises with duration, distance, pace, and heart rate alongside your strength work.",
  },
  {
    question: "How do I import an existing program?",
    answer:
      "Use the Import screen to upload workout data. Setpoint will parse the file and add the exercises to your history.",
  },
  {
    question: "Is my data backed up?",
    answer:
      "All workout data is stored securely in the cloud via your account. As long as you're signed in, your data is safe and accessible from any device.",
  },
  {
    question: "How do I delete my account and data?",
    answer:
      "Email us at the address below and we will process your deletion request. All associated workout data, preferences, and account information will be permanently removed.",
  },
];

export default function SetpointSupportPage() {
  return (
    <main id="main" className="flex-1">
      <section className="border-b border-border">
        <div className="mx-auto w-full max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
          <Link
            href="/setpoint"
            className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-accent hover:text-accent-hover transition-colors"
          >
            ← Setpoint AI
          </Link>
          <h1 className="mt-3 font-display text-3xl tracking-tight text-foreground sm:text-4xl">
            Support
          </h1>
          <p className="mt-4 text-base leading-7 text-muted">
            Need help with Setpoint AI? Check the FAQs below or reach out
            directly.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="border-b border-border">
        <div className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
          <h2 className="text-lg font-semibold text-foreground">
            Frequently Asked Questions
          </h2>
          <dl className="mt-6 divide-y divide-border">
            {faqs.map((faq) => (
              <div key={faq.question} className="py-5 first:pt-0 last:pb-0">
                <dt className="text-sm font-medium text-foreground">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-sm leading-6 text-muted">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Contact */}
      <section>
        <div className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
          <h2 className="text-lg font-semibold text-foreground">
            Get in Touch
          </h2>
          <p className="mt-3 text-base leading-7 text-muted">
            If the FAQs didn&apos;t answer your question, email me at{" "}
            <a
              href={`mailto:${site.email}?subject=Setpoint%20AI%20Support`}
              className="text-accent hover:text-accent-hover transition-colors"
            >
              {site.email}
            </a>{" "}
            and I&apos;ll get back to you as soon as I can.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`mailto:${site.email}?subject=Setpoint%20AI%20Support`}
              className="inline-flex h-11 items-center rounded-full border border-border px-5 text-sm text-foreground transition-colors hover:border-accent/50 hover:bg-surface"
            >
              Email Support
            </a>
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
    </main>
  );
}
