export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  badge: string;
  description: string;
  impacts: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  category: "Robotics & IoT" | "AI & Cloud" | "Fullstack Web";
  year: string;
  summary: string;
  description: string;
  impact: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  metrics?: { label: string; value: string }[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  badgeText: string;
  badgeBg: string;
  badgeColor: string;
  credentialId: string;
  skills: string[];
  credentialUrl?: string;
}

export interface SkillCategory {
  title: string;
  categoryCode: string;
  skills: { name: string; level: string; note: string }[];
}

export const personalInfo = {
  name: "Majid Solihin Hadi",
  initials: "M.S.H.",
  signature: "Majid. S. Hadi",
  role: "Full-Stack Web Developer & AI Specialist",
  subRole: "S1 Teknik Elektro · Universitas Lampung",
  education: "S1 Teknik Elektro, Universitas Lampung",
  skpiBadge: "Predikat SKPI Unggul",
  email: "majidsolihin.h.22@gmail.com",
  location: "Bandar Lampung, Indonesia",
  photoUrl: "", // Isi dengan path gambar di public/ (misal "/foto.jpg") kapan saja
  status: "TERSEDIA UNTUK KOLABORASI PROFESIONAL",
  bio: "Full-Stack Developer berlatar belakang S1 Teknik Elektro Universitas Lampung dengan predikat SKPI Unggul. Mengintegrasikan pendekatan rekayasa sistem yang terukur dengan praktik terbaik pengembangan web modern untuk membangun aplikasi yang andal, scalable, dan berkinerja tinggi.",
  philosophy: "Perangkat lunak yang unggul memadukan keandalan arsitektur, efisiensi komputasi, dan pengalaman pengguna yang presisi untuk menghadirkan nilai nyata.",
  marqueeItems: [
    "MAJID SOLIHIN HADI",
    "S1 TEKNIK ELEKTRO UNILA",
    "PREDIKAT SKPI UNGGUL",
    "FULL-STACK WEB DEVELOPER",
    "APPLIED AI SPECIALIST",
    "FINALIS NASIONAL KRTI 2024",
  ],
};

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Lead Facilitator & Technical Mentor",
    company: "Coding Camp by DBS Foundation",
    location: "Remote / Indonesia",
    period: "Feb 2026 — Jun 2026",
    badge: "Technical Mentorship",
    description:
      "Memimpin program pelatihan intensif pengembangan web full-stack, membimbing peserta dalam menguasai standar industri berbasis React, Next.js, dan Node.js.",
    impacts: [
      "Mengorkestrasikan kurikulum full-stack modern dan mendampingi puluhan calon developer.",
      "Melakukan evaluasi dan code review berkala untuk menegakkan standar Clean Code, modularitas, dan type-safety.",
      "Mengawal penyelesaian proyek akhir berskala produksi hingga siap digunakan.",
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "REST Architecture", "Code Review"],
  },
  {
    id: "exp-2",
    role: "Telecommunication Laboratory Assistant",
    company: "Universitas Lampung",
    location: "Bandar Lampung, Indonesia",
    period: "Feb 2025 — Feb 2026",
    badge: "Academic & Laboratory",
    description:
      "Mengelola operasional praktikum laboratorium, memfasilitasi pemahaman mahasiswa terkait sistem telekomunikasi, transmisi gelombang, dan pemrosesan sinyal digital.",
    impacts: [
      "Memandu praktikum laboratorium untuk puluhan mahasiswa Teknik Elektro setiap semester.",
      "Mengoperasikan serta memelihara instrumen presisi tinggi seperti Spectrum Analyzer dan Digital Oscilloscope.",
      "Menyempurnakan modul panduan teknis praktikum agar selaras dengan perkembangan industri telekomunikasi.",
    ],
    technologies: ["Digital Signal Processing", "Telecommunications", "MATLAB", "System Calibration"],
  },
  {
    id: "exp-3",
    role: "Customer Service & Technical Support Assistant",
    company: "PT. TELKOM AKSES",
    location: "Kedaton, Bandar Lampung",
    period: "Jul 2025 — Agt 2025",
    badge: "Technical Operations",
    description:
      "Menangani analisis keluhan teknis pelanggan jaringan serat optik (fiber optic) dan mengoordinasikan eskalasi penyelesaian bersama tim teknisi lapangan.",
    impacts: [
      "Mengakselerasi proses mitigasi dan penyelesaian tiket gangguan jaringan pelanggan.",
      "Membangun alur komunikasi teknis yang efektif antara pelanggan dan teknisi lapangan di area Kedaton.",
    ],
    technologies: ["Fiber Optic Troubleshooting", "Incident Management", "Technical Support"],
  },
];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Sistem Telemetri & Ground Control Station UAV",
    category: "Robotics & IoT",
    year: "2024",
    summary:
      "Arsitektur stasiun kendali darat (GCS) dan pemantauan data telemetri wahana udara nirawak (UAV) secara real-time.",
    description:
      "Dirancang untuk Kontes Robot Terbang Indonesia (KRTI) 2024. Sistem ini memproses dan memvisualisasikan data sensor (altitude, GPS, IMU, velocity) secara real-time dengan latensi rendah melalui protokol serial terenkripsi.",
    impact:
      "Mengantarkan Tim Robotika Universitas Lampung lolos sebagai Finalis Tingkat Nasional KRTI 2024 Divisi Long Endurance Low Altitude (LELA).",
    tags: ["Embedded C++", "Python", "WebSockets", "IoT", "Telemetry", "Real-Time Systems"],
    metrics: [
      { label: "Latensi Komunikasi", value: "< 45ms" },
      { label: "Pencapaian", value: "Finalis Nasional KRTI" },
    ],
  },
  {
    id: "proj-2",
    title: "Platform Web & Backend Terintegrasi AI",
    category: "AI & Cloud",
    year: "2026",
    summary:
      "Aplikasi full-stack dengan arsitektur microservices dan integrasi model AI untuk automasi pemrosesan data.",
    description:
      "Dikembangkan dalam program Dicoding x Accenture. Mengintegrasikan API kecerdasan buatan untuk analisis konten kontekstual, manajemen session terenkripsi, dan optimasi database relasional PostgreSQL.",
    impact:
      "Meraih predikat kelulusan terbaik pada program sertifikasi React & Back-End With AI.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "AI APIs", "Docker", "AWS"],
    metrics: [
      { label: "Ketersediaan Sistem", value: "99.8% Uptime" },
      { label: "Protokol Data", value: "Server-Sent Events" },
    ],
  },
  {
    id: "proj-3",
    title: "Simulator Sinyal & Modulasi Telekomunikasi",
    category: "Fullstack Web",
    year: "2025",
    summary:
      "Aplikasi berbasis web untuk analisis frekuensi, visualisasi spektrum, dan simulasi modulasi sinyal telekomunikasi.",
    description:
      "Memungkinkan mahasiswa dan praktisi melakukan simulasi pemrosesan sinyal (AM, FM, filter noise) secara interaktif langsung melalui browser tanpa memerlukan software desktop berbayar.",
    impact:
      "Diadopsi sebagai media peraga praktikum resmi di Laboratorium Telekomunikasi Jurusan Teknik Elektro Unila.",
    tags: ["TypeScript", "Canvas API", "Math.js", "Tailwind CSS", "Web Audio API"],
    metrics: [
      { label: "Pengguna Aktif", value: "100+ Mahasiswa" },
      { label: "Platform", value: "Web Native" },
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    categoryCode: "01 // FRONTEND",
    skills: [
      { name: "React & Next.js", level: "Lanjutan", note: "App Router, SSR/SSG, Server Components" },
      { name: "TypeScript", level: "Lanjutan", note: "Strict Type Safety, Desain Pola Modular" },
      { name: "Tailwind CSS & UI Systems", level: "Lanjutan", note: "Design Tokens, Antarmuka Responsif" },
      { name: "Framer Motion", level: "Menengah", note: "Transisi Interaktif & Mikro-animasi" },
    ],
  },
  {
    title: "Backend & Systems",
    categoryCode: "02 // BACKEND",
    skills: [
      { name: "Node.js & Express", level: "Lanjutan", note: "RESTful API, Middleware, Autentikasi JWT" },
      { name: "Python", level: "Menengah", note: "Pemrosesan Data, Skrip Automasi, Integrasi AI" },
      { name: "PostgreSQL & Prisma ORM", level: "Lanjutan", note: "Skema Relasional & Optimasi Query" },
      { name: "Redis & WebSockets", level: "Menengah", note: "Caching & Komunikasi Data Real-Time" },
    ],
  },
  {
    title: "Cloud, Tools & Hardware",
    categoryCode: "03 // INFRA & HARDWARE",
    skills: [
      { name: "AWS Cloud Infrastructure", level: "Tersertifikasi", note: "EC2, S3, IAM, Cloud Practitioner" },
      { name: "Git & CI/CD Pipelines", level: "Lanjutan", note: "Branching Strategy, Version Control" },
      { name: "Cybersecurity Fundamentals", level: "Tersertifikasi", note: "Cisco Networking & Security Protocols" },
      { name: "Embedded Systems & DSP", level: "Keahlian Elektro", note: "C/C++, Arduino, Pemrosesan Sinyal" },
    ],
  },
];

