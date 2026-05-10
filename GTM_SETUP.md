# GTM Container Setup Guide — pianoman-eg.com

Container ID: **GTM-ML5KKNX5**  
GA4 Measurement ID: **G-3XM49872J1**

> GA4 is already installed directly in the page (`app/layout.tsx`). It handles basic pageviews automatically.  
> GTM's job is to capture **custom business events** pushed into `window.dataLayer` by the frontend code.

---

## Step 1 — Data Layer Variables

Go to **Variables → New → Data Layer Variable** and create one for each key below.

| Variable name | Data Layer Variable name | Notes |
|---|---|---|
| `DLV - event` | `event` | The event name |
| `DLV - page_path` | `page_path` | Current URL path |
| `DLV - page_section` | `page_section` | Where on the page the action happened |
| `DLV - service_type` | `service_type` | `rental`, `tuning`, `restoration`, or `general` |
| `DLV - cta_label` | `cta_label` | Button text that was clicked |
| `DLV - source` | `source` | Which component triggered the event |
| `DLV - method` | `method` | e.g. `contact_form` |
| `DLV - platform` | `platform` | e.g. `instagram`, `facebook`, `linkedin` |
| `DLV - label` | `label` | General label for nav events |

Also create these **Click Element Attribute** variables (Variables → New → Auto-Event Variable → Element Attribute):

| Variable name | Attribute name |
|---|---|
| `Click Attr - gtm-event` | `data-gtm-event` |
| `Click Attr - gtm-label` | `data-gtm-label` |
| `Click Attr - gtm-source` | `data-gtm-source` |
| `Click Attr - gtm-section` | `data-gtm-section` |

---

## Step 2 — Triggers

Go to **Triggers → New** and create each of the following.

### Custom Event Triggers (for dataLayer pushes from client components)

| Trigger name | Trigger type | Event name condition |
|---|---|---|
| `CE - page_view` | Custom Event | equals `page_view` |
| `CE - click_cta` | Custom Event | equals `click_cta` |
| `CE - click_whatsapp` | Custom Event | equals `click_whatsapp` |
| `CE - click_phone` | Custom Event | equals `click_phone` |
| `CE - click_email` | Custom Event | equals `click_email` |
| `CE - click_social` | Custom Event | equals `click_social` |
| `CE - click_nav` | Custom Event | equals `click_nav` |
| `CE - contact_form_start` | Custom Event | equals `contact_form_start` |
| `CE - generate_lead` | Custom Event | equals `generate_lead` |
| `CE - contact_form_error` | Custom Event | equals `contact_form_error` |

### Click Trigger (for blog server component links with data-gtm-* attributes)

| Trigger name | Trigger type | Condition |
|---|---|---|
| `Click - data-gtm elements` | Click — All Elements | `Click Element` matches CSS selector `[data-gtm-event]` |

---

## Step 3 — Tags

Go to **Tags → New → Google Analytics: GA4 Event** for each row below.  
Set **GA4 Configuration Tag** to `None — use Measurement ID directly` and enter `G-3XM49872J1`.

> **Important:** Do NOT create a GA4 Configuration tag in GTM — GA4 is already initialized directly in the page code. Creating one would double-count pageviews.

### Route change pageviews

| Tag name | GA4 Event name | Trigger | Event Parameters |
|---|---|---|---|
| `GA4 — page_view (SPA)` | `page_view` | `CE - page_view` | `page_path` → `{{DLV - page_path}}`, `page_location` → `{{Page URL}}`, `page_title` → `{{Page Title}}` |

### CTA & lead events

| Tag name | GA4 Event name | Trigger | Event Parameters |
|---|---|---|---|
| `GA4 — click_cta` | `click_cta` | `CE - click_cta` | `page_section` → `{{DLV - page_section}}`, `service_type` → `{{DLV - service_type}}`, `cta_label` → `{{DLV - cta_label}}` |
| `GA4 — generate_lead` | `generate_lead` | `CE - generate_lead` | `method` → `{{DLV - method}}`, `service_type` → `{{DLV - service_type}}`, `page_section` → `{{DLV - page_section}}` |
| `GA4 — contact_form_start` | `contact_form_start` | `CE - contact_form_start` | `page_section` → `{{DLV - page_section}}` |
| `GA4 — contact_form_error` | `contact_form_error` | `CE - contact_form_error` | `page_section` → `{{DLV - page_section}}` |

