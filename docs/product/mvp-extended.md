# Fiyatı Ne - Extended MVP Blueprint

## 1. Executive Summary

`Fiyatı Ne` is a Turkey-first real-price verification product. It does not sell products, process payments, collect addresses, or manage shipping. It helps shoppers decide whether a product is worth buying now, then sends them to the merchant with one click.

The MVP should prove one narrow thesis:

> Turkish shoppers will repeatedly use an independent product if it tells them whether a visible discount is actually real.

The first wedge is skincare because repeat purchase behavior, price sensitivity, brand loyalty, and campaign noise are all strong in that category. The first user does not want the cheapest unknown product; she wants to know when the product she already trusts is genuinely at a good price.

## 2. Positioning

### What Fiyatı Ne is

- A real-price checker
- A discount verification layer
- A saved-search and price-alert product
- A trust product for repeated shopping
- A future data company with a consumer interface

### What Fiyatı Ne is not

- A marketplace
- A checkout product
- A coupon directory
- A generic price comparison engine
- A campaign list
- A forum

### Core sentence

`Fiyatı Ne` answers:

> Bu fiyata alınır mı?

The product should not lead with discount percentage. It should lead with a verdict:

- `Alınır`
- `Bekle`
- `Şüpheli`
- `Yetersiz veri`

## 3. Why The Old "Campaign" Frame Is Too Weak

The research context shows that `kampanya` is already crowded:

- `kampanyanerede.com` exists and focuses on brand/payment campaigns.
- Kampania and Kartsever already aggregate bank and card campaigns.
- DonanımHaber owns community deal behavior for many Turkish users.
- Akakçe and Cimri own broad price comparison.
- Yaniyo, Ne İndirimde, PiyasApp, and indirimRadar already make price tracking legible.

The stronger position is not "we found another campaign." It is:

> We measured the price history and the discount is or is not real.

That position gives the product a reason to exist even when the same deal is visible elsewhere.

## 4. Market Examples And Product Lessons

| Product | User expectation it created | What to copy | What to avoid |
|---|---|---|---|
| Akakçe | Users understand comparing sellers and viewing price history. | Familiar product pages, seller comparison, historical context. | Becoming a generic catalog without a clear verdict. |
| Cimri | Users search for the cheapest source before buying. | Fast comparison and broad merchant language. | Competing on catalog scale too early. |
| Yaniyo | Users understand target-price alerts and live deal feeds. | Simple cards, price-drop alerts, low-friction discovery. | Single-merchant dependency and affiliate conflict. |
| PiyasApp | Users will pay for price tracking and alarms. | Link paste, target price, daily summary. | Making the user know the exact product before value appears. |
| Ne İndirimde | 30/90 day history and Pro tiers are understandable. | Price history as a premium path later. | Building the same generic multi-marketplace tracker. |
| DonanımHaber Sıcak Fırsatlar | Hot/cold social validation works. | Lightweight good/bad price voting. | Starting a forum before there is a community. |
| Kampania / Kartsever | Card campaigns are useful but separate from products. | Optional campaign enrichment. | Making card setup a required onboarding step. |
| mydealz / Slickdeals | Community trust can become a moat. | Trust and repeatable deal formats. | Assuming community appears without years of work. |
| Honey | Checkout timing is powerful. | Later browser extension at the decision moment. | Opaque affiliate behavior or automatic link changes. |

## 5. Initial User

The first user should be defined by behavior, not only demographics.

She:

- Buys the same skincare or personal-care products repeatedly.
- Is price-sensitive but does not want to switch to random unknown brands.
- Already checks Trendyol, Hepsiburada, Gratis, Watsons, Instagram, TikTok, or WhatsApp groups before buying.
- Is annoyed by fake discount percentages and basket surprises.
- Will come back if the product remembers what she cares about.

Practical first segment:

- Women, roughly 25-40
- Skincare routine users
- Monthly beauty/personal-care spend around 500-2,000 TL
- Comfortable with Telegram/WhatsApp/Instagram/TikTok
- Brand-loyal but deal-aware

## 6. MVP Category Strategy

### Start

Only skincare.

Initial subcategories:

- Serum
- Moisturizer
- Sunscreen
- Cleanser
- Toner
- Mask

Initial source set:

- Trendyol
- Hepsiburada
- Gratis
- Watsons

### Add later

After the verdict engine works:

- Hair care
- Makeup
- Baby and child
- Home cleaning
- Supplements and pharmacy
- Technology

Technology should not be first. It is crowded, male-heavy, and already served by deal communities. It can come after the engine proves trust.

## 7. Product Surface

### Public web

