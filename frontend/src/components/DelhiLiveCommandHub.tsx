"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Zap,
  ShieldCheck,
  PackageCheck,
  CreditCard,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  PhoneCall,
} from "lucide-react";
import { STORE_INFO } from "@/data/products";

const DELHI_ZONES = [
  {
    id: "south",
    name: "South Delhi",
    eta: "20–30 Mins",
    hubs: "Saket • Hauz Khas • GK 1 & 2 • Vasant Kunj • Def Col",
    status: "Instant Fleet Active",
    coverage: "Saket, Malviya Nagar, Greater Kailash, Hauz Khas, Green Park, Vasant Vihar",
  },
  {
    id: "central",
    name: "Central Delhi",
    eta: "15–25 Mins",
    hubs: "Connaught Place (CP) • Karol Bagh • Chanakyapuri",
    status: "Fastest Dispatch",
    coverage: "Connaught Place, Barakhamba, Karol Bagh, Rajendra Nagar, Patel Nagar",
  },
  {
    id: "west",
    name: "West Delhi",
    eta: "25–35 Mins",
    hubs: "Rajouri Garden • Punjabi Bagh • Dwarka • Janakpuri",
    status: "Active Fleet",
    coverage: "Rajouri Garden, Punjabi Bagh, Paschim Vihar, Janakpuri, Dwarka Sectors 1-23",
  },
  {
    id: "north",
    name: "North Delhi",
    eta: "25–35 Mins",
    hubs: "Rohini • Pitampura • Model Town • Civil Lines",
    status: "Active Fleet",
    coverage: "Rohini Sectors, Pitampura, Model Town, Civil Lines, Shalimar Bagh",
  },
  {
    id: "east",
    name: "East Delhi",
    eta: "30–40 Mins",
    hubs: "Mayur Vihar • Laxmi Nagar • Preet Vihar",
    status: "Dispatched Hourly",
    coverage: "Mayur Vihar Phase 1-3, Laxmi Nagar, Preet Vihar, Anand Vihar, Patparganj",
  },
  {
    id: "sw",
    name: "Aerocity & Airport",
    eta: "20–30 Mins",
    hubs: "Aerocity Hotels • Mahipalpur • Kapashera",
    status: "Priority Express",
    coverage: "Aerocity Worldmark, T1/T3 Airport Hotels, Mahipalpur, Vasant Kunj",
  },
];

