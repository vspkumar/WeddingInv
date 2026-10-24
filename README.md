# Sai Prasanna & Sushmitha | Wedding Invitation

A scrollable "book" invitation. Static site, no build step.

## Publish on GitHub Pages
1. Create a new public repo on GitHub. For a URL like `https://YOURNAME.github.io/` name it `YOURNAME.github.io`; any other name gives `https://YOURNAME.github.io/REPO/`.
2. Upload everything in this folder (`index.html`, `styles.css`, `script.js`, `assets/`).
3. Repo Settings > Pages > Source: "Deploy from a branch", branch `main`, folder `/ (root)`. Save.
4. Wait about a minute, then open the URL shown on that page.

## Add venues and map links
Open `script.js`. In the `EVENTS` list, fill `venue` and paste a Google Maps share link into `map` for each event. If `map` is empty the Location button searches Maps for the venue and city.

## Music
Add your own audio file as `assets/music.mp3` (royalty free or one you have rights to). It starts when guests tap "Open Invitation", and the round button toggles it.

## Share preview
Add a 1200x630 image as `assets/share.jpg` and set `SITE` in `script.js` to your final URL.