The MVP should be a mobile-first website with server-rendered pages:

- Home feed
- Category pages
- Product detail pages
- Link-check page
- Saved alerts page
- Weekly real-drop lists
- Suspicious discount report page

### No mobile app at MVP

A mobile app is not needed until retention is proven. Web push and Telegram are enough for the first closed beta.

### No browser extension at MVP

The extension is valuable but should come after:

- Product matching works
- Source coverage is stable
- Verdicts are trusted
- Users ask for in-merchant-page assistance

## 8. MVP Screens

### 8.1 Home Feed

Purpose: show the best verified opportunities right now.

Required elements:

- Search/link paste input
- Six visible filters maximum
- Active filter chips
- Finite product list, not infinite scroll
- Product cards with one primary CTA
- `Bu aramayı takip et` when filters are applied

Visible filters:

- Gerçek indirim
- 90 gün dip
- Stokta
- Marka
- Kategori
- Fiyat aralığı

Advanced filters in drawer:

- Unit price range
- Seller
- Skin concern
- Active ingredient
- Excluded ingredient
- Package count
- Shipping/free delivery threshold
- Last verified time

### 8.2 Product Card

Required card fields:

- Image
- Brand
- Product name, max two lines
- Merchant
- Stock state and last checked time
- Current net price
- Unit price
- Verdict badge
- Today / 30-day low / 90-day low / 180-day low strip
- AI summary
- `Fırsata git`
- Follow icon
- Good/bad price vote

Forbidden in the card:

- Giant seller discount percentage
- Fake countdown
- "Only 2 left" unless source evidence exists
- Auto-playing video
- Multiple competing CTAs

### 8.3 Product Detail

Required sections:

- Verdict explanation
- Price history chart
- Merchant comparison
- Unit price comparison
- Stock history
- Similar products
- Alert setup
- Evidence timestamps

The detail page must answer why the verdict exists. If it cannot explain, the engine should not show a strong verdict.

### 8.4 Link Checker

User pastes a product URL.

Possible results:

- Known product, full verdict
- Known merchant offer, partial verdict
- New product, `Yetersiz veri`
- Unsupported merchant
- Out of stock

Important behavior:

- If the product is new, still let the user follow it.
- Do not pretend to know history that has not been collected.
- Show when the first reliable verdict can be expected.

### 8.5 Alert Builder

Alert types:

- Product alert
- Brand alert
- Category alert
- Saved filter alert
- Budget threshold alert
- Post-purchase 14-day watch

The system should recommend target prices:

- `Son 90 gün dip fiyatı 349 TL. Alarmı 359 TL'ye kuralım.`
- `Bu ürün sık düşmüyor. Sadece 180 gün dipte haber verelim.`
- `Henüz veri az. İlk 14 gün sadece izleyelim.`

### 8.6 Telegram Bot

MVP commands:

- `/start`
- `/takipler`
- `/ara serum 400`
- `/link <url>`
- `/sessize_al`

Telegram alert format:

```text
Fiyatı Ne: Alınır ✅
Garnier C Vitamini Serum 30 ml
Bugün: 329 TL
90 gün dip: 329 TL
Stok: 4 dk önce doğrulandı
Neden: Son 90 günün en düşük fiyatında.
Fırsata git: <link>
```

## 9. Verdict Engine

### Inputs

- Current observed list price
- Current calculated net price
- Merchant visible old price when available
- Coupon/basket discount
- Shipping threshold
- 10-day low
- 30-day low
- 90-day low
- 180-day low
- 30-day median
- Stock state
- Last successful observation time
- Product match confidence
- Source confidence

### Verdicts

| Verdict | Meaning | Minimum evidence |
|---|---|---|
| `Onaylı dip fiyat` | This is at or near the observed 90-day low. | 30+ observations and high match confidence. |
| `Gerçek indirim` | The price genuinely dropped versus recent history. | 14+ days of observations and current price below rolling baseline. |
| `Bekle` | The current price is not attractive historically. | 30+ days of observations. |
| `Şüpheli indirim` | Seller discount display may be misleading. | Observed raise-before-discount pattern. |
| `Yetersiz veri` | The product is tracked but not enough evidence exists. | Anything below the confidence threshold. |

### Suggested v1 thresholds

- Onaylı dip fiyat: current net price <= 90-day low * 1.03
- Gerçek indirim: current net price <= 30-day median * 0.88
- Bekle: current net price >= 90-day low * 1.10
- Şüpheli indirim: visible seller discount exists and price was raised by 10%+ within the prior 10 days before dropping
- Yetersiz veri: fewer than 14 days or fewer than 10 clean observations

