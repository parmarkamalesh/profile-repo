# Portfolio

Personal portfolio built with **Next.js 15** and **Tailwind CSS**.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Edit content

- **Name, tagline, links, email:** `src/data/content.ts`
- **About text:** `about` in `src/data/content.ts`
- **Projects:** `projects` array in `src/data/content.ts`
- **Skills:** `skills` array in `src/data/content.ts`

## Build for production

```bash
npm run build
npm start
```

## Deploy

### Option A: Vercel (recommended)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New** → **Project** and import `parmarkamalesh/profile-repo`.
3. Leave settings as default and click **Deploy**.
4. Your site will be live at `https://your-project.vercel.app`. You can add a custom domain in Project Settings.

No config changes needed; Vercel detects Next.js automatically.

### Option B: GitHub Pages

This site is static-friendly. To deploy to `https://parmarkamalesh.github.io/profile-repo`:

1. In the repo go to **Settings** → **Pages** → Source: **GitHub Actions**.
2. Push the workflow file below (or use the static export steps in the repo docs).

Or use Vercel for the simplest one-click deploy.
