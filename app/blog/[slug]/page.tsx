import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/app/blog/posts";
import BlogProgressBar from "@/components/BlogProgressBar";
import BlogSidebarCta from "@/components/BlogSidebarCta";
import AuthorCard from "@/components/AuthorCard";

const CATEGORY_COLORS: Record<string, string> = {
  Rental: "#8C1A2B",
  Tuning: "#1A4A8C",
  Restoration: "#2B5C1A",
  Events: "#8C5A1A",
};

const WHATSAPP_BASE =
  "https://wa.me/201555001233?text=" +
  encodeURIComponent(
    "Hi Pianoman! I read your blog and would like to enquire about your services."
  );

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Pianoman Egypt`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: `https://pianoman-eg.com/blog/${post.slug}`,
      languages: {
        en: `https://pianoman-eg.com/blog/${post.slug}`,
        ar: `https://pianoman-eg.com/blog/${post.slug}`,
        "x-default": `https://pianoman-eg.com/blog/${post.slug}`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://pianoman-eg.com/blog/${post.slug}`,
      type: "article",
      locale: "en_US",
      alternateLocale: "ar_EG",
      publishedTime: post.date,
      images: [{ url: `https://pianoman-eg.com${post.coverImage}` }],
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const categoryColor = CATEGORY_COLORS[post.category] ?? "#8C1A2B";

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    keywords: post.keywords.join(", "),
    image: `https://pianoman-eg.com${post.coverImage}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Pianoman Egypt",
      url: "https://pianoman-eg.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Pianoman Egypt",
      url: "https://pianoman-eg.com",
      logo: {
        "@type": "ImageObject",
        url: "https://pianoman-eg.com/icon.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://pianoman-eg.com/blog/${post.slug}`,
    },
    url: `https://pianoman-eg.com/blog/${post.slug}`,
    isPartOf: {
      "@type": "WebSite",
      name: "Pianoman Egypt",
      url: "https://pianoman-eg.com",
    },
  };

  return (
    <div className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Reading progress bar */}
      <BlogProgressBar />

      {/* Hero cover image */}
      <div className="relative w-full overflow-hidden" style={{ height: "65vh", minHeight: 380 }}>
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

        {/* Title area at bottom */}
        <div className="absolute inset-x-0 bottom-0 px-5 pb-10 md:px-12 md:pb-14">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="text-white text-[10px] font-bold uppercase tracking-[0.25em] px-2.5 py-1"
                style={{ backgroundColor: categoryColor }}
              >
                {post.category}
              </span>
              <span className="text-white/60 text-xs uppercase tracking-wider">
                {post.readTime}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {post.title}
            </h1>
            <p className="mt-3 text-white/60 text-sm">{formatDate(post.date)}</p>
          </div>
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-2xl mx-auto px-5 md:px-6 pt-10 pb-20">

        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-700 text-sm mb-10 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          All articles
        </Link>

        {/* Author card */}
        <AuthorCard />

        {/* Excerpt / lead */}
        <p className="text-lg text-gray-500 leading-relaxed border-l-2 border-[#8C1A2B]/30 pl-5 mb-10">
          {post.excerpt}
        </p>

        <div className="h-px bg-gray-100 mb-10" />

        {/* Sections */}
        <article className="flex flex-col gap-7">
          {post.sections.map((section, i) => {
            if (section.type === "heading") {
              return (
                <h2
                  key={i}
                  className="text-2xl font-bold text-gray-900 mt-6 leading-snug"
                >
                  {section.text}
                </h2>
              );
            }

            if (section.type === "image") {
              return (
                <div
                  key={i}
                  className="relative w-full overflow-hidden my-4 bg-gray-50"
                  style={{ aspectRatio: "16/9" }}
                >
                  <Image
                    src={section.src}
                    alt={section.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              );
            }

            if (section.type === "list") {
              return (
                <ul key={i} className="flex flex-col gap-3 pl-1">
                  {section.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-gray-600 leading-relaxed"
                    >
                      <span
                        className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: categoryColor }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }

            return (
              <p key={i} className="text-gray-600 leading-relaxed text-[1.0625rem]">
                {section.text}
              </p>
            );
          })}
        </article>

        {/* CTA section */}
        <div className="mt-16 border-t border-gray-100 pt-12">
          <div className="bg-[#FAF8F5] border border-gray-100 p-8 md:p-10">
            <p className="text-[#8C1A2B] text-xs font-bold uppercase tracking-[0.25em] mb-3">
              Pianoman Egypt
            </p>
            <p className="text-2xl font-bold text-gray-900 mb-2 leading-snug">
              Ready to give your piano the care it deserves?
            </p>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              We serve all Cairo districts. Same-day quotes on WhatsApp. Free assessment for restoration.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/#contact"
                data-gtm-event="click_cta"
                data-gtm-label="Book Now"
                data-gtm-section="blog_post"
                className="inline-block text-center bg-[#8C1A2B] text-white font-bold uppercase tracking-widest text-xs px-8 py-4 hover:bg-[#6B1221] transition-colors"
              >
                Book Now
              </Link>
              <a
                href={WHATSAPP_BASE}
                target="_blank"
                rel="noopener noreferrer"
                data-gtm-event="click_whatsapp"
                data-gtm-source="blog_post"
                className="inline-flex items-center justify-center gap-2 border border-[#25D366] text-[#25D366] font-bold uppercase tracking-widest text-xs px-8 py-4 hover:bg-[#25D366] hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Related posts */}
        {(() => {
          const related = posts
            .filter((p) => p.slug !== post.slug && p.category === post.category)
            .slice(0, 2);
          if (related.length === 0) return null;
          return (
            <div className="mt-16">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-400 mb-6">
                More in {post.category}
              </p>
              <div className="flex flex-col gap-4">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group flex items-start gap-4 p-4 border border-gray-100 hover:border-[#8C1A2B]/30 transition-colors"
                  >
                    <div className="relative w-20 h-14 flex-shrink-0 overflow-hidden bg-gray-100">
                      <Image src={r.coverImage} alt={r.title} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                        {r.readTime}
                      </p>
                      <p className="text-sm font-bold text-gray-800 group-hover:text-[#8C1A2B] transition-colors leading-snug">
                        {r.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })()}
      </div>

      {/* Sticky sidebar CTA (desktop) */}
      <BlogSidebarCta category={post.category} />
    </div>
  );
}
