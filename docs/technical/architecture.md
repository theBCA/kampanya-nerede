# Fiyatı Ne Technical Architecture

## Architecture Principle

The hard part is not showing product cards. The hard part is producing a verdict that users can trust.

Therefore the MVP architecture should optimize for:

- Timestamped price evidence
- Explainable verdicts
- Source quality checks
- Product matching confidence
- Fast, indexable product pages

## Recommended Stack

- Frontend: Next.js with server-side rendering
- API: Next.js route handlers or a small separate API service
- Database: Postgres
- Jobs: scheduled worker for price and stock observation
- Queue: start with cron/scheduled jobs; add a queue only when source volume needs it
- Notifications: web push and Telegram bot
- Hosting: Vercel or similar for web, managed Postgres for database

## First Data Model

### products

Canonical product.

- id
- brand
- title
- category
- size_ml
- package_count
- normalized_key
- image_url
- created_at

### offers

Merchant-specific listing.

- id
- product_id
- merchant
- url
- merchant_sku
- current_price
- current_net_price
- stock_state
- last_seen_at

### price_observations

Immutable source evidence.

- id
- offer_id
- observed_at
- list_price
- net_price
- shipping_price
- coupon_value
- basket_discount_value
- stock_state
- source_hash
- raw_snapshot_ref

### deal_verdicts

Computed user-facing decision.

- id
- offer_id
- verdict
- reason
- confidence
- price_30d_low
- price_90d_low
- price_180d_low
- computed_at

### alerts

Product and saved-search alerts.

- id
- user_id
- alert_type
- query_json
- threshold_price
- channel
- frequency_cap
- enabled
- created_at

### votes

Lightweight community quality signal.

- id
- user_id
- offer_id
- vote
- created_at

### purchase_watches

14-day post-purchase watch.

- id
- user_id
- offer_url
- offer_id
- bought_at
- paid_price
- expires_at
- status

## Verdict Engine v1

Inputs:

- Current net price
- 30-day low
- 90-day low
- 180-day low when enough data exists
- 10-day reference low
- Stock state
- Source confidence
- Product matching confidence

Rules:

| Verdict | Rule |
|---|---|
| `Onaylı dip fiyat` | Current net price is equal to or within 3% of the 90-day low. |
| `Gerçek indirim` | Current net price is at least 12% below 30-day median and passes 10-day reference sanity check. |
| `Bekle` | Current price is more than 10% above the 90-day low. |
| `Şüpheli indirim` | Price was raised shortly before a visible seller discount and returned near the old level. |
| `Yetersiz veri` | Less than 14 days of observations or low product-match confidence. |

The verdict must always store its reason and input values. Never show a strong claim if the evidence is weak.

## Source Collection v1

Start with 500 skincare products and four sources:

- Trendyol
- Hepsiburada
- Gratis
- Watsons

Collection frequency:

- Hourly for active beta products
- Every 6 hours for inactive catalog products

First implementation can use source adapters and scheduled collection. If scraping is fragile or disallowed for a source, switch that source to manual seed + lower-frequency checks instead of blocking the whole MVP.

## Product Matching v1

Start conservative:

1. Exact merchant SKU or barcode when available
2. Brand normalization
3. Turkish character normalization
4. Size and package count match
5. Title token similarity
6. Manual review queue for uncertain matches

Later:

- Text embeddings
- Image similarity
- Multimodal matching inspired by the Hepsiburada product deduplication reference in the research docs

## SEO And AI Search

Pages must be readable without client-side JavaScript.

Add:

- Product URLs
- Category URLs
- Product JSON-LD
- Offer JSON-LD
- FAQ JSON-LD for verdict explanations
- `llms.txt`
- Visible `last updated` timestamps

## Legal And Trust Constraints

- Do not say `sahte indirim` unless timestamped evidence is stored.
- Prefer `Şüpheli indirim` in the UI until legal language is reviewed.
- Separate user-requested alert notifications from marketing messages.
- Do not collect card details in MVP.
- Do not take affiliate revenue in the first trust-building phase unless the positioning is explicitly changed.
