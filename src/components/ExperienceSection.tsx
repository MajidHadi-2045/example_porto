"use client";

import React from "react";
import { motion } from "framer-motion";
import { experiences } from "@/data/portfolioData";

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-base border-b-[3px] border-ink">
      
      {/* Header Banner */}
      <div className="p-8 md:p-12 border-b-[3px] border-ink bg-accent text-base flex justify-between items-end">
        <div>
          <div className="font-mono text-ink text-xs font-bold uppercase tracking-widest mb-3">
            02 // REKAM JEJAK PROFESIONAL
          </div>
          <h2 className="font-serif font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-base">
            Pengalaman
          </h2>
        </div>
        <div className="hidden md:block">
          <svg className="w-16 h-16 text-base" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </div>
      </div>

      {/* Grid Hairline 3px dengan Background Ink & Gap 3px */}
      <div className="bg-ink grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3px]">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.12 }}
            className="bg-base p-8 md:p-10 flex flex-col justify-between group hover:bg-ink hover:text-base transition-colors duration-300 min-h-[460px]"
          >
            <div>
              {/* Badge & Period Header */}
              <div className="flex items-center justify-between gap-2 mb-6">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent group-hover:text-accent transition-colors">
                  {exp.period}
                </span>
                <span className="font-mono text-[10px] uppercase font-bold border border-ink group-hover:border-base/40 px-2 py-0.5 rounded bg-white group-hover:bg-ink group-hover:text-base transition-colors">
                  {exp.badge}
                </span>
              </div>

              {/* Title & Company */}
              <h3 className="font-serif font-bold text-2xl md:text-3xl leading-snug mb-2 group-hover:text-base transition-colors">
                {exp.role}
              </h3>
              <p className="font-sans font-bold text-xs uppercase tracking-wider text-ink/70 group-hover:text-base/80 mb-6">
                {exp.company} · <span className="font-normal">{exp.location}</span>
              </p>

              {/* Description */}
              <p className="font-sans font-medium text-sm text-gray-800 group-hover:text-base/90 leading-relaxed mb-6">
                {exp.description}
              </p>

              {/* Key Impact Points */}
              <ul className="space-y-2 text-xs font-sans text-gray-700 group-hover:text-base/80 border-t border-ink/20 group-hover:border-base/20 pt-4 mb-6">
                {exp.impacts.map((impact, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-0.5">›</span>
                    <span>{impact}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies Pills */}
            <div className="flex flex-wrap gap-1.5 pt-4 border-t-2 border-ink group-hover:border-base/40">
              {exp.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="font-mono text-[10px] uppercase font-bold px-2 py-0.5 border border-ink group-hover:border-base/30 bg-white group-hover:bg-black/40 group-hover:text-base transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  );
}
