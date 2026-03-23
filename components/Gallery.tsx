import Image from "next/image";

const photos = [
  { src: "/piano-keys.jpg", alt: "Piano keys", className: "col-span-2 row-span-2" },
  { src: "/piano-studio.jpg", alt: "Piano studio" },
  { src: "/piano-playing.jpg", alt: "Playing piano" },
  { src: "/piano-repair.jpg", alt: "Piano repair" },
  { src: "/piano-lesson.jpg", alt: "Piano lesson" },
  { src: "/piano-close.jpg", alt: "Piano close up" },
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
          {[
            { src: "/piano-keys.jpg", alt: "Piano keys" },
            { src: "/piano-studio.jpg", alt: "Piano studio" },
            { src: "/piano-repair.jpg", alt: "Piano repair" },
            { src: "/piano-playing.jpg", alt: "Playing piano" },
            { src: "/piano-lesson.jpg", alt: "Piano lesson" },
            { src: "/piano-close.jpg", alt: "Piano close up" },
          ].map((p) => (
            <div key={p.src} className="relative aspect-square overflow-hidden">
              <Image src={p.src} alt={p.alt} fill className="object-cover" />
            </div>
          ))}
        </div>

        {/* Desktop: Masonry-style Grid */}
        <div className="hidden md:grid grid-cols-3 grid-rows-3 gap-3 h-[600px]">
          <div className="col-span-2 row-span-2 relative overflow-hidden group">
            <Image src="/piano-keys.jpg" alt="Piano keys" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="relative overflow-hidden group">
            <Image src="/piano-studio.jpg" alt="Piano studio" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="relative overflow-hidden group">
            <Image src="/piano-playing.jpg" alt="Playing piano" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="relative overflow-hidden group">
            <Image src="/piano-repair.jpg" alt="Piano repair" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="relative overflow-hidden group">
            <Image src="/piano-lesson.jpg" alt="Piano lesson" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="relative overflow-hidden group">
            <Image src="/piano-close.jpg" alt="Piano close up" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
        </div>
      </div>
    </section>
  );
}
