"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useT, useLanguage } from "@/lib/i18n/LanguageContext";
import { gtmPush } from "@/lib/gtm";

const navHrefs = [
  { key: "services" as const, href: "/#services" },
  { key: "restoration" as const, href: "/#restoration" },
  { key: "gallery" as const, href: "/#gallery" },
  { key: "about" as const, href: "/#about" },
  { key: "contact" as const, href: "/#contact" },
  { key: "blog" as const, href: "/blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = useT();
  const { lang, setLang } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const solid = open || scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
          solid
            ? "bg-white shadow-sm border-b border-gray-100"
            : "bg-black/20 backdrop-blur-xl border-b border-white/10"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-[auto_1fr_auto] items-center gap-4">

          {/* Logo */}
          <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
            <Image
              src="/logo-mark.jpg"
              alt="Pianoman logo"
              width={36}
              height={36}
              className={`rounded-full object-cover border transition-colors ${solid ? "border-gray-200" : "border-white/20"}`}
            />
            <span className={`font-bold text-sm tracking-[0.3em] uppercase transition-colors duration-300 ${solid ? "text-gray-900" : "text-white"}`}>
              Pianoman
            </span>
          </Link>

          {/* Desktop Nav — centered */}
          <nav className="hidden md:flex items-center justify-center gap-8">
            {navHrefs.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-xs font-medium uppercase tracking-wider transition-colors duration-300 ${
                  solid ? "text-gray-500 hover:text-gray-900" : "text-white/75 hover:text-white"
                }`}
              >
                {t.nav[l.key]}
              </Link>
            ))}
          </nav>

          {/* Right: Lang toggle + Book Now + Hamburger */}
          <div className="flex items-center justify-end gap-3">
            {/* Language toggle */}
            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className={`hidden md:flex items-center text-xs font-bold uppercase tracking-wider px-3 py-1.5 border transition-colors ${
                solid
                  ? "border-gray-300 text-gray-500 hover:border-[#8C1A2B] hover:text-[#8C1A2B]"
                  : "border-white/40 text-white/80 hover:border-white hover:text-white"
              }`}
              aria-label="Switch language"
            >
              {t.nav.langSwitch}
            </button>

            <Link
              href="/#contact"
              onClick={() => gtmPush({ event: "click_cta", cta_label: "Book Now", page_section: "navbar" })}
              className="hidden md:block bg-[#8C1A2B] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 hover:bg-[#6B1221] transition-colors"
            >
              {t.nav.bookNow}
            </Link>

            {/* Animated hamburger → X */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10"
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            >
              <span className={`block w-6 h-0.5 transition-all duration-300 origin-center ${solid ? "bg-gray-900" : "bg-white"} ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block w-6 h-0.5 transition-all duration-300 ${solid ? "bg-gray-900" : "bg-white"} ${open ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block w-6 h-0.5 transition-all duration-300 origin-center ${solid ? "bg-gray-900" : "bg-white"} ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile full-screen menu */}
      <div
        className={`fixed inset-0 z-40 bg-white flex flex-col md:hidden transition-all duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="pt-20 px-8 flex flex-col flex-1">
          {/* Mobile lang toggle */}
          <div className="flex justify-end pb-4">
            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 border border-gray-300 text-gray-500 hover:border-[#8C1A2B] hover:text-[#8C1A2B] transition-colors"
            >
              {t.nav.langSwitch}
            </button>
          </div>

          <nav className="flex flex-col gap-1 flex-1 justify-center">
            {navHrefs.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-5 border-b border-gray-100 text-3xl font-bold text-gray-900 uppercase tracking-tight active:text-[#8C1A2B]"
              >
                {t.nav[l.key]}
              </Link>
            ))}
          </nav>

          <div className="pb-12 flex flex-col gap-5">
            <Link
              href="/#contact"
              onClick={() => { setOpen(false); gtmPush({ event: "click_cta", cta_label: "Book Now", page_section: "navbar_mobile" }); }}
              className="block bg-[#8C1A2B] text-white font-bold uppercase tracking-widest text-sm py-5 text-center w-full"
            >
              {t.nav.bookService}
            </Link>
            <div className="flex flex-col gap-2 text-center">
              <a href="tel:01555001233" onClick={() => gtmPush({ event: "click_phone", source: "navbar_mobile" })} className="text-gray-500 text-sm">01555 001 233</a>
              <a href="mailto:abdooztv@gmail.com" className="text-gray-400 text-xs">abdooztv@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