export const certificates: Certificate[] = [
  {
    id: "cert-1",
    title: "React & Back-End With AI",
    issuer: "Dicoding x Accenture",
    year: "2026",
    badgeText: "DICODING × ACCENTURE",
    badgeBg: "#0F0F0F",
    badgeColor: "#E64833",
    credentialId: "DICODING-AI-2026-988",
    skills: ["React", "AI Integration", "Backend Microservices", "Cloud Deployment"],
  },
  {
    id: "cert-2",
    title: "Full-Stack Web Developer",
    issuer: "Coding Camp by DBS Foundation",
    year: "2025",
    badgeText: "DBS FOUNDATION",
    badgeBg: "#EFEBE0",
    badgeColor: "#0F0F0F",
    credentialId: "DBS-CAMP-FS-2025",
    skills: ["Fullstack Architecture", "RESTful API", "Database Design", "Project Management"],
  },
  {
    id: "cert-3",
    title: "Cloud Practitioner Essentials",
    issuer: "AWS (Amazon Web Services)",
    year: "2025",
    badgeText: "AWS CERTIFIED",
    badgeBg: "#E64833",
    badgeColor: "#FFFFFF",
    credentialId: "AWS-CPE-2025-019",
    skills: ["Cloud Architecture", "AWS EC2 & S3", "IAM Security", "Cost Optimization"],
  },
  {
    id: "cert-4",
    title: "Cybersecurity & Ethical Hacker",
    issuer: "Cisco Networking Academy",
    year: "2024",
    badgeText: "CISCO NETACAD",
    badgeBg: "#0F0F0F",
    badgeColor: "#38BDF8",
    credentialId: "CISCO-SEC-2024-441",
    skills: ["Network Security", "Threat Analysis", "Packet Inspection", "Cryptography"],
  },
];

export const extraAchievements: string[] = [
  "Finalis Tingkat Nasional KRTI 2024 (Divisi LELA)",
  "Tim Robotika Universitas Lampung",
  "Staf Himpunan Mahasiswa Teknik Elektro (HIMATRO)",
  "Penerima Predikat SKPI Unggul Universitas Lampung",
];
