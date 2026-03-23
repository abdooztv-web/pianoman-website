const services = [
  {
    number: "01",
    title: "Piano Rental",
    subtitle: "Get",
    description:
      "Looking for a piano without the full commitment? We offer flexible rental plans for students, events, and professionals. From upright to grand — the right instrument for the right moment.",
    features: ["Flexible terms", "All piano types", "Delivery included", "Event & long-term plans"],
    cta: "Rent a Piano",
    href: "#contact",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Home Visits",
    subtitle: "Fix",
    description:
      "We come to you. Our technicians visit your home across Cairo to tune, adjust, and maintain your piano in the comfort of your own space. No moving. No hassle.",
    features: ["On-site service", "All Cairo districts", "Tuning & regulation", "Expert technicians"],
    cta: "Book a Visit",
    href: "#contact",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Restoration",
    subtitle: "Repair",
    description:
      "Every piano has a story. We specialize in bringing vintage and worn instruments back to their full voice — from structural repairs to complete rebuilds. Your piano deserves its best sound.",
    features: ["Full rebuilds", "Structural repair", "Key restoration", "Vintage specialists"],
    cta: "See Our Work",
    href: "#restoration",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 md:py-32">
      <div className="max-w-6xl mx-auto px-5 md:px-6">
        {/* Header */}
        <div className="mb-10 md:mb-20">
          <p className="text-[#8C1A2B] text-sm font-bold uppercase tracking-[0.3em] mb-4">
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-lg">
            Three pillars of piano care
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-0 border border-gray-200">
          {services.map((s, i) => (
            <div
              key={s.number}
              className={`p-8 md:p-10 flex flex-col gap-6 ${
                i < 2 ? "border-b md:border-b-0 md:border-r border-gray-200" : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <span className="text-[#8C1A2B] opacity-30 text-5xl font-bold leading-none">
                  {s.number}
                </span>
                <div className="text-[#8C1A2B]">{s.icon}</div>
              </div>

              <div>
                <p className="text-[#8C1A2B] text-xs font-bold uppercase tracking-[0.25em] mb-2">
                  {s.subtitle}
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.description}</p>
              </div>

              <ul className="flex flex-col gap-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="w-1 h-1 rounded-full bg-[#8C1A2B] flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={s.href}
                className="mt-auto self-start text-sm font-bold text-[#8C1A2B] uppercase tracking-wider border-b-2 border-[#8C1A2B] pb-0.5 hover:text-[#6B1221] hover:border-[#6B1221] transition-colors"
              >
                {s.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
