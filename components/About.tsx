"use client";

import Image from "next/image";
import { useT } from "@/lib/i18n/LanguageContext";

export default function About() {
  const t = useT();

  return (
    <section id="about" className="bg-[#8C1A2B] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-white/60 text-sm font-bold uppercase tracking-[0.3em] mb-6">
              {t.about.label}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
              {t.about.heading}
            </h2>
            <div className="flex flex-col gap-5 text-white/80 text-base leading-relaxed">
              {t.about.paras.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="w-12 h-0.5 bg-white/40" />
              <p className="text-white/60 text-sm italic">{t.about.promise}</p>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-6">
            <div className="relative aspect-[3/2] overflow-hidden">
              <Image
                src="/piano-lesson.jpg"
                alt="Pianoman at work"
                fill
                className="object-cover"
              />
            </div>
            {/* Logo on dark */}
            <div className="flex items-center gap-4 p-6 bg-white/10 border border-white/20">
              <Image
                src="/logo-mark.jpg"
                alt="Pianoman"
                width={56}
                height={56}
                className="rounded-full border-2 border-white/30 object-cover"
              />
              <div>
                <p className="text-white font-bold uppercase tracking-widest text-sm">Pianoman</p>
                <p className="text-white/60 text-xs mt-1">Cairo, Egypt · pianoman-eg.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
