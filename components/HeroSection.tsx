"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import TextReveal from "@/components/TextReveal";

const heroSlides = [
  {
    videoSrc: "/Main%20HERO%20Bg%201.mp4",
    line1: "Empowering Young Minds",
    line2: "Building Future Leaders",
    subtitleDesktopLine1: "A modern international school in Achabal Anantnag cultivating",
    subtitleDesktopLine2: "critical thinking, moral grounding, and future leadership.",
    subtitleMobile:
      "A modern international school in Achabal Anantnag cultivating critical thinking, moral grounding, and future leadership.",
  },
  {
    videoSrc: "/kids%20playing.mp4",
    line1: "Inspiring Joyful Discovery",
    line2: "Nurturing Happy Learners",
    subtitleDesktopLine1: "Vibrant sports, creative arts, and active playground inquiry",
    subtitleDesktopLine2: "where every child thrives with confidence and joy.",
    subtitleMobile:
      "Vibrant sports, creative arts, and active playground inquiry where every child thrives with confidence and joy.",
  },
  {
    videoSrc: "/kids%20skills.mp4",
    line1: "Coding Young Innovators",
    line2: "Mastering Future Skills",
    subtitleDesktopLine1: "Hands-on robotics laboratories and computational logic",
    subtitleDesktopLine2: "preparing students for modern technological benchmarks.",
    subtitleMobile:
      "Hands-on robotics laboratories and computational logic preparing students for modern technological benchmarks.",
  },
];

