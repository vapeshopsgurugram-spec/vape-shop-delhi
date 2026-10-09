"use client";

import React, { useState, useMemo } from "react";
import { Search, SlidersHorizontal, Sparkles, X, RotateCcw } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";

interface CategoryItem {
  id: string;
  name: string;
  slug: string;
  count?: number;
}

interface ProductsCatalogProps {
  products: Product[];
  categories: CategoryItem[];
}

export default function ProductsCatalog({
  products,
  categories,
}: ProductsCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("featured");

  // Dynamic counts calculated accurately from real product data
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: products.length,
    };
    products.forEach((p) => {
      const cat = p.category;
      counts[cat] = (counts[cat] || 0) + 1;
    });
    return counts;
  }, [products]);

  // Filtered & sorted products
  const filteredProducts = useMemo(() => {
    let result = products.filter((prod) => {
      // Category filter
      if (selectedCategory !== "all") {
        const matchesCategory =
          prod.category === selectedCategory ||
          categories.some(
            (c) =>
              (c.id === selectedCategory || c.slug === selectedCategory) &&
              (prod.category === c.slug || prod.category === c.id)
          );
        if (!matchesCategory) return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const nameMatch = prod.name.toLowerCase().includes(q);
        const brandMatch = prod.brand?.toLowerCase().includes(q);
        const flavorMatch = prod.flavors?.some((f: string) =>
          f.toLowerCase().includes(q)
        );
        const descMatch = prod.description?.toLowerCase().includes(q);
        if (!nameMatch && !brandMatch && !flavorMatch && !descMatch) {
          return false;
        }
      }

      return true;
    });

    // Sort logic
    if (sortBy === "price-low") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result = [...result].sort((a, b) => (b.rating || 0) - (a.rating || 0));
    } else if (sortBy === "puffs") {
      result = [...result].sort((a, b) => (b.puffs || 0) - (a.puffs || 0));
    }

    return result;
  }, [products, categories, selectedCategory, searchQuery, sortBy]);

  const resetFilters = () => {
    setSelectedCategory("all");
    setSearchQuery("");
    setSortBy("featured");
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* 1. Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
        {/* All Products Tab */}
        <button
          onClick={() => setSelectedCategory("all")}
          className={`shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
            selectedCategory === "all"
              ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/25 ring-2 ring-orange-500/20"
              : "bg-white text-slate-700 hover:text-orange-600 hover:bg-orange-50/50 border border-slate-200/90 shadow-2xs"
          }`}
        >
          <span>All Products</span>
          <span
            className={`px-1.5 py-0.5 rounded-md text-[11px] font-extrabold ${
              selectedCategory === "all"
                ? "bg-white/20 text-white"
                : "bg-slate-100 text-slate-500"
            }`}
          >
            {categoryCounts.all || products.length}
          </span>
        </button>

        {/* Individual Category Tabs */}
        {categories.map((cat) => {
          const isSelected =
            selectedCategory === cat.slug || selectedCategory === cat.id;
          const count =
            categoryCounts[cat.slug] || categoryCounts[cat.id] || 0;

          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                isSelected
                  ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/25 ring-2 ring-orange-500/20"
                  : "bg-white text-slate-700 hover:text-orange-600 hover:bg-orange-50/50 border border-slate-200/90 shadow-2xs"
              }`}
            >
              <span>{cat.name}</span>
              <span
                className={`px-1.5 py-0.5 rounded-md text-[11px] font-extrabold ${
                  isSelected
                    ? "bg-white/20 text-white"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* 2. Search & Sort Controls Toolbar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-3 sm:p-4 rounded-2xl border border-orange-100/80 shadow-2xs">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products in Delhi (e.g. Elf Bar, Geek Bar, Yuoto)..."
            className="w-full pl-9 pr-9 py-2 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-slate-900 placeholder:text-slate-400 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Sort & Count Controls */}
        <div className="flex items-center justify-between sm:justify-end gap-3">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-slate-500 shrink-0" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs sm:text-sm font-semibold bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-700 focus:outline-none focus:border-orange-500 cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
              <option value="puffs">Most Puffs</option>
            </select>
          </div>

          <span className="text-xs font-semibold text-slate-500 whitespace-nowrap">
            {filteredProducts.length} of {products.length} Products
          </span>
        </div>
      </div>

      {/* 3. Active filter chips feedback */}
      {(selectedCategory !== "all" || searchQuery) && (
        <div className="flex items-center gap-2 flex-wrap text-xs text-slate-600">
          <span className="font-semibold text-slate-500">Active filters:</span>
          {selectedCategory !== "all" && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-orange-50 text-orange-700 border border-orange-200 font-bold">
              Category:{" "}
              {categories.find(
                (c) => c.slug === selectedCategory || c.id === selectedCategory
              )?.name || selectedCategory}
              <button
                onClick={() => setSelectedCategory("all")}
                className="hover:text-orange-900 cursor-pointer"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
          {searchQuery && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-orange-50 text-orange-700 border border-orange-200 font-bold">
              Search: &quot;{searchQuery}&quot;
              <button
                onClick={() => setSearchQuery("")}
                className="hover:text-orange-900 cursor-pointer"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
          <button
            onClick={resetFilters}
            className="inline-flex items-center gap-1 text-xs text-orange-600 hover:text-orange-800 font-bold ml-1 cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" /> Reset all
          </button>
        </div>
      )}

      {/* 4. Product Grid or Empty State */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {filteredProducts.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-4 bg-white rounded-3xl border border-slate-200/90 shadow-2xs space-y-4">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center">
            <Search className="w-7 h-7" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-slate-900">
              No products found
            </h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              We couldn&apos;t find any products matching your current filters. Try searching with a different term or reset filters.
            </p>
          </div>
          <button
            onClick={resetFilters}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-xs sm:text-sm font-bold shadow-md shadow-orange-500/20 transition-all cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" /> View All Products
          </button>
        </div>
      )}
    </div>
  );
}
