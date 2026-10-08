import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "PaceCue — Terms of Service",
  description:
    "Terms of service for PaceCue, an interval cue and pace tracking app for runners.",
  alternates: {
    canonical: "/pacecue/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PaceCueTermsPage() {
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
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-muted">
            Effective date: October 8, 2026
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
          <div className="space-y-10 text-base leading-7 text-muted">
            <div>
              <h2 className="text-lg font-semibold text-foreground">
                1. Acceptance of Terms
              </h2>
              <p className="mt-3">
                By downloading, installing, or using PaceCue
                (&quot;the App&quot;), you agree to be bound by these Terms of
                Service (&quot;Terms&quot;). If you do not agree, do not use
                the App. The App is developed and operated by {site.name}{" "}
                (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                2. Description of Service
              </h2>
              <p className="mt-3">
                PaceCue is a customizable interval timer and pace tracking app
                for runners. The App allows you to build structured workouts
                with warm-up, interval, and cool-down phases; receive audio and
                haptic cues during runs; track your GPS pace in real time; and
                generate AI-powered workout plans. Core timer features work
                entirely on-device without an account or internet connection.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                3. Accounts & Authentication
              </h2>
              <p className="mt-3">
                An account is not required to use PaceCue&apos;s core interval
                timer features. However, creating an account (via Apple
                Sign-In, Google Sign-In, or email) is required to access cloud
                sync and AI workout generation. If you create an account, you
                are responsible for maintaining the confidentiality of your
                login credentials and for all activity that occurs under your
                account.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                4. Subscriptions & Payments
              </h2>
              <p className="mt-3">
                PaceCue offers a free tier and an optional paid subscription
                (&quot;PaceCue Pro&quot;). The free tier includes unlimited
                workouts and intervals, full pace tracking, cloud sync, and a
                limited number of AI-generated workouts per month. PaceCue Pro
                unlocks unlimited AI workout generation and additional
                features.
              </p>
              <p className="mt-3">
                Subscriptions are billed through the Apple App Store or Google
                Play Store. Payment is charged to your Apple ID or Google
                account at confirmation of purchase. Subscriptions
                automatically renew unless canceled at least 24 hours before
                the end of the current billing period. You can manage or cancel
                your subscription at any time through your device&apos;s
                subscription settings.
              </p>
              <p className="mt-3">
                Prices are set in the respective app stores and may vary by
                region. We reserve the right to change subscription pricing;
                any price changes will take effect at the start of your next
                billing period.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                5. AI-Generated Content
              </h2>
              <p className="mt-3">
                PaceCue&apos;s AI workout builder generates interval workout
                suggestions based on the preferences and data you provide. We
                do not guarantee the accuracy, completeness, or suitability of
                any AI-generated recommendation. You should evaluate each
                suggestion and adjust it to fit your fitness level, experience,
                and any medical conditions.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                6. Health & Fitness Disclaimer
              </h2>
              <p className="mt-3">
                PaceCue provides interval timing, pace tracking, and
                AI-generated workout suggestions for informational purposes
                only.{" "}
                <strong className="text-foreground">
                  The App is not a substitute for professional medical advice,
                  diagnosis, or treatment.
                </strong>{" "}
                Always consult a qualified healthcare provider before starting
                any exercise program. You use the App and follow its
                recommendations entirely at your own risk.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                7. Location Data
              </h2>
              <p className="mt-3">
                PaceCue uses GPS location data solely for real-time pace
                tracking during workouts. Location access is requested only
                when you enable pace tracking and is used exclusively to
                calculate your running pace and distance. Location data is
                processed on-device and is not transmitted to our servers or
                shared with third parties.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                8. User Data & Privacy
              </h2>
              <p className="mt-3">
                Your use of the App is also governed by our{" "}
                <Link
                  href="/pacecue/privacy"
                  className="text-accent hover:text-accent-hover transition-colors"
                >
                  Privacy Policy
                </Link>
                , which describes the data we collect and how it is used. By
                using the App, you consent to our data practices as described
                in the Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                9. Acceptable Use
              </h2>
              <p className="mt-3">You agree not to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  Use the App for any unlawful purpose or in violation of any
                  applicable laws
                </li>
                <li>
                  Attempt to gain unauthorized access to the App&apos;s systems
                  or other users&apos; accounts
                </li>
                <li>
                  Reverse-engineer, decompile, or disassemble any part of the
                  App
                </li>
                <li>
                  Interfere with or disrupt the App&apos;s infrastructure or
                  services
                </li>
                <li>
                  Use automated scripts or bots to interact with the App
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                10. Intellectual Property
              </h2>
              <p className="mt-3">
                All content, design, code, and branding associated with
                PaceCue are owned by {site.name} and are protected by
                applicable intellectual property laws. You retain ownership of
                any personal data, workout configurations, and run history you
                create within the App.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                11. Termination
              </h2>
              <p className="mt-3">
                We reserve the right to suspend or terminate your account at
                any time if you violate these Terms. You may delete your
                account at any time by contacting us at{" "}
                <a
                  href={`mailto:${site.email}?subject=PaceCue%20Account%20Deletion`}
                  className="text-accent hover:text-accent-hover transition-colors"
                >
                  {site.email}
                </a>
                . Upon termination, your cloud data will be permanently deleted
                in accordance with our Privacy Policy. Canceling a paid
                subscription does not delete your account or data.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                12. Limitation of Liability
              </h2>
              <p className="mt-3">
                To the fullest extent permitted by law, {site.name} shall not
                be liable for any indirect, incidental, special, consequential,
                or punitive damages arising out of or related to your use of
                the App. The App is provided on an &quot;as is&quot; and
                &quot;as available&quot; basis without warranties of any kind,
                either express or implied.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                13. Changes to These Terms
              </h2>
              <p className="mt-3">
                We may update these Terms from time to time. The revised
                version will be posted on this page with an updated effective
                date. Continued use of the App after changes constitutes
                acceptance of the revised Terms.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                14. Governing Law
              </h2>
              <p className="mt-3">
                These Terms are governed by and construed in accordance with
                the laws of the State of Texas, without regard to conflict of
                law principles.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Contact
              </h2>
              <p className="mt-3">
                Questions about these terms? Reach out at{" "}
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
