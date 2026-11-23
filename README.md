# Portofolio Editorial — Ahmad Fauzul Adhim (Informatika UNIM)

Website portofolio single-page bergaya **high-fashion editorial** yang dibangun menggunakan **React 18 + Vite 6 + CSS3 + GSAP (ScrollTrigger) + Lenis Smooth Scroll**, serta siap di-deploy ke **Vercel**.

---

## Struktur Folder (Mudah Diedit di VS Code)

```text
adhim-portfolio-unim/
├── public/
│   └── images/
│       ├── hero-cutout.png         # Foto utama cutout transparan (dari 6.png)
│       ├── profile-portrait.jpg    # Foto potret 3:4 untuk Section 01 PROFIL
│       ├── expertise-01..03.png    # Gambar hover preview Section 02 KEAHLIAN
│       └── projects/
│           └── prj-01..07.png      # Cover mockup 7 proyek di Section 04 PROJECTS
├── src/
│   ├── data/
│   │   └── portfolioData.js        # <-- EDIT SEMUA TEKS, PROYEK, & SOSMED DI SINI!
│   ├── components/
│   │   ├── CustomCursor.jsx        # Kursor bulat mix-blend-mode: difference
│   │   ├── Preloader.jsx           # Loading アディム + counter 000–100 + 5-panel curtain wipe
│   │   ├── Navbar.jsx              # Sticky blur navbar + dark-mode auto-switch + mobile drawer
│   │   ├── Hero.jsx                # Frame editorial, badge UNIM, ADHIM serif, cutout, & marquee miring
│   │   ├── Profile.jsx             # Section 01 PROFIL
│   │   ├── Expertise.jsx           # Section 02 KEAHLIAN + floating image mengikuti kursor
│   │   ├── Quote.jsx               # Section 03 QUOTE (watermark katakana + scroll word reveal)
│   │   ├── Projects.jsx            # Section 04 PROJECTS (horizontal scroll pin desktop + swipe mobile)
│   │   ├── ProjectModal.jsx        # Modal detail lengkap setiap proyek
│   │   └── Footer.jsx              # Section 05 KONTAK + 4-column sweep hover + giant ADHIM wordmark
│   └── styles/
│       ├── tokens.css              # Warna & font variables
│       ├── global.css              # Reset, Lenis, & custom cursor
│       └── sections.css            # Styling lengkap & responsif semua section
├── index.html                      # Google Fonts & SEO meta
├── package.json                    # Dependencies (React, Vite, GSAP, Lenis, Lucide)
├── vite.config.js
└── vercel.json                     # Konfigurasi siap hosting Vercel
```

---

## Cara Menjalankan di VS Code (Lokal)

> **PENTING (Jangan Pakai Live Server!):**  
> Karena proyek ini menggunakan **React + Vite**, **jangan** membuka `index.html` lewat ekstensi _Live Server_ (`localhost:5500`) karena browser tidak bisa menjalankan file `.jsx` secara langsung (tampilan akan hitam kosong). Selalu jalankan lewat terminal VS Code menggunakan `npm run dev` lalu buka **`http://localhost:5173`**.

1. Ekstrak file ZIP lalu buka folder `adhim-portfolio-unim` di **VS Code**.
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

## Cara Mengubah Konten & Foto

- **Ubah Biodata, Daftar Proyek, Link GitHub/LinkedIn/Instagram/Email:**
  Buka file `src/data/portfolioData.js`. Semua teks dikelompokkan rapi di satu file.
- **Ganti Foto Utama / Screenshot Proyek:**
  Ganti file di `public/images/hero-cutout.png`, `public/images/profile-portrait.jpg`, atau `public/images/projects/prj-01.png` s.d. `prj-07.png` dengan nama file yang sama (atau ubah path-nya di `src/data/portfolioData.js`).
- **Ubah Warna atau Ukuran Font:**
  Edit variabel CSS di `src/styles/tokens.css`.

---

## Cara Deploy ke Vercel (Gratis & Instan)

### Opsi 1 — Via GitHub (Direkomendasikan)

1. Push folder `adhim-portfolio-unim` ke repository GitHub Anda.
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
