"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolioData";

export default function HeroSection() {
  const [imageError, setImageError] = useState(false);
  const [copied, setCopied] = useState(false);
  const hasPhoto = Boolean(personalInfo.photoUrl) && !imageError;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2800);
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between pt-8 sm:pt-14 pb-16 overflow-hidden border-b-[3px] border-ink bg-base">
      
      {/* Extreme Scale Watermark Typography */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none whitespace-nowrap select-none overflow-hidden">
        <h1 className="text-[18vw] font-serif font-black uppercase leading-[0.75] tracking-tighter text-ink opacity-[0.035]">
          FULLSTACK
        </h1>
        <h1 className="text-[16vw] font-serif font-black uppercase leading-[0.75] tracking-tighter text-ink opacity-[0.035]">
          ENGINEER
        </h1>
      </div>

      {/* Main Hero Container */}
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center z-10 my-auto">
        
        {/* Left Column: Editorial Headline & Credentials */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left order-2 lg:order-1">
          
          {/* Badge Status */}
          <div className="inline-flex items-center gap-2 border-2 border-ink bg-white px-3.5 py-1 text-xs font-mono font-bold uppercase shadow-brutal-sm mb-5 w-fit">
            <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
            <span className="text-ink">{personalInfo.education}</span>
          </div>

          {/* Main Title */}
          <h1 className="font-serif font-black text-3xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.02] tracking-tight text-ink uppercase mb-5">
            Rekayasa Sistem & <br />
            Aplikasi Web <span className="text-accent underline decoration-4 decoration-ink">Presisi.</span>
          </h1>

          {/* Subtitle */}
          <p className="font-sans font-medium text-base sm:text-lg text-gray-800 leading-relaxed max-w-xl mb-7">
            <strong className="font-bold text-ink">{personalInfo.name}</strong> — Full-Stack Developer & AI Specialist berlatar belakang S1 Teknik Elektro Universitas Lampung. Membangun aplikasi web modern dengan arsitektur yang tangguh, terukur, dan berkinerja tinggi.
          </p>

          {/* Tactile Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#projects"
              className="font-mono text-xs sm:text-sm font-bold uppercase bg-accent text-white border-[3px] border-ink px-5 sm:px-6 py-3 sm:py-3.5 shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-hover transition-all active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
            >
              Eksplorasi Proyek & Riset ↓
            </a>

            <button
              onClick={handleCopyEmail}
              className="font-mono text-xs sm:text-sm font-bold uppercase bg-white text-ink border-[3px] border-ink px-5 sm:px-6 py-3 sm:py-3.5 shadow-brutal hover:bg-ink hover:text-base hover:translate-x-[2px] hover:translate-y-[2px] transition-all active:translate-x-[4px] active:translate-y-[4px] active:shadow-none flex items-center gap-2"
            >
              <span>{copied ? "✓ Email Tersalin" : "Salin Email Kontak"}</span>
            </button>
          </div>

          {/* Micro Toast Feedback */}
          {copied && (
            <div className="mt-3 font-mono text-xs text-emerald-700 font-bold animate-in fade-in duration-200 flex items-center gap-1.5">
              <span>●</span>
              <span>Alamat email ({personalInfo.email}) berhasil disalin ke clipboard.</span>
            </div>
          )}

        </div>

        {/* Right Column: 3D Overlap Clean Brutalist Frame */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[28rem] group"
          >
            {/* Background Accent Circle */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 w-24 h-24 sm:w-32 sm:h-32 bg-accent rounded-full border-[3px] border-ink z-0 group-hover:scale-105 transition-transform duration-500 shadow-brutal-sm" />

            {/* Rotating Starburst SVG */}
            <svg
              className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 w-16 h-16 sm:w-20 sm:h-20 text-ink z-20 animate-spin-slow pointer-events-none"
              viewBox="0 0 100 100"
              fill="none"
            >
              <path
                d="M50 0L53.53 35.35L85.35 14.64L64.64 46.46L100 50L64.64 53.53L85.35 85.35L53.53 64.64L50 100L46.46 64.64L14.64 85.35L35.35 53.53L0 50L35.35 46.46L14.64 14.64L46.46 35.35L50 0Z"
                fill="currentColor"
              />
            </svg>

            {/* Frame Box */}
            <div className="w-full h-full bg-ink rounded-t-full border-[3px] border-ink overflow-hidden relative shadow-brutal transition-shadow duration-500 z-10 flex flex-col justify-center items-center p-6 text-base">
              {hasPhoto ? (
                <Image
                  src={personalInfo.photoUrl}
                  alt={personalInfo.name}
                  fill
                  sizes="(max-width: 768px) 256px, 320px"
                  priority
                  onError={() => setImageError(true)}
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 opacity-95 group-hover:opacity-100"
                />
              ) : (
                /* Clean, Minimalist Brutalist Placeholder */
                <div className="flex flex-col items-center justify-center gap-4 text-center select-none py-6">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-[3px] border-dashed border-accent flex items-center justify-center bg-black/50 group-hover:scale-105 transition-transform duration-300 shadow-inner">
                    <span className="font-serif font-black text-4xl sm:text-5xl text-accent tracking-tighter">
                      {personalInfo.initials}
                    </span>
                  </div>

                  <div className="space-y-1.5 mt-2">
                    <h3 className="font-serif font-bold text-xl sm:text-2xl text-base tracking-wide uppercase leading-tight">
                      {personalInfo.name}
                    </h3>
                    <p className="font-mono text-xs text-accent font-semibold tracking-wider uppercase">
                      {personalInfo.role}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>

      </div>

      {/* Double Tier Marquee Banner */}
      <div className="w-full bg-accent border-y-[3px] border-ink py-2.5 overflow-hidden flex z-30 mt-6 sm:mt-10">
        <div className="animate-marquee whitespace-nowrap flex items-center font-mono text-xs md:text-sm font-bold uppercase tracking-widest text-base">
          {personalInfo.marqueeItems.map((item, idx) => (
            <span key={`m1-${idx}`} className="flex items-center">
              <span className="mx-4 text-ink">✱</span>
              <span>{item}</span>
            </span>
          ))}
          {personalInfo.marqueeItems.map((item, idx) => (
            <span key={`m2-${idx}`} className="flex items-center">
              <span className="mx-4 text-ink">✱</span>
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}
