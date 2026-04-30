# Bulldog Lovers — sitio web

Sitio **Vite + React + Tailwind CSS v4** para Bulldog Lovers México.

## Desarrollo

```bash
npm install
npm run dev
```

## Build local

```bash
npm run build
npm run preview
```

## Deploy en Vercel (repo [MagicoInk/BDL](https://github.com/MagicoInk/BDL))

1. En [vercel.com](https://vercel.com), **Add New Project** → importa el repositorio **BDL**.
2. Vercel detecta **Vite**; no hace falta cambiar el output: **`dist`** (ya definido en `vercel.json`).
3. **Framework Preset:** Vite · **Build Command:** `npm run build` · **Install:** `npm install`.
4. **Node:** 20.x o superior (ver `engines` en `package.json`).
5. Pulsa **Deploy**.

`vercel.json` incluye rewrites SPA por si más adelante añades rutas con React Router. Los assets de `/assets/*` se sirven con normalidad.

