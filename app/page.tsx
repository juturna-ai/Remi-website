"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function Home() {
  const { d } = useLanguage();
  return (
    <>
      <Nav />
      <main className="hero">
        <div className="hero-glow" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/remi-logo.png" alt="Remi" className="hero-logo" />
        <h1 className="hero-brand">Remi</h1>
        <p className="hero-tagline">{d.home.tagline}</p>
      </main>

      <Footer links={["about", "privacy", "contact"]} />
    </>
  );
}
