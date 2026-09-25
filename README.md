# KenoWiki

Kenolab documentation, built with [VitePress](https://vitepress.dev).

## Local setup

Requires Node.js 20+.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # static output in docs/.vitepress/dist
npm run preview   # serve the build
```

## Structure

```
docs/
├── .vitepress/config.mts   # nav, sidebar, site config
├── .vitepress/theme/       # Kenolab theme (colors, logo, title)
├── public/                 # logo.jpg, favicon, fonts
└── <category>/index.md     # pages
```

Add a page: create a `.md` under `docs/` and reference it in the `sidebar` of `config.mts`.
