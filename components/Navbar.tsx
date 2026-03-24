import Image from "next/image";

const links = [
  { label: "Services", href: "#services" },
  { label: "Restoration", href: "#restoration" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <>
      {/* Hidden checkbox — drives CSS-only menu open/close, no JS needed */}
      <input type="checkbox" id="nav-toggle" className="hidden peer" />

      {/* Header — always has dark gradient so logo stays visible over any background */}
      <header className="fixed top-0 left-0 right-0 z-50 py-5 bg-gradient-to-b from-black/60 to-transparent peer-checked:bg-white peer-checked:from-white peer-checked:shadow-sm peer-checked:py-3 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

          {/* Logo — label closes menu on mobile, anchor navigates to hero */}
          <label htmlFor="nav-toggle" className="cursor-pointer">
            <a href="#hero" className="flex items-center gap-3">
              <Image
                src="/logo-mark.jpg"
                alt="Pianoman logo"
                width={40}
                height={40}
                className="rounded-full object-cover border border-white/20"
              />
              <span className="font-bold text-sm tracking-[0.3em] uppercase text-white peer-checked:text-[#8C1A2B]">
                Pianoman
              </span>
            </a>
          </label>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs font-medium uppercase tracking-wider text-white/80 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-[#8C1A2B] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 hover:bg-[#6B1221] transition-colors"
            >
              Book Now
            </a>
          </nav>

          {/* Hamburger */}
          <label
            htmlFor="nav-toggle"
            className="md:hidden flex flex-col justify-center gap-1.5 w-10 h-10 cursor-pointer"
            aria-label="Toggle menu"
          >
            <span className="block w-6 h-0.5 bg-white mx-auto peer-checked:bg-[#8C1A2B]" />
            <span className="block w-6 h-0.5 bg-white mx-auto peer-checked:bg-[#8C1A2B]" />
            <span className="block w-6 h-0.5 bg-white mx-auto peer-checked:bg-[#8C1A2B]" />
          </label>

        </div>
      </header>

      {/* Full-screen mobile menu */}
      <div className="fixed inset-0 z-40 bg-white hidden peer-checked:flex flex-col md:hidden">

        {/* Close button — top right, always visible */}
        <label
          htmlFor="nav-toggle"
          className="absolute top-5 right-6 w-10 h-10 flex items-center justify-center cursor-pointer text-gray-900 hover:text-[#8C1A2B] transition-colors"
          aria-label="Close menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </label>

        <div className="pt-20 px-8 flex flex-col flex-1">
          <nav className="flex flex-col gap-1 flex-1 justify-center">
            {links.map((l) => (
              <label key={l.href} htmlFor="nav-toggle">
                <a
                  href={l.href}
                  className="block py-5 border-b border-gray-100 text-3xl font-bold text-gray-900 uppercase tracking-tight active:text-[#8C1A2B]"
                >
                  {l.label}
                </a>
              </label>
            ))}
          </nav>

          <div className="pb-12 flex flex-col gap-5">
            <label htmlFor="nav-toggle" className="w-full">
              <a
                href="#contact"
                className="block bg-[#8C1A2B] text-white font-bold uppercase tracking-widest text-sm py-5 text-center w-full"
              >
                Book a Service
              </a>
            </label>
            <div className="flex flex-col gap-2 text-center">
              <a href="tel:01555001233" className="text-gray-500 text-sm">01555 001 233</a>
              <a href="mailto:abdooztv@gmail.com" className="text-gray-400 text-xs">abdooztv@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
