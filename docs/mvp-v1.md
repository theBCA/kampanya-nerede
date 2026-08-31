# Fiyatı Ne - MVP v1

## Karar

Yeni marka adı olarak `Fiyatı Ne` kullanılacak. `Alınır mı?` ise ürün içi karar cümlesi olacak.

MVP bir e-ticaret sitesi değil; kullanıcıya ürün satmaz, ödeme almaz, adres veya kargo operasyonu yürütmez. İlk ürün bir fiyat doğrulama, alarm ve yönlendirme köprüsüdür.

## İlk vaat

Kullanıcı bir ürün kartına baktığında şu sorunun cevabını alır:

> Bu fiyata alınır mı?

Bu cevap satıcının indirim yüzdesine göre değil, 30-90 günlük fiyat geçmişine, stok doğrulamasına ve net fiyat tahminine göre verilir.

## İlk kapsam

- Kategori: cilt bakımı
- Ürün sayısı: yaklaşık 500
- Kaynaklar: Trendyol, Hepsiburada, Gratis, Watsons
- Kullanıcı hedefi: ilk 100 beta kullanıcı
- Platform: mobil uyumlu web, mobil uygulama yok
- Bildirim: web push ve Telegram

## MVP özellikleri

1. 30-90 günlük fiyat geçmişi
2. `Gerçek indirim`, `Onaylı dip fiyat`, `Bekle`, `Şüpheli indirim`, `Yetersiz veri` hükümleri
3. Ürün, marka, kategori ve bütçe bazlı mikro alarm
4. Stok durumu ve son doğrulama zamanı
5. İyi fiyat / kötü fiyat topluluk oyu
6. 1-2 cümlelik AI karar özeti
7. 14 gün fiyat koruma takibi
8. Tek tıkla satıcıya yönlendirme

## Teknik omurga

- Next.js + SSR
- Postgres
- Job worker ile fiyat/stok gözlemi
- Ürün, teklif, fiyat gözlemi, hüküm, alarm, oy ve satın alma takibi tabloları
- Product, Offer, FAQ JSON-LD
- `llms.txt` ve bot erişim kontrolü

## Daha detaylı dokümanlar

- `docs/product/mvp-extended.md`
- `docs/product/mvp-spec.md`
- `docs/technical/architecture.md`
- `docs/market/real-website-examples.md`

## İlk 6 hafta

| Hafta | Çıktı |
|---|---|
| 1 | Repo, Next.js iskeleti, Postgres şeması, 100 ürün seed katalog |
| 2 | Saatlik fiyat ve stok gözlemleri |
| 3 | Ürün eşleştirme, birim fiyat, 30/90 gün dip hesapları |
| 4 | SSR ana sayfa, ürün kartı, ürün detayı |
| 5 | Alarm, web push, Telegram bot, frekans limiti |
| 6 | Oylama, fiyat koruma, kapalı beta ve ölçüm paneli |

## Kapı kriteri

6. hafta sonunda:

- 500 üründe düzenli gözlem
- En az 100 beta kullanıcı
- Kullanıcı başına ortalama 3 takip
- 4. haftada en az %30 geri dönüş
- Ürünlerin en az %15'inde anlamlı fiyat sinyali

Bu kriterler sağlanmazsa kapsam büyütülmez; kategori, kaynak veya hüküm motoru düzeltilir.
