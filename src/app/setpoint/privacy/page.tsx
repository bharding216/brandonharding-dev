import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Setpoint AI — Privacy Policy",
  description:
    "Privacy policy for Setpoint AI, an AI-powered workout planning and tracking app.",
  alternates: {
    canonical: "/setpoint/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SetpointPrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-muted">
            Effective date: September 16, 2026
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
                Setpoint AI is a workout planning and tracking app built by{" "}
                {site.name}. This policy explains what data Setpoint AI
                collects, how it is used, and how it is protected.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Account Information
              </h2>
              <p className="mt-3">
                Setpoint AI requires an account to sync your data across
                devices. When you create an account, we collect your{" "}
                <strong className="text-foreground">email address</strong> and
                an optional display name. This information is used solely for
                authentication and identifying your account.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Workout & Training Data
              </h2>
              <p className="mt-3">
                The app stores your workout logs, exercise sets, training
                preferences, weekly schedule, and progress history. This data
                is used to:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Generate personalized AI workout recommendations</li>
                <li>Display your training history and progress charts</li>
                <li>Sync your workouts across devices</li>
              </ul>
              <p className="mt-3">
                Your workout data is stored securely in our cloud database and
                is associated with your account. It is not shared with other
                users.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                AI Processing
              </h2>
              <p className="mt-3">
                When you request an AI-generated workout, your training
                preferences, weekly schedule, and recent workout history are
                sent to our server-side AI processing pipeline. This data is
                used exclusively to generate your workout recommendation and is
                not retained by the AI provider beyond the scope of the
                request.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Data We Do Not Collect
              </h2>
              <p className="mt-3">
                Setpoint AI does{" "}
                <strong className="text-foreground">not</strong>:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Track your location or GPS data</li>
                <li>Access your contacts, photos, or other device data</li>
                <li>Use cookies or tracking pixels</li>
                <li>
                  Integrate with third-party advertising or analytics services
                </li>
                <li>Sell or share your data with third parties</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Third-Party Services
              </h2>
              <p className="mt-3">
                Setpoint AI uses{" "}
                <a
                  href="https://supabase.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-hover transition-colors"
                >
                  Supabase
                </a>{" "}
                for authentication and data storage. Supabase processes your
                account credentials and stores your workout data on our behalf.
                No other third-party services receive your personal
                information.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Data Retention & Deletion
              </h2>
              <p className="mt-3">
                Your data is retained for as long as your account is active. If
                you wish to delete your account and all associated data, email{" "}
                <a
                  href={`mailto:${site.email}?subject=Setpoint%20AI%20Account%20Deletion`}
                  className="text-accent hover:text-accent-hover transition-colors"
                >
                  {site.email}
                </a>{" "}
                and we will permanently remove your account, workout history,
                preferences, and all related data.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Data Security
              </h2>
              <p className="mt-3">
                All data is transmitted over HTTPS and stored in encrypted
                databases. Authentication tokens are stored securely on your
                device. While no system is 100% secure, we take reasonable
                measures to protect your information.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Children&apos;s Privacy
              </h2>
              <p className="mt-3">
                Setpoint AI is not directed at children under 13. We do not
                knowingly collect personal information from children under 13.
                If you believe a child under 13 has created an account, please
                contact us and we will delete it.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Changes to This Policy
              </h2>
              <p className="mt-3">
                If this privacy policy is updated, the revised version will be
                posted on this page with an updated effective date. Continued
                use of Setpoint AI after changes constitutes acceptance of the
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
