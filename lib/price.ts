import type { PriceObservation, Product, VerdictResult } from "./types";

const currencyFormatter = new Intl.NumberFormat("tr-TR", {
  maximumFractionDigits: 0
});

export function formatTry(value: number): string {
  return `${currencyFormatter.format(value)} TL`;
}

export function unitPrice(product: Product): number {
  return Math.round((netPrice(product) / product.sizeMl) * 100);
}

export function netPrice(product: Product): number {
  return Math.max(
    0,
    product.price -
      (product.couponValue ?? 0) -
      (product.basketDiscountValue ?? 0) +
      (product.shippingPrice ?? 0)
  );
}

export function lowForDays(observations: PriceObservation[], days: number): number {
  const windowStart = Date.now() - days * 24 * 60 * 60 * 1000;
  const values = observations
    .filter((observation) => new Date(observation.observedAt).getTime() >= windowStart)
    .map((observation) => observation.price);

  return values.length > 0 ? Math.min(...values) : Number.POSITIVE_INFINITY;
}

export function medianForDays(observations: PriceObservation[], days: number): number {
  const windowStart = Date.now() - days * 24 * 60 * 60 * 1000;
  const values = observations
    .filter((observation) => new Date(observation.observedAt).getTime() >= windowStart)
    .map((observation) => observation.price)
    .sort((a, b) => a - b);

  if (values.length === 0) {
    return Number.POSITIVE_INFINITY;
  }

  const midpoint = Math.floor(values.length / 2);
  return values.length % 2 === 0
    ? Math.round((values[midpoint - 1] + values[midpoint]) / 2)
    : values[midpoint];
}

export function calculateVerdict(product: Product): VerdictResult {
  const current = netPrice(product);
  const price30Low = safeLow(lowForDays(product.observations, 30), current);
  const price90Low = safeLow(lowForDays(product.observations, 90), current);
  const price180Low = safeLow(lowForDays(product.observations, 180), current);
  const median30 = safeLow(medianForDays(product.observations, 30), current);
  const hasEnoughData = product.observations.length >= 10 && product.matchConfidence >= 0.86;
  const raisedBeforeDiscount =
    typeof product.listPrice === "number" &&
    product.listPrice >= current * 1.18 &&
    price30Low < current * 0.92;

  if (!hasEnoughData) {
    return buildResult({
      product,
      verdict: "insufficient_data",
      label: "Yetersiz veri",
      tone: "neutral",
      action: "İzle",
      reason: "Bu ürün için henüz güvenilir fiyat geçmişi yok.",
      confidence: Math.round(product.matchConfidence * 100),
      price30Low,
      price90Low,
      price180Low,
      median30,
      netPrice: current
    });
  }

  if (raisedBeforeDiscount) {
    return buildResult({
      product,
      verdict: "suspicious",
      label: "Şüpheli indirim",
      tone: "warn",
      action: "Bekle",
      reason: "Etiket indirimi var ama ürün son 30 günde daha düşük fiyattan görülmüş.",
      confidence: 82,
      price30Low,
      price90Low,
      price180Low,
      median30,
      netPrice: current
    });
  }

  if (current <= price90Low * 1.03) {
    return buildResult({
      product,
      verdict: "approved_low",
      label: "Onaylı dip fiyat",
      tone: "good",
      action: "Alınır",
      reason: "Bugünkü net fiyat son 90 günün dip seviyesinde.",
      confidence: 94,
      price30Low,
      price90Low,
      price180Low,
      median30,
      netPrice: current
    });
  }

  if (current <= median30 * 0.88) {
    return buildResult({
      product,
      verdict: "real_discount",
      label: "Gerçek indirim",
      tone: "good",
      action: "Alınır",
      reason: "Bugünkü net fiyat son 30 gün ortancasının belirgin altında.",
      confidence: 89,
      price30Low,
      price90Low,
      price180Low,
      median30,
      netPrice: current
    });
  }

  if (current >= price90Low * 1.1) {
    return buildResult({
      product,
      verdict: "wait",
      label: "Bekle",
      tone: "bad",
      action: "Bekle",
      reason: "Bu ürün son 90 günde daha ucuzdu.",
      confidence: 86,
      price30Low,
      price90Low,
      price180Low,
      median30,
      netPrice: current
    });
  }

  return buildResult({
    product,
    verdict: "wait",
    label: "Ortalama fiyat",
    tone: "neutral",
    action: "İzle",
    reason: "Bugünkü fiyat geçmişe göre güçlü bir alım sinyali vermiyor.",
    confidence: 78,
    price30Low,
    price90Low,
    price180Low,
    median30,
    netPrice: current
  });
}

type BuildResultInput = Omit<VerdictResult, "summary"> & {
  product: Product;
};

function buildResult({ product, ...result }: BuildResultInput): VerdictResult {
  return {
    ...result,
    summary: `${result.action}. ${result.reason} Stok ${product.lastCheckedMinutes} dk önce doğrulandı.`
  };
}

function safeLow(value: number, fallback: number): number {
  return Number.isFinite(value) ? value : fallback;
}
