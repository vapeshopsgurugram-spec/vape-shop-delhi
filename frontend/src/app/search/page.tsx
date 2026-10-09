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

  const results = query
    ? PRODUCTS.filter((p) => {
        const nameMatch = p.name.toLowerCase().includes(query);
        const brandMatch = p.brand.toLowerCase().includes(query);
        const catMatch = p.category.toLowerCase().includes(query);
        const descMatch = (p.description || "").toLowerCase().includes(query);
        const flavorMatch = (p.flavors || []).some((f: string) =>
          f.toLowerCase().includes(query)
        );
        return nameMatch || brandMatch || catMatch || descMatch || flavorMatch;
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

        {/* Header */}
        <div className="border-b border-orange-100 pb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" /> Search Catalog
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {query ? `Results for "${query}"` : "All Products"}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            {results.length > 0
              ? `Found ${results.length} authentic product${results.length > 1 ? "s" : ""} available for express delivery in Delhi.`
              : `No products matching "${query}" found. Showing popular recommendations below.`}
          </p>
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
