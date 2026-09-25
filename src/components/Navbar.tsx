"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { personalInfo } from "@/data/portfolioData";

export default function Navbar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("id-ID", {
          timeZone: "Asia/Jakarta",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }) + " WIB"
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-base border-b-[3px] border-ink">
      {/* Top Telemetry Bar */}
      <div className="hidden lg:flex justify-between items-center px-6 md:px-12 py-1 bg-ink text-base font-mono text-[11px] uppercase tracking-wider border-b border-ink">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span className="text-emerald-400 font-bold">{personalInfo.status}</span>
          </span>
          <span className="text-base/60">LOC: {personalInfo.coordinates}</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-base/60">SYS_TIME: <strong className="text-base">{time || "12:00:00 WIB"}</strong></span>
          <span className="text-accent font-bold">{personalInfo.skpiBadge}</span>
        </div>
      </div>

      {/* Main Nav Bar */}
      <nav className="py-4 px-6 md:px-12 flex justify-between items-center">
        <Link
          href="/"
          className="group flex items-center gap-3 font-serif font-black text-2xl md:text-3xl tracking-tighter uppercase text-ink"
        >
          <span className="w-8 h-8 bg-ink text-base flex items-center justify-center font-mono text-sm font-bold border-2 border-ink group-hover:bg-accent group-hover:border-accent transition-colors">
            M
          </span>
          <span className="group-hover:text-accent transition-colors">
            {personalInfo.initials}
          </span>
        </Link>

        {/* Section Links */}
        <div className="hidden md:flex items-center gap-8 font-mono text-xs font-bold uppercase tracking-widest text-ink">
          <a href="#about" className="hover:text-accent transition-colors flex items-center gap-1">
            <span className="text-accent text-[10px]">01.</span> Profil
          </a>
          <a href="#experience" className="hover:text-accent transition-colors flex items-center gap-1">
            <span className="text-accent text-[10px]">02.</span> Pengalaman
          </a>
          <a href="#projects" className="hover:text-accent transition-colors flex items-center gap-1">
            <span className="text-accent text-[10px]">03.</span> Proyek
          </a>
          <a href="#certificates" className="hover:text-accent transition-colors flex items-center gap-1">
            <span className="text-accent text-[10px]">04.</span> Keahlian
          </a>
        </div>

        {/* CTA Contact Button */}
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${personalInfo.email}`}
            className="font-mono text-xs font-bold uppercase bg-base text-ink border-2 border-ink px-4 py-2 hover:bg-accent hover:text-white hover:border-ink transition-all shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
          >
            Hubungi Saya →
          </a>
        </div>
      </nav>
    </header>
  );
}
