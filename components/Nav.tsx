"use client";

import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function Nav() {
  const { d } = useLanguage();
  return (
    <nav className="nav">
      <Link href="/" className="nav-brand">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/remi-logo.png" alt="Remi logo" />
        <span>Remi</span>
      </Link>
      <div className="nav-links">
        <Link href="/">{d.nav.home}</Link>
        <Link href="/about">{d.nav.about}</Link>
        <a href="mailto:juturna.ai@gmail.com">{d.nav.contact}</a>
      </div>
      <div className="nav-right">
        <LanguageSwitcher />
      </div>
    </nav>
  );
}
