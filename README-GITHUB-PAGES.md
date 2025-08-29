# GREIA – GitHub Pages Deployment

This repo is pre-configured for **Next.js static export** and **GitHub Pages**.

## Quick start

1. **Create repo** on GitHub (e.g. `greia-platform`) and push:
   ```bash
   git init
   git add .
   git commit -m "Deploy GREIA to GitHub Pages"
   git branch -M main
   git remote add origin https://github.com/<your-username>/greia-platform.git
   git push -u origin main
   ```

2. **Enable Pages** → GitHub: *Settings → Pages* → **Source: GitHub Actions**.

3. Wait for the workflow to finish. Your site will be at:
   - Project site: `https://<your-username>.github.io/greia-platform/`

> If you deploy to the root (`https://<your-username>.github.io/`), edit `.github/workflows/pages.yml` to remove `NEXT_PUBLIC_BASE_PATH` and remove `basePath/assetPrefix` in `next.config.*`.

## Local scripts

```json
{
  "dev": "next dev --turbopack",
  "build": "next build && next export",
  "start": "next start",
  "lint": "eslint"
}
```

## Notes
- Images are exported unoptimized for Pages (`images.unoptimized: true`).
- Static export writes to `out/` which the workflow uploads.
- `NEXT_PUBLIC_BASE_PATH` is set to `"/greia-platform"` in CI so assets resolve correctly on project pages.
- If you have CSS `url(/asset.png)` paths, ensure they use the base path or place them in `/public` and reference via `<Image>`/`<img>`.
