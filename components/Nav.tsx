import Link from "next/link";

export default function Nav() {
  return (
    <nav className="nav">
      <Link href="/" className="nav-brand">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/remi-logo.png" alt="Remi logo" />
        <span>Remi</span>
      </Link>
      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/privacy">Privacy</Link>
        <a href="mailto:juturna.ai@gmail.com">Contact</a>
      </div>
    </nav>
  );
}
