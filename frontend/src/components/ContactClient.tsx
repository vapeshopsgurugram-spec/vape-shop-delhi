"use client";

import React from "react";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Truck,
  ChevronRight,
  MessageCircle,
  Sparkles,
  Zap,
  Navigation,
  Compass,
  CheckCircle,
} from "lucide-react";
import { STORE_INFO } from "@/data/products";

const QUICK_ACTIONS = [
  {
    icon: Zap,
    title: "Instant Doorstep Order",
    desc: "Order directly via WhatsApp for 30-60 min doorstep delivery across Delhi.",
    message: "Hi Vape Shop Delhi! I want to place a quick order for express delivery in Delhi NCR.",
    badge: "Fastest Option",
    badgeColor: "bg-gradient-to-r from-orange-500 to-amber-500 text-white",
  },
  {
    icon: Sparkles,
    title: "Flavor & Nic Salt Advice",
    desc: "Need recommendations? Ask our flavor specialist about top trending ice flavors.",
    message: "Hi Vape Shop Delhi! Can you recommend your best selling flavors in stock?",
    badge: "Expert Advice",
    badgeColor: "bg-orange-100 text-orange-700",
  },
  {
    icon: ShieldCheck,
    title: "Device & Stock Inquiry",
    desc: "Check stock availability for Elfbar, Yuoto, Lost Mary, or Caliburn kits.",
    message: "Hi Vape Shop Delhi! I want to check availability for specific vape devices.",
    badge: "Live Stock",
    badgeColor: "bg-amber-100 text-amber-800",
  },
  {
    icon: Truck,
    title: "Track Rider & Delivery ETA",
    desc: "Already ordered? Get real-time dispatch updates and Delhi rider contact info.",
    message: "Hi Vape Shop Delhi! Can you share rider ETA and status for my recent order?",
    badge: "Live Tracking",
    badgeColor: "bg-orange-100 text-orange-800",
  },
];

const DELHI_SECTORS = [
  { name: "South Delhi (Saket, Hauz Khas, GK)", time: "15-25 mins", active: true },
  { name: "Vasant Kunj & Vasant Vihar", time: "20-30 mins", active: true },
  { name: "Central Delhi & Connaught Place", time: "20-30 mins", active: true },
  { name: "West Delhi (Dwarka, Punjabi Bagh)", time: "25-35 mins", active: true },
  { name: "North Delhi (Rohini, Pitampura)", time: "25-35 mins", active: true },
  { name: "East Delhi (Mayur Vihar, Laxmi Nagar)", time: "30-40 mins", active: true },
  { name: "Aerocity & Airport Hotels", time: "20-30 mins", active: true },
  { name: "Civil Lines & Model Town", time: "25-35 mins", active: true },
];

