import Image from "next/image";

const mobile = [
  { src: "/moments/DSC09272.jpg", alt: "Technician working on grand piano" },
  { src: "/moments/DSC09494.jpg", alt: "Old upright piano awaiting restoration" },
  { src: "/moments/DSC09370.jpg", alt: "Craftsman at the workshop bench" },
  { src: "/moments/DSC09394.jpg", alt: "Hands repairing piano action" },
  { src: "/moments/DSC09215.jpg", alt: "Piano hammers and action" },
  { src: "/moments/DSC09467.jpg", alt: "Workshop tools of the trade" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <p className="text-[#8C1A2B] text-sm font-bold uppercase tracking-[0.3em] mb-4">
              Our Work
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Captured moments
            </h2>
          </div>
          <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
            From restoration workshops to home visits — a glimpse into our world of pianos.
          </p>
        </div>

        {/* Mobile: 2-col simple grid */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {mobile.map((p) => (
            <div key={p.src} className="relative aspect-square overflow-hidden">
              <Image src={p.src} alt={p.alt} fill className="object-cover" />
              <div className="absolute inset-0 bg-[#8C1A2B]/15 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Desktop: Masonry-style Grid */}
        <div className="hidden md:grid grid-cols-3 grid-rows-3 gap-3 h-[600px]">
          <div className="col-span-2 row-span-2 relative overflow-hidden group">
            <Image src="/moments/DSC09272.jpg" alt="Technician working on grand piano" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-[#8C1A2B]/15 pointer-events-none" />
          </div>
          <div className="relative overflow-hidden group">
            <Image src="/moments/DSC09494.jpg" alt="Old upright piano awaiting restoration" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-[#8C1A2B]/15 pointer-events-none" />
          </div>
          <div className="relative overflow-hidden group">
            <Image src="/moments/DSC09370.jpg" alt="Craftsman at the workshop bench" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-[#8C1A2B]/15 pointer-events-none" />
          </div>
          <div className="relative overflow-hidden group">
            <Image src="/moments/DSC09394.jpg" alt="Hands repairing piano action" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-[#8C1A2B]/15 pointer-events-none" />
          </div>
          <div className="relative overflow-hidden group">
            <Image src="/moments/DSC09215.jpg" alt="Piano hammers and action" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-[#8C1A2B]/15 pointer-events-none" />
          </div>
          <div className="relative overflow-hidden group">
            <Image src="/moments/DSC09467.jpg" alt="Workshop tools of the trade" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-[#8C1A2B]/15 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
