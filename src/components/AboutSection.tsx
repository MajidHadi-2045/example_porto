"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolioData";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<"philosophy" | "hardware" | "specs">("philosophy");

  return (
    <section id="about" className="grid grid-cols-1 lg:grid-cols-12 border-b-[3px] border-ink">
      
      {/* Kolom Kiri: Tipografi Editorial Hitam Pekat */}
      <div className="lg:col-span-5 p-8 md:p-14 border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-ink flex flex-col justify-between bg-ink text-base">
        <div>
          <div className="font-mono text-accent text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
            <span>01 // PROFIL & PERSPEKTIF</span>
          </div>

          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif font-black text-4xl sm:text-6xl uppercase leading-none mb-8 tracking-tight"
          >
            Design<br />with<br /><span className="text-accent italic font-normal">Purpose.</span><br />Code<br />with<br /><span className="text-accent italic font-normal">Logic.</span>
          </motion.h2>

          <p className="font-sans text-base/80 text-gray-300 font-normal leading-relaxed border-t border-base/20 pt-6">
            &ldquo;{personalInfo.philosophy}&rdquo;
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-base/20 font-mono text-xs text-base/50 flex justify-between">
          <span>DEPT: ELECTRICAL ENGINEERING</span>
          <span>UNILA ID</span>
        </div>
      </div>

      {/* Kolom Kanan: Narasi & Interactive Engineering Inspector */}
      <div className="lg:col-span-7 p-8 md:p-14 flex flex-col justify-between bg-base">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-ink">
            <span className="font-mono text-accent font-bold uppercase tracking-widest text-xs">
              Latar Belakang & Visi
            </span>
            <span className="font-mono text-xs font-bold text-ink border border-ink px-2 py-0.5 bg-white shadow-brutal-sm">
              {personalInfo.skpiBadge}
            </span>
          </div>

          <p className="text-xl sm:text-2xl font-serif font-medium leading-snug mb-6 text-ink">
            Mahasiswa S1 Teknik Elektro Universitas Lampung dengan fokus mendalam pada integrasi <span className="underline decoration-accent decoration-2">Full-Stack Web Development</span> dan <span className="underline decoration-accent decoration-2">Applied AI</span>.
          </p>

          <p className="text-base font-sans font-medium text-gray-800 leading-relaxed mb-8">
            {personalInfo.bio}
          </p>

          {/* Interactive Architecture Terminal Box */}
          <div className="border-2 border-ink bg-ink text-base rounded shadow-brutal mb-8 overflow-hidden">
            {/* Terminal Tab Bar */}
            <div className="flex items-center justify-between bg-black/60 px-4 py-2 border-b border-base/20">
              <div className="flex items-center gap-2 font-mono text-xs">
                <button
                  onClick={() => setActiveTab("philosophy")}
                  className={`px-3 py-1 font-bold rounded transition-colors ${
                    activeTab === "philosophy" ? "bg-accent text-white" : "text-base/60 hover:text-base"
                  }`}
                >
                  architecture.ts
                </button>
                <button
                  onClick={() => setActiveTab("hardware")}
                  className={`px-3 py-1 font-bold rounded transition-colors ${
                    activeTab === "hardware" ? "bg-accent text-white" : "text-base/60 hover:text-base"
                  }`}
                >
                  embedded_roots.c
                </button>
                <button
                  onClick={() => setActiveTab("specs")}
                  className={`px-3 py-1 font-bold rounded transition-colors ${
                    activeTab === "specs" ? "bg-accent text-white" : "text-base/60 hover:text-base"
                  }`}
                >
                  credentials.json
                </button>
              </div>
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
              </div>
            </div>

            {/* Terminal Code Content */}
            <div className="p-4 font-mono text-xs leading-relaxed overflow-x-auto text-emerald-400">
              {activeTab === "philosophy" && (
                <code>
                  <span className="text-purple-400">const</span> developer = &#123;<br />
                  &nbsp;&nbsp;name: <span className="text-yellow-300">&quot;{personalInfo.name}&quot;</span>,<br />
                  &nbsp;&nbsp;principles: [<span className="text-yellow-300">&quot;High Throughput&quot;</span>, <span className="text-yellow-300">&quot;Type Safety&quot;</span>, <span className="text-yellow-300">&quot;Zero Latency&quot;</span>],<br />
                  &nbsp;&nbsp;fullstack: <span className="text-blue-400">&#123;</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;frontend: <span className="text-yellow-300">&quot;Next.js App Router + TypeScript&quot;</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;backend: <span className="text-yellow-300">&quot;Node.js + PostgreSQL + Prisma&quot;</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;ai_pipeline: <span className="text-yellow-300">&quot;LangChain / OpenAI / Gemini SDK&quot;</span><br />
                  &nbsp;&nbsp;<span className="text-blue-400">&#125;</span><br />
                  &#125;;
                </code>
              )}

              {activeTab === "hardware" && (
                <code>
                  <span className="text-purple-400">#include</span> <span className="text-yellow-300">&lt;telecom_unila.h&gt;</span><br />
                  <span className="text-base/40">// Bridging hardware signal precision to software APIs</span><br />
                  <span className="text-purple-400">void</span> <span className="text-blue-400">init_telemetry_node</span>() &#123;<br />
                  &nbsp;&nbsp;configure_baud_rate(<span className="text-yellow-300">115200</span>);<br />
                  &nbsp;&nbsp;enable_packet_crc_check();<br />
                  &nbsp;&nbsp;stream_to_websocket_relay(<span className="text-yellow-300">&quot;wss://ground-station.unila.ac.id&quot;</span>);<br />
                  &#125;
                </code>
              )}

              {activeTab === "specs" && (
                <code>
                  &#123;<br />
                  &nbsp;&nbsp;<span className="text-purple-400">&quot;university&quot;</span>: <span className="text-yellow-300">&quot;Universitas Lampung&quot;</span>,<br />
                  &nbsp;&nbsp;<span className="text-purple-400">&quot;major&quot;</span>: <span className="text-yellow-300">&quot;S1 Teknik Elektro&quot;</span>,<br />
                  &nbsp;&nbsp;<span className="text-purple-400">&quot;skpi_honor&quot;</span>: <span className="text-yellow-300">&quot;Unggul&quot;</span>,<br />
                  &nbsp;&nbsp;<span className="text-purple-400">&quot;national_contest&quot;</span>: <span className="text-yellow-300">&quot;Finalis KRTI 2024 (LELA)&quot;</span><br />
                  &#125;
                </code>
              )}
            </div>
          </div>

          {/* Signature Block */}
          <div className="flex items-center justify-between pt-4 border-t border-ink/20">
            <div className="font-serif text-3xl font-bold italic text-ink flex items-center gap-3">
              <span>{personalInfo.signature}</span>
              <span className="w-12 h-[2px] bg-accent inline-block" />
            </div>
            <span className="font-mono text-xs text-ink/60 uppercase">
              Bandar Lampung, Indonesia
            </span>
          </div>

        </motion.div>
      </div>

    </section>
  );
}
