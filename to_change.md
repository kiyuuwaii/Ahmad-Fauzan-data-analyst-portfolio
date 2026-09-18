1. Menambah / Mengubah Proyek (Projects)
Buka file 
data/projects.ts
.

Untuk menambah proyek baru, cukup tambahkan objek baru ke dalam array projects:

typescript


{
  id: "4", // id unik
  title: "Judul Proyek Kamu",
  description: "Penjelasan singkat masalah bisnis yang diselesaikan dan insight yang didapat.",
  thumbnail: "https://url-gambar-atau-dashboard.com/gambar.png", // atau letakkan di folder /public
  stack: ["Python", "SQL", "Tableau"], // tools yang digunakan
  liveLink: "https://link-dashboard-kamu.com", // opsional
  caseStudyLink: "https://medium.com/@username/judul-artikel", // opsional
},
2. Menambah / Mengubah Pengalaman Kerja (Work Experience)
Buka file 
data/experience.ts
.

Tambahkan pengalaman baru di dalam array experiences:

typescript


{
  id: "3",
  role: "Data Analyst",
  company: "Nama Perusahaan",
  period: "Agu 2025 - Sekarang",
  logoInitial: "NP", // 2 huruf inisial logo
  achievements: [
    "Mengembangkan dashboard KPI harian yang menghemat waktu reporting tim sebesar 30%.",
    "Melakukan analisis regresi untuk memprediksi churn rate pelanggan.",
  ]
},
3. Menambah / Mengubah Sertifikat
Buka file 
data/certificates.ts
.

Tambahkan sertifikat baru di dalam array certificates:

typescript


{
  id: "5",
  title: "Nama Sertifikasi",
  issuer: "Penerbit (misal: Coursera / Dicoding)",
  year: "2025",
  image: "https://url-preview-sertifikat.com/img.jpg",
  verifyLink: "https://link-verifikasi-kredensial.com",
},
4. Mengubah Biodata Pribadi, Pendidikan & Skill ("About Me")
Buka file 
app/page.tsx
:

Nama, Title, & Quote: Cari teks "Ahmad Fauzan Ash Shidiq", deskripsi role, dan quote untuk diganti langsung.
Foto Profil: Ganti URL gambar di bagian <Image src="..." ... />.
Pendidikan: Cari bagian <section> Education untuk mengubah nama Universitas, Jurusan, GPA, dan Tahun.
Core Competencies (Daftar Skill): Di baris 6–13, ubah array skills:
typescript


const skills = [
  "Data Analysis",
  "SQL Database Management",
  "Data Visualization",
  "Machine Learning", // tinggal tambah atau ubah teksnya
];
5. Mengubah Kontak & Media Sosial
Buka file 
app/contact/page.tsx
:

Ganti email: mailto:hello@example.com
Ganti nomor WhatsApp: tel:+6281234567890
Ganti domisili / kota lokasi
Masukkan URL profil kamu pada tombol LinkedIn, GitHub, dan Instagram (href="#" diganti URL profilmu).
💡 Tips Menaruh Foto Lokal Sendiri (Offline):
Jika kamu punya file foto sendiri (misal profile.jpg atau dashboard1.png):

Masukkan file tersebut ke dalam folder public/ (contoh: public/profile.jpg).
Di file data atau komponen, cukup panggil jalurnya langsung:
typescript


thumbnail: "/dashboard1.png"