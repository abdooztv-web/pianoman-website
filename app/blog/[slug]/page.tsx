import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/app/blog/posts";

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
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://pianoman-eg.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://pianoman-eg.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
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

  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="max-w-2xl mx-auto px-5 md:px-6">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-700 text-sm mb-12 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          All articles
        </Link>

        {/* Post header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 text-xs text-gray-400 uppercase tracking-wider mb-5">
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            {post.title}
          </h1>
          <p className="mt-5 text-lg text-gray-500 leading-relaxed">
            {post.excerpt}
          </p>
          <div className="mt-8 h-px bg-gray-100" />
        </header>

        {/* Post body */}
        <article className="flex flex-col gap-6">
          {post.sections.map((section, i) => {
            if (section.type === "heading") {
              return (
                <h2
                  key={i}
                  className="text-2xl font-bold text-gray-900 mt-4 leading-snug"
                >
                  {section.text}
                </h2>
              );
            }
            if (section.type === "image") {
              return (
                <div key={i} className="relative w-full aspect-[16/9] overflow-hidden my-4">
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
                <ul key={i} className="flex flex-col gap-2 pl-1">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-gray-600 leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#8C1A2B] flex-shrink-0" />
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

        {/* CTA */}
        <div className="mt-16 pt-10 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="font-bold text-gray-900 mb-1">Ready to give your piano the care it deserves?</p>
            <p className="text-gray-500 text-sm">Get in touch — we respond within 24 hours.</p>
          </div>
          <Link
            href="/#contact"
            className="inline-block bg-[#8C1A2B] text-white font-bold uppercase tracking-widest text-sm px-8 py-4 hover:bg-[#6B1221] transition-colors flex-shrink-0"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
