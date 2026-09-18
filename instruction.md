# Project Specification: Single-Page Data Analyst Portfolio

## 1. Project Overview & Architecture
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** `lucide-react`
- **Deployment Target:** Vercel
- **Architecture Model:** Single-Page Application (SPA) with Smooth Scrolling. Seluruh konten berada di satu halaman utama (`app/page.tsx`), dan navigasi berpindah menggunakan *anchor links* (`#id`) dengan bantuan `IntersectionObserver` untuk deteksi status aktif (*scroll-spy*).

---

## 2. Design System & Zinc Color Tokens
Estetika visual mengusung gaya **Dark Minimalist (Sleek Zinc)**. Hindari hitam pekat murni (`#000000`), gunakan variasi shade abu-abu arang (*zinc*) dengan kontras tinggi dan border tipis 1px.

- **Canvas / Background Utama:** `#09090b` (`bg-zinc-950`)
- **Card / Surface Container:** `#121215` atau `#18181b` (`bg-zinc-900/60` sampai `bg-zinc-900/90`)
- **Border / Separator:** `#27272a` (`border-zinc-800` atau `border-zinc-800/80`)
- **Text Primary (Headings/Titles):** `#f4f4f5` (`text-zinc-100`)
- **Text Secondary (Body/Descriptions):** `#a1a1aa` (`text-zinc-400`)
- **Text Muted (Dates/Tags/Meta):** `#71717a` (`text-zinc-500`)
- **Accent Indicator:** `#22c55e` (`emerald-500` untuk available badge & live indicator)

---

## 3. Directory Structure
portfolio/
├── app/
│   ├── layout.tsx              # Root layout (scroll-smooth, font, metadata)
│   ├── page.tsx                # Single Page (merangkum semua section ber-ID)
│   └── globals.css             # Konfigurasi Tailwind & base styling
├── components/
│   ├── FloatingNavbar.tsx      # Persistent bottom dock + scroll-spy logic
│   ├── sections/
│   │   ├── AboutSection.tsx    # Section #home (Profile, Education, Skills)
│   │   ├── ExperienceSection.tsx # Section #experience
│   │   ├── ProjectsSection.tsx # Section #projects
│   │   ├── CertificatesSection.tsx # Section #certificate
│   │   └── ContactSection.tsx  # Section #contact
│   ├── ProjectCard.tsx         # Card komponen proyek showcase
│   ├── ExperienceItem.tsx      # Card item pengalaman kerja
│   └── CertificateCard.tsx     # Card item sertifikasi
├── data/
│   ├── projects.ts             # Typed array data proyek data analyst
│   ├── experience.ts           # Typed array riwayat pengalaman kerja
│   └── certificates.ts         # Typed array data sertifikat
├── tailwind.config.ts
└── instruction.md

## 4. Navigation Bar Specification (FloatingNavbar.tsx)
Positioning: fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[95vw]

Container Styling: bg-zinc-900/80 backdrop-blur-xl border border-zinc-800/80 shadow-2xl rounded-2xl p-2

Susunan Tombol (Strict Layout Order):

Contact (href="#contact")

Experience (href="#experience")

About Me (href="#home") -> Posisi Tengah

Projects (href="#projects")

Certificate (href="#certificate")

Scroll-Spy Mechanism:

Gunakan IntersectionObserver di sisi client ('use client') untuk memantau elemen #home, #experience, #projects, #certificate, dan #contact.

Update state activeSection saat elemen terkait masuk ke dalam viewport (threshold ~0.35).

Styling State:

Aktif: bg-zinc-100 text-zinc-950 font-semibold shadow-md

Tidak Aktif: text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60

Tombol tengah ('About Me') saat tidak aktif dapat diberi aksen pembeda halus: bg-zinc-800/40 text-zinc-200.

## 5. Layout & Section Specifications
Pastikan setiap <section> memiliki atribut id yang sesuai dan class scroll-mt-20 atau scroll-mt-24 agar saat navigasi diklik, judul section tidak terpotong oleh batas atas layar browser.

