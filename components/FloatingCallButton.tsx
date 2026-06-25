"use client";

import { Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { brand } from "@/lib/content";

export function FloatingCallButton() {
  const [showMobileButton, setShowMobileButton] = useState(false);

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

  return (
    <a
      href={brand.phoneHref}
      className={`fixed bottom-3 left-4 right-4 z-50 flex min-h-12 items-center justify-center gap-3 rounded-lg bg-neon px-5 py-3 text-sm font-extrabold text-ink shadow-glow transition duration-200 hover:-translate-y-0.5 sm:bottom-5 sm:left-auto sm:right-5 sm:min-h-14 sm:w-auto ${showMobileButton ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0 sm:pointer-events-auto sm:translate-y-0 sm:opacity-100"}`}
      aria-label={`Call JM TV Mounting at ${brand.phone}`}
    >
      <Phone size={19} />
      Call Now: {brand.phone}
    </a>
  );
}
