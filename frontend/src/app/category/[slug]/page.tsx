import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Sparkles } from "lucide-react";
import { PRODUCTS, CATEGORIES, STORE_INFO } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export async function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cat = CATEGORIES.find((c) => c.slug === slug);
  const name = cat ? cat.name : "Category";

  const categoryKeywords: Record<string, string[]> = {
    "disposable-vapes": [
      "Disposable Vapes Delhi",
      "Disposable Vapes Delhi NCR",
      "Buy disposable vape online Delhi",
      "Yuoto Thanos 5000 puffs Delhi",
      "Elf Bar BC5000 Delhi",
      "Elf Bar Raya D3 25000",
      "Lost Mary MT15000 Turbo",
      "IGET Moon 5000 puffs",
      "IGET Sun 20000 puffs",
      "Arabisk 40K Puffs Delhi",
      "Moon Night 40K Puffs",
      "Flonq Strawberry vape",
      "YUZU 15000 puffs mango",
      "Rechargeable disposable vape",
      "Same day disposable vape delivery",
      "Cash on delivery disposable vape Delhi",
      "Late night vape delivery South Delhi",
      "Best disposable vape store Delhi",
    ],
    "pod-systems": [
      "Pod Systems Delhi",
      "Pod Kits Delhi",
      "Uwell Caliburn A3S Pod Kit",
      "Uwell Caliburn G3 kit Delhi",
      "Uwell Caliburn GK3 Delhi NCR",
      "SMOK Nord X 60W Pod Kit",
      "SMOK Novo 2 Pod System",
      "Uwell Crown X Kit Delhi",
      "DRAG 4 Mod Kit Delhi",
      "Vaporesso Gen PT 60 Kit",
      "Refillable pod kits Delhi",
      "Best pod mod vape Delhi NCR",
      "Pod system with warranty Delhi",
      "Vape kits express delivery Delhi",
    ],
    "e-liquids": [
      "Nicotine Salts Delhi",
      "Nic Salts Delhi",
      "Imported Nic Salts 50mg Delhi",
      "20mg Nic Salt Delhi NCR",
      "VGod Salt Nic Delhi",
      "Dinner Lady Lemon Tart",
      "Skwezed Salt E Liquid",
      "Nasty Juice Nic Salt Delivery",
      "Vape flavors Delhi",
      "Watermelon Ice Nic Salt",
      "Mint Menthol E Liquid Delhi",
      "Double Apple Shisha Juice",
      "Freebase e juice Delhi",
      "Vape liquid delivery in 30 mins",
    ],
    "coils-pods": [
      "Vape Replacement Coils Delhi",
      "Caliburn Replacement Pods Delhi",
      "Caliburn A3S Cartridges",
      "Caliburn G3 Pods Delhi NCR",
      "SMOK RPM Coils Delhi",
      "Mesh replacement coils Delhi",
      "Original vape cartridges Delhi NCR",
      "Vape coil express delivery Delhi",
    ],
  };

  const keywords = categoryKeywords[slug] || [
    `${name} Delhi`,
    `${name} Delhi NCR`,
    `Buy ${name} online Delhi`,
    `${name} express delivery Delhi NCR`,
    `Authentic ${name} cash on delivery`,
  ];

  return {
    title: `${name} in Delhi | Buy Online with Express Delivery`,
    description: `Shop authentic ${name} in Delhi. Superfast 30-60 min express doorstep courier with Cash on Delivery (COD) & UPI. Best prices guaranteed.`,
    keywords,
    alternates: {
      canonical: `/category/${slug}`,
    },
    openGraph: {
      title: `${name} in Delhi | Vape Shop Delhi`,
      description: `Buy authentic ${name} in Delhi with 30-60 min express doorstep delivery.`,
      url: `https://www.vapeshop-delhi.com/category/${slug}`,
      siteName: "Vape Shop Delhi",
      type: "website",
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const currentCat = CATEGORIES.find((c) => c.slug === slug) || CATEGORIES[0];
  const filteredProducts = PRODUCTS.filter(
    (p) => p.category === currentCat.id || p.category === currentCat.slug
  );
  const displayProducts =
    filteredProducts.length > 0 ? filteredProducts : PRODUCTS;

  // Schema.org CollectionPage & ItemList Schema
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${currentCat.name} - Vape Shop Delhi`,
    url: `https://www.vapeshop-delhi.com/category/${currentCat.slug}`,
    numberOfItems: displayProducts.length,
    itemListElement: displayProducts.slice(0, 12).map((prod, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: `https://www.vapeshop-delhi.com/product/${prod.slug}`,
      name: prod.name,
      image: prod.image?.startsWith("http")
        ? prod.image
        : `https://www.vapeshop-delhi.com${prod.image}`,
    })),
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
        name: "Categories",
        item: "https://www.vapeshop-delhi.com/products",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: currentCat.name,
        item: `https://www.vapeshop-delhi.com/category/${currentCat.slug}`,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-50/50 pb-20 pt-24 sm:pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 py-1">
          <Link href="/" className="hover:text-orange-600 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link
            href="/products"
            className="hover:text-orange-600 transition-colors"
          >
            All Products
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">{currentCat.name}</span>
        </nav>

        <div className="border-b border-orange-100 pb-6 space-y-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" /> Category Collection
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              {currentCat.name}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Fast 30-60 min doorstep delivery across all localities of Delhi.
            </p>
          </div>

          {/* Quick Category Switcher Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <Link
              href="/products"
              className="shrink-0 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-white text-slate-700 hover:text-orange-600 hover:bg-orange-50/50 border border-slate-200 shadow-2xs transition-all"
            >
              All Products ({PRODUCTS.length})
            </Link>
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={`/category/${cat.slug}`}
                className={`shrink-0 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shadow-2xs ${
                  cat.slug === currentCat.slug
                    ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/25 ring-2 ring-orange-500/20"
                    : "bg-white text-slate-700 hover:text-orange-600 hover:bg-orange-50/50 border border-slate-200"
                }`}
              >
                {cat.name} ({cat.count})
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {displayProducts.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>

        {/* Category SEO Content & Local Trust Signals */}
        <section className="rounded-2xl sm:rounded-3xl bg-white border border-orange-100 p-6 sm:p-8 space-y-4 shadow-xs mt-8">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
            Authentic {currentCat.name} in Delhi – 30-60 Min Express Delivery
          </h2>
          <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3">
            <p>
              Shop 100% factory-sealed, verified <strong>{currentCat.name}</strong> with anti-counterfeit QR security codes.
              Enjoy guaranteed 30–60 minute instant doorstep courier across <strong>South Delhi (Saket, Hauz Khas, GK)</strong>,
              <strong>Central Delhi (Connaught Place)</strong>, <strong>West Delhi (Dwarka)</strong>, and
              all Delhi localities with Cash on Delivery (COD) and UPI.
            </p>
            <div className="flex flex-wrap gap-2 pt-1 text-xs">
              <span className="px-3 py-1 rounded-lg bg-orange-50 text-orange-700 font-bold border border-orange-200">
                ⚡ 30-60 Min Delivery
              </span>
              <span className="px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                🛡️ 100% Genuine Sealed Stock
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 font-bold border border-slate-200">
                💵 Cash on Delivery (COD) &amp; UPI
              </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
