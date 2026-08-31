import type { Product } from "@/lib/types";

function daysAgo(days: number, price: number) {
  return {
    observedAt: new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString(),
    price
  };
}

export const products: Product[] = [
  {
    id: "p1",
    slug: "garnier-c-vitamini-serum-30ml",
    brand: "Garnier",
    name: "C Vitamini Aydınlatıcı Serum 30 ml",
    category: "Serum",
    sizeMl: 30,
    merchant: "Hepsiburada",
    price: 329,
    listPrice: 459,
    couponValue: 0,
    stockState: "in_stock",
    lastCheckedMinutes: 3,
    matchConfidence: 0.96,
    followedBy: 128,
    observations: [
      daysAgo(175, 389),
      daysAgo(140, 369),
      daysAgo(120, 349),
      daysAgo(91, 359),
      daysAgo(70, 379),
      daysAgo(45, 369),
      daysAgo(22, 349),
      daysAgo(10, 339),
      daysAgo(3, 329),
      daysAgo(0, 329)
    ]
  },
  {
    id: "p2",
    slug: "bioderma-sensibio-h2o-500ml",
    brand: "Bioderma",
    name: "Sensibio H2O Micellar Temizleme Suyu 500 ml",
    category: "Temizleyici",
    sizeMl: 500,
    merchant: "Watsons",
    price: 1049,
    listPrice: 1399,
    basketDiscountValue: 50,
    stockState: "in_stock",
    lastCheckedMinutes: 7,
    matchConfidence: 0.94,
    followedBy: 84,
    observations: [
      daysAgo(160, 899),
      daysAgo(120, 829),
      daysAgo(96, 799),
      daysAgo(70, 949),
      daysAgo(40, 899),
      daysAgo(20, 899),
      daysAgo(8, 1199),
      daysAgo(5, 1099),
      daysAgo(1, 1049),
      daysAgo(0, 1049)
    ]
  },
  {
    id: "p3",
    slug: "cerave-nemlendirici-losyon-473ml",
    brand: "CeraVe",
    name: "Nemlendirici Losyon Kuru Ciltler 473 ml",
    category: "Nemlendirici",
    sizeMl: 473,
    merchant: "Hepsiburada",
    price: 899,
    stockState: "low_stock",
    lastCheckedMinutes: 2,
    matchConfidence: 0.98,
    followedBy: 211,
    observations: [
      daysAgo(170, 1049),
      daysAgo(150, 999),
      daysAgo(130, 999),
      daysAgo(100, 969),
      daysAgo(80, 949),
      daysAgo(60, 929),
      daysAgo(35, 949),
      daysAgo(18, 929),
      daysAgo(4, 899),
      daysAgo(0, 899)
    ]
  },
  {
    id: "p4",
    slug: "la-roche-posay-effaclar-duo-40ml",
    brand: "La Roche-Posay",
    name: "Effaclar Duo+ M Bakım Kremi 40 ml",
    category: "Nemlendirici",
    sizeMl: 40,
    merchant: "Gratis",
    price: 749,
    stockState: "in_stock",
    lastCheckedMinutes: 11,
    matchConfidence: 0.93,
    followedBy: 67,
    observations: [
      daysAgo(160, 699),
      daysAgo(130, 729),
      daysAgo(100, 749),
      daysAgo(88, 749),
      daysAgo(60, 789),
      daysAgo(35, 799),
      daysAgo(20, 789),
      daysAgo(9, 769),
      daysAgo(2, 749),
      daysAgo(0, 749)
    ]
  },
  {
    id: "p5",
    slug: "the-ordinary-niacinamide-30ml",
    brand: "The Ordinary",
    name: "Niacinamide 10% + Zinc 1% Serum 30 ml",
    category: "Serum",
    sizeMl: 30,
    merchant: "Trendyol",
    price: 389,
    stockState: "in_stock",
    lastCheckedMinutes: 5,
    matchConfidence: 0.91,
    followedBy: 156,
    observations: [
      daysAgo(170, 289),
      daysAgo(125, 329),
      daysAgo(90, 329),
      daysAgo(75, 349),
      daysAgo(55, 369),
      daysAgo(28, 369),
      daysAgo(14, 379),
      daysAgo(7, 389),
      daysAgo(2, 389),
      daysAgo(0, 389)
    ]
  },
  {
    id: "p6",
    slug: "avene-cleanance-jel-200ml",
    brand: "Avène",
    name: "Cleanance Temizleme Jeli 200 ml",
    category: "Temizleyici",
    sizeMl: 200,
    merchant: "Gratis",
    price: 629,
    couponValue: 40,
    stockState: "in_stock",
    lastCheckedMinutes: 16,
    matchConfidence: 0.88,
    followedBy: 44,
    observations: [
      daysAgo(100, 629),
      daysAgo(80, 609),
      daysAgo(61, 589),
      daysAgo(40, 629),
      daysAgo(25, 649),
      daysAgo(16, 629),
      daysAgo(8, 619),
      daysAgo(4, 609),
      daysAgo(1, 629),
      daysAgo(0, 629)
    ]
  }
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
