"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  dictionaries,
  DEFAULT_LANG,
  type Dictionary,
  type LangCode,
} from "./dictionaries";

const STORAGE_KEY = "remi-lang";

type LanguageContextValue = {
  lang: LangCode;
  setLang: (lang: LangCode) => void;
  d: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function isLangCode(value: string | null): value is LangCode {
  return value === "en" || value === "es" || value === "it" || value === "fr" || value === "pt";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<LangCode>(DEFAULT_LANG);

  // Restore the saved language on mount (client only).
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isLangCode(saved)) setLangState(saved);
  }, []);

  // Keep <html lang> and localStorage in sync with the active language.
  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const value: LanguageContextValue = {
    lang,
    setLang: setLangState,
    d: dictionaries[lang],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
