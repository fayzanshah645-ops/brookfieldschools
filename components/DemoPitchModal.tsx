"use client";

import { useState, useEffect } from "react";
import { X, Lock } from "lucide-react";

export function triggerDemoModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-demo-pitch-modal"));
  }
}

export default function DemoPitchModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // 1. Listen for explicit custom trigger events
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-demo-pitch-modal", handleOpen);

    // 2. Global click interceptor for demo CTA buttons
    const handleGlobalClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(
        "a, button"
      ) as HTMLElement | null;

      if (!target) return;

      const href = target.getAttribute("href");
      const isCtaButton =
        target.classList.contains("btn-cta") ||
        target.classList.contains("btn-secondary") ||
        target.getAttribute("data-demo-cta") === "true";
      const isTargetHash =
        href === "#apply" ||
        href === "#login" ||
        href === "#programs" ||
        href === "#contact";

      // If it's a CTA action or dummy submission, intercept and show the pitch modal
      if (
        (isCtaButton || isTargetHash) &&
        !target.closest("#demo-pitch-dialog") &&
        !target.closest("nav") // let nav links navigate normally
      ) {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    // 3. Form submit interceptor for the admission enquiry form
    const handleFormSubmit = (e: SubmitEvent) => {
      e.preventDefault();
      setIsOpen(true);
    };

    document.addEventListener("click", handleGlobalClick, { capture: true });
    document.addEventListener("submit", handleFormSubmit, { capture: true });

    // 4. Escape key listener to close modal
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("open-demo-pitch-modal", handleOpen);
      document.removeEventListener("click", handleGlobalClick, { capture: true });
      document.removeEventListener("submit", handleFormSubmit, { capture: true });
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (!isOpen) return null;

  const whatsappUrl =
    "https://wa.me/917006935704?text=" +
    encodeURIComponent(
      "Hello Fayzan, I reviewed the Brookfield International School redesign demo and would like to discuss taking this project forward."
    );

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={() => setIsOpen(false)}
    >
      {/* Modal Dialog Card with Sharp Corners and Architectural Styling */}
      <div
        id="demo-pitch-dialog"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl border border-[#c9f158]/40 bg-[#0b1f12] p-6 sm:p-10 text-white shadow-2xl shadow-black/80 rounded-none overflow-hidden"
      >
        {/* Subtle decorative glow in top corner */}
        <div className="absolute -top-12 -right-12 h-36 w-36 rounded-full bg-[#c9f158]/10 blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close dialog"
          className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-none border border-white/20 text-white/70 transition-colors hover:border-[#c9f158] hover:bg-[#c9f158] hover:text-[#0b1f12] cursor-pointer"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Top Eyebrow Tag */}
        <div className="inline-flex items-center gap-2 border border-[#c9f158]/40 bg-transparent px-3 py-1 text-[11px] font-normal uppercase tracking-widest text-[#c9f158] rounded-none">
          <Lock className="h-3 w-3 text-white shrink-0" strokeWidth={2.2} />
          <span>Demo Preview</span>
        </div>

        {/* Headline */}
        <h2 className="mt-4 font-['Instrument_Sans',sans-serif] text-[26px] sm:text-[30px] font-normal leading-tight text-white tracking-tight">
          Designed & Engineered by Fayzan Shah
        </h2>

        {/* Option 2 Copy Text */}
        <div className="mt-4 space-y-3 font-['Nunito',sans-serif] text-[13.5px] sm:text-[14px] font-normal leading-relaxed text-white/80">
          <p>
            You are viewing an interactive design demonstration built specifically
            for the leadership of{" "}
            <span className="text-white font-medium">
              Brookfield International School
            </span>
            .
          </p>
          <p>
            Every animation, layout rhythm, and typography choice has been
            tailored to reflect Brookfield’s ethos — where traditional values
            meet cutting-edge modern innovation.
          </p>
          <p>
            All application forms, parent portals, and custom modules can be fully
            integrated for production deployment.
          </p>
          <p className="pt-2 text-white font-normal text-[14px]">
            Let’s turn this prototype into your school’s official new digital face:
          </p>
        </div>

        {/* Only 1 Dedicated WhatsApp CTA Button */}
        <div className="mt-6 pt-5 border-t border-white/10">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full items-center justify-center gap-3 bg-[#c9f158] px-6 py-4 font-['Nunito',sans-serif] text-[15px] sm:text-[16px] font-medium tracking-wide text-[#0b1f12] transition-all hover:bg-white hover:text-[#0b1f12] rounded-none cursor-pointer text-center"
          >
            {/* Official WhatsApp SVG Icon */}
            <svg
              className="h-5 w-5 fill-current transition-transform group-hover:scale-110 shrink-0"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            <span className="font-semibold">+91 7006935704</span>
          </a>

          {/* Dismiss link */}
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="mt-3 w-full text-center font-['Nunito',sans-serif] text-[12px] uppercase tracking-wider text-white/50 hover:text-white transition-colors cursor-pointer py-1"
          >
            Continue Exploring Demo
          </button>
        </div>
      </div>
    </div>
  );
}