### Contact channel events

| Tag name | GA4 Event name | Trigger | Event Parameters |
|---|---|---|---|
| `GA4 — click_whatsapp` | `click_whatsapp` | `CE - click_whatsapp` | `source` → `{{DLV - source}}`, `service_type` → `{{DLV - service_type}}` |
| `GA4 — click_phone` | `click_phone` | `CE - click_phone` | `source` → `{{DLV - source}}` |
| `GA4 — click_email` | `click_email` | `CE - click_email` | `source` → `{{DLV - source}}` |
| `GA4 — click_social` | `click_social` | `CE - click_social` | `platform` → `{{DLV - platform}}` |
| `GA4 — click_nav` | `click_nav` | `CE - click_nav` | `label` → `{{DLV - label}}`, `page_section` → `{{DLV - page_section}}` |

### Blog server component links (data-gtm-* attributes)

| Tag name | GA4 Event name | Trigger | Event Parameters |
|---|---|---|---|
| `GA4 — data-gtm clicks` | `{{Click Attr - gtm-event}}` | `Click - data-gtm elements` | `cta_label` → `{{Click Attr - gtm-label}}`, `source` → `{{Click Attr - gtm-source}}`, `page_section` → `{{Click Attr - gtm-section}}` |

---

## Step 4 — Publish

Click **Submit** in the top-right → add a version name (e.g. "v1 — custom events") → **Publish**.

---

## Step 5 — Test with GTM Preview Mode

1. In GTM click **Preview** → enter `https://pianoman-eg.com` → **Connect**
2. Open the site in the Preview tab. The GTM debugger panel appears at the bottom.

### What to verify

| Action | Expected event in GTM | Expected parameters |
|---|---|---|
| Page loads | `page_view` | `page_path: "/"` |
| Click "Book Now" in navbar | `click_cta` | `cta_label: "Book Now"`, `page_section: "navbar"` |
| Click "Book Service" in hero | `click_cta` | `page_section: "hero"`, `service_type: "general"` |
| Click a service card CTA | `click_cta` | `service_type: "rental"/"tuning"/"restoration"` |
| Focus the name field in contact form | `contact_form_start` | — |
| Submit the contact form (success) | `generate_lead` | `method: "contact_form"` |
| Click WhatsApp in contact section | `click_whatsapp` | `source: "contact_section"` |
| Click phone in footer | `click_phone` | `source: "footer"` |
| Click Instagram in footer | `click_social` | `platform: "instagram"` |
| Navigate to /blog | `page_view` | `page_path: "/blog"` |
| On a blog post, click "Book Now" | `click_cta` via data-gtm | `page_section: "blog_post"` |
| On a blog post, click WhatsApp | `click_whatsapp` via data-gtm | `source: "blog_post"` |

---

## Measurement Plan

| Business goal | Event name | Trigger | Key parameters | Why it matters |
|---|---|---|---|---|
| Know which pages visitors view | `page_view` | Every Next.js route change | `page_path`, `page_title` | GTM only sees the initial load without this — blog navigation would be invisible |
| Identify top-performing service | `click_cta` | Any CTA button click | `service_type`, `page_section`, `cta_label` | Shows rental vs. tuning vs. restoration interest |
| Count form-based leads | `generate_lead` | Contact form submitted successfully | `method: "contact_form"`, `service_type` | The most valuable conversion on the site |
| Measure WhatsApp as a lead channel | `click_whatsapp` | Any WhatsApp link click | `source`, `service_type` | WhatsApp may outperform the form — data proves it |
| Count phone call intent | `click_phone` | `tel:` link click | `source` | Tracks call-driven leads before GA4 sees them |
| Find form drop-off | `contact_form_start` | First field focused | — | Users who start but never submit = lost leads |
| Track failed submissions | `contact_form_error` | Form submit with API error | — | Catch technical issues losing real leads |
| Measure social media engagement | `click_social` | Footer social icon click | `platform` | Which social channel drives engaged visitors |
| Track blog-to-lead path | `click_cta` (blog_post/blog_listing) + `generate_lead` | Blog CTA click → form submit | `page_section` starting with `blog` | Proves whether blog content converts readers into clients |
