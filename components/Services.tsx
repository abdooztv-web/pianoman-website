"use client";

import Link from "next/link";
import { useT } from "@/lib/i18n/LanguageContext";
import { gtmPush } from "@/lib/gtm";

const serviceTypes = ["rental", "tuning", "restoration"] as const;

const servicesMeta = [
  {
    number: "01",
    highlighted: false,
    href: "/#contact",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
  },
  {
    number: "02",
    highlighted: true,
    href: "/#contact",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    number: "03",
    highlighted: false,
    href: "/#restoration",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

function Check({ light }: { light: boolean }) {
  return (
    <svg
      className={`w-4 h-4 flex-shrink-0 ${light ? "text-white/60" : "text-[#8C1A2B]"}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function Services() {
  const t = useT();

  return (
    <section id="services" className="bg-white py-16 md:py-32">
      <div className="max-w-6xl mx-auto px-5 md:px-6">

        {/* Header */}
        <div className="mb-10 md:mb-16">
          <p className="text-[#8C1A2B] text-sm font-bold uppercase tracking-[0.3em] mb-4">
            {t.services.label}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight max-w-lg">
            {t.services.heading}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5 md:gap-6 items-start">
          {servicesMeta.map((s, idx) => {
            const item = t.services.items[idx];
            return (
              <div
                key={s.number}
                className={`
                  group relative flex flex-col p-6 md:p-10
                  transition-all duration-300 ease-out
                  hover:-translate-y-2
                  ${s.highlighted
                    ? "bg-[#8C1A2B] shadow-2xl shadow-[#8C1A2B]/40 hover:shadow-[#8C1A2B]/60 hover:shadow-[0_32px_64px]"
                    : "bg-white border border-gray-200 hover:border-[#8C1A2B]/20 hover:shadow-2xl hover:shadow-gray-200/80"
                  }
                `}
              >
                {/* Number + icon */}
                <div className="flex items-start justify-between mb-8">
                  <span className={`text-5xl font-bold leading-none select-none ${
                    s.highlighted ? "text-white/15" : "text-[#8C1A2B]/10"
                  }`}>
                    {s.number}
                  </span>
                  <div className={`transition-transform duration-300 group-hover:scale-110 ${
                    s.highlighted ? "text-white" : "text-[#8C1A2B]"
                  }`}>
                    {s.icon}
                  </div>
                </div>

                {/* Text block */}
                <div className="mb-6">
                  <p className={`text-xs font-bold uppercase tracking-[0.25em] mb-2 ${
                    s.highlighted ? "text-white/55" : "text-[#8C1A2B]"
                  }`}>
                    {item.subtitle}
                  </p>
                  <h3 className={`text-2xl font-bold mb-3 ${
                    s.highlighted ? "text-white" : "text-gray-900"
                  }`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${
                    s.highlighted ? "text-white/65" : "text-gray-500"
                  }`}>
                    {item.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="grid grid-cols-2 gap-x-4 gap-y-3 mb-10">
                  {item.features.map((f) => (
                    <li key={f} className={`flex items-center gap-2 text-sm ${
                      s.highlighted ? "text-white/80" : "text-gray-700"
                    }`}>
                      <Check light={s.highlighted} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-auto">
                  <Link
                    href={s.href}
                    onClick={() => gtmPush({ event: "click_cta", cta_label: item.cta, page_section: "services", service_type: serviceTypes[idx] })}
                    className={`
                      block w-full text-center font-bold uppercase tracking-widest text-xs px-8 py-4
                      transition-colors duration-200
                      ${s.highlighted
                        ? "bg-white text-[#8C1A2B] hover:bg-white/90"
                        : "bg-[#8C1A2B] text-white hover:bg-[#6B1221]"
                      }
                    `}
                  >
                    {item.cta}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
