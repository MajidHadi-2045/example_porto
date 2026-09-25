"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { skillCategories, extraAchievements, certificates, Certificate } from "@/data/portfolioData";
import CertificateModal from "./CertificateModal";

export default function CertificateSection() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="grid grid-cols-1 lg:grid-cols-12 border-b-[3px] border-ink">
      
      {/* Kolom Kiri: Arsitektur & Teknologi */}
      <div className="lg:col-span-7 p-8 md:p-14 border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-ink bg-base flex flex-col justify-between">
        <div>
          <div className="font-mono text-accent text-xs font-bold uppercase tracking-widest mb-4">
            04 // ARSITEKTUR & TECH STACK
          </div>
          <h3 className="font-serif font-black text-4xl sm:text-5xl uppercase mb-10 tracking-tight text-ink">
            Keahlian &<br />Infrastruktur
          </h3>

          <div className="space-y-8">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="border-t-2 border-ink pt-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-serif font-bold text-xl uppercase text-ink">
                    {cat.title}
                  </h4>
                  <span className="font-mono text-xs font-bold text-accent">
                    {cat.categoryCode}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="border-2 border-ink p-3 bg-white shadow-brutal-sm hover:border-accent transition-colors"
                    >
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-sans font-bold text-sm uppercase text-ink">
                          {skill.name}
                        </span>
                        <span className="font-mono text-[10px] font-bold text-accent bg-accent/10 px-1.5 py-0.5 rounded">
                          {skill.level}
                        </span>
                      </div>
                      <p className="font-mono text-[11px] text-ink/70">
                        {skill.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Tags */}
        <div className="mt-12 pt-8 border-t-2 border-ink">
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-ink mb-4">
            Pencapaian Ekstra & Rekam Organisasi:
          </p>
          <div className="flex flex-wrap gap-2">
            {extraAchievements.map((ach, idx) => (
              <span
                key={idx}
                className={`border-2 border-ink font-mono text-xs font-bold uppercase px-3 py-1.5 transition-all hover:-translate-y-0.5 ${
                  idx === 0
                    ? "bg-accent text-white shadow-brutal-sm border-ink"
                    : idx === 3
                    ? "bg-ink text-base shadow-brutal-sm"
                    : "bg-white text-ink shadow-brutal-sm"
                }`}
              >
                ★ {ach}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Kolom Kanan: Validasi Profesional (Interaktif & Hard Shadow Brutalist) */}
      <div className="lg:col-span-5 p-8 md:p-14 bg-base flex flex-col justify-between">
        <div>
          <div className="font-mono text-accent text-xs font-bold uppercase tracking-widest mb-4">
            VALIDASI RESMI
          </div>
          <h3 className="font-serif font-black text-4xl sm:text-5xl uppercase mb-10 tracking-tight text-ink">
            Kredensial<br />& Lisensi
          </h3>

          <div className="space-y-5">
            {certificates.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group border-[3px] border-ink bg-white p-4 shadow-brutal hover:shadow-brutal-hover transition-all duration-300 flex gap-4 items-center cursor-pointer hover:-translate-x-1 hover:-translate-y-1"
                onClick={() => setSelectedCert(cert)}
              >
                {/* Thumbnail Badge */}
                <div
                  className="w-20 sm:w-24 aspect-square border-2 border-ink overflow-hidden flex flex-col items-center justify-center font-mono font-bold text-[10px] uppercase p-2 text-center tracking-wider shrink-0 transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundColor: cert.badgeBg, color: cert.badgeColor }}
                >
                  <span className="text-xl mb-1">🏅</span>
                  <span className="leading-tight">{cert.badgeText.split(" ")[0]}</span>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-mono text-xs font-bold text-accent">
                      {cert.year}
                    </span>
                    <span className="font-mono text-[10px] text-ink/60 uppercase">
                      ID: {cert.credentialId.split("-").slice(0, 2).join("-")}...
                    </span>
                  </div>

                  <h4 className="font-serif font-bold text-lg leading-snug mb-1 group-hover:text-accent transition-colors truncate">
                    {cert.title}
                  </h4>
                  <p className="font-sans text-xs font-semibold text-ink/70">
                    {cert.issuer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footnote note */}
        <div className="mt-8 pt-4 border-t border-ink/20 font-mono text-xs text-ink/60 text-center">
          💡 Klik pada sertifikat untuk melihat detail kredensial resmi
        </div>
      </div>

      <CertificateModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
}
