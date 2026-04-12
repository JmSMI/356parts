# Porsche 356 Parts — GitHub Pages Site

Eleventy static site, auto-deployed to GitHub Pages via GitHub Actions.

Live at: `https://YOURUSERNAME.github.io/356parts/`

---

## Local dev

```bash
npm install
npm start        # http://localhost:8080 with live reload
npm run build    # outputs to _site/
```

Note: locally the pathPrefix `/356parts/` is still applied, so links will have
that prefix. This is normal — the site is built for GitHub Pages hosting.

---

## Adding or editing a part

Edit `src/_data/parts.json`. Each entry:

```json
{
  "id": "drum-brakes",
  "name": "Drum brake set",
  "category": "brakes",
  "price": "Make offer",
  "condition": "Used — serviceable",
  "status": "available",
  "description": "Full description here.",
  "notes": "Optional callout note.",
  "images": ["photo1.jpg", "photo2.jpg"]
}
```

**Categories:** drivetrain · suspension · brakes · wheels · electrical · body · interior · other

**Status:** `"available"` or `"sold"`

---

## Adding photos

Put images in: `src/parts/YOUR-PART-ID/images/`

Then list filenames in `parts.json` under `"images"`. First image = main photo.

---

## Deploying

Just push to `main`. GitHub Actions builds and deploys automatically (~30–60s).
Watch progress under the **Actions** tab in your repo.

---

## One-time GitHub setup

1. Push this repo to GitHub (public repo named `356parts`)
2. Go to repo → Settings → Pages → Source → select **GitHub Actions**
3. Push any change — the workflow fires and deploys

---

## Set your contact email

Search for `YOUR_EMAIL@example.com` in:
- `src/index.njk`
- `src/parts/part.njk`
