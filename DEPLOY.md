# Deploying Your New Site — Replacing the React SPA

## What You're Getting

A static HTML/CSS/JS site (no build step needed) with 5 pages:

```
site/
├── index.html          ← Homepage
├── gallery.html        ← Gallery with category filters
├── about.html          ← Full biography
├── exhibitions.html    ← Timeline of exhibitions/installations
├── contact.html        ← Contact form + info
├── css/
│   └── style.css       ← Shared styles
├── js/
│   └── main.js         ← Shared JS (nav, scroll animations, filtering)
└── images/
    ├── Standing_Rock_NATL__2nd_monument_2017-__2nd_image_.jpeg
    ├── _EYA___West_Wind__2002.jpg
    ├── Lakota_Christ.jpg
    ├── Additional_images_14_Lakota_Madonna_Juniper_3__2006.jpg
    └── Additional_image_11_Yaqui_Christ_Bronze_5_x3__2006.jpg
```

---

## Step 1: Backup Your Current Site

```bash
# Clone your repo if you haven't already
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO

# Create a backup branch of the old SPA
git checkout -b backup/old-react-spa
git push origin backup/old-react-spa

# Go back to main
git checkout main
```

## Step 2: Remove the Old React SPA

```bash
# Delete all the old React/SPA files
# Typically: src/, public/, package.json, package-lock.json, node_modules/, build/, etc.
rm -rf src/ public/ build/ node_modules/
rm -f package.json package-lock.json yarn.lock .env
rm -f tsconfig.json webpack.config.js babel.config.js

# Keep .git and any other config you want (like CNAME for custom domain)
```

## Step 3: Copy In the New Site

```bash
# Unzip the download and copy the contents of the "site" folder
# into your repo root:

cp -r ~/Downloads/charlesrencountre-site/site/* .

# Your repo root should now look like:
# index.html, gallery.html, about.html, exhibitions.html, contact.html
# css/, js/, images/
```

## Step 4: Commit & Push

```bash
git add -A
git commit -m "Replace React SPA with static site redesign"
git push origin main
```

---

## Step 5: Configure Hosting

### Option A: GitHub Pages (simplest)

1. Go to your repo on GitHub → **Settings** → **Pages**
2. Under "Source", select **Deploy from a branch**
3. Choose **main** branch, **/ (root)** folder
4. Click **Save**
5. Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO/`

**For custom domain (charlesrencountre.com):**
1. In the Pages settings, enter `charlesrencountre.com` in the "Custom domain" field
2. Create a `CNAME` file in your repo root with just: `charlesrencountre.com`
3. At your domain registrar (GoDaddy, Namecheap, etc.), set DNS:
   - **A records** pointing to GitHub's IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - **CNAME record**: `www` → `YOUR_USERNAME.github.io`
4. Check "Enforce HTTPS" in GitHub Pages settings

### Option B: Netlify (recommended for contact form)

1. Go to [netlify.com](https://netlify.com) and sign up / log in
2. Click **"Add new site"** → **"Import an existing project"**
3. Connect your GitHub repo
4. Build settings: leave everything blank (no build command needed)
5. Set "Publish directory" to: `/` (root)
6. Click **Deploy**

**For the contact form on Netlify:**
Add `data-netlify="true"` to the `<form>` tag in `contact.html`:
```html
<form class="contact-form" data-netlify="true" name="contact">
```
Then remove the `onsubmit="handleSubmit(event)"` and Netlify will handle it automatically.

**Custom domain on Netlify:**
1. Go to Site settings → Domain management → Add custom domain
2. Enter `charlesrencountre.com`
3. Update DNS as directed by Netlify

### Option C: Vercel

1. Go to [vercel.com](https://vercel.com) and import your GitHub repo
2. Framework: "Other"
3. No build command, output directory: `.`
4. Deploy

---

## Step 6: Make the Contact Form Work

The contact form currently shows a success message client-side. To actually receive submissions, pick one:

### Formspree (easiest, free tier)
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form, get your form ID
3. In `contact.html`, change the form tag to:
```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```
4. Remove the `onsubmit` handler

### Netlify Forms (if using Netlify)
Just add `data-netlify="true"` as shown above. Submissions appear in your Netlify dashboard.

---

## Adding More Images Later

1. Drop new image files into the `images/` folder
2. In `gallery.html`, duplicate a `work-card` block and update the `src`, `alt`, `data-category`, title, and meta
3. Commit and push — the site updates automatically

Example:
```html
<div class="work-card" data-category="bronze">
  <img src="images/your-new-image.jpg" alt="Description" />
  <div class="work-card-overlay">
    <h3 class="work-card-title">Piece Title</h3>
    <p class="work-card-meta">Medium · Year</p>
  </div>
</div>
```

Categories used by the filter buttons: `monument`, `bronze`, `wood`. Add new filter buttons if needed.

---

## Summary

| Old Site | New Site |
|----------|----------|
| React SPA (requires JS to render) | Static HTML (works everywhere, SEO-friendly) |
| Requires `npm install` + build step | No build step — just files |
| Single index.html, client-side routing | 5 real HTML pages, proper URLs |
| Invisible to search engines | Full meta descriptions, semantic HTML |
| Heavy JS bundle | ~950KB total (mostly images) |

Your new site loads faster, ranks better in search, works without JavaScript, and is trivially easy to update — just edit HTML files and push.
