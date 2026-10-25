import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "SplitCue — Privacy Policy",
  description:
    "Privacy policy for SplitCue, a simple interval cue running app.",
  alternates: {
    canonical: "/splitcue/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SplitCuePrivacyPage() {
  return (
    <main id="main" className="flex-1">
      <section className="border-b border-border">
        <div className="mx-auto w-full max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
          <Link
            href="/splitcue"
            className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-accent hover:text-accent-hover transition-colors"
          >
            ← SplitCue
          </Link>
          <h1 className="mt-3 font-display text-3xl tracking-tight text-foreground sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-muted">
            Effective date: September 8, 2026
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
          <div className="space-y-10 text-base leading-7 text-muted">
            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Overview
              </h2>
              <p className="mt-3">
                SplitCue is an interval cue app for runners built by{" "}
                {site.name}. Your privacy matters — this policy explains what
                data SplitCue collects (very little) and how it is handled.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Data Collection
              </h2>
              <p className="mt-3">
                SplitCue is designed to work without collecting personal data.
                The app does <strong className="text-foreground">not</strong>:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Require an account or sign-in</li>
                <li>Collect your name, email, or contact information</li>
                <li>Track your location or GPS data</li>
                <li>Access your contacts, photos, or other device data</li>
                <li>Use cookies or tracking pixels</li>
              </ul>
              <p className="mt-3">
                Your interval settings and preferences are stored locally on
                your device and are never transmitted to any server.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Third-Party Services
              </h2>
              <p className="mt-3">
                SplitCue does not integrate with third-party analytics,
                advertising, or tracking services. No data is shared with third
                parties.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Data Storage
              </h2>
              <p className="mt-3">
                All app data (interval configurations, preferences) is stored
                on-device only. If you delete the app, all associated data is
                removed.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Children&apos;s Privacy
              </h2>
              <p className="mt-3">
                SplitCue does not knowingly collect any personal information from
                anyone, including children under 13. Because no personal data is
                collected, the app is safe for users of all ages.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Changes to This Policy
              </h2>
              <p className="mt-3">
                If this privacy policy is updated, the revised version will be
                posted on this page with an updated effective date. Continued
                use of SplitCue after changes constitutes acceptance of the
                revised policy.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Contact
              </h2>
              <p className="mt-3">
                Questions about this policy? Reach out at{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="text-accent hover:text-accent-hover transition-colors"
                >
                  {site.email}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
