# Portofolio Editorial — Ahmad Fauzul Adhim (Informatika UNIM)

Website portofolio single-page bergaya **high-fashion editorial** yang dibangun menggunakan **React 18 + Vite 6 + CSS3 + GSAP (ScrollTrigger) + Lenis Smooth Scroll**, serta siap di-deploy ke **Vercel**.

---

## Struktur Folder

```text
adhim-portfolio/
├── public/
│   └── images/
│       ├── hero-cutout.png
│       ├── profile-portrait.jpg
│       ├── expertise-01..03.png
│       └── projects/
│           └── prj-01..07.png
├── src/
│   ├── data/
│   │   └── portfolioData.js
│   ├── components/
│   │   ├── CustomCursor.jsx
│   │   ├── Preloader.jsx
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Profile.jsx
│   │   ├── Expertise.jsx
│   │   ├── Quote.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectModal.jsx
│   │   └── Footer.jsx
│   └── styles/
│       ├── tokens.css
│       ├── global.css
│       └── sections.css
├── index.html
├── package.json
├── vite.config.js
└── vercel.json
```

---

## Cara Menjalankan di VS Code (Local)

1. Ekstrak file ZIP lalu buka folder `adhim-portfolio` di **VS Code**.
2. Buka Terminal di VS Code (`Ctrl + ~`), lalu install dependencies:
   ```bash
   npm install
   ```
3. Jalankan server pengembangan (hot-reload):
   ```bash
   npm run dev
   ```
4. Buka URL yang muncul di terminal (biasanya `http://localhost:5173`).

---

## Cara Deploy ke Vercel (Gratis & Instan)

### Opsi 1 — Via GitHub (Direkomendasikan)

1. Push folder `adhim-portfolio` ke repository GitHub Anda.
2. Buka [vercel.com](https://vercel.com), klik **Add New → Project**.
3. Import repository GitHub tersebut.
4. Vercel otomatis mendeteksi **Vite** (`npm run build`, output `dist`) berkat `vercel.json`.
5. Klik **Deploy** — selesai!

### Opsi 2 — Langsung via Vercel CLI dari VS Code

```bash
npm install -g vercel
vercel
```

Ikuti instruksi di terminal, dan website langsung online dengan URL `.vercel.app`.
