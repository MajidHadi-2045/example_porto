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
  credentialUrl?: string; // Link ke halaman verifikasi / sertifikat online
  imageUrl?: string;      // URL atau path lokal gambar sertifikat (misal: "/sertifikat1.jpg" di public folder)
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
  photoUrl: "/profil.jfif",
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
    company: "Coding Camp powered by DBS Foundation",
    location: "Remote / Indonesia",
    period: "Feb 2026 — Jun 2026",
    badge: "Leader & Facilitator",
    description:
      "Sebagai Fasilitator sekaligus Koordinator Fasilitator Full-Stack Web Developer, memandu konsultasi teknis & non-teknis, bimbingan proaktif, serta mendorong kelulusan peserta tepat waktu.",
    impacts: [
      "Memandu 16 sesi konsultasi mingguan teknis & non-teknis (rating 4,78/5,00) serta 15 sesi ILT (rating 4,83/5,00).",
      "Memberikan bimbingan proaktif untuk memotivasi peserta binaan menguasai materi Full-Stack Web Development.",
      "Berkontribusi langsung mendorong tercapainya 88% tingkat kelulusan program tepat waktu.",
    ],
    technologies: ["Mentoring", "Web Development", "Full-Stack Web", "Code Review", "Leadership"],
  },
  {
    id: "exp-2",
    role: "Asah Led by Dicoding - Graduate",
    company: "Dicoding Indonesia",
    location: "Remote / Indonesia",
    period: "Agt 2025 — Des 2025",
    badge: "Fellowship Program",
    description:
      "Menyelesaikan program pelatihan intensif pengembangan aplikasi web & mobile berbasis React Native dan React.js yang diprakarsai oleh Dicoding.",
    impacts: [
      "Menguasai arsitektur React Native & React.js untuk pengembangan aplikasi cross-platform modern.",
      "Membangun proyek aplikasi web dan mobile dengan menerapkan standar Clean Code dan responsivitas tinggi.",
      "Lulus program dengan menyelesaikan seluruh kriteria kualifikasi dan proyek praktis tepat waktu.",
    ],
    technologies: ["React Native", "React.js", "JavaScript", "Mobile App", "Web Development"],
  },
  {
    id: "exp-3",
    role: "Customer Service Area Assistant",
    company: "PT. TELKOM AKSES",
    location: "Kedaton, Bandar Lampung",
    period: "Jul 2025 — Agt 2025",
    badge: "Technical Internship",
    description:
      "Magang operasional pemeliharaan infrastruktur jaringan serat optik (FTTH) dan penanganan keluhan teknis pelanggan di area Kedaton.",
    impacts: [
      "Menganalisis & merawat kabinet telekomunikasi / rak server berisi perangkat jaringan serat optik (FTTH).",
      "Memahami pemetaan serta pengoperasian Splitter / Coupler jaringan serat optik.",
      "Mengoordinasikan alur penyelesaian kendala teknis antara pelanggan dan tim teknisi lapangan secara presisi.",
    ],
    technologies: ["Fiber Optic (FTTH)", "Network Cabinet", "Splitter/Coupler", "Service Area", "Customer Service"],
  },
  {
    id: "exp-4",
    role: "Coding Camp 2025 Graduate",
    company: "Coding Camp powered by DBS Foundation",
    location: "Remote / Indonesia",
    period: "Feb 2025 — Jul 2025",
    badge: "Best Graduate",
    description:
      "Menyelesaikan program pelatihan intensif Full-Stack Web Development dan berhasil meraih penghargaan sebagai Lulusan Terbaik (Best Graduate).",
    impacts: [
      "Dianugerahi predikat Lulusan Terbaik Coding Camp 2025 powered by DBS Foundation.",
      "Menguasai alur pengembangan web full-stack, desain web responsif, dan arsitektur backend RESTful.",
      "Menyelesaikan kelas sertifikasi 'English for Business Communication' dengan skor akhir 86%.",
    ],
    technologies: ["Full-Stack Web", "Web Development", "Responsive Design", "Business English"],
  },
  {
    id: "exp-5",
    role: "Telecommunication Laboratory Assistant",
    company: "Universitas Lampung",
    location: "Bandar Lampung, Indonesia",
    period: "Feb 2025 — Feb 2026",
    badge: "Academic & Laboratory",
    description:
      "Asisten praktikum mata kuliah Sistem Komunikasi (SISKOMSISKOM), memfasilitasi pemahaman mahasiswa dalam modulasi, sinyal, dan instrumen telekomunikasi.",
    impacts: [
      "Memandu praktikum Sistem Komunikasi (SISKOMSISKOM) untuk puluhan mahasiswa Teknik Elektro tiap semester.",
      "Mengoperasikan & merancang simulasi instrumen dengan Dashboard Node, MATLAB, dan Simulink.",
      "Membantu mahasiswa memahami pemrosesan sinyal digital dan pemodelan sistem transmisi gelombang.",
    ],
    technologies: ["MATLAB", "Simulink", "SISKOMSISKOM", "Node Dashboard", "Signal Processing"],
  },
  {
    id: "exp-6",
    role: "Official Team Member",
    company: "Unila Robotika & Otomasi (URO)",
    location: "Bandar Lampung, Indonesia",
    period: "Apr 2024 — Mei 2025",
    badge: "Robotics & UAV",
    description:
      "Anggota resmi tim robotika Universitas Lampung yang berfokus pada riset, uji terbang, dan kompetisi Kontes Robot Terbang Indonesia (KRTI 2024).",
    impacts: [
      "Mengikuti uji coba penerbangan wahana di Pangkalan Udara Pangeran Mohammad Bunyamin untuk KRTI 2024.",
      "Berpartisipasi mewakili tim URO dalam Pesta Rakyat & Pameran Alutsista HUT ke-79 TNI di Saburai.",
      "Mengembangkan aplikasi Android pendukung dan pemodelan desain 3D wahana robotik.",
    ],
    technologies: ["Android Dev", "3D Design", "Robotics", "UAV Telemetry", "Embedded Systems"],
  },
  {
    id: "exp-7",
    role: "Staff Himpunan Mahasiswa",
    company: "HIMATRO Universitas Lampung",
    location: "Bandar Lampung, Indonesia",
    period: "Des 2022 — Feb 2025",
    badge: "Student Organization",
    description:
      "Pengurus aktif Himpunan Mahasiswa Teknik Elektro (HIMATRO) Unila dalam mengelola kegiatan akademik, keorganisasian, dan musyawarah besar.",
    impacts: [
      "Menjadi panitia aktif dalam penyelenggaraan Musyawarah Besar HIMATRO KE-XXV.",
      "Mengkoordinasikan berbagai program kerja himpunan dalam ranah kepemimpinan dan alokasi waktu.",
      "Membangun jejaring dan kolaborasi solid antar mahasiswa Teknik Elektro Unila.",
    ],
    technologies: ["Leadership", "Time Management", "Event Organization", "Public Speaking"],
  },
  {
    id: "exp-8",
    role: "Summer Course Participant (SCoMOA 2023)",
    company: "Institut Teknologi Bandung (ITB)",
    location: "Bandung, Jawa Barat",
    period: "Jul 2023 — Agt 2023",
    badge: "Summer Course ITB",
    description:
      "Mengikuti Summer Course on Modern Optics and Its Applications (SCoMOA 2023) yang diselenggarakan oleh Institut Teknologi Bandung.",
    impacts: [
      "Mempelajari topik lanjutan: Optical Waveguides, Photonic Crystals, Optical Fibers, & Integrated Nanophotonics.",
      "Mengikuti sesi praktikum simulasi mode optik (Optical Mode Solving) dan eksperimen laboratorium ITB.",
      "Menerima pemaparan materi dari pakar internasional dan pengajar terkemuka bidang optika modern.",
    ],
    technologies: ["Optical Fiber", "Photonics Crystal", "Optics Simulation", "Nanophotonics"],
  },
];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Smart Cattle Barn Monitoring System",
    category: "Robotics & IoT",
    year: "2025",
    summary:
      "Sistem pemantauan peternakan sapi ganda berskala besar dengan arsitektur hybrid event-driven berbasis IoT.",
    description:
      "Sistem pemantauan kandang sapi pintar (Thesis Project) yang memanfaatkan Hybrid Event-Driven Architecture. Menggunakan protokol MQTT untuk transmisi data telemetry sensor real-time berkecepatan tinggi, diproses backend NestJS, dan dioptimalkan dengan Redis cache-aside strategy untuk menangani metrik sensor tanpa membebani database PostgreSQL utama.",
    impact:
      "Memanfaatkan MQTT real-time & Redis cache-aside strategy untuk mengolah data sensor berkecepatan tinggi tanpa membebani database utama.",
    tags: ["NestJS", "PostgreSQL", "Redis", "Prisma ORM", "MQTT", "WebSockets", "IoT"],
    liveUrl: "https://smartcattlebarn.site/smartbarn.apk",
    metrics: [
      { label: "Arsitektur", value: "Hybrid Event-Driven" },
      { label: "Strategi Caching", value: "Redis Cache-Aside" },
    ],
  },
  {
    id: "proj-2",
    title: "Smart CO₂ — Real-Time Environmental Dashboard",
    category: "AI & Cloud",
    year: "2025",
    summary:
      "Backend & dashboard pemantauan emisi karbon dan cuaca real-time untuk kawasan perkebunan kelapa sawit.",
    description:
      "Platform backend dan pemantauan lingkungan real-time untuk mengukur emisi CO₂ dan indikator cuaca di perkebunan kelapa sawit yang berkelanjutan. Membangun endpoint RESTful API yang andal menggunakan Express.js dan PostgreSQL untuk menerima serta mengolah data telemetry dari berbagai sensor IoT secara terukur.",
    impact:
      "Membangun endpoint RESTful API terukur untuk pengolahan data emisi karbon & cuaca lokasi perkebunan sawit secara real-time.",
    tags: ["Express.js", "Node.js", "PostgreSQL", "IoT Sensors", "RESTful API", "Environmental Tech"],
    liveUrl: "https://lnkd.in/g2CRUPW2",
    metrics: [
      { label: "Domain", value: "Perkebunan Sawit" },
      { label: "Protokol", value: "RESTful API" },
    ],
  },
  {
    id: "proj-3",
    title: "Smart Cattle Barn Mobile App",
    category: "Fullstack Web",
    year: "2025",
    summary:
      "Aplikasi mobile berbasis React Native dengan UI clean & ringan terintegrasi ke backend NestJS & MQTT.",
    description:
      "Aplikasi mobile berbasis React Native dengan desain antarmuka yang bersih, intuitif, dan ringan. Terintegrasi penuh dengan ekosistem backend NestJS, protokol MQTT real-time, Redis cache, Prisma ORM, dan database PostgreSQL untuk penyajian data telemetry kandang secara langsung.",
    impact:
      "Menyajikan visualisasi data sensor real-time dengan antarmuka mobile React Native yang ringan, cepat, dan handal.",
    tags: ["React Native", "TypeScript", "NestJS", "MQTT", "Redis", "PostgreSQL"],
    liveUrl: "https://smartcattlebarn.site/smartbarn.apk",
    metrics: [
      { label: "Platform", value: "React Native" },
      { label: "Koneksi", value: "MQTT & WebSockets" },
    ],
  },
  {
    id: "proj-4",
    title: "Dicoding Story Web App",
    category: "Fullstack Web",
    year: "2025",
    summary:
      "Aplikasi web dinamis dengan integrasi REST API Dicoding untuk autentikasi, peta lokasi, dan manajemen state.",
    description:
      "Aplikasi berbasis web yang merender UI dinamis dengan arsitektur Single Page Application. Terintegrasi penuh dengan ekosistem REST API Dicoding untuk penanganan autentikasi pengguna, lokasi peta cerita, serta manajemen state yang responsif.",
    impact:
      "Lulus penilaian sertifikasi Dicoding dengan implementasi antarmuka dinamis dan integrasi REST API penuh.",
    tags: ["JavaScript", "REST API", "Single Page App", "Web APIs", "State Management"],
    liveUrl: "https://majidhadi-2045.github.io/Dicoding_Story-/",
    metrics: [
      { label: "Arsitektur", value: "Single Page App" },
      { label: "Integrasi", value: "Dicoding REST API" },
    ],
  },
  {
    id: "proj-5",
    title: "Native Android Recipe App",
    category: "Fullstack Web",
    year: "2025",
    summary:
      "Aplikasi mobile native pencarian resep kuliner yang dibangun menggunakan Kotlin & Android Studio.",
    description:
      "Aplikasi mobile native yang dibangun menggunakan Kotlin dan Android Studio. Menerapkan arsitektur Android modern (MVVM), antarmuka yang responsif, serta prinsip desain UI yang bersih dan interaktif.",
    impact:
      "Menerapkan prinsip Clean Architecture Android & komponen UI responsif native.",
    tags: ["Kotlin", "Android Studio", "MVVM", "Android Architecture", "Responsive UI"],
    githubUrl: "https://github.com/MajidHadi-2045/My_resep_kue",
    metrics: [
      { label: "Bahasa", value: "Kotlin Native" },
      { label: "IDE", value: "Android Studio" },
    ],
  },
  {
    id: "proj-6",
    title: "Bookshelf RESTful API Service",
    category: "Fullstack Web",
    year: "2025",
    summary:
      "Layanan backend microservice mandiri untuk pengelolaan koleksi buku digital dengan validasi payload rapi.",
    description:
      "Layanan backend mandiri untuk manajemen koleksi buku digital. Dilengkapi dengan validasi payload request yang ketat, struktur routing modular yang rapi, dan penanganan status error HTTP komprehensif.",
    impact:
      "Memenuhi 100% kriteria kualifikasi otomatisasi pengujian RESTful API backend.",
    tags: ["Node.js", "Hapi.js", "RESTful API", "JavaScript", "Backend Microservice"],
    metrics: [
      { label: "Kepatuhan API", value: "100% Automated Test" },
      { label: "Runtime", value: "Node.js" },
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
      { name: "Node.js & Express / NestJS", level: "Lanjutan", note: "RESTful API, MQTT, Redis Caching, Prisma" },
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
    credentialUrl: "https://www.dicoding.com/certificates/DICODING-AI-2026-988",
    imageUrl: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "cert-2",
    title: "Full-Stack Web Developer (Best Graduate)",
    issuer: "Coding Camp by DBS Foundation",
    year: "2025",
    badgeText: "DBS FOUNDATION",
    badgeBg: "#EFEBE0",
    badgeColor: "#0F0F0F",
    credentialId: "DBS-CAMP-FS-2025",
    skills: ["Fullstack Architecture", "RESTful API", "Database Design", "Project Management"],
    credentialUrl: "https://dbs.com/codingcamp/verify/DBS-CAMP-FS-2025",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
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
    credentialUrl: "https://aws.amazon.com/verification/AWS-CPE-2025-019",
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
    credentialUrl: "https://www.credly.com/org/cisco",
  },
];

export const extraAchievements: string[] = [
  "Lulusan Terbaik (Best Graduate) Full-Stack Web Development | Coding Camp by DBS Foundation (Feb - Jul 2025)",
  "Graduate Program React Native & React.js | Asah by Dicoding (Agt - Des 2025)",
  "Peserta Summer Course SCoMOA 2023 | Institut Teknologi Bandung (ITB) (Jul - Agt 2023)",
  "Staf Divisi Event & PR | HIMATRO Universitas Lampung (Des 2022 - Feb 2025)",
  "Finalis Tingkat Nasional KRTI 2024 (Divisi LELA) - Tim URO Unila",
  "Penerima Predikat SKPI Unggul Universitas Lampung",
];
