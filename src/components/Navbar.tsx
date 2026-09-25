"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { personalInfo } from "@/data/portfolioData";

export default function Navbar() {
  const [time, setTime] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-base border-b-[3px] border-ink transition-shadow ${scrolled ? "shadow-brutal-sm" : ""}`}>
      {/* Top Telemetry / Status Bar */}
      <div className="hidden lg:flex justify-between items-center px-6 md:px-12 py-1.5 bg-ink text-base font-mono text-[11px] uppercase tracking-wider border-b border-ink">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
            <span className="text-emerald-400 font-bold">{personalInfo.status}</span>
          </span>
          <span className="text-base/80">{personalInfo.location}</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-base/80">
            Waktu Lokal: <strong className="text-base font-bold">{time || "12:00:00 WIB"}</strong>
          </span>
          <span className="text-accent font-bold tracking-wider">{personalInfo.skpiBadge}</span>
        </div>
      </div>

      {/* Main Nav Bar */}
      <nav className="py-3.5 px-6 md:px-12 flex justify-between items-center bg-base">
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-serif font-black text-2xl md:text-3xl tracking-tighter uppercase text-ink"
        >
          <span className="w-8 h-8 bg-ink text-base flex items-center justify-center font-mono text-sm font-bold border-2 border-ink group-hover:bg-accent group-hover:border-accent transition-colors shadow-brutal-sm">
            M
          </span>
          <span className="group-hover:text-accent transition-colors">
            {personalInfo.initials}
          </span>
        </Link>

        {/* Desktop Section Links */}
        <div className="hidden md:flex items-center gap-8 font-mono text-xs font-bold uppercase tracking-widest text-ink">
          <a href="#about" className="hover:text-accent transition-colors py-1 border-b-2 border-transparent hover:border-accent">
            <span className="text-accent text-[10px] mr-1">01.</span> Profil
          </a>
          <a href="#experience" className="hover:text-accent transition-colors py-1 border-b-2 border-transparent hover:border-accent">
            <span className="text-accent text-[10px] mr-1">02.</span> Pengalaman
          </a>
          <a href="#projects" className="hover:text-accent transition-colors py-1 border-b-2 border-transparent hover:border-accent">
            <span className="text-accent text-[10px] mr-1">03.</span> Proyek
          </a>
          <a href="#certificates" className="hover:text-accent transition-colors py-1 border-b-2 border-transparent hover:border-accent">
            <span className="text-accent text-[10px] mr-1">04.</span> Keahlian
          </a>
        </div>

        {/* Right Action & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${personalInfo.email}`}
            className="hidden sm:inline-flex font-mono text-xs font-bold uppercase bg-base text-ink border-2 border-ink px-4 py-2 hover:bg-accent hover:text-white hover:border-ink transition-all shadow-brutal-sm hover:translate-x-[1px] hover:translate-y-[1px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            Hubungi Saya →
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 border-2 border-ink bg-white shadow-brutal-sm text-ink active:translate-x-1 active:translate-y-1 font-mono text-sm font-bold"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-base border-t-2 border-ink p-6 flex flex-col gap-4 font-mono text-sm font-bold uppercase border-b-[3px] shadow-brutal animate-in slide-in-from-top-2 duration-150">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 border-b border-ink/20 flex justify-between items-center hover:text-accent"
          >
            <span>01. Profil</span>
            <span>→</span>
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 border-b border-ink/20 flex justify-between items-center hover:text-accent"
          >
            <span>02. Pengalaman</span>
            <span>→</span>
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 border-b border-ink/20 flex justify-between items-center hover:text-accent"
          >
            <span>03. Proyek</span>
            <span>→</span>
          </a>
          <a
            href="#certificates"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 border-b border-ink/20 flex justify-between items-center hover:text-accent"
          >
            <span>04. Keahlian & Sertifikat</span>
            <span>→</span>
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center bg-accent text-white p-3 border-2 border-ink shadow-brutal-sm hover:bg-ink transition-colors"
          >
            Kirim Email Sekarang
          </a>
        </div>
      )}
    </header>
  );
}
