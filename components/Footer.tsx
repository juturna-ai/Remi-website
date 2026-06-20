"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

type FooterLink = "home" | "about" | "privacy" | "contact";

export default function Footer({ links }: { links: FooterLink[] }) {
  const { d } = useLanguage();
  const year = new Date().getFullYear();

  const render = (key: FooterLink) => {
    switch (key) {
      case "home":
        return <a key="home" href="/">{d.footer.home}</a>;
      case "about":
        return <a key="about" href="/about">{d.footer.about}</a>;
      case "privacy":
        return <a key="privacy" href="/privacy">{d.footer.privacy}</a>;
      case "contact":
        return <a key="contact" href="mailto:juturna.ai@gmail.com">{d.footer.contact}</a>;
    }
  };

  return (
    <footer className="footer">
      <div>© {year} Remi</div>
      <div className="nav-links">{links.map(render)}</div>
      <p className="powered-by">
        {d.footer.poweredBy}{" "}
        <a href="https://juturna.io/" target="_blank" rel="noopener noreferrer">
          Juturna
        </a>
      </p>
    </footer>
  );
}
