# Fiyatı Ne

README-first project repo for a real-price and real-discount intelligence product focused on Turkey first, with room to expand into Europe and the US.

## Product idea

Fiyatı Ne collects public commerce signals from e-commerce platforms, brands, marketplaces, coupons, shipping thresholds, stock state, and historical prices. It turns those signals into a user-facing discovery and alert product for real discounts.

The core differentiation is not "listing campaigns." The product should calculate the real net price for a specific user by combining:

- Current listed price
- 30-90 day price history
- Coupons and basket discounts
- Card cashback and installment campaigns
- Shipping thresholds
- Stock status
- Community trust signals

Products with verified price drops can be labeled `Gercek Indirim`. Products or sellers with suspicious price manipulation can be flagged with evidence from price history.

## Initial audience

Start with high-frequency categories where campaign discovery is fragmented and trust matters:

- Makeup
- Self-care and personal care
- Beauty devices
- Daily consumer products
- Selected technology categories after the trust engine is proven

## MVP scope

1. Collect product, price, stock, campaign, and coupon data from selected sources.
2. Store historical prices with enough granularity to compare 30, 60, and 90 day lows.
3. Match identical products across sellers.
4. Show only meaningful discounts with a clear reason.
5. Let users follow categories, brands, budgets, and specific alerts.
6. Send alerts through web push and Telegram.
7. Add community voting: hot/cold or good price/bad price.

## Technical direction

- Backend API for products, campaigns, alerts, users, and votes.
- Scheduled crawlers or partner feeds for source ingestion.
- Price-history database optimized for time-series queries.
- Product matching using text embeddings first, image matching later.
- Notification service for Telegram and browser push.
- Admin tools for source quality, seller flags, and moderation.

## Current MVP files

- `fiyati-ne-mvp.html` - single-file MVP plan and product prototype
- `docs/mvp-v1.md` - concise MVP scope
- `docs/product/mvp-extended.md` - extended product, market, UX, data, and rollout blueprint
- `docs/name-ideas.md` - naming shortlist
- `docs/product/mvp-spec.md` - fuller MVP product spec
- `docs/technical/architecture.md` - initial technical architecture
- `docs/market/real-website-examples.md` - market examples from the research context

The repo also keeps the original `kampanya-nerede` research files as source material.
