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
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-between pt-12 md:pt-16 pb-16 overflow-hidden border-b-[3px] border-ink bg-base">
      
      {/* Extreme Scale Watermark Typography */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none whitespace-nowrap select-none">
        <h1 className="text-[17vw] font-serif font-black uppercase leading-[0.75] tracking-tighter text-ink opacity-[0.04]">
          ENGINEER
        </h1>
        <h1 className="text-[15vw] font-serif font-black uppercase leading-[0.75] tracking-tighter text-ink opacity-[0.04]">
          ARCHITECT
        </h1>
      </div>

      {/* Main Hero Container */}
      <div className="w-full max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center z-10 my-auto">
        
        {/* Left Column: Editorial Headline & Credentials */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          
          {/* Badge Status */}
          <div className="inline-flex items-center gap-2 border-2 border-ink bg-white px-3 py-1 text-xs font-mono font-bold uppercase shadow-brutal-sm mb-6 w-fit">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>{personalInfo.education}</span>
          </div>

          {/* Main Title */}
          <h1 className="font-serif font-black text-4xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-ink uppercase mb-6">
            Membangun <span className="italic font-normal">Sistem</span><br />
            Dengan Logika <span className="text-accent underline decoration-4 decoration-ink">Presisi.</span>
          </h1>

          {/* Subtitle */}
          <p className="font-sans font-medium text-base sm:text-lg text-gray-800 leading-relaxed max-w-xl mb-8">
            Halo, saya <strong className="font-bold text-ink">{personalInfo.name}</strong>. Memadukan arsitektur perangkat keras Teknik Elektro dengan sistem perangkat lunak modern untuk menciptakan produk digital yang tangguh dan skalabel.
          </p>

          {/* Tactile Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="font-mono text-sm font-bold uppercase bg-accent text-white border-[3px] border-ink px-6 py-3.5 shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-hover transition-all active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
            >
              Lihat Proyek & Riset ↓
            </a>

            <button
              onClick={handleCopyEmail}
              className="font-mono text-sm font-bold uppercase bg-white text-ink border-[3px] border-ink px-6 py-3.5 shadow-brutal hover:bg-ink hover:text-base hover:translate-x-[2px] hover:translate-y-[2px] transition-all active:translate-x-[4px] active:translate-y-[4px] active:shadow-none flex items-center gap-2"
            >
              <span>{copied ? "✓ Email Disalin!" : "Salin Email Kontak"}</span>
            </button>
          </div>

        </div>

        {/* Right Column: 3D Overlap Interactive Engineering Canvas */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative w-72 h-96 sm:w-80 sm:h-[28rem] group"
          >
            {/* Background Terracotta Accent Circle */}
            <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-accent rounded-full border-[3px] border-ink z-0 group-hover:scale-110 transition-transform duration-500 shadow-brutal-sm" />

            {/* Rotating Starburst SVG */}
            <svg
              className="absolute -top-10 -left-10 w-24 h-24 text-ink z-20 animate-spin-slow pointer-events-none"
              viewBox="0 0 100 100"
              fill="none"
            >
              <path
                d="M50 0L53.53 35.35L85.35 14.64L64.64 46.46L100 50L64.64 53.53L85.35 85.35L53.53 64.64L50 100L46.46 64.64L14.64 85.35L35.35 53.53L0 50L35.35 46.46L14.64 14.64L46.46 35.35L50 0Z"
                fill="currentColor"
              />
            </svg>

            {/* Frame Box */}
            <div className="w-full h-full bg-ink rounded-t-full border-[3px] border-ink overflow-hidden relative shadow-brutal transition-shadow duration-500 z-10 flex flex-col justify-between p-6 text-base">
              {hasPhoto ? (
                <Image
                  src={personalInfo.photoUrl}
                  alt={personalInfo.name}
                  fill
                  sizes="(max-width: 768px) 288px, 320px"
                  priority
                  onError={() => setImageError(true)}
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 opacity-95 group-hover:opacity-100"
                />
              ) : (
                /* High-End Electrical Engineering & Logic Matrix */
                <div className="h-full flex flex-col justify-between items-center text-center py-4 relative z-10 select-none">
                  
                  {/* Top Schematic Signal Header */}
                  <div className="w-full flex justify-between items-center border-b border-base/20 pb-2 font-mono text-[10px] text-base/60">
                    <span className="text-emerald-400">● SYS_READY</span>
                    <span>V_REF: 3.3V</span>
                  </div>

                  {/* Center Emblem / Circuit Schematic */}
                  <div className="flex flex-col items-center gap-3 my-auto">
                    <div className="w-24 h-24 rounded-full border-2 border-dashed border-accent/60 bg-black/40 flex items-center justify-center relative group-hover:border-accent transition-colors">
                      {/* Inner Pulsing Radar Node */}
                      <span className="absolute w-16 h-16 rounded-full border border-base/20 animate-ping opacity-40" />
                      <span className="font-serif font-black text-4xl text-accent">
                        {personalInfo.initials}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-serif font-bold text-xl text-base tracking-wide uppercase">
                        {personalInfo.name}
                      </h3>
                      <p className="font-mono text-[11px] text-accent font-semibold tracking-wider mt-0.5 uppercase">
                        {personalInfo.role}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Telemetry Footer */}
                  <div className="w-full bg-base/5 border border-base/15 p-2 rounded text-left font-mono text-[10px] text-base/70 space-y-1">
                    <div className="flex justify-between">
                      <span className="text-base/40">CORE:</span>
                      <span className="text-base font-semibold">ELECTRICAL ENG</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-base/40">HONOR:</span>
                      <span className="text-accent font-bold">SKPI UNGGUL</span>
                    </div>
                  </div>

                </div>
              )}
            </div>
          </motion.div>
        </div>

      </div>

      {/* Double Tier Marquee Banner */}
      <div className="w-full bg-accent border-y-[3px] border-ink py-2.5 overflow-hidden flex z-30 mt-8">
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
