import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "PaceCue — Support",
  description:
    "Get help with PaceCue, a simple interval cue running app. FAQs and contact info.",
  alternates: {
    canonical: "/pacecue/support",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const faqs = [
  {
    question: "How do I set up an interval workout?",
    answer:
      "Open PaceCue, choose your interval and rest durations, set the number of rounds, and tap Start. Audio and haptic cues will tell you when to switch.",
  },
  {
    question: "Can I customize the cue sounds?",
    answer:
      "Yes — go to Settings to pick from the available cue sounds and adjust the volume independently from your device volume.",
  },
  {
    question: "Does PaceCue use GPS or track my location?",
    answer:
      "No. PaceCue is a timer-based cue app. It does not access GPS or location services.",
  },
  {
    question: "Does PaceCue work offline?",
    answer:
      "Absolutely. PaceCue runs entirely on your device and does not require an internet connection.",
  },
  {
    question: "How do I reset my settings?",
    answer:
      "Delete and reinstall the app. All data is stored locally on your device, so a fresh install gives you a clean slate.",
  },
];

export default function PaceCueSupportPage() {
  return (
    <main id="main" className="flex-1">
      <section className="border-b border-border">
        <div className="mx-auto w-full max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
          <Link
            href="/pacecue"
            className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-accent hover:text-accent-hover transition-colors"
          >
            ← PaceCue
          </Link>
          <h1 className="mt-3 font-display text-3xl tracking-tight text-foreground sm:text-4xl">
            Support
          </h1>
          <p className="mt-4 text-base leading-7 text-muted">
            Need help with PaceCue? Check the FAQs below or reach out directly.
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
              href={`mailto:${site.email}?subject=PaceCue%20Support`}
              className="text-accent hover:text-accent-hover transition-colors"
            >
              {site.email}
            </a>{" "}
            and I&apos;ll get back to you as soon as I can.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`mailto:${site.email}?subject=PaceCue%20Support`}
              className="inline-flex h-11 items-center rounded-full border border-border px-5 text-sm text-foreground transition-colors hover:border-accent/50 hover:bg-surface"
            >
              Email Support
            </a>
            <Link
              href="/pacecue/privacy"
              className="inline-flex h-11 items-center rounded-full border border-border px-5 text-sm text-muted transition-colors hover:border-accent/50 hover:bg-surface hover:text-foreground"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
