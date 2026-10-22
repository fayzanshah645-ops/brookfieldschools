"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface StatItem {
  value: string;
  title: string;
  note: string;
  img: string;
  alt: string;
}

const statsData: StatItem[] = [
  {
    value: "20+ Programmes & Labs",
    title: "Programmes and Labs",
    note: "Comprehensive learning labs from early years to senior classes",
    img: "/img/06_68c3de73beefd7.053165391757666931.jpg",
    alt: "Brookfield Robotics and Coding Laboratory",
  },
  {
    value: "100% Dedicated Faculty",
    title: "Dedicated Faculty",
    note: "Committed to individualized learner support and character mentorship",
    img: "/img/08_68c3de5e32ae98.503537541757666910.jpg",
    alt: "Brookfield Dedicated Faculty Mentorship",
  },
  {
    value: "120+ Olympiads & Partners",
    title: "Olympiads and Partners",
    note: "Academic partnerships competitive tests and collaborative networks",
    img: "/img/36_10",
    alt: "Brookfield Students Participating in Olympiad Exams",
  },
  {
    value: "520k+ Learning Hours",
    title: "Annual Learning Hours",
    note: "Structured instructional and lab hours delivered annually",
    img: "/img/05_68c3de7ed69047.699973141757666942.jpg",
    alt: "Hands on Discovery and Classroom Hours",
  },
];

// High-speed deterministic hash for random scattered square pixel distribution (no straight lines)
function pseudoRandom(c: number, r: number) {
  const val = Math.sin(c * 37.719 + r * 83.197) * 43758.5453;
  return val - Math.floor(val);
}

