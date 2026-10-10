import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Zap,
  ShieldCheck,
  Clock,
  Truck,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { STORE_INFO, CATEGORIES } from "@/data/products";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const POPULAR_SEARCHES = [
    // 10 Core Delhi Search Keywords (Targeted for Top Google Ranking)
    { text: "Vape Shop Delhi", href: "/products" },
    { text: "Vape Shop in Delhi", href: "/products" },
    { text: "Best Vape Shop Delhi", href: "/products" },
    { text: "Best Vape Shop in Delhi", href: "/products" },
    { text: "Vape Shop Near Me", href: "/contact" },
    { text: "Vape Delivery Delhi", href: "/products" },
    { text: "Vape Shop South Delhi", href: "/products" },
    { text: "Vape Shop West Delhi", href: "/products" },
    { text: "Disposable Vape Delhi", href: "/category/disposable-vapes" },
    { text: "Vape Price in Delhi", href: "/products" },

    // Micro-Locality & Popular Model Quick Links
    { text: "South Delhi Vape Store", href: "/products" },
    { text: "Vape Store Near Me Delhi", href: "/products" },
    { text: "Disposable Vapes Delhi", href: "/category/disposable-vapes" },
    { text: "Yuoto Thanos 5000 Puffs Delhi", href: "/search?q=Yuoto" },
    { text: "Lost Mary 15000 Turbo", href: "/search?q=Lost+Mary" },
    { text: "Elf Bar BC5000 Delhi", href: "/search?q=Elf+Bar" },
    { text: "Uwell Caliburn G3 Pod Kit", href: "/search?q=Caliburn" },
    { text: "IGET Moon 5000 Puffs", href: "/search?q=IGET" },
    { text: "Same Day Vape Delivery Delhi NCR", href: "/products" },
    { text: "30 Min Vape Delivery South Delhi", href: "/products" },
    { text: "Cash on Delivery Vapes Delhi", href: "/products" },
    { text: "Saket & GK Vape Delivery", href: "/products" },
    { text: "Hauz Khas & Green Park Vape Delivery", href: "/products" },
    { text: "Connaught Place CP Vape Store", href: "/contact" },
    { text: "Dwarka & West Delhi Vape Delivery", href: "/products" },
    { text: "Rohini & Pitampura Vape Store", href: "/products" },
    { text: "Mayur Vihar & East Delhi Vape Delivery", href: "/products" },
    { text: "Online Vape Shop Delhi", href: "/products" },
    { text: "Nic Salt E-Liquids 20mg / 50mg", href: "/category/e-liquids" },
    { text: "Vape Replacement Pods & Coils", href: "/category/coils-pods" },
    { text: "Authentic Vape Shop Delhi", href: "/about" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800/80 mt-20 pt-0 pb-12 selection:bg-orange-950 selection:text-orange-200">
      {/* 1. Value Proposition / Trust Feature Bar */}
      <div className="border-b border-slate-800/80 bg-slate-900/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center shrink-0">
                <Truck className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight">
                  30-60m Instant Dispatch
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-400">
                  Instant Courier Across All Delhi Zones
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight">
                  100% Authentic
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-400">
                  Original imported verified stock
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                <Zap className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight">
                  COD &amp; UPI Accepted
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-400">
                  Pay cash or scanner upon delivery
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center shrink-0">
                <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight">
                  WhatsApp Support
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-400">
                  Direct live orders &amp; flavor help
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
        {/* 2. Main Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand & Local Authority */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-2xl overflow-hidden shrink-0 shadow-md border border-orange-500/40">
                <Image
                  src="/vape-shop-delhi-logo.png"
                  alt="Vape Shop Delhi Logo"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center text-2xl font-black tracking-tight leading-none">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
                    Vape
                  </span>
                  <span className="text-white font-extrabold ml-1">Shop</span>
                </div>
                <span className="text-[9px] font-bold text-orange-400/90 tracking-[0.25em] uppercase mt-1">
                  IN DELHI • VAPESHOP-DELHI.COM
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md">
              Delhi NCR&apos;s premier online vape store delivering 100% authentic disposable vapes, refillable pod kits, coils, and imported nic salts. 30–60 min express courier in Delhi, and same-day delivery across Delhi NCR with Cash on Delivery (COD) &amp; UPI.
            </p>

            {/* Quick WhatsApp / Call Contact Pill */}
            <div className="pt-2 flex flex-wrap gap-2.5">
              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
                  "Hi Vape Shop Delhi! I want to order."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold transition-all"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                WhatsApp: {STORE_INFO.phone}
              </a>
              <a
                href={`tel:${STORE_INFO.phone}`}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs font-semibold transition-all hover:text-orange-400"
              >
                <Phone className="h-3.5 w-3.5 text-orange-400" />
                Call Helpline
              </a>
            </div>
          </div>

          {/* Quick Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Product Categories
            </h4>
            <ul className="space-y-2 text-xs">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/category/${cat.slug}`}
                    className="text-slate-400 hover:text-orange-400 transition-colors flex items-center justify-between"
                  >
                    <span>{cat.name}</span>
                    <span className="text-[10px] text-slate-500 bg-slate-900 px-1.5 py-0.5 rounded">
                      {cat.count || "10+"}
                    </span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/products"
                  className="text-orange-400 hover:text-orange-300 font-bold transition-colors inline-flex items-center gap-1 pt-1"
                >
                  <span>View All Products</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-slate-400 hover:text-orange-400 transition-colors inline-flex items-center gap-1 pt-0.5"
                >
                  <span>Vape Guides &amp; Blog</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Top Brands & Models */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Top Brands &amp; Kits
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/search?q=Yuoto" className="hover:text-orange-400 transition-colors">
                  Yuoto Thanos 5000 Puffs
                </Link>
              </li>
              <li>
                <Link href="/search?q=Lost+Mary" className="hover:text-orange-400 transition-colors">
                  Lost Mary MT15000 Turbo
                </Link>
              </li>
              <li>
                <Link href="/search?q=Caliburn" className="hover:text-orange-400 transition-colors">
                  Uwell Caliburn A3S &amp; G3
                </Link>
              </li>
              <li>
                <Link href="/search?q=Elf+Bar" className="hover:text-orange-400 transition-colors">
                  Elf Bar BC5000 Disposables
                </Link>
              </li>
              <li>
                <Link href="/search?q=IGET" className="hover:text-orange-400 transition-colors">
                  IGET Moon &amp; Star Series
                </Link>
              </li>
              <li>
                <Link href="/category/e-liquids" className="hover:text-orange-400 transition-colors">
                  Imported Nic Salts (20mg/50mg)
                </Link>
              </li>
            </ul>
          </div>

          {/* Store Info & Local Address */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Store &amp; Location
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-orange-400 shrink-0 mt-0.5" />
                <span>
                  {STORE_INFO.address}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-orange-400 shrink-0" />
                <span>Open Everyday: 10:00 AM – 11:30 PM</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-orange-400 shrink-0" />
                <a href={`mailto:${STORE_INFO.email}`} className="hover:text-orange-400">
                  {STORE_INFO.email}
                </a>
              </li>
              <li className="pt-1">
                <Link
                  href="/contact"
                  className="text-xs font-bold text-orange-400 hover:text-orange-300 inline-flex items-center gap-1"
                >
                  <span>Directions &amp; Delivery Hubs</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* 3. Popular Searches Cloud */}
        <div className="py-6 border-b border-slate-800/80 space-y-3">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            Popular Searches &amp; Quick Links
          </div>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {POPULAR_SEARCHES.map((item) => (
              <Link
                key={item.text}
                href={item.href}
                className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] text-slate-400 hover:text-orange-300 hover:border-orange-500/40 transition-colors"
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>

        {/* 4. SEO Topical Delhi Authority */}
        <div className="py-4 border-b border-slate-800/60 text-[11px] text-slate-500 leading-relaxed">
          <p>
            <strong className="text-slate-400 font-semibold">Vape Shop Delhi:</strong> Delhi&apos;s #1 premier online vape store for all top searches including <span className="text-slate-400">Vape Shop Delhi</span>, <span className="text-slate-400">Vape Shop in Delhi</span>, <span className="text-slate-400">Best Vape Shop Delhi</span>, <span className="text-slate-400">Best Vape Shop in Delhi</span>, <span className="text-slate-400">Vape Shop Near Me</span>, <span className="text-slate-400">Vape Delivery Delhi</span>, <span className="text-slate-400">Vape Shop South Delhi</span>, <span className="text-slate-400">Vape Shop West Delhi</span>, <span className="text-slate-400">Disposable Vape Delhi</span>, and authentic <span className="text-slate-400">Vape Price in Delhi</span>. Guaranteed original sealed devices with 30–60 min instant courier dispatch across all Delhi NCR pin codes.
          </p>
        </div>

        {/* 5. Bottom Bar: Copyright & Navigation */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} {STORE_INFO.name} ({STORE_INFO.domain}). All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-xs">
            <Link href="/about" className="hover:text-orange-400 transition-colors">
              About Us
            </Link>
            <Link href="/products" className="hover:text-orange-400 transition-colors">
              All Products
            </Link>
            <Link href="/contact" className="hover:text-orange-400 transition-colors">
              Contact &amp; Support
            </Link>
            <Link href="/privacy" className="hover:text-orange-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-orange-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