export default function HeroSection() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [subVisible, setSubVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const [fadeState, setFadeState] = useState<"in" | "out">("in");

  const videoRefs = [
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
  ];

  // Coordinated entrance sequence on page load / refresh:
  // 1. Title reveals word-by-word (0ms - 550ms)
  // 2. Subtitle slides & fades in (starts at 620ms)
  // 3. CTA Buttons slide & fade in (starts at 780ms)
  // 4. Switch to video-loop crossfade mode (at 1800ms)
  useEffect(() => {
    const subTimer = setTimeout(() => {
      setSubVisible(true);
    }, 620);

    const ctaTimer = setTimeout(() => {
      setCtaVisible(true);
    }, 780);

    const loadTimer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 1800);

    return () => {
      clearTimeout(subTimer);
      clearTimeout(ctaTimer);
      clearTimeout(loadTimer);
    };
  }, []);

  // Smooth fade-out, switch slide text, smooth fade-in for subsequent video changes
  const goToSlide = useCallback((nextIdx: number) => {
    if (nextIdx === currentIdx) return;
    setFadeState("out");
    setTimeout(() => {
      setCurrentIdx(nextIdx);
      setFadeState("in");
    }, 320);
  }, [currentIdx]);

  // Handle active video playback & preload next
  useEffect(() => {
    const activeVideo = videoRefs[currentIdx].current;
    if (activeVideo) {
      activeVideo.currentTime = 0;
      activeVideo.play().catch(() => {});
    }

    // Preload next upcoming video
    const nextIdx = (currentIdx + 1) % heroSlides.length;
    const nextVideo = videoRefs[nextIdx].current;
    if (nextVideo && nextVideo.preload !== "auto") {
      nextVideo.preload = "auto";
    }
  }, [currentIdx]);

  const handleVideoEnded = (idx: number) => {
    if (idx === currentIdx) {
      goToSlide((currentIdx + 1) % heroSlides.length);
    }
  };

  const currentSlide = heroSlides[currentIdx];

  return (
    <section
      id="home"
      className="relative flex h-screen min-h-[100dvh] w-full flex-col items-center justify-center overflow-hidden bg-[#0b1f12] text-white pt-16 sm:pt-20 pb-6 sm:pb-0"
    >
      {/* ================= BACKGROUND VIDEOS LOOP ================= */}
      <div className="absolute inset-0 h-full w-full overflow-hidden bg-[#0b1f12]">
        {heroSlides.map((slide, idx) => {
          const isActive = idx === currentIdx;
          return (
            <video
              key={slide.videoSrc}
              ref={videoRefs[idx]}
              autoPlay
              muted
              playsInline
              preload="auto"
              onEnded={() => handleVideoEnded(idx)}
              className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <source src={slide.videoSrc} type="video/mp4" />
            </video>
          );
        })}

        {/* Cinematic Vignette */}
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/55 via-black/30 to-[#0b1f12]/85 pointer-events-none" />
      </div>

      {/* ================= CENTER CONTENT (SYNCHRONIZED WITH VIDEO) ================= */}
      <div className="container-x relative z-30 flex flex-col items-center justify-center text-center">
        {/* Animated Headline: Strictly 2 lines on both mobile and desktop */}
        <div className="min-h-[76px] sm:min-h-[155px] flex flex-col items-center justify-center">
          {isInitialLoad ? (
            <h1 className="hero-headline max-w-5xl text-white text-center tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
              <span className="block whitespace-nowrap sm:whitespace-normal">
                <TextReveal
                  as="span"
                  immediate
                  baseDelayMs={100}
                  staggerMs={85}
                  text={heroSlides[0].line1}
                />
              </span>
              <span className="block whitespace-nowrap sm:whitespace-normal">
                <TextReveal
                  as="span"
                  immediate
                  baseDelayMs={380}
                  staggerMs={85}
                  text={heroSlides[0].line2}
                />
              </span>
            </h1>
          ) : (
            <h1
              className="hero-headline max-w-5xl text-white text-center tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] transition-all duration-350 ease-out"
              style={{
                opacity: fadeState === "in" ? 1 : 0,
                transform: fadeState === "in" ? "translateY(0)" : "translateY(8px)",
              }}
            >
              <span className="block whitespace-nowrap sm:whitespace-normal">{currentSlide.line1}</span>
              <span className="block whitespace-nowrap sm:whitespace-normal">{currentSlide.line2}</span>
            </h1>
          )}
        </div>

        {/* Subtitle: Perfectly balanced on mobile (no isolated stranded words), 2 lines on desktop */}
        <div className="min-h-[40px] sm:min-h-[52px] flex items-center justify-center mt-2.5 sm:mt-4 px-2 sm:px-0">
          <p
            className="max-w-xl sm:max-w-2xl font-['Nunito',sans-serif] text-[13px] sm:text-[14px] font-normal leading-relaxed text-white text-center [text-wrap:balance] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
            style={{
              opacity: isInitialLoad
                ? subVisible
                  ? 1
                  : 0
                : fadeState === "in"
                ? 1
                : 0,
              transform: isInitialLoad
                ? subVisible
                  ? "translateY(0)"
                  : "translateY(16px)"
                : fadeState === "in"
                ? "translateY(0)"
                : "translateY(6px)",
              transition: isInitialLoad
                ? "opacity 0.75s var(--ease-expo), transform 0.75s var(--ease-expo)"
                : "opacity 350ms ease-out, transform 350ms ease-out",
            }}
          >
            {/* Desktop: clean 2-line break */}
            <span className="hidden sm:inline">
              {currentSlide.subtitleDesktopLine1}
              <br />
              {currentSlide.subtitleDesktopLine2}
            </span>
            {/* Mobile: balanced natural flow */}
            <span className="inline sm:hidden">
              {currentSlide.subtitleMobile}
            </span>
          </p>
        </div>

        {/* CTA Buttons: Compact & comfortable on mobile */}
        <div
          className="mt-5 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 w-full sm:w-auto px-6 sm:px-0"
          style={{
            opacity: isInitialLoad ? (ctaVisible ? 1 : 0) : 1,
            transform: isInitialLoad
              ? ctaVisible
                ? "translateY(0)"
                : "translateY(16px)"
              : "translateY(0)",
            transition: isInitialLoad
              ? "opacity 0.75s var(--ease-expo), transform 0.75s var(--ease-expo)"
              : "none",
          }}
        >
          <a
            href="#apply"
            className="btn-cta btn-cta-dark-context w-full sm:w-auto text-center rounded-none uppercase tracking-wider py-2.5 sm:py-3 text-[13px] sm:text-[14px]"
          >
            APPLY NOW
          </a>
          <a
            href="#programs"
            className="btn-secondary w-full sm:w-auto text-center rounded-none border-white/25 text-white hover:bg-white/10 uppercase tracking-wider py-2.5 sm:py-3 text-[13px] sm:text-[14px]"
          >
            EXPLORE PROGRAMMES
          </a>
        </div>

        {/* Visual Chapter / Video Progress Indicators */}
        <div className="mt-6 sm:mt-8 flex items-center gap-2 z-30">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goToSlide(i)}
              aria-label={`Jump to video ${i + 1}`}
              className={`h-1.5 transition-all duration-500 rounded-none cursor-pointer ${
                i === currentIdx
                  ? "w-8 bg-[#c9f158]"
                  : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
