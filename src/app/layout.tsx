import type { Metadata, Viewport } from "next";
import { Playfair_Display, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#EFEBE0",
};

export const metadata: Metadata = {
  title: "Majid Solihin Hadi — Full Stack Web Developer & AI Enthusiast",
  description: "Portofolio profesional Majid Solihin Hadi - Mahasiswa S1 Teknik Elektro Universitas Lampung dengan predikat SKPI Unggul. Spesialis Full-Stack Web Developer & AI Enthusiast.",
  keywords: [
    "Majid Solihin Hadi",
    "Full Stack Developer",
    "Teknik Elektro Unila",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio"
  ],
  authors: [{ name: "Majid Solihin Hadi" }],
  openGraph: {
    title: "Majid Solihin Hadi — Full Stack Web Developer",
    description: "Design with Purpose. Code with Logic. Portofolio & rekam jejak Majid Solihin Hadi.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="id" 
      className={`${playfair.variable} ${manrope.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="bg-base text-ink font-sans antialiased overflow-x-hidden selection:bg-accent selection:text-white border-x-4 md:border-x-[12px] border-ink max-w-[1600px] mx-auto relative min-h-screen">
        {children}
      </body>
    </html>
  );
}
