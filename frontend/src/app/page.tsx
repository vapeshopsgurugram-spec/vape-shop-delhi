import React from "react";
import Link from "next/link";
import {
  Zap,
  ShieldCheck,
  PackageCheck,
  CreditCard,
  MapPin,
  Clock,
  ChevronRight,
  Flame,
  HelpCircle,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Box,
  Truck,
  Layers,
  Award,
  Search,
  ExternalLink,
} from "lucide-react";
import { CATEGORIES, PRODUCTS, STORE_INFO } from "@/data/products";
import { BLOG_POSTS } from "@/data/blogs";
import ProductCard from "@/components/ProductCard";
import HeroSlider from "@/components/HeroSlider";
import DelhiLiveCommandHub from "@/components/DelhiLiveCommandHub";

const DELIVERY_HUBS = [
  {
    zone: "South Delhi",
    areas: "Saket, Hauz Khas, Greater Kailash (GK 1 & 2), Vasant Kunj, Defence Colony, Green Park, Malviya Nagar",
    time: "20–30 mins",
    status: "Instant Fleet",
    hubStation: "South Extension & Saket Dispatch Hub",
  },
  {
    zone: "Central Delhi",
    areas: "Connaught Place (CP), Barakhamba, Karol Bagh, Chanakyapuri, Patel Nagar, Rajendra Nagar",
    time: "15–25 mins",
    status: "Fastest Dispatch",
    hubStation: "Connaught Place Central Station",
  },
  {
    zone: "West Delhi",
    areas: "Dwarka (Sec 1-23), Rajouri Garden, Punjabi Bagh, Janakpuri, Paschim Vihar, Vikaspuri",
    time: "25–35 mins",
    status: "Active Fleet",
    hubStation: "Rajouri Garden & Dwarka Station",
  },
  {
    zone: "North Delhi",
    areas: "Rohini (Sec 1-24), Pitampura, Model Town, Civil Lines, Kamla Nagar, Shalimar Bagh",
    time: "25–35 mins",
    status: "Active Fleet",
    hubStation: "Pitampura & Rohini Hub",
  },
  {
    zone: "East Delhi",
    areas: "Mayur Vihar (Phase 1-3), Laxmi Nagar, Preet Vihar, Anand Vihar, Patparganj",
    time: "30–40 mins",
    status: "Hourly Express",
    hubStation: "Mayur Vihar Dispatch Point",
  },
  {
    zone: "Southwest & Aerocity",
    areas: "Aerocity Worldmark, T1 & T3 Airport Hotels, Mahipalpur, Vasant Vihar, Dhaula Kuan",
    time: "20–30 mins",
    status: "Priority Express",
    hubStation: "Aerocity Express Desk",
  },
];

const DEVICE_COMPARISON = [
  {
    category: "Ultra-Capacity Disposables",
    popularModels: "Geek Bar Burj 80K, Arabisk 40K",
    puffs: "40,000 to 80,000",
    nicotine: "2% / 5% Nic Salt",
    priceRange: "₹2,200 – ₹3,500",
    bestFor: "Longest lifespan, heavy daily vapers, zero maintenance",
  },
  {
    category: "Smart Screen Disposables",
    popularModels: "Yuoto Digi 15K, Lost Mary MT15000",
    puffs: "15,000 Puffs",
    nicotine: "5% Nic Salt",
    priceRange: "₹1,450 – ₹1,800",
    bestFor: "Battery & juice percentage display, compact ergonomics",
  },
  {
    category: "Pocket Flagon Classics",
    popularModels: "EBCREATE BC5000, Elf Bar Raya D1",
    puffs: "5,000 to 13,000",
    nicotine: "2% / 5% Nic Salt",
    priceRange: "₹1,250 – ₹1,650",
    bestFor: "Discreet pocket carry, smooth draw, beginner friendly",
  },
  {
    category: "Refillable Pod Systems",
    popularModels: "Uwell Caliburn G3, Caliburn A3S",
    puffs: "Unlimited (Refillable)",
    nicotine: "Custom (20mg – 50mg)",
    priceRange: "₹1,999 – ₹2,499",
    bestFor: "Economical daily running cost, customizable flavors",
  },
];

