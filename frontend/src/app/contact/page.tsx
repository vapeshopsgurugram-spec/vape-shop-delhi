import React from "react";
import type { Metadata } from "next";
import ContactClient from "@/components/ContactClient";
import { STORE_INFO } from "@/data/products";

export const metadata: Metadata = {
  title: "Contact Us & Express Delivery | " + STORE_INFO.name,
  description:
    `Order authentic disposable vapes and pods online in Delhi. Call or WhatsApp ${STORE_INFO.phone} for 30-60 minute express delivery across Delhi NCR.`,
  keywords: [
    "Contact Vape Shop Delhi",
    "WhatsApp vape order Delhi",
    "Vape delivery phone number Delhi",
    "South Delhi vape store",
    "Same day vape delivery Delhi NCR",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact & Fast Delivery | " + STORE_INFO.name,
    description: `Instant 30-60 min doorstep vape delivery across Delhi & Delhi NCR. WhatsApp ${STORE_INFO.phone}.`,
    url: "https://www.vapeshop-delhi.com/contact",
    siteName: "Vape Shop Delhi",
  },
};

export default function ContactPage() {
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
        name: "Contact",
        item: "https://www.vapeshop-delhi.com/contact",
      },
    ],
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Vape Shop Delhi",
    description: "Contact Vape Shop Delhi for doorstep vape delivery across Delhi and Delhi NCR.",
    url: "https://www.vapeshop-delhi.com/contact",
    mainEntity: {
      "@type": "VapeShop",
      name: "Vape Shop Delhi",
      telephone: STORE_INFO.phone,
      url: "https://www.vapeshop-delhi.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Connaught Place / South Extension",
        addressLocality: "New Delhi",
        postalCode: "110001",
        addressRegion: "Delhi",
        addressCountry: "IN",
      },
      openingHours: "Mo-Su 10:00-23:30",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <main className="min-h-screen bg-slate-50/50 pb-20 pt-24 sm:pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactClient />
        </div>
      </main>
    </>
  );
}
