"use client";

import React, { useState } from "react";
import { Star, CheckCircle2, ChevronDown, ChevronUp, MessageSquare } from "lucide-react";

export interface ReviewItem {
  id: number;
  author: string;
  location: string;
  product: string;
  rating: number;
  comment: string;
  timeAgo: string;
}

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 1,
    author: "Rahul M.",
    location: "Saket, South Delhi",
    product: "Elfbar BC5000",
    rating: 5,
    comment:
      "Ordered the Elfbar BC5000 Grape Energy around 3 PM and received it in Saket by 3:40 PM. Scanned the QR code on the box and it verified 100% genuine on the official brand site. Best vape store in Delhi!",
    timeAgo: "Yesterday",
  },
  {
    id: 2,
    author: "Arjun K.",
    location: "Connaught Place, Central Delhi",
    product: "Uwell Caliburn G3 Pro",
    rating: 5,
    comment:
      "Really smooth ordering experience on WhatsApp. The plain discreet packaging was tamper-proof and delivered within 25 minutes to my office in CP. The rider accepted doorstep UPI easily.",
    timeAgo: "Yesterday",
  },
  {
    id: 3,
    author: "Vikram S.",
    location: "Greater Kailash (GK 2)",
    product: "Lost Mary MT15000 Turbo",
    rating: 5,
    comment:
      "I liked the variety of devices in stock and how easy it was to order. The Lost Mary Turbo has insane flavor and the dynamic screen keeps track of juice levels. Delivery in GK was under 30 minutes.",
    timeAgo: "2 days ago",
  },
  {
    id: 4,
    author: "Priya S.",
    location: "Hauz Khas Village",
    product: "Yuoto Digi 15000 Puffs",
    rating: 5,
    comment:
      "Living in Hauz Khas, finding authentic vapes without clones used to be tough. Vape Shop Delhi delivered in 30 mins flat with Cash on Delivery. Sealed packaging with genuine scratch code!",
    timeAgo: "2 days ago",
  },
  {
    id: 5,
    author: "Kabir N.",
    location: "Dwarka Sector 12",
    product: "Geek Bar Burj 80000 Puffs",
    rating: 5,
    comment:
      "The Geek Bar Burj 80K is an absolute beast! The airflow adjustment and ice switch work brilliantly. Rider arrived at Dwarka Sector 12 within 35 minutes. Paid via PhonePe at my doorstep.",
    timeAgo: "3 days ago",
  },
  {
    id: 6,
    author: "Sneha R.",
    location: "Vasant Kunj, South Delhi",
    product: "Lost Mary Nera 70K FullView",
    rating: 5,
    comment:
      "Super fast response on WhatsApp. Got the Lost Mary Nera 70K with the transparent liquid pod so I know exactly when to reorder. Discreet plain box, zero awkwardness.",
    timeAgo: "3 days ago",
  },
  {
    id: 7,
    author: "Aditya V.",
    location: "Punjabi Bagh, West Delhi",
    product: "IGET Moon 5000 Puffs",
    rating: 5,
    comment:
      "Great customer support and lightning fast courier to Punjabi Bagh. Ordered IGET Moon Double Apple—flavor is super crisp and lasted two full weeks. 100% original verified.",
    timeAgo: "4 days ago",
  },
  {
    id: 8,
    author: "Rohan D.",
    location: "Rohini Sector 9",
    product: "Arabisk 40K Puffs Disposable",
    rating: 5,
    comment:
      "Very impressed with the prompt dispatch to North Delhi. Most stores take 2 days, but these guys delivered in 40 minutes with COD. Verified the hologram on the spot.",
    timeAgo: "4 days ago",
  },
  {
    id: 9,
    author: "Meera T.",
    location: "Defence Colony",
    product: "VGod Cubano Nic Salt",
    rating: 5,
    comment:
      "Finding original imported 50mg nicotine salts in Delhi is usually risky with duplicates around. Vape Shop Delhi stocks original sealed VGod bottles. Smooth throat hit.",
    timeAgo: "5 days ago",
  },
  {
    id: 10,
    author: "Karan B.",
    location: "Aerocity Worldmark",
    product: "Elf Bar Raya D3 25000",
    rating: 5,
    comment:
      "Was staying at an Aerocity hotel and needed an urgent replacement. The rider reached the hotel lobby in 20 minutes flat. Excellent discreet handover and verified seal.",
    timeAgo: "5 days ago",
  },
  {
    id: 11,
    author: "Ananya P.",
    location: "Green Park, South Delhi",
    product: "Uwell Caliburn A2 Pod Kit",
    rating: 5,
    comment:
      "Switched from cigarettes to the Caliburn A2 kit. The support team guided me on which nic salt strength to choose. Very patient and helpful customer service on WhatsApp.",
    timeAgo: "6 days ago",
  },
  {
    id: 12,
    author: "Dev M.",
    location: "Rajouri Garden",
    product: "Yuoto Thanos 5000 Puffs",
    rating: 5,
    comment:
      "Yuoto Thanos has been my go-to for months. Original QR code verified on first scan. Delivered to Rajouri Garden in 25 mins without any advance payment hassle.",
    timeAgo: "6 days ago",
  },
  {
    id: 13,
    author: "Tarun G.",
    location: "South Extension Part 2",
    product: "Nasty Juice Cush Man Mango",
    rating: 5,
    comment:
      "Best mango nic salt on the market, period. Authentic Malaysian import with the trademark cold exhale. South Ex delivery took barely 20 minutes flat.",
    timeAgo: "1 week ago",
  },
  {
    id: 14,
    author: "Siddharth J.",
    location: "Janakpuri, West Delhi",
    product: "Geek Bar Pulse 15000",
    rating: 5,
    comment:
      "Pulse mode gives an incredible punchy draw. Delivery was smooth, rider was courteous and waited while I opened the outer parcel to verify the scratch QR code.",
    timeAgo: "1 week ago",
  },
  {
    id: 15,
    author: "Manish L.",
    location: "Malviya Nagar",
    product: "EBCREATE BC5000 US Edition",
    rating: 5,
    comment:
      "Been ordering from here for 3 months now. Never received a single counterfeit or defective piece. Malviya Nagar delivery is always within 30 minutes.",
    timeAgo: "1 week ago",
  },
  {
    id: 16,
    author: "Gaurav K.",
    location: "Pitampura, North Delhi",
    product: "Caliburn Replacement Coils",
    rating: 5,
    comment:
      "Was struggling to find genuine replacement coils in Pitampura. They had them in stock and dispatched immediately. No burnt hits, original batch serial verified.",
    timeAgo: "1 week ago",
  },
  {
    id: 17,
    author: "Aman W.",
    location: "Mayur Vihar Phase 1",
    product: "Lost Mary MT15000 Turbo",
    rating: 5,
    comment:
      "East Delhi delivery was super quick (35 mins). The dual mesh mode switch on the Lost Mary Turbo produces huge dense vapor. Will definitely be a regular buyer.",
    timeAgo: "2 weeks ago",
  },
  {
    id: 18,
    author: "Sameer C.",
    location: "Noida Sector 18",
    product: "Elfbar GH23000 Blue Razz",
    rating: 5,
    comment:
      "Living across the border in Noida, was pleasantly surprised by express delivery in 45 minutes flat. Paid via Google Pay at the door once I inspected the package.",
    timeAgo: "2 weeks ago",
  },
  {
    id: 19,
    author: "Rishi H.",
    location: "DLF Cyber City, Gurgaon",
    product: "Geek Bar Burj 80000 Puffs",
    rating: 5,
    comment:
      "Ordered to my office in Cyber City during lunch break and received it before my evening meeting. Original device, scratch code checked out on official portal.",
    timeAgo: "2 weeks ago",
  },
  {
    id: 20,
    author: "Varun A.",
    location: "Model Town, Delhi",
    product: "Dinner Lady Lemon Tart Salt",
    rating: 5,
    comment:
      "Authentic UK e-liquid with genuine batch code and packaging. Rich dessert flavor that is hard to find in local Delhi shops. 10/10 doorstep delivery service.",
    timeAgo: "2 weeks ago",
  },
];

