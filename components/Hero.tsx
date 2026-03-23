import Image from "next/image";

export default function Hero() {

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* ── Video ── */}
      <div className="absolute inset-0" style={{ pointerEvents: "none" }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-90"
          style={{ pointerEvents: "none" }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Vignette */}
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)", pointerEvents: "none" }}
        />

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-52"
          style={{ background: "linear-gradient(to top, #ffffff 0%, rgba(255,255,255,0.5) 40%, transparent 100%)", pointerEvents: "none" }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-5 w-full max-w-5xl mx-auto mt-auto mb-24 md:mb-36">

        {/* Thin rule + eyebrow */}
        <div className="flex items-center gap-3 mb-6 md:mb-8">
          <div className="w-8 md:w-12 h-px bg-white/40" />
          <p className="text-white/60 text-[10px] md:text-xs font-bold uppercase tracking-[0.4em]">
            Cairo, Egypt
          </p>
          <div className="w-8 md:w-12 h-px bg-white/40" />
        </div>

        {/* Brand name */}
        <p
          className="text-white/80 font-light uppercase mb-3 tracking-[0.4em] text-xs md:text-sm"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.8)" }}
        >
          Pianoman
        </p>

        {/* Main tagline — stacked on mobile for max impact */}
        <h1
          className="text-white font-bold leading-none tracking-tight mb-6 md:mb-8"
          style={{
            fontSize: "clamp(2.8rem, 14vw, 8.5rem)",
            textShadow: "0 0 80px rgba(0,0,0,0.5), 0 4px 30px rgba(0,0,0,0.7)",
          }}
        >
          <span className="block">Get.</span>
          <span className="block">Fix.</span>
          <span className="block">Repair.</span>
        </h1>

        {/* Divider */}
        <div className="w-12 h-px bg-[#8C1A2B] mb-6 md:mb-8" />

        {/* Subtext */}
        <p
          className="text-white/70 font-light leading-relaxed mb-8 md:mb-12 max-w-sm md:max-w-lg text-sm md:text-base"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.8)" }}
        >
          Cairo's trusted piano specialists — rental, home visits,
          and full restoration for instruments that deserve to be heard.
        </p>

        {/* CTAs — full width on mobile */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center w-full max-w-xs sm:max-w-none">
          <a
            href="#contact"
            className="bg-[#8C1A2B] text-white font-bold uppercase tracking-widest text-xs px-10 py-4 hover:bg-[#6B1221] transition-colors w-full sm:w-auto text-center"
          >
            Book a Service
          </a>
          <a
            href="#services"
            className="border border-white/50 text-white font-medium uppercase tracking-widest text-xs px-10 py-4 hover:bg-white/10 transition-colors w-full sm:w-auto text-center"
          >
            Explore Services
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-white/30 text-[10px] uppercase tracking-[0.4em]">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
