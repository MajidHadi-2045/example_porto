"use client";

import React, { useEffect } from "react";
import { Project } from "@/data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-ink/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-base border-[3px] border-ink max-w-2xl w-full p-6 sm:p-8 shadow-brutal relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 border-b-2 border-ink pb-4 mb-6">
          <div>
            <span className="font-mono text-xs font-bold uppercase text-accent">
              {project.category} · {project.year}
            </span>
            <h3 className="font-serif font-black text-2xl sm:text-3xl uppercase text-ink mt-1">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 bg-ink text-base border-2 border-ink font-mono font-bold text-sm flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="space-y-6">
          {/* Summary */}
          <div>
            <h4 className="font-mono text-xs uppercase font-bold text-ink/60 mb-1">Ringkasan Sistem:</h4>
            <p className="font-sans font-medium text-base text-gray-800 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Impact & Results */}
          <div className="bg-white border-2 border-ink p-4 shadow-brutal-sm">
            <h4 className="font-mono text-xs uppercase font-bold text-accent mb-1">Dampak & Pencapaian Utama:</h4>
            <p className="font-sans font-semibold text-sm text-ink leading-relaxed">
              {project.impact}
            </p>
          </div>

          {/* Metrics Row */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 gap-3">
              {project.metrics.map((m, i) => (
                <div key={i} className="border border-ink bg-ink text-base p-3 text-center font-mono">
                  <div className="text-[10px] text-base/60 uppercase">{m.label}</div>
                  <div className="text-sm font-bold text-accent mt-0.5">{m.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack Tags */}
          <div>
            <h4 className="font-mono text-xs uppercase font-bold text-ink/60 mb-2">Arsitektur & Teknologi:</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span 
                  key={idx}
                  className="font-mono text-xs font-bold uppercase border-2 border-ink px-3 py-1 bg-white shadow-brutal-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="flex justify-end pt-4 border-t-2 border-ink">
            <button
              onClick={onClose}
              className="font-mono text-xs font-bold uppercase bg-ink text-base px-6 py-2.5 border-2 border-ink hover:bg-accent transition-colors"
            >
              Tutup Modal [ESC]
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
