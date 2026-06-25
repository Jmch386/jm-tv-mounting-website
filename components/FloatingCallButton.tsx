"use client";

import { Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { brand } from "@/lib/content";

export function FloatingCallButton() {
  const [showMobileButton, setShowMobileButton] = useState(false);
  const [formInView, setFormInView] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setShowMobileButton(window.innerWidth >= 640 || window.scrollY > 520);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);
    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  useEffect(() => {
    const formSections = Array.from(document.querySelectorAll("[data-hide-floating-call]"));

    if (!formSections.length) {
      return;
    }

    const isCompactViewport = () => window.innerWidth <= 768;

    const observer = new IntersectionObserver(
      (entries) => {
        setFormInView(entries.some((entry) => entry.isIntersecting) && isCompactViewport());
      },
      { rootMargin: "-18% 0px -18% 0px", threshold: 0 }
    );

    const updateForResize = () => {
      if (!isCompactViewport()) {
        setFormInView(false);
      }
    };

    formSections.forEach((section) => observer.observe(section));
    window.addEventListener("resize", updateForResize);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateForResize);
    };
  }, []);

  return (
    <a
      href={brand.phoneHref}
      className={`fixed bottom-3 left-4 right-4 z-50 flex min-h-12 items-center justify-center gap-3 rounded-lg bg-neon px-5 py-3 text-sm font-extrabold text-white shadow-glow transition duration-200 hover:-translate-y-0.5 hover:bg-brandHover sm:bottom-5 sm:left-auto sm:right-5 sm:min-h-14 sm:w-auto ${showMobileButton && !formInView ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"}`}
      aria-label={`Call JM TV Mounting at ${brand.phone}`}
    >
      <Phone size={19} />
      Call Now: {brand.phone}
    </a>
  );
}