function GlowingPixelStatCard({ item }: { item: StatItem }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number | null>(null);

  // Sync canvas size with device pixel ratio
  const syncDimensions = useCallback(() => {
    const card = cardRef.current;
    const canvas = canvasRef.current;
    if (!card || !canvas) return;

    const rect = card.getBoundingClientRect();
    const dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2) : 1;
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
  }, []);

  useEffect(() => {
    syncDimensions();
    window.addEventListener("resize", syncDimensions);
    return () => window.removeEventListener("resize", syncDimensions);
  }, [syncDimensions]);

  // Random Scattered Glowing Pixel Reveal Animation (Runs once on hover to reveal image, then dissolves away)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
    }

    if (!isHovered) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }

    syncDimensions();

    const cw = canvas.width;
    const ch = canvas.height;
    if (cw === 0 || ch === 0) return;

    const dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2) : 1;
    const squareSize = 6 * dpr;
    const gap = 2 * dpr;
    const pitch = squareSize + gap;

    const cols = Math.floor(cw / pitch);
    const rows = Math.floor(ch / pitch);

    const DURATION = 380; // Total transition reveal time in ms
    const startTime = performance.now();

    const animateReveal = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / DURATION);

      ctx.clearRect(0, 0, cw, ch);

      // Iterate through grid and draw scattered glowing square pixels
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const seed = pseudoRandom(c, r);

          // Random scattered lifespan per square pixel (no straight lines!)
          const spawn = seed * 0.45;
          const end = spawn + 0.36;

          if (progress >= spawn && progress <= end) {
            const lifeProg = (progress - spawn) / 0.36; // 0 (birth) to 1 (death)
            const x = c * pitch;
            const y = r * pitch;

            if (lifeProg < 0.22) {
              // Initial burst: Blazing white highlight square with vibrant green glow
              ctx.shadowBlur = 9 * dpr;
              ctx.shadowColor = "#00ff66";
              ctx.fillStyle = "#ffffff";
              ctx.fillRect(x, y, squareSize, squareSize);
            } else if (lifeProg < 0.65) {
              // Core active phase: Vibrant electric neon lime / green (#00ff66 and #c9f158)
              const alpha = 1 - (lifeProg - 0.22) / 0.55;
              ctx.shadowBlur = 8 * dpr;
              ctx.shadowColor = "#00ff66";
              ctx.fillStyle = seed > 0.5 ? "#00ff66" : "#c9f158";
              ctx.fillRect(x, y, squareSize, squareSize);
            } else {
              // Dissolving phase: Fading out to reveal photograph underneath
              const alpha = Math.max(0, 1 - (lifeProg - 0.65) / 0.35);
              ctx.shadowBlur = 4 * dpr;
              ctx.shadowColor = `rgba(0, 255, 102, ${alpha})`;
              ctx.fillStyle = `rgba(0, 255, 102, ${alpha})`;
              ctx.fillRect(x, y, squareSize, squareSize);
            }
          }
        }
      }

      // If transition is still running, request next frame
      if (progress < 1) {
        animFrameRef.current = requestAnimationFrame(animateReveal);
      } else {
        // Complete clean-up: Canvas cleared so photograph is 100% visible and unobstructed
        ctx.clearRect(0, 0, cw, ch);
      }
    };

    animFrameRef.current = requestAnimationFrame(animateReveal);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isHovered, syncDimensions]);

  return (
    <div
      ref={cardRef}
      className="group relative h-[220px] sm:h-[235px] w-full cursor-pointer overflow-hidden border border-[#0b1f12]/15 bg-white transition-all duration-300 hover:border-[#0b1f12] hover:shadow-xl rounded-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered((prev) => !prev)}
      role="button"
      tabIndex={0}
      aria-label={`${item.title} card, hover or tap to reveal photo`}
    >
      {/* BASE FACE: Clean Minimal White Metric Card */}
      <div className="flex h-full flex-col justify-between p-7 bg-white rounded-none transition-colors group-hover:bg-[#fafaf7]">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="font-['Instrument_Sans',sans-serif] text-3xl font-normal text-[#111813]">
              {item.value}
            </span>
            <span className="h-1.5 w-1.5 shrink-0 bg-[#c9f158]" />
          </div>
          <div className="mt-3 font-['Instrument_Sans',sans-serif] text-[20px] font-normal text-[#111813]">
            {item.title}
          </div>
        </div>
        <p className="font-['Nunito',sans-serif] text-[14px] font-normal leading-relaxed text-[#55665b]">
          {item.note}
        </p>
      </div>

      {/* HOVER PHOTO FACE: Fully Visible Authentic School Photo with Scattered Pixel Reveal */}
      <div
        className={`absolute inset-0 z-10 transition-opacity duration-300 rounded-none ${
          isHovered ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Crisp Authentic Photograph: Fully visible when revealed */}
        <img
          src={item.img}
          alt={item.alt}
          className="absolute inset-0 h-full w-full object-cover object-center rounded-none transition-transform duration-700 group-hover:scale-105"
        />

        {/* Transient Scattered Glowing Square Pixel Canvas (Runs during reveal, then dissolves) */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full object-cover rounded-none pointer-events-none z-15"
        />

        {/* Architectural Bottom Gradient Vignette for Crisp Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f12]/95 via-[#0b1f12]/40 to-black/20 rounded-none pointer-events-none z-10" />

        {/* Revealed Content Details over the Photograph */}
        <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end text-white z-20 pointer-events-none">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 shrink-0 bg-[#c9f158]" />
            <span className="font-['Nunito',sans-serif] text-[11px] font-normal uppercase tracking-widest text-[#c9f158]">
              {item.value}
            </span>
          </div>

          <div className="mt-1 font-['Instrument_Sans',sans-serif] text-[18px] font-normal text-white">
            {item.title}
          </div>

          <p className="mt-1 font-['Nunito',sans-serif] text-[13px] font-normal text-white/90 line-clamp-2">
            {item.note}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function StatFlipBoard() {
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
      {statsData.map((item) => (
        <GlowingPixelStatCard key={item.title} item={item} />
      ))}
    </div>
  );
}
