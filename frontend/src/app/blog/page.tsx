import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Clock, Calendar, ArrowRight, Sparkles } from "lucide-react";
import { BLOG_POSTS } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Vape Guides, Reviews & Delivery Insights | Vape Shop Delhi",
  description:
    "Explore in-depth vape buying guides, authenticity verification tutorials, puff count comparisons, flavor charts, and express 30-min courier details across South Delhi, CP, Dwarka, and Delhi NCR.",
  keywords: [
    "Vape Guides Delhi",
    "How to spot fake vapes Delhi",
    "Gaffar market vape clone check",
    "Best disposable vapes 2026 Delhi",
    "Vape delivery Delhi guide",
    "Cash on delivery vape Delhi",
    "Pod systems vs disposables Delhi",
    "Vape Shop Delhi Blog",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Vape Guides & Insights | Vape Shop Delhi",
    description: "Expert reviews, authenticity guides, and express delivery details across Delhi & Delhi NCR.",
    url: "https://www.vapeshop-delhi.com/blog",
    siteName: "Vape Shop Delhi",
    type: "website",
    images: ["/banners/delhi-vape-banner-1.png"],
  },
};

export default function BlogIndexPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.vapeshop-delhi.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog & Guides",
        item: "https://www.vapeshop-delhi.com/blog",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-orange-50/20 pb-20 pt-24 sm:pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 py-1">
          <Link href="/" className="hover:text-orange-600 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">Vape Guides &amp; Blog</span>
        </nav>

        {/* Header */}
        <div className="border-b border-orange-100 pb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4 text-orange-500" /> Delhi Vaper&apos;s Knowledge Hub
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Vape Guides, Reviews &amp; Delhi Delivery Insights
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
            Everything you need to know about authentic devices, clone detection in Delhi markets, puff comparisons, popular flavor profiles, and 30–60 minute doorstep COD delivery across Delhi NCR.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col justify-between rounded-3xl bg-white border border-orange-100/90 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all duration-300 overflow-hidden"
            >
              <div>
                {/* Banner Thumbnail */}
                <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/9] w-full overflow-hidden bg-orange-50">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-white/95 text-orange-700 shadow-sm backdrop-blur-xs border border-orange-200">
                      {post.badge}
                    </span>
                  </div>
                </Link>

                <div className="p-5 sm:p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors leading-snug line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] sm:text-xs font-semibold text-slate-500 truncate max-w-[140px]">
                  By {post.author}
                </span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-orange-600 group-hover:text-orange-700 group-hover:translate-x-0.5 transition-all"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
