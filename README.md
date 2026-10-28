# Sai Prasanna Kumar & Sushmitha | Wedding Invitation

A single-page scrolling wedding invitation. Plain HTML, CSS and JavaScript, no build step.
The page is set to `noindex`, so search engines will not list it. Share the link directly.

## Structure

```
index.html        page content and sections
styles.css        all styling (type system, sections, motion, reduced-motion rules at the end)
script.js         events, calendar files, countdown, music, text and scroll animation
assets/img/       artwork (cut-paper elements, paintings, share image, favicon)
assets/audio/     music.mp3, background music that starts when guests tap "Open Invitation"
.nojekyll         tells GitHub Pages to serve the files as they are
```

## Things you will edit

**Venues and map links** — open `script.js` and find the `EVENTS` list at the top. For each event fill in:
- `venue`: the venue name shown on the card
- `map`: a Google Maps share link (if empty, the Location button searches Maps for the venue and city)

**Event times, dates and the countdown** — also in `script.js` (`EVENTS` and `WEDDING`).

**Music** — replace `assets/audio/music.mp3` with any MP3 you have the right to use. Keep it under about 3 MB.

**Link preview image** (WhatsApp, iMessage) — replace `assets/img/share.jpg` (1200 x 630) and set `SITE` in `script.js` to the final address.

## Publishing on GitHub Pages

1. Repo **Settings > Pages**.
2. Source: **Deploy from a branch**, choose your branch and `/ (root)`, then Save.
3. After about a minute the site is live at `https://<your-username>.github.io/<repo-name>/`.

## Fonts

Loaded from Google Fonts: Playfair Display, Cormorant Garamond, Great Vibes, Jost.
The page needs an internet connection to show them; without it, it falls back to a standard serif.

## Accessibility

Animations switch off for visitors who have "reduce motion" turned on in their device settings.
