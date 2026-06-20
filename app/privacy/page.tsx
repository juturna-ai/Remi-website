"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function Privacy() {
  const { d } = useLanguage();
  const p = d.privacy;
  return (
    <>
      <Nav />
      <main className="legal">
        <h1>{p.title}</h1>
        <p className="updated">{p.updated}</p>

        <p>
          {p.intro}
          <strong>{p.introStrong}</strong>
        </p>

        <h2>{p.collectTitle}</h2>
        <p>{p.collectBody1}</p>
        <p>{p.collectBody2}</p>
        <ul>
          {p.collectItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <p>{p.collectBody3}</p>

        <h2>{p.useTitle}</h2>
        <p>{p.useBody}</p>

        <h2>{p.notifTitle}</h2>
        <p>{p.notifBody}</p>

        <h2>{p.permTitle}</h2>
        <p>{p.permIntro}</p>
        <ul>
          {p.permItems.map((item, i) => (
            <li key={i}>
              <strong>{item.label}</strong> — {item.body}
            </li>
          ))}
        </ul>

        <h2>{p.thirdTitle}</h2>
        <p>{p.thirdBody}</p>

        <h2>{p.childrenTitle}</h2>
        <p>{p.childrenBody}</p>

        <h2>{p.retentionTitle}</h2>
        <p>{p.retentionBody}</p>

        <h2>{p.changesTitle}</h2>
        <p>{p.changesBody}</p>

        <h2>{p.contactTitle}</h2>
        <p>
          {p.contactBody}{" "}
          <a href="mailto:juturna.ai@gmail.com">juturna.ai@gmail.com</a>.
        </p>
      </main>

      <Footer links={["home", "contact"]} />
    </>
  );
}