export default function CustomerReviews() {
  const [showAll, setShowAll] = useState(false);

  const displayedReviews = showAll ? REVIEWS_DATA : REVIEWS_DATA.slice(0, 6);

  return (
    <section className="w-full rounded-[28px] sm:rounded-[36px] bg-slate-950 border border-slate-800/80 p-6 sm:p-10 lg:p-12 text-white shadow-2xl relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-8">
        {/* Header Section matching User Screenshot */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-[11px] sm:text-xs font-black uppercase tracking-[0.25em] text-emerald-400 block">
            REVIEWS
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Loved across Delhi NCR
          </h2>
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs sm:text-sm font-semibold shadow-inner">
            <div className="flex items-center gap-1 text-emerald-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-emerald-400 text-emerald-400" />
              ))}
            </div>
            <span className="font-bold text-white">5.0</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">20 verified customer reviews</span>
          </div>
        </div>

        {/* 20 Reviews Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {displayedReviews.map((review) => (
            <div
              key={review.id}
              className="group p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#0f172a]/95 hover:bg-[#1e293b]/90 border border-slate-800/90 hover:border-emerald-500/40 shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 flex flex-col justify-between space-y-4"
            >
              {/* Top Row: Stars + Product Tag */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
                  ))}
                </div>
                <span className="text-[11px] font-medium text-slate-400 bg-slate-800/60 border border-slate-700/50 px-2 py-0.5 rounded-md truncate max-w-[160px]">
                  {review.product}
                </span>
              </div>

              {/* Review Comment */}
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                &ldquo;{review.comment}&rdquo;
              </p>

              {/* Bottom Row: Avatar + Name + Locality + TimeAgo */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 font-bold text-xs flex items-center justify-center shrink-0">
                    {review.author[0]}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs sm:text-sm font-bold text-white flex items-center gap-1 leading-tight">
                      <span>{review.author}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    </h4>
                    <p className="text-[10px] sm:text-[11px] text-slate-400 truncate mt-0.5">
                      Verified Buyer • {review.location}
                    </p>
                  </div>
                </div>
                <span className="text-[10px] sm:text-[11px] text-slate-400 shrink-0">
                  {review.timeAgo}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Toggle Button */}
        <div className="text-center pt-2">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-white font-bold text-xs sm:text-sm shadow-md hover:border-emerald-500/50 transition-all cursor-pointer active:scale-95"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>
              {showAll ? "Show Less Reviews" : `Show All 20 Verified Reviews (${REVIEWS_DATA.length})`}
            </span>
            {showAll ? (
              <ChevronUp className="w-4 h-4 text-slate-400" />
            ) : (
              <ChevronDown className="w-4 h-4 text-slate-400" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
