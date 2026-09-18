# Project Specification: Personal Data Analyst Portfolio

## 1. Project Overview & Tech Stack
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** `lucide-react`
- **Deployment Target:** Vercel
- **Design Philosophy:** Sleek Dark Minimalist (Zinc Theme), app-like feel, visual hierarchy berbasis problem-solving data.

---

## 2. Design System & Color Palette
Inspirasi estetika mengacu pada gaya dark minimalist modern (bukan pure black #000, melainkan charcoal/zinc bergradasi halus dengan border tipis 1px).

### Color Tokens (Tailwind)
- **Canvas / Background Utama:** `#09090b` (`bg-zinc-950`)
- **Card / Surface Container:** `#141417` (`bg-zinc-900/60` atau `bg-zinc-900/80`)
- **Border / Separator:** `#27272a` (`border-zinc-800` atau `border-zinc-800/80`)
- **Text Primary (Headings/Titles):** `#f4f4f5` (`text-zinc-100`)
- **Text Secondary (Body/Descriptions):** `#a1a1aa` (`text-zinc-400`)
- **Text Muted (Dates/Tags/Meta):** `#71717a` (`text-zinc-500`)
- **Accent Indicator:** `#22c55e` (`emerald-500` untuk available badge / live indicator)

---

## 3. Directory Structure
portfolio/
├── app/
│   ├── layout.tsx              # Root layout + Global container + FloatingNavbar
│   ├── page.tsx                # Tab "About Me" (Root / Default Landing)
│   ├── contact/
│   │   └── page.tsx            # Tab "Contact"
│   ├── experience/
│   │   └── page.tsx            # Tab "Work Experience"
│   ├── projects/
│   │   └── page.tsx            # Tab "Project Showcase"
│   └── certificate/
│       └── page.tsx            # Tab "Certificates"
├── components/
│   ├── FloatingNavbar.tsx      # Persistent bottom dock
│   ├── ProjectCard.tsx         # Modular card for showcase
│   ├── ExperienceItem.tsx      # Timeline/experience block
│   └── CertificateCard.tsx     # Grid card for certs
├── data/
│   ├── projects.ts             # Data mock/list for projects
│   ├── experience.ts           # Data mock/list for work history
│   └── certificates.ts         # Data mock/list for certifications
├── tailwind.config.ts
└── instruction.md
## 4. Navigation Bar Specification (FloatingNavbar.tsx)
Positioning: fixed bottom-6 left-1/2 -translate-x-1/2 z-50

Backdrop: bg-zinc-900/80 backdrop-blur-xl border border-zinc-800/80 shadow-2xl rounded-2xl

Susunan Tab (Strict Order):

Contact (/contact)

Experience (/experience)

About Me (/) -> Center / Default

Projects (/projects)

Certificate (/certificate)

Active State Behavior:

Tab aktif: bg-zinc-100 text-zinc-950 font-semibold shadow-md

Tab tidak aktif: text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60

Accessibility & UX: Single route navigation via Next.js Link and usePathname(). Tidak menutup konten karena layout.tsx diberi container pb-32.

## 5. Page Layout Specifications
A. About Me (app/page.tsx)
Layout: Grid 2 kolom di desktop (grid-cols-1 md:grid-cols-3 gap-6).

Left Column (Profile Box, span 1):

Foto profil lingkaran dengan border halus (w-32 h-32 rounded-full border-2 border-zinc-700).

Nama: Ahmad Fauzan Ash Shidiq (text-xl font-bold text-zinc-100).

Title: Data Analyst | Problem Solver | Tech Enthusiast.

Available Badge: Status dot hijau berkedip (bg-emerald-950/60 text-emerald-400 border border-emerald-800/50).

Short quote: Blockquote bergaris samping kiri.

Social Links: LinkedIn, GitHub, Instagram buttons.

Right Column (Main Details, span 2):

About Me Section: Paragraf fokus pada analisis data, pemecahan masalah bisnis, dan ekstraksi insight.

Education Section: Institusi, Gelar/Jurusan, GPA, Periode tahun.

Core Competencies (Grid 2x3): 6 kartu keahlian (Data Analysis, SQL Database Management, Data Visualization, Leadership, Communication, Problem Solving).

B. Project Showcase (app/projects/page.tsx)
Layout: Responsive Grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6).

Project Card Structure:

Thumbnail visual / screenshot dashboard dengan aspek rasio 16:9 atau video/aspect rapi.

Badges Tech Stack (e.g., SQL, Power BI, Excel, Python) dengan styling chip: bg-zinc-800 text-zinc-300 text-xs px-2 py-0.5 rounded.

Judul Proyek: Bold, max 2 baris.

Deskripsi singkat: 2–3 kalimat fokus masalah bisnis & hasil.

Dual Action CTA Button di footer kartu:

Button "View Dashboard" (Tautan live / Power BI / Tableau).

Button "Medium / Case Study" (Tautan dokumentasi lengkap).

C. Work Experience (app/experience/page.tsx)
Layout: Single column stacked cards / vertical timeline.

Setiap Item Berisi:

Logo perusahaan / Placeholder avatar.

Role / Jabatan (e.g., Data Analyst Intern).

Nama Perusahaan & Periode Tanggal (e.g., Jan 2025 - Jul 2025).

Bullet Points dengan format Action-Oriented: Action Verb + Task + Business Impact.

D. Certificates (app/certificate/page.tsx)
Layout: Grid kartu sertifikasi (grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4).

Kartu Sertifikat:

Gambar/Preview sertifikat.

Judul Sertifikasi (e.g., Data Science Fundamentals, SQL Fundamentals, IBM AI Agent).

Penerbit (e.g., DQLab, Dicoding, IBM SkillsBuild).

Tahun terbit + Tombol/Link verifikasi credential.

E. Contact (app/contact/page.tsx)
Layout: 2 Kolom (grid-cols-1 md:grid-cols-2 gap-8).

Kolom Kiri (Direct Info): Info Email, WhatsApp, Domisili (Surabaya/Indonesia), dan Social Media buttons.

Kolom Kanan (Form Mockup/Functional): Input Name, Input Email, Input Subject, Textarea Message, dan Tombol "Send Message".

## 6. Implementation Guardrails
Separation of Concerns: Jangan hardcode isi proyek langsung di file JSX projects/page.tsx. Buat typed array di data/projects.ts lalu mapping di halaman tersebut.

Typography: Gunakan font inter atau font sans bawaan Next.js dengan utility tracking-tight pada judul untuk kesan minimalis modern.

Container Limits: Batasi lebar maksimum container utama pada max-w-5xl mx-auto px-4 sm:px-6.