import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, FileText, AlertTriangle } from "lucide-react";
import { STORE_INFO } from "@/data/products";

export const metadata: Metadata = {
  title: "Terms of Service | " + STORE_INFO.name,
  description:
    "Terms of service, age compliance, and delivery conditions for " + STORE_INFO.name + ". Serving Delhi NCR with 100% genuine products.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-orange-50/20 pb-20 pt-24 sm:pt-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 py-1">
          <Link href="/" className="hover:text-orange-600 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">Terms of Service</span>
        </nav>

        <div className="bg-white rounded-3xl border border-orange-100 shadow-sm p-6 sm:p-10 space-y-6">
          <div className="flex items-center gap-3 pb-6 border-b border-orange-100">
            <div className="h-12 w-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Terms of Service
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Last updated: October 2026 • {STORE_INFO.name}
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3 text-amber-900 text-xs">
            <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
            <p>
              <strong className="font-bold">Age Restriction Notice:</strong> You must be at least 18 or 21 years of age (in accordance with local regulations) to purchase or use any product on this website. By placing an order, you certify that you meet the legal age requirements.
            </p>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <h2 className="text-base font-bold text-slate-900">1. Authenticity Guarantee</h2>
            <p>
              {STORE_INFO.name} only sells 100% authentic, brand-new, factory-sealed products from recognized manufacturers. All devices feature anti-counterfeit scratch codes verifiable on the manufacturer&apos;s official website.
            </p>

            <h2 className="text-base font-bold text-slate-900 pt-3">2. Delhi Doorstep Express Delivery</h2>
            <p>
              Doorstep delivery across South Delhi, Central Delhi, West Delhi, North Delhi, and East Delhi is dispatched immediately upon order confirmation. Delivery ETAs range from 30 to 60 minutes subject to weather and traffic conditions.
            </p>

            <h2 className="text-base font-bold text-slate-900 pt-3">3. Payments &amp; Cash on Delivery (COD)</h2>
            <p>
              We support Cash on Delivery (COD) and doorstep UPI payments (GPay, PhonePe, Paytm). Payment must be made upon receipt of the sealed package.
            </p>

            <h2 className="text-base font-bold text-slate-900 pt-3">4. Returns &amp; Defective Items</h2>
            <p>
              Due to hygiene and safety standards, opened consumable items cannot be returned once unsealed. In the rare event of a factory manufacturing defect (DOA - Dead on Arrival), contact our WhatsApp support within 24 hours of delivery for prompt inspection and resolution.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
