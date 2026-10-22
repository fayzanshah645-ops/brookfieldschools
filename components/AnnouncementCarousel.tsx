"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface Announcement {
  id: string;
  day: string;
  month: string;
  year: string;
  title: string;
  desc: string;
  classes: string;
  img: string;
  alt: string;
}

const announcementsData: Announcement[] = [
  {
    id: "01",
    day: "27",
    month: "August",
    year: "2026",
    title: "BOT 03 and BSB 02 Olympiad",
    desc: "BOT 03 and BSB 02 examinations will be conducted on 5th of September 2026 across primary and middle school cohorts.",
    classes: "Classes: 1st Daisy to 5th Daffodils",
    img: "/img/36_10",
    alt: "Students participating in Brookfield Olympiad Test",
  },
  {
    id: "02",
    day: "28",
    month: "June",
    year: "2026",
    title: "BOT 02 Results Declared",
    desc: "Official scorecards and performance summaries for BOT 02 have been released and uploaded to the student portal.",
    classes: "Classes: 1st Daisy to 5th Daffodils",
    img: "/img/33_6",
    alt: "Academic tournament awards and results announcement",
  },
  {
    id: "03",
    day: "04",
    month: "June",
    year: "2026",
    title: "Brookfield Olympiad Test BOT 02",
    desc: "The second round of Brookfield Olympiad Test will be conducted on 22nd June 2026 focusing on analytical reasoning.",
    classes: "Classes: All classes from 1st Daisy to 5th Daffodils",
    img: "/img/about_student.jpg",
    alt: "Brookfield students preparing for national assessments",
  },
  {
    id: "04",
    day: "31",
    month: "May",
    year: "2026",
    title: "BOT 01 Examination Results",
    desc: "Results for BOT 01 held on 18th of May 2026 are now available for review and parental signature at the administrative desk.",
    classes: "Classes: 1st Daffodils, 1st Daisy, 3rd Daisy, 5th Daisy",
    img: "/img/31_2",
    alt: "Orientation day and annual academic evaluation session",
  },
];

// 6 repeating sets (24 cards) for infinite, mathematically seamless continuous gliding
const infiniteLoopCards = [
  ...announcementsData,
  ...announcementsData,
  ...announcementsData,
  ...announcementsData,
  ...announcementsData,
  ...announcementsData,
];

