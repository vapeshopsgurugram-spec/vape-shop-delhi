"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Phone, ShoppingBag, Flame } from "lucide-react";
import { STORE_INFO } from "@/data/products";

const SLIDES = [
  {
    id: 1,
    image: "/banners/delhi-vape-banner-1.webp",
    mobileImage: "/banners/delhi-vape-mobile-1.webp",
    alt: "Premium Vapes in Delhi - Buy Authentic Vapes, Pods & E-Liquids Online in Delhi",
    title: "Premium Vapes in Delhi",
    subtitle: "Fast 30-60 Min Express Delivery Across All Delhi Localities",
  },
  {
    id: 2,
    image: "/banners/delhi-vape-banner-2.webp",
    mobileImage: "/banners/delhi-vape-mobile-2.webp",
    alt: "Express 30-60 Min Delivery Across Delhi - South Delhi, Central Delhi, West Delhi",
    title: "Express 30-60 Min Delivery",
    subtitle: "100% Genuine Scratch Code Verified Products in Delhi",
  },
  {
    id: 3,
    image: "/banners/delhi-vape-banner-3.webp",
    mobileImage: "/banners/delhi-vape-mobile-3.webp",
    alt: "Vape Shop Delhi - Best Prices & Wide Range Across Delhi",
    title: "Wide Range of Pods & Liquids",
    subtitle: "Doorstep Cash on Delivery & UPI Accepted Across Delhi",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Auto-slide effect every 2 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 2500);

    return () => clearInterval(timer);
  }, [isPaused]);

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  // Mobile swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goToNext();
      else goToPrev();
    }
    touchStartX.current = null;
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* 100% Full Display Screen Width Edge-to-Edge Banner Container */}
      <div className="relative w-full aspect-[1098/1432] sm:aspect-[1953/805] overflow-hidden bg-slate-950">
        {/* Slides */}
        {SLIDES.map((slide, index) => {
          const isActive = currentSlide === index;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* Desktop Banner (Hidden on Mobile) */}
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                quality={85}
                className={`object-cover object-center w-full h-full select-none ${
                  slide.mobileImage ? "hidden sm:block" : ""
                }`}
                sizes="100vw"
              />

              {/* Mobile Phone Banner (Visible only on Mobile) */}
              {slide.mobileImage && (
                <Image
                  src={slide.mobileImage}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  quality={85}
                  className="object-cover object-center w-full h-full select-none block sm:hidden"
                  sizes="100vw"
                />
              )}
            </div>
          );
        })}

        {/* ── Hero Text Overlay (Competitor-style: H1 + CTA + Trust Badges) ── */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 sm:px-8 pointer-events-none">
          {/* Dark gradient so text stays readable on any banner */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/60 rounded-none" />

          <div className="relative z-10 flex flex-col items-center gap-3 sm:gap-4 max-w-2xl w-full">
            {/* Badge */}
            <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-orange-300">
              Same-Day Delivery · Delhi NCR
            </span>

            {/* H1 — main page heading overlaid on banner */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg">
              Vape Shop Delhi
            </h1>
            <p className="text-orange-400 text-lg sm:text-2xl lg:text-3xl font-bold -mt-1 sm:-mt-2">
              Best Vape Shop &amp; Store in Delhi NCR
            </p>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-white/85 max-w-lg leading-relaxed font-medium">
              Authentic disposable vapes, pods &amp; e-liquids. 30–60 min express
              doorstep delivery with Cash on Delivery across Delhi NCR.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-1 pointer-events-auto">
              <a
                href="https://wa.me/918813092161?text=Hi%20Vape%20Shop%20Delhi!%20I%20want%20to%20place%20an%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold text-sm sm:text-base px-6 py-3 shadow-lg hover:shadow-xl transition-all active:scale-95"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                WhatsApp +91 88130 92161
              </a>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/15 hover:bg-white/25 border border-white/40 text-white font-semibold text-sm sm:text-base px-6 py-3 backdrop-blur-sm transition-all active:scale-95"
              >
                Browse Products
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mt-1 text-xs sm:text-sm text-white/80 font-medium">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                4.9 / 5 · 134+ Reviews
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                30–60 Min Delivery
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                100% Authentic
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Arrows & Dots */}
        {SLIDES.length > 1 && (
          <>
            <button
              onClick={goToPrev}
              aria-label="Previous Slide"
              className="absolute left-3 sm:left-6 md:left-10 top-1/2 -translate-y-1/2 z-30 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/20 hover:bg-white/40 text-white shadow-xl backdrop-blur-md flex items-center justify-center transition-all opacity-70 hover:opacity-100 cursor-pointer"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={goToNext}
              aria-label="Next Slide"
              className="absolute right-3 sm:right-6 md:right-10 top-1/2 -translate-y-1/2 z-30 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/20 hover:bg-white/40 text-white shadow-xl backdrop-blur-md flex items-center justify-center transition-all opacity-70 hover:opacity-100 cursor-pointer"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 bg-slate-950/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
              {SLIDES.map((slide, index) => {
                const isActive = currentSlide === index;
                return (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      isActive
                        ? "w-7 h-2 bg-gradient-to-r from-orange-500 to-amber-500 shadow-sm"
                        : "w-2 h-2 bg-white/60 hover:bg-white"
                    }`}
                  />
                );
              })}
            </div>
          </>
        )}
      </div>

      {/* Quick Action Feature Dock Under Banner (1 Row of Icons on Phone mode, Neo-Cards on Desktop) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 sm:mt-6">
        <div className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
          {/* 1. Shop Products */}
          <Link
            href="/products"
            aria-label="Shop Products"
            className="group relative flex items-center justify-center sm:justify-between gap-3 p-2.5 sm:p-4 rounded-[20px] sm:rounded-[28px] bg-white border border-orange-200/80 shadow-[0_6px_20px_-4px_rgba(255,107,0,0.12)] hover:shadow-[0_16px_36px_-6px_rgba(255,107,0,0.22)] hover:border-orange-300 hover:-translate-y-0.5 sm:hover:-translate-y-1 active:scale-95 transition-all duration-300 overflow-hidden cursor-pointer"
          >
            {/* Ambient Aurora Soft Blur Glow */}
            <div className="absolute -top-7 -right-7 w-28 h-28 bg-gradient-to-br from-orange-200/50 to-amber-100/40 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-orange-100/40 rounded-full blur-xl pointer-events-none" />

            {/* Icon: Orange Squircle with 3 Sunburst Rays */}
            <div className="relative shrink-0">
              {/* 3 Sunburst Rays / Sparkle Lines */}
              <div className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 text-[#ff6600] z-10 transition-transform group-hover:scale-125">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 16 16" fill="none">
                  <path d="M2.5 13.5L5.5 10.5M8 14.5V10.5M13.5 13.5L10.5 10.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                </svg>
              </div>
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-[16px] sm:rounded-[18px] bg-gradient-to-b from-[#ff8500] to-[#ff4e00] text-white flex items-center justify-center shadow-[0_8px_18px_-3px_rgba(255,78,0,0.4)] group-hover:scale-105 transition-transform duration-300">
                <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
              </div>
            </div>

            {/* Desktop Center: Text (Hidden on Phone Mode) */}
            <div className="hidden sm:block min-w-0 flex-1 relative z-10 pl-1">
              <span className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#ff5500] leading-none mb-1">
                100% GENUINE
              </span>
              <h3 className="text-[14px] sm:text-[16px] font-bold text-slate-900 leading-tight truncate group-hover:text-orange-600 transition-colors">
                Shop Products
              </h3>
              <p className="text-[11px] sm:text-[12px] font-medium text-slate-400 truncate mt-0.5">
                Original &amp; Quality Products
              </p>
            </div>

            {/* Desktop Right: Soft Orange Chevron Circle Button (Hidden on Phone Mode) */}
            <div className="hidden sm:flex w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#fff1e7] text-[#ff5500] group-hover:bg-[#ff5500] group-hover:text-white items-center justify-center shrink-0 transition-all duration-300 relative z-10 shadow-2xs">
              <ChevronRight className="w-4 h-4 stroke-[3] group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>

          {/* 2. Delhi Helpline (Call) */}
          <a
            href={`tel:${STORE_INFO.phone}`}
            aria-label="Call Delhi Helpline"
            className="group relative flex items-center justify-center sm:justify-between gap-3 p-2.5 sm:p-4 rounded-[20px] sm:rounded-[28px] bg-white border border-orange-200/80 shadow-[0_6px_20px_-4px_rgba(255,107,0,0.12)] hover:shadow-[0_16px_36px_-6px_rgba(255,107,0,0.22)] hover:border-orange-300 hover:-translate-y-0.5 sm:hover:-translate-y-1 active:scale-95 transition-all duration-300 overflow-hidden cursor-pointer"
          >
            {/* Ambient Aurora Soft Blur Glow */}
            <div className="absolute -top-7 -right-7 w-28 h-28 bg-gradient-to-br from-orange-200/50 to-amber-100/40 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-orange-100/40 rounded-full blur-xl pointer-events-none" />

            {/* Icon: Orange Squircle with Broadcast/Sound Waves */}
            <div className="relative shrink-0">
              {/* 2 Sound / Broadcast Wave Arcs */}
              <div className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 text-[#ff6600] z-10 transition-transform group-hover:scale-125">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 16 16" fill="none">
                  <path d="M4 12A8 8 0 0 1 12 4" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                  <path d="M7 12A5 5 0 0 1 12 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                </svg>
              </div>
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-[16px] sm:rounded-[18px] bg-gradient-to-b from-[#ff8500] to-[#ff4e00] text-white flex items-center justify-center shadow-[0_8px_18px_-3px_rgba(255,78,0,0.4)] group-hover:scale-105 transition-transform duration-300">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2] fill-white" />
              </div>
            </div>

            {/* Desktop Center: Text (Hidden on Phone Mode) */}
            <div className="hidden sm:block min-w-0 flex-1 relative z-10 pl-1">
              <span className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#ff5500] leading-none mb-1">
                DELHI HELPLINE
              </span>
              <h3 className="text-[14px] sm:text-[16px] font-bold text-slate-900 leading-tight truncate group-hover:text-orange-600 transition-colors">
                Call 8813092161
              </h3>
              <p className="text-[11px] sm:text-[12px] font-medium text-slate-400 truncate mt-0.5">
                Mon - Sat, 10AM - 8PM
              </p>
            </div>

            {/* Desktop Right: Soft Orange Chevron Circle Button (Hidden on Phone Mode) */}
            <div className="hidden sm:flex w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#fff1e7] text-[#ff5500] group-hover:bg-[#ff5500] group-hover:text-white items-center justify-center shrink-0 transition-all duration-300 relative z-10 shadow-2xs">
              <ChevronRight className="w-4 h-4 stroke-[3] group-hover:translate-x-0.5 transition-transform" />
            </div>
          </a>

          {/* 3. WhatsApp Order */}
          <a
            href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
              "Hi Vape Shop Delhi! I want to place a quick order."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Order"
            className="group relative flex items-center justify-center sm:justify-between gap-3 p-2.5 sm:p-4 rounded-[20px] sm:rounded-[28px] bg-white border border-emerald-200/90 shadow-[0_6px_20px_-4px_rgba(16,185,129,0.16)] hover:shadow-[0_16px_36px_-6px_rgba(16,185,129,0.25)] hover:border-emerald-300 hover:-translate-y-0.5 sm:hover:-translate-y-1 active:scale-95 transition-all duration-300 overflow-hidden cursor-pointer"
          >
            {/* Ambient Aurora Soft Mint Blur Glow */}
            <div className="absolute -top-7 -right-7 w-28 h-28 bg-gradient-to-br from-emerald-200/50 to-teal-100/40 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-emerald-100/40 rounded-full blur-xl pointer-events-none" />

            {/* Icon: Green Squircle with Online Pulse Dot */}
            <div className="relative shrink-0">
              {/* Online Green Indicator Dot */}
              <span className="absolute -top-1 -right-1 sm:-top-1.5 sm:-right-1.5 flex h-3 w-3 sm:h-3.5 sm:w-3.5 z-10">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 sm:h-3.5 sm:w-3.5 bg-[#16a34a] border-2 border-white shadow-xs" />
              </span>
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-[16px] sm:rounded-[18px] bg-gradient-to-b from-[#1cd25d] to-[#0cb84a] text-white flex items-center justify-center shadow-[0_8px_18px_-3px_rgba(16,185,129,0.42)] group-hover:scale-105 transition-transform duration-300">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </div>
            </div>

            {/* Desktop Center: Text (Hidden on Phone Mode) */}
            <div className="hidden sm:block min-w-0 flex-1 relative z-10 pl-1">
              <span className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#16a34a] leading-none mb-1">
                30-60 MIN DELIVERY
              </span>
              <h3 className="text-[14px] sm:text-[16px] font-bold text-slate-900 leading-tight truncate group-hover:text-emerald-600 transition-colors">
                WhatsApp Order
              </h3>
              <p className="text-[11px] sm:text-[12px] font-medium text-slate-400 truncate mt-0.5">
                Quick &amp; Easy Ordering
              </p>
            </div>

            {/* Desktop Right: Soft Mint Green Chevron Circle Button (Hidden on Phone Mode) */}
            <div className="hidden sm:flex w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#e8faef] text-[#16a34a] group-hover:bg-[#16a34a] group-hover:text-white items-center justify-center shrink-0 transition-all duration-300 relative z-10 shadow-2xs">
              <ChevronRight className="w-4 h-4 stroke-[3] group-hover:translate-x-0.5 transition-transform" />
            </div>
          </a>

          {/* 4. Top Trending (Flame & Upward Trend Spark) */}
          <Link
            href="/category/disposable-vapes"
            aria-label="Top Trending Disposable Vapes"
            className="group relative flex items-center justify-center sm:justify-between gap-3 p-2.5 sm:p-4 rounded-[20px] sm:rounded-[28px] bg-white border border-orange-200/80 shadow-[0_6px_20px_-4px_rgba(255,107,0,0.12)] hover:shadow-[0_16px_36px_-6px_rgba(255,107,0,0.22)] hover:border-orange-300 hover:-translate-y-0.5 sm:hover:-translate-y-1 active:scale-95 transition-all duration-300 overflow-hidden cursor-pointer"
          >
            {/* Ambient Aurora Soft Blur Glow */}
            <div className="absolute -top-7 -right-7 w-28 h-28 bg-gradient-to-br from-orange-200/50 to-amber-100/40 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-orange-100/40 rounded-full blur-xl pointer-events-none" />

            {/* Icon: Flame Squircle with Trending Up Spark Arrow */}
            <div className="relative shrink-0">
              {/* Trending Up Zigzag Spark Arrow */}
              <div className="absolute -top-2 -right-1.5 sm:-top-2.5 sm:-right-2 text-[#ff5500] z-10 transition-transform group-hover:scale-125">
                <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" viewBox="0 0 20 20" fill="none">
                  <path d="M3 13.5L8 8.5L11.5 12L17 5.5M17 5.5H12.5M17 5.5V10" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-[16px] sm:rounded-[18px] bg-gradient-to-b from-[#ff7700] to-[#ff3b00] text-white flex items-center justify-center shadow-[0_8px_18px_-3px_rgba(255,59,0,0.42)] group-hover:scale-105 transition-transform duration-300">
                <Flame className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2] fill-white" />
              </div>
            </div>

            {/* Desktop Center: Text (Hidden on Phone Mode) */}
            <div className="hidden sm:block min-w-0 flex-1 relative z-10 pl-1">
              <span className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#ff5500] leading-none mb-1">
                TOP TRENDING
              </span>
              <h3 className="text-[14px] sm:text-[16px] font-bold text-slate-900 leading-tight truncate group-hover:text-orange-600 transition-colors">
                Disposable Vapes
              </h3>
              <p className="text-[11px] sm:text-[12px] font-medium text-slate-400 truncate mt-0.5">
                Latest &amp; Best Collection
              </p>
            </div>

            {/* Desktop Right: Soft Orange Chevron Circle Button (Hidden on Phone Mode) */}
            <div className="hidden sm:flex w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#fff1e7] text-[#ff5500] group-hover:bg-[#ff5500] group-hover:text-white items-center justify-center shrink-0 transition-all duration-300 relative z-10 shadow-2xs">
              <ChevronRight className="w-4 h-4 stroke-[3] group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