export default function ContactClient() {
  const directWhatsAppUrl = (customText?: string) =>
    `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
      customText ||
        "Hi Vape Shop Delhi! I want to order authentic vapes for doorstep delivery in Delhi."
    )}`;

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "Connaught Place, New Delhi, Delhi 110001"
  )}`;

  return (
    <div className="space-y-10 sm:space-y-14">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 py-1">
        <Link href="/" className="hover:text-orange-600 transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-900 font-semibold">Contact &amp; Delivery</span>
      </nav>

      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-orange-950 text-white p-8 sm:p-12 lg:p-14 shadow-2xl border border-orange-500/20">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            <span>Online Now • Instant Delhi WhatsApp Support</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-snug">
            Contact Vape Shop Delhi
          </h1>

          <p className="text-slate-300 text-xs sm:text-sm sm:leading-relaxed max-w-2xl">
            Choose a quick option below to chat directly with our Delhi team on WhatsApp, or call our direct order hotline for immediate 30-60 minute delivery.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={directWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 py-3.5 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-xl shadow-emerald-600/30 transition-all hover:scale-105 active:scale-95"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>Instant WhatsApp ({STORE_INFO.phone})</span>
            </a>
            <a
              href={`tel:${STORE_INFO.phone}`}
              className="inline-flex items-center gap-2 py-3.5 px-6 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm backdrop-blur-md transition-all"
            >
              <Phone className="w-4 h-4 text-orange-400" />
              <span>Call Helpline</span>
            </a>
          </div>
        </div>
      </div>

      {/* 1-Tap WhatsApp Actions Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-orange-600 uppercase tracking-wider flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" /> 1-Tap Direct Help
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-0.5">
              Choose an Inquiry Option
            </h2>
          </div>
          <span className="hidden sm:inline-block text-xs font-semibold text-slate-500">
            Tap any card to connect on WhatsApp
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {QUICK_ACTIONS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <a
                key={idx}
                href={directWhatsAppUrl(item.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-3xl bg-white border border-orange-100 shadow-xs hover:shadow-xl hover:border-orange-300 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-2xl bg-orange-50 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-amber-500 text-orange-600 group-hover:text-white flex items-center justify-center transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-orange-600 group-hover:text-orange-700">
                  <span>Chat on WhatsApp</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* Contact Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* 1. WhatsApp */}
        <div className="p-5 rounded-3xl bg-white border border-orange-100 shadow-2xs space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider block">
                Instant Chat
              </span>
              <h4 className="text-sm font-bold text-slate-900">WhatsApp</h4>
            </div>
          </div>
          <a
            href={directWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-xs font-bold text-emerald-600 hover:text-emerald-700"
          >
            {STORE_INFO.phone}
          </a>
        </div>

        {/* 2. Direct Call */}
        <div className="p-5 rounded-3xl bg-white border border-orange-100 shadow-2xs space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-orange-600 uppercase tracking-wider block">
                Call Us
              </span>
              <h4 className="text-sm font-bold text-slate-900">Hotline</h4>
            </div>
          </div>
          <a
            href={`tel:${STORE_INFO.phone}`}
            className="block text-xs font-bold text-orange-600 hover:text-orange-700"
          >
            {STORE_INFO.phone}
          </a>
        </div>

        {/* 3. Central Hub Location */}
        <div className="p-5 rounded-3xl bg-white border border-orange-100 shadow-2xs space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider block">
                Central Hub
              </span>
              <h4 className="text-sm font-bold text-slate-900">Delhi Flagship</h4>
            </div>
          </div>
          <p className="text-[11px] text-slate-600 font-medium">
            {STORE_INFO.address}
          </p>
        </div>

        {/* 4. Timings */}
        <div className="p-5 rounded-3xl bg-white border border-orange-100 shadow-2xs space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-orange-600 uppercase tracking-wider block">
                Open Daily
              </span>
              <h4 className="text-sm font-bold text-slate-900">10:00 AM – 11:30 PM</h4>
            </div>
          </div>
          <span className="inline-block text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
            Delhi Riders Active
          </span>
        </div>
      </div>

      {/* Store Location Map & Direct Navigation Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left: Location & Navigation Card */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-orange-100 shadow-sm flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <span className="text-xs font-bold text-orange-600 uppercase tracking-wider flex items-center gap-1.5">
              <Compass className="w-4 h-4" /> Visit &amp; Dispatch Hub
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              Connaught Place &amp; South Extension, New Delhi
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Located at the heart of the national capital. Strategically positioned for ultra-fast 15 to 30 minute courier dispatch across all South, Central, West, and North Delhi areas.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-700">
              <div className="p-3 rounded-2xl bg-orange-50/50 border border-orange-100 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Express Dispatch to All Delhi Colonies</span>
              </div>
              <div className="p-3 rounded-2xl bg-orange-50/50 border border-orange-100 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Cash on Delivery &amp; Doorstep UPI</span>
              </div>
              <div className="p-3 rounded-2xl bg-orange-50/50 border border-orange-100 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Scratch-Code QR Verification Counter</span>
              </div>
              <div className="p-3 rounded-2xl bg-orange-50/50 border border-orange-100 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Genuine Sealed Stock</span>
              </div>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-3">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-5 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs sm:text-sm shadow-md shadow-orange-500/20 flex items-center gap-2 transition-all cursor-pointer"
            >
              <Navigation className="w-4 h-4 text-white" />
              <span>Get Directions on Google Maps</span>
            </a>
            <a
              href={`tel:${STORE_INFO.phone}`}
              className="py-3 px-5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm transition-all"
            >
              Call Store Counter
            </a>
          </div>
        </div>

        {/* Right: Live Courier Sector Grid */}
        <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-950 to-orange-950 text-white rounded-3xl p-6 sm:p-8 border border-orange-500/20 shadow-xl flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-orange-400 uppercase tracking-wider flex items-center gap-1.5">
                <Truck className="w-4 h-4" /> Live Courier Dispatch
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-orange-400 animate-ping" />
            </div>
            <h3 className="text-lg font-bold text-white">
              Instant Delhi Doorstep ETAs
            </h3>
            <p className="text-xs text-slate-300">
              Orders confirmed on WhatsApp are dispatched immediately with real-time ETA tracking across Delhi NCR.
            </p>
          </div>

          <div className="space-y-2">
            {DELHI_SECTORS.map((sector, i) => (
              <div
                key={i}
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-400" />
                  <span className="font-medium text-slate-200">{sector.name}</span>
                </div>
                <span className="text-[11px] font-bold text-orange-300">
                  {sector.time}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
            <span>Free delivery on orders ₹1,500+</span>
            <span className="font-bold text-orange-300">COD / UPI Accepted</span>
          </div>
        </div>
      </div>
    </div>
  );
}
