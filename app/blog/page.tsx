import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/app/blog/posts";

export const metadata: Metadata = {
  title: "Piano Blog — Cairo Piano Care Guides",
  description:
    "Guides, tips, and insights about piano care, restoration, tuning, and rental in Cairo and across Egypt. مقالات عن صيانة وتأجير وترميم البيانو في مصر.",
  keywords: [
    "piano blog cairo",
    "piano care tips egypt",
    "piano tuning guide",
    "piano restoration guide cairo",
    "piano rental advice egypt",
    "مقالات بيانو مصر",
    "نصائح البيانو القاهرة",
  ],
  alternates: { canonical: "https://pianoman-eg.com/blog" },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  return (
    <div className="bg-[#FAF8F5] min-h-screen pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-5 md:px-6">
        {/* Header */}
        <div className="mb-16">
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

        {/* Post grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col bg-white border border-gray-100 hover:border-[#8C1A2B]/30 transition-colors"
            >
              {/* Color accent bar */}
              <div className="h-1 bg-[#8C1A2B] w-0 group-hover:w-full transition-all duration-300" />

              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs text-gray-400 uppercase tracking-wider mb-5">
                  <span>{formatDate(post.date)}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="text-xl font-bold text-gray-900 leading-snug mb-3 group-hover:text-[#8C1A2B] transition-colors">
                  {post.title}
                </h2>

                <p className="text-gray-500 text-sm leading-relaxed flex-1">
                  {post.excerpt}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-[#8C1A2B] font-bold text-xs uppercase tracking-widest">
                  Read article
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Back to site */}
        <div className="mt-16 pt-10 border-t border-gray-200">
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
