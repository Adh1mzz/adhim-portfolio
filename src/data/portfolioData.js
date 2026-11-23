/**
 * ============================================================================
 * PUSAT DATA PORTOFOLIO — AHMAD FAUZUL ADHIM (INFORMATIKA UNIM)
 * ============================================================================
 * Ubah teks, biodata, proyek, gambar, dan link sosial media di file ini saja.
 * Semua perubahan otomatis tampil di seluruh halaman!
 *
 * Cara mengganti gambar:
 * 1. Letakkan foto/screenshot baru di folder: public/images/ atau public/images/projects/
 * 2. Sesuaikan nama file di bawah ini (contoh: '/images/projects/prj-01.png').
 */

export const SITE_META = {
  katakana: "アディム",
  preloaderSubtitle: "AHMAD FAUZUL ADHIM — INFORMATICS",
  brandFirst: "Fauzul",
  brandScriptInitial: "Adhim.",
  heroGiantWord: "FAUZUL",
  heroScriptAccent: "Adhim",
  heroImage: "/images/hero-cutout.png", 
  heroImageAlt: "Ahmad Fauzul Adhim — Informatika UNIM",
  badgeLogo: "/images/logo_UNIM.png",
  badgePill: "INFORMATIKA",
  heroRoleTitle: "JIKOSOUKAI",
  heroTagline: [
    "Software Engineering,",
    "Game Dev, & Creative Coding.",
    "Universitas Islam Majapahit.",
  ],
  heroDateLocation: "Mojokerto, 28-10-2005",
  heroCredit: "Portfolio © 2026",
  currentFocusTitle: "Current Focus !!",
  currentFocusText:
    "Mahasiswa Informatika Universitas Islam Majapahit — Eksplorasi Mobile App, Web Interaktif, & AI.",
  mottoTitle: "The Motto:",
  mottoQuote: `"It's not impossible, it's just hard"`,
  mottoAuthor: "—Ahmad Fauzul Adhim—",
  marqueeItems: [
    { text: "Fauzul Adhim", style: "italic" },
    { text: "アディム", style: "jp" },
    { text: "UNIM INFORMATIKA", style: "italic" },
    { text: "FULLSTACK & MOBILE", style: "italic" },
    { text: "New Era", style: "italic" },
  ],
};

export const NAV_LINKS = [
  { num: "01", label: "PROFIL", href: "#profil" },
  { num: "02", label: "KEAHLIAN", href: "#keahlian" },
  { num: "03", label: "QUOTE", href: "#quote" },
  { num: "04", label: "PROJECTS", href: "#projects" },
  { num: "05", label: "KONTAK", href: "#kontak" },
];

export const PROFILE_DATA = {
  eyebrow: "01  PROFIL",
  portraitImage: "/images/profile-portrait.png",
  captionLeft: "NO. 001 — MAHASISWA",
  captionRight: "FAKULTAS TEKNIK — UNIM",
  katakana: "アディム",
  headingSerif: "Halo, aku",
  headingScript: "Adhim!",
  bio: "Mahasiswa Informatika Universitas Islam Majapahit yang antusias membangun aplikasi fungsional, game 3D interaktif, serta antarmuka web modern yang rapi. Menggabungkan logika rekayasa perangkat lunak dengan sentuhan estetika desain editorial.",
  details: [
    { label: "NAMA", value: "Ahmad Fauzul Adhim" },
    { label: "LAHIR", value: "Mojokerto, 28 Oktober 2005" },
    { label: "KAMPUS", value: "Universitas Islam Majapahit" },
    { label: "PRODI", value: "Informatika" },
  ],
  statementLabel: "BIO SINGKAT",
  statementJp: "自己紹介",
  statementQuote:
    "“Membangun solusi digital yang tidak hanya berjalan cepat di balik layar, tetapi juga meninggalkan kesan visual yang tak terlupakan.”",
};

export const EXPERTISE_DATA = {
  eyebrow: "02  KEAHLIAN",
  headingSerif: "Bidang",
  headingScript: "fokus",
  subtitle:
    "Kombinasi pengembangan perangkat lunak, desain antarmuka, dan eksplorasi teknologi modern.",
  items: [
    {
      num: "(01)",
      title: "Mobile & Game Dev",
      description:
        "Membangun aplikasi lintas platform (Flutter) dan game interaktif (Unity 3D / C#).",
      previewImage: "/images/expertise-01.png",
      tags: ["Flutter", "Dart", "Riverpod", "Unity 6", "C#"],
      targetSection: "#projects",
    },
    {
      num: "(02)",
      title: "Web & AI Engineering",
      description:
        "Pengembangan aplikasi web modern, integrasi API, serta pengolahan citra & AI.",
      previewImage: "/images/expertise-02.png",
      tags: ["React", "Vite", "GSAP", "Python", "Computer Vision"],
      targetSection: "#projects",
    },
    {
      num: "(03)",
      title: "Organisasi & Akademik",
      description:
        "Aktif sebagai Ketua Hima dalam Himaprodi Informatika & Sekretaris 2 dalam BEM-FT, serta berbagai proyek riset praktikum.",
      previewImage: "/images/expertise-03.png",
      tags: ["BEM-FT UNIM", "HIMIF", "Riset Praktikum", "Kolaborasi Tim"],
      targetSection: "#kontak",
    },
  ],
};

