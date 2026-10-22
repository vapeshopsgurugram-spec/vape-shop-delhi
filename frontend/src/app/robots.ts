import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/search", "/api/"],
      },
    ],
    sitemap: "https://www.vapeshop-delhi.com/sitemap.xml",
  };
}

