# Topic Site Starter

A reusable, offline-first educational microsite and dedicated 1–3 page print guide. It uses plain HTML, CSS, and tiny optional JavaScript—no package manager, framework, server, CDN, or build step.

The **Learn Any Topic** demo is complete enough to preview and contains no visible fill-in-the-blank copy. `CUSTOMIZE:` comments and `[[TOPIC_NAME]]`-style tokens appear only in source files as editing instructions.

## Quick start: copy, edit, open

1. Copy and rename this folder so the untouched starter remains available.
2. Open the files in any plain-text editor (Visual Studio Code, Notepad, or similar).
3. Complete `research-notes-template.md`, then `content-plan.md`.
4. In each HTML file, use Find (`Ctrl+F` or `Command+F`) for `CUSTOMIZE:` and `[[`. The tokens are inside comments and tell you what nearby demo content to replace.
5. Change the documented variables at the top of both CSS files for colors and fonts.
6. Double-click `index.html`; it works from `file://` and offline.
7. Use a **Print guide** link on the website. On `print-guide.html`, choose **Print / save PDF** and inspect every page.

No-build is deliberate: direct editing stays portable and avoids local-file `fetch()` restrictions.

## File map

| File | Purpose |
|---|---|
| `index.html` | Complete responsive website and inline SVG examples |
| `styles.css` | Theme, components, responsiveness, accessibility preferences |
| `script.js` | Optional menu-close, active-section, and print enhancements |
| `print-guide.html` | Separately authored guide; all print links point here |
| `print-guide.css` | Conservative Letter/A4 print and screen preview |
| `research-notes-template.md` | Claim ledger, sources, uncertainty, fact-checking |
| `content-plan.md` | Audience, model, progression, and section planner |

## Edit in this order

Research → identity/scope → mental model → outline → facts/steps → diagrams → troubleshooting → sources → print condensation → colors.

Keep the web page to 5–7 main sections, one idea each, with short paragraphs. Aim for 450–900 words and 1–3 pages in print. Print intentionally duplicates condensed content for offline reliability and editorial control. Do not use the browser's Print command on `index.html`; all visible website print actions should open `print-guide.html`.

## Content checklist

- [ ] Name one beginner audience and narrow outcome.
- [ ] State edition, version, region, model, or review scope where relevant.
- [ ] Teach one memorable model before details.
- [ ] Give every procedure an observable success check.
- [ ] Separate established guidance, local variation, and preference.
- [ ] Put cautions beside affected instructions and repeat them in print.
- [ ] Teach a diagnostic order before isolated fixes.
- [ ] Keep terms consistent across web, SVGs, troubleshooting, and print.
- [ ] Add full sources and a reviewed/link-checked date.

**Safe deletion:** remove an optional `<section>` as a whole and remove matching desktop/mobile nav links. Keep skip links, landmarks, heading hierarchy, focus styles, SVG `<title>`/`<desc>`, source-status notes, and sources.

## Safe research and sources

Prefer current government, university, standards-body, exact-product manufacturer, or peer-reviewed sources. Use community material only for visibly labeled experience or preference. For medical, legal, financial, safety, or location-dependent claims, use current authoritative guidance, state limits, and direct readers to qualified help.

Record author/organization, title, update date, URL, access date, exact support, and limitations. Triangulate consequential advice when feasible. Never let a related model or edition silently stand in for the exact one. Remove, qualify, or label unverifiable claims. Quote only short passages needed for verification; otherwise paraphrase and cite.

## Visual customization

Edit the documented `:root` block in `styles.css`. Check normal-text contrast at **4.5:1** and large text/UI at **3:1**. Meaning must remain clear in grayscale and with background graphics off.

When changing an inline SVG, update its `<title>`, `<desc>`, visible labels, geometry, and caption together. Replace an unhelpful `<figure>` with explanatory text.

## Print customization

Edit `print-guide.html` after web copy is verified; introduce no new claims. Start with variables in `print-guide.css`. Prefer shortening content or adding a page over shrinking type. The default `@page { size: auto; }` follows the Letter or A4 paper selected in the print dialog. Test both sizes in Chrome/Edge and Firefox, backgrounds on and off. Keep every website print link routed to `print-guide.html`; only that page should offer a button that invokes printing.

## Deployment basics

Publish the folder unchanged on GitHub Pages, Netlify, Cloudflare Pages, or any static host. Serve the project root and `index.html`; there is no build command or output directory. Test relative links after deployment. Add social metadata only with absolute production URLs; consider privacy before analytics.

## Final QA

- [ ] No unintended `[[...]]`, `CUSTOMIZE:`, `TODO`, or example URLs remain.
- [ ] Claims, diagrams, dates, units, and scope match the research ledger.
- [ ] Every local link/anchor opens and all IDs are unique.
- [ ] Keyboard navigation works, focus is visible, mobile menu works without JS.
- [ ] Reflow works at 320px and 200% zoom without page-level overflow.
- [ ] Color is not the only signal; SVG titles, descriptions, captions are useful.
- [ ] Reduced-motion and increased-contrast settings remain usable.
- [ ] No console errors when opened locally.
- [ ] Print Preview is readable, cutoff-free, grayscale-safe, and 1–3 pages.
- [ ] Web and print facts/cautions agree; spelling and source links are checked.