Thresholds must be configurable, not hard-coded.

### Evidence requirement

Every verdict stores:

- Input prices
- Time window
- Rule version
- Computed timestamp
- Source observation IDs
- Explanation string

This matters because trust is the product. If a brand challenges a claim, the team must be able to reconstruct why the verdict was shown.

## 10. Net Price Logic

The MVP should not collect payment or checkout data, but it should estimate the user’s likely merchant-side price.

Net price formula:

```text
net_price = list_price - coupon - basket_discount + shipping_price
```

MVP includes:

- Public coupons
- Basket discounts
- Free-shipping thresholds
- Merchant shipping state when visible

MVP excludes by default:

- Personalized card campaigns
- Installments
- Bank cashback

Reason: card setup creates onboarding friction. Keep the engine capable of storing it later, but do not make it part of first-run UX.

## 11. Data Collection

### Initial catalog

500 skincare products:

- 150 serum
- 120 moisturizer
- 100 sunscreen
- 80 cleanser
- 50 toner/mask/other

### Collection cadence

| Product type | Cadence |
|---|---|
| User-followed product | Hourly |
| Active deal candidate | Hourly |
| Normal catalog product | Every 6 hours |
| Low-interest product | Daily |

### Source adapter contract

Each adapter should return:

- Merchant
- URL
- Merchant SKU if available
- Title
- Brand if available
- Image
- Current price
- Old price if visible
- Coupon/basket signals
- Stock state
- Shipping/free delivery signal
- Raw snapshot hash
- Observed timestamp

### Manual fallback

If a source blocks automation or changes markup, the MVP should not collapse. Use:

- Manual seed URLs
- Lower-frequency checks
- Admin correction
- Source health status

## 12. Product Matching

Incorrect matching can destroy trust. MVP matching should be conservative.

v1 process:

1. Match barcode or merchant SKU where available.
2. Normalize brand names.
3. Normalize Turkish characters and casing.
4. Parse size, unit, package count.
5. Compare title tokens.
6. Put uncertain matches into admin review.

Do not merge products when confidence is weak. Show separate products or `Yetersiz veri`.

Later matching:

- Text embeddings
- Image similarity
- Multimodal model
- Manual feedback loop

## 13. Community Layer

MVP community must be deliberately small.

Include:

- `İyi fiyat`
- `Kötü fiyat`
- `Aldım`

Exclude:

- Comments
- Threads
- User profiles
- Forums
- Public leaderboards

Reason: mydealz and Slickdeals prove community can be powerful, but they also prove it is operationally heavy. A two-person MVP should collect signal, not run a forum.

## 14. AI Summary

The AI summary is not a chatbot in v1. It is a deterministic explanation layer generated from structured data.

Example:

```text
Alınır. Bu ürün son 90 günün en düşük fiyatında, 100 ml fiyatı benzer serumların altında ve stok 3 dakika önce doğrulandı.
```

Rules:

- 1-2 sentences only
- No unsupported claims
- No medical/skin advice beyond structured product metadata
- If evidence is weak, say so
- Always align with the verdict engine

The first version can be template-based. LLM generation can come later.

## 15. Acquisition Plan

### 0-100 users

No paid ads.

Channels:

- Existing skincare WhatsApp groups
- Telegram deal groups
- Instagram skincare content comments
- TikTok skincare content comments
- Ekşi product discussions
- Friends and direct outreach

Format:

- Share one useful price fact
- Do not spam links
- Invite people to follow a product or category

### 100-2,000 users

Content loops:

- `Bu hafta gerçekten düşen 5 ürün`
- `Şüpheli indirim listesi`
- `Muadil karşılaştırması`
- `11.11 beklenmeli mi?`
- `100 ml fiyatına göre en iyi güneş kremleri`

### 2,000+ users

Only after retention proof:

- Small TikTok tests
- Instagram retargeting
- Creator data partnerships
- Weekly newsletter

## 16. Monetization

Do not start with affiliate revenue if the trust position is central.

Potential order:

1. Free consumer MVP
2. Premium alerts and extended history
3. Brand price intelligence
4. Retailer compliance monitoring
5. Data/API licensing

Premium candidates:

- Unlimited alerts
- 365-day price history
- Saved-search alerts
- Early alerts
- Routine shelf
- Advanced unit-price filters

Do not introduce sponsored ranking until the independence claim is revisited.

## 17. Legal And Trust

### Notification consent

Separate:

- User-requested service alerts
- Marketing campaign messages

Do not treat them as the same message type.

### Suspicious discount language

Prefer:

