import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { posts } from "@/app/blog/posts";

export const metadata: Metadata = {
  title: "Piano Blog — Cairo Piano Care Guides | Pianoman Egypt",
  description:
    "Expert guides on piano rental, tuning, and restoration in Cairo and Egypt. مقالات متخصصة عن تأجير وضبط وترميم البيانو في مصر.",
  keywords: [
    "piano blog cairo",
    "piano care tips egypt",
    "piano tuning guide cairo",
    "piano restoration guide cairo",
    "piano rental advice egypt",
    "مقالات بيانو مصر",
    "نصائح البيانو القاهرة",
    "دليل البيانو مصر",
  ],
  alternates: { canonical: "https://pianoman-eg.com/blog" },
};

const CATEGORY_COLORS: Record<string, string> = {
  Rental: "#8C1A2B",
  Tuning: "#1A4A8C",
  Restoration: "#2B5C1A",
  Events: "#8C5A1A",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function CategoryBadge({ category }: { category: string }) {
  const color = CATEGORY_COLORS[category] ?? "#8C1A2B";
  return (
    <span
      className="inline-block text-white text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1"
      style={{ backgroundColor: color }}
    >
      {category}
    </span>
  );
}

export default function BlogPage() {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const [featured, ...rest] = sorted;

  return (
    <div className="bg-[#FAF8F5] min-h-screen pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-5 md:px-6">

        {/* Header */}
        <div className="mb-12">
          <p className="text-[#8C1A2B] text-sm font-bold uppercase tracking-[0.3em] mb-4">
            From the Workshop
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Piano Blog
          </h1>
          <p className="mt-4 text-gray-500 max-w-lg text-lg">
            Guides, tips, and insights about piano care — written by the people who do this every day.
          </p>
        </div>

        {/* Featured post */}
        {featured && (
          <Link
            href={`/blog/${featured.slug}`}
            className="group block mb-8 bg-white border border-gray-100 hover:border-[#8C1A2B]/30 transition-colors overflow-hidden"
          >
            <div className="grid md:grid-cols-2">
              {/* Cover image */}
              <div className="relative h-64 md:h-96 overflow-hidden bg-gray-100">
                <Image
                  src={featured.coverImage}
                  alt={featured.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <CategoryBadge category={featured.category} />
                    <span className="text-gray-400 text-xs uppercase tracking-wider">
                      {featured.readTime}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">
                    {formatDate(featured.date)}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-5 group-hover:text-[#8C1A2B] transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {featured.excerpt}
                  </p>
                </div>

                <span className="mt-8 inline-flex items-center gap-2 text-[#8C1A2B] font-bold text-xs uppercase tracking-widest">
                  Read article
                  <svg
                    className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        )}

        {/* Grid — remaining posts */}
        <div className="grid md:grid-cols-2 gap-6">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col bg-white border border-gray-100 hover:border-[#8C1A2B]/30 transition-colors overflow-hidden"
            >
              {/* Cover image */}
              <div className="relative h-52 overflow-hidden bg-gray-100">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                {/* Category badge over image */}
                <div className="absolute top-4 left-4">
                  <CategoryBadge category={post.category} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs text-gray-400 uppercase tracking-wider mb-3">
                  <span>{formatDate(post.date)}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="text-lg font-bold text-gray-900 leading-snug mb-3 group-hover:text-[#8C1A2B] transition-colors flex-1">
                  {post.title}
                </h2>

                <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-2">
                  {post.excerpt}
                </p>

                <span className="inline-flex items-center gap-2 text-[#8C1A2B] font-bold text-xs uppercase tracking-widest">
                  Read article
                  <svg
                    className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-16 bg-[#8C1A2B] p-8 md:p-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="text-white/70 text-xs uppercase tracking-widest mb-2">Pianoman Egypt</p>
            <p className="text-white font-bold text-xl md:text-2xl leading-snug">
              Ready to talk about your piano?
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link
              href="/#contact"
              data-gtm-event="click_cta"
              data-gtm-label="Book Now"
              data-gtm-section="blog_listing"
              className="inline-block text-center bg-white text-[#8C1A2B] font-bold uppercase tracking-widest text-xs px-8 py-4 hover:bg-gray-100 transition-colors"
            >
              Book Now
            </Link>
            <a
              href={`https://wa.me/201555001233?text=${encodeURIComponent("Hi Pianoman! I'd like to enquire about your services.")}`}
              target="_blank"
              rel="noopener noreferrer"
              data-gtm-event="click_whatsapp"
              data-gtm-source="blog_listing"
              className="inline-flex items-center justify-center gap-2 text-center border border-white/40 text-white font-bold uppercase tracking-widest text-xs px-8 py-4 hover:border-white hover:bg-white/10 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

        {/* Back to site */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-700 text-sm transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to Pianoman
          </Link>
        </div>
      </div>
    </div>
  );
}
