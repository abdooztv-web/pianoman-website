"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { translations, Lang, Translations } from "./translations";

type LangCtx = { lang: Lang; setLang: (l: Lang) => void };

const Ctx = createContext<LangCtx>({ lang: "en", setLang: () => {} });

export function LanguageProvider({ children, initialLang }: { children: React.ReactNode; initialLang?: Lang }) {
  const [lang, setLangState] = useState<Lang>(initialLang ?? "en");
  const pathname = usePathname();

  useEffect(() => {
    // Route-based providers (e.g. /ar) always win
    if (initialLang) {
      apply(initialLang);
      return;
    }
    // The English homepage is always English — never let stale localStorage override it
    if (pathname === "/") {
      apply("en");
      setLangState("en");
      return;
    }
    const saved = localStorage.getItem("lang") as Lang;
    if (saved === "ar" || saved === "en") {
      apply(saved);
      setLangState(saved);
    }
  }, [pathname, initialLang]);

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
