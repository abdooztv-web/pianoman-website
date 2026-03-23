import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] text-white">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-5 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logo-mark.jpg"
                alt="Pianoman"
                width={44}
                height={44}
                className="rounded-full object-cover border-2 border-white/20"
              />
              <span className="font-bold text-xl tracking-widest uppercase text-[#8C1A2B]">
                Pianoman
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-6">
              Cairo's trusted piano specialists. We rent, tune, visit your home, and restore
              instruments that deserve to be heard.
            </p>
            <p className="text-[#8C1A2B] font-bold text-lg tracking-wide">
              Get, Fix, Repair.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/40 mb-5">
              Services
            </p>
            <ul className="flex flex-col gap-3">
              {["Piano Rental", "Home Visits", "Restoration", "Tuning & Repair"].map((item) => (
                <li key={item}>
                  <span className="text-white/60 text-sm hover:text-white transition-colors cursor-default">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/40 mb-5">
              Contact
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:abdooztv@gmail.com"
                  className="text-white/60 text-sm hover:text-white transition-colors break-all"
                >
                  abdooztv@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:01555001233"
                  className="text-white/60 text-sm hover:text-white transition-colors"
                >
                  01555 001 233
                </a>
              </li>
              <li>
                <a
                  href="https://pianoman-eg.com"
                  className="text-white/60 text-sm hover:text-white transition-colors"
                >
                  pianoman-eg.com
                </a>
              </li>
              <li>
                <span className="text-white/60 text-sm">Cairo, Egypt</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © {year} Pianoman. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">Cairo, Egypt</p>
        </div>
      </div>
    </footer>
  );
}
