import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { calculateVerdict } from "@/lib/price";

export default function HomePage() {
  const verdicts = products.map((product) => calculateVerdict(product));
  const buyNowCount = verdicts.filter((verdict) => verdict.action === "Alınır").length;
  const suspiciousCount = verdicts.filter((verdict) => verdict.verdict === "suspicious").length;

  return (
    <div className="shell">
      <Header />
      <main className="page">
        <section className="hero">
          <div>
            <p className="eyebrow">MVP teknik temel</p>
            <h1>Bu fiyata alınır mı?</h1>
            <p className="lead">
              Fiyatı Ne, satıcının indirim yüzdesine değil gözlenen fiyat geçmişine bakar.
              İlk sürüm cilt bakımında gerçek düşüşleri, şüpheli indirimleri ve takip edilecek ürünleri gösterir.
            </p>
          </div>
          <aside className="heroPanel" aria-label="MVP özet metrikleri">
            <div className="stats">
              <div className="stat">
                <strong>{products.length}</strong>
                <span>seed ürün</span>
              </div>
              <div className="stat">
                <strong>{buyNowCount}</strong>
                <span>alınır hükmü</span>
              </div>
              <div className="stat">
                <strong>{suspiciousCount}</strong>
                <span>şüpheli sinyal</span>
              </div>
            </div>
          </aside>
        </section>

        <section aria-label="Ürün arama ve filtreler">
          <div className="toolbar">
            <div className="searchBox">Serum, güneş kremi veya ürün linki ara</div>
            <a className="button secondary" href="/check">Link kontrol et</a>
          </div>
          <div className="filters">
            <span className="filterChip active">Gerçek indirim</span>
            <span className="filterChip">90 gün dip</span>
            <span className="filterChip">Stokta</span>
            <span className="filterChip">Serum</span>
            <span className="filterChip">Nemlendirici</span>
            <span className="filterChip">100 ml fiyatı</span>
          </div>
        </section>

        <section className="dealGrid" aria-label="Fiyatı Ne ürün kartları">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>

        <section className="section">
          <h2>İlk teknik hedef</h2>
          <div className="panelGrid">
            <div className="panel">
              <h3>Kanıtlı fiyat</h3>
              <p className="muted">Her hüküm 30/90/180 gün gözleminden ve net fiyat hesabından üretilir.</p>
            </div>
            <div className="panel">
              <h3>Tek aksiyon</h3>
              <p className="muted">Kartta kullanıcıyı yoran sepet/ödeme yok. Detay, takip veya satıcıya yönlendirme var.</p>
            </div>
            <div className="panel">
              <h3>Sonra bağlanır</h3>
              <p className="muted">Bugünkü veri mock. Sonraki adım Postgres ve ilk fiyat gözlem job’ı.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
