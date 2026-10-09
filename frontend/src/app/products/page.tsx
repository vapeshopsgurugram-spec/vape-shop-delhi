import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Sparkles } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import ProductsCatalog from "@/components/ProductsCatalog";

export const metadata: Metadata = {
  title: "All Vape Devices, Pods & E-Liquids | Buy Online in Delhi",
  description:
    "Explore our complete range of 100% authentic disposable vapes, refillable pod kits, nicotine salts & coils in Delhi. 30-60 min express delivery with Cash on Delivery (COD).",
  keywords: [
    "All Vape Products Delhi",
    "Buy Vapes Online Delhi",
    "Disposable Vapes Delhi",
    "Pod Systems Delhi",
    "Vape Delivery Delhi 30 mins",
    "Yuoto Thanos Delhi",
    "Elf Bar Delhi",
    "Lost Mary Delhi NCR",
    "IGET Moon Delhi",
    "Uwell Caliburn Pods",
    "Nicotine Salts 50mg Delhi",
    "Cash on Delivery Vapes Delhi",
    "Vape Store Near Me Delhi",
  ],
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "All Vape Products & Kits | Vape Shop Delhi",
    description: "Browse 100% genuine vapes, pods & liquids with superfast 30-60 min delivery across Delhi.",
    url: "https://vapeshopdelhi.com/products",
    siteName: "Vape Shop Delhi",
    type: "website",
  },
};

export default function ProductsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://vapeshopdelhi.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: "https://vapeshopdelhi.com/products",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-50/50 pb-20 pt-24 sm:pt-28">
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
          <span className="text-slate-900 font-semibold">All Products</span>
        </nav>

        {/* Header */}
        <div className="border-b border-orange-100 pb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4" /> 100% Genuine Catalog
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            All Vape Devices &amp; Disposables
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
            Instant 30-60 minute express doorstep delivery across South Delhi, Central Delhi, West Delhi, North Delhi, and East Delhi.
          </p>
        </div>

        {/* Interactive Products Catalog */}
        <ProductsCatalog products={PRODUCTS} categories={CATEGORIES} />

        {/* Delhi Buyer & Delivery Guide (Helpful Content & Anti-Spam SEO) */}
        <section className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-orange-50/60 via-white to-amber-50/40 border border-orange-200/80 shadow-2xs space-y-4">
          <div className="space-y-1.5">
            <span className="text-xs font-bold text-orange-600 uppercase tracking-wider block">
              Delhi Vaping Buyer Guide
            </span>
            <h2 className="text-base sm:text-xl font-bold text-slate-900 tracking-tight">
              How to Choose the Right Vape in Delhi
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Whether you are transitioning from traditional smoking or seeking a reliable daily carry in Delhi NCR, choosing the right vape depends on puff capacity, flavor profile, and maintenance preference:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs">
            <div className="p-3.5 rounded-2xl bg-white border border-orange-100 shadow-2xs space-y-1">
              <h3 className="font-bold text-orange-700">High-Puff Disposables (15K – 80K)</h3>
              <p className="text-slate-500 text-[11px] leading-relaxed">
                Best for vapers who want maximum longevity with zero maintenance. Models like <strong>Geek Bar Burj 80,000 Puffs</strong> and <strong>Yuoto Digi 15,000</strong> feature smart LED screen indicators for battery and juice levels with Type-C fast charging.
              </p>
            </div>
            <div className="p-3.5 rounded-2xl bg-white border border-orange-100 shadow-2xs space-y-1">
              <h3 className="font-bold text-orange-700">Pocket Flagon Bars (5K – 10K)</h3>
              <p className="text-slate-500 text-[11px] leading-relaxed">
                Best for discreet, ergonomic portability. Classics like <strong>EBCREATE BC5000 US Edition</strong> offer legendary dual-mesh flavor purity that slips effortlessly into any pocket.
              </p>
            </div>
            <div className="p-3.5 rounded-2xl bg-white border border-orange-100 shadow-2xs space-y-1">
              <h3 className="font-bold text-orange-700">Refillable Pod Systems</h3>
              <p className="text-slate-500 text-[11px] leading-relaxed">
                Best for long-term economical use. Devices like <strong>Uwell Caliburn G3</strong> allow custom nicotine strengths and e-liquid refills with replaceable mesh coils.
              </p>
            </div>
          </div>

          <div className="pt-2 border-t border-orange-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500">
            <span>⚡ All products are factory-sealed with verifiable scratch-off QR codes.</span>
            <span className="font-semibold text-orange-600">30–60 Min Express Delivery across Delhi with COD &amp; UPI</span>
          </div>
        </section>
      </div>
    </main>
  );
}
