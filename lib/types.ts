export type Verdict = "approved_low" | "real_discount" | "wait" | "suspicious" | "insufficient_data";

export type Merchant = "Trendyol" | "Hepsiburada" | "Gratis" | "Watsons";

export type Product = {
  id: string;
  slug: string;
  brand: string;
  name: string;
  category: string;
  sizeMl: number;
  merchant: Merchant;
  price: number;
  listPrice?: number;
  couponValue?: number;
  basketDiscountValue?: number;
  shippingPrice?: number;
  stockState: "in_stock" | "low_stock" | "out_of_stock";
  lastCheckedMinutes: number;
  observations: PriceObservation[];
  matchConfidence: number;
  followedBy: number;
};

export type PriceObservation = {
  observedAt: string;
  price: number;
};

export type VerdictResult = {
  verdict: Verdict;
  label: string;
  tone: "good" | "warn" | "bad" | "neutral";
  action: "Alınır" | "Bekle" | "İzle";
  reason: string;
  summary: string;
  confidence: number;
  price30Low: number;
  price90Low: number;
  price180Low: number;
  median30: number;
  netPrice: number;
};
