import Nav from "@/components/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Remi",
  description: "Remi keeps all of your information on your own device.",
};

export default function Privacy() {
  return (
    <>
      <Nav />
      <main className="legal">
        <h1>Privacy Policy for Remi</h1>
        <p className="updated">Last updated: June 20, 2026</p>

        <p>
          Remi (&ldquo;the app&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is a
          personal reminder and notes application. This policy explains what
          information the app handles and how. The short version:{" "}
          <strong>
            Remi keeps all of your information on your own device and does not
            send it anywhere.
          </strong>
        </p>

        <h2>Information we collect</h2>
        <p>
          Remi does <strong>not</strong> collect, transmit, sell, or share any
          personal information. The app has no user accounts, no login, and makes
          no network connections to our servers or to any third party.
        </p>
        <p>The content you create in the app — including:</p>
        <ul>
          <li>
            tasks and events (titles, dates, times, categories, notes, colors,
            reminder settings);
          </li>
          <li>notes;</li>
          <li>
            your profile name, handle, and chosen notification sound and theme;
          </li>
        </ul>
        <p>
          is stored <strong>only locally on your device</strong> using your
          device&apos;s standard app storage. We have no access to it, and it
          never leaves your phone unless you choose to back up your device through
          your own operating system or device-backup settings.
        </p>

        <h2>How your information is used</h2>
        <p>
          The information you enter is used solely to provide the app&apos;s
          features — showing your tasks and notes, and scheduling the local
          reminder notifications you set. All of this happens on your device.
        </p>

        <h2>Notifications</h2>
        <p>
          Remi schedules <em>local</em> notifications on your device to remind you
          of your tasks. These notifications are generated entirely on your
          device. No notification content is sent to us or to any external
          server. The app does not use push notifications.
        </p>

        <h2>Permissions</h2>
        <p>Remi requests only the permissions needed for its reminder features:</p>
        <ul>
          <li>
            <strong>Notifications</strong> — to display your reminders.
          </li>
          <li>
            <strong>Alarms &amp; reminders (exact alarms)</strong> — so reminders
            fire at the exact time you set, even when the app is closed.
          </li>
          <li>
            <strong>Audio settings / playback</strong> — to play your chosen
            notification sound and to let you preview sounds in settings. Remi does{" "}
            <strong>not</strong> record audio and does not request microphone
            access.
          </li>
        </ul>

        <h2>Third-party services</h2>
        <p>
          Remi does not include any third-party analytics, advertising, tracking,
          or crash-reporting services. No third-party SDKs receive your data.
        </p>

        <h2>Children&apos;s privacy</h2>
        <p>
          Remi does not knowingly collect any information from anyone, including
          children. Because the app collects no data at all, no personal
          information from children is gathered or stored on our systems.
        </p>

        <h2>Data retention and deletion</h2>
        <p>
          Because your data is stored only on your device, you remain in control
          of it at all times. You can delete your tasks and notes within the app,
          and uninstalling the app removes all of its locally stored data from your
          device.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          If Remi adds features in the future that change how information is
          handled (for example, an optional account or cloud sync), this policy
          will be updated and the &ldquo;Last updated&rdquo; date above will
          change.
        </p>

        <h2>Contact</h2>
        <p>
          If you have any questions about this privacy policy, contact us at{" "}
          <a href="mailto:juturna.ai@gmail.com">juturna.ai@gmail.com</a>.
        </p>
      </main>

      <footer className="footer">
        <div>© {new Date().getFullYear()} Remi</div>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="mailto:juturna.ai@gmail.com">Contact</a>
        </div>
      </footer>
    </>
  );
}
