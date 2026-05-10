"use client";

import { useT } from "@/lib/i18n/LanguageContext";

const ratings = [5, 5, 5];

export default function Testimonials() {
  const t = useT();

  return (
    <section className="bg-[#FAF8F5] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="text-[#8C1A2B] text-sm font-bold uppercase tracking-[0.3em] mb-4">
            {t.testimonials.label}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-md">
            {t.testimonials.heading}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {t.testimonials.items.map((item, idx) => (
            <div key={idx} className="bg-white p-8 flex flex-col gap-6 border border-gray-100">
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: ratings[idx] }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-[#8C1A2B]" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 text-sm leading-relaxed flex-1">&ldquo;{item.text}&rdquo;</p>

              <div className="border-t border-gray-100 pt-4">
                <p className="font-bold text-gray-900 text-sm">{item.name}</p>
                <p className="text-gray-400 text-xs mt-1">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
