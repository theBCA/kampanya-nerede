import { Header } from "@/components/Header";

const buildSteps = [
  ["1", "Veritabanı şeması", "products, offers, price_observations, verdicts, alerts, votes."],
  ["2", "Seed katalog", "İlk 100 ürün, sonra 500 cilt bakımı ürünü."],
  ["3", "İlk kaynak adaptörü", "Fiyat, stok ve kaynak sağlığı gözlemi."],
  ["4", "Hüküm motoru", "Onaylı dip, gerçek indirim, bekle, şüpheli, yetersiz veri."],
  ["5", "Public web", "SSR ana sayfa, kategori, ürün detayı ve link checker."],
  ["6", "Alert sistemi", "Web push, Telegram, kayıtlı arama ve frekans limiti."]
];

export default function BlueprintPage() {
  return (
    <div className="shell">
      <Header />
      <main className="page">
        <section className="hero">
          <div>
            <p className="eyebrow">Teknik blueprint</p>
            <h1>Önce güvenilir hüküm, sonra kategori büyümesi.</h1>
            <p className="lead">
              Bu sayfa extended MVP dokümanının uygulama içi özeti. Tam metin repo içinde
              `docs/product/mvp-extended.md` dosyasında duruyor.
            </p>
          </div>
          <aside className="heroPanel">
            <ul className="list">
              <li>Mobil app MVP dışında.</li>
              <li>Tarayıcı eklentisi MVP dışında.</li>
              <li>Forum ve yorum sistemi MVP dışında.</li>
              <li>Admin ve veri kalitesi MVP içinde.</li>
            </ul>
          </aside>
        </section>

        <section className="section">
          <h2>Build sırası</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Sıra</th>
                <th>Modül</th>
                <th>Çıktı</th>
              </tr>
            </thead>
            <tbody>
              {buildSteps.map(([step, name, output]) => (
                <tr key={step}>
                  <td>{step}</td>
                  <td>{name}</td>
                  <td>{output}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="section">
          <h2>Kapı kriterleri</h2>
          <div className="panelGrid">
            <div className="panel">
              <h3>Veri kalitesi</h3>
              <p className="muted">500 ürün, beklenen tazelikte gözlem, yüksek eşleşme güveni.</p>
            </div>
            <div className="panel">
              <h3>Kullanıcı değeri</h3>
              <p className="muted">100 beta kullanıcı, kullanıcı başı 3 takip, dördüncü hafta %30 dönüş.</p>
            </div>
            <div className="panel">
              <h3>Ayrışma</h3>
              <p className="muted">Kullanıcılar neden Akakçe/Cimri değil Fiyatı Ne kullandığını anlatabiliyor.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
