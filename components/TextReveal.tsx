"use client";

import React, { useEffect, useRef, useState } from "react";

interface TextRevealProps {
  children?: React.ReactNode;
  text?: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "div" | "span";
  staggerMs?: number;
  baseDelayMs?: number;
  immediate?: boolean;
}

export default function TextReveal({
  children,
  text,
  className = "",
  as: Component = "div",
  staggerMs = 85,
  baseDelayMs = 80,
  immediate = false,
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (immediate) {
      // Trigger word animation on next tick after initial mount for page load / refresh
      const timer = setTimeout(() => setIsVisible(true), 50);
      return () => clearTimeout(timer);
    }

    const el = containerRef.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [immediate]);

  const content = text || (typeof children === "string" ? children : "");

  if (text || typeof children === "string") {
    const words = content.trim().split(/\s+/);

    return (
      <Component
        ref={containerRef as any}
        className={`reveal-words-container ${isVisible ? "is-visible" : ""} ${className}`}
      >
        {words.map((word, index) => (
          <span key={index} className="word-mask">
            <span
              className="word-inner"
              style={{
                transitionDelay: `${baseDelayMs + index * staggerMs}ms`,
              }}
            >
              {word}
            </span>
            {index < words.length - 1 && <span className="word-spacer">&nbsp;</span>}
          </span>
        ))}
      </Component>
    );
  }

  return (
    <Component
      ref={containerRef as any}
      className={`reveal-text ${isVisible ? "is-visible" : ""} ${className}`}
      style={{
        transitionDelay: `${baseDelayMs}ms`,
      }}
    >
      {children}
    </Component>
  );
}
