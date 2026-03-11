# Arun Kumar GR — Portfolio

Angular 17 portfolio site for [frostarun.github.io](https://frostarun.github.io)

---

## Project Structure

```
frostarun.github.io/        ← Git repo root (also served by GitHub Pages)
├── portfolio/              ← Angular 17 source code (edit here)
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   │   ├── navbar/
│   │   │   │   ├── hero/
│   │   │   │   ├── about/
│   │   │   │   ├── experience/
│   │   │   │   ├── skills/
│   │   │   │   └── contact/
│   │   │   └── services/
│   │   │       └── portfolio.service.ts   ← All profile data lives here
│   │   └── styles.scss                    ← Global theme & CSS variables
│   ├── angular.json
│   └── package.json
├── index.html              ← Built Angular app (auto-generated, do not edit)
├── main-*.js               ← Built Angular app (auto-generated)
├── styles-*.css            ← Built Angular app (auto-generated)
├── .nojekyll               ← Tells GitHub Pages to skip Jekyll processing
└── docs/                   ← Intermediate build folder (auto-generated)
```

---

## One-Time Setup

### 1. Install dependencies

```bash
cd portfolio
npm install
```

### 2. Set up SSH key for GitHub (do this once)

**Generate a key:**
```bash
ssh-keygen -t ed25519 -C "engineer.arun1995@gmail.com" -f ~/.ssh/github_id -N ""
cat ~/.ssh/github_id.pub
```

**Add the key to GitHub:**
1. Copy the output of the above command
2. Go to [github.com → Settings → SSH and GPG keys → New SSH key](https://github.com/settings/ssh/new)
3. Title: `Dev Machine`
4. Paste the key → click **Add SSH key**

**Configure SSH locally:**
```bash
cat >> ~/.ssh/config << 'EOF'
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/github_id
EOF
```

**Switch the remote to SSH:**
```bash
cd /home/arun/projects/frostarun.github.io
git remote set-url origin git@github.com:frostarun/frostarun.github.io.git
```

**Test the connection:**
```bash
ssh -T git@github.com
# Expected: Hi frostarun! You've successfully authenticated...
```

---

## Updating Profile Data

All profile content is in one file:

```
portfolio/src/app/services/portfolio.service.ts
```

Edit the following properties:
- `profile` — name, title, email, phone, links, summary
- `experiences` — work history (role, company, period, bullets, tags)
- `skillGroups` — tech skills grouped by category
- `education` — college, degree, years
- `languages` — spoken languages with proficiency levels

---

## Development Server (local preview)

```bash
cd portfolio
npm start
# Open http://localhost:4200
```

Changes hot-reload automatically.

---

## Build & Deploy

Every time you make changes and want to publish them live:

```bash
# Step 1 — Build (from the portfolio/ folder)
cd /home/arun/projects/frostarun.github.io/portfolio
npm run build

# Step 2 — Copy built files to repo root
cd ..
cp docs/index.html .
cp docs/*.js .
cp docs/*.css .
cp docs/favicon.ico .

# Step 3 — Commit
git add -A
git commit -m "Update portfolio"

# Step 4 — Push to GitHub
git push origin main
```

The site goes live at **https://frostarun.github.io** within ~1 minute of pushing.

---

## GitHub Pages Configuration

GitHub Pages must be set to serve from the **root** of the `main` branch:

1. Go to your repo: [github.com/frostarun/frostarun.github.io/settings/pages](https://github.com/frostarun/frostarun.github.io/settings/pages)
2. Under **Source** → select `Deploy from a branch`
3. Branch: `main` · Folder: `/ (root)`
4. Click **Save**

---

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | Angular 17 (standalone components) |
| Language | TypeScript |
| Styling | SCSS with CSS custom properties |
| Build | Angular CLI (`@angular-devkit/build-angular`) |
| Hosting | GitHub Pages |

---

## Common Issues

**Push says "could not read Username"**
→ You're using HTTPS. Switch to SSH using the one-time setup steps above.

**Site not updating after push**
→ Wait 1–2 minutes. GitHub Pages has a small deploy delay.
→ Hard refresh the browser: `Ctrl + Shift + R`

**Build fails with "Cannot find module 'esbuild'"**
→ Run `npm install` inside the `portfolio/` folder.

**Local dev server not starting**
→ Make sure you're inside `portfolio/` before running `npm start`.
