"use client";

import { useState, useRef, useEffect } from "react";

const videoPlaylist = [
  {
    src: "/Main%20HERO%20Bg%201.mp4",
  },
  {
    src: "/kids%20playing.mp4",
  },
  {
    src: "/kids%20skills.mp4",
  },
];

export default function HeroVideoPlayer() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const videoRefs = [
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
  ];

  // Play current video when active index changes
  useEffect(() => {
    videoRefs.forEach((ref) => {
      const v = ref.current;
      if (v) {
        v.muted = true;
        v.defaultMuted = true;
        v.playsInline = true;
        v.setAttribute("muted", "");
        v.setAttribute("playsinline", "");
        v.setAttribute("webkit-playsinline", "true");
      }
    });

    const activeVideo = videoRefs[currentIdx].current;
    if (activeVideo) {
      activeVideo.muted = true;
      activeVideo.defaultMuted = true;
      activeVideo.currentTime = 0;
      activeVideo.play().catch(() => {});
    }

    // Preload next upcoming video in the circular playlist
    const nextIdx = (currentIdx + 1) % videoPlaylist.length;
    const nextVideo = videoRefs[nextIdx].current;
    if (nextVideo && nextVideo.preload !== "auto") {
      nextVideo.preload = "auto";
    }
  }, [currentIdx]);

  const handleEnded = (idx: number) => {
    if (idx === currentIdx) {
      setCurrentIdx((prev) => (prev + 1) % videoPlaylist.length);
    }
  };

  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden bg-[#0b1f12]">
      {videoPlaylist.map((item, idx) => {
        const isActive = idx === currentIdx;
        return (
          <video
            key={item.src}
            ref={videoRefs[idx]}
            autoPlay
            muted
            loop={false}
            playsInline
            controls={false}
            disablePictureInPicture
            disableRemotePlayback
            preload="auto"
            onLoadedData={(e) => {
              const v = e.currentTarget;
              v.muted = true;
              v.defaultMuted = true;
              if (idx === currentIdx && v.paused) {
                v.play().catch(() => {});
              }
            }}
            onCanPlay={(e) => {
              const v = e.currentTarget;
              v.muted = true;
              v.defaultMuted = true;
              if (idx === currentIdx && v.paused) {
                v.play().catch(() => {});
              }
            }}
            onEnded={() => handleEnded(idx)}
            className={`pointer-events-none absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <source src={item.src} type="video/mp4" />
          </video>
        );
      })}

      {/* Subtle, soft cinematic vignette preserving full video visibility and opacity */}
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/45 via-black/25 to-[#0b1f12]/80 pointer-events-none" />
    </div>
  );
}
