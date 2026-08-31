import { Header } from "@/components/Header";

export default function CheckPage() {
  return (
    <div className="shell">
      <Header />
      <main className="page">
        <section className="hero">
          <div>
            <p className="eyebrow">Link kontrol</p>
            <h1>Ürün linkini yapıştır</h1>
            <p className="lead">
              MVP’de bu ekran önce desteklenen satıcıyı tanıyacak, sonra ürünü katalogla eşleştirip
              yeterli veri varsa hüküm dönecek. Şimdilik teknik akışın yerini sabitliyoruz.
            </p>
          </div>
          <aside className="heroPanel">
            <div className="toolbar" style={{ gridTemplateColumns: "1fr" }}>
              <input className="searchBox" placeholder="Trendyol, Hepsiburada, Gratis veya Watsons linki" />
              <button className="button" type="button">Kontrol et</button>
            </div>
          </aside>
        </section>

        <section className="section">
          <h2>Bu ekranın döneceği sonuçlar</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Durum</th>
                <th>Kullanıcıya cevap</th>
                <th>Teknik not</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bilinen ürün</td>
                <td>Fiyat geçmişi, hüküm, takip önerisi.</td>
                <td>URL merchant offer ile eşleşir.</td>
              </tr>
              <tr>
                <td>Yeni ürün</td>
                <td>Yetersiz veri, ama takibe alınabilir.</td>
                <td>İlk gözlem kaydı oluşturulur.</td>
              </tr>
              <tr>
                <td>Desteklenmeyen satıcı</td>
                <td>Şimdilik desteklenmiyor.</td>
                <td>Kaynak talebi olarak loglanır.</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}
