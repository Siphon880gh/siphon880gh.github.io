# Weng Industry — Portfolio (`/me`)

Static HTML/CSS/JS recreation of the **Blocksy “Cool Style”** WordPress look (navy / yellow / cyan, Roboto Mono), without WordPress.

**Positioning:** ~70% Build (software / web developer, AI + SE craft) · ~30% Advise (automation / AI-transformation consulting). Soft sell — no public pricing, ROI guarantees, lead magnets, or emoji walls.

## Browse locally

With MAMP (or any static server) at the `weng` docroot:

- Home: http://localhost:8888/weng/me/
- Work: http://localhost:8888/weng/me/projects/
- Services: http://localhost:8888/weng/me/services/
- Passion: http://localhost:8888/weng/me/passion/
- About: http://localhost:8888/weng/me/about/
- Contact: http://localhost:8888/weng/me/contact/ (supports `?path=build|advise|unsure`)

Or: `cd me && python3 -m http.server 8765`

## Structure

- `index.html`, `projects/` (nav: Work), `services/`, `passion/`, `about/`, `contact/` — pages
- `assets/css/style.css`, `assets/js/main.js` — design system, path cards, Work Build|Advise tabs (+ Passion link), contact path chooser
- Header brand uses `logo-light.png` alone (full wordmark in image; no duplicate HTML text)
- Home `#passion` teaser + `/passion/` page — Games, Nursing, @WengTeachesCode archive, Knowledge notes (7000+); Work `?tab=passion` redirects to `/passion/`
- `assets/img/` — logos, headshot, icons, waves, project screenshots
- `index.react-legacy.html` + `src/` / `dist/` — previous React/webpack portfolio (not used by the new entrypoint)

## Source of design

Visual/IA cues from `me00WordpressCoolStyle` (Blocksy + Elementor): palette `#001129` / `#FDD746` / `#00d2fc`, Roboto Mono nav, hero portrait ring, rounded project cards, waves backgrounds. Copy ideas mined read-only from `me00PHPOldPorfolio` and `me00MarketingAgency` (toned down for soft sell). Contact uses `mailto:`.

Do not modify `me00PHPOldPorfolio`, `me00WordpressCoolStyle`, or `me00MarketingAgency`.
