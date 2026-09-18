# Comprehensive Specification: 1:1 Precise Replica Portfolio

## 1. Persona & Architecture
- **Role:** Senior Full-Stack Engineer & UI/UX Specialist (Next.js 14+ App Router, TypeScript, Tailwind CSS).
- **Core Goal:** Replikasi presisi 1:1 tampilan, tata letak, interaksi tab, dan gaya visual dari video demo portofolio (Clean Light Minimalist) untuk profil Ahmad Fauzan Ash Shidiq (Data Analyst).
- **Framework & Libraries:**
  - Next.js 14+ (App Router, Single-Page Architecture)
  - TypeScript
  - Tailwind CSS (`clsx`, `tailwind-merge`)
  - Icons: `lucide-react`

---

## 2. Design Tokens & Visual Theme (Clean Light Minimalist)
- **Canvas / Page Background:** `#ffffff` (`bg-white`) dan variasi latar section `#f8fafc` (`bg-slate-50/50`)
- **Card Background:** `#ffffff` (`bg-white`)
- **Borders & Separators:** `#e2e8f0` (`border border-slate-200`) atau `#f1f5f9` (`border-slate-100`)
- **Text Headings / Titles:** `#0f172a` (`text-slate-900 font-extrabold tracking-tight`)
- **Text Subtitles / Roles:** `#1e293b` (`text-slate-800 font-bold`)
- **Text Body / Muted:** `#64748b` (`text-slate-500` / `text-slate-600`)
- **Status Green Badge:** `bg-emerald-50 text-emerald-700 border border-emerald-200`
- **Location & Status Chips:** `bg-slate-100 text-slate-700 text-xs px-3 py-1.5 rounded-lg inline-flex items-center gap-1.5`
- **Primary Button:** `bg-slate-900 hover:bg-slate-800 text-white rounded-xl px-5 py-2.5 font-medium shadow-sm transition inline-flex items-center gap-2`
- **Secondary Button:** `bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 rounded-xl px-5 py-2.5 font-medium shadow-sm transition inline-flex items-center gap-2`

---

## 3. Directory Structure
portfolio/
├── app/
│   ├── layout.tsx              # Root HTML (scroll-smooth) + Floating BackToTop
│   ├── page.tsx                # Single-page utama merangkum seluruh section
│   └── globals.css
├── components/
│   ├── Navbar.tsx              # Floating Pill Navbar (Top Center) + Scroll-Spy
│   ├── BackToTop.tsx           # Floating circular button (Bottom Right)
│   └── sections/
│       ├── HeroSection.tsx     # id="home"
│       ├── AboutSection.tsx    # id="about" (Profile 2x3 cards + tags + CV buttons)
│       ├── ExperienceSection.tsx # id="experience" (Sub-tabs: Work, Education, Achievements)
│       ├── ProjectsSection.tsx # id="projects" (Filter tabs + Card with metrics)
│       ├── SkillsSection.tsx   # id="skills" (Tools & Tech categories)
│       ├── TestimonialsSection.tsx # id="testimonials" (Opsional / Review)
│       └── ContactSection.tsx  # id="contact" (Contact cards + Form)
├── data/
│   ├── profile.ts              # Data diri, biodata 2x3, bio
│   ├── experience.ts           # Data Work Experience, Education, Achievements
│   ├── projects.ts             # Data projects dengan kategori filter & metrics
│   └── skills.ts               # Data technical tools & categories
├── tailwind.config.ts
└── instruction.md

## 4. Component Details & Interactive Behavior
A. Floating Pill Navbar (components/Navbar.tsx)
Positioning: fixed top-6 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[95vw]

Container Pill: flex items-center gap-1 p-1.5 bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-lg shadow-slate-200/50 rounded-full

Items:

