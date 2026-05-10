"use client";

import Image from "next/image";
import StatsStrip from "./StatsStrip";
import { useT } from "@/lib/i18n/LanguageContext";

const stepNumbers = ["01", "02", "03", "04"];

export default function Restoration() {
  const t = useT();

  return (
    <section id="restoration" className="bg-[#FAF8F5]">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-20 md:pt-28 md:pb-24">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">

          {/* Left — Interactive image + floating card */}
          <div className="group relative md:pb-6">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/piano-repair.jpg"
                alt="Piano restoration in progress"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#8C1A2B]/0 group-hover:bg-[#8C1A2B]/10 transition-colors duration-500 pointer-events-none" />
            </div>

            {/* 40+ card */}
            <div className="mt-4 max-w-[180px] md:mt-0 md:absolute md:bottom-0 md:right-0 md:-bottom-6 md:-right-6 bg-[#8C1A2B] text-white p-5 md:p-6 md:max-w-[200px] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#8C1A2B]/50 cursor-default">
              <p className="text-3xl font-bold mb-1 tabular-nums">40+</p>
              <p className="text-sm text-white/70 uppercase tracking-wider">{t.restoration.yearsLabel}</p>
            </div>
          </div>

          {/* Right — Content */}
          <div className="pt-4 md:pt-6">
            <p className="text-[#8C1A2B] text-sm font-bold uppercase tracking-[0.3em] mb-6">
              {t.restoration.label}
            </p>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
              {t.restoration.heading}
            </h3>

            <div className="flex flex-col gap-8">
              {t.restoration.steps.map((s, i) => (
                <div key={i} className="flex gap-6">
                  <span className="text-[#8C1A2B]/30 text-2xl font-bold leading-none flex-shrink-0 w-10">
                    {stepNumbers[i]}
                  </span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">{s.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-5">
              <div className="relative flex-shrink-0 w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-[#8C1A2B]/30 mx-auto sm:mx-0">
                <Image
                  src="/team.png"
                  alt="Emad — Pianoman team"
                  fill
                  className="object-cover object-[center_15%]"
                />
              </div>
              <div className="p-5 sm:p-6 bg-white border-s-4 border-[#8C1A2B] flex-1">
                <p className="text-gray-700 italic text-sm leading-relaxed">
                  &ldquo;{t.restoration.quote}&rdquo;
                </p>
                <p className="text-[#8C1A2B] font-bold text-sm mt-3">{t.restoration.quoteAuthor}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <StatsStrip />
    </section>
  );
}
