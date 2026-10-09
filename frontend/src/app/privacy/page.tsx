import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ShieldCheck } from "lucide-react";
import { STORE_INFO } from "@/data/products";

export const metadata: Metadata = {
  title: "Privacy Policy | " + STORE_INFO.name,
  description:
    "Privacy Policy and customer data protection information for " + STORE_INFO.name + ". Safe, encrypted, and discreet ordering.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-orange-50/20 pb-20 pt-24 sm:pt-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 py-1">
          <Link href="/" className="hover:text-orange-600 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">Privacy Policy</span>
        </nav>

        <div className="bg-white rounded-3xl border border-orange-100 shadow-sm p-6 sm:p-10 space-y-6">
          <div className="flex items-center gap-3 pb-6 border-b border-orange-100">
            <div className="h-12 w-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Privacy Policy
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Last updated: October 2026 • {STORE_INFO.name} ({STORE_INFO.domain})
              </p>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <h2 className="text-base font-bold text-slate-900">1. Information We Collect</h2>
            <p>
              When placing an order or inquiry via our website or direct WhatsApp, we collect only the necessary details required to complete your express delivery in Delhi NCR, such as:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Recipient name and contact phone number.</li>
              <li>Delivery address, locality, landmark, or PIN code in Delhi / Delhi NCR.</li>
              <li>Order specifics (device models, flavor choices, quantity).</li>
            </ul>

            <h2 className="text-base font-bold text-slate-900 pt-3">2. Discreet Packaging &amp; Data Privacy</h2>
            <p>
              We prioritize complete confidentiality. All deliveries are packaged in plain, unmarked, tamper-evident protective wrapping with zero outside logos or product descriptions. Your personal information is never sold, leased, or distributed to third-party marketing services.
            </p>

            <h2 className="text-base font-bold text-slate-900 pt-3">3. Age Verification &amp; Compliance</h2>
            <p>
              In strict accordance with legal regulations, products sold on {STORE_INFO.name} are intended exclusively for existing adult smokers of legal smoking age (18+ / 21+ depending on jurisdiction). We reserve the right to verify legal age prior to dispatch or upon physical delivery.
            </p>

            <h2 className="text-base font-bold text-slate-900 pt-3">4. Contact &amp; Grievance Support</h2>
            <p>
              For any questions regarding our privacy practices or data handling, please reach out directly:
            </p>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs space-y-1">
              <p><span className="font-bold text-slate-900">Store:</span> {STORE_INFO.name}</p>
              <p><span className="font-bold text-slate-900">Address:</span> {STORE_INFO.address}</p>
              <p><span className="font-bold text-slate-900">Helpline:</span> {STORE_INFO.phone}</p>
              <p><span className="font-bold text-slate-900">Email:</span> {STORE_INFO.email}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