export default function AnnouncementCarousel() {
  const [displayIndex, setDisplayIndex] = useState(1);
  const [isInView, setIsInView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const positionRef = useRef(0);
  const targetRef = useRef(0);
  const isSlidingRef = useRef(false);
  const lastReportedIndex = useRef(1);
  const rafId = useRef<number | null>(null);

  // Responsive step calculation (card width + gap)
  const getStep = useCallback(() => {
    if (typeof window === "undefined") return 424;
    if (window.innerWidth < 640) return 324; // 300px + 24px gap
    if (window.innerWidth < 1024) return 384; // 360px + 24px gap
    return 424; // 400px + 24px gap
  }, []);

  // IntersectionObserver: Runs movement only when user arrives at this section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Continuous Non-Stop Gliding Loop (like top strip) with Smooth Manual Arrow Nudges
  useEffect(() => {
    const totalItems = 4;
    const speed = 1.4; // Brisk and fluid speed (approx 85px/sec)

    const tick = () => {
      const step = getStep();
      const cycleWidth = totalItems * step;

      if (isInView) {
        if (isSlidingRef.current) {
          // Smooth deceleration glide towards target on arrow button click
          const diff = targetRef.current - positionRef.current;
          if (Math.abs(diff) < 0.5) {
            positionRef.current = targetRef.current;
            isSlidingRef.current = false;
          } else {
            positionRef.current += diff * 0.12;
          }
        } else if (!isHovered) {
          // Continuous loop movement like top strip (not stops, pauses only when hovered)
          positionRef.current += speed;
          targetRef.current = positionRef.current;
        }

        // Seamless wrap around single cycle period
        if (positionRef.current >= cycleWidth) {
          positionRef.current -= cycleWidth;
          targetRef.current -= cycleWidth;
        } else if (positionRef.current < 0) {
          positionRef.current += cycleWidth;
          targetRef.current += cycleWidth;
        }

        // Apply hardware-accelerated GPU translation
        if (trackRef.current) {
          trackRef.current.style.transform = `translate3d(-${positionRef.current}px, 0, 0)`;
        }

        // Dynamically update the 1/4 counter based on leading visible card
        const currentActive =
          ((Math.floor((positionRef.current + step * 0.25) / step) % totalItems) +
            totalItems) %
            totalItems +
          1;

        if (currentActive !== lastReportedIndex.current) {
          lastReportedIndex.current = currentActive;
          setDisplayIndex(currentActive);
        }
      }

      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isInView, isHovered, getStep]);

  // Arrow button handlers: smoothly nudge forward or backward by one card
  const handleNext = () => {
    const step = getStep();
    targetRef.current = positionRef.current + step;
    isSlidingRef.current = true;
  };

  const handlePrev = () => {
    const step = getStep();
    targetRef.current = positionRef.current - step;
    isSlidingRef.current = true;
  };

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Top Bar: Minimal 1/4 Counter on the Left & Minimal Arrow Buttons on the Right */}
      <div className="mb-3 flex items-center justify-between">
        <span className="font-['Nunito',sans-serif] text-[14px] font-normal tracking-wider text-[#55665b]">
          {`${displayIndex}/4`}
        </span>

        {/* Minimal Left & Right Arrow Navigation Controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrev}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex h-9 w-9 items-center justify-center border border-[#0b1f12]/20 bg-white text-[#0b1f12] transition-colors hover:border-[#0b1f12] hover:bg-[#0b1f12] hover:text-[#c9f158] rounded-none cursor-pointer"
            aria-label="Previous announcement"
          >
            ←
          </button>
          <button
            type="button"
            onClick={handleNext}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex h-9 w-9 items-center justify-center border border-[#0b1f12]/20 bg-white text-[#0b1f12] transition-colors hover:border-[#0b1f12] hover:bg-[#0b1f12] hover:text-[#c9f158] rounded-none cursor-pointer"
            aria-label="Next announcement"
          >
            →
          </button>
        </div>
      </div>

      {/* Infinite Seamless Continuous Track: Moves non-stop like top strip, pauses on card hover */}
      <div className="overflow-hidden w-full py-2">
        <div
          ref={trackRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
          className="flex gap-6 will-change-transform"
        >
          {infiniteLoopCards.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[300px] sm:w-[360px] lg:w-[400px] shrink-0"
            >
              <article className="group flex h-full flex-col justify-between border border-[#0b1f12]/15 bg-white rounded-none transition-all duration-300 hover:border-[#0b1f12] hover:shadow-xl">
                {/* Pure Photographic Image Header: Strictly Zero Badges */}
                <div className="relative h-52 w-full overflow-hidden bg-[#0b1f12] rounded-none">
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105 rounded-none"
                  />
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="font-['Nunito',sans-serif] text-[13px] font-normal text-[#1e4e18]">
                      {item.day} {item.month} {item.year}
                    </div>

                    <h3 className="mt-1.5 font-['Instrument_Sans',sans-serif] text-[20px] font-normal leading-snug text-[#111813] transition-colors group-hover:text-[#1e4e18]">
                      {item.title}
                    </h3>

                    <p className="mt-2.5 font-['Nunito',sans-serif] text-[14px] font-normal leading-relaxed text-[#55665b]">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#0b1f12]/10">
                    <span className="block font-['Nunito',sans-serif] text-[12px] font-normal text-[#111813]/75">
                      {item.classes}
                    </span>

                    <a
                      href="#contact"
                      className="btn-cta mt-4 !w-full rounded-none uppercase tracking-wider text-center"
                    >
                      CIRCULAR DETAILS →
                    </a>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
