export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  clayType: string;
  origin: string;
  moq: number;
  price?: number;
  images: string[];
  sizes?: string[];
  colors?: string[];
  available: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface QuoteRequest {
  companyName: string;
  country: string;
  shippingAddress: string;
  phone: string;
  email: string;
  notes: string;
  items: { productId: string; quantity: number }[];
}

export interface User {
  id: string;
  email: string;
  companyName: string;
  token: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export type Category = "tagines" | "bowls" | "vases" | "tiles" | "plates" | "decorative";
