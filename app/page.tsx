import Nav from "@/components/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="hero">
        <div className="hero-glow" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/remi-logo.png" alt="Remi" className="hero-logo" />
        <span className="eyebrow">Now on Android</span>
        <h1>Reminders &amp; notes, kept simple.</h1>
        <p className="sub">
          Remi is a clean, private reminder app that does exactly what you need —
          and nothing you don&apos;t. No account, no clutter, no internet required.
          Everything stays on your device.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#">
            Get it on Android
          </a>
          <a className="btn btn-ghost" href="/privacy">
            Privacy Policy
          </a>
        </div>
        <div className="hero-tags">
          <span>Offline &amp; private</span>
          <span>No ads, no tracking</span>
          <span>Reliable reminders</span>
          <span>6 themes</span>
        </div>
      </main>

      <footer className="footer">
        <div>© {new Date().getFullYear()} Remi</div>
        <div className="nav-links">
          <a href="/privacy">Privacy</a>
          <a href="mailto:juturna.ai@gmail.com">Contact</a>
        </div>
      </footer>
    </>
  );
}