const FAQS = [
  {
    q: "What should I know before searching for a vape shop in Delhi?",
    a: "Before visiting a vape store or looking for electronic cigarette products in Delhi, check the applicable Indian laws governing electronic cigarettes.",
  },
  {
    q: "Are vape shops legal in Delhi?",
    a: "India's Prohibition of Electronic Cigarettes Act, 2019 prohibits the sale and distribution of electronic cigarettes covered by the Act.",
  },
  {
    q: "Are disposable vapes prohibited in Delhi?",
    a: "Disposable vaping devices that meet the Act's definition of electronic cigarettes are covered by the prohibition.",
  },
  {
    q: "Are vape delivery services available legally in Delhi?",
    a: "The Act prohibits the sale, distribution, and advertising of covered electronic cigarettes. Check the official legislation before relying on online listings or delivery claims.",
  },
  {
    q: "What are the rules for vape products in South Delhi and North Delhi?",
    a: "The central electronic-cigarette prohibition applies throughout Delhi, including North Delhi, South Delhi, East Delhi, and West Delhi.",
  },
  {
    q: "Where can I find official information about electronic cigarette laws in India?",
    a: "Read the Government of India's Prohibition of Electronic Cigarettes Act, 2019, for the applicable legal provisions.",
  },
  {
    q: "How fast is vape delivery across Delhi localities?",
    a: "We provide lightning-fast 30 to 60-minute express doorstep delivery across all 11 districts of Delhi. Orders in South Delhi (Saket, Hauz Khas, GK) and Central Delhi (Connaught Place) typically arrive within 20 to 30 minutes. Dedicated two-wheeler couriers are dispatched immediately upon order confirmation.",
  },
  {
    q: "Can I pay via Cash on Delivery (COD) or Doorstep UPI in Delhi?",
    a: "Yes! We proudly offer 100% Cash on Delivery (COD) across all Delhi neighborhoods with zero upfront payment. You can also pay the delivery rider upon arrival using any UPI app including Google Pay, PhonePe, Paytm, or BHIM.",
  },
  {
    q: "How do I verify the authenticity of a vape delivered in Delhi?",
    a: "Every vape, pod device, and coil box we dispatch is factory-sealed with the manufacturer's genuine anti-counterfeit holographic scratch-off security label. Simply scratch the silver coating to reveal your unique serial code and scan the QR code to verify authenticity directly on the brand's official portal (e.g. Elf Bar, Yuoto, Lost Mary, Uwell).",
  },
  {
    q: "Do you deliver to hotels and business districts in Aerocity and Central Delhi?",
    a: "Yes! We provide priority delivery to all major hotels in Aerocity (JW Marriott, Andaz, Pullman, Roseate), business towers in Connaught Place, and residential addresses across South Delhi. Simply enter your hotel or building name and room number for seamless handover.",
  },
  {
    q: "Which disposable vape brand is most popular in Delhi right now?",
    a: "Our bestsellers in Delhi include Yuoto Thanos 5000, Lost Mary MT15000 Turbo, EBCREATE BC5000 US Edition, Geek Bar Burj 80000 Puffs, and Uwell Caliburn Pod Systems. We also carry fresh stocks of imported premium nicotine salt e-liquids like VGod and Nasty Juice.",
  },
  {
    q: "Is doorstep packaging completely discreet and confidential?",
    a: "Yes, 100%. All orders are shipped in plain, unmarked, tamper-evident protective boxes. There are zero logos, branding, or product descriptions on the exterior of the parcel, ensuring total privacy.",
  },
];

