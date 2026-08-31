import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { PriceChart } from "@/components/PriceChart";
import { PriceStrip } from "@/components/ProductCard";
import { getProductBySlug, products } from "@/data/products";
import { calculateVerdict, formatTry, unitPrice } from "@/lib/price";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug
  }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Ürün bulunamadı"
    };
  }

  return {
    title: `${product.brand} ${product.name} | Fiyatı Ne`,
    description: `${product.brand} ${product.name} için fiyat geçmişi ve alınır mı hükmü.`
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const verdict = calculateVerdict(product);

  return (
    <div className="shell">
      <Header />
      <main className="page">
        <section className="detailGrid">
          <div className="detailBlock">
            <span className={`badge ${verdict.tone === "warn" ? "warn" : verdict.tone === "bad" ? "bad" : ""}`}>
              {verdict.label}
            </span>
            <h1>{product.brand} {product.name}</h1>
            <p className="lead">{verdict.summary}</p>
            <div className="priceRow">
              <strong className="price">{formatTry(verdict.netPrice)}</strong>
              <span className="unit">{formatTry(unitPrice(product))} / 100 ml</span>
            </div>
            <div style={{ marginTop: 16 }}>
              <PriceStrip
                today={verdict.netPrice}
                low30={verdict.price30Low}
                low90={verdict.price90Low}
                low180={verdict.price180Low}
              />
            </div>
          </div>

          <aside className="detailBlock">
            <h2>Satıcı</h2>
            <p><strong>{product.merchant}</strong></p>
            <p className="muted">Stok {product.lastCheckedMinutes} dk önce doğrulandı.</p>
            <button className="button" type="button">Takibe al</button>
            <button className="button secondary" type="button">Fırsata git</button>
          </aside>
        </section>

        <section className="section detailGrid">
          <div className="detailBlock">
            <h2>Fiyat geçmişi</h2>
            <PriceChart observations={product.observations} />
          </div>

          <aside className="detailBlock">
            <h2>Hüküm nedeni</h2>
            <ul className="list">
              <li>{verdict.reason}</li>
              <li>Hüküm güveni: %{verdict.confidence}</li>
              <li>Ürün eşleşme güveni: %{Math.round(product.matchConfidence * 100)}</li>
              <li>Gözlem sayısı: {product.observations.length}</li>
            </ul>
          </aside>
        </section>
      </main>
    </div>
  );
}
