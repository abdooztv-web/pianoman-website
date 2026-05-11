"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { translations, Lang, Translations } from "./translations";

type LangCtx = { lang: Lang; setLang: (l: Lang) => void };

const Ctx = createContext<LangCtx>({ lang: "en", setLang: () => {} });

export function LanguageProvider({ children, initialLang }: { children: React.ReactNode; initialLang?: Lang }) {
  const [lang, setLangState] = useState<Lang>(initialLang ?? "en");

  useEffect(() => {
    if (initialLang) apply(initialLang);
  }, [initialLang]);

  function apply(l: Lang) {
    document.documentElement.lang = l;
    // dir on body only — setting on <html> shifts Chrome's scroll origin in RTL
    document.body.dir = l === "ar" ? "rtl" : "ltr";
  }

  function setLang(l: Lang) {
    setLangState(l);
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
