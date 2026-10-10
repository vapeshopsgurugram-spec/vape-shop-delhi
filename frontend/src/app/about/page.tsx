import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Zap,
  Truck,
  Clock,
  MapPin,
  Sparkles,
  Award,
  ChevronRight,
  PackageCheck,
  Users,
} from "lucide-react";
import { STORE_INFO } from "@/data/products";

export const metadata: Metadata = {
  title: "About Us | Vape Shop Delhi - Premier Vapes & Pods",
  description:
    "Learn about Vape Shop Delhi, Delhi's most trusted online store for 100% authentic disposable vapes, pod systems, and nicotine salts with 30-60 min express delivery.",
  keywords: [
    "About Vape Shop Delhi",
    "Vape Shop Delhi story",
    "Authentic vape store Delhi",
    "Express vape delivery South Delhi",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Vape Shop Delhi",
    description: "Delhi's trusted source for 100% genuine vapes, pods & express delivery.",
    url: "https://www.vapeshop-delhi.com/about",
    siteName: "Vape Shop Delhi",
  },
};

const STATS = [
  { value: "30-60m", label: "Express Delivery", icon: Clock },
  { value: "100%", label: "Authentic & Sealed", icon: ShieldCheck },
  { value: "12,000+", label: "Orders Delivered", icon: PackageCheck },
  { value: "4.9 ★", label: "Customer Rating", icon: Award },
];

const VALUES = [
  {
    icon: ShieldCheck,
    title: "100% Genuine Guaranteed",
    desc: "Every device features a scratch-off authenticity QR code that can be verified directly on official manufacturer websites.",
  },
  {
    icon: Zap,
    title: "Superfast Local Courier",
    desc: "Dedicated delivery riders stationed across South Delhi, Central Delhi, and NCR ensure doorstep delivery in 30 to 60 minutes.",
  },
  {
    icon: PackageCheck,
    title: "100% Discreet Packaging",
    desc: "Orders are dispatched in discreet, plain, tamper-evident packaging with zero product branding on the outer box.",
  },
  {
    icon: Users,
    title: "Cash on Delivery & UPI",
    desc: "Pay only when your rider arrives at your doorstep. We support Cash on Delivery, GPay, PhonePe, and Paytm.",
  },
];

const COVERAGE_HUBS = [
  "South Delhi: Saket, Hauz Khas, GK (15-25 mins)",
  "Central Delhi: Connaught Place, CP (20-30 mins)",
  "West Delhi: Dwarka, Punjabi Bagh (25-35 mins)",
  "North Delhi: Rohini, Pitampura (25-35 mins)",
  "East Delhi: Mayur Vihar, Laxmi Nagar (30-40 mins)",
  "Vasant Kunj & Vasant Vihar (20-30 mins)",
  "Aerocity Worldmark & Airport Hotels (20-30 mins)",
  "Civil Lines, Model Town & Kamla Nagar (25-35 mins)",
];

export default function AboutPage() {
  const whatsappUrl = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Hi Vape Shop Delhi! I'm on your About page and would like to ask a question."
  )}`;

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
        name: "About Us",
        item: "https://www.vapeshop-delhi.com/about",
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "VapeShop",
    name: "Vape Shop Delhi",
    image: "https://www.vapeshop-delhi.com/banners/delhi-vape-banner-1.png",
    "@id": "https://www.vapeshop-delhi.com/#store",
    url: "https://www.vapeshop-delhi.com",
    telephone: STORE_INFO.phone,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Connaught Place / South Extension",
      addressLocality: "New Delhi",
      postalCode: "110001",
      addressRegion: "Delhi",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.6139,
      longitude: 77.2090,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "10:00",
      closes: "23:30",
    },
    sameAs: [
      STORE_INFO.whatsappUrl,
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <main className="min-h-screen bg-slate-50/50 pb-20 pt-24 sm:pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 py-1">
          <Link href="/" className="hover:text-orange-600 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">About Us</span>
        </nav>

        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-orange-950 text-white p-8 sm:p-14 lg:p-16 shadow-2xl border border-orange-500/20">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Delhi NCR&apos;s #1 Trusted Vape Destination</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-snug">
              Elevating the Vape Experience in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
                Delhi &amp; Delhi NCR
              </span>
            </h1>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
              Founded in the national capital, <strong>Vape Shop Delhi</strong> was created with a clear mission: to provide vape enthusiasts with 100% genuine products, fair pricing, and lightning-fast doorstep delivery in 30 to 60 minutes.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/products"
                className="py-3 px-6 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-sm shadow-lg shadow-orange-500/25 transition-all hover:scale-105 active:scale-95"
              >
                Explore Catalog
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm backdrop-blur-md transition-all"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="p-5 sm:p-6 rounded-3xl bg-white border border-orange-100 shadow-sm hover:shadow-md transition-shadow text-center space-y-2"
              >
                <div className="w-10 h-10 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mx-auto">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-500">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </section>

        {/* Our Story & Values */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-5">
            <span className="text-xs font-bold text-orange-600 uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-4 h-4" /> Why Choose Vape Shop Delhi
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-snug">
              Authenticity, Speed &amp; Customer Satisfaction at Our Core
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              In a market filled with counterfeit vape pods and unreliable delivery promises, <strong>Vape Shop Delhi</strong> stands out by enforcing strict authenticity controls. We source directly from official authorized distributors of globally renowned brands including <strong>Elfbar</strong>, <strong>Yuoto</strong>, <strong>Elfworld</strong>, <strong>Uwell Caliburn</strong>, and <strong>Lost Mary</strong>.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Every device is factory-sealed, stored in climate-controlled conditions to preserve e-liquid flavor integrity, and dispatched with tamper-evident seals. Whether you need a refill at South Delhi at midnight or an urgent delivery at Connaught Place during office hours, our local courier fleet gets it to you in under an hour.
            </p>
          </div>

          {/* Value Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {VALUES.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-3xl bg-white border border-orange-100 shadow-sm space-y-2.5"
                >
                  <div className="w-10 h-10 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">{val.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Delivery Network Section */}
        <section className="p-6 sm:p-10 rounded-3xl bg-white border border-orange-100 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                <Truck className="w-4 h-4" /> 30-60 Minute Local Hubs
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Delhi &amp; NCR Express Coverage
              </h2>
            </div>
            <span className="text-xs font-semibold text-slate-500">
              Operating Hours: 10:00 AM - 11:30 PM (Daily)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2">
            {COVERAGE_HUBS.map((hub, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-orange-50/40 border border-orange-100 flex items-center gap-2.5 text-xs text-slate-700 font-medium"
              >
                <MapPin className="w-4 h-4 text-orange-600 shrink-0" />
                <span className="truncate">{hub}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 text-white shadow-xl shadow-orange-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              Ready to Order Authentic Vapes in Delhi?
            </h2>
            <p className="text-orange-100 text-xs sm:text-sm max-w-xl">
              Enjoy free 30-60 minute delivery on orders above ₹1,500. Cash on Delivery and doorstep UPI available across Delhi NCR.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/products"
              className="py-3 px-6 rounded-2xl bg-white text-orange-900 hover:bg-orange-50 font-bold text-xs sm:text-sm shadow-md transition-all"
            >
              View Products
            </Link>
            <Link
              href="/contact"
              className="py-3 px-6 rounded-2xl bg-orange-700/60 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm border border-orange-300/40 transition-all"
            >
              Contact Store
            </Link>
          </div>
        </section>

      </div>
    </main>
    </>
  );
}
