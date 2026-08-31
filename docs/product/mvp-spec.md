# Fiyatı Ne MVP Spec

## One-line product

`Fiyatı Ne` tells a Turkish shopper whether a product is actually worth buying now, using observed price history rather than seller-provided discount percentages.

## Brand And Verdict Language

- Brand: `Fiyatı Ne`
- Main card verdict: `Alınır mı?`
- Positive verdicts: `Onaylı dip fiyat`, `Gerçek indirim`
- Caution verdicts: `Bekle`, `Şüpheli indirim`, `Yetersiz veri`

This avoids the crowded `kampanya` category and puts the product on the buyer’s side.

## MVP User

Start with people who repeatedly buy the same personal-care products and already watch prices manually.

Initial wedge:

- 25-40 age range
- Mostly women
- Cilt bakımı, güneş kremi, serum, nemlendirici, temizleyici
- Price-sensitive but brand-loyal
- Active in Instagram, TikTok, WhatsApp, Telegram, and shopping communities

## MVP Category And Sources

First category:

- Cilt bakımı

First sources:

- Trendyol
- Hepsiburada
- Gratis
- Watsons

Later sources:

- Amazon Turkey
- Rossmann
- Sephora
- N11
- MediaMarkt only after technology categories are added

## Core User Flows

### 1. Browse real discounts

User opens the site and sees a finite list of verified product cards. Each card shows:

- Product image
- Brand and product name
- Merchant
- Current price
- Unit price such as `TL / 100 ml`
- Stock status and last verification time
- 30-day low
- 90-day low
- 180-day low when available
- Verdict badge
- AI summary
- One primary action: `Fırsata git`

No fake urgency, no giant seller discount percentage, no countdown timer.

### 2. Check a product link

User pastes a Trendyol, Hepsiburada, Gratis, or Watsons product link.

The product returns:

- Matched product if already known
- `Yetersiz veri` if new
- Historical lows if available
- Suggested target price
- `Takibe al` action

### 3. Create a micro alert

User can follow:

- One product
- One brand
- One category
- A saved filter such as `SPF 50, 100 ml üstü, 100 ml fiyatı 300 TL altı`
- A budget rule such as `RTX 4070 laptop 50.000 TL altı`

The system suggests a target price when possible. The user should not need to guess the right threshold.

### 4. Receive an alert

Supported MVP channels:

- Web push
- Telegram bot
- Daily in-app summary

Frequency caps:

- Maximum 1 push per day
- Maximum 3 pushes per week
- Urgent alerts only for 90-day low, 180-day low, or user threshold hit

### 5. Vote on deal quality

User can vote:

- `İyi fiyat`
- `Kötü fiyat`

No open comments in MVP. Comments and forum behavior are deferred because moderation cost is high.

### 6. Track post-purchase price drop

User saves:

- Product link
- Purchase date
- Paid price

For 14 days, the system checks whether the product drops further and notifies the user.

## What Is Out Of Scope

- Checkout
- Payment
- Address collection
- Kargo tracking
- Returns processing
- Full mobile app
- Browser extension
- Open comment/forum system
- Automatic card-program personalization
- Sponsored seller placements

These are intentionally excluded to keep the product a trust and decision layer, not another marketplace.

## MVP Success Metrics

By the end of week 6:

- 500 tracked products
- 4 live source adapters or repeatable collection workflows
- At least 100 beta users
- Average 3 tracked items or saved filters per user
- Week-4 return rate above 30%
- At least 15% of tracked products showing a meaningful price signal
- False-positive verdicts manually reviewed and kept below an agreed threshold

If these are not met, do not add categories. Fix source quality, category choice, verdict logic, or acquisition channel first.
