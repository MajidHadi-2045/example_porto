"use client";

import React, { useEffect } from "react";
import { Certificate } from "@/data/portfolioData";

interface CertificateModalProps {
  cert: Certificate | null;
  onClose: () => void;
}

export default function CertificateModal({ cert, onClose }: CertificateModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!cert) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-ink/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-base border-[3px] border-ink max-w-lg w-full p-6 sm:p-8 shadow-brutal relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b-2 border-ink pb-4 mb-6">
          <div>
            <div className="font-mono text-xs font-bold text-accent uppercase">
              VALIDASI KOMPETENSI RESMI · {cert.year}
            </div>
            <h3 className="font-serif font-black text-2xl uppercase text-ink mt-1">
              {cert.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 bg-ink text-base border-2 border-ink font-mono font-bold text-sm flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Certificate Badge Display */}
        <div
          className="w-full aspect-[16/9] border-2 border-ink mb-6 flex flex-col items-center justify-center p-6 text-center shadow-brutal-sm relative overflow-hidden"
          style={{ backgroundColor: cert.badgeBg, color: cert.badgeColor }}
        >
          {/* Subtle Watermark Seal */}
          <div className="absolute inset-0 opacity-10 flex items-center justify-center text-8xl font-serif font-black pointer-events-none">
            UNILA
          </div>

          <div className="z-10 flex flex-col items-center gap-2">
            <span className="text-3xl">🏅</span>
            <span className="font-mono text-xs font-bold uppercase tracking-widest px-3 py-1 border border-current rounded">
              {cert.badgeText}
            </span>
            <div className="font-serif font-bold text-lg leading-tight mt-1">
              {cert.issuer}
            </div>
          </div>
        </div>

        {/* Details List */}
        <div className="space-y-4 mb-6 text-sm font-sans">
          <div className="flex justify-between border-b border-ink/20 pb-2">
            <span className="font-mono text-xs text-ink/60 uppercase">Institusi Penerbit:</span>
            <span className="font-bold text-ink">{cert.issuer}</span>
          </div>

          <div className="flex justify-between border-b border-ink/20 pb-2">
            <span className="font-mono text-xs text-ink/60 uppercase">ID Kredensial / No:</span>
            <span className="font-mono font-bold text-accent">{cert.credentialId}</span>
          </div>

          <div className="flex justify-between border-b border-ink/20 pb-2">
            <span className="font-mono text-xs text-ink/60 uppercase">Tahun Terbit:</span>
            <span className="font-bold text-ink">{cert.year}</span>
          </div>

          <div>
            <span className="font-mono text-xs text-ink/60 uppercase block mb-2">Kompetensi yang Divalidasi:</span>
            <div className="flex flex-wrap gap-1.5">
              {cert.skills.map((skill, i) => (
                <span key={i} className="font-mono text-xs font-bold px-2.5 py-1 bg-white border border-ink shadow-brutal-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t-2 border-ink">
          <span className="font-mono text-[10px] text-emerald-600 font-bold uppercase flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
            TERVERIFIKASI RESMI
          </span>
          <button
            onClick={onClose}
            className="font-mono text-xs font-bold uppercase bg-ink text-base px-5 py-2 border-2 border-ink hover:bg-accent transition-colors"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
}
