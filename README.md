# Covera · Forest Glass makeover

A thank-you gift to the Covera team from the Done For You Insurance team: a screen-by-screen review of the Covera agent app and a working, clickable redesign.

**Start here:** open `index.html` for the note, the review of 16 screens and the design system, then `app.html` for the prototype.

## What is inside

| File | What it is |
|---|---|
| `index.html` | Thank-you note, six design ideas, before-and-after review of every screen, ten app-wide fixes, design system |
| `app.html` + `app.js` | The prototype: To do, Assistant, Document collection, Quoting, an opportunity, Carrier portals, Quote comparison, Proposal, Certificates, Opportunities, Policies, Clients, To link, Activity, Performance, Settings, Carriers and portals |
| `styles.css` | The Forest Glass design tokens and components (one file, plain CSS) |
| `assets/` | Covera's own logo files, used here only to show the concept in your brand |

Try `⌘K` (or `Ctrl+K`) for search and `⌘J` for the assistant panel. Every screen works at phone width.

## Run it

No build step. Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
```

## Design notes

- **Brand:** forest green `#0B3526` for actions, lime `#B8F25A` only as a signal (live, progress, your turn), taken from covera-agents.com.
- **Type:** Libre Baskerville for page titles, Inter for the work.
- **Liquid glass** for what floats (menu, top bar, assistant, search). Work surfaces stay near-opaque so text keeps AA contrast. Transparency and motion switch off for people who ask their system for less.
- **Status** is always an icon plus a word, never color alone.

## Fine print

Unofficial concept. Not affiliated with or endorsed by Covera AI, Inc. The Covera name and logo belong to Covera. Every client, carrier, price and record in the prototype is invented; no data from any real account is included. Icons are adapted from [Lucide](https://lucide.dev) (ISC). Code is MIT licensed: use any of it.
