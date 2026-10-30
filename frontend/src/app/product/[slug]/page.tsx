import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRODUCTS, getProductBySlug, STORE_INFO } from "@/data/products";
import ProductDetailClient from "@/components/ProductDetailClient";

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | " + STORE_INFO.name,
    };
  }

  const productKeywords = [
    product.name,
    `${product.name} Delhi`,
    `${product.name} Delhi NCR`,
    `${product.name} price Delhi`,
    `Buy ${product.name} online Delhi`,
    `${product.brand} Delhi`,
    `${product.brand} vape store Delhi`,
    `${product.name} cash on delivery Delhi`,
    `${product.name} express delivery South Delhi`,
    ...(product.flavors || []).map((f: string) => `${product.name} ${f}`),
  ];

  return {
    title: `${product.name} in Delhi (COD & 30m Delivery)`,
    description: `Buy authentic ${product.name} in Delhi with factory scratch-off QR code. 30-60 min express delivery across Delhi NCR. Cash on Delivery available.`,
    keywords: productKeywords,
    openGraph: {
      title: `${product.name} - ₹${product.price.toLocaleString("en-IN")} | Vape Shop Delhi`,
      description: product.description,
      images: [
        {
          url: product.image || "/products/ebcreate-bc5000-disposable-pod-device.webp",
          alt: `${product.name} | Vape Shop Delhi`,
        },
      ],
    },
    alternates: {
      canonical: `/product/${product.slug}`,
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const absoluteImageUrl = product.image?.startsWith("http")
    ? product.image
    : `https://www.vapeshop-delhi.com${product.image || "/products/ebcreate-bc5000-disposable-pod-device.webp"}`;

  // Schema.org JSON-LD for Google Rich Results
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: absoluteImageUrl,
    description: product.description,
    sku: product.id,
    mpn: product.id,
    brand: {
      "@type": "Brand",
      name: product.brand || "Vape Shop Delhi",
    },
    offers: {
      "@type": "Offer",
      url: `https://www.vapeshop-delhi.com/product/${product.slug}`,
      priceCurrency: "INR",
      price: product.price,
      priceValidUntil: "2027-12-31",
      validFrom: "2024-01-01",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Vape Shop Delhi",
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "0",
          currency: "INR",
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "IN",
          addressRegion: "Delhi NCR",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 0,
            maxValue: 1,
            unitCode: "DAY",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 0,
            maxValue: 1,
            unitCode: "DAY",
          },
        },
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "IN",
        returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 2,
        returnMethod: "https://schema.org/ReturnInStore",
        returnFees: "https://schema.org/FreeReturn",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewsCount || 120,
    },
  };

  const productFaqs = [
    {
      q: `Is ${product.name} 100% authentic and original?`,
      a: `Yes, every ${product.name} sold at Vape Shop Delhi comes in factory-sealed packaging with a verifiable anti-counterfeit scratch-off security QR code. You can verify it directly on the manufacturer's official security portal.`,
    },
    {
      q: `How fast is delivery for ${product.name} in Delhi?`,
      a: `We provide instant 30 to 60-minute express doorstep delivery across all areas of Delhi (South Delhi, Central Delhi, West Delhi, North Delhi, and East Delhi) with Cash on Delivery (COD) and UPI.`,
    },
    {
      q: `Can I order ${product.name} with Cash on Delivery (COD)?`,
      a: `Yes! We accept Cash on Delivery (COD) as well as doorstep UPI (Google Pay, PhonePe, Paytm) across all locations in Delhi.`,
    },
    ...(product.puffs
      ? [
          {
            q: `How long will ${product.puffs.toLocaleString()} puffs of ${product.name} last?`,
            a: `${product.puffs.toLocaleString()} puffs typically lasts between 2 to 4 weeks depending on personal vaping frequency. The rechargeable Type-C battery ensures consistent vapor and flavor until the e-liquid is completely consumed.`,
          },
        ]
      : [
          {
            q: `How do I maintain and care for ${product.name}?`,
            a: `Keep the device charged with a standard 5V/1A USB Type-C adapter, avoid chain-vaping when the pod liquid is low, and store it in a cool, dry place away from direct sunlight.`,
          },
        ]),
    {
      q: `Which areas in Delhi get 30–60 minute express courier for ${product.name}?`,
      a: `Our active dispatch stations cover South Delhi (Saket, Hauz Khas, GK 1 & 2, Vasant Kunj, Green Park), Central Delhi (Connaught Place, Karol Bagh), West Delhi (Dwarka, Punjabi Bagh, Rajouri Garden), North Delhi (Rohini, Pitampura), and Aerocity.`,
    },
    {
      q: `Is the delivery packaging of ${product.name} discreet and secure?`,
      a: `Yes, 100%. All orders are delivered in plain, tamper-evident protective boxes with zero external branding, logos, or product names, ensuring complete privacy upon doorstep arrival.`,
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: productFaqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

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
        name: "Products",
        item: "https://www.vapeshop-delhi.com/products",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `https://www.vapeshop-delhi.com/product/${product.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ProductDetailClient product={product} faqs={productFaqs} />
    </>
  );
}
