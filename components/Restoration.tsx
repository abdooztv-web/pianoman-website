import Image from "next/image";

const steps = [
  {
    step: "01",
    title: "Assessment",
    desc: "Every piano tells its own story of wear. We begin with a thorough inspection — strings, soundboard, action, hammers, and cabinet — to understand exactly what your instrument needs.",
  },
  {
    step: "02",
    title: "Disassembly & Repair",
    desc: "Our craftsmen carefully disassemble the piano, replacing worn strings, repairing or rebuilding the action mechanism, and addressing any structural damage with precision.",
  },
  {
    step: "03",
    title: "Voicing & Finishing",
    desc: "Once mechanically sound, we voice the piano — shaping the hammers and balancing tone across all 88 keys until the instrument sings exactly as it should.",
  },
  {
    step: "04",
    title: "Final Tuning",
    desc: "A meticulous pitch raise and fine tuning ensures your restored piano is concert-ready. We don't leave until it sounds right.",
  },
];

export default function Restoration() {
  return (
    <section id="restoration" className="bg-[#FAF8F5]">
      {/* Top Banner */}
      <div className="bg-[#8C1A2B] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-white/60 text-sm font-bold uppercase tracking-[0.3em] mb-4">
                Our Signature Service
              </p>
              <h2 className="text-4xl md:text-6xl font-bold text-white leading-none">
                Piano<br />Restoration
              </h2>
            </div>
            <p className="text-white/75 text-lg max-w-md leading-relaxed">
              Some instruments are too precious to abandon. Our restoration workshop
              in Cairo specializes in returning forgotten pianos to their original grandeur —
              one key at a time.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left — Image stack */}
          <div className="relative pb-10 md:pb-0">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/piano-repair.jpg"
                alt="Piano restoration in progress"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating accent card */}
            <div className="absolute bottom-0 right-0 md:-bottom-6 md:-right-6 bg-[#8C1A2B] text-white p-5 md:p-6 max-w-[180px] md:max-w-[200px]">
              <p className="text-3xl font-bold mb-1">15+</p>
              <p className="text-sm text-white/70 uppercase tracking-wider">Years of craft experience</p>
            </div>
          </div>

          {/* Right — Content */}
          <div className="pt-4 md:pt-6">
            <p className="text-[#8C1A2B] text-sm font-bold uppercase tracking-[0.3em] mb-6">
              The Process
            </p>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
              From silent to singing — our restoration process
            </h3>

            <div className="flex flex-col gap-8">
              {steps.map((s) => (
                <div key={s.step} className="flex gap-6">
                  <span className="text-[#8C1A2B]/30 text-2xl font-bold leading-none flex-shrink-0 w-10">
                    {s.step}
                  </span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">{s.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-white border-l-4 border-[#8C1A2B]">
              <p className="text-gray-700 italic text-sm leading-relaxed">
                "We've restored over 200 pianos across Cairo — from century-old uprights
                found in estates to beloved family grands passed down through generations."
              </p>
              <p className="text-[#8C1A2B] font-bold text-sm mt-3">— Pianoman Team</p>
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-gray-200 mt-20">
          {[
            { num: "200+", label: "Pianos Restored" },
            { num: "15+", label: "Years Experience" },
            { num: "100%", label: "Client Satisfaction" },
            { num: "48h", label: "Assessment Turnaround" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`p-6 md:p-8 text-center border-gray-200
                ${i % 2 === 0 ? "border-r" : ""}
                ${i < 2 ? "border-b" : ""}
                md:border-r-0 md:border-b-0
                ${i < 3 ? "md:border-r" : ""}
              `}
            >
              <p className="text-[#8C1A2B] text-3xl md:text-4xl font-bold mb-2">{stat.num}</p>
              <p className="text-gray-500 text-xs uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
