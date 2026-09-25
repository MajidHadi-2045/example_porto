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
  role: "Full-Stack Web Developer & AI Enthusiast",
  subRole: "Electrical Engineering Graduate · SKPI Unggul",
  education: "S1 Teknik Elektro, Universitas Lampung",
  skpiBadge: "Predikat SKPI Unggul (High Honor)",
  email: "majidsolihin.h.22@gmail.com",
  location: "Bandar Lampung, Indonesia",
  coordinates: "5.3971° S, 105.2668° E",
  photoUrl: "", // Isi dengan path gambar di public/ (misal "/foto.jpg") kapan saja
  status: "OPEN FOR OPPORTUNITIES",
  bio: "Insinyur perangkat lunak dengan latar belakang kuat di bidang Teknik Elektro Universitas Lampung. Menjembatani presisi logika perangkat keras (*hardware architecture*) dengan keanggunan serta skalabilitas sistem *full-stack web* dan *AI workflow* modern berkinerja tinggi.",
  philosophy: "Sistem yang tangguh tidak lahir secara kebetulan; ia dibangun di atas pemahaman mendalam tentang arus data, efisiensi memori, dan antarmuka yang memanusiakan teknologi.",
  marqueeItems: [
    "MAJID SOLIHIN HADI",
    "S1 TEKNIK ELEKTRO UNILA",
    "PREDIKAT SKPI UNGGUL",
    "FULL-STACK WEB ARCHITECT",
    "AI & DISTRIBUTED SYSTEMS",
    "KRTI NATIONAL FINALIST",
  ],
};

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Lead Facilitator & Mentor",
    company: "Coding Camp by DBS Foundation",
    location: "Remote / Indonesia",
    period: "Feb 2026 — Jun 2026",
    badge: "Leadership & Education",
    description:
      "Memimpin dan memfasilitasi program pelatihan intensif untuk mencetak Full-Stack Web Developer berstandar industri dengan kurikulum modern.",
    impacts: [
      "Membimbing puluhan peserta dalam penguasaan ekosistem React, Next.js, Node.js, dan RESTful architecture.",
      "Melakukan code review ketat berstandar industri, memastikan penerapan Clean Code dan Type-Safety.",
      "Meningkatkan tingkat kelulusan proyek akhir peserta melalui sesi live debugging dan arsitektur sistem.",
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "REST APIs", "Code Review"],
  },
  {
    id: "exp-2",
    role: "Telecommunication Lab Assistant",
    company: "Universitas Lampung",
    location: "Bandar Lampung, Indonesia",
    period: "Feb 2025 — Feb 2026",
    badge: "Academic & Research",
    description:
      "Mendampingi mahasiswa Teknik Elektro dalam operasional, modul praktikum, dan eksperimen laboratorium sistem transmisi & telekomunikasi.",
    impacts: [
      "Mengawasi jalannya praktikum modul pemrosesan sinyal digital dan transmisi gelombang radio.",
      "Memelihara kalibrasi instrumen laboratorium seperti Spectrum Analyzer, Oscilloscope, dan Network Analyzer.",
      "Menyusun dokumentasi teknis dan panduan praktikum laboratorium yang komprehensif.",
    ],
    technologies: ["Digital Signal Processing", "Telecommunications", "MATLAB", "Hardware Diagnostics"],
  },
  {
    id: "exp-3",
    role: "Customer Service Assistant",
    company: "PT. TELKOM AKSES",
    location: "Kedaton, Bandar Lampung",
    period: "Jul 2025 — Agt 2025",
    badge: "Field Experience",
    description:
      "Menangani resolusi keluhan teknis pelanggan dan memastikan proses eskalasi layanan jaringan berjalan lancar di area Kedaton.",
    impacts: [
      "Mengakselerasi penyelesaian tiket keluhan teknis pelanggan jaringan IndiHome fiber optic.",
      "Berkoordinasi dengan tim teknisi lapangan untuk mitigasi gangguan jaringan secara real-time.",
    ],
    technologies: ["Customer Relations", "Network Troubleshooting", "Incident Escalation"],
  },
];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "KRTI UAV Telemetry & Ground Control System",
    category: "Robotics & IoT",
    year: "2024",
    summary:
      "Sistem pemantauan dan telemetri UAV real-time untuk Kontes Robot Terbang Indonesia (KRTI) 2024 Divisi LELA.",
    description:
      "Arsitektur ground control station yang menerima dan memvisualisasikan data telemetri (altitude, velocity, GPS coordinates, IMU attitude) secara real-time dari wahana drone menggunakan protokol transmisi serial latensi rendah.",
    impact:
      "Membawa Tim Robotika Unila lolos sebagai Finalis Tingkat Nasional KRTI 2024 Divisi Long Endurance Low Altitude (LELA).",
    tags: ["Embedded C++", "Python", "WebSockets", "IoT", "Telemetry", "Real-Time Systems"],
    metrics: [
      { label: "Data Latency", value: "< 45ms" },
      { label: "Pencapaian", value: "Finalis Nasional KRTI" },
    ],
  },
  {
    id: "proj-2",
    title: "AI-Augmented Cloud Microservice Platform",
    category: "AI & Cloud",
    year: "2026",
    summary:
      "Platform backend terdistribusi bertenaga AI dengan integrasi LLM reasoning, caching vector, dan autentikasi aman.",
    description:
      "Dibangun berdasarkan kurikulum tingkat lanjut Dicoding x Accenture. Mengimplementasikan pipelines AI untuk ekstraksi teks kontekstual, integrasi vector embeddings, dan microservices skalabel.",
    impact:
      "Meraih sertifikasi kelulusan dengan predikat tertinggi pada program React & Back-End With AI.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "AI APIs", "Docker", "AWS"],
    metrics: [
      { label: "Throughput", value: "99.8% Uptime" },
      { label: "Response", value: "Streaming SSE" },
    ],
  },
  {
    id: "proj-3",
    title: "Telecom Signal Analyzer & Simulation Suite",
    category: "Fullstack Web",
    year: "2025",
    summary:
      "Aplikasi web interaktif untuk visualisasi modulasi sinyal telekomunikasi dan analisis frekuensi.",
    description:
      "Alat bantu pembelajaran berbasis web yang memungkinkan mahasiswa laboratorium telekomunikasi mensimulasikan modulasi AM/FM/QAM serta filter noise secara visual langsung di browser.",
    impact:
      "Digunakan sebagai modul peraga bantu pada praktikum Sistem Telekomunikasi Jurusan Teknik Elektro Unila.",
    tags: ["TypeScript", "Canvas API", "Math.js", "Tailwind CSS", "Web Audio API"],
    metrics: [
      { label: "User Base", value: "100+ Mahasiswa" },
      { label: "Platform", value: "Web Native" },
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    categoryCode: "01 // FE",
    skills: [
      { name: "React & Next.js (App Router)", level: "Expert", note: "Server Components, SSR/SSG, Suspense" },
      { name: "TypeScript", level: "Advanced", note: "Strict Type Safety, Generic Architecture" },
      { name: "Tailwind CSS & CSS Tokens", level: "Expert", note: "Design Systems, Brutalist & Glassmorphic UI" },
      { name: "Framer Motion & Canvas", level: "Advanced", note: "Micro-interactions, 60fps animations" },
    ],
  },
  {
    title: "Backend & Systems",
    categoryCode: "02 // BE",
    skills: [
      { name: "Node.js & Express / Nest", level: "Advanced", note: "RESTful & Event-Driven Microservices" },
      { name: "Python", level: "Advanced", note: "Data processing, AI scripts, Automation" },
      { name: "PostgreSQL & Prisma ORM", level: "Advanced", note: "Relational Schemas, Index Optimization" },
      { name: "Redis & WebSockets", level: "Intermediate", note: "Pub/Sub, Low-Latency Realtime Feed" },
    ],
  },
  {
    title: "Cloud, DevOps & Hardware",
    categoryCode: "03 // INFRA",
    skills: [
      { name: "AWS Cloud Services", level: "Certified", note: "EC2, S3, IAM, Cloud Practitioner Essentials" },
      { name: "Docker & CI/CD Pipelines", level: "Intermediate", note: "Containerization, GitHub Actions" },
      { name: "Cybersecurity Basics", level: "Certified", note: "Cisco Networking & Security Fundamentals" },
      { name: "Embedded Systems & DSP", level: "Specialist", note: "C/C++, Arduino/ESP32, Telecomm Signal" },
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
    skills: ["Fullstack Architecture", "REST API", "Database Design", "Agile Workflow"],
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
    skills: ["Cloud Architecture", "AWS EC2 & S3", "IAM Security", "Billing & Optimization"],
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
  "Finalis Nasional KRTI 2024 (Divisi LELA)",
  "Tim Robotika Universitas Lampung",
  "Staf Himpunan Mahasiswa Teknik Elektro (HIMATRO)",
  "Penerima Predikat SKPI Unggul Unila",
];
