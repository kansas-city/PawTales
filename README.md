# PawTales Rescue & Pet Care

A static pet-owner blog and animal rescue newsletter site — hand-built HTML, CSS and
vanilla JavaScript. No build step, no dependencies, no framework.

- **Live site (Netlify):** _add your Netlify URL here after the first deploy_
- **Repository:** https://github.com/kansas-city/PawTales

## Project structure

```
.
├── index.html                  # Home
├── about.html                  # About us
├── blog.html                   # Article index (15 posts)
├── rescue-newsletter.html      # Newsletter signup
├── contact.html                # Contact form
├── privacy.html                # Privacy policy
├── terms.html                  # Terms of use
├── 404.html                    # Custom not-found page (served by Netlify)
├── blog/                       # Individual article pages
│   └── *.html
├── assets/
│   ├── css/style.css           # Single stylesheet
│   └── js/main.js              # Nav, forms, scroll reveal, progress bar
├── robots.txt                  # Crawler rules (update the domain!)
├── netlify.toml                # Netlify build + header configuration
└── .gitignore
```

## Local preview

Because the pages use root-relative links (`/assets/...`) on the 404 page and
relative links elsewhere, serve the folder over HTTP rather than opening the
files directly:

```bash
# Python (bundled)
python -m http.server 8080
# then open http://localhost:8080
```

or with Node:

```bash
npx serve .
```

## Deploying to Netlify

This site needs **no build command**. Netlify just publishes the repository root.

### Option A — connect the GitHub repo (recommended, auto-deploys on push)

1. Log in to [Netlify](https://app.netlify.com/) → **Add new site → Import an existing project**.
2. Choose **GitHub** and select the `kansas-city/PawTales` repository.
3. Build settings:
   - **Build command:** _(leave empty)_
   - **Publish directory:** `.`
4. Click **Deploy site**. Every push to the production branch redeploys automatically.

`netlify.toml` already declares `publish = "."` and the security/caching headers,
so Netlify picks up the correct settings automatically.

### Option B — drag & drop

Zip the project folder and drop it onto the Netlify **Deploys** page. Fast, but no
automatic redeploys.

### Option C — Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify init      # link to a new or existing site
netlify deploy --prod --dir .
```

## Post-deploy checklist

- [ ] Replace the placeholder domain `www.pawtales.example.com` in every page's
      `<link rel="canonical">`, Open Graph, Twitter and JSON-LD tags with the real
      domain (Netlify subdomain or a custom domain).
- [ ] Update `robots.txt` with the real domain and add a `sitemap.xml`.
- [ ] Update `hello@pawtales.example.com` to a real, monitored mailbox.
- [ ] Point the contact and newsletter forms at a real backend (Netlify Forms,
      Formspree, or similar) — they are currently client-side demo handlers only.
- [ ] Add a custom domain under **Site settings → Domain management** if desired.