export const QUOTE_DATA = {
  eyebrow: "03  MINDSET",
  watermarkJp: "アディム",
  quoteParts: ["It's", "not", "impossible,", "it's", "just", "hard."],
  signature: "-Ahmad Fauzul Adhim",
};

export const PROJECTS_DATA = {
  eyebrow: "04  PROJECTS",
  headingSerif: "Karya",
  headingScript: "Pilihan",
  scrollHint: "GESER UNTUK MELIHAT →",
  posterCard: {
    topLabel: "INFORMATIKA — UNIM",
    katakana: "アディム",
    bottomLabel: "SELECTED WORKS 2024–2026",
  },
  endCap: {
    scriptText: "Tertarik berkolaborasi?",
    buttonLabel: "KONTAK",
  },
  items: [
    {
      id: "prj-01",
      code: "PRJ. 01",
      title: "Student Reporting Portal",
      category: "WEB / AI HELPDESK",
      year: "2026",
      image: "/images/projects/prj-01.png",
      summary:
        "Portal pelaporan diskriminasi dan perundungan berbasis web untuk lingkungan kampus dengan modul edukasi AI dan klasifikasi laporan otomatis.",
      highlights: [
        "Klasifikasi prioritas laporan berbasis AI Helpdesk untuk respons cepat.",
        "Konten edukasi interaktif anti-perundungan yang ramah mahasiswa.",
        "Dashboard analitik terstruktur dengan arsitektur keamanan data berlapis.",
      ],
      techStack: ["React", "Tailwind / CSS", "AI Classification", "REST API"],
      githubUrl: "https://github.com/",
      demoUrl: "#",
    },
    {
      id: "prj-02",
      code: "PRJ. 02",
      title: "3D Endless Runner Game",
      category: "UNITY / C# / ANDROID",
      year: "2026",
      image: "/images/projects/prj-02.png",
      summary:
        "Game mobile 3D endless runner lintas platform (Android & Windows) dibangun dengan Unity 6, dilengkapi 10 karakter pilihan dan 15 peta bertema.",
      highlights: [
        "10 karakter playable dengan animasi unik dan 15 map tematik dinamis.",
        "Sistem kontrol swipe & lompatan responsif untuk layar sentuh Android.",
        "Integrasi in-app payment gateway dan sistem skor/koleksi koin.",
      ],
      techStack: ["Unity 6", "C#", "TextMeshPro", "Android APK"],
      githubUrl: "https://github.com/",
      demoUrl: "#",
    },
    {
      id: "prj-03",
      code: "PRJ. 03",
      title: "Flutter Movie Catalog",
      category: "FLUTTER / RIVERPOD",
      year: "2026",
      image: "/images/projects/prj-03.png",
      summary:
        "Aplikasi katalog film modern lintas platform menggunakan Flutter dan manajemen state Riverpod, lengkap dengan pemutar trailer YouTube bawaan.",
      highlights: [
        "Arsitektur reaktif berbasis flutter_riverpod & riverpod_annotation.",
        "Eksplorasi genre, card swiper interaktif, dan caching gambar otomatis.",
        "Pemutaran trailer video tersemat langsung melalui pod_player.",
      ],
      techStack: ["Flutter", "Dart 3.5", "Riverpod", "pod_player"],
      githubUrl: "https://github.com/",
      demoUrl: "#",
    },
    {
      id: "prj-04",
      code: "PRJ. 04",
      title: "Digital Image Processing App",
      category: "PYTHON / MOBILE",
      year: "2026",
      image: "/images/projects/prj-04.png",
      summary:
        "Eksplorasi riset pengolahan citra digital yang diintegrasikan dengan pemrograman mobile untuk deteksi tepi, peningkatan kontras, dan klasifikasi visual.",
      highlights: [
        "Pipeline pra-pemrosesan citra otomatis (filtering, thresholding, segmentasi).",
        "Integrasi layanan backend Python dengan antarmuka aplikasi mobile.",
        "Dirancang sebagai dasar publikasi jurnal akademik Informatika.",
      ],
      techStack: ["Python", "OpenCV", "Flutter", "Image Processing"],
      githubUrl: "https://github.com/",
      demoUrl: "#",
    },
    {
      id: "prj-05",
      code: "PRJ. 05",
      title: "Nexa-BI - Next-Generation Business Intelligence Platform",
      category: "AI / BUSINESS INTELLIGENCE",
      year: "2026",
      image: "/images/projects/prj-05.png",
      summary: `Platform analitik bisnis berbasis AI untuk customer analytics dan product recommendation pada industri retail. Dibangun di atas dataset Global Superstore (51.290 transaksi, 2012–2015).

Capstone Project — PJK-GM040 | Pijak × IBM SkillsBuild
Tema: AI for Business Intelligence and Market Insights`,
      highlightsTitle: "Fitur Utama",
      highlights: [
        "Login / Register — Autentikasi user dengan JWT",
        "Overview — KPI ringkasan, distribusi cluster Loyal/Pasif, AI Smart Advisor",
        "Sales Performance — Revenue per segment, distribusi monetary, recency, pareto kontribusi, AI Sales Forecast",
        "Analytics — RFM Scatter Plot, distribusi segment, % loyal, tabel detail RFM",
        "Market Basket — Association rules Apriori (106 rules), top bundling ideas",
        "Top Customers — Podium top 3 + ranked table 10 pelanggan tertinggi",
        "Churn Risk — Monitor pelanggan berisiko churn + AI strategi retensi",
        "Customers — CRUD lengkap, search, pagination, export CSV",
      ],
      techStack: [
        "React 19",
        "Vite",
        "Tailwind CSS",
        "Recharts",
        "Lucide",
        "FastAPI",
        "SQLAlchemy",
        "Pydantic",
        "Uvicorn",
      ],
      githubUrl: "https://github.com/Adh1mzz/Nexa-BI.git",
      demoUrl: "#",
    },
    {
      id: "prj-06",
      code: "PRJ. 06",
      title: "Vulnerability Classifier",
      category: "MACHINE LEARNING / DATA",
      year: "2026",
      image: "/images/projects/prj-06.png",
      summary:
        "Sistem klasifikasi level kerentanan teknis berbasis pembelajaran mesin untuk membantu pemetaan risiko dan pelaporan audit keamanan secara sistematis.",
      highlights: [
        "Klasifikasi otomatis tingkat risiko (Low, Medium, High, Critical).",
        "Pipeline evaluasi metrik akurasi, presisi, dan confusion matrix.",
        "Ekspor ringkasan laporan teknis terstruktur untuk dokumentasi praktikum.",
      ],
      techStack: ["Python", "Scikit-Learn", "Pandas", "Data Analysis"],
      githubUrl: "https://github.com/",
      demoUrl: "#",
    },
    {
      id: "prj-07",
      code: "PRJ. 07",
      title: "Personal Editorial Web",
      category: "REACT / GSAP / LENIS",
      year: "2026",
      image: "/images/projects/prj-07.png",
      summary:
        "Website portofolio bergaya majalah editorial high-fashion dengan animasi staggered curtain reveal, custom blend cursor, dan horizontal scroll showcase.",
      highlights: [
        "Dibangun modular dengan React 18, Vite 6, GSAP ScrollTrigger, & Lenis.",
        "Tipografi high-contrast Didone serif, calligraphic script, & katakana.",
        "Responsif penuh dan siap deploy instan di Vercel.",
      ],
      techStack: ["React", "Vite", "GSAP", "Lenis"],
      githubUrl: "https://github.com/",
      demoUrl: "#hero",
    },
  ],
};

