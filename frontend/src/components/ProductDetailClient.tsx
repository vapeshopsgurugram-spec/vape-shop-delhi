"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  Star,
  Cloud,
  BatteryCharging,
  Sparkles,
  ShieldCheck,
  ShoppingCart,
  Check,
  Truck,
  Banknote,
  Clock,
  Heart,
  MapPin,
  Zap,
  HelpCircle,
  BadgeCheck,
} from "lucide-react";
import { STORE_INFO, PRODUCTS } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";

interface ProductDetailClientProps {
  product: Product;
  faqs?: Array<{ q: string; a: string }>;
}

export default function ProductDetailClient({
  product,
  faqs,
}: ProductDetailClientProps) {
  const { addToCart, setIsCartOpen } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedAnimation, setAddedAnimation] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const actionRef = useRef<HTMLDivElement>(null);
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!actionRef.current) return;
      const rect = actionRef.current.getBoundingClientRect();
      // Show sticky bar only when in-page buy buttons have scrolled past view
      setShowStickyBar(rect.bottom < 60);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const defaultFlavor = (product.flavors && product.flavors[0]) || "Standard";

  const discountPercent =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(
          ((product.originalPrice - product.price) / product.originalPrice) * 100
        )
      : null;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product, defaultFlavor);
    }
    setAddedAnimation(true);
    setIsCartOpen(true);
    setTimeout(() => setAddedAnimation(false), 2000);
  };

  const productUrl = `https://vapeshopdelhi.com/product/${product.slug}`;
  const whatsappMessage = encodeURIComponent(
    `*NEW ORDER - VAPE SHOP DELHI*\n` +
    `━━━━━━━━━━━━━━━━━━━━\n` +
    `📦 *Product:* ${product.name}\n` +
    `🏷️ *Brand:* ${product.brand || "Authentic"}\n` +
    `🔢 *Quantity:* ${quantity}\n` +
    `💰 *Total Amount:* ₹${(product.price * quantity).toLocaleString("en-IN")}\n` +
    `💵 *Payment Mode:* Cash on Delivery (COD) / UPI on Delivery\n` +
    `━━━━━━━━━━━━━━━━━━━━\n` +
    `🔗 *Product Link:* ${productUrl}\n\n` +
    `📍 *Delivery Details:*\n` +
    `• Name:\n` +
    `• Delivery Address:\n` +
    `• Area / Colony in Delhi NCR:\n` +
    `• Phone Number:\n\n` +
    `⚡ Please deliver in 30-60 mins across Delhi / Delhi NCR.`
  );

  // 8 Random Related Products (Hydration-Safe Deterministic Seed + Fresh Client Shuffle)
  const [relatedProducts, setRelatedProducts] = useState<Product[]>(() => {
    const pool = PRODUCTS.filter((p) => p.id !== product.id);
    const seed = (product.id || "").split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const shuffled = [...pool].sort((a, b) => {
      const hashA = (a.id + seed).split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
      const hashB = (b.id + seed).split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
      return (hashA % 19) - (hashB % 19);
    });
    return shuffled.slice(0, 8);
  });

  useEffect(() => {
    const pool = PRODUCTS.filter((p) => p.id !== product.id);
    const randomShuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, 8);
    setRelatedProducts(randomShuffled);
  }, [product.id]);

  // Dynamic 4 features with fallback
  const feat1 = product.features?.[0]?.text || "Mega Clouds";
  const feat2 =
    product.features?.[1]?.text ||
    (product.puffs ? `Up to ${product.puffs.toLocaleString()} Puffs` : "Long Lasting");
  const feat3 = product.features?.[2]?.text || "Refreshing Flavor";
  const feat4 = product.features?.[3]?.text || "Premium Quality";

  return (
    <div className="min-h-screen bg-slate-50/50 pb-28 sm:pb-16 pt-20 sm:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-8">
        {/* 1. Breadcrumb Bar */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 overflow-x-auto whitespace-nowrap scrollbar-none py-1"
        >
          <Link
            href="/"
            className="hover:text-orange-600 transition-colors font-medium"
          >
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link
            href="/products"
            className="hover:text-orange-600 transition-colors font-medium"
          >
            Products
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link
            href={`/category/${product.category}`}
            className="hover:text-orange-600 transition-colors font-medium capitalize"
          >
            {product.category?.replace(/-/g, " ")}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-900 font-semibold truncate max-w-[200px] sm:max-w-none">
            {product.name}
          </span>
        </nav>

        {/* 2. Main Product Showcase (2-Column Desktop Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Image Showcase (5 Cols) */}
          <div className="lg:col-span-5 space-y-2 sm:space-y-3">
            <div className="relative aspect-square max-h-[280px] sm:max-h-none w-full rounded-2xl sm:rounded-3xl bg-white border border-orange-100 shadow-[0_4px_25px_rgba(249,115,22,0.06)] overflow-hidden flex items-center justify-center p-4 sm:p-8 mx-auto">
              {/* Badge if any */}
              {product.badge && (
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                  <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-extrabold bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-sm flex items-center gap-1">
                    <span>🔥</span>
                    <span>{product.badge}</span>
                  </span>
                </div>
              )}

              {/* Wishlist Button */}
              <button
                type="button"
                onClick={() => setIsWishlisted(!isWishlisted)}
                aria-label="Add to wishlist"
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xs flex items-center justify-center hover:scale-110 active:scale-95 transition-all text-slate-400 hover:text-rose-500 cursor-pointer"
              >
                <Heart
                  className={`w-4 h-4 sm:w-5 sm:h-5 ${
                    isWishlisted ? "fill-rose-500 text-rose-500" : "text-slate-400"
                  }`}
                />
              </button>

              <div className="relative w-full h-full">
                <Image
                  src={product.image}
                  alt={`${product.name} | Vape Shop Delhi`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Quick Trust Highlights under Image (Ultra-Compact on Mobile) */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
              <div className="py-1.5 px-1 sm:py-2 sm:px-2 rounded-lg sm:rounded-xl bg-white border border-slate-200/70 flex flex-col items-center justify-center text-center">
                <div className="flex items-center gap-1">
                  <Truck className="w-3 h-3 text-orange-600 shrink-0" />
                  <span className="text-[10px] font-semibold text-slate-800 leading-tight">30-60 Min</span>
                </div>
                <span className="text-[8px] sm:text-[9px] text-slate-400 leading-tight mt-0.5">Delhi Express</span>
              </div>
              <div className="py-1.5 px-1 sm:py-2 sm:px-2 rounded-lg sm:rounded-xl bg-white border border-slate-200/70 flex flex-col items-center justify-center text-center">
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-600 shrink-0" />
                  <span className="text-[10px] font-semibold text-slate-800 leading-tight">100% Genuine</span>
                </div>
                <span className="text-[8px] sm:text-[9px] text-slate-400 leading-tight mt-0.5">Scratch QR</span>
              </div>
              <div className="py-1.5 px-1 sm:py-2 sm:px-2 rounded-lg sm:rounded-xl bg-white border border-slate-200/70 flex flex-col items-center justify-center text-center">
                <div className="flex items-center gap-1">
                  <Banknote className="w-3 h-3 text-amber-500 shrink-0" />
                  <span className="text-[10px] font-semibold text-slate-800 leading-tight">COD / UPI</span>
                </div>
                <span className="text-[8px] sm:text-[9px] text-slate-400 leading-tight mt-0.5">Doorstep Pay</span>
              </div>
            </div>
          </div>

          {/* Right Column: Details, Flavors, Pricing, Actions (7 Cols) */}
          <div className="lg:col-span-7 space-y-3.5 sm:space-y-4">
            
            {/* Brand + Status Tags */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-md bg-orange-50 text-orange-700 text-[11px] font-semibold tracking-wide uppercase border border-orange-200">
                {product.brand}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-medium flex items-center gap-1.5 border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                In Stock – Ready for Delhi Delivery
              </span>
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-0.5">
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
                {product.name}
              </h1>
              <p className="text-xs sm:text-[13px] text-slate-500">
                {product.subtitle || "Premium Authentic Vaping Device – Vape Shop Delhi"}
              </p>
            </div>

            {/* Ratings, Sold count & Reviews */}
            <div className="flex items-center gap-2.5 text-xs">
              <div className="flex items-center gap-1 bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded-full text-amber-800 font-semibold">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>{product.rating}</span>
              </div>
              <span className="text-slate-500">
                {product.reviewsCount || 120}+ Delhi Customer Reviews
              </span>
              <span className="text-slate-300">•</span>
              <span className="font-semibold text-orange-600">
                {product.soldCount || "1.2k+"} Units Dispatched
              </span>
            </div>

            {/* Pricing Section */}
            <div className="p-2.5 sm:p-3 rounded-xl bg-orange-50/30 border border-orange-100/80 space-y-0.5">
              <div className="flex items-baseline gap-2.5 flex-wrap">
                <span className="text-xl sm:text-2xl font-bold text-slate-900">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>
                {product.originalPrice && product.originalPrice > product.price && (
                  <>
                    <span className="text-xs sm:text-sm text-slate-400 line-through">
                      ₹{product.originalPrice.toLocaleString("en-IN")}
                    </span>
                    {discountPercent && (
                      <span className="px-2 py-0.5 rounded-md bg-orange-100/80 text-orange-700 font-semibold text-[11px] border border-orange-200">
                        {discountPercent}% OFF
                      </span>
                    )}
                  </>
                )}
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-500">
                Inclusive of all taxes • Cash on Delivery &amp; UPI available across Delhi &amp; NCR.
              </p>
            </div>

            {/* 4 Feature Highlights Grid (Compact) */}
            <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
              <div className="flex items-center gap-2 py-1.5 px-2.5 rounded-lg bg-slate-50/80 border border-slate-100">
                <Cloud className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                <span className="text-[11px] sm:text-xs font-medium text-slate-700 truncate leading-tight">
                  {feat1}
                </span>
              </div>
              <div className="flex items-center gap-2 py-1.5 px-2.5 rounded-lg bg-slate-50/80 border border-slate-100">
                <BatteryCharging className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                <span className="text-[11px] sm:text-xs font-medium text-slate-700 truncate leading-tight">
                  {feat2}
                </span>
              </div>
              <div className="flex items-center gap-2 py-1.5 px-2.5 rounded-lg bg-slate-50/80 border border-slate-100">
                <Sparkles className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                <span className="text-[11px] sm:text-xs font-medium text-slate-700 truncate leading-tight">
                  {feat3}
                </span>
              </div>
              <div className="flex items-center gap-2 py-1.5 px-2.5 rounded-lg bg-slate-50/80 border border-slate-100">
                <ShieldCheck className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                <span className="text-[11px] sm:text-xs font-medium text-slate-700 truncate leading-tight">
                  {feat4}
                </span>
              </div>
            </div>

            {/* Action Row: Quantity + Add to Cart + WhatsApp */}
            <div ref={actionRef} className="space-y-2 pt-0.5">
              <div className="flex items-center gap-2">
                {/* Quantity Stepper */}
                <div className="flex items-center border border-slate-200 rounded-xl bg-white p-0.5 shrink-0">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    aria-label="Decrease quantity"
                    className="w-8 h-8 rounded-lg bg-slate-50 hover:bg-orange-50 hover:text-orange-600 text-slate-700 font-semibold text-base flex items-center justify-center transition-colors cursor-pointer"
                  >
                    -
                  </button>
                  <span className="w-8 sm:w-9 text-center font-semibold text-slate-800 text-xs sm:text-sm select-none">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    aria-label="Increase quantity"
                    className="w-8 h-8 rounded-lg bg-slate-50 hover:bg-orange-50 hover:text-orange-600 text-slate-700 font-semibold text-base flex items-center justify-center transition-colors cursor-pointer"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="flex-1 h-10 sm:h-11 px-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm shadow-orange-500/20 active:scale-[0.99] transition-all cursor-pointer"
                >
                  {addedAnimation ? (
                    <>
                      <Check className="w-4 h-4 text-white" />
                      <span>Added to Cart!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-4 h-4" />
                      <span>Add to Cart</span>
                    </>
                  )}
                </button>
              </div>

              {/* Full Width Buy via WhatsApp */}
              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 sm:py-3 px-4 rounded-xl bg-[#eafaf1] hover:bg-[#dcfce7] border border-emerald-200 text-slate-900 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-2xs"
              >
                <span className="w-5 h-5 rounded-full bg-[#25d366] text-white flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </span>
                <span>Buy Now via WhatsApp</span>
              </a>
            </div>

            {/* Product Details Section */}
            {product.productDetails && product.productDetails.length > 0 && (
              <div className="p-3 sm:p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
                <h3 className="text-xs font-semibold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-orange-600" />
                  Product Details
                </h3>
                <ul className="space-y-1 text-xs text-slate-600">
                  {product.productDetails.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 stroke-[2]" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Local Delhi Express Dispatch Hubs */}
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-orange-50/70 via-white to-amber-50/40 border border-orange-200/80 p-5 sm:p-6 space-y-4 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-orange-100 pb-3">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-orange-500 text-white shadow-xs">
                <Zap className="w-4 h-4 fill-white" />
              </span>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  Express Courier Hubs in Delhi &amp; NCR
                </h3>
                <p className="text-xs text-slate-500">
                  Direct live dispatch across South Delhi, Central Delhi, West &amp; North Delhi.
                </p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold self-start sm:self-auto">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              Delhi Riders Active Now
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 text-xs">
            <div className="p-3 rounded-xl bg-white border border-orange-100/80 space-y-1">
              <div className="font-semibold text-slate-900 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-orange-600" /> South Delhi
              </div>
              <div className="text-orange-600 font-bold text-[11px]">15-25 Mins</div>
              <p className="text-[10px] text-slate-400">Saket, Hauz Khas, GK, Vasant Kunj</p>
            </div>

            <div className="p-3 rounded-xl bg-white border border-orange-100/80 space-y-1">
              <div className="font-semibold text-slate-900 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-orange-600" /> Central Delhi
              </div>
              <div className="text-orange-600 font-bold text-[11px]">20-30 Mins</div>
              <p className="text-[10px] text-slate-400">Connaught Place, Karol Bagh</p>
            </div>

            <div className="p-3 rounded-xl bg-white border border-orange-100/80 space-y-1">
              <div className="font-semibold text-slate-900 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-orange-600" /> West &amp; North Delhi
              </div>
              <div className="text-orange-600 font-bold text-[11px]">25-35 Mins</div>
              <p className="text-[10px] text-slate-400">Dwarka, Punjabi Bagh, Rohini</p>
            </div>

            <div className="p-3 rounded-xl bg-white border border-orange-100/80 space-y-1">
              <div className="font-semibold text-slate-900 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-orange-600" /> East Delhi &amp; Aerocity
              </div>
              <div className="text-orange-600 font-bold text-[11px]">25-35 Mins</div>
              <p className="text-[10px] text-slate-400">Mayur Vihar, Laxmi Nagar, Airport</p>
            </div>
          </div>
        </div>

        {/* Product Overview & Authenticity (Google Helpful Content & Local E-E-A-T Compliant) */}
        <section className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 p-5 sm:p-7 space-y-5 shadow-xs">
          <div className="space-y-1.5">
            <span className="text-[11px] font-semibold text-orange-600 uppercase tracking-wider">
              Authentic Device &amp; Delhi Delivery Guide
            </span>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
              About {product.name} – Performance, Authenticity &amp; Doorstep Delivery
            </h2>
          </div>

          <div className="prose prose-slate text-xs sm:text-sm text-slate-600 leading-relaxed space-y-4">
            <p>
              Looking to buy <strong>{product.name}</strong> in Delhi or Delhi NCR?
              At <strong>{STORE_INFO.name}</strong>, we stock 100% factory-sealed, genuine units backed by official
              manufacturer anti-counterfeit scratch-off security codes. Whether you need express delivery to <strong>South Delhi (Saket, Greater Kailash, Hauz Khas, Vasant Kunj)</strong>,
              <strong>Central Delhi (Connaught Place, Karol Bagh)</strong>, <strong>West Delhi (Dwarka, Punjabi Bagh)</strong>, <strong>North Delhi (Rohini, Pitampura)</strong>, or anywhere in <strong>Delhi NCR (Noida, Gurgaon, Aerocity)</strong>,
              our express courier service guarantees doorstep delivery within 30 to 60 minutes with Cash on Delivery (COD) and UPI.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-1">
              <div className="p-3.5 rounded-xl bg-orange-50/50 border border-orange-100 space-y-1">
                <h4 className="text-xs font-semibold text-slate-900 flex items-center gap-1.5">
                  <BadgeCheck className="w-4 h-4 text-emerald-600 shrink-0" /> 100% Scratch QR Verification
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every pack includes the official manufacturer holographic anti-counterfeit sticker. Scratch the protective silver coating to reveal your unique serial code and scan the QR code to confirm 1st-time query status before unsealing.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-orange-50/50 border border-orange-100 space-y-1">
                <h4 className="text-xs font-semibold text-slate-900 flex items-center gap-1.5">
                  <BatteryCharging className="w-4 h-4 text-orange-600 shrink-0" /> Pure Flavor &amp; Battery Longevity
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Engineered with premium mesh coil architecture and high-purity nicotine salt e-liquid to ensure rich flavor saturation, smooth vapor density, and zero dry hits from the first puff until the very last drop.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-orange-50/50 border border-orange-100 space-y-1">
                <h4 className="text-xs font-semibold text-slate-900 flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-amber-500 shrink-0" /> Discreet 30–60 Min Dispatch
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Shipped in discreet, unbranded tamper-evident packaging with zero product labels on the outside. Inspect your package upon arrival, then pay via Cash on Delivery or scan the rider&apos;s UPI QR code.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications Table */}
        {product.specifications && Object.keys(product.specifications).length > 0 && (
          <section className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 p-5 sm:p-7 space-y-4 shadow-xs">
            <h3 className="text-base font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-orange-600" />
              Technical Specifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {Object.entries(product.specifications).map(([key, val]) => (
                <div
                  key={key}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50/80 border border-slate-100 text-xs"
                >
                  <span className="font-medium text-slate-500">{key}</span>
                  <span className="font-semibold text-slate-800">{val}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Verified Delhi Customer Reviews */}
        <section className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 p-5 sm:p-7 space-y-4 shadow-xs">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                Verified Reviews in Delhi &amp; NCR
              </h3>
              <p className="text-xs text-slate-500">Real customer feedback for {product.name}</p>
            </div>
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-100 space-y-1.5 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-900">Rohan S.</span>
                <span className="text-emerald-700 font-medium flex items-center gap-1">
                  <BadgeCheck className="w-3.5 h-3.5 text-emerald-600" /> Verified Order
                </span>
              </div>
              <p className="text-slate-600">
                &quot;Ordered to Saket, South Delhi. The delivery boy arrived in literally 25 minutes! Product had original scratch code and was 100% genuine.&quot;
              </p>
              <span className="block text-[10px] text-slate-400">📍 Saket, South Delhi</span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-100 space-y-1.5 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-900">Arjun M.</span>
                <span className="text-emerald-700 font-medium flex items-center gap-1">
                  <BadgeCheck className="w-3.5 h-3.5 text-emerald-600" /> Verified Order
                </span>
              </div>
              <p className="text-slate-600">
                &quot;Smooth throat hit, authentic imported stock. Paid COD via UPI scanner upon doorstep inspection in Connaught Place.&quot;
              </p>
              <span className="block text-[10px] text-slate-400">📍 Connaught Place, New Delhi</span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-100 space-y-1.5 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-900">Kavita P.</span>
                <span className="text-emerald-700 font-medium flex items-center gap-1">
                  <BadgeCheck className="w-3.5 h-3.5 text-emerald-600" /> Verified Order
                </span>
              </div>
              <p className="text-slate-600">
                &quot;Discreet packaging, zero label marks on outer box. Best vape delivery experience in Delhi.&quot;
              </p>
              <span className="block text-[10px] text-slate-400">📍 Dwarka Sector 12, West Delhi</span>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="space-y-3.5 pt-2">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                  Related Vapes in Delhi &amp; NCR
                </h2>
                <p className="text-xs text-slate-500">Other popular products in this collection</p>
              </div>
              <Link
                href={`/category/${product.category}`}
                className="text-xs sm:text-sm font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-1"
              >
                <span>View All</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
        {/* Mobile Sticky Bottom Action Bar (Fixed, Appears ONLY When Scrolled Past Buttons) */}
        <div
          className={`fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 px-3.5 py-2.5 sm:hidden shadow-[0_-4px_25px_rgba(0,0,0,0.08)] transition-all duration-300 ease-in-out ${
            showStickyBar
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex items-center gap-2 max-w-md mx-auto">
            {/* Price Preview */}
            <div className="flex flex-col shrink-0 pr-1">
              <span className="text-base font-bold text-slate-900 leading-none">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
              <span className="text-[9px] text-emerald-600 font-semibold leading-tight mt-1">
                COD • 30m Delhi
              </span>
            </div>

            {/* Add to Cart Button */}
            <button
              type="button"
              onClick={handleAddToCart}
              className="flex-1 h-10 px-3 rounded-xl bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-sm shadow-orange-500/25 cursor-pointer"
            >
              {addedAnimation ? (
                <>
                  <Check className="w-3.5 h-3.5 text-white" />
                  <span>Added!</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>Add to Cart</span>
                </>
              )}
            </button>

            {/* Buy via WhatsApp Button */}
            <a
              href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 h-10 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-sm shadow-emerald-600/25 cursor-pointer whitespace-nowrap"
            >
              <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>WhatsApp Buy</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