A. Section #home (About Me & Profile)
Grid Layout: 2 Kolom responsif desktop (grid grid-cols-1 md:grid-cols-3 gap-6).

Kolom Kiri (Profile Summary, span 1):

Foto profil bulat (w-32 h-32 rounded-full border-2 border-zinc-700 mx-auto).

Nama: Ahmad Fauzan Ash Shidiq (text-xl font-bold text-zinc-100).

Title: Data Analyst | Problem Solver | Tech Enthusiast.

Available Badge: Status dot hijau berkedip (bg-emerald-950/60 text-emerald-400 border border-emerald-800/50 rounded-full px-3 py-1 text-xs).

Short quote: Blockquote bergaris border kiri tipis.

Social Links: Tombol LinkedIn, GitHub, Instagram.

Kolom Kanan (Details & Competencies, span 2):

About Me: Deskripsi fokus pemecahan masalah bisnis lewat data dan visualisasi insight.

Education: Nama Institusi, Gelar/Program Studi, GPA, Periode Tahun.

Core Competencies (Grid 2x3): 6 kartu keahlian (Data Analysis, SQL Database Management, Data Visualization, Leadership & Mentorship, Effective Communication, Problem Solving).

B. Section #experience (Work Experience)
Struktur: Single column stacked layout / vertical cards timeline.

Isi Card:

Logo/Placeholder entitas.

Role/Jabatan, Nama Instansi/Perusahaan, Periode Waktu.

Bullet Points tugas & pencapaian terukur (Action Verb + Task + Quantifiable Impact).

C. Section #projects (Project Showcase)
Struktur: Responsive Grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6).

Isi Project Card:

Thumbnail rasio 16:9 (preview dashboard/visualisasi).

Tech stack tags/chips (e.g., SQL, Power BI, Excel, Python).

Judul proyek (maksimal 2 baris, tebal).

Deskripsi ringkas (masalah bisnis & insight utama).

Dual Action Buttons:

Tombol "View Dashboard" (Tautan live dashboard/visualisasi).

Tombol "Read Article / Case Study" (Tautan Medium/GitHub/Dokumentasi).

D. Section #certificate (Certificates)
Struktur: Responsive Grid (grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4).

Isi Card:

Thumbnail gambar/preview sertifikat.

Judul sertifikat, nama penerbit (e.g., DQLab, Dicoding, IBM), dan tahun penerbitan.

Tautan verifikasi sertifikat.

E. Section #contact (Let's Connect)
Grid Layout: 2 Kolom (grid-cols-1 md:grid-cols-2 gap-8).

Kolom Kiri: Informasi langsung (Email, WhatsApp, Domisili, dan Tautan Media Sosial).

Kolom Kanan: Form input pesan (Nama, Email, Subjek, Pesan, dan Tombol Kirim).

## 6. Global Layout Configuration (app/layout.tsx)
Wajib menyertakan className="scroll-smooth" pada elemen <html>.

Bungkus konten utama dalam container terpusat: <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 pb-36">.

Padding bawah (pb-36) wajib ada agar floating navbar tidak menutupi form kontak atau footer.

## 7. Implementation Rules for AI Agent
Pemisahan Data: Seluruh isi proyek, pengalaman, dan sertifikat harus diimpor dari file terpisah di folder /data/. Dilarang melakukan hardcode isi list langsung di dalam JSX section.

Strict Single Page: Jangan membuat sub-folder rute seperti app/projects/page.tsx atau app/contact/page.tsx. Satukan seluruh section di app/page.tsx.

Responsiveness: Pastikan floating navbar tetap proporsional dan tidak terpotong di layar smartphone dengan menggunakan utility whitespace-nowrap, padding adaptif (px-3 py-2 sm:px-5 sm:py-2.5), dan teks text-xs sm:text-sm.