export default function DelhiLiveCommandHub() {
  const [selectedZone, setSelectedZone] = useState(DELHI_ZONES[0]);

  return (
    <div className="w-full space-y-6">
      {/* Dynamic Asymmetric Bento Split Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
        {/* Left Command Card (7 Cols) */}
        <div className="lg:col-span-7 rounded-[30px] sm:rounded-[36px] bg-gradient-to-br from-white via-orange-50/25 to-white border border-orange-200/80 shadow-[0_12px_40px_-8px_rgba(255,107,0,0.14)] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
          {/* Ambient decorative blur background elements */}
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-gradient-to-br from-orange-300/25 to-amber-200/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-44 h-44 bg-orange-100/40 rounded-full blur-2xl pointer-events-none" />

          <div className="space-y-5 relative z-10">
            {/* Live Status Pill with Radar Pulse */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-orange-200 text-slate-800 text-xs font-bold shadow-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-orange-600 font-extrabold uppercase tracking-wide text-[11px]">
                Delhi Live Dispatch Desk
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-600 font-medium text-[11px] flex items-center gap-1">
                <Clock className="w-3 h-3 text-orange-500" /> 30–45 Mins Average Delivery
              </span>
            </div>

            {/* Impactful Delhi Heading */}
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.12]">
                Delhi&apos;s Direct{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500">
                  Authentic Vape
                </span>{" "}
                Destination
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                100% Factory-sealed disposable pods, refillable devices, and nicotine salts with manufacturer scratch-code verification. Dispatched straight from our Central &amp; South Delhi hubs right to your doorstep.
              </p>
            </div>

            {/* Interactive Delhi Locality Live ETA Selector */}
            <div className="pt-1 space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-extrabold text-slate-800 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                  <MapPin className="w-3.5 h-3.5 text-orange-600" /> Select Your Delhi Area For Live ETA:
                </span>
                <span className="text-[11px] font-bold text-orange-600">
                  {selectedZone.status}
                </span>
              </div>

              {/* Locality Chips */}
              <div className="flex flex-wrap gap-2">
                {DELHI_ZONES.map((zone) => {
                  const isSelected = selectedZone.id === zone.id;
                  return (
                    <button
                      key={zone.id}
                      onClick={() => setSelectedZone(zone)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                        isSelected
                          ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/25 scale-[1.03]"
                          : "bg-white text-slate-700 border border-orange-100 hover:border-orange-300 hover:bg-orange-50/50"
                      }`}
                    >
                      <span>{zone.name}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded-md ${
                          isSelected ? "bg-white/25 text-white" : "bg-orange-100/70 text-orange-700"
                        }`}
                      >
                        {zone.eta}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Selected Area Delivery Card */}
              <div className="p-3.5 rounded-2xl bg-white/90 border border-orange-100 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-black text-slate-900 text-xs sm:text-sm">
                      {selectedZone.name} Express Hub
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      ETA: {selectedZone.eta}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Key localities: {selectedZone.coverage}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-lg border border-orange-100">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" /> COD Available
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-6 mt-4 border-t border-orange-100/80 flex flex-wrap items-center gap-3 relative z-10">
            <Link
              href="/products"
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all flex items-center gap-2 group"
            >
              <span>Explore Delhi Catalog</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
                `Hi Vape Shop Delhi! I want to check delivery for ${selectedZone.name}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-emerald-500/20 hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>WhatsApp Delhi Desk</span>
            </a>
          </div>
        </div>

        {/* Right Bento Column: 4 Service Guarantees (5 Cols) */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5 sm:gap-4 flex flex-col justify-between">
          {/* Card 1: 100% Genuine QR Guarantee */}
          <div className="p-4 sm:p-4.5 rounded-2xl sm:rounded-3xl bg-white border border-orange-100 shadow-[0_8px_24px_-4px_rgba(255,107,0,0.08)] hover:border-orange-300 hover:shadow-md transition-all flex items-start gap-3.5 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-500/25 group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-1">
                <h3 className="text-sm font-black text-slate-900 group-hover:text-orange-600 transition-colors">
                  Anti-Counterfeit QR Code
                </h3>
                <span className="text-[10px] font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                  100% Authentic
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Scratch &amp; verify the security code directly on the manufacturer website before opening. Zero fakes.
              </p>
            </div>
          </div>

          {/* Card 2: 30-60 Min Delhi Courier */}
          <div className="p-4 sm:p-4.5 rounded-2xl sm:rounded-3xl bg-white border border-orange-100 shadow-[0_8px_24px_-4px_rgba(255,107,0,0.08)] hover:border-orange-300 hover:shadow-md transition-all flex items-start gap-3.5 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-orange-500/25 group-hover:scale-105 transition-transform">
              <Zap className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-1">
                <h3 className="text-sm font-black text-slate-900 group-hover:text-orange-600 transition-colors">
                  Express 30–60 Min Dispatch
                </h3>
                <span className="text-[10px] font-extrabold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-md">
                  Delhi Only
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Dedicated local riders dispatched across South, Central, West, North, and East Delhi with live updates.
              </p>
            </div>
          </div>

          {/* Card 3: 100% Discreet Packaging */}
          <div className="p-4 sm:p-4.5 rounded-2xl sm:rounded-3xl bg-white border border-orange-100 shadow-[0_8px_24px_-4px_rgba(255,107,0,0.08)] hover:border-orange-300 hover:shadow-md transition-all flex items-start gap-3.5 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 text-white flex items-center justify-center shrink-0 shadow-md shadow-slate-900/25 group-hover:scale-105 transition-transform">
              <PackageCheck className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-1">
                <h3 className="text-sm font-black text-slate-900 group-hover:text-orange-600 transition-colors">
                  Discreet Plain Packaging
                </h3>
                <span className="text-[10px] font-extrabold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                  Private
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Shipped in unmarked, tamper-proof packaging without logos or vape product names on the exterior.
              </p>
            </div>
          </div>

          {/* Card 4: Cash on Delivery & UPI */}
          <div className="p-4 sm:p-4.5 rounded-2xl sm:rounded-3xl bg-white border border-orange-100 shadow-[0_8px_24px_-4px_rgba(255,107,0,0.08)] hover:border-orange-300 hover:shadow-md transition-all flex items-start gap-3.5 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-amber-500/25 group-hover:scale-105 transition-transform">
              <CreditCard className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-1">
                <h3 className="text-sm font-black text-slate-900 group-hover:text-orange-600 transition-colors">
                  Doorstep COD &amp; UPI
                </h3>
                <span className="text-[10px] font-extrabold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-md">
                  Zero Advance
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Inspect parcel at doorstep and pay easily via Cash, Google Pay, PhonePe, or Paytm to rider.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
