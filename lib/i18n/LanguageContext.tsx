"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { translations, Lang, Translations } from "./translations";

type LangCtx = { lang: Lang; setLang: (l: Lang) => void };

const Ctx = createContext<LangCtx>({ lang: "en", setLang: () => {} });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang;
    if (saved === "ar" || saved === "en") {
      apply(saved);
      setLangState(saved);
    }
  }, []);

  function apply(l: Lang) {
    document.documentElement.lang = l;
    // Set dir on body only — setting it on <html> moves Chrome's scroll origin to the
    // right side in RTL, which misaligns click coordinates from visual positions.
    document.body.dir = l === "ar" ? "rtl" : "ltr";
  }

  function setLang(l: Lang) {
    setLangState(l);
    localStorage.setItem("lang", l);
    apply(l);
  }

  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>;
}

export function useLanguage() {
  return useContext(Ctx);
}

export function useT(): Translations {
  const { lang } = useLanguage();
  return translations[lang];
}
