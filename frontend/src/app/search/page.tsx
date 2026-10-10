import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Search, ChevronRight, Sparkles } from "lucide-react";
import { PRODUCTS, STORE_INFO } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}): Promise<Metadata> {
  const { q } = await searchParams;
  const query = q || "";
  return {
    title: query
      ? `Search results for "${query}" | ${STORE_INFO.name}`
      : `Search Vapes & Pods | ${STORE_INFO.name}`,
    description: `Find authentic vapes, disposables, pod kits, and e-liquids matching "${query}" in Delhi.`,
  };
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = (q || "").trim().toLowerCase();

  const CORE_SEARCH_TAGS = [
    { label: "Vape Shop Delhi", q: "Vape Shop Delhi" },
    { label: "Vape Shop in Delhi", q: "Vape Shop in Delhi" },
    { label: "Best Vape Shop Delhi", q: "Best Vape Shop Delhi" },
    { label: "Best Vape Shop in Delhi", q: "Best Vape Shop in Delhi" },
    { label: "Vape Shop Near Me", q: "Vape Shop Near Me" },
    { label: "Vape Delivery Delhi", q: "Vape Delivery Delhi" },
    { label: "Vape Shop South Delhi", q: "Vape Shop South Delhi" },
    { label: "Vape Shop West Delhi", q: "Vape Shop West Delhi" },
    { label: "Disposable Vape Delhi", q: "Disposable Vape Delhi" },
    { label: "Vape Price in Delhi", q: "Vape Price in Delhi" },
  ];

  const results = query
    ? PRODUCTS.filter((p) => {
        // Direct exact or substring match
        const nameMatch = p.name.toLowerCase().includes(query);
        const brandMatch = p.brand.toLowerCase().includes(query);
        const catMatch = p.category.toLowerCase().includes(query);
        const descMatch = (p.description || "").toLowerCase().includes(query);
        const flavorMatch = (p.flavors || []).some((f: string) =>
          f.toLowerCase().includes(query)
        );
        if (nameMatch || brandMatch || catMatch || descMatch || flavorMatch) {
          return true;
        }

        // Broad intent keyword matching for Delhi vape shoppers
        const words = query.split(/\s+/).filter(Boolean);
        const hasDisposableIntent = words.includes("disposable");
        const hasLiquidIntent = words.includes("liquid") || words.includes("salts") || words.includes("juice");
        const hasPodIntent = words.includes("pod") || words.includes("coil") || words.includes("kit");

        if (hasDisposableIntent && (p.category === "disposable-vapes" || p.category === "disposables")) return true;
        if (hasLiquidIntent && (p.category === "e-liquids" || p.category === "liquids")) return true;
        if (hasPodIntent && (p.category === "pod-systems" || p.category === "coils-pods")) return true;

        // If the query is an overall store/delivery/price search like "vape shop delhi", "best vape shop in delhi", "vape delivery delhi", "vape price in delhi"
        const isGeneralDelhiQuery = [
          "vape shop delhi",
          "vape shop in delhi",
          "best vape shop delhi",
          "best vape shop in delhi",
          "vape shop near me",
          "vape delivery delhi",
          "vape shop south delhi",
          "vape shop west delhi",
          "vape price in delhi",
          "vape delhi",
          "delhi vape",
        ].some((k) => query.includes(k) || k.includes(query));

        if (isGeneralDelhiQuery) return true;

        return false;
      })
    : PRODUCTS;

  return (
    <main className="min-h-screen bg-slate-50/50 pb-20 pt-28 sm:pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 py-1">
          <Link href="/" className="hover:text-orange-600 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/products" className="hover:text-orange-600 transition-colors">
            Products
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold truncate max-w-[200px]">
            {query ? `"${query}"` : "Search"}
          </span>
        </nav>

        {/* Header & Quick Keyword Pills */}
        <div className="border-b border-orange-100 pb-6 space-y-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" /> Search Catalog
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              {query ? `Results for "${query}"` : "All Products"}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {results.length > 0
                ? `Found ${results.length} authentic product${results.length > 1 ? "s" : ""} available for express 30–60 min delivery in Delhi.`
                : `No specific items matching "${query}". Showing popular Delhi recommendations below.`}
            </p>
          </div>

          {/* Core Delhi Search Keywords */}
          <div className="space-y-1.5 pt-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Popular Delhi Searches:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {CORE_SEARCH_TAGS.map((tag) => (
                <Link
                  key={tag.label}
                  href={`/search?q=${encodeURIComponent(tag.q)}`}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold border transition-all ${
                    query === tag.q.toLowerCase()
                      ? "bg-orange-600 text-white border-orange-600 shadow-sm"
                      : "bg-white text-slate-700 border-slate-200 hover:border-orange-400 hover:text-orange-600"
                  }`}
                >
                  {tag.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {(results.length > 0 ? results : PRODUCTS).map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </div>
    </main>
  );
}
