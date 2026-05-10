"use client";

import { useState, useRef } from "react";
import { gtmPush } from "@/lib/gtm";
import Image from "next/image";
import Link from "next/link";
import { useT } from "@/lib/i18n/LanguageContext";

const stepMeta = [
  { src: "/restoration/1.jpg", tag: "BEFORE", tagBg: "bg-gray-800" },
  { src: "/restoration/2.jpg", tag: "DURING", tagBg: "bg-amber-700" },
  { src: "/restoration/4.jpg", tag: "AFTER",  tagBg: "bg-[#8C1A2B]" },
  { src: "/restoration/3.jpg", tag: "AFTER",  tagBg: "bg-[#8C1A2B]" },
];

function relativeDiff(i: number, active: number, total: number) {
  let d = i - active;
  if (d > total / 2) d -= total;
  if (d < -total / 2) d += total;
  return d;
}

function NavBar({ active, total, go }: { active: number; total: number; go: (i: number) => void }) {
  return (
    <div className="flex items-center justify-center gap-5 mt-7">
      <button
        onClick={() => go(active - 1)}
        aria-label="Previous"
        className="w-11 h-11 border border-gray-300 hover:border-[#8C1A2B] hover:text-[#8C1A2B] transition-colors flex items-center justify-center"
      >
        <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div className="flex items-center gap-2">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === active ? "w-8 bg-[#8C1A2B]" : "w-3 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

      <button
        onClick={() => go(active + 1)}
        aria-label="Next"
        className="w-11 h-11 border border-gray-300 hover:border-[#8C1A2B] hover:text-[#8C1A2B] transition-colors flex items-center justify-center"
      >
        <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

function StepLabels({
  active,
  go,
  labels,
}: {
  active: number;
  go: (i: number) => void;
  labels: string[];
}) {
  return (
    <div className="flex justify-center flex-wrap gap-x-5 gap-y-2 mt-5">
      {labels.map((label, i) => (
        <button
          key={i}
          onClick={() => go(i)}
          className={`text-xs uppercase tracking-widest font-bold flex items-center gap-2 transition-colors ${
            i === active ? "text-[#8C1A2B]" : "text-gray-400 hover:text-gray-600"
          }`}
        >
          <span className={`w-4 h-4 rounded-full text-[9px] flex items-center justify-center font-bold flex-shrink-0 ${
            i === active ? "bg-[#8C1A2B] text-white" : "bg-gray-200 text-gray-500"
          }`}>
            {i + 1}
          </span>
          {label}
        </button>
      ))}
    </div>
  );
}

export default function BeforeAfter() {
  const [active, setActive] = useState(0);
  const total = stepMeta.length;
  const touchX = useRef<number | null>(null);
  const t = useT();
  const steps = t.beforeAfter.steps;

  function go(i: number) {
    setActive(((i % total) + total) % total);
  }

  function onTouchStart(e: React.TouchEvent) {
    touchX.current = e.touches[0].clientX;
  }
  function onTouchEnd(e: React.TouchEvent) {
    if (touchX.current === null) return;
    const delta = touchX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 48) go(delta > 0 ? active + 1 : active - 1);
    touchX.current = null;
  }

  return (
    <section id="transformations" className="bg-[#FAF8F5] py-16 md:py-32">
      <div className="max-w-6xl mx-auto px-5 md:px-6">

        {/* Header */}
        <div className="mb-12 md:mb-16">
          <p className="text-[#8C1A2B] text-sm font-bold uppercase tracking-[0.3em] mb-4">
            {t.beforeAfter.label}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            {t.beforeAfter.heading}
          </h2>
          <p className="mt-4 text-gray-500 max-w-lg">
            {t.beforeAfter.description}
          </p>
        </div>

        {/* MOBILE: swipe strip */}
        <div className="md:hidden">
          <div
            className="overflow-hidden rounded-none"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {stepMeta.map((meta, i) => (
                <div key={i} className="w-full flex-shrink-0">
                  <div className="relative aspect-[4/3] overflow-hidden shadow-xl">
                    <Image src={meta.src} alt={steps[i].label} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <span className={`absolute top-4 left-4 text-xs font-bold uppercase tracking-widest px-3 py-1.5 text-white ${meta.tagBg}`}>
                      {meta.tag}
                    </span>
                    <div className="absolute bottom-5 left-5 right-5">
                      <p className="text-white font-bold text-xl leading-tight">{steps[i].label}</p>
                      <p className="text-white/70 text-sm mt-1">{steps[i].caption}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {active === 0 && (
            <p className="text-center text-gray-400 text-xs mt-3 tracking-wider">
              {t.beforeAfter.swipeHint}
            </p>
          )}

          <NavBar active={active} total={total} go={go} />
          <StepLabels active={active} go={go} labels={steps.map((s) => s.label)} />
        </div>

        {/* DESKTOP: 3D perspective carousel */}
        <div className="hidden md:block">
          <div
            className="relative flex items-center justify-center h-[460px]"
            style={{ perspective: "1400px" }}
          >
            {stepMeta.map((meta, i) => {
              const diff = relativeDiff(i, active, total);
              if (Math.abs(diff) > 1) return null;

              const isActive = diff === 0;
              const isLeft   = diff === -1;

              const transform = isActive
                ? "rotateY(0deg) translateX(0) scale(1)"
                : isLeft
                ? "rotateY(44deg) translateX(-74%) scale(0.74)"
                : "rotateY(-44deg) translateX(74%) scale(0.74)";

              const opacity   = isActive ? 1 : 0.52;
              const zIndex    = isActive ? 20 : 10;
              const boxShadow = isActive
                ? "0 30px 70px rgba(0,0,0,0.38)"
                : "0 10px 28px rgba(0,0,0,0.18)";

              return (
                <div
                  key={meta.src}
                  className="absolute w-full max-w-[580px] transition-all duration-700 ease-in-out"
                  style={{ transform, opacity, zIndex, transformStyle: "preserve-3d" }}
                  onClick={() => !isActive && go(i)}
                >
                  <div
                    className={`relative aspect-[4/3] overflow-hidden ${!isActive ? "cursor-pointer" : ""}`}
                    style={{ boxShadow }}
                  >
                    <Image src={meta.src} alt={steps[i].label} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <span className={`absolute top-4 left-4 text-xs font-bold uppercase tracking-widest px-3 py-1.5 text-white ${meta.tagBg}`}>
                      {meta.tag}
                    </span>
                    {isActive && (
                      <div className="absolute bottom-5 left-5 right-5">
                        <p className="text-white font-bold text-2xl leading-tight">{steps[i].label}</p>
                        <p className="text-white/70 text-sm mt-1">{steps[i].caption}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <NavBar active={active} total={total} go={go} />
          <StepLabels active={active} go={go} labels={steps.map((s) => s.label)} />
        </div>

        {/* CTA */}
        <div className="mt-16 pt-10 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <p className="text-gray-600 max-w-md">
            {t.beforeAfter.ctaText}
          </p>
          <Link
            href="/#contact"
            onClick={() => gtmPush({ event: "click_cta", cta_label: t.beforeAfter.ctaBtn, page_section: "before_after", service_type: "restoration" })}
            className="inline-block bg-[#8C1A2B] text-white font-bold uppercase tracking-widest text-sm px-8 py-4 hover:bg-[#6B1221] transition-colors flex-shrink-0"
          >
            {t.beforeAfter.ctaBtn}
          </Link>
        </div>

      </div>
    </section>
  );
}
