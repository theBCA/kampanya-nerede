import Link from "next/link";
import type { Product } from "@/lib/types";
import { calculateVerdict, formatTry, unitPrice } from "@/lib/price";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const verdict = calculateVerdict(product);

  return (
    <article className="dealCard">
      <div className="productArt" aria-hidden="true" />
      <div className="dealBody">
        <span className={`badge ${toneClass(verdict.tone)}`}>{verdict.label}</span>
        <h3 className="productTitle">{product.brand} {product.name}</h3>
        <p className="muted">
          {product.merchant} · stok {product.lastCheckedMinutes} dk önce doğrulandı
        </p>
        <div className="priceRow">
          <strong className="price">{formatTry(verdict.netPrice)}</strong>
          <span className="unit">{formatTry(unitPrice(product))} / 100 ml</span>
        </div>
      </div>
      <PriceStrip
        today={verdict.netPrice}
        low30={verdict.price30Low}
        low90={verdict.price90Low}
        low180={verdict.price180Low}
      />
      <p className="summary">{verdict.summary}</p>
      <div className="cardActions">
        <Link className="button" href={`/products/${product.slug}`}>Detayı gör</Link>
        <button className="iconButton" type="button" aria-label={`${product.name} ürününü takip et`}>
          +
        </button>
        <button className="iconButton" type="button" aria-label={`${product.name} için iyi fiyat oyu ver`}>
          ↑
        </button>
      </div>
    </article>
  );
}

export function PriceStrip({
  today,
  low30,
  low90,
  low180
}: {
  today: number;
  low30: number;
  low90: number;
  low180: number;
}) {
  return (
    <div className="priceStrip">
      <Metric label="Bugün" value={today} />
      <Metric label="30 gün dip" value={low30} />
      <Metric label="90 gün dip" value={low90} />
      <Metric label="180 gün dip" value={low180} />
    </div>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div className="priceMetric">
      <span>{label}</span>
      <strong>{formatTry(value)}</strong>
    </div>
  );
}

function toneClass(tone: string) {
  if (tone === "warn") return "warn";
  if (tone === "bad") return "bad";
  if (tone === "neutral") return "neutral";
  return "";
}
