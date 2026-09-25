"use client";

import React, { useState } from "react";
import { personalInfo } from "@/data/portfolioData";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-ink text-base p-8 md:p-16 flex flex-col items-center text-center relative overflow-hidden">
      
      {/* SVG Bintang Berputar Latar Belakang */}
      <svg 
        className="absolute -top-20 -right-20 w-64 h-64 text-accent opacity-15 animate-spin-slow pointer-events-none select-none" 
        viewBox="0 0 24 24" 
        fill="currentColor"
      >
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>

      <div className="font-mono text-accent text-xs font-bold uppercase tracking-widest mb-4 z-10">
        05 // KONTAK & HUBUNGAN
      </div>

      <h2 className="font-serif font-black text-5xl sm:text-7xl lg:text-8xl uppercase mb-6 z-10 tracking-tight leading-none text-base">
        Mari<br />
        <span className="text-accent italic font-normal">Berkolaborasi.</span>
      </h2>

      <p className="font-sans text-base sm:text-lg text-base/80 max-w-xl mx-auto mb-8 z-10 leading-relaxed">
        Tertarik untuk berdiskusi seputar proyek web, peluang kerja sama, atau sekadar bertukar wawasan seputar teknologi? Silakan hubungi saya melalui email di bawah.
      </p>

      {/* Action CTA Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 z-10 mb-12">
        <a 
          href={`mailto:${personalInfo.email}`} 
          className="group relative border-[3px] border-base px-8 py-4 font-mono font-bold text-base sm:text-lg uppercase bg-accent text-white hover:bg-base hover:text-ink transition-colors duration-300 shadow-brutal-white active:translate-x-1 active:translate-y-1"
        >
          Kirim Email Langsung →
          <span className="absolute -top-3 -right-3 w-6 h-6 bg-accent border-2 border-base rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
        </a>

        <button
          onClick={handleCopyEmail}
          className="border-[3px] border-base px-6 py-4 font-mono font-bold text-sm sm:text-base uppercase bg-ink text-base hover:bg-base hover:text-ink transition-colors duration-300"
        >
          {copied ? "✓ Email Tersalin!" : `Salin: ${personalInfo.email}`}
        </button>
      </div>

      {/* Footer Info Bar */}
      <div className="mt-8 pt-8 border-t border-gray-800 w-full flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-xs uppercase opacity-75 z-10">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
          <span>© {new Date().getFullYear()} {personalInfo.name}</span>
          <span className="text-gray-500">|</span>
          <span>{personalInfo.education}</span>
        </div>

        <div className="flex items-center gap-4">
          <span>{personalInfo.location}</span>
          <button
            onClick={scrollToTop}
            className="border border-base/40 px-3 py-1 hover:bg-base hover:text-ink transition-colors"
          >
            Kembali ke Atas ↑
          </button>
        </div>
      </div>

    </footer>
  );
}