export const FOOTER_DATA = {
  eyebrow: "05  KONTAK",
  headingSerif: "Mari terhubung &",
  headingScript: "berkarya!",
  socials: [
    {
      name: "GitHub",
      handle: "Adh1mzz",
      href: "https://github.com/Adh1mzz", // Ganti dengan URL GitHub Anda
    },
    {
      name: "LinkedIn",
      handle: "Ahmad Fauzul Adhim",
      href: "https://linkedin.com/in/ahmad-fauzul-adhim", // Ganti dengan URL LinkedIn Anda
    },
    {
      name: "Instagram",
      handle: "@fzl_adh1mmzz28",
      href: "https://www.instagram.com/fzl_adh1mmzz28/", // Ganti dengan URL Instagram Anda
    },
    {
      name: "Email",
      handle: "afauzuladhim.2024@unim.ac.id",
      href: "mailto:afauzuladhim.2024@unim.ac.id", // Ganti dengan email aktif Anda
    },
  ],
  metaLeft: "AHMAD FAUZUL ADHIM — HACKERBOYZ",
  metaCenter: "Mojokerto, Jawa Timur",
  backToTopLabel: "KEMBALI KE ATAS",
  giantWord: "ADHIM",
  copyright: "© 2026 AHMAD FAUZUL ADHIM — INFORMATIKA UNIM.",
};
