"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function About() {
  const { d } = useLanguage();
  return (
    <>
      <Nav />
      <main className="about">
        <div className="hero-glow" />

        <section className="about-intro">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="about-logo" src="/remi-logo.png" alt="Remi logo" />
          <span className="eyebrow">{d.about.eyebrow}</span>
          <h1>{d.about.title}</h1>
          <p className="sub">{d.about.sub}</p>
        </section>

        <section className="about-features">
          {d.about.features.map((f) => (
            <article key={f.title} className="feature-card">
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </article>
          ))}
        </section>

        <section className="about-cta">
          <h2>{d.about.ctaTitle}</h2>
          <p>{d.about.ctaBody}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#">
              {d.about.getAndroid}
            </a>
            <a className="btn btn-ghost" href="/privacy">
              {d.about.privacy}
            </a>
          </div>
        </section>
      </main>

      <Footer links={["home", "privacy", "contact"]} />
    </>
  );
}
