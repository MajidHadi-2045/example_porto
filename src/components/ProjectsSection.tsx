"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { projects, Project } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="bg-base border-b-[3px] border-ink">
      
      {/* Header Banner */}
      <div className="p-8 md:p-12 border-b-[3px] border-ink bg-ink text-base flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <div className="font-mono text-accent text-xs font-bold uppercase tracking-widest mb-3">
            03 // RISET, STUDI KASUS & REKAYASA SISTEM
          </div>
          <h2 className="font-serif font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-base">
            Proyek Pilihan
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 font-mono text-xs font-bold uppercase">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 border-2 border-base transition-colors ${
              activeCategory === "all" ? "bg-accent text-white border-accent" : "bg-ink text-base hover:bg-base/20"
            }`}
          >
            Semua ({projects.length})
          </button>
          <button
            onClick={() => setActiveCategory("Robotics & IoT")}
            className={`px-4 py-2 border-2 border-base transition-colors ${
              activeCategory === "Robotics & IoT" ? "bg-accent text-white border-accent" : "bg-ink text-base hover:bg-base/20"
            }`}
          >
            Robotics & IoT
          </button>
          <button
            onClick={() => setActiveCategory("AI & Cloud")}
            className={`px-4 py-2 border-2 border-base transition-colors ${
              activeCategory === "AI & Cloud" ? "bg-accent text-white border-accent" : "bg-ink text-base hover:bg-base/20"
            }`}
          >
            AI & Cloud
          </button>
          <button
            onClick={() => setActiveCategory("Fullstack Web")}
            className={`px-4 py-2 border-2 border-base transition-colors ${
              activeCategory === "Fullstack Web" ? "bg-accent text-white border-accent" : "bg-ink text-base hover:bg-base/20"
            }`}
          >
            Fullstack Web
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 divide-y-[3px] lg:divide-y-0 lg:divide-x-[3px] divide-ink bg-base">
        {filteredProjects.map((proj, idx) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-8 md:p-10 flex flex-col justify-between group hover:bg-white transition-colors duration-300 cursor-pointer"
            onClick={() => setSelectedProject(proj)}
          >
            <div>
              {/* Top Meta */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent border border-accent/40 px-2 py-0.5 bg-accent/5">
                  {proj.category}
                </span>
                <span className="font-mono text-xs font-bold text-ink/60">
                  {proj.year}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif font-black text-2xl md:text-3xl uppercase leading-tight mb-4 group-hover:text-accent transition-colors">
                {proj.title}
              </h3>

              {/* Summary */}
              <p className="font-sans font-medium text-sm text-gray-700 leading-relaxed mb-6">
                {proj.summary}
              </p>

              {/* Highlight Impact */}
              <div className="bg-ink/5 border-l-4 border-accent p-3 mb-6 font-sans text-xs font-semibold text-ink">
                🏆 {proj.impact}
              </div>
            </div>

            <div>
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {proj.tags.slice(0, 4).map((tag, i) => (
                  <span
                    key={i}
                    className="font-mono text-[10px] uppercase font-bold px-2 py-0.5 border border-ink/40 bg-base group-hover:bg-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Inspect Button */}
              <div className="flex items-center justify-between font-mono text-xs font-bold uppercase text-ink border-t-2 border-ink pt-4 group-hover:text-accent transition-colors">
                <span>Inspeksi Arsitektur Sistem</span>
                <span className="text-lg">→</span>
              </div>
            </div>

          </motion.div>
        ))}
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
