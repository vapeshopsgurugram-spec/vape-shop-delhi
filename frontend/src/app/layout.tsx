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
    default: "Vape Shop Delhi | 60-90 Mins Express Delivery | Buy Genuine Vapes",
    template: "%s | Vape Shop Delhi",
  },
  description: "Buy 100% genuine disposable vapes, pod kits & nic salts in Delhi. 60–90 mins express doorstep delivery across Delhi NCR. Cash on Delivery (COD) available.",
    keywords: [
    "Vape Shop Delhi",
    "Vape Shop in Delhi",
    "Best Vape Shop Delhi",
    "Buy Vape Online Delhi",
    "Vape Delivery Delhi",
    "Disposable Vape Delhi",
    "Vape Price in Delhi",
    "Vape Store Delhi",
    "Pod Systems Delhi",
    "Nicotine Salts Delhi",
    "Vape Shop Near Me Delhi",
    "Same Day Vape Delivery Delhi NCR",
  ],
  authors: [{ name: "Vape Shop Delhi" }],
  creator: "Vape Shop Delhi",
  publisher: "Vape Shop Delhi",
  metadataBase: new URL("https://www.vapeshop-delhi.com"),
  other: {
    "geo.region": "IN-DL",
    "geo.placename": "New Delhi, South Delhi, Central Delhi, West Delhi, North Delhi, East Delhi",
    "geo.position": "28.6139;77.2090",
    "ICBM": "28.6139, 77.2090",
  },
  openGraph: {
    title: "Vape Shop Delhi | 60-90 Mins Express Delivery | Buy Genuine Vapes",
    description:
      "Buy 100% genuine disposable vapes, pod kits & nic salts in Delhi. 60–90 mins express doorstep delivery across Delhi NCR. Cash on Delivery (COD) available.",
    url: "https://www.vapeshop-delhi.com",
    siteName: "Vape Shop Delhi",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/banners/delhi-vape-banner-1.png",
        width: 1953,
        height: 805,
        alt: "Best Vape Shop Delhi – 100% Authentic, Original Vapes Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vape Shop Delhi | 60-90 Mins Express Delivery | Buy Genuine Vapes",
    description:
      "Buy 100% genuine disposable vapes, pod kits & nic salts in Delhi. 60–90 mins express doorstep delivery across Delhi NCR. Cash on Delivery (COD) available.",
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
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
    "@type": ["Store", "LocalBusiness"],
    "@id": "https://www.vapeshop-delhi.com/#store",
    name: "Vape Shop Delhi",
        alternateName: [
      "Vape Shop Delhi",
      "Vape Store Delhi",
      "Vape Delivery Delhi",
    ],
    url: "https://www.vapeshop-delhi.com",
    logo: "https://www.vapeshop-delhi.com/vape-shop-delhi-logo.png",
    image: "https://www.vapeshop-delhi.com/banners/delhi-vape-banner-1.png",
    description:
      "Delhi's #1 premier vape shop for 100% authentic disposable vapes, refillable pod kits, coils & imported nic salts. 30-60 min express delivery across South Delhi, Central Delhi, West Delhi, North Delhi, East Delhi, and Aerocity with COD & UPI.",
    telephone: "+91 88169 64412",
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
      { "@type": "City", name: "Noida" },
      { "@type": "City", name: "Greater Noida" },
      { "@type": "City", name: "Gurgaon" },
      { "@type": "City", name: "Ghaziabad" },
      { "@type": "AdministrativeArea", name: "Delhi NCR" },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.vapeshop-delhi.com/#website",
    url: "https://www.vapeshop-delhi.com",
    name: "Vape Shop Delhi",
    alternateName: ["Vape Shop Delhi Store", "VapeShop Delhi", "VapeShopDelhi"],
    description:
      "Premier Vape Shop in Delhi & Delhi NCR - 30-60 min express delivery with Cash on Delivery & UPI.",
    publisher: {
      "@id": "https://www.vapeshop-delhi.com/#store",
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
        {/* Google Analytics 4 — tracks user behaviour for Google ranking signals */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', { send_page_view: true });
            `,
          }}
        />
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