- `Şüpheli indirim`
- `Fiyat geçmişiyle uyumsuz`
- `Daha önce daha ucuzdu`

Avoid without legal review:

- Direct fraud accusations
- Seller blacklists without evidence review
- Unqualified `sahte indirim` claims

### Data storage

Keep raw observation evidence:

- Timestamp
- Source URL
- Raw hash
- Price values
- Stock values
- Rule version

## 18. Analytics

Events:

- product_card_viewed
- verdict_expanded
- merchant_clicked
- product_followed
- saved_search_created
- alert_sent
- alert_opened
- telegram_connected
- vote_submitted
- purchase_watch_created
- link_checked
- source_error_seen

Core metrics:

- Return rate by week
- Alerts per user
- Merchant click-through rate
- Follow rate per product view
- False positive verdict rate
- Source freshness
- Product match review rate
- Zero-result search rate

## 19. Admin Requirements

The MVP needs an admin surface earlier than a mobile app.

Admin views:

- Source health
- Latest observations
- Failed adapter runs
- Product matching queue
- Suspicious price jumps
- Verdict review
- User reports
- Manual campaign rule entry

Without this, the team will debug trust issues from the database directly and move too slowly.

## 20. Build Plan

### Week 1 - Foundation

- Next.js app
- Postgres schema
- Seed catalog format
- First 100 products
- Merchant URL inventory
- Static product card UI

### Week 2 - Observations

- Trendyol adapter
- Hepsiburada adapter
- Price observation table
- Source health logs
- Admin raw observation view

### Week 3 - Verdicts

- 30/90-day low computation
- Unit price parsing
- First verdict engine
- Product detail page
- Manual review queue

### Week 4 - Public MVP

- Home feed
- Category pages
- Link checker
- SEO/JSON-LD
- `llms.txt`
- Closed beta access

### Week 5 - Alerts

- User auth
- Product follow
- Saved filter follow
- Web push
- Telegram bot
- Frequency caps

### Week 6 - Trust Loops

- Good/bad price votes
- 14-day purchase watch
- Suspicious discount report
- Weekly real-drop content page
- First 100 users

### Weeks 7-12 - Harden

- Add remaining products to 500
- Add Gratis/Watsons if not already stable
- Improve product matching
- Add source freshness badges
- Add admin override notes
- Run retention cohort review
- Decide whether to expand category

## 21. Go / No-Go Gates

### Gate 1: Data quality

Pass if:

- 500 products tracked
- 90%+ active offers refreshed within expected cadence
- Product match confidence high for top products
- Raw evidence is reconstructable

### Gate 2: User value

Pass if:

- 100 beta users
- Average 3 follows or saved filters per user
- Week-4 return rate above 30%
- Alert open rate above 20%

### Gate 3: Differentiation

Pass if:

- Users can explain why this is not Akakçe/Cimri
- Users trust verdicts more than seller discounts
- At least 15% of catalog produces meaningful price signals

If any gate fails, do not add more categories. Fix the failing layer.

## 22. Biggest Risks

| Risk | Why it matters | Mitigation |
|---|---|---|
| Weak data freshness | Stale price cards destroy trust. | Source freshness badges and adapter health checks. |
| Wrong product matching | One wrong verdict can hurt credibility. | Conservative matching and manual review queue. |
| Too broad category scope | Catalog work explodes before value is proven. | Skincare only until gates pass. |
| Generic deal-site positioning | Users already have alternatives. | Lead with verdict and evidence, not deal volume. |
| Notification fatigue | Users uninstall or mute. | Strict frequency caps and user-controlled alerts. |
| Legal pushback | Suspicious discount claims can be challenged. | Evidence store and careful language. |
| No monetization runway | Affiliate removal creates early revenue gap. | Know runway, then test premium/B2B only after trust proof. |

## 23. First Version Acceptance Checklist

- Home feed loads on mobile.
- Product cards show verdict, price strip, unit price, stock freshness, and one CTA.
- Product detail explains the verdict with evidence.
- Link checker handles known, unknown, and unsupported URLs.
- User can follow a product.
- User can create one saved-search alert.
- Telegram alert can be sent for a test product.
- Admin can see latest price observations.
- Admin can mark a match as uncertain.
- `Şüpheli indirim` never appears without stored evidence.
- Raw context files are not part of the committed project source.

## 24. Recommended Next Step

Build the actual web app from this order:

1. Database schema
2. Seed catalog
3. First source adapter
4. Price observation job
5. Verdict engine
6. Product card UI
7. Product detail page
8. Follow/alert system

Do not start with authentication, mobile app, or a polished landing page. The product lives or dies on observed prices and credible verdicts.