Home (#home) — Icon: Home

About (#about) — Icon: User

Experience (#experience) — Icon: Briefcase

Projects (#projects) — Icon: FolderGit2

Skills (#skills) — Icon: Code2

Testimonials (#testimonials) — Icon: MessageSquareQuote

Contact (#contact) — Icon: Mail

Active Tab Styling: bg-slate-900 text-white rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium shadow-sm flex items-center gap-1.5 transition

Inactive Tab Styling: text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium flex items-center gap-1.5 transition

Scroll-Spy: Gunakan IntersectionObserver untuk mengubah tab aktif secara otomatis saat halaman di-scroll.

B. Hero Section (#home)
Layout: 2 Kolom responsif (grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-28 pb-16).

Sisi Kiri (lg:col-span-7):

Pill Badge: [• Available for freelance work] (dot hijau berdenyut).

Headline Utama: Hi, I'm Ahmad Fauzan Ash Shidiq (text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight).

Subtitle Dinamis: Data Analyst| dengan efek blinking cursor text.

Bio Text: Ringkasan 2–3 kalimat fokus data problem-solving dan business impact.

Quick Badges Row:

Chip 1: [MapPin] Surabaya, Indonesia

Chip 2: [Calendar] Available Now

Action Buttons:

Primary: [FolderKanban] View Projects -> (Link ke #projects)

Secondary: [Mail] Let's Work Together (Link ke #contact)

Follow Me: Teks Follow me: diikuti ikon interaktif LinkedIn, GitHub, Twitter/X, Instagram.

Sisi Kanan (lg:col-span-5):

Frame Foto Portrait: Rounded rectangle rounded-3xl shadow-xl border-4 border-white aspect-[4/5] object-cover overflow-hidden max-w-sm mx-auto.

C. About Me Section (#about)
Section Header: Judul "About Me" besar di tengah, dengan sub-kalimat "Passionate about turning raw data into strategic business solutions".

Layout: 2 Kolom:

Kiri: Foto portrait kedua dengan sudut melengkung rounded-3xl.

Kanan (Kartu Detail Putih):

Sapaan "Hello There!" (text-2xl font-bold text-slate-900).

Paragraf deskripsi tentang background teknis analisis data.

Grid 2x3 Kartu Info Mini:

[User] Nama: Ahmad Fauzan Ash Shidiq

[MapPin] Domisili: Surabaya, Indonesia

[GraduationCap] Pendidikan: D4 Game Technology - PENS

[Mail] Email: fauzan@example.com

[Phone] Phone: +62 812-xxxx-xxxx

[Briefcase] Status: Available for Work

Section "Interests & Focus": Deretan chips tag: Data Analysis, SQL Querying, Power BI & Tableau, Advanced Excel, Python EDA, Business Intelligence.

Action Buttons: [Download My CV] (Primary hitam) dan [Hire Me Now] (Secondary putih).

D. Experience Section (#experience)
Section Header: "My Experience", sub-kalimat "A journey through my professional growth, education, and achievements".

Segmented Sub-Tabs: Kontrol tab berlatar abu-abu tipis bg-slate-100 p-1 rounded-xl inline-flex gap-2 mb-8:

[Briefcase] Work Experience

[GraduationCap] Education

[Trophy] Achievements

State Management: Berpindah konten secara dinamis berbasis state React (activeTab):

Tab Work Experience:

Kartu putih timeline berisi: Role/Jabatan, Nama Perusahaan/Instansi, Lokasi, Periode Waktu, Paragraf deskripsi tugas, dan Tech Stack Badges (SQL, Power BI, Excel, Python).

Tab Education:

Kartu pendidikan tinggi (PENS) dengan GPA, periode tahun, deskripsi studi data/PCG, dan Coursework Tags.

Tab Achievements (Certificates):

Kartu sertifikasi (IBM SkillsBuild, Hacktiv8, DQLab, Dicoding) dengan kredensial verifikasi.

E. Projects Section (#projects)
Section Header: "Projects", sub-kalimat "A showcase of my data analytics dashboards, SQL models, and business intelligence projects".

Filter Category Tabs: Tombol filter pil di atas grid: [All], [BI & Dashboards], [SQL & Analytics], [Exploratory Data].

Project Card Components:

Header Kartu: Ikon proyek + Judul tebal + Badge Featured (kuning/emas muda).

Info Kanan: Tanggal/Periode + Status Chip (misal: Completed atau Active Development).

Deskripsi Proyek: Ringkasan masalah bisnis & solusi data.

Metrics / Stats Row: Deretan angka hasil proyek (misal: 50K+ Rows Analyzed, 5+ Interactive Visuals, 15% Efficiency Boost).

Tech Chips: Power BI, PostgreSQL, Excel DAX, Python.

Dual Action Buttons: [Code] (Link GitHub) dan [Demo] (Link Live Dashboard / Tableau / Medium).

F. Skills Section (#skills)
Grid kartu keahlian teknis terbagi rapi: Database & Querying (SQL), Business Intelligence & Viz (Power BI, Tableau, Excel), Programming & Scripting (Python, Pandas), serta Problem Solving.

G. Contact Section (#contact)
2 Kolom:

Kiri: Kartu kontak langsung (Email, WhatsApp, Domisili, Medsos).

Kanan: Formulir pesan minimalis putih bersih dengan tombol submit hitam solid.

H. Back to Top Button (components/BackToTop.tsx)
Floating circular button fixed bottom-6 right-6 z-40 w-11 h-11 bg-slate-900 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-slate-800 transition.

Muncul otomatis jika posisi scroll halaman > 300px.

## 5. Implementation Rules
Jangan membuat routing sub-folder. Pertahankan model Single-Page Application (SPA) di app/page.tsx.

Gunakan className="scroll-smooth" pada elemen <html>.

Seluruh data (profil, experience, education, achievements, projects, skills) disimpan secara rapi di folder /data/.