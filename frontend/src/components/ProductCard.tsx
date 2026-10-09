"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Star,
  Heart,
  ShoppingCart,
  Check,
  ArrowUpRight,
} from "lucide-react";
import { STORE_INFO } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedAnimation, setAddedAnimation] = useState(false);

  // Calculate discount percentage
  const discountPercent =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : null;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, (product.flavors && product.flavors[0]) || "Default");
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1200);
  };

  const productUrl = `https://vapeshopdelhi.com/product/${product.slug || product.id}`;
  const whatsappMessage = encodeURIComponent(
    `Hi Vape Shop Delhi! I want to order:\n\n` +
      `📦 *${product.name}*\n` +
      `🏷️ Brand: ${product.brand || "Authentic"}\n` +
      `💰 Price: ₹${product.price.toLocaleString("en-IN")}\n` +
      `🔗 Link: ${productUrl}\n\n` +
      `📍 Delivery Location in Delhi:\n` +
      `• Name:\n` +
      `• Address:\n\n` +
      `⚡ Please dispatch for express 30-60 min delivery in Delhi (Cash on Delivery / UPI).`
  );

  return (
    <div className="group flex flex-col justify-between rounded-[20px] sm:rounded-[26px] bg-white border border-slate-200/90 shadow-[0_4px_18px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl hover:border-orange-300 transition-all duration-300 overflow-hidden">
      {/* 1. TOP IMAGE CONTAINER (Flush Edge-to-Edge, No Inner Frame) */}
      <div className="relative w-full aspect-square bg-slate-50 overflow-hidden">
        <Link
          href={`/product/${product.slug || product.id}`}
          className="relative w-full h-full block cursor-pointer"
          aria-label={`View ${product.name} details`}
        >
          <Image
            src={product.image}
            alt={`${product.name} | Vape Shop Delhi`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover object-center w-full h-full group-hover:scale-105 transition-transform duration-500"
            priority={product.id === "p1" || product.id === "p-yuoto-apple"}
          />
        </Link>

        {/* Floating Top-Left Discount Badge */}
        {discountPercent && (
          <span className="absolute top-2 left-2 z-10 px-2 py-0.5 rounded-md bg-[#ff6600] text-white text-[10px] sm:text-[11px] font-bold shadow-xs tracking-tight">
            {discountPercent}% OFF
          </span>
        )}

        {/* Floating Top-Right Wishlist Button */}
        <button
          type="button"
          onClick={() => setIsWishlisted(!isWishlisted)}
          aria-label="Add to wishlist"
          className="absolute top-2 right-2 z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 hover:bg-white backdrop-blur-xs shadow-xs flex items-center justify-center text-slate-400 hover:text-rose-500 transition-all active:scale-95 cursor-pointer"
        >
          <Heart
            className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
              isWishlisted ? "fill-rose-500 text-rose-500" : "text-slate-400"
            }`}
          />
        </button>
      </div>

      {/* 2. PRODUCT DETAILS SECTION */}
      <div className="p-2.5 sm:p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Brand Row */}
          <div className="flex items-center justify-between gap-1">
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#ea580c] truncate">
              {product.brand || "PREMIUM"}
            </span>
          </div>

          {/* Product Title */}
          <Link href={`/product/${product.slug || product.id}`} className="block mt-0.5">
            <h3 className="text-[13px] sm:text-[15px] font-semibold text-slate-900 leading-snug line-clamp-2 group-hover:text-orange-600 transition-colors">
              {product.name}
            </h3>
          </Link>

          {/* Subtitle / Specs Line */}
          <p className="text-[11px] sm:text-xs text-slate-400 truncate mt-0.5">
            {product.subtitle ||
              (product.puffs
                ? `${product.puffs.toLocaleString()} Puffs · ${(product.flavors && product.flavors[0]) || "Mesh Coil"}`
                : "100% Genuine · Express Delhi Delivery")}
          </p>

          {/* Star Rating & Review Count */}
          <div className="flex items-center gap-1 mt-1.5">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <span className="text-[11px] sm:text-xs font-semibold text-slate-800">
              {product.rating || 4.9}
            </span>
            <span className="text-[10px] sm:text-xs text-slate-400 font-medium">
              ({product.reviewsCount || 185}+)
            </span>
          </div>

          {/* Pricing Row */}
          <div className="flex items-baseline gap-1.5 mt-2 flex-wrap">
            <span className="text-base sm:text-xl font-bold text-slate-900">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-[11px] sm:text-xs text-slate-400 line-through font-medium">
                ₹{product.originalPrice.toLocaleString("en-IN")}
              </span>
            )}
          </div>
        </div>

        {/* 3. ACTION BUTTONS (Exact Match with Single-Line Reference Design) */}
        <div className="pt-2.5 sm:pt-3 space-y-1.5 sm:space-y-2 mt-auto">
          {/* Button 1: Solid Vibrant Orange Add to Cart Button */}
          <button
            type="button"
            onClick={handleAddToCart}
            className="w-full py-2 sm:py-2.5 px-2 sm:px-3 rounded-xl sm:rounded-2xl bg-[#ff6600] hover:bg-[#ea580c] active:scale-[0.98] text-white font-bold text-[11px] sm:text-sm shadow-xs flex items-center justify-center gap-1.5 cursor-pointer transition-all duration-200 whitespace-nowrap"
          >
            {addedAnimation ? (
              <>
                <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                <span className="whitespace-nowrap">Added to Cart!</span>
              </>
            ) : (
              <>
                <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2]" />
                <span className="whitespace-nowrap">Add to Cart</span>
              </>
            )}
          </button>

          {/* Button 2: Soft Mint Green Buy via WhatsApp Button */}
          <a
            href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2 sm:py-2.5 px-2 sm:px-3 rounded-xl sm:rounded-2xl bg-[#eefcf3] hover:bg-[#e1f9ea] border border-[#a7f3d0] active:scale-[0.98] text-[#065f46] font-bold text-[11px] sm:text-sm flex items-center justify-center gap-1 sm:gap-1.5 transition-all duration-200 shadow-2xs whitespace-nowrap"
          >
            {/* WhatsApp Speech Bubble Icon */}
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current text-[#10b981] shrink-0"
              viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            <span className="whitespace-nowrap">Buy via WhatsApp</span>
            <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5] shrink-0" />
          </a>
        </div>
      </div>
    </div>
  );
}
