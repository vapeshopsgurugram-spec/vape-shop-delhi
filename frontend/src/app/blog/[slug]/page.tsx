import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ChevronRight, Calendar, Clock, User, ArrowRight, Zap, MessageCircle } from "lucide-react";
import { BLOG_POSTS, getBlogPostBySlug } from "@/data/blogs";
import { STORE_INFO } from "@/data/products";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | Vape Shop Delhi",
    };
  }

  return {
    title: `${post.title} | Vape Shop Delhi`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.vapeshop-delhi.com/blog/${post.slug}`,
      siteName: "Vape Shop Delhi",
      type: "article",
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const otherPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 2);

  // Article Schema.org JSON-LD
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: "2026-10-06T10:00:00+05:30",
    dateModified: "2026-10-06T10:00:00+05:30",
    author: {
      "@type": "Organization",
      name: STORE_INFO.name,
      url: "https://www.vapeshop-delhi.com",
    },
    publisher: {
      "@type": "Organization",
      name: STORE_INFO.name,
      logo: {
        "@type": "ImageObject",
        url: "https://www.vapeshop-delhi.com/icon.png",
      },
    },
    image: `https://www.vapeshop-delhi.com${post.image}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.vapeshop-delhi.com/blog/${post.slug}`,
    },
  };

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
        name: "Blog",
        item: "https://www.vapeshop-delhi.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://www.vapeshop-delhi.com/blog/${post.slug}`,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-orange-50/20 pb-20 pt-24 sm:pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 py-1 overflow-x-auto whitespace-nowrap scrollbar-none">
          <Link href="/" className="hover:text-orange-600 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href="/blog" className="hover:text-orange-600 transition-colors">
            Blog
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-900 font-semibold truncate max-w-[200px] sm:max-w-none">
            {post.title}
          </span>
        </nav>

        {/* Article Header */}
        <header className="space-y-4 border-b border-orange-100 pb-6">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-orange-50 text-orange-700 border border-orange-200">
              {post.badge}
            </span>
            <div className="flex items-center gap-3 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            {post.subtitle}
          </p>

          <div className="flex items-center gap-2 text-xs text-slate-500 pt-2">
            <User className="w-4 h-4 text-orange-600" />
            <span>Written by <strong>{post.author}</strong></span>
          </div>
        </header>

        {/* Featured Banner */}
        <div className="relative aspect-[21/9] sm:aspect-[2.4/1] w-full rounded-3xl overflow-hidden border border-orange-100 shadow-sm bg-orange-50">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
          />
        </div>

        {/* Article Body */}
        <article className="rounded-3xl bg-white border border-orange-100 p-6 sm:p-10 space-y-8 shadow-xs">
          {post.content.map((sec, idx) => (
            <section key={idx} className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                {sec.heading}
              </h2>
              {sec.paragraphs.map((p, pIdx) => (
                <p
                  key={pIdx}
                  className="text-xs sm:text-sm text-slate-600 leading-relaxed whitespace-pre-line"
                >
                  {p}
                </p>
              ))}
            </section>
          ))}

          {/* Call to Action Box inside Article */}
          <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-orange-600 fill-orange-600" /> Order Online with Instant 30-Min Delivery in Delhi NCR
              </h3>
              <p className="text-xs text-slate-600">
                100% Genuine disposable vapes and pod kits available with Cash on Delivery (COD) &amp; Doorstep UPI across Delhi.
              </p>
            </div>
            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
                  `Hi Vape Shop Delhi, I am reading "${post.title}" and want to order for express 30-min delivery in Delhi.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Order</span>
              </a>
              <Link
                href="/products"
                className="flex-1 sm:flex-none inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
              >
                Catalog
              </Link>
            </div>
          </div>
        </article>

        {/* Read Next Section */}
        {otherPosts.length > 0 && (
          <div className="space-y-4 pt-6">
            <h3 className="text-lg font-bold text-slate-900">
              Read Next Guides:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {otherPosts.map((other) => (
                <Link
                  key={other.id}
                  href={`/blog/${other.slug}`}
                  className="p-5 rounded-2xl bg-white border border-orange-100 shadow-2xs hover:shadow-md hover:border-orange-300 transition-all space-y-2 block"
                >
                  <span className="text-[11px] font-bold text-orange-600 uppercase">
                    {other.badge}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 line-clamp-2">
                    {other.title}
                  </h4>
                  <div className="text-xs text-slate-400 flex items-center gap-2">
                    <span>{other.readTime}</span>
                    <span>•</span>
                    <span className="text-orange-600 font-semibold flex items-center gap-1">
                      Read <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
