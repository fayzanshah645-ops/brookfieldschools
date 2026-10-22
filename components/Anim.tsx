"use client";

import { useEffect } from "react";

export default function Anim() {
  useEffect(() => {
    // 1. Assign staggered delay indices to all .reveal-stagger children
    const staggerContainers = document.querySelectorAll(".reveal-stagger");
    staggerContainers.forEach((container) => {
      const children = Array.from(container.children);
      children.forEach((child, index) => {
        (child as HTMLElement).style.setProperty("--stagger-i", index.toString());
      });
    });

    // 2. High-performance, lightweight IntersectionObserver for scroll-revealed elements
    const nodes = Array.from(
      document.querySelectorAll(".reveal, .reveal-stagger, .reveal-fade, .reveal-words")
    );

    if (!nodes.length) return;

    if (!("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    nodes.forEach((n) => io.observe(n));

    // 3. Initial Hero load cascade on page refresh / mount
    const heroElements = document.querySelectorAll(".reveal-hero");
    const loadTimer = setTimeout(() => {
      heroElements.forEach((el) => el.classList.add("is-visible"));
    }, 50);

    return () => {
      clearTimeout(loadTimer);
      io.disconnect();
    };
  }, []);

  return null;
}
