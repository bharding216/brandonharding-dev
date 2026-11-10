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
            Last updated: [RELEASE DATE FOR 1.10.0]
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
                SplitCue (formerly PaceCue) is an interval timer for runners
                built by {site.name}. Your privacy matters — this policy
                explains what data SplitCue collects, where it is stored, how
                it is used, and how you can delete it.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Data Collection
              </h2>
              <p className="mt-3">SplitCue collects:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-foreground">Workouts and settings</strong>{" "}
                  — the workouts and training plans you build, and your app
                  preferences.
                </li>
                <li>
                  <strong className="text-foreground">Run history</strong> — for
                  each run you record: duration, distance, splits, pace, your
                  GPS route and elevation, and any tags you add (how it felt,
                  effort, weather, who you ran with).
                </li>
                <li>
                  <strong className="text-foreground">Your running profile</strong>{" "}
                  — used to build AI training plans and workouts.
                </li>
                <li>
                  <strong className="text-foreground">Heart rate</strong> — only
                  if you pair a Bluetooth heart rate monitor. See{" "}
                  <a
                    href="#heart-rate"
                    className="text-accent hover:text-accent-hover transition-colors"
                  >
                    Heart Rate Data
                  </a>{" "}
                  below.
                </li>
                <li>
                  <strong className="text-foreground">Account information</strong>{" "}
                  — only if you choose to sign in with Apple to sync across
                  devices. Signing in is optional.
                </li>
              </ul>
              <p className="mt-3">
                The app does <strong className="text-foreground">not</strong>:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Access your contacts, photos, or other device data</li>
                <li>Use cookies or tracking pixels</li>
              </ul>
            </div>

            <div id="heart-rate" className="scroll-mt-24">
              <h2 className="text-lg font-semibold text-foreground">
                Heart Rate Data
              </h2>
              <p className="mt-3">
                Heart rate is personal physiological data, and some privacy laws
                treat it as health data. We handle it with extra care for that
                reason.
              </p>
              <p className="mt-3">
                <strong className="text-foreground">What we collect.</strong> If
                you pair a Bluetooth heart rate monitor, SplitCue records your
                heart rate during workouts: a beats-per-minute value and a
                timestamp, at most once per second, along with the
                monitor&apos;s display name. From those readings, SplitCue
                calculates your average and maximum heart rate for the workout
                and for each interval, and your heart rate recovery during rest
                intervals.
              </p>
              <p className="mt-3">
                Heart rate is only collected when you choose to pair a monitor.
                SplitCue does not read heart rate from Apple Health, Health
                Connect, or Google Fit.
              </p>
              <p className="mt-3">
                <strong className="text-foreground">Where it is stored.</strong>
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  Heart rate readings are always stored on your device as part
                  of your workout history — including on the free plan, so your
                  data is there if you upgrade to Pro later.
                </li>
                <li>
                  When you are signed in, your heart rate summary (averages,
                  maximums, per-interval figures, and recovery) syncs to your
                  SplitCue account along with your workout history.
                </li>
                <li>
                  Your detailed second-by-second readings sync to your account{" "}
                  <strong className="text-foreground">only</strong> if you turn
                  on &ldquo;Save heart rate to my account.&rdquo; We ask the
                  first time you pair a monitor, and you can change it any time
                  in Settings &gt; Heart Rate. Saving to your account gives you
                  a backup, your history across devices, and future analysis
                  features.
                </li>
              </ul>
              <p className="mt-3">
                <strong className="text-foreground">How it is used.</strong>{" "}
                Heart rate data is used only for your own training features:
                workout history, graphs, interval breakdowns, and Pro heart rate
                analysis. It is never shown to other users, never sold, and
                never used for advertising.
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  Heart rate readings are not included in our product
                  analytics. Analytics record only that a feature was used —
                  for example, that a monitor connected, that a heart rate
                  workout was completed, or that a connection failed — never
                  your BPM values or heart rate metrics.
                </li>
                <li>
                  Heart rate data is not currently sent to AI providers. If a
                  future feature uses it for AI coaching, we will explain this
                  in the app and ask for your permission first.
                </li>
                <li>
                  If you connect Strava and upload a workout, the uploaded
                  activity includes your heart rate readings. Once uploaded,
                  that data is governed by Strava&apos;s privacy policy.
                </li>
              </ul>
              <p className="mt-3">
                <strong className="text-foreground">Deleting it.</strong>
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  Deleting a workout deletes its heart rate readings from your
                  device. If they were saved to your account, they are deleted
                  from our database immediately.
                </li>
                <li>
                  Turning off &ldquo;Save heart rate to my account&rdquo; stops
                  future uploads, and you can choose to delete all heart rate
                  readings already saved to your account.
                </li>
                <li>
                  Otherwise, heart rate data is kept for as long as you keep
                  the workout or your account.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Third-Party Services
              </h2>
              <p className="mt-3">
                SplitCue does not use advertising services. It works with these
                services:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-foreground">Supabase</strong> — our
                  database provider, which stores your account data when you
                  are signed in.
                </li>
                <li>
                  <strong className="text-foreground">Sign in with Apple</strong>{" "}
                  — if you choose to sign in.
                </li>
                <li>
                  <strong className="text-foreground">Product analytics</strong>{" "}
                  — records feature-usage events to help us improve the app.
                </li>
                <li>
                  <strong className="text-foreground">AI providers</strong> —
                  power AI training plans, the AI workout builder, and coach
                  chat.
                </li>
                <li>
                  <strong className="text-foreground">Strava</strong> — only if
                  you connect it and choose to upload a workout.
                </li>
              </ul>
              <p className="mt-3">
                If you share a workout or a finished run as a link, anyone with
                the link can open it.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Data Storage
              </h2>
              <p className="mt-3">
                Your workouts, settings, and run history are stored on your
                device. You can export a backup at any time.
              </p>
              <p className="mt-3">
                If you sign in, cloud sync keeps your workouts and history on
                all of your devices. Cloud data is stored with Supabase and
                encrypted in transit, and access controls ensure each user can
                access only their own workout records.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Data Retention and Deletion
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  When you delete a workout, its other data (summary metrics,
                  splits, and route) is permanently purged from our database 30
                  days later. Heart rate readings are deleted right away, as
                  described above.
                </li>
                <li>
                  Deleting your account permanently deletes all of your cloud
                  data, including heart rate data, immediately.
                </li>
                <li>
                  Data stored only on your device stays there until you delete
                  the app.
                </li>
                <li>
                  Database backups are kept for up to 7 days, so deleted data
                  may remain in backups until they expire.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Children&apos;s Privacy
              </h2>
              <p className="mt-3">
                SplitCue does not knowingly collect personal information from
                children under 13.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Changes to This Policy
              </h2>
              <p className="mt-3">
                If this privacy policy is updated, the revised version will be
                posted on this page with an updated date. Continued
                use of SplitCue after changes constitutes acceptance of the
                revised policy.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Contact
              </h2>
              <p className="mt-3">
                Questions about this policy, or requests about your data
                (including heart rate data)? Reach out at{" "}
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
