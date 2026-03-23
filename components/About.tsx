import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-[#8C1A2B] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-white/60 text-sm font-bold uppercase tracking-[0.3em] mb-6">
              Who We Are
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
              Cairo's piano people
            </h2>
            <div className="flex flex-col gap-5 text-white/80 text-base leading-relaxed">
              <p>
                Pianoman was born from a simple belief: every piano deserves to be heard at its best,
                and every musician deserves access to the right instrument without barriers.
              </p>
              <p>
                Based in Cairo, we've built our reputation through years of hands-on craftsmanship —
                tuning, restoring, and renting pianos to students, performers, and families across Egypt.
              </p>
              <p>
                We don't just fix pianos. We understand them. Each instrument that passes through our hands
                gets the attention it deserves, whether it's a quick home visit or a full restoration project.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="w-12 h-0.5 bg-white/40" />
              <p className="text-white/60 text-sm italic">Get, Fix, Repair — that's our promise.</p>
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
