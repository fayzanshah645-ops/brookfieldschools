"use client";

import { useState, useEffect } from "react";
import { User } from "lucide-react";

const links = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT US", href: "#about" },
  { label: "PROGRAMS", href: "#programs" },
  { label: "GALLERY", href: "#gallery" },
  { label: "FAQS", href: "#faqs" },
  { label: "CONTACT US", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Background rectangle appears only on scroll; completely transparent in hero */}
      <div
        className={`w-full transition-all duration-300 ${
          scrolled || open
            ? "border-b border-white/10 bg-[#0b1f12]/95 backdrop-blur-md shadow-lg shadow-black/10"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        {/* Full-width container with end-to-end padding */}
        <div className="flex h-16 w-full items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8 xl:px-10">
          {/* Primary School Crest & Logotype */}
          <a href="#home" className="flex items-center gap-3 shrink-0">
            <img
              src="/img/main-logo.png"
              alt="Brookfield International School"
              className={`h-11 w-auto sm:h-14 lg:h-[54px] object-contain transition-all duration-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
              }`}
            />
            <div className="flex flex-col justify-center text-left">
              <span className="font-['Instrument_Sans',sans-serif] text-[11.5px] sm:text-[13.5px] lg:text-[15px] font-normal leading-tight text-white tracking-wide whitespace-nowrap uppercase">
                {["BROOKFIELD", "INTERNATIONAL", "SCHOOL"].map((w, idx) => (
                  <span key={idx} className="word-mask mr-1.5 inline-block">
                    <span
                      className={`word-inner ${mounted ? "is-visible" : ""}`}
                      style={{ transitionDelay: `${80 + idx * 70}ms` }}
                    >
                      {w}
                    </span>
                  </span>
                ))}
              </span>
              <span className="font-['Nunito',sans-serif] text-[8.5px] sm:text-[9.5px] lg:text-[10px] font-normal tracking-[0.12em] sm:tracking-[0.14em] text-[#c9f158] uppercase leading-tight mt-0.5 whitespace-nowrap">
                <span className="word-mask inline-block">
                  <span
                    className={`word-inner ${mounted ? "is-visible" : ""}`}
                    style={{ transitionDelay: "320ms" }}
                  >
                    SHAPING THE FUTURE OF SCHOOLING
                  </span>
                </span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links — Nunito regular 14px in UPPERCASE with Word-Mask Reveal */}
          <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                className="font-['Nunito',sans-serif] text-[14px] font-normal uppercase tracking-wider text-white/80 transition-colors hover:text-[#c9f158]"
              >
                <span className="word-mask">
                  <span
                    className={`word-inner ${mounted ? "is-visible" : ""}`}
                    style={{ transitionDelay: `${220 + i * 50}ms` }}
                  >
                    {l.label}
                  </span>
                </span>
              </a>
            ))}
          </nav>

          {/* Desktop Right Side: Log In & Apply Now CTA with Word-Mask Reveal */}
          <div className="hidden items-center gap-6 sm:flex">
            <a
              href="#login"
              className="group flex items-center gap-2 font-['Nunito',sans-serif] text-[14px] font-normal uppercase tracking-wider text-white transition-colors hover:text-[#c9f158]"
            >
              <User
                className={`h-4 w-4 text-white transition-all duration-500 group-hover:text-[#c9f158] ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
                style={{ transitionDelay: "540ms" }}
                strokeWidth={2}
              />
              <span className="word-mask">
                <span
                  className={`word-inner ${mounted ? "is-visible" : ""}`}
                  style={{ transitionDelay: "580ms" }}
                >
                  LOG IN
                </span>
              </span>
            </a>
            <a
              href="#apply"
              className={`btn-cta btn-cta-dark-context shrink-0 rounded-none uppercase tracking-wider transition-all duration-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
              style={{ transitionDelay: "660ms" }}
            >
              APPLY NOW
            </a>
          </div>

          {/* Mobile menu toggle with sharp corners */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-none border border-white/20 text-white lg:hidden"
          >
            <span className="relative block h-3.5 w-4.5">
              <span
                className={`absolute left-0 h-0.5 w-full bg-white transition-all ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-full bg-white transition-all ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-full bg-white transition-all ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>

        {/* Mobile dropdown menu with sharp corners and UPPERCASE links */}
        {open && (
          <div className="border-t border-white/10 bg-[#0b1f12] px-5 pb-6 pt-2 rounded-none lg:hidden">
            <nav className="flex flex-col">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/10 py-3 font-['Nunito',sans-serif] text-[14px] font-normal uppercase tracking-wider text-white/85"
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href="#login"
                onClick={() => setOpen(false)}
                className="group flex items-center gap-2 border-b border-white/10 pb-3 font-['Nunito',sans-serif] text-[14px] font-normal uppercase tracking-wider text-white transition-colors hover:text-[#c9f158]"
              >
                <User className="h-4 w-4 text-white transition-colors group-hover:text-[#c9f158]" strokeWidth={2} />
                <span>LOG IN</span>
              </a>
              <a
                href="#apply"
                onClick={() => setOpen(false)}
                className="btn-cta btn-cta-dark-context w-full rounded-none text-center uppercase tracking-wider"
              >
                APPLY NOW
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
