import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { CartProvider } from "@/context/CartContext";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Vape Shop Delhi – Top Online Vape Store in Delhi",
    template: "%s | Vape Shop Delhi",
  },
  description:
    "Best Vape Shop in Delhi – Order Online & Get Fast Delivery. Looking for premium disposable vapes, pods and e-liquids in Delhi? 30-60 min express doorstep courier with Cash on Delivery (COD) across Delhi NCR.",
  keywords: [
    // 1. Delhi Core Commercial Keywords
    "Vape Shop Delhi",
    "Vape Shop in Delhi",
    "Vape Store Delhi",
    "Vape Store in Delhi",
    "Vape Delivery Delhi",
    "Vape Delivery in Delhi",
    "Buy Vape Online Delhi",
    "Vape Shop Near Me Delhi",
    "Vape Store Near Me Delhi",
    "Vape Store Open Now Delhi",
    "Vape Shop Open Now Delhi",
    "Best Vape Store Delhi",
    "Best Vape Shop Delhi",
    "Authentic Vape Store Delhi",
    "Original Vape Shop Delhi",
    "Online Vape Delivery Delhi",
    "Disposable Vapes Delhi",
    "Pod Systems Delhi",
    "Vape Coils Delhi",
    "Nicotine Salts Delhi",
    "E Liquids Delhi",
    "Vape Juice Delhi",

    // 2. Delhi Micro-Localities & Sub-regions
    "South Delhi Vape Store",
    "South Delhi Vape Delivery",
    "Vape Store Saket",
    "Vape Delivery Saket",
    "Vape Store Hauz Khas",
    "Vape Delivery Hauz Khas",
    "Vape Store Greater Kailash",
    "Vape Store GK 1",
    "Vape Store GK 2",
    "Vape Delivery Greater Kailash",
    "Vape Store Vasant Kunj",
    "Vape Delivery Vasant Kunj",
    "Vape Store Vasant Vihar",
    "Vape Delivery Vasant Vihar",
    "Vape Store Defence Colony",
    "Vape Delivery Defence Colony",
    "Vape Store Green Park",
    "Vape Delivery Green Park",
    "Vape Store South Extension",
    "Vape Delivery South Extension",
    "Vape Store Malviya Nagar",
    "Vape Delivery Malviya Nagar",
    "Vape Store Lajpat Nagar",
    "Vape Delivery Lajpat Nagar",
    "Vape Store Connaught Place CP",
    "Vape Delivery Connaught Place",
    "Vape Store Dwarka",
    "Vape Delivery Dwarka Sector 12",
    "Vape Store Janakpuri",
    "Vape Store Rajouri Garden",
    "Vape Store Punjabi Bagh",
    "Vape Store Rohini",
    "Vape Delivery Rohini",
    "Vape Store Pitampura",
    "Vape Delivery Pitampura",
    "Vape Store Model Town Delhi",
    "Vape Store Civil Lines Delhi",

    // 3. Delhi Capital Localities
    "Vape Store Mayur Vihar",
    "Vape Delivery East Delhi",
    "Vape Store Aerocity",
    "Vape Store Vasant Kunj",
    "Vape Delivery Vasant Vihar",
    "Vape Delivery Janakpuri",
    "Same Day Vape Delivery Delhi",

    // 4. Popular Devices & Brands
    "Yuoto Thanos Delhi",
    "Yuoto Thanos 5000 Puffs Delhi",
    "Yuoto Thanos Price Delhi",
    "Yuoto Digi 15000 Puffs",
    "Elf Bar Delhi",
    "Elf Bar BC5000 Delhi",
    "Elf Bar Raya D1 13000 Puffs",
    "Elf Bar Raya D2 20000 Puffs",
    "Elf Bar Raya D3 25000 Puffs",
    "Elfbar GH23000 Blue Razz Ice",
    "Elf Bar Ice King 30000 Puffs",
    "Lost Mary Delhi",
    "Lost Mary MT15000 Turbo",
    "IGET Vape Delhi",
    "IGET Moon 5000 Puffs",
    "IGET Bar 3500 Puffs Delhi",
    "Uwell Caliburn Delhi",
    "Uwell Caliburn G3 Pod Kit",
    "Arabisk 40K Puffs Disposable Vape",
    "VGod Nic Salt Delhi",
    "Nasty Juice Nic Salt Delivery",

    // 5. Buyer Intent, Payment & Express Delivery Terms
    "30 Min Vape Delivery Delhi",
    "60 Min Vape Delivery Delhi",
    "Same Day Vape Delivery Delhi NCR",
    "Express Vape Delivery Delhi",
    "Late Night Vape Delivery Delhi",
    "24x7 Vape Delivery Delhi",
    "Midnight Vape Delivery Delhi",
    "Cash on Delivery Vape Delhi",
    "Vape COD Delhi",
    "Order Vape on WhatsApp Delhi",
    "Discreet Packaging Vape Delivery",
    "100% Authentic Sealed Vape Delhi",
  ],
  authors: [{ name: "Vape Shop Delhi" }],
  creator: "Vape Shop Delhi",
  publisher: "Vape Shop Delhi",
  metadataBase: new URL("https://www.vapeshop-delhi.com"),
  alternates: {
    canonical: "/",
  },
  other: {
    "geo.region": "IN-DL",
    "geo.placename": "New Delhi, South Delhi, Central Delhi, West Delhi, North Delhi, East Delhi",
    "geo.position": "28.6139;77.2090",
    "ICBM": "28.6139, 77.2090",
  },
  openGraph: {
    title: "Vape Shop Delhi – Top Online Vape Store in Delhi",
    description:
      "Best Vape Shop in Delhi – Order Online & Get Fast Delivery. Looking for premium disposable vapes, pods and e-liquids in Delhi? 30-60 min express doorstep courier with Cash on Delivery (COD) across Delhi NCR.",
    url: "https://www.vapeshop-delhi.com",
    siteName: "Vape Shop Delhi",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/banners/delhi-vape-banner-1.png",
        width: 1953,
        height: 805,
        alt: "Vape Shop Delhi - Top Online Vape Store in Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vape Shop Delhi – Top Online Vape Store in Delhi",
    description:
      "Best Vape Shop in Delhi – Order Online & Get Fast Delivery. Looking for premium disposable vapes, pods and e-liquids in Delhi? 30-60 min express doorstep courier with Cash on Delivery (COD) across Delhi NCR.",
    images: ["/banners/delhi-vape-banner-1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/vape-shop-delhi-logo.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/vape-shop-delhi-logo.png", type: "image/png" },
    ],
    shortcut: ["/vape-shop-delhi-logo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#ea580c",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["Store", "VapeShop"],
    "@id": "https://www.vapeshop-delhi.com/#store",
    name: "Vape Shop Delhi",
    alternateName: [
      "Vape Shop in Delhi",
      "Vape Store Delhi",
      "Vape Store in Delhi",
      "Vape Delivery Delhi",
      "South Delhi Vape Store",
      "Vape Shop Connaught Place",
      "Vape Shop Delhi NCR",
    ],
    url: "https://www.vapeshop-delhi.com",
    logo: "https://www.vapeshop-delhi.com/vape-shop-delhi-logo.png",
    image: "https://www.vapeshop-delhi.com/banners/delhi-vape-banner-1.png",
    description:
      "Delhi's #1 premier vape shop for 100% authentic disposable vapes, refillable pod kits, coils & imported nic salts. 30-60 min express delivery across South Delhi, Central Delhi, West Delhi, North Delhi, East Delhi, and Aerocity with COD & UPI.",
    telephone: "+91 89509 53934",
    priceRange: "₹₹",
    paymentAccepted: ["Cash on Delivery", "UPI", "Google Pay", "PhonePe", "Paytm"],
    currenciesAccepted: "INR",
    hasMap: "https://maps.google.com/?q=Connaught+Place+New+Delhi",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Connaught Place / South Extension",
      addressLocality: "New Delhi",
      addressRegion: "Delhi",
      postalCode: "110001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.6139,
      longitude: 77.2090,
    },
    openingHoursSpecification: [
      {
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
    ],
    areaServed: [
      { "@type": "City", name: "Delhi" },
      { "@type": "City", name: "New Delhi" },
      { "@type": "AdministrativeArea", name: "South Delhi" },
      { "@type": "AdministrativeArea", name: "Central Delhi" },
      { "@type": "AdministrativeArea", name: "West Delhi" },
      { "@type": "AdministrativeArea", name: "North Delhi" },
      { "@type": "AdministrativeArea", name: "Connaught Place" },
      { "@type": "AdministrativeArea", name: "Saket" },
      { "@type": "AdministrativeArea", name: "Hauz Khas" },
      { "@type": "AdministrativeArea", name: "Greater Kailash" },
      { "@type": "AdministrativeArea", name: "Dwarka" },
      { "@type": "AdministrativeArea", name: "Mayur Vihar" },
      { "@type": "AdministrativeArea", name: "Aerocity" },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.vapeshop-delhi.com/#website",
    url: "https://www.vapeshop-delhi.com",
    name: "Vape Shop Delhi",
    description:
      "Premier Vape Shop in Delhi & Delhi NCR - 30-60 min express delivery with Cash on Delivery & UPI.",
    publisher: {
      "@id": "https://www.vapeshop-delhi.com/#store",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.vapeshop-delhi.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html
      lang="en"
      className={`h-full bg-white ${plusJakartaSans.variable} ${outfit.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Favicon & Web App Icons */}
        <link rel="icon" href="/vape-shop-delhi-logo.png" type="image/png" />
        <link rel="shortcut icon" href="/vape-shop-delhi-logo.png" />
        <link rel="apple-touch-icon" href="/vape-shop-delhi-logo.png" />
      </head>
      <body
        className="min-h-full flex flex-col bg-white text-slate-900 antialiased selection:bg-orange-100 selection:text-orange-700 font-sans"
        suppressHydrationWarning
      >
        {/* Global Structured Data JSON-LD for Google Local SEO & Sitelinks Searchbox */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <CartProvider>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
          <CartDrawer />
          <WhatsAppFloatingButton />
        </CartProvider>
      </body>
    </html>
  );
}