export default function HomePage() {
  // 1. Structured FAQ Schema (Schema.org FAQPage)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  // 2. Structured ItemList Schema (Schema.org ItemList)
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Featured Vape Devices & Disposables - Vape Shop Delhi",
    description:
      "Trending disposable vapes, refillable pod kits and e-liquids available with express doorstep delivery in Delhi.",
    url: "https://www.vapeshop-delhi.com",
    numberOfItems: PRODUCTS.length,
    itemListElement: PRODUCTS.slice(0, 16).map((prod, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: prod.name,
      url: `https://www.vapeshop-delhi.com/product/${prod.slug}`,
      image: prod.image?.startsWith("http")
        ? prod.image
        : `https://www.vapeshop-delhi.com${prod.image || "/products/elfbar-gh23000-bluerazz.webp"}`,
    })),
  };

  // 3. Structured Service Schema for Delhi Express Delivery
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Hyperlocal Doorstep Vape Delivery",
    provider: {
      "@type": "LocalBusiness",
      name: STORE_INFO.name,
      telephone: STORE_INFO.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: STORE_INFO.address,
        addressLocality: "Delhi",
        addressRegion: "Delhi",
        postalCode: "110001",
        addressCountry: "IN",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Delhi",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Vape Delivery Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "30-60 Min Express Delivery Delhi",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cash on Delivery (COD) Vape Orders",
          },
        },
      ],
    },
  };

  return (
    <>
      {/* Search Engine Optimization JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero Auto-Slide Banner with Quick Neo-Dock */}
      <section className="w-full">
        <HeroSlider />
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-10 py-3 sm:py-6">
        {/* Delhi NCR Authority Hero Heading Block (Page 1 Google Rank Booster) */}
        <section className="text-center space-y-3.5 sm:space-y-4 pt-1 sm:pt-3 pb-2 sm:pb-3 max-w-4xl mx-auto">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-orange-50/90 border border-orange-200/90 text-orange-700 text-xs sm:text-[13px] font-semibold shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span>⚡ 30-60 Min Express Delivery</span>
            <span className="text-orange-300">|</span>
            <span className="text-slate-700 font-medium">South • West • Central • North Delhi</span>
          </div>

          {/* Main Authority Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
            Vape Shop Delhi <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500">
              #1 Online Vape &amp; Pod Store
            </span>
          </h1>

          {/* Keyword Rich SEO Description */}
          <p className="max-w-3xl mx-auto text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-normal px-2">
            Looking for a trusted <strong className="font-semibold text-slate-900">Vape Shop in Delhi</strong>? Buy 100% authentic disposable vapes, refillable pod kits, and imported nic salts from <strong className="font-semibold text-slate-900">Vape Shop Delhi</strong> with 30–60 min doorstep courier across South, West, Central &amp; North Delhi and Cash on Delivery (COD).
          </p>

          {/* Trending Category Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pt-1 text-xs">
            <span className="text-[11px] sm:text-xs font-bold text-slate-400 tracking-wider uppercase mr-1">
              TRENDING IN DELHI:
            </span>
            <Link
              href="/category/disposable-vapes"
              className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-700 font-semibold shadow-2xs hover:text-orange-600 hover:border-orange-400 hover:shadow-xs transition-all"
            >
              Disposable Vapes
            </Link>
            <Link
              href="/category/pod-systems"
              className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-700 font-semibold shadow-2xs hover:text-orange-600 hover:border-orange-400 hover:shadow-xs transition-all"
            >
              Pod Systems &amp; Kits
            </Link>
            <Link
              href="/category/e-liquids"
              className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-700 font-semibold shadow-2xs hover:text-orange-600 hover:border-orange-400 hover:shadow-xs transition-all"
            >
              Nic Salts &amp; E-Liquids
            </Link>
            <Link
              href="/category/coils-pods"
              className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-700 font-semibold shadow-2xs hover:text-orange-600 hover:border-orange-400 hover:shadow-xs transition-all"
            >
              Replacement Coils &amp; Pods
            </Link>
          </div>
        </section>

        {/* 1. Ultra-Compact Visual Category Row (Streamlined for Desktop & Phone) */}
        <section className="space-y-2.5 sm:space-y-3">
          <div className="flex items-center justify-between border-b border-orange-100/80 pb-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <h2 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
                Explore Categories
              </h2>
              <span className="hidden sm:inline-block text-[11px] font-semibold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200/60">
                Same-Day Delhi Dispatch
              </span>
            </div>
            <Link
              href="/products"
              className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1 group"
            >
              <span>View All</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Desktop & Mobile: Ultra-Compact 1-Row Capsules (Saves ~150px vertical height) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
            {CATEGORIES.map((cat) => {
              const iconMap: Record<string, string> = {
                disposable: "🔥",
                pods: "⚡",
                "nic-salts": "💧",
                accessories: "🔧",
              };
              return (
                <Link
                  key={cat.id}
                  href={`/category/${cat.slug}`}
                  className="group flex items-center justify-between p-2 sm:p-2.5 px-2.5 sm:px-3 rounded-xl sm:rounded-2xl bg-white border border-orange-200/80 hover:border-orange-400 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-orange-50 group-hover:bg-orange-500 text-sm sm:text-base flex items-center justify-center shrink-0 transition-colors shadow-2xs">
                      {iconMap[cat.id] || "📦"}
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-orange-600 truncate transition-colors leading-tight">
                        {cat.name}
                      </h3>
                      <p className="text-[10px] sm:text-[11px] text-slate-400 font-medium truncate mt-0.5">
                        {cat.count} Items · 30-Min Courier
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-300 group-hover:text-orange-600 group-hover:translate-x-0.5 shrink-0 transition-all ml-1" />
                </Link>
              );
            })}
          </div>
        </section>

        {/* 2. Featured Bestsellers in Delhi Grid (Products immediately in view on Desktop & Phone) */}
        <section className="space-y-4 sm:space-y-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-1.5 sm:gap-2 border-b border-orange-100 pb-2.5 sm:pb-3">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 uppercase tracking-wider mb-0.5">
                <Flame className="h-4 w-4" /> Bestsellers in Delhi
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight">
                Vape Shop Delhi – Top Online Vape Store in Delhi
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
                Best Vape Shop in Delhi – Order Online &amp; Get Fast 30–60 Min Doorstep Delivery with Cash on Delivery (COD).
              </p>
            </div>
            <Link
              href="/products"
              className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1"
            >
              <span>Explore Entire Catalog</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {PRODUCTS.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        </section>

        {/* 3. Asymmetric Delhi Live Command Center & Bento Showcase (Desktop Hub below Bestsellers) */}
        <section className="hidden md:block w-full">
          <DelhiLiveCommandHub />
        </section>

        {/* 4. Delhi Vape Buying Guide & Device Comparison Table (Rich Snippet SEO Content) */}
        <section className="p-6 sm:p-8 rounded-[28px] sm:rounded-[36px] bg-white border border-orange-100 shadow-sm space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-wider text-orange-600 flex items-center gap-1.5">
              <Layers className="w-4 h-4" /> Comprehensive Buying Guide
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Compare Vape Devices Available in Delhi
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
              Whether you are looking for long-lasting high-puff disposables or cost-effective refillable pod systems, explore this quick comparison to find your ideal vape with instant delivery in Delhi.
            </p>
          </div>

          {/* Structured Responsive Table */}
          <div className="overflow-x-auto border border-orange-100 rounded-2xl">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-orange-50/80 border-b border-orange-100 text-slate-800 font-extrabold">
                  <th className="p-3.5 sm:p-4">Device Category</th>
                  <th className="p-3.5 sm:p-4">Popular Models</th>
                  <th className="p-3.5 sm:p-4">Puff Capacity</th>
                  <th className="p-3.5 sm:p-4">Nicotine Strength</th>
                  <th className="p-3.5 sm:p-4">Delhi Price</th>
                  <th className="p-3.5 sm:p-4">Ideal For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-orange-50 text-slate-600">
                {DEVICE_COMPARISON.map((row, idx) => (
                  <tr key={idx} className="hover:bg-orange-50/30 transition-colors">
                    <td className="p-3.5 sm:p-4 font-black text-slate-900 whitespace-nowrap">
                      {row.category}
                    </td>
                    <td className="p-3.5 sm:p-4 font-semibold text-orange-700 whitespace-nowrap">
                      {row.popularModels}
                    </td>
                    <td className="p-3.5 sm:p-4 whitespace-nowrap font-medium">
                      {row.puffs}
                    </td>
                    <td className="p-3.5 sm:p-4 whitespace-nowrap">
                      {row.nicotine}
                    </td>
                    <td className="p-3.5 sm:p-4 font-extrabold text-slate-900 whitespace-nowrap">
                      {row.priceRange}
                    </td>
                    <td className="p-3.5 sm:p-4 leading-relaxed min-w-[200px]">
                      {row.bestFor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 5. 3-Step Simple Order Process for Delhi Customers (Ultra-Compact Banner) */}
        <section className="p-4 sm:p-5 sm:px-6 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 text-white shadow-lg shadow-orange-500/15 relative overflow-hidden space-y-3 sm:space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-white/15 pb-2.5">
            <div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-orange-100/90 block">
                Simple 3-Step Doorstep Courier
              </span>
              <h2 className="text-base sm:text-xl font-bold tracking-tight text-white mt-0.5">
                How Doorstep Vape Delivery Works in Delhi
              </h2>
            </div>
            <p className="text-[11px] sm:text-xs text-orange-100/90 max-w-md hidden md:block">
              Order smoothly without advance payments. 30–60 min courier with COD &amp; scratch-code verification.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3.5 relative z-10">
            {/* Step 1 */}
            <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/12 backdrop-blur-xs border border-white/20 flex items-start gap-2.5 sm:gap-3">
              <div className="w-7 h-7 rounded-lg bg-white text-orange-600 font-bold flex items-center justify-center text-xs shrink-0 shadow-xs">
                1
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-xs sm:text-sm text-white leading-tight">Pick Device or WhatsApp</h3>
                <p className="text-[11px] text-orange-100/90 leading-snug mt-0.5">
                  Choose flavors online or message our Delhi WhatsApp desk.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/12 backdrop-blur-xs border border-white/20 flex items-start gap-2.5 sm:gap-3">
              <div className="w-7 h-7 rounded-lg bg-white text-orange-600 font-bold flex items-center justify-center text-xs shrink-0 shadow-xs">
                2
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-xs sm:text-sm text-white leading-tight">Rider Dispatched in 10 Mins</h3>
                <p className="text-[11px] text-orange-100/90 leading-snug mt-0.5">
                  Nearest Delhi hub rider packs unmarked parcel and heads to you.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/12 backdrop-blur-xs border border-white/20 flex items-start gap-2.5 sm:gap-3">
              <div className="w-7 h-7 rounded-lg bg-white text-orange-600 font-bold flex items-center justify-center text-xs shrink-0 shadow-xs">
                3
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-xs sm:text-sm text-white leading-tight">Verify QR &amp; Pay via COD</h3>
                <p className="text-[11px] text-orange-100/90 leading-snug mt-0.5">
                  Scan scratch code to verify originality, then pay via Cash or UPI.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Delhi Delivery Hubs (100% Comprehensive Delhi Matrix) */}
        <section className="p-6 sm:p-10 rounded-3xl bg-white border border-orange-100 shadow-sm space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
              Hyperlocal Delhi Coverage
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Express Delivery Across All Delhi Localities
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              30–60 min instant courier dispatched from our central Connaught Place &amp; South Delhi hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {DELIVERY_HUBS.map((hub) => (
              <div
                key={hub.zone}
                className="p-4.5 rounded-2xl border border-orange-100 bg-orange-50/30 flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-black text-slate-900 flex items-center gap-1.5">
                      <MapPin className="h-4 w-4 text-orange-600" />
                      {hub.zone}
                    </h3>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      {hub.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {hub.areas}
                  </p>
                </div>

                <div className="pt-2 border-t border-orange-100/80 flex items-center justify-between text-xs font-semibold">
                  <span className="text-slate-500 flex items-center gap-1 text-[11px]">
                    <Clock className="h-3 w-3 text-orange-600" /> ETA:
                  </span>
                  <span className="text-orange-700 font-extrabold">{hub.time}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Authenticity Verification Protocol (SEO Content Block) */}
        <section className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white via-orange-50/20 to-amber-50/30 border border-orange-200/80 shadow-2xs space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-extrabold text-orange-600 uppercase tracking-wider flex items-center gap-1">
                <ShieldCheck className="w-4 h-4" /> 100% Genuine Factory Promise
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                How to Verify Authentic Vapes in Delhi
              </h2>
            </div>
            <a
              href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
                "Hi Vape Shop Delhi! I want to confirm authenticity for a device."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1 border border-orange-200 px-3 py-1.5 rounded-xl bg-white shadow-2xs"
            >
              <span>Ask Authenticity Team</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-4xl">
            At <strong>Vape Shop Delhi</strong>, we maintain a zero-tolerance policy against counterfeit or replica vapes. Every product in our inventory is factory sealed and features manufacturer-grade holographic security packaging.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs">
            <div className="p-4 rounded-2xl bg-white border border-orange-100 shadow-2xs space-y-1.5">
              <span className="font-extrabold text-slate-900 block text-xs">
                1. Locate Holographic Sticker
              </span>
              <p className="text-slate-500 leading-relaxed">
                Inspect the authentic holographic seal placed on the product box before unsealing.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-orange-100 shadow-2xs space-y-1.5">
              <span className="font-extrabold text-slate-900 block text-xs">
                2. Scratch Silver Security Code
              </span>
              <p className="text-slate-500 leading-relaxed">
                Gently scratch off the protective coating to reveal your device&apos;s unique security key.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-orange-100 shadow-2xs space-y-1.5">
              <span className="font-extrabold text-slate-900 block text-xs">
                3. Scan Official QR Code
              </span>
              <p className="text-slate-500 leading-relaxed">
                Scan with your phone camera to open the manufacturer security database and confirm original status.
              </p>
            </div>
          </div>
        </section>

        {/* 8. Pure Delhi SEO Authority Section (Helpful Content & Anti-Spam Compliant) */}
        <section className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-orange-50/60 via-white to-amber-50/40 border border-orange-200/80 shadow-2xs space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-orange-600 uppercase tracking-wider block">
              Official Delhi Vaping Guide &amp; Doorstep Delivery Network
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-slate-900 tracking-tight">
              Buy 100% Authentic Vapes Online in Delhi – Express 30 to 60-Minute Doorstep Delivery
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Welcome to <strong>{STORE_INFO.name}</strong>, Delhi NCR&apos;s leading online destination for 100% genuine disposable vapes, refillable pod kits, replacement coils, and imported nicotine salt e-liquids. Designed specifically for adult vapers across the capital, we eliminate the common risks found in unregulated markets: <strong>counterfeit devices</strong>, <strong>unreliable delivery promises</strong>, and <strong>shady advance payment demands</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-1 text-xs">
            <div className="p-4 rounded-2xl bg-white border border-orange-100 shadow-2xs space-y-1.5">
              <h3 className="font-bold text-slate-900 flex items-center gap-1.5 text-xs sm:text-sm">
                <Truck className="w-4 h-4 text-orange-600 shrink-0" />
                Hyperlocal Delhi Fleet (30–60 Mins)
              </h3>
              <p className="text-slate-600 leading-relaxed text-[11px] sm:text-xs">
                We operate multiple localized dispatch stations across <strong>South Delhi (Saket, GK, Hauz Khas)</strong>, <strong>Central Delhi (Connaught Place, Karol Bagh)</strong>, <strong>West Delhi (Dwarka, Punjabi Bagh)</strong>, and <strong>North Delhi (Rohini, Pitampura)</strong>. Orders are dispatched immediately via dedicated two-wheeler couriers with live WhatsApp status tracking.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-orange-100 shadow-2xs space-y-1.5">
              <h3 className="font-bold text-slate-900 flex items-center gap-1.5 text-xs sm:text-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                Scratch QR Code Factory Guarantee
              </h3>
              <p className="text-slate-600 leading-relaxed text-[11px] sm:text-xs">
                Every device in our inventory is factory-sealed and backed by manufacturer holographic security labels. Simply scratch off the protective coating to reveal your unique serial code and scan it to authenticate directly on the official brand portal (Yuoto, Geek Bar, Elf Bar, Lost Mary, Uwell) before unsealing.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-orange-100 shadow-2xs space-y-1.5">
              <h3 className="font-bold text-slate-900 flex items-center gap-1.5 text-xs sm:text-sm">
                <CreditCard className="w-4 h-4 text-amber-500 shrink-0" />
                100% Cash on Delivery &amp; Doorstep UPI
              </h3>
              <p className="text-slate-600 leading-relaxed text-[11px] sm:text-xs">
                Zero upfront financial risk. Inspect your discreet, unbranded package upon arrival at your doorstep in Delhi, then pay seamlessly via <strong>Cash on Delivery (COD)</strong> or scan the rider&apos;s UPI scanner using <strong>Google Pay, PhonePe, Paytm, or BHIM</strong>.
              </p>
            </div>
          </div>

          {/* Detailed Locality Coverage Matrix */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-orange-100/90 space-y-2.5">
            <h3 className="text-xs sm:text-sm font-bold text-slate-900">
              Coverage Localities Across Delhi &amp; National Capital Region (NCR)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs text-slate-600">
              <div className="space-y-1">
                <span className="font-bold text-orange-700 block">South Delhi (20–30 Mins):</span>
                <p className="text-[11px] leading-relaxed text-slate-500">
                  Saket, Hauz Khas, Greater Kailash (GK 1 &amp; 2), Vasant Kunj, Vasant Vihar, Defence Colony, Green Park, South Extension, Malviya Nagar, Gulmohar Park.
                </p>
              </div>
              <div className="space-y-1">
                <span className="font-bold text-orange-700 block">Central Delhi (15–25 Mins):</span>
                <p className="text-[11px] leading-relaxed text-slate-500">
                  Connaught Place (CP), Barakhamba Road, Karol Bagh, Chanakyapuri Diplomatic Enclave, Patel Nagar, Rajendra Nagar, Paharganj.
                </p>
              </div>
              <div className="space-y-1">
                <span className="font-bold text-orange-700 block">West &amp; North Delhi (25–35 Mins):</span>
                <p className="text-[11px] leading-relaxed text-slate-500">
                  Dwarka (Sectors 1–23), Punjabi Bagh, Rajouri Garden, Janakpuri, Rohini (Sectors 1–24), Pitampura, Model Town, Civil Lines, Shalimar Bagh.
                </p>
              </div>
              <div className="space-y-1">
                <span className="font-bold text-orange-700 block">East Delhi, Aerocity &amp; NCR:</span>
                <p className="text-[11px] leading-relaxed text-slate-500">
                  Mayur Vihar, Laxmi Nagar, Preet Vihar, Aerocity Hotels (JW Marriott, Andaz, Pullman), DLF Cyber City Gurgaon, Noida Sectors 18–62.
                </p>
              </div>
            </div>
          </div>

          {/* Popular Delhi Searches Cloud */}
          <div className="pt-3 border-t border-orange-100 space-y-2">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
              Trending Searches in Delhi:
            </span>
            <div className="flex flex-wrap gap-1.5 text-[11px]">
              {[
                { label: "Vape Shop Delhi", href: "/products" },
                { label: "Vape Shop in Delhi", href: "/products" },
                { label: "Best Vape Shop Delhi", href: "/products" },
                { label: "Best Vape Shop in Delhi", href: "/products" },
                { label: "Vape Shop Near Me", href: "/contact" },
                { label: "Vape Delivery Delhi", href: "/products" },
                { label: "Vape Shop South Delhi", href: "/products" },
                { label: "Vape Shop West Delhi", href: "/products" },
                { label: "Disposable Vape Delhi", href: "/category/disposable-vapes" },
                { label: "Vape Price in Delhi", href: "/products" },
                { label: "South Delhi Vape Delivery", href: "/products" },
                { label: "Yuoto Thanos Delhi", href: "/search?q=Yuoto" },
                { label: "Lost Mary 15000 Puffs Delhi", href: "/search?q=Lost+Mary" },
                { label: "Elf Bar BC5000 Delhi", href: "/search?q=Elf+Bar" },
                { label: "Geek Bar Burj 80K Delhi", href: "/search?q=Geek+Bar" },
                { label: "Uwell Caliburn Pods Delhi", href: "/search?q=Caliburn" },
                { label: "IGET Moon Disposables", href: "/search?q=IGET" },
                { label: "Connaught Place Vape Store", href: "/contact" },
                { label: "Dwarka Vape Delivery", href: "/products" },
                { label: "Saket & GK Vapes", href: "/products" },
                { label: "Cash on Delivery Vapes Delhi", href: "/products" },
                { label: "Late Night Vape Delivery Delhi", href: "/contact" },
              ].map((chip) => (
                <Link
                  key={chip.label}
                  href={chip.href}
                  className="px-2.5 py-1 rounded-lg bg-white border border-orange-200 text-slate-700 hover:text-orange-700 hover:border-orange-400 font-semibold shadow-2xs transition-colors"
                >
                  {chip.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Vape Guides & Buyer Education */}
        <section className="space-y-6 pt-2">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3">
            <div>
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Buyer Education &amp; Guides
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Vape Guides &amp; Insights
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Authenticity checks, puff comparisons, and express delivery details for Delhi vapers.
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-orange-600 hover:text-orange-700 hover:translate-x-1 transition-all"
            >
              <span>View All Guides</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.id}
                className="group p-5 rounded-2xl sm:rounded-3xl bg-white border border-orange-100 shadow-2xs hover:shadow-md hover:border-orange-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-1 text-[11px]">
                    <span className="px-2.5 py-0.5 rounded-full font-extrabold bg-orange-50 text-orange-700 border border-orange-200">
                      {post.badge}
                    </span>
                    <span className="text-slate-400 font-medium">{post.readTime}</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors line-clamp-2 leading-snug">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-orange-600">
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 10. Frequently Asked Questions (Delhi Specific with FAQPage Schema) */}
        <section className="max-w-5xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-orange-600 uppercase tracking-wider flex items-center justify-center gap-1">
              <HelpCircle className="h-3.5 w-3.5" /> Delhi FAQs
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions in Delhi
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto">
              Essential guidance on electronic cigarette legal provisions, Delhi regulations, and doorstep delivery details.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {FAQS.map((faq, index) => (
              <div
                key={faq.q}
                className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-orange-300 hover:shadow-xs transition-all flex flex-col justify-start"
              >
                <div className="flex items-start gap-2.5">
                  <span className="shrink-0 w-5 h-5 rounded-md bg-orange-50 border border-orange-200 text-orange-700 text-[10px] font-extrabold flex items-center justify-center mt-0.5">
                    {index + 1}
                  </span>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                    {faq.q}
                  </h3>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed mt-2 pl-7.5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
