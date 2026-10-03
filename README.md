# betterer covers — poster backdrop redesign

A dependency-free responsive landing page with original betterer cover artwork, Geist typography, a slowly moving perspective poster wall, pointer depth, and an accessible pause/resume control. Respects reduced-motion preferences and pauses motion in hidden tabs.

## Run locally

```sh
python3 -m http.server 4173
```

Open http://localhost:4173. No build step or package installation is required.

The primary action, changelog, and credits link to the original service at https://dev.betterer.cc. This repository redesigns the landing page; the cover editor remains hosted on the original site.

## Assets

Cover artwork, logo, and Geist font were obtained from the supplied source site, https://dev.betterer.cc. Third-party streaming marks and artwork remain the property of their respective owners. No ownership of those assets is claimed.

## Hosting

GitHub Pages can serve the repository root directly. All local paths are relative and work under `/testing/`.

## Compare versions

- `/index.html` (or `/`): original animated redesign, preserved.
- `/refined.html`: softer center blur and stronger scrim, smaller covers across six lanes, slower movement, stronger header fade, and a muted gray-purple headline. Includes a link back to the original.

The refined page loads `refined.css` after the original stylesheet. Shared JavaScript defaults to the original five lanes unless a page explicitly requests a different count.

The refined headline flips through paired feature labels every four seconds: collection covers, poster layouts, custom artwork, service logos, color palettes, and custom typography. These refer to shipped 2.0/2.1 features in Betterer's changelog. The shared motion control pauses the headline and poster wall. Reduced-motion users keep a static collection-covers heading; screen readers receive a stable heading rather than repeated announcements.

## Odin seek HUD mockup

- [`/odin-hud-mockup.html`](./odin-hud-mockup.html): interactive seek HUD concept, preserved exactly from the supplied standalone visualization, including its sandboxed iframe and Content Security Policy.
