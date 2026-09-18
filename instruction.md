# Project Specification: 1:1 Clean Light Minimalist Portfolio

## 1. Overview & Architecture
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** `lucide-react`
- **Theme:** Clean Light Mode Minimalist (Pure White / Slate)
- **Navigation Model:** Single-Page Application (SPA) dengan Smooth Scroll Hash (`#home`, `#about`, `#experience`, `#projects`, `#skills`, `#contact`) dan Scroll-Spy.

---

## 2. Color Palette & Styling Tokens
- **Canvas / Background Utama:** `#ffffff` (`bg-white`) atau `#f8fafc` (`bg-slate-50`)
- **Text Headings / Titles:** `#0f172a` (`text-slate-900 font-extrabold`)
- **Text Subtitle / Roles:** `#334155` (`text-slate-700 font-bold`)
- **Text Body / Paragraph:** `#64748b` (`text-slate-500` / `text-slate-600`)
- **Card Surface:** `#ffffff` (`bg-white border border-slate-200/80 shadow-sm rounded-2xl`)
- **Card Surface Hover:** `hover:shadow-md hover:border-slate-300 transition-all`
- **Badge Green:** `bg-emerald-50 text-emerald-700 border border-emerald-200`
- **Badge Blue:** `bg-blue-50 text-blue-700 border border-blue-200`
- **Primary Button:** `bg-slate-900 hover:bg-slate-800 text-white rounded-xl px-5 py-2.5 font-medium shadow-sm`
- **Secondary Button:** `bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 rounded-xl px-5 py-2.5 font-medium`

---

## 3. Floating Pill Top Navbar (`components/Navbar.tsx`)
Navbar berbentuk kapsul / pill mengambang di bagian atas tengah layar:
- **Posisi:** `fixed top-6 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[95vw]`
- **Container Pill:** `flex items-center gap-1 sm:gap-1.5 p-1.5 bg-white/85 backdrop-blur-md border border-slate-200 shadow-md rounded-full`
- **Nav Items dengan Ikon Kecil (`lucide-react`):**
  1. `Home` (`#home`) — Icon: `Home`
  2. `About` (`#about`) — Icon: `User`
  3. `Experience` (`#experience`) — Icon: `Briefcase`
  4. `Projects` (`#projects`) — Icon: `FolderGit2`
  5. `Skills` (`#skills`) — Icon: `Code2`
  6. `Contact` (`#contact`) — Icon: `Mail`
- **Active State (Scroll-Spy):**
  - Item aktif: `bg-slate-900 text-white rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium shadow-sm flex items-center gap-1.5`
  - Item inaktif: `text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium transition flex items-center gap-1.5`

---

## 4. Section Structure (`app/page.tsx`)

Bungkus seluruh section di dalam `<main className="max-w-5xl mx-auto px-4 sm:px-6 pt-28 pb-24 space-y-28">`. Setiap section memiliki atribut `id` dan class `scroll-mt-28`.

### A. Hero Section (`#home`)
- Grid 2 Kolom responsif (`grid grid-cols-1 md:grid-cols-12 gap-8 items-center`):
  - **Sisi Kiri (`md:col-span-7`):**
    - Status Badge: Dot hijau + "Available for work / opportunities" (`bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full px-3 py-1 text-xs font-medium inline-flex items-center gap-2 mb-4`).
    - Headline: `Hi, I'm Ahmad Fauzan Ash Shidiq` (`text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-2`).
    - Subtitle Role: `Data Analyst|` dengan efek cursor typing (`text-xl sm:text-2xl font-bold text-slate-700 mb-4`).
    - Bio Paragraf: 2–3 kalimat pengantar problem solving, analisis data, dan visualisasi insight bisnis (`text-slate-600 leading-relaxed text-sm sm:text-base mb-5`).
    - Meta Badges: Lokasi (`Surabaya, Indonesia`) dan status (`Available Now`) dengan styling pill abu-abu/biru muda.
    - Action Buttons:
      - Primary: `[View Projects ->]` (scroll ke `#projects`, tombol hitam rounded-xl).
      - Secondary: `[Let's Work Together]` (scroll ke `#contact`, tombol putih border slate-300 rounded-xl).
    - Follow me: Teks "Follow me:" + icon links LinkedIn, GitHub, Instagram.
  - **Sisi Kanan (`md:col-span-5`):**
    - Foto portrait: Rounded rectangle `rounded-2xl shadow-lg border border-slate-200 w-full max-w-sm aspect-[4/5] object-cover mx-auto`.

### B. About Me (`#about`)
- Deskripsi detail perjalanan analitik data, pendekatan pemecahan masalah bisnis, dan quick stat cards (Projects Completed, Tools Mastered, Years Experience).

### C. Experience (`#experience`)
- Timeline riwayat kerja / magang dalam bentuk card putih bersih dengan border tipis `border-slate-200`, logo instansi, role, periode, dan bullet points tugas & capaian terukur.

### D. Projects Showcase (`#projects`)
- Grid 2 atau 3 kolom kartu proyek:
  - Thumbnail rasio 16:9 bersih dengan screenshot dashboard.
  - Badges tools: `SQL`, `Power BI`, `Excel`, `Python` (`bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded-md`).
  - Judul proyek tebal (`text-slate-900 font-bold`).
  - Deskripsi ringkas masalah bisnis & insight utama.
  - Tombol aksi: `[View Dashboard]` dan `[Case Study]`.

### E. Skills & Tools (`#skills`)
- Grid kartu keahlian teknis (SQL Database, Power BI & Visualisasi, Excel Advanced, Python EDA, Problem Solving) dengan ikon modern.

### F. Contact (`#contact`)
- 2 Kolom:
  - Kiri: Info kontak langsung (Email, WhatsApp, Lokasi) & medsos.
  - Kanan: Form pesan minimalis putih bersih (Name, Email, Subject, Message, tombol submit hitam solid).

---

## 5. Implementation Rules
1. Jangan membuat sub-route folder. Seluruh konten berada di `app/page.tsx`.
2. Gunakan `className="scroll-smooth"` pada elemen `<html>` di `app/layout.tsx`.
3. Semua mock data disimpan di folder `/data/` (projects.ts, experience.ts, profile.ts).
4. Gunakan palet warna **Light Slate / White**, bukan dark mode.