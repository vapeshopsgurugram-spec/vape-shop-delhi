export interface Feature {
  text: string;
  icon?: string;
}

export interface Product {
  id: string;
  slug: string;
  aliasSlugs?: string[];
  name: string;
  subtitle?: string;
  storeLocation?: string;
  brand: string;
  category: string;
  price: number;
  originalPrice?: number | null;
  rating: number;
  reviewsCount?: number;
  soldCount?: string;
  badge?: string | null;
  puffs?: number | null;
  features?: Feature[];
  description?: string;
  productDetails?: string[];
  flavors?: string[];
  image: string;
  cardImage?: string;
  themeGradient?: string;
  [key: string]: any;
}
