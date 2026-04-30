// To add real photos:
// 1. Drop your before/after images into the /public folder
// 2. Replace the placeholder <div> blocks with <Image> components like this:
//    import Image from "next/image";
//    <Image src="/before-1.jpg" alt="Piano before restoration" fill className="object-cover" />
// 3. Update the "alt" text to describe each specific piano

const pairs = [
  {
    id: 1,
    label: "Upright — Full Restoration",
    before: { src: null, alt: "Piano before restoration — drop before-1.jpg into /public" },
    after: { src: null, alt: "Piano after restoration — drop after-1.jpg into /public" },
  },
  {
    id: 2,
    label: "Grand Piano — Action Rebuild",
    before: { src: null, alt: "Grand piano before rebuild — drop before-2.jpg into /public" },
    after: { src: null, alt: "Grand piano after rebuild — drop after-2.jpg into /public" },
  },
];

export default function BeforeAfter() {
  return (
    <section id="transformations" className="bg-[#FAF8F5] py-16 md:py-32">
      <div className="max-w-6xl mx-auto px-5 md:px-6">
        {/* Header */}
        <div className="mb-14">
          <p className="text-[#8C1A2B] text-sm font-bold uppercase tracking-[0.3em] mb-4">
            Our Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-xl">
            Before & After
          </h2>
          <p className="mt-4 text-gray-500 max-w-lg">
            Real pianos we've restored back to life. Every transformation starts with listening to what the instrument needs.
          </p>
        </div>

        {/* Pairs grid */}
        <div className="flex flex-col gap-10">
          {pairs.map((pair) => (
            <div key={pair.id}>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                {pair.label}
              </p>
              <div className="grid grid-cols-2 gap-3 md:gap-5">
                {/* Before */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 border-2 border-dashed border-gray-300 bg-gray-50 flex flex-col items-center justify-center gap-3 text-center px-4">
                    <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-xs text-gray-400">Photo coming soon</span>
                  </div>
                  <span className="absolute top-3 left-3 bg-gray-800 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 z-10">
                    Before
                  </span>
                </div>

                {/* After */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 border-2 border-dashed border-[#8C1A2B]/30 bg-[#8C1A2B]/5 flex flex-col items-center justify-center gap-3 text-center px-4">
                    <svg className="w-10 h-10 text-[#8C1A2B]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-xs text-[#8C1A2B]/50">Photo coming soon</span>
                  </div>
                  <span className="absolute top-3 left-3 bg-[#8C1A2B] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 z-10">
                    After
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 pt-10 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <p className="text-gray-600 max-w-md">
            Have a piano that needs restoring? We'd love to hear its story.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#8C1A2B] text-white font-bold uppercase tracking-widest text-sm px-8 py-4 hover:bg-[#6B1221] transition-colors flex-shrink-0"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